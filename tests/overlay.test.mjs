import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"
import { runInNewContext } from "node:vm"
import ts from "typescript"

import * as collision from "../src/offscreen/collision.ts"
import * as priority from "../src/offscreen/priority.ts"
import * as ring from "../src/offscreen/ring.ts"

function load(name, imports, globals) {
	const exports = {}
	const compiled = ts.transpileModule(
		readFileSync(new URL(`../src/offscreen/${name}`, import.meta.url), "utf8"),
		{ compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.React } }
	).outputText
	runInNewContext(compiled, {
		...globals,
		exports,
		require: name => {
			assert.ok(name in imports, `unexpected import: ${name}`)
			return imports[name]
		}
	})
	return exports
}

function fixture(objectives = () => [], capShift = 0) {
	let now = 1000
	let adapter
	const frames = new Map()
	const menu = Object.fromEntries(
		Object.entries({
			State: true,
			Distance: 8000,
			MaxIndicators: 6,
			IndicatorSize: 52,
			ShowDistance: true,
			ShowHealth: true,
			DistanceFade: 100,
			FadeDistance: 5000,
			HiddenOpacity: 72,
			WarningDistance: 1500,
			NearbyWarning: true,
			EdgeInset: 78,
			FocusRadius: 61,
			CircleFocus: false,
			RingWidth: 2,
			Runes: true,
			Wisdom: true,
			Lotus: true,
			MinLotuses: 1,
			ObjectiveDistance: 8000,
			ObjectiveSize: 80
		}).map(([key, value]) => [key, { value }])
	)
	menu.Placement = { SelectedID: 1 }
	menu.Overlap = { SelectedID: 0 }
	menu.Visibility = { SelectedID: 0 }
	menu.ImageType = { SelectedID: 0 }
	menu.DistancePosition = { SelectedID: 0 }
	menu.ColorMode = { SelectedID: 0 }
	menu.IndicatorColor = {}
	menu.WarningColor = {}
	menu.WisdomColor = { css: "#b084ff" }
	menu.LotusColor = { css: "#ee96cd" }
	const disabledRunes = new Set()
	menu.RuneTypes = { IsEnabled: value => !disabledRunes.has(value) }
	menu.Text = {
		FontSize: { value: 11 },
		Offset: { value: 6 },
		Color: {},
		FontWeight: () => 600,
		Effect: () => "none",
		FontFamily: () => "Stratum2",
		CapShift: () => capShift
	}
	class Unit {
		constructor(index) {
			this.Index = index
			this.Handle = index
			this.IsValid = true
			this.IsAlive = true
			this.IsVisible = true
			this.IsIllusion = false
			this.HP = this.MaxHP = 100
			this.PlayerID = index
			this.OwnerPlayerID = -1
			this.Team = 3
			this.NetworkedPosition = { DistanceSqr2D: () => (3000 + index * 10) ** 2 }
			this.VisualPosition = { x: 2500, y: 540, z: 0 }
			this.Buffs = []
		}
		IsEnemy() {
			return true
		}
		TexturePath(small) {
			return `hero-${this.Index}-${small ? "icon" : "portrait"}`
		}
	}
	class Hero extends Unit {}
	class SpiritBear extends Unit {}
	class Vector2 {
		constructor() {
			this.x = 0
			this.y = 0
		}
	}
	/** A thing on the map an objective indicator points at: it stands, it does not walk. */
	class Thing {
		constructor(index, distance, x = 2500, y = 300) {
			this.Index = index
			this.Handle = index
			this.IsValid = true
			this.IsVisible = true
			this.Position = { x, y, z: 0, DistanceSqr2D: () => distance ** 2 }
			this.buffs = new Map()
		}
		GetBuffByName(name) {
			return this.buffs.get(name)
		}
	}
	class Rune extends Thing {
		Type = 1
	}
	class XPFountain extends Thing {}
	class LotusPool extends Thing {}
	const heroes = [new Hero(1), new Hero(2), new SpiritBear(3)]
	const things = objectives({ Rune, XPFountain, LotusPool, heroes })
	const entities = [...heroes, ...things]
	const hud = { minimap: () => false, lowerHud: () => false }
	const imports = {
		"./collision": collision,
		"./priority": priority,
		"./ring": ring,
		"./menu": {
			OffscreenConfig: menu,
			EPlacementMode: { SafeEdge: 0, FocusRing: 1 },
			EOverlapMode: { StablePriority: 0, Collision: 1 },
			EVisibilityFilter: { All: 0, VisibleOnly: 1, HiddenOnly: 2 },
			EImageType: { Portrait: 0, Icon: 1 },
			EColorMode: { Player: 0, Custom: 1 },
			ELabelPosition: { OppositeArrow: 0, Below: 1, Inside: 2 }
		}
	}
	const globals = {
		hrtime: () => now,
		Hero,
		SpiritBear,
		Vector2,
		EntityManager: {
			AllEntities: entities,
			GetEntitiesByClass: ctor => entities.filter(entity => entity instanceof ctor)
		},
		Unit,
		Rune,
		XPFountain,
		LotusPool,
		DOTA_RUNES: {
			DOTA_RUNE_DOUBLEDAMAGE: 0,
			DOTA_RUNE_HASTE: 1,
			DOTA_RUNE_ILLUSION: 2,
			DOTA_RUNE_INVISIBILITY: 3,
			DOTA_RUNE_REGENERATION: 4,
			DOTA_RUNE_BOUNTY: 5,
			DOTA_RUNE_ARCANE: 6,
			DOTA_RUNE_WATER: 7,
			DOTA_RUNE_XP: 8,
			DOTA_RUNE_SHIELD: 9
		},
		ImageData: { GetRuneTexture: name => `rune-${name}` },
		PathData: { ImagePath: "panorama/images" },
		CameraSDK: { Position: { x: 0, y: 0, z: 0 } },
		RendererSDK: { ScreenToWorld: () => ({ x: 0, y: 0, z: 0 }) },
		GUIInfo: {
			ContainsMiniMap: probe => hud.minimap(probe),
			ContainsLowerHUD: probe => hud.lowerHud(probe)
		},
		Source2SDK: {
			Projection: {
				BeginFrame() {},
				WorldToScreenXYZ(x, y, _z, out) {
					out[0] = x
					out[1] = y
					return true
				}
			}
		},
		EventsSDK: { on() {} },
		MenuSDK: {
			RegisterWorldOverlay: (_key, value) => {
				adapter = value
			},
			ViewportWidth: () => 1920,
			ViewportHeight: () => 1080,
			ScaleMetric: (_metric, value) => value,
			TextWidthPx: text => text.length * 7,
			Theme: {
				PaletteEpoch: 0,
				FontScale: 1,
				RadiusScale: 1,
				ValueOf: () => "#ffffff"
			}
		}
	}
	imports["./target"] = load("target.ts", imports, globals)
	imports["./objectives"] = load("objectives.ts", imports, globals)
	imports["./store"] = load("store.ts", imports, globals)
	imports["./geometry"] = load("geometry.ts", imports, globals)
	imports["./label"] = load("label.ts", imports, globals)
	imports["./guide"] = {}
	imports["../lib/gate"] = { CanDraw: () => true }
	imports["../lib/colors"] = { PlayerColorCss: unit => `player-${unit.Index}` }
	imports["../lib/paint"] = { PickerColor: picker => picker.css ?? "#ffffff" }
	imports["./overlay"] = {
		UpdateIndicator: (handle, dress, frame) =>
			frames.set(handle.key, { ...frame, dress: { ...dress } })
	}
	load("index.tsx", imports, globals)
	return {
		menu,
		heroes,
		things,
		disabledRunes,
		objectives: imports["./objectives"],
		hud,
		tick() {
			now += 16
			frames.clear()
			const entries = adapter.Items()
			if (adapter.Begin()) {
				for (const entry of entries) {
					adapter.Update(entry, { key: entry.key })
				}
			}
			return { entries, frames }
		}
	}
}

test("the live adapter switches collision mode and renders the prepared positions", () => {
	const overlay = fixture()
	let result = overlay.tick()
	assert.equal(result.frames.size, 3)
	const original = result.frames.get(1)
	assert.equal(result.frames.get(2).x, original.x)
	assert.equal(result.frames.get(2).y, original.y)
	overlay.menu.Overlap.SelectedID = 1
	result = overlay.tick()
	assert.equal(result.frames.size, 3)
	assert.ok(result.entries.some(entry => entry.collisionOffset !== 0))
	for (const entry of result.entries) {
		const frame = result.frames.get(entry.key)
		assert.equal(frame.x, entry.x)
		assert.equal(frame.y, entry.y)
		assert.equal(frame.directionX, original.directionX)
		assert.equal(frame.directionY, original.directionY)
		assert.equal(frame.angle, original.angle)
		assert.equal(frame.distance, `${3000 + entry.key * 10}`)
		assert.equal(frame.icon, `hero-${entry.key}-portrait`)
		assert.equal(frame.baseColor, `player-${entry.key}`)
	}
	overlay.menu.Overlap.SelectedID = 0
	result = overlay.tick()
	assert.ok(result.entries.every(entry => entry.collisionOffset === 0))
	assert.ok(
		[...result.frames.values()].every(
			frame => frame.x === original.x && frame.y === original.y
		)
	)
	overlay.menu.Overlap.SelectedID = 1
	overlay.heroes[0].VisualPosition = { x: 960, y: 540, z: 0 }
	for (let tick = 0; tick < 16; tick++) {
		result = overlay.tick()
	}
	assert.equal(result.frames.has(1), false)
	assert.equal(result.frames.has(2), true)
	assert.equal(result.frames.has(3), true)
	overlay.menu.State.value = false
	assert.equal(overlay.tick().frames.size, 0)
})

test("image type, colour mode and the visibility filter reach the frames", () => {
	const overlay = fixture()
	overlay.menu.ImageType.SelectedID = 1
	overlay.menu.ColorMode.SelectedID = 1
	let result = overlay.tick()
	for (const frame of result.frames.values()) {
		assert.ok(frame.icon.endsWith("-icon"))
		assert.equal(frame.baseColor, "#ffffff")
		assert.equal(frame.warning, false)
	}
	overlay.menu.WarningDistance.value = 3015
	result = overlay.tick()
	assert.equal(result.frames.get(1).warning, true)
	assert.equal(result.frames.get(2).warning, false)
	overlay.heroes[1].IsVisible = false
	overlay.menu.Visibility.SelectedID = 1
	for (let tick = 0; tick < 16; tick++) {
		result = overlay.tick()
	}
	assert.equal(result.frames.has(1), true)
	assert.equal(result.frames.has(2), false)
	overlay.menu.Visibility.SelectedID = 2
	for (let tick = 0; tick < 16; tick++) {
		result = overlay.tick()
	}
	assert.equal(result.frames.has(1), false)
	assert.equal(result.frames.has(2), true)
	assert.ok(result.frames.get(2).opacity < 1)
})

test("an enemy under the minimap or the lower HUD counts as off-screen", () => {
	const overlay = fixture()
	overlay.heroes[0].VisualPosition = { x: 100, y: 1000, z: 0 }
	let result = overlay.tick()
	assert.equal(result.frames.has(1), false)
	overlay.hud.minimap = probe => probe.x < 300 && probe.y > 800
	for (let tick = 0; tick < 16; tick++) {
		result = overlay.tick()
	}
	assert.equal(result.frames.has(1), true)
	overlay.hud.minimap = () => false
	overlay.hud.lowerHud = probe => probe.y > 900
	overlay.heroes[0].VisualPosition = { x: 960, y: 1000, z: 0 }
	for (let tick = 0; tick < 16; tick++) {
		result = overlay.tick()
	}
	assert.equal(result.frames.has(1), true)
	overlay.hud.lowerHud = () => false
	for (let tick = 0; tick < 16; tick++) {
		result = overlay.tick()
	}
	assert.equal(result.frames.has(1), false)
})

const LOTUS = "modifier_passive_lotus_pool"
const WISDOM = "modifier_xp_fountain_aura"

function settle(overlay) {
	let result
	for (let tick = 0; tick < 16; tick++) {
		result = overlay.tick()
	}
	return result
}

function stack(count) {
	return { IsValid: true, StackCount: count }
}

function objectiveFixture(capShift = 0) {
	return fixture(({ Rune, XPFountain, LotusPool }) => {
		const haste = new Rune(10, 2000)
		const bounty = new Rune(11, 2500)
		bounty.Type = 5
		const shrine = new XPFountain(12, 3000)
		shrine.buffs.set(WISDOM, stack(1))
		const waiting = new XPFountain(13, 3000)
		waiting.buffs.set(WISDOM, stack(0))
		const pool = new LotusPool(14, 3500)
		pool.buffs.set(LOTUS, stack(3))
		return [haste, bounty, shrine, waiting, pool]
	}, capShift)
}

test("runes, a ready shrine and a stocked pool get indicators dressed as objectives", () => {
	const overlay = objectiveFixture()
	const { frames } = settle(overlay)
	assert.deepEqual(
		[...frames.keys()].sort((a, b) => a - b),
		[1, 2, 3, 10, 11, 12, 14]
	)
	const hero = frames.get(1)
	assert.equal(hero.dress.drain, true)
	assert.equal(hero.dress.size, 52)
	assert.equal(hero.dress.ringWidth, 2)
	assert.equal(hero.badge, "")
	const haste = frames.get(10)
	assert.equal(haste.icon, "rune-haste")
	assert.equal(haste.baseColor, "#ff5147")
	assert.equal(haste.healthColor, "#ff5147")
	assert.equal(haste.health, 1)
	assert.equal(haste.badge, "")
	assert.equal(haste.warning, false)
	assert.equal(haste.distance, "2000")
	assert.equal(haste.dress.drain, false)
	assert.equal(haste.dress.size, 42)
	assert.ok(haste.dress.artScale < 1)
	assert.equal(haste.dress.ringWidth, 2)
	assert.equal(frames.get(11).icon, "rune-bounty")
	assert.equal(frames.get(11).baseColor, "#f2b544")
	assert.equal(frames.get(12).icon, "rune-xp")
	assert.equal(frames.get(12).baseColor, "#b084ff")
	const pool = frames.get(14)
	assert.equal(pool.icon, "panorama/images/hud/timer/lotus_png.vtex_c")
	assert.equal(pool.baseColor, "#ee96cd")
	assert.equal(pool.badge, "3")
})

test("the objective rows of the menu pick what is pointed at", () => {
	const overlay = objectiveFixture()
	const [, , shrine, waiting, pool] = overlay.things
	overlay.menu.MinLotuses.value = 4
	assert.equal(settle(overlay).frames.has(14), false)
	pool.buffs.get(LOTUS).StackCount = 5
	assert.equal(settle(overlay).frames.get(14).badge, "5")
	overlay.menu.Lotus.value = false
	assert.equal(settle(overlay).frames.has(14), false)
	waiting.buffs.get(WISDOM).StackCount = 1
	assert.equal(settle(overlay).frames.has(13), true)
	shrine.buffs.get(WISDOM).StackCount = 0
	assert.equal(settle(overlay).frames.has(12), false)
	overlay.menu.Wisdom.value = false
	assert.equal(settle(overlay).frames.has(13), false)
	overlay.disabledRunes.add("rune_haste")
	let result = settle(overlay)
	assert.equal(result.frames.has(10), false)
	assert.equal(result.frames.has(11), true)
	overlay.disabledRunes.clear()
	overlay.menu.ObjectiveDistance.value = 2200
	result = settle(overlay)
	assert.equal(result.frames.has(10), true)
	assert.equal(result.frames.has(11), false)
	overlay.menu.Runes.value = false
	result = settle(overlay)
	// what is left are the heroes: the objective rows leave the enemies page as it was
	assert.deepEqual(
		[...result.frames.keys()].sort((a, b) => a - b),
		[1, 2, 3]
	)
})

test("a rune out of sight is drawn faint, a pool or a shrine out of sight whole", () => {
	const overlay = objectiveFixture()
	const [haste, , shrine, , pool] = overlay.things
	haste.IsVisible = false
	shrine.IsVisible = false
	pool.IsVisible = false
	const { frames } = settle(overlay)
	assert.equal(frames.get(10).opacity, 0.72)
	assert.equal(frames.get(12).opacity, 1)
	assert.equal(frames.get(14).opacity, 1)
})

test("a pool's lotuses are read off a modifier cast from it, and a taken rune fades", () => {
	const overlay = fixture(({ Rune, LotusPool }) => [
		new Rune(10, 2000),
		new LotusPool(14, 3500)
	])
	const [rune, pool] = overlay.things
	assert.equal(settle(overlay).frames.has(14), false)
	const modifier = { Name: LOTUS, IsValid: true, StackCount: 2, Caster: pool }
	overlay.objectives.TrackObjectiveModifier(modifier)
	assert.equal(settle(overlay).frames.get(14).badge, "2")
	modifier.IsValid = false
	assert.equal(settle(overlay).frames.has(14), false)
	// a modifier of another name, or cast from a unit that is not tracked, is let be
	overlay.objectives.TrackObjectiveModifier({
		...modifier,
		Name: "modifier_other",
		IsValid: true
	})
	overlay.objectives.TrackObjectiveModifier({
		...modifier,
		IsValid: true,
		Caster: { Index: 99 }
	})
	assert.equal(settle(overlay).frames.has(14), false)
	assert.equal(settle(overlay).frames.has(10), true)
	rune.IsValid = false
	overlay.objectives.UntrackObjective(rune)
	assert.equal(settle(overlay).frames.has(10), false)
})

test("a reload finds the modifiers already cast from a pool and a shrine", () => {
	const overlay = fixture(({ XPFountain, LotusPool, heroes }) => {
		const shrine = new XPFountain(12, 3000)
		const pool = new LotusPool(14, 3500)
		heroes[0].Buffs.push(
			{ Name: "modifier_other", IsValid: true, StackCount: 9, Caster: pool },
			{ Name: LOTUS, IsValid: true, StackCount: 2, Caster: pool },
			{ Name: WISDOM, IsValid: true, StackCount: 1, Caster: shrine }
		)
		return [shrine, pool]
	})
	const { frames } = settle(overlay)
	assert.equal(frames.get(12).icon, "rune-xp")
	assert.equal(frames.get(14).badge, "2")
})

test("a wisdom rune on the ground goes with the shrines, not the runes", () => {
	const overlay = fixture(({ Rune }) => {
		const wisdom = new Rune(10, 2000)
		wisdom.Type = 8
		return [wisdom]
	})
	overlay.menu.Runes.value = false
	const frame = settle(overlay).frames.get(10)
	assert.equal(frame.icon, "rune-xp")
	assert.equal(frame.baseColor, "#b084ff")
	overlay.menu.Runes.value = true
	overlay.menu.Wisdom.value = false
	assert.equal(settle(overlay).frames.has(10), false)
})

test("a face that stands its digits high has its readings let down onto the middle", () => {
	const shift = (672 - (857 - 344)) / 2000
	const flat = settle(objectiveFixture()).frames
	const radiance = settle(objectiveFixture(shift)).frames
	for (const key of [1, 14]) {
		const even = flat.get(key).dress
		const high = radiance.get(key).dress
		assert.equal(even.distanceLine, even.distanceHeight)
		assert.equal(even.badgeLine, even.badgeSize)
		assert.equal(
			high.distanceLine,
			Math.round(high.distanceHeight + 2 * high.fontSize * shift)
		)
		assert.equal(
			high.badgeLine,
			Math.round(high.badgeSize + 2 * high.badgeFontSize * shift)
		)
		assert.ok(high.distanceLine > high.distanceHeight)
	}
})
