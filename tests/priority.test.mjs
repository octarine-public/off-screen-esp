import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"
import { runInNewContext } from "node:vm"
import ts from "typescript"

import { CIndicatorPriority } from "../src/offscreen/priority.ts"

function target(key, distance) {
	return { key, distanceSqr: distance ** 2 }
}

function keys(entries) {
	return Array.from(entries, entry => entry.key)
}

test("starts with the closest targets and breaks equal distances consistently", () => {
	const priority = new CIndicatorPriority()
	const entries = [target(3, 3000), target(2, 1000), target(1, 1000)]
	assert.deepEqual(keys(priority.Update(entries)), [1, 2, 3])
})

test("nearby targets keep their order through distance crossings and input reordering", () => {
	const priority = new CIndicatorPriority()
	const front = target(1, 3000)
	const back = target(2, 3020)
	priority.Update([front, back])
	for (let frame = 0; frame < 600; frame++) {
		const distance = 1000 + frame * 10
		front.distanceSqr = (distance + Math.sin(frame) * 40) ** 2
		back.distanceSqr = (distance - Math.sin(frame) * 40) ** 2
		assert.deepEqual(keys(priority.Update([back, front])), [1, 2])
	}
})

test("a clearly closer target takes priority and keeps it on a small reversal", () => {
	const priority = new CIndicatorPriority()
	const front = target(1, 3000)
	const back = target(2, 3100)
	priority.Update([front, back])
	back.distanceSqr = 2600 ** 2
	assert.deepEqual(keys(priority.Update([front, back])), [2, 1])
	front.distanceSqr = 2500 ** 2
	assert.deepEqual(keys(priority.Update([front, back])), [2, 1])
	front.distanceSqr = 2200 ** 2
	assert.deepEqual(keys(priority.Update([front, back])), [1, 2])
})

test("uses an absolute margin nearby and a relative margin at long range", () => {
	for (const [distance, held, promoted] of [
		[400, 320, 280],
		[8000, 7300, 7150]
	]) {
		const priority = new CIndicatorPriority()
		const front = target(1, distance)
		const back = target(2, distance + 10)
		priority.Update([front, back])
		back.distanceSqr = held ** 2
		assert.deepEqual(keys(priority.Update([front, back])), [1, 2])
		back.distanceSqr = promoted ** 2
		assert.deepEqual(keys(priority.Update([front, back])), [2, 1])
	}
})

test("handles multiple promotions, new targets, removal and reset", () => {
	const priority = new CIndicatorPriority()
	const entries = [target(1, 1000), target(2, 2000), target(3, 3000)]
	priority.Update(entries)
	entries[2].distanceSqr = 500 ** 2
	assert.deepEqual(keys(priority.Update(entries)), [3, 1, 2])
	const newcomer = target(4, 300)
	assert.deepEqual(keys(priority.Update([...entries, newcomer])), [4, 3, 1, 2])
	assert.deepEqual(keys(priority.Update([entries[1], newcomer])), [4, 2])
	newcomer.distanceSqr = 2050 ** 2
	assert.deepEqual(keys(priority.Update([entries[1], newcomer])), [4, 2])
	priority.Clear()
	assert.deepEqual(keys(priority.Update([entries[1], newcomer])), [2, 4])
	assert.deepEqual(keys(priority.Update([])), [])
})

/** Runs one module of the indicators with the imports and globals it is handed. */
function transpiled(name, { imports = {}, ...globals }) {
	const source = readFileSync(new URL(`../src/offscreen/${name}`, import.meta.url), "utf8")
	const compiled = ts.transpileModule(source, {
		compilerOptions: { module: ts.ModuleKind.CommonJS }
	}).outputText
	const exports = {}
	runInNewContext(compiled, {
		...globals,
		exports,
		require: module => {
			assert.ok(module in imports, `unexpected import: ${module}`)
			return imports[module]
		}
	})
	return exports
}

function trackedStore() {
	let now = 1000
	class Unit {
		constructor(index, distance) {
			this.Index = index
			this.Handle = index
			this.distance = distance
			this.IsValid = true
			this.IsAlive = true
			this.IsVisible = true
			this.IsIllusion = false
			this.NetworkedPosition = { DistanceSqr2D: () => this.distance ** 2 }
		}
		IsEnemy() {
			return true
		}
	}
	class Hero extends Unit {}
	class SpiritBear extends Unit {}
	const target = transpiled("target.ts", {})
	const exports = transpiled("store.ts", {
		Hero,
		SpiritBear,
		hrtime: () => now,
		imports: {
			"./menu": { EVisibilityFilter: { All: 0, VisibleOnly: 1, HiddenOnly: 2 } },
			"./priority": { CIndicatorPriority },
			"./target": target
		}
	})
	return {
		store: exports,
		target,
		hero: (index, distance) => new Hero(index, distance),
		bear: (index, distance) => new SpiritBear(index, distance),
		unit: (index, distance) => new Unit(index, distance),
		refresh(limit = 1, filter = 0) {
			now += 100
			return exports.ActiveHeroes({}, 20000, limit, filter)
		}
	}
}

test("the indicator cap stays stable and deselects a displaced hero for fade-out", () => {
	const fixture = trackedStore()
	const front = fixture.hero(1, 3000)
	const back = fixture.hero(2, 3100)
	fixture.store.TrackEntity(front)
	fixture.store.TrackEntity(back)
	const previous = fixture.refresh()[0]
	assert.equal(previous.selected, true)
	for (let tick = 0; tick < 40; tick++) {
		back.distance = 3000 + Math.sin(tick) * 50
		assert.deepEqual(keys(fixture.refresh()), [1])
	}
	back.distance = 2600
	const replacement = fixture.refresh()[0]
	assert.equal(replacement.key, 2)
	assert.equal(previous.selected, false)
	assert.equal(replacement.selected, true)
	back.IsAlive = false
	assert.deepEqual(keys(fixture.refresh()), [1])
	assert.equal(replacement.selected, false)
})

test("limit changes and clearing tracking invalidate the cached selection", () => {
	const fixture = trackedStore()
	fixture.store.TrackEntity(fixture.hero(1, 3000))
	fixture.store.TrackEntity(fixture.hero(2, 3100))
	const selected = Array.from(fixture.refresh(2))
	assert.equal(selected.length, 2)
	assert.deepEqual(keys(fixture.store.ActiveHeroes({}, 20000, 1, 0)), [1])
	assert.equal(selected[1].selected, false)
	fixture.store.ClearActive()
	assert.ok(selected.every(entry => !entry.selected && entry.alpha === 0))
	assert.deepEqual(keys(fixture.refresh(2)), [1, 2])
})

test("tracks heroes and spirit bears, skips illusions and honours the visibility filter", () => {
	const fixture = trackedStore()
	const hero = fixture.hero(1, 1000)
	const bear = fixture.bear(2, 1200)
	const creep = fixture.unit(3, 500)
	const illusion = fixture.hero(4, 400)
	illusion.IsIllusion = true
	for (const entity of [hero, bear, creep, illusion]) {
		fixture.store.TrackEntity(entity)
	}
	assert.deepEqual(keys(fixture.refresh(6)), [1, 2])
	bear.IsVisible = false
	assert.deepEqual(keys(fixture.refresh(6, 1)), [1])
	assert.deepEqual(keys(fixture.refresh(6, 2)), [2])
	assert.deepEqual(keys(fixture.refresh(6, 0)), [1, 2])
	fixture.store.UntrackEntity(hero)
	assert.deepEqual(keys(fixture.refresh(6, 0)), [2])
	assert.equal(fixture.target.DistanceText(fixture.refresh(6, 0)[0], 1234 ** 2), "1234")
})
