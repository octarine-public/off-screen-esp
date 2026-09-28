import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"
import { runInNewContext } from "node:vm"
import ts from "typescript"

import * as collision from "../src/offscreen/collision.ts"
import * as priority from "../src/offscreen/priority.ts"
import * as ring from "../src/offscreen/ring.ts"
import * as stacks from "../src/offscreen/stack.ts"

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
			ObjectiveSize: 80,
			Collision: true,
			StackRunes: true,
			StackAngle: 25
		}).map(([key, value]) => [key, { value }])
	)
	menu.Placement = { SelectedID: 1 }
	menu.Visibility = { SelectedID: 0 }
	menu.ImageType = { SelectedID: 0 }
	menu.DistancePosition = { SelectedID: 0 }
	menu.ColorMode = { SelectedID: 0 }
	menu.HideAnimation = { SelectedID: 1 }
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
			this.IsFogVisible = false
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
		"./stack": stacks,
		"./menu": {
			OffscreenConfig: menu,
			EPlacementMode: { SafeEdge: 0, FocusRing: 1 },
			EVisibilityFilter: { All: 0, VisibleOnly: 1, HiddenOnly: 2 },
			EImageType: { Portrait: 0, Icon: 1 },
			EColorMode: { Player: 0, Custom: 1 },
			EHideAnimation: { Instant: 0, Fade: 1, FadeBlur: 2 },
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
	// the fixture lays the map straight onto the screen, so what the camera sees is the screen
	imports["./view"] = {
		CCameraView: class {
			Focus = { x: 0, y: 0, z: 0 }
			Begin() {}
			Distance(x, y) {
				return Math.hypot(Math.max(0, -x, x - 1920), Math.max(0, -y, y - 1080))
			}
		}
	}
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

/** The arrow of `frame` runs from the indicator through the screen point (`x`, `y`). */
function assertPointsAt(frame, x, y) {
	const length = Math.hypot(x - frame.x, y - frame.y)
	assert.ok(Math.abs(frame.directionX - (x - frame.x) / length) < 1e-9)
	assert.ok(Math.abs(frame.directionY - (y - frame.y) / length) < 1e-9)
	const turn = frame.angle - (Math.atan2(y - frame.y, x - frame.x) * 180) / Math.PI
	assert.ok(Math.abs(turn - 360 * Math.round(turn / 360)) < 1e-9)
}

test("the live adapter switches collision on and off and renders the prepared positions", () => {
	const overlay = fixture()
	overlay.menu.Collision.value = false
	let result = overlay.tick()
	assert.equal(result.frames.size, 3)
	const original = result.frames.get(1)
	assert.equal(result.frames.get(2).x, original.x)
	assert.equal(result.frames.get(2).y, original.y)
	overlay.menu.Collision.value = true
	result = overlay.tick()
	assert.equal(result.frames.size, 3)
	assert.ok(result.entries.some(entry => entry.collisionOffset !== 0))
	for (const entry of result.entries) {
		const frame = result.frames.get(entry.key)
		assert.equal(frame.x, entry.x)
		assert.equal(frame.y, entry.y)
		// pushed along the ring, the arrow still runs through the hero, 580 past the screen's edge
		assertPointsAt(frame, 2500, 540)
		assert.equal(frame.distance, "580")
		assert.equal(frame.icon, `hero-${entry.key}-portrait`)
		assert.equal(frame.baseColor, `player-${entry.key}`)
	}
	overlay.menu.Collision.value = false
	result = overlay.tick()
	assert.ok(result.entries.every(entry => entry.collisionOffset === 0))
	assert.ok(
		[...result.frames.values()].every(
			frame => frame.x === original.x && frame.y === original.y
		)
	)
	overlay.menu.Collision.value = true
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
	overlay.heroes[1].IsFogVisible = true
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

test("a hidden enemy fades out once its last position runs out", () => {
	const overlay = fixture()
	overlay.heroes[1].IsVisible = false
	overlay.heroes[1].IsFogVisible = true
	let result
	for (let tick = 0; tick < 16; tick++) {
		result = overlay.tick()
	}
	assert.equal(result.frames.has(2), true)
	overlay.heroes[1].IsFogVisible = false
	for (let tick = 0; tick < 16; tick++) {
		result = overlay.tick()
	}
	assert.equal(result.frames.has(1), true)
	assert.equal(result.frames.has(2), false)
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
	// on the screen, under the minimap: nothing to pan across, and the arrow is on him
	assert.equal(result.frames.get(1).distance, "0")
	assertPointsAt(result.frames.get(1), 100, 1000)
	overlay.hud.minimap = () => false
	overlay.hud.lowerHud = probe => probe.y > 900
	overlay.heroes[0].VisualPosition = { x: 960, y: 1000, z: 0 }
	for (let tick = 0; tick < 16; tick++) {
		result = overlay.tick()
	}
	assert.equal(result.frames.has(1), true)
	// a tall HUD hides him between the middle and the ring: the arrow turns back in onto him
	overlay.hud.lowerHud = probe => probe.y > 700
	overlay.heroes[0].VisualPosition = { x: 960, y: 760, z: 0 }
	result = settle(overlay)
	assert.ok(result.frames.get(1).y > 760)
	assertPointsAt(result.frames.get(1), 960, 760)
	assert.equal(result.frames.get(1).directionY, -1)
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
	assert.equal(haste.distance, "580")
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

function objectiveKeys(frames) {
	return [...frames.keys()].filter(key => key >= 10).sort((a, b) => a - b)
}

test("bounties lying one way share an indicator counting them, other runes keep their own", () => {
	const overlay = fixture(({ Rune }) => {
		const bounty = (index, distance, x, y) => {
			const rune = new Rune(index, distance, x, y)
			rune.Type = 5
			return rune
		}
		return [
			// right of the screen: at 0°, 5.9° and -8.9°
			bounty(20, 2600, 2500, 540),
			bounty(21, 2000, 2500, 700),
			bounty(22, 3000, 2500, 300),
			// below the screen, a quarter turn away
			bounty(23, 2200, 960, 2500),
			// a haste where the first bounty lies: another type, another card
			new Rune(24, 2100, 2500, 540)
		]
	})
	let frames = settle(overlay).frames
	assert.deepEqual(objectiveKeys(frames), [21, 23, 24])
	assert.equal(frames.get(21).badge, "3")
	assert.equal(frames.get(21).distance, "580")
	assert.equal(frames.get(21).icon, "rune-bounty")
	assert.equal(frames.get(23).badge, "")
	assert.equal(frames.get(24).badge, "")
	assert.equal(frames.get(24).icon, "rune-haste")
	// a narrower angle lets the bounty at -8.9° go; the one at 0° stays, being inside the margin
	overlay.menu.StackAngle.value = 5
	frames = settle(overlay).frames
	assert.deepEqual(objectiveKeys(frames), [21, 22, 23, 24])
	assert.equal(frames.get(21).badge, "2")
	assert.equal(frames.get(22).badge, "")
	overlay.menu.StackRunes.value = false
	frames = settle(overlay).frames
	assert.deepEqual(objectiveKeys(frames), [20, 21, 22, 23, 24])
	assert.ok([...frames.values()].every(frame => frame.badge === ""))
})

test("the card that leads a stack keeps its place when its runes are taken", () => {
	const overlay = fixture(({ Rune }) =>
		[30, 31].map((index, order) => {
			const rune = new Rune(index, 2000 + order * 500, 2500, 540 + order * 50)
			rune.Type = 5
			return rune
		})
	)
	const [lead, folded] = overlay.things
	let frames = settle(overlay).frames
	assert.deepEqual(objectiveKeys(frames), [30])
	assert.equal(frames.get(30).badge, "2")
	folded.IsValid = false
	overlay.objectives.UntrackObjective(folded)
	frames = settle(overlay).frames
	assert.deepEqual(objectiveKeys(frames), [30])
	assert.equal(frames.get(30).badge, "")
	lead.IsValid = false
	overlay.objectives.UntrackObjective(lead)
	assert.deepEqual(objectiveKeys(settle(overlay).frames), [])
})

test("on the ellipse the indicator stands on the line to its target and the arrow runs through it", () => {
	const overlay = fixture()
	overlay.heroes[0].VisualPosition = { x: 2400, y: 1400, z: 0 }
	overlay.heroes[1].VisualPosition = { x: -600, y: 540, z: 0 }
	overlay.heroes[2].VisualPosition = { x: 960, y: -900, z: 0 }
	const { frames } = settle(overlay)
	const diagonal = frames.get(1)
	const cross = (diagonal.x - 960) * (1400 - 540) - (diagonal.y - 540) * (2400 - 960)
	assert.ok(Math.abs(cross) < 1e-6)
	assert.ok(diagonal.x > 960 && diagonal.x < 1920 && diagonal.y > 540 && diagonal.y < 1080)
	assertPointsAt(diagonal, 2400, 1400)
	// the nearest the screen comes to it is its corner
	assert.equal(diagonal.distance, "577")
	assertPointsAt(frames.get(2), -600, 540)
	assert.equal(frames.get(2).distance, "600")
	assertPointsAt(frames.get(3), 960, -900)
	assert.equal(frames.get(3).distance, "900")
})

test("an indicator goes at once, fading, or fading out of focus as the menu asks", () => {
	const overlay = fixture()
	const [first, second, third] = overlay.heroes
	const inView = { x: 960, y: 540, z: 0 }
	const offScreen = { x: 2500, y: 540, z: 0 }
	for (const frame of settle(overlay).frames.values()) {
		assert.equal(frame.opacity, 1)
		assert.equal(frame.veil, 0)
	}
	// fading: it thins away over a few frames, sharp all the while
	first.VisualPosition = inView
	let frame = overlay.tick().frames.get(1)
	assert.ok(frame.opacity > 0 && frame.opacity < 1)
	assert.equal(frame.veil, 0)
	assert.equal(settle(overlay).frames.has(1), false)
	// instant: gone the frame its target comes into view, and still fading in when it comes back
	overlay.menu.HideAnimation.SelectedID = 0
	second.VisualPosition = inView
	assert.equal(overlay.tick().frames.has(2), false)
	second.VisualPosition = offScreen
	frame = overlay.tick().frames.get(2)
	assert.ok(frame.opacity > 0 && frame.opacity < 1)
	// fading out of focus: it loses focus as fast as it loses opacity
	overlay.menu.HideAnimation.SelectedID = 2
	third.VisualPosition = inView
	let veil = 0
	for (let tick = 0; tick < 5; tick++) {
		frame = overlay.tick().frames.get(3)
		assert.ok(frame.veil > veil)
		assert.ok(Math.abs(frame.veil - (1 - frame.opacity)) < 1e-9)
		veil = frame.veil
	}
	// brought back midway, it clears as it rises, never blurring past where it stood
	third.VisualPosition = offScreen
	frame = overlay.tick().frames.get(3)
	assert.ok(frame.veil > 0 && frame.veil < veil)
	veil = frame.veil
	// and sent away again, it goes on from there rather than snapping sharp or soft
	third.VisualPosition = inView
	frame = overlay.tick().frames.get(3)
	assert.ok(frame.veil > veil && frame.veil < veil + 0.1)
	assert.equal(settle(overlay).frames.has(3), false)
	// one that comes in afresh comes in sharp
	third.VisualPosition = offScreen
	frame = overlay.tick().frames.get(3)
	assert.ok(frame.opacity > 0 && frame.opacity < 1)
	assert.equal(frame.veil, 0)
	assert.equal(settle(overlay).frames.get(3).veil, 0)
	// the dress carries how far out of focus a veil of one throws it: an eighth of its size or so
	assert.ok(Math.abs(frame.dress.blur - 52 * 0.12) < 1e-9)
})

/** Bounties at `x`, `y` and on to the right, `gap` apart, the first `distance` from the focus. */
function bountyPile(Rune, first, count, distance, x, y = 540, gap = 20) {
	return Array.from({ length: count }, (_, order) => {
		const rune = new Rune(first + order, distance + order * gap, x + order * gap, y)
		rune.Type = 5
		return rune
	})
}

/** Moves every rune `dx` across, the way a camera panning the other way would carry them. */
function pan(overlay, dx) {
	for (const rune of overlay.things) {
		rune.Position.x += dx
	}
	return overlay.tick().frames
}

test("a pile of runes goes out of view and out of range as one, its card counting them all", () => {
	const overlay = fixture(({ Rune }) => bountyPile(Rune, 40, 6, 2000, 1960))
	let frames = settle(overlay).frames
	assert.deepEqual(objectiveKeys(frames), [40])
	assert.equal(frames.get(40).badge, "6")
	// the edge of the screen passes over the pile a rune at a time: the card fades out saying six
	let faded = false
	for (let tick = 0; tick < 30; tick++) {
		frames = pan(overlay, -5)
		assert.ok(objectiveKeys(frames).every(key => key === 40))
		if (frames.has(40)) {
			assert.equal(frames.get(40).badge, "6")
			faded ||= frames.get(40).opacity < 1
		}
	}
	assert.ok(faded)
	assert.deepEqual(objectiveKeys(frames), [])
	// and while one rune of it is still on the screen, the pile stays seen
	for (let tick = 0; tick < 22; tick++) {
		assert.deepEqual(objectiveKeys(pan(overlay, 5)), [])
	}
	frames = pan(overlay, 5)
	assert.deepEqual(objectiveKeys(frames), [40])
	assert.equal(frames.get(40).badge, "6")
	// the edge of the range cuts through the pile: it is in range as one, or not at all
	overlay.menu.ObjectiveDistance.value = 2050
	assert.equal(settle(overlay).frames.get(40).badge, "6")
	overlay.menu.ObjectiveDistance.value = 1990
	frames = overlay.tick().frames
	assert.equal(frames.get(40).badge, "6")
	assert.ok(frames.get(40).opacity < 1)
	assert.deepEqual(objectiveKeys(settle(overlay).frames), [])
})

test("a pile further along the same way keeps a card of its own once the nearer one is seen", () => {
	const overlay = fixture(({ Rune }) => [
		...bountyPile(Rune, 50, 2, 2000, 1960),
		...bountyPile(Rune, 52, 3, 4000, 3200)
	])
	let frames = settle(overlay).frames
	assert.deepEqual(objectiveKeys(frames), [50])
	assert.equal(frames.get(50).badge, "5")
	for (const rune of overlay.things.slice(0, 2)) {
		rune.Position.x -= 200
	}
	frames = settle(overlay).frames
	assert.deepEqual(objectiveKeys(frames), [52])
	assert.equal(frames.get(52).badge, "3")
})
