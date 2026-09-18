import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"
import { runInNewContext } from "node:vm"
import ts from "typescript"

import { CIndicatorCollision, SetCollisionBounds } from "../src/offscreen/collision.ts"

const geometryExports = {}
runInNewContext(
	ts.transpileModule(
		readFileSync(new URL("../src/offscreen/geometry.ts", import.meta.url), "utf8"),
		{ compilerOptions: { module: ts.ModuleKind.CommonJS } }
	).outputText,
	{
		exports: geometryExports,
		require: () => ({ EPlacementMode: { SafeEdge: 0, FocusRing: 1 } }),
		CameraSDK: { Position: { x: 0, y: 0, z: 0 } }
	}
)

function fixture(placement = 1, circle = false, width = 1920, height = 1080) {
	const geometry = new geometryExports.CIndicatorGeometry()
	const collision = new CIndicatorCollision()
	geometry.Begin(width, height, placement, 78, 0.61, circle)
	return {
		geometry,
		update(entries, elapsed = 16) {
			collision.Update(entries, geometry, elapsed, width, height)
		},
		width,
		height
	}
}

function indicator(key, angle = 0, size = 52, textWidth = 55) {
	const entry = {
		key,
		alpha: 1,
		directionX: Math.cos(angle),
		directionY: Math.sin(angle),
		x: 0,
		y: 0,
		collisionOffset: 0
	}
	SetCollisionBounds(entry, size, 18, 0, size / 2 + 6 + 8, textWidth, 16)
	return entry
}

function assertSeparated(entries, width = 1920, height = 1080) {
	for (let index = 0; index < entries.length; index++) {
		const entry = entries[index]
		assert.ok(Number.isFinite(entry.x) && Number.isFinite(entry.y))
		assert.ok(entry.x - entry.collisionLeft >= 0, `left clipped: ${entry.key}`)
		assert.ok(entry.x + entry.collisionRight <= width, `right clipped: ${entry.key}`)
		assert.ok(entry.y - entry.collisionTop >= 0, `top clipped: ${entry.key}`)
		assert.ok(
			entry.y + entry.collisionBottom <= height,
			`bottom clipped: ${entry.key}`
		)
		for (const other of entries.slice(index + 1)) {
			assert.ok(
				entry.x + entry.collisionRight <= other.x - other.collisionLeft ||
					other.x + other.collisionRight <= entry.x - entry.collisionLeft ||
					entry.y + entry.collisionBottom <= other.y - other.collisionTop ||
					other.y + other.collisionBottom <= entry.y - entry.collisionTop,
				`overlap: ${entry.key}, ${other.key}`
			)
		}
	}
}

for (const [name, placement, circle] of [
	["circular ring", 1, true],
	["elliptical ring", 1, false],
	["screen edge", 0, false]
]) {
	test(`separates 12 coincident indicators on the ${name}`, () => {
		const layout = fixture(placement, circle)
		const entries = Array.from({ length: 12 }, (_, index) => indicator(index))
		layout.update(entries)
		assertSeparated(entries)
		const point = [0, 0]
		for (const entry of entries) {
			layout.geometry.Place(
				Math.cos(entry.collisionOffset),
				Math.sin(entry.collisionOffset),
				point
			)
			assert.deepEqual([entry.x, entry.y], point)
			assert.equal(entry.directionX, 1)
			assert.equal(entry.directionY, 0)
		}
	})
}

test("handles corner collisions, mixed sizes and long labels at 720p", () => {
	const layout = fixture(0, false, 1280, 720)
	const entries = Array.from({ length: 12 }, (_, index) =>
		indicator(index, Math.atan2(282, 562), index % 2 ? 36 : 52, 120)
	)
	layout.update(entries)
	assertSeparated(entries, 1280, 720)
})

test("keeps cluster slots stable across angle wrap, jitter and priority reordering", () => {
	const layout = fixture(1, true)
	const entries = Array.from({ length: 6 }, (_, index) => indicator(index, Math.PI))
	layout.update(entries)
	for (let tick = 0; tick < 300; tick++) {
		const previous = entries.map(entry => [entry.x, entry.y])
		for (const entry of entries) {
			const angle = Math.PI + Math.sin(tick + entry.key) * 0.001
			entry.directionX = Math.cos(angle)
			entry.directionY = Math.sin(angle)
			SetCollisionBounds(entry, 52, 18, 0, 26 + 6 + 8, 55, 16)
		}
		layout.update(tick % 2 ? entries : [...entries].reverse())
		assertSeparated(entries)
		for (let index = 0; index < entries.length; index++) {
			assert.ok(
				Math.hypot(
					entries[index].x - previous[index][0],
					entries[index].y - previous[index][1]
				) < 3
			)
		}
	}
})

test("faded targets release their space and displacement eases back", () => {
	const layout = fixture()
	const entries = [indicator(1), indicator(2)]
	layout.update(entries)
	const offset = Math.abs(entries[1].collisionOffset)
	assert.ok(offset > 0)
	entries[0].alpha = 0
	layout.update(entries)
	assert.equal(entries[0].collisionOffset, 0)
	assert.ok(Math.abs(entries[1].collisionOffset) > 0)
	assert.ok(Math.abs(entries[1].collisionOffset) < offset)
	for (let tick = 0; tick < 120; tick++) {
		layout.update(entries)
	}
	assert.ok(Math.abs(entries[1].collisionOffset) < 0.00001)
})

test("isolated targets stay at their intended positions", () => {
	const layout = fixture()
	const entries = Array.from({ length: 4 }, (_, index) =>
		indicator(index, (index * Math.PI) / 2)
	)
	layout.update(entries)
	assertSeparated(entries)
	assert.ok(entries.every(entry => entry.collisionOffset === 0))
})

test("an overcrowded path remains finite and bounded", () => {
	const layout = fixture(1, true, 320, 240)
	const entries = Array.from({ length: 24 }, (_, index) => indicator(index))
	for (let tick = 0; tick < 90; tick++) {
		for (const entry of entries) {
			entry.directionX = Math.cos(tick * 0.1 + entry.key * 0.01)
			entry.directionY = Math.sin(tick * 0.1 + entry.key * 0.01)
		}
		layout.update(entries)
		assert.ok(entries.every(entry => Math.abs(entry.collisionOffset) <= Math.PI))
	}
	assert.ok(
		entries.every(entry => Number.isFinite(entry.x) && Number.isFinite(entry.y))
	)
})

test("the safe edge path stays on the inset rectangle and the ring on the ellipse", () => {
	const point = [0, 0]
	const edge = fixture(0, false).geometry
	for (let step = 0; step < 64; step++) {
		const angle = (step / 64) * Math.PI * 2
		edge.Place(Math.cos(angle), Math.sin(angle), point)
		const onVertical = Math.abs(Math.abs(point[0] - 960) - (960 - 78)) < 0.001
		const onHorizontal = Math.abs(Math.abs(point[1] - 540) - (540 - 78)) < 0.001
		assert.ok(onVertical || onHorizontal, `edge point off the rectangle: ${step}`)
	}
	const ring = fixture(1, true).geometry
	for (let step = 0; step < 64; step++) {
		const angle = (step / 64) * Math.PI * 2
		ring.Place(Math.cos(angle), Math.sin(angle), point)
		const radius = Math.hypot(point[0] - 960, point[1] - 540)
		assert.ok(Math.abs(radius - (540 - 78) * 0.61) < 0.001, `ring radius: ${step}`)
	}
})
