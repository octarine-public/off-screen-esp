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

function fixture() {
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
			CircleFocus: false
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
	menu.Text = {
		FontSize: { value: 11 },
		Offset: { value: 6 },
		Color: {},
		FontWeight: () => 600,
		Effect: () => "none",
		FontFamily: () => "Stratum2"
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
	const heroes = [new Hero(1), new Hero(2), new SpiritBear(3)]
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
		EntityManager: { AllEntities: [...heroes] },
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
	imports["./store"] = load("store.ts", imports, globals)
	imports["./geometry"] = load("geometry.ts", imports, globals)
	imports["./label"] = load("label.ts", imports, globals)
	imports["./guide"] = {}
	imports["../lib/gate"] = { CanDraw: () => true }
	imports["../lib/colors"] = { PlayerColorCss: unit => `player-${unit.Index}` }
	imports["../lib/paint"] = { PickerColor: () => "#ffffff" }
	imports["./overlay"] = {
		UpdateIndicator: (handle, _dress, frame) => frames.set(handle.key, { ...frame })
	}
	load("index.tsx", imports, globals)
	return {
		menu,
		heroes,
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
