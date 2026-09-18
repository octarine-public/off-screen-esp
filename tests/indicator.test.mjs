import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"
import { runInNewContext } from "node:vm"
import ts from "typescript"

import * as layout from "../src/lib/layout.ts"
import * as ring from "../src/offscreen/ring.ts"

const SIZE = 52
const BAND = ring.RingBand(SIZE)
/** The middle of the band: on the rim, the band lying inside the portrait's edge. */
const RADIUS = (SIZE - BAND) / 2
const STRIPS = 32

function load(file, imports, globals) {
	const exports = {}
	const compiled = ts.transpileModule(
		readFileSync(new URL(`../src/${file}`, import.meta.url), "utf8"),
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

class Batch {
	constructor() {
		this.segments = []
	}
	Reset() {
		this.segments.length = 0
	}
	Segment(x1, y1, x2, y2) {
		this.segments.push([x1, y1, x2, y2])
		return true
	}
	Flush(element, stroke) {
		element.chain = {
			segments: this.segments.map(segment => [...segment]),
			color: stroke.color,
			thickness: stroke.thickness
		}
	}
}

function fixture(capsules) {
	const MenuSDK = {
		CapsulesShaderSupported: capsules,
		ShaderSlotSegments: 40,
		SdfCircle: (fill, border = 0, rim = "", inset = 0) => ({
			decorator: `circle(${fill}|${border}|${rim}|${inset})`
		}),
		SdfShape: (radius, fill, border = 0, rim = "", inset = 0) => ({
			decorator: `shape(${radius}|${fill}|${border}|${rim}|${inset})`
		}),
		ResolveAsset: path => path,
		WritePx: (element, name, value) => (element.style[name] = value),
		WriteStyle: (element, name, value) => (element.style[name] = value),
		WriteFmt: (element, name, value, suffix) => (element.style[name] = `${value}${suffix}`),
		WriteShown: (element, shown) => (element.shown = shown),
		WritePlacement: (element, x, y, angle) => (element.placement = [x, y, angle]),
		WriteText: (element, text) => (element.text = text),
		WriteSizedArt: (element, path, width, height) => (element.art = [path, width, height]),
		ReleaseSizedArt() {},
		CChainBatch: Batch
	}
	const globals = {
		MenuSDK,
		__OCT_PACKAGE_ROOT__: "root",
		React: {
			createElement(type, props) {
				if (typeof type === "function") {
					return type(props)
				}
				const element = { type, style: {} }
				props?.ref?.(element)
				return element
			}
		}
	}
	const paint = load("lib/paint.ts", {}, globals)
	const overlay = load(
		"offscreen/overlay.tsx",
		{ "../lib/layout": layout, "../lib/paint": paint, "./ring": ring },
		globals
	)
	const elements = new Map()
	const handle = {
		Ref: name => element => {
			if (element === null || element === undefined) {
				elements.delete(name)
			} else {
				elements.set(name, element)
			}
		},
		Element: name => elements.get(name),
		Style() {}
	}
	// mounts the structure: a frame may only write to elements the structure declares
	overlay.OffscreenIndicator({ handle })
	const dress = {
		version: 1,
		size: SIZE,
		fontSize: 11,
		fontWeight: 600,
		distanceOffset: 6,
		arrowSize: 18,
		healthRingWidth: BAND,
		distanceWidth: 50,
		distanceHeight: 16,
		portraitAspect: 16 / 9,
		showDistance: true,
		showHealth: true,
		fontFamily: "Stratum2",
		textColor: "#ffffff",
		distanceEffect: "none"
	}
	const frame = {
		x: 100,
		y: 200,
		directionX: 1,
		directionY: 0,
		angle: 0,
		icon: "hero",
		distance: "3000",
		labelX: -40,
		labelY: 0,
		health: 1,
		healthColor: "#00ff00",
		baseColor: "#ffffff",
		warningColor: "#ffb840",
		warning: false,
		opacity: 1
	}
	return {
		element(name) {
			const element = elements.get(name)
			assert.ok(element !== undefined, `no element ${name}`)
			return element
		},
		draw(health, color = "#00ff00") {
			frame.health = health
			frame.healthColor = color
			overlay.UpdateIndicator(handle, dress, frame)
		}
	}
}

function box(element) {
	const { left, top, width, height } = element.style
	return [left, top, width, height]
}

function onRim([x, y]) {
	assert.ok(Math.abs(Math.hypot(x, y) - RADIUS) < 1e-9, `(${x}, ${y}) is off the rim`)
}

function near([x, y], [wantX, wantY]) {
	assert.ok(
		Math.abs(x - wantX) < 1e-9 && Math.abs(y - wantY) < 1e-9,
		`(${x}, ${y}) is not (${wantX}, ${wantY})`
	)
}

const SIX = [0, RADIUS]
const NINE = [-RADIUS, 0]
const TWELVE = [0, -RADIUS]

test("the portrait fills the disc and a full ring is laid inside its edge", () => {
	const indicator = fixture(true)
	indicator.draw(1)
	assert.deepEqual(box(indicator.element("portraitBacking")), [-26, -26, 52, 52])
	assert.deepEqual(box(indicator.element("portraitClip")), [-26, -26, 52, 52])
	const portrait = indicator.element("portrait")
	assert.deepEqual(portrait.art, ["hero", 92, 52])
	assert.deepEqual(box(portrait), [-20, 0, 92, 52])
	const health = indicator.element("health")
	assert.equal(health.shown, true)
	// a pixel of quad each side, for the sdf circle's antialiased edge
	assert.deepEqual(box(health), [-27, -27, 54, 54])
	assert.equal(health.style.decorator, `circle(#00000000|${BAND}|#00ff00|1)`)
})

test("with the capsules shader what is left runs the rim from its start round to twelve", () => {
	const indicator = fixture(true)
	indicator.draw(1)
	indicator.draw(0.5, "#ffaa00")
	const health = indicator.element("health")
	const { segments, color, thickness } = health.chain
	assert.equal(color, "#ffaa00")
	assert.equal(thickness, BAND)
	assert.equal(segments.length, 20)
	near(segments[0].slice(0, 2), SIX)
	near(segments.at(-1).slice(2), TWELVE)
	for (let index = 0; index < segments.length; index++) {
		const [x1, y1, x2, y2] = segments[index]
		onRim([x1, y1])
		onRim([x2, y2])
		// a positive cross product turns clockwise on a screen whose y runs down
		assert.ok(x1 * y2 - y1 * x2 > 0, `segment ${index} runs clockwise`)
		if (index > 0) {
			near([x1, y1], segments[index - 1].slice(2))
		}
	}
	indicator.draw(0.25)
	near(health.chain.segments[0].slice(0, 2), NINE)
	indicator.draw(0)
	assert.equal(health.shown, false)
	indicator.draw(1)
	assert.equal(health.shown, true)
	assert.deepEqual(box(health), [-27, -27, 54, 54])
	assert.equal(health.style.decorator, `circle(#00000000|${BAND}|#00ff00|1)`)
})

test("without the shader the strips walk the rim from the start round to twelve", () => {
	const indicator = fixture(false)
	indicator.draw(1)
	const health = indicator.element("health")
	assert.equal(health.shown, true)
	for (let index = 0; index < STRIPS; index++) {
		assert.equal(indicator.element(`arc${index}`).shown, false)
	}
	indicator.draw(0.5)
	assert.equal(health.shown, false)
	const reach = BAND / 2 + 1
	let tail = SIX
	for (let index = 0; index < STRIPS; index++) {
		const strip = indicator.element(`arc${index}`)
		assert.equal(strip.shown, index < STRIPS / 2, `strip ${index}`)
		if (!strip.shown) {
			continue
		}
		assert.equal(strip.style.decorator, `shape(${BAND / 2}|#00ff00|0||1)`)
		assert.equal(strip.style.height, BAND + 2)
		const [x, y, angle] = strip.placement
		const head = [x + 1, y + reach]
		near(head, tail)
		const turn = (angle * Math.PI) / 180
		const length = strip.style.width - 2
		tail = [head[0] + Math.cos(turn) * length, head[1] + Math.sin(turn) * length]
		onRim(tail)
	}
	near(tail, TWELVE)
})
