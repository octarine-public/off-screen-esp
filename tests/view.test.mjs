import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"
import { runInNewContext } from "node:vm"
import ts from "typescript"

const WIDTH = 1920
const HEIGHT = 1080
const DEG = Math.PI / 180

class Vector3 {
	constructor(x = 0, y = 0, z = 0) {
		this.x = x
		this.y = y
		this.z = z
	}
}

/**
 * A Dota camera and the projection it renders through. The projection spreads its rays a touch
 * wider than the field of view it reports, as the game's does, so the view has to read them back.
 */
function camera({ eye = [-686, 4398, 1202], pitch = 60, yaw = 90, distance = 1200 } = {}) {
	const fov = 98.227
	const spread = 831.53
	const [p, y] = [pitch * DEG, yaw * DEG]
	const forward = [Math.cos(p) * Math.cos(y), Math.cos(p) * Math.sin(y), -Math.sin(p)]
	const right = [Math.sin(y), -Math.cos(y), 0]
	const up = [Math.sin(p) * Math.cos(y), Math.sin(p) * Math.sin(y), Math.cos(p)]
	const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
	const project = (x, y, z, out) => {
		const v = [x - eye[0], y - eye[1], z - eye[2]]
		const depth = dot(v, forward)
		if (depth < 8) {
			return false
		}
		out[0] = WIDTH / 2 + (spread * dot(v, right)) / depth
		out[1] = HEIGHT / 2 - (spread * dot(v, up)) / depth
		return true
	}
	const exports = {}
	runInNewContext(
		ts.transpileModule(
			readFileSync(new URL("../src/offscreen/view.ts", import.meta.url), "utf8"),
			{ compilerOptions: { module: ts.ModuleKind.CommonJS } }
		).outputText,
		{
			exports,
			Vector3,
			CameraSDK: {
				Position: new Vector3(...eye),
				Angles: { x: pitch, y: yaw, z: 0 },
				Distance: distance,
				FoV: fov
			},
			Source2SDK: { Projection: { WorldToScreenXYZ: project } }
		}
	)
	const view = new exports.CCameraView()
	view.Begin(WIDTH, HEIGHT)
	const out = [0, 0]
	return {
		view,
		project,
		/** Whether a point at the height shows on the screen, by the projection alone. */
		shown(x, y, z) {
			return (
				project(x, y, z, out) &&
				out[0] >= 0 &&
				out[0] <= WIDTH &&
				out[1] >= 0 &&
				out[1] <= HEIGHT
			)
		}
	}
}

/**
 * The rim of what the screen shows at height `z`, walked by the projection alone: along each of
 * `rays` directions out of `from`, the last point still on the screen.
 */
function rim({ shown }, from, z, rays = 1440) {
	const points = []
	for (let index = 0; index < rays; index++) {
		const angle = (index / rays) * Math.PI * 2
		const dx = Math.cos(angle)
		const dy = Math.sin(angle)
		let near = 0
		let far = 20000
		for (let step = 0; step < 50; step++) {
			const middle = (near + far) / 2
			if (shown(from.x + dx * middle, from.y + dy * middle, z)) {
				near = middle
			} else {
				far = middle
			}
		}
		points.push([from.x + dx * near, from.y + dy * near])
	}
	return points
}

test("the focus is the ground under the middle of the screen", () => {
	const setup = camera()
	const out = [0, 0]
	const focus = setup.view.Focus
	assert.ok(setup.project(focus.x, focus.y, focus.z, out))
	assert.ok(Math.abs(out[0] - WIDTH / 2) < 1e-6)
	assert.ok(Math.abs(out[1] - HEIGHT / 2) < 1e-6)
	assert.ok(Math.abs(focus.z - (1202 - 1200 * Math.sin(60 * DEG))) < 1e-6)
})

test("a point measures zero exactly while the screen shows it, at any height", () => {
	const setup = camera()
	const focus = setup.view.Focus
	for (const z of [0, focus.z, 256, 512]) {
		for (let x = -2500; x <= 2500; x += 125) {
			for (let y = -1500; y <= 3500; y += 125) {
				const px = focus.x + x
				const py = focus.y + y
				const distance = setup.view.Distance(px, py, z)
				assert.equal(
					distance === 0,
					setup.shown(px, py, z),
					`at ${x}, ${y}, ${z}: ${distance}`
				)
			}
		}
	}
})

test("a point off the screen measures to the nearest ground the screen shows", () => {
	const setup = camera()
	const focus = setup.view.Focus
	for (const z of [0, 300]) {
		const edge = rim(setup, focus, z)
		// the nearest point of the rim lies between two walked ones, at most half their gap away
		const slack =
			Math.max(
				...edge.map(([x, y], index) => {
					const [nx, ny] = edge[(index + 1) % edge.length]
					return Math.hypot(nx - x, ny - y)
				})
			) / 2
		for (const [x, y] of [
			[2400, 0],
			[-3000, 400],
			[0, 2600],
			[0, -1400],
			[2200, 2400],
			[-1800, -1500]
		]) {
			const px = focus.x + x
			const py = focus.y + y
			const nearest = Math.min(...edge.map(([ex, ey]) => Math.hypot(px - ex, py - ey)))
			const distance = setup.view.Distance(px, py, z)
			assert.ok(distance > 0)
			assert.ok(distance <= nearest + 1e-6, `${x}, ${y}: ${distance} > ${nearest}`)
			assert.ok(nearest - distance < slack, `${x}, ${y}: ${distance} < ${nearest}`)
		}
	}
})

test("the far edge lies further off for ground lower than the camera looks at", () => {
	const setup = camera()
	const focus = setup.view.Focus
	// just past the top of the screen on high ground is on it down in the river
	let y = 0
	while (setup.shown(focus.x, focus.y + y, 256)) {
		y += 10
	}
	assert.ok(setup.view.Distance(focus.x, focus.y + y, 256) > 0)
	assert.equal(setup.view.Distance(focus.x, focus.y + y, 0), 0)
})

test("a camera tipped up to the horizon still measures a finite distance", () => {
	const setup = camera({ pitch: 12 })
	const focus = setup.view.Focus
	const distance = setup.view.Distance(focus.x + 400000, focus.y + 900000, 0)
	assert.ok(Number.isFinite(distance) && distance > 0)
	assert.equal(setup.view.Distance(focus.x, focus.y, focus.z), 0)
})
