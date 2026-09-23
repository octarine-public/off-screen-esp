import "./guide"

import { PlayerColorCss } from "../lib/colors"
import { CanDraw } from "../lib/gate"
import { PickerColor } from "../lib/paint"
import { CIndicatorCollision, SetCollisionBounds } from "./collision"
import { CIndicatorGeometry } from "./geometry"
import { PlaceLabel } from "./label"
import {
	EColorMode,
	EImageType,
	ELabelPosition,
	EOverlapMode,
	EVisibilityFilter,
	OffscreenConfig as menu
} from "./menu"
import {
	ActiveObjectives,
	ClearObjectives,
	ObjectiveColor,
	ObjectiveFilter,
	ObjectiveIcon,
	SeedObjectives,
	TrackedObjective,
	TrackObjective,
	TrackObjectiveModifier,
	UntrackObjective
} from "./objectives"
import {
	IndicatorDress,
	IndicatorFrame,
	OffscreenIndicator,
	UpdateIndicator
} from "./overlay"
import { CIndicatorPriority } from "./priority"
import { RingBand } from "./ring"
import {
	ActiveHeroes,
	ClearActive,
	IsTarget,
	PassesVisibility,
	SeedEntities,
	TrackedHero,
	TrackEntity,
	UntrackEntity
} from "./store"
import { DistanceText, ETargetKind } from "./target"

type Target = TrackedHero | TrackedObjective

const screen: [number, number] = [0, 0]
const feet: [number, number] = [0, 0]
const direction: [number, number, number] = [0, 0, 0]
const point: [number, number] = [0, 0]
const labelPoint: [number, number] = [0, 0]
const geometry = new CIndicatorGeometry()
const combined: Target[] = []
const retained: Target[] = []
const priority = new CIndicatorPriority<Target>()
const collision = new CIndicatorCollision()
const screenCenter = new Vector2()
const hudProbe = new Vector2()
const TARGET_HEIGHT = 120
/** How high over its origin an objective is aimed at: a rune floats, a pool and a shrine are low. */
const OBJECTIVE_HEIGHT = 50
const FADE_IN_MS = 130
const FADE_OUT_MS = 220
const PORTRAIT_ASPECT = 16 / 9
/** The share of an objective's disc its glyph spans, clear of the ring. */
const OBJECTIVE_ART = 0.74
/** The lotus counts on the badge, a pool holding at most a handful. */
const COUNTS = Array.from({ length: 10 }, (_, index) => (index > 0 ? String(index) : ""))

let items: readonly Target[] = combined
let origin: Nullable<Vector3>
let maxDistanceSqr = 0
let warningDistanceSqr = 0
let visibility = EVisibilityFilter.All
let imageType = EImageType.Portrait
let labelPosition = ELabelPosition.OppositeArrow
let colorMode = EColorMode.Player
let customColor = ""
let wisdomColor = ""
let lotusColor = ""
let fadeFloor = 1
let fadeRange = 1
let occludedFactor = 1
let riseStep = 1
let fallStep = 1
let frameAt = 0
let frameElapsed = 0
let frameStamp = 0
/** Counts every dress ever cut, so no two dresses share a version an indicator could mistake. */
let dressEpoch = 0

function newDress(): IndicatorDress {
	return {
		version: 0,
		size: 52,
		fontSize: 11,
		fontWeight: 600,
		distanceOffset: 6,
		arrowSize: 18,
		ringWidth: 2,
		distanceWidth: 50,
		distanceHeight: 16,
		distanceLine: 16,
		badgeLine: 20,
		artAspect: 1,
		artScale: 1,
		badgeSize: 20,
		badgeFontSize: 11,
		showDistance: true,
		showRing: true,
		drain: true,
		fontFamily: "",
		textColor: "",
		distanceEffect: ""
	}
}

/** The heroes' dress: the portrait across the whole disc, a ring draining with health. */
const heroDress = newDress()
/** The objectives' dress: a glyph inside the disc, a ring whole in the objective's colour. */
const objectiveDress = newDress()

const frame: IndicatorFrame = {
	x: 0,
	y: 0,
	directionX: 0,
	directionY: 0,
	angle: 0,
	icon: "",
	distance: "",
	labelX: 0,
	labelY: 0,
	health: 0,
	healthColor: "",
	baseColor: "",
	warningColor: "",
	warning: false,
	badge: "",
	opacity: 1
}

const objectiveFilter: ObjectiveFilter = {
	runes: true,
	rune: value => menu.RuneTypes.IsEnabled(value),
	wisdom: true,
	lotus: true,
	minLotuses: 1,
	maxDistance: 0
}

let styleThemeEpoch = -1
let styleFontScale = -1
let styleRadiusScale = -1
let styleSize = -1
let styleObjectiveSize = -1
let styleFontSize = -1
let styleFontWeight = -1
let styleDistanceOffset = -1
let styleRingWidth = -1
let styleShowDistance = false
let styleShowHealth = false
let styleImageType = -1
let styleFontFamily = ""
let styleTextColor = ""
let styleDistanceEffect = ""
/** How far the chosen face lets its digits down to centre them, as a share of their size. */
let styleCapShift = 0

function advanceClock(): void {
	const now = hrtime()
	const elapsed = frameAt > 0 ? now - frameAt : FADE_OUT_MS
	frameElapsed = elapsed
	frameAt = now
	riseStep = Math.min(1, elapsed / FADE_IN_MS)
	fallStep = Math.min(1, elapsed / FADE_OUT_MS)
}

function ramp(current: number, target: number): number {
	const step = target > current ? riseStep : fallStep
	const gap = target - current
	if (gap <= step && gap >= -step) {
		return target
	}
	return current + (gap > 0 ? step : -step)
}

function focusPoint(): Vector3 {
	screenCenter.x = MenuSDK.ViewportWidth() / 2
	screenCenter.y = MenuSDK.ViewportHeight() / 2
	return RendererSDK.ScreenToWorld(screenCenter)
}

function readObjectiveFilter(): ObjectiveFilter {
	objectiveFilter.runes = menu.Runes.value
	objectiveFilter.wisdom = menu.Wisdom.value
	objectiveFilter.lotus = menu.Lotus.value
	objectiveFilter.minLotuses = menu.MinLotuses.value
	objectiveFilter.maxDistance = menu.ObjectiveDistance.value
	return objectiveFilter
}

function activeItems(): readonly Target[] {
	advanceClock()
	retained.length = 0
	for (const entry of combined) {
		retained.push(entry)
	}
	combined.length = 0
	items = combined
	if (!menu.State.value || !CanDraw()) {
		retained.length = 0
		origin = undefined
		ClearActive()
		ClearObjectives()
		priority.Clear()
		return items
	}
	frameStamp++
	origin = focusPoint()
	const nearHeroes = ActiveHeroes(
		origin,
		menu.Distance.value,
		menu.MaxIndicators.value,
		menu.Visibility.SelectedID
	)
	for (const entry of nearHeroes) {
		entry.stamp = frameStamp
		combined.push(entry)
	}
	for (const entry of ActiveObjectives(origin, readObjectiveFilter())) {
		entry.stamp = frameStamp
		combined.push(entry)
	}
	for (const entry of retained) {
		if (entry.stamp !== frameStamp && entry.alpha > 0) {
			entry.stamp = frameStamp
			combined.push(entry)
		}
	}
	items = priority.Update(combined)
	let depthDistance = -1
	for (const entry of items) {
		depthDistance = Math.max(depthDistance + 1, Math.sqrt(entry.distanceSqr))
		entry.depthDistance = depthDistance
	}
	return items
}

/** Cuts a dress for indicators `size` across, from the style of this frame. */
function cut(
	dress: IndicatorDress,
	size: number,
	artAspect: number,
	artScale: number,
	showRing: boolean,
	drain: boolean
): void {
	const fontSize = styleFontSize
	dress.version = ++dressEpoch
	dress.size = size
	dress.fontSize = fontSize
	dress.fontWeight = styleFontWeight
	dress.distanceOffset = styleDistanceOffset
	dress.arrowSize = Math.max(12, Math.round(size * 0.34))
	dress.ringWidth = styleRingWidth
	dress.distanceWidth = Math.max(40, Math.round(size * 0.95), fontSize * 5)
	dress.distanceHeight = Math.max(14, Math.round(fontSize * 1.5))
	dress.distanceLine = Math.round(dress.distanceHeight + 2 * fontSize * styleCapShift)
	dress.artAspect = artAspect
	dress.artScale = artScale
	dress.badgeSize = Math.max(14, Math.round(size * 0.4))
	dress.badgeFontSize = Math.max(9, Math.round(dress.badgeSize * 0.62))
	dress.badgeLine = Math.round(
		dress.badgeSize + 2 * dress.badgeFontSize * styleCapShift
	)
	dress.showDistance = styleShowDistance
	dress.showRing = showRing
	dress.drain = drain
	dress.fontFamily = styleFontFamily
	dress.textColor = styleTextColor
	dress.distanceEffect = styleDistanceEffect
}

function begin(): boolean {
	if (!menu.State.value || items.length === 0 || origin === undefined || !CanDraw()) {
		return false
	}
	const width = MenuSDK.ViewportWidth()
	const height = MenuSDK.ViewportHeight()
	const scale = Math.max(height / 1080, 0.1)
	const size = Math.max(24, Math.round(menu.IndicatorSize.value * scale))
	const objectiveSize = Math.max(
		20,
		Math.round((size * menu.ObjectiveSize.value) / 100)
	)
	const fontSize = Math.max(
		9,
		Math.round(MenuSDK.ScaleMetric("font-size", menu.Text.FontSize.value) * scale)
	)
	const fontWeight = menu.Text.FontWeight()
	const distanceOffset = Math.round(menu.Text.Offset.value * scale)
	const distanceEffect = menu.Text.Effect()
	const ringWidth = RingBand(menu.RingWidth.value, scale)
	const showDistance = menu.ShowDistance.value
	const showHealth = menu.ShowHealth.value
	const textColor = PickerColor(menu.Text.Color)
	const themeEpoch = MenuSDK.Theme.PaletteEpoch
	const fontScale = MenuSDK.Theme.FontScale
	const radiusScale = MenuSDK.Theme.RadiusScale
	const fontFamily = menu.Text.FontFamily()
	imageType = menu.ImageType.SelectedID
	if (
		styleThemeEpoch !== themeEpoch ||
		styleFontScale !== fontScale ||
		styleRadiusScale !== radiusScale ||
		styleSize !== size ||
		styleObjectiveSize !== objectiveSize ||
		styleFontSize !== fontSize ||
		styleFontWeight !== fontWeight ||
		styleDistanceOffset !== distanceOffset ||
		styleRingWidth !== ringWidth ||
		styleShowDistance !== showDistance ||
		styleShowHealth !== showHealth ||
		styleImageType !== imageType ||
		styleFontFamily !== fontFamily ||
		styleTextColor !== textColor ||
		styleDistanceEffect !== distanceEffect
	) {
		styleThemeEpoch = themeEpoch
		styleFontScale = fontScale
		styleRadiusScale = radiusScale
		styleSize = size
		styleObjectiveSize = objectiveSize
		styleFontSize = fontSize
		styleFontWeight = fontWeight
		styleDistanceOffset = distanceOffset
		styleRingWidth = ringWidth
		styleShowDistance = showDistance
		styleShowHealth = showHealth
		styleImageType = imageType
		styleFontFamily = fontFamily
		styleCapShift = menu.Text.CapShift()
		styleTextColor = textColor
		styleDistanceEffect = distanceEffect
		cut(
			heroDress,
			size,
			imageType === EImageType.Icon ? 1 : PORTRAIT_ASPECT,
			1,
			showHealth,
			true
		)
		cut(objectiveDress, objectiveSize, 1, OBJECTIVE_ART, true, false)
	}
	labelPosition = menu.DistancePosition.SelectedID
	colorMode = menu.ColorMode.SelectedID
	customColor = PickerColor(menu.IndicatorColor)
	wisdomColor = PickerColor(menu.WisdomColor)
	lotusColor = PickerColor(menu.LotusColor)
	frame.warningColor = PickerColor(menu.WarningColor)
	fadeFloor = menu.DistanceFade.value / 100
	fadeRange = Math.max(1, menu.FadeDistance.value)
	occludedFactor = menu.HiddenOpacity.value / 100
	maxDistanceSqr = menu.Distance.value * menu.Distance.value
	warningDistanceSqr = menu.WarningDistance.value * menu.WarningDistance.value
	visibility = menu.Visibility.SelectedID
	Source2SDK.Projection.BeginFrame(width, height)
	const reserve = Math.max(menu.EdgeInset.value * scale, size * 0.92)
	geometry.Begin(
		width,
		height,
		menu.Placement.SelectedID,
		reserve,
		menu.FocusRadius.value / 100,
		menu.CircleFocus.value
	)
	const collide = menu.Overlap.SelectedID === EOverlapMode.Collision
	for (const entry of items) {
		const visible = prepare(entry)
		if (!collide || !visible) {
			entry.collisionOffset = 0
			continue
		}
		const dress = dressOf(entry)
		SetCollisionBounds(
			entry,
			dress.size,
			dress.arrowSize,
			entry.labelX,
			entry.labelY,
			dress.showDistance ? entry.labelWidth : 0,
			dress.distanceHeight
		)
	}
	if (collide) {
		collision.Update(items, geometry, frameElapsed, width, height)
	}
	return true
}

function dressOf(entry: Target): IndicatorDress {
	return entry.kind === ETargetKind.Hero ? heroDress : objectiveDress
}

function healthColor(health: number): string {
	if (health <= 0.25) {
		return MenuSDK.Theme.ValueOf("StatusBad")
	}
	return health <= 0.55
		? MenuSDK.Theme.ValueOf("StatusWarn")
		: MenuSDK.Theme.ValueOf("StatusGood")
}

function fadeOpacity(distanceSqr: number): number {
	const farness = Math.min(1, Math.sqrt(distanceSqr) / fadeRange)
	return 1 - farness * (1 - fadeFloor)
}

function coveredByHud(x: number, y: number): boolean {
	hudProbe.x = x
	hudProbe.y = y
	return GUIInfo.ContainsMiniMap(hudProbe) || GUIInfo.ContainsLowerHUD(hudProbe)
}

function onScreen(x: number, y: number): boolean {
	return geometry.OnScreen(x, y) && !coveredByHud(x, y)
}

/**
 * How strongly a target is drawn for what can be seen of it: a hero or a rune out of sight at the
 * occluded opacity, since where it stands is only where it was last seen. A pool and a shrine are
 * told of by the game wherever they are, so they are drawn whole.
 */
function sightFactor(entry: Target, visible: boolean): number {
	return visible ||
		entry.kind === ETargetKind.Wisdom ||
		entry.kind === ETargetKind.Lotus
		? 1
		: occludedFactor
}

/** Whether a hero still stands for an indicator this frame, the selection being a few frames old. */
function heroWanted(unit: Unit, distanceSqr: number, visible: boolean): boolean {
	return (
		IsTarget(unit) &&
		distanceSqr <= maxDistanceSqr &&
		PassesVisibility(visible, visibility)
	)
}

function prepare(entry: Target): boolean {
	const entity = entry.entity
	if (!entity.IsValid || origin === undefined) {
		entry.alpha = 0
		return false
	}
	const hero = entry.kind === ETargetKind.Hero
	const distanceSqr = (hero ? entity.NetworkedPosition : entity.Position).DistanceSqr2D(
		origin
	)
	entry.distanceSqr = distanceSqr
	const position = hero ? entity.VisualPosition : entity.Position
	const targetZ = position.z + (hero ? TARGET_HEIGHT : OBJECTIVE_HEIGHT)
	const headProjected = Source2SDK.Projection.WorldToScreenXYZ(
		position.x,
		position.y,
		targetZ,
		screen
	)
	const feetProjected = Source2SDK.Projection.WorldToScreenXYZ(
		position.x,
		position.y,
		position.z,
		feet
	)
	const onFrame =
		(headProjected && onScreen(screen[0], screen[1])) ||
		(feetProjected && onScreen(feet[0], feet[1]))
	const aimed = headProjected
		? geometry.DirectionFromScreen(screen[0], screen[1], direction)
		: geometry.Direction(position.x, position.y, targetZ, direction)
	if (aimed) {
		entry.directionX = direction[0]
		entry.directionY = direction[1]
		entry.angle = direction[2]
	} else if (entry.directionX === 0 && entry.directionY === 0) {
		entry.alpha = 0
		return false
	}
	const visible = entity.IsVisible
	const wanted =
		entry.selected &&
		aimed &&
		!onFrame &&
		(!hero || heroWanted(entry.entity, distanceSqr, visible))
	const target = wanted ? fadeOpacity(distanceSqr) * sightFactor(entry, visible) : 0
	entry.warning =
		hero && wanted && menu.NearbyWarning.value && distanceSqr <= warningDistanceSqr
	entry.alpha = ramp(entry.alpha, target)
	if (entry.alpha <= 0) {
		return false
	}
	geometry.Place(entry.directionX, entry.directionY, point)
	entry.x = point[0]
	entry.y = point[1]
	const dress = dressOf(entry)
	if (dress.showDistance) {
		placeLabel(entry, dress, distanceSqr)
	}
	return true
}

/**
 * The distance reading and where it stands: measured once per reading and dress, since the host
 * keeps the answer per string, and placed every frame, since the arrow it keeps clear of turns
 * with the target.
 */
function placeLabel(entry: Target, dress: IndicatorDress, distanceSqr: number): void {
	const text = DistanceText(entry, distanceSqr)
	if (entry.labelText !== text || entry.labelVersion !== dress.version) {
		entry.labelText = text
		entry.labelVersion = dress.version
		entry.labelWidth = MenuSDK.TextWidthPx(
			text,
			dress.fontSize,
			dress.fontWeight,
			dress.fontFamily
		)
	}
	PlaceLabel(
		labelPosition,
		entry.directionX,
		entry.directionY,
		dress.size / 2,
		dress.distanceOffset,
		entry.labelWidth,
		dress.distanceHeight,
		labelPoint
	)
	entry.labelX = labelPoint[0]
	entry.labelY = labelPoint[1]
}

function heroIcon(entry: TrackedHero): string {
	if (entry.iconMode !== imageType) {
		entry.iconMode = imageType
		entry.icon = entry.entity.TexturePath(imageType === EImageType.Icon) ?? ""
	}
	return entry.icon
}

function placeFrame(entry: Target): void {
	frame.x = entry.x
	frame.y = entry.y
	frame.directionX = entry.directionX
	frame.directionY = entry.directionY
	frame.angle = entry.angle
	frame.distance = dressOf(entry).showDistance ? entry.distanceText : ""
	frame.labelX = entry.labelX
	frame.labelY = entry.labelY
	frame.warning = entry.warning
	frame.opacity = entry.alpha
}

function updateHero(entry: TrackedHero, handle: MenuSDK.IWorldOverlayHandle): void {
	const unit = entry.entity
	const health = Math.max(0, Math.min(1, unit.MaxHP > 0 ? unit.HP / unit.MaxHP : 0))
	placeFrame(entry)
	frame.icon = heroIcon(entry)
	frame.health = health
	frame.healthColor = healthColor(health)
	frame.baseColor =
		colorMode === EColorMode.Custom ? customColor : PlayerColorCss(unit, customColor)
	frame.badge = ""
	UpdateIndicator(handle, heroDress, frame)
}

function updateObjective(
	entry: TrackedObjective,
	handle: MenuSDK.IWorldOverlayHandle
): void {
	const accent = ObjectiveColor(entry, wisdomColor, lotusColor)
	placeFrame(entry)
	frame.icon = ObjectiveIcon(entry)
	frame.health = 1
	frame.healthColor = accent
	frame.baseColor = accent
	frame.badge =
		entry.kind === ETargetKind.Lotus
			? (COUNTS[entry.count] ?? String(entry.count))
			: ""
	UpdateIndicator(handle, objectiveDress, frame)
}

function update(entry: Target, handle: MenuSDK.IWorldOverlayHandle): boolean {
	if (entry.alpha <= 0) {
		return false
	}
	if (entry.kind === ETargetKind.Hero) {
		updateHero(entry, handle)
	} else {
		updateObjective(entry, handle)
	}
	return true
}

const adapter: MenuSDK.IWorldOverlayAdapter<Target> = {
	Items: activeItems,
	Key: entry => entry.key,
	Structure: () => 0,
	Render: (entry, handle) => (
		<OffscreenIndicator handle={handle} objective={entry.kind !== ETargetKind.Hero} />
	),
	Begin: begin,
	Update: update,
	Distance: entry => entry.depthDistance
}

SeedEntities()
SeedObjectives()
EventsSDK.on("EntityCreated", TrackEntity)
EventsSDK.on("EntityCreated", TrackObjective)
EventsSDK.on("EntityDestroyed", UntrackEntity)
EventsSDK.on("EntityDestroyed", UntrackObjective)
EventsSDK.on("ModifierCreated", TrackObjectiveModifier)
MenuSDK.RegisterWorldOverlay("off-screen-esp", adapter)
