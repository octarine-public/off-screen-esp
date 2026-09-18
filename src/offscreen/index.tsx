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
	DistanceText,
	IsTarget,
	PassesVisibility,
	SeedEntities,
	TrackedHero,
	TrackEntity,
	UntrackEntity
} from "./store"

const screen: [number, number] = [0, 0]
const feet: [number, number] = [0, 0]
const direction: [number, number, number] = [0, 0, 0]
const point: [number, number] = [0, 0]
const labelPoint: [number, number] = [0, 0]
const geometry = new CIndicatorGeometry()
const combined: TrackedHero[] = []
const retained: TrackedHero[] = []
const priority = new CIndicatorPriority<TrackedHero>()
const collision = new CIndicatorCollision()
const screenCenter = new Vector2()
const hudProbe = new Vector2()
const TARGET_HEIGHT = 120
const FADE_IN_MS = 130
const FADE_OUT_MS = 220
const PORTRAIT_ASPECT = 16 / 9

let items: readonly TrackedHero[] = combined
let origin: Nullable<Vector3>
let maxDistanceSqr = 0
let warningDistanceSqr = 0
let visibility = EVisibilityFilter.All
let imageType = EImageType.Portrait
let labelPosition = ELabelPosition.OppositeArrow
let colorMode = EColorMode.Player
let customColor = ""
let fadeFloor = 1
let fadeRange = 1
let occludedFactor = 1
let riseStep = 1
let fallStep = 1
let frameAt = 0
let frameElapsed = 0
let frameStamp = 0

const dress: IndicatorDress = {
	version: 0,
	size: 52,
	fontSize: 11,
	fontWeight: 600,
	distanceOffset: 6,
	arrowSize: 18,
	healthRingWidth: 5,
	distanceWidth: 50,
	distanceHeight: 16,
	portraitAspect: PORTRAIT_ASPECT,
	showDistance: true,
	showHealth: true,
	fontFamily: "",
	textColor: "",
	distanceEffect: ""
}

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
	opacity: 1
}

let styleThemeEpoch = -1
let styleFontScale = -1
let styleRadiusScale = -1
let styleSize = -1
let styleFontSize = -1
let styleShowDistance = false
let styleShowHealth = false
let styleImageType = -1
let styleFontFamily = ""

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

function activeItems(): readonly TrackedHero[] {
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

function begin(): boolean {
	if (!menu.State.value || items.length === 0 || origin === undefined || !CanDraw()) {
		return false
	}
	const width = MenuSDK.ViewportWidth()
	const height = MenuSDK.ViewportHeight()
	const scale = Math.max(height / 1080, 0.1)
	const size = Math.max(24, Math.round(menu.IndicatorSize.value * scale))
	const fontSize = Math.max(
		9,
		Math.round(MenuSDK.ScaleMetric("font-size", menu.Text.FontSize.value) * scale)
	)
	const fontWeight = menu.Text.FontWeight()
	const distanceOffset = Math.round(menu.Text.Offset.value * scale)
	const distanceEffect = menu.Text.Effect()
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
		styleFontSize !== fontSize ||
		styleShowDistance !== showDistance ||
		styleShowHealth !== showHealth ||
		styleImageType !== imageType ||
		styleFontFamily !== fontFamily ||
		dress.fontWeight !== fontWeight ||
		dress.distanceOffset !== distanceOffset ||
		dress.distanceEffect !== distanceEffect ||
		dress.textColor !== textColor
	) {
		styleThemeEpoch = themeEpoch
		styleFontScale = fontScale
		styleRadiusScale = radiusScale
		styleSize = size
		styleFontSize = fontSize
		styleShowDistance = showDistance
		styleShowHealth = showHealth
		styleImageType = imageType
		styleFontFamily = fontFamily
		const ringWidth = RingBand(size)
		dress.version++
		dress.size = size
		dress.fontSize = fontSize
		dress.fontWeight = fontWeight
		dress.distanceOffset = distanceOffset
		dress.arrowSize = Math.max(12, Math.round(size * 0.34))
		dress.healthRingWidth = ringWidth
		dress.distanceWidth = Math.max(40, Math.round(size * 0.95), fontSize * 5)
		dress.distanceHeight = Math.max(14, Math.round(fontSize * 1.5))
		dress.portraitAspect = imageType === EImageType.Icon ? 1 : PORTRAIT_ASPECT
		dress.showDistance = showDistance
		dress.showHealth = showHealth
		dress.fontFamily = fontFamily
		dress.textColor = textColor
		dress.distanceEffect = distanceEffect
	}
	labelPosition = menu.DistancePosition.SelectedID
	colorMode = menu.ColorMode.SelectedID
	customColor = PickerColor(menu.IndicatorColor)
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
		const visible = prepareHero(entry)
		if (!collide || !visible) {
			entry.collisionOffset = 0
			continue
		}
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

function prepareHero(entry: TrackedHero): boolean {
	const unit = entry.unit
	if (!unit.IsValid || origin === undefined) {
		entry.alpha = 0
		return false
	}
	const distanceSqr = unit.NetworkedPosition.DistanceSqr2D(origin)
	entry.distanceSqr = distanceSqr
	const position = unit.VisualPosition
	const targetZ = position.z + TARGET_HEIGHT
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
	const visible = unit.IsVisible
	const wanted =
		entry.selected &&
		aimed &&
		!onFrame &&
		IsTarget(unit) &&
		distanceSqr <= maxDistanceSqr &&
		PassesVisibility(visible, visibility)
	const target = wanted ? fadeOpacity(distanceSqr) * (visible ? 1 : occludedFactor) : 0
	entry.warning =
		wanted && menu.NearbyWarning.value && distanceSqr <= warningDistanceSqr
	entry.alpha = ramp(entry.alpha, target)
	if (entry.alpha <= 0) {
		return false
	}
	geometry.Place(entry.directionX, entry.directionY, point)
	entry.x = point[0]
	entry.y = point[1]
	if (dress.showDistance) {
		placeLabel(entry, distanceSqr)
	}
	return true
}

/**
 * The distance reading and where it stands: measured once per reading and dress, since the host
 * keeps the answer per string, and placed every frame, since the arrow it keeps clear of turns
 * with the hero.
 */
function placeLabel(entry: TrackedHero, distanceSqr: number): void {
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

function iconOf(entry: TrackedHero): string {
	if (entry.iconMode !== imageType) {
		entry.iconMode = imageType
		entry.icon = entry.unit.TexturePath(imageType === EImageType.Icon) ?? ""
	}
	return entry.icon
}

function updateHero(entry: TrackedHero, handle: MenuSDK.IWorldOverlayHandle): boolean {
	const unit = entry.unit
	const health = Math.max(0, Math.min(1, unit.MaxHP > 0 ? unit.HP / unit.MaxHP : 0))
	frame.x = entry.x
	frame.y = entry.y
	frame.directionX = entry.directionX
	frame.directionY = entry.directionY
	frame.angle = entry.angle
	frame.icon = iconOf(entry)
	frame.distance = dress.showDistance ? entry.distanceText : ""
	frame.labelX = entry.labelX
	frame.labelY = entry.labelY
	frame.health = health
	frame.healthColor = healthColor(health)
	frame.baseColor =
		colorMode === EColorMode.Custom ? customColor : PlayerColorCss(unit, customColor)
	frame.warning = entry.warning
	frame.opacity = entry.alpha
	UpdateIndicator(handle, dress, frame)
	return true
}

function update(entry: TrackedHero, handle: MenuSDK.IWorldOverlayHandle): boolean {
	if (entry.alpha <= 0) {
		return false
	}
	return updateHero(entry, handle)
}

const adapter: MenuSDK.IWorldOverlayAdapter<TrackedHero> = {
	Items: activeItems,
	Key: entry => entry.key,
	Structure: () => 0,
	Render: (_entry, handle) => <OffscreenIndicator handle={handle} />,
	Begin: begin,
	Update: update,
	Distance: entry => entry.depthDistance
}

SeedEntities()
EventsSDK.on("EntityCreated", TrackEntity)
EventsSDK.on("EntityDestroyed", UntrackEntity)
MenuSDK.RegisterWorldOverlay("off-screen-esp", adapter)
