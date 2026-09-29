import { Fine, Snap } from "../lib/layout"
import { ArcPaint, PillPaint, RingPaint } from "../lib/paint"
import { ArtCentreOf } from "./art"
import { RingDegrees, RingFilled, RingStart, RingSweep } from "./ring"

const POINTER_PATH = `${__OCT_PACKAGE_ROOT__}/scripts_files/images/icons/pointer.svg`
const OPACITY = Array.from({ length: 51 }, (_, index) => String((index * 2) / 100))
const RAD_TO_DEG = 180 / Math.PI
const TAU = Math.PI * 2
const ARC_SEGMENT = Math.PI / 20
const ARC_STEPS = 32
const ARC_STEP = TAU / ARC_STEPS
const ARC_NAMES = Array.from({ length: ARC_STEPS }, (_, index) => `arc${index}`)
/**
 * The portrait's crop: a circle carved by the sdf shader, whose edge carries per-pixel coverage,
 * where RmlUi's own rounded clip steps along it. The radius collapses to the element's half-extent,
 * so one mask fits the portrait at every size.
 */
const PORTRAIT_MASK = MenuSDK.SdfCircle("#ffffff").decorator ?? "none"
/** The badge's fill: the portrait's own backing, near opaque, so its reading holds on any ground. */
const BADGE_FILL = "#181b20f2"
/**
 * Where the badge's centre stands on the rim: down and to the right, at half past four, or up at
 * half past one while the reading takes the bottom of the disc.
 */
const BADGE_REACH = Math.SQRT1_2
/** The margin a plate keeps each side of its reading, as a share of its height. */
const PLATE_MARGIN = 0.35
/**
 * The blur an indicator going out of focus wears, in half-pixel steps; none at all while it is
 * sharp, since a blur of zero still composites an element into a layer of its own. It stops at
 * 16px: a blur costs the renderer a pass of its own, and a wider one a heavier pass.
 */
const BLUR = Array.from({ length: 33 }, (_, index) =>
	index > 0 ? `blur(${index / 2}px)` : "none"
)
/**
 * The elements under the anchor, which the blur is written onto one by one: a filter's region is
 * the box it is written on, and the anchor's is a single pixel, so written there it would cut the
 * whole indicator away.
 */
const LAYERS = [
	"portraitBacking",
	"portraitClip",
	"health",
	"badge",
	"plate",
	"distance",
	"pointer",
	...ARC_NAMES
]

export interface IndicatorDress {
	version: number
	size: number
	fontSize: number
	fontWeight: number
	distanceOffset: number
	arrowSize: number
	ringWidth: number
	distanceWidth: number
	distanceHeight: number
	/**
	 * The line the distance and the badge are set on: their box, grown where the face stands its
	 * digits high in a line of their own height, so the digits land on the box's middle.
	 */
	distanceLine: number
	badgeLine: number
	/** The art's width over its height, and the share of the disc its height spans. */
	artAspect: number
	artScale: number
	/** How far above the disc's middle the art stands, clear of a reading at the bottom. */
	artLift: number
	/** The badge on the rim and the size its reading is set at. */
	badgeSize: number
	badgeFontSize: number
	showDistance: boolean
	/**
	 * The shade laid over the art under the reading, cut to the disc with it: a decorator, empty
	 * for none, and the strip of the disc it covers, from the disc's top.
	 */
	scrim: string
	scrimTop: number
	scrimHeight: number
	/** Whether the reading sits on a plate of its own, rimmed in the indicator's colour. */
	plate: boolean
	/** Whether the badge stands at half past one, clear of a reading at the bottom of the disc. */
	badgeRaised: boolean
	showRing: boolean
	/**
	 * Whether the ring drains with health, leaving the art bare where it has gone, the way
	 * maphack's teleport timer runs out, or stands whole in the accent.
	 */
	drain: boolean
	/** How far out of focus the indicator stands once it is all but gone, in pixels. */
	blur: number
	fontFamily: string
	textColor: string
	distanceEffect: string
}

export interface IndicatorFrame {
	x: number
	y: number
	/** The way the arrow points from the indicator, and its turn in degrees. */
	directionX: number
	directionY: number
	angle: number
	icon: string
	distance: string
	/** Where the distance stands, as an offset from the indicator's centre. */
	labelX: number
	labelY: number
	/** The reading's width, which a plate is cut to. */
	labelWidth: number
	health: number
	healthColor: string
	baseColor: string
	warningColor: string
	warning: boolean
	/** The reading on the badge; empty leaves the badge off. */
	badge: string
	opacity: number
	/** How far out of focus the indicator stands, as a share of the dress's blur: 0 sharp. */
	veil: number
}

interface IndicatorState {
	version: number
	icon: string
	/** The box the art is cut to, in whole screen pixels, and where it stands centred in the disc. */
	artWidth: number
	artHeight: number
	artLeft: number
	artTop: number
	distance: string
	healthColor: string
	filled: number
	accent: string
	badge: string
	badgeRim: string
	plateWidth: number
	plateRim: string
	batch: Nullable<MenuSDK.CChainBatch>
	stroke: { color: string; thickness: number }
	/** The step of {@link BLUR} the elements wear. */
	blur: number
}

const states = new WeakMap<MenuSDK.IWorldOverlayHandle, IndicatorState>()
const portraitRefs = new WeakMap<
	MenuSDK.IWorldOverlayHandle,
	(element: HTMLElement | null | undefined) => void
>()

/**
 * The portrait's ref, kept per handle so React never sees it change: on unmount the source the
 * element was cut from goes back to the host, and the state forgets it so a remount cuts a new one.
 */
function portraitRef(
	handle: MenuSDK.IWorldOverlayHandle
): (element: HTMLElement | null | undefined) => void {
	let ref = portraitRefs.get(handle)
	if (ref === undefined) {
		const store = handle.Ref("portrait")
		ref = element => {
			if (element === null || element === undefined) {
				const mounted = handle.Element("portrait")
				if (mounted !== undefined) {
					MenuSDK.ReleaseSizedArt(mounted)
				}
				const state = states.get(handle)
				if (state !== undefined) {
					state.icon = ""
					state.blur = 0
				}
			}
			store(element)
		}
		portraitRefs.set(handle, ref)
	}
	return ref
}

/**
 * One indicator: the disc with its art, the ring on its rim, the distance and the arrow. A hero's
 * ring drains with its health and leaves the art bare where it has gone; an objective wears its
 * ring whole, in its own colour, and a badge on the rim for a count.
 */
function Indicator(props: { handle: MenuSDK.IWorldOverlayHandle; objective: boolean }) {
	const { handle, objective } = props
	return (
		<div
			ref={handle.Ref("anchor")}
			style={{
				position: "absolute",
				width: 1,
				height: 1,
				overflow: "visible"
			}}
		>
			<div
				ref={handle.Ref("portraitBacking")}
				style={{
					position: "absolute",
					...MenuSDK.SdfCircle("#181b20", 0, "", 1)
				}}
			/>
			<div
				ref={handle.Ref("portraitClip")}
				style={{
					position: "absolute",
					overflow: "hidden",
					clip: "always"
				}}
			>
				<img
					ref={portraitRef(handle)}
					style={{ position: "absolute", display: "block" }}
				/>
				<div ref={handle.Ref("scrim")} style={{ position: "absolute" }} />
			</div>
			<div
				ref={handle.Ref("health")}
				style={{
					position: "absolute",
					backgroundColor: "transparent",
					borderRadius: 0
				}}
			/>
			{!objective &&
				!MenuSDK.CapsulesShaderSupported &&
				ARC_NAMES.map(name => (
					<div
						key={name}
						ref={handle.Ref(name)}
						style={{
							position: "absolute",
							backgroundColor: "transparent",
							borderRadius: 0
						}}
					/>
				))}
			{objective && (
				<div
					ref={handle.Ref("badge")}
					style={{
						position: "absolute",
						textAlign: "center",
						whiteSpace: "nowrap",
						backgroundColor: "transparent",
						borderRadius: 0
					}}
				/>
			)}
			<div
				ref={handle.Ref("plate")}
				style={{
					position: "absolute",
					backgroundColor: "transparent",
					borderRadius: 0
				}}
			/>
			<div
				ref={handle.Ref("distance")}
				style={{
					position: "absolute",
					textAlign: "center",
					whiteSpace: "nowrap"
				}}
			/>
			<svg
				ref={handle.Ref("pointer")}
				src={MenuSDK.ResolveAsset(POINTER_PATH, "vector")}
				style={{ position: "absolute", display: "block" }}
			/>
		</div>
	)
}

export function OffscreenIndicator(props: {
	handle: MenuSDK.IWorldOverlayHandle
	objective?: boolean
}) {
	return <Indicator handle={props.handle} objective={props.objective === true} />
}

/** Whether the ring is drawn in strips on this indicator: a draining one, on a host without the shader. */
function stripped(dress: Readonly<IndicatorDress>): boolean {
	return dress.drain && !MenuSDK.CapsulesShaderSupported
}

function layout(
	handle: MenuSDK.IWorldOverlayHandle,
	dress: Readonly<IndicatorDress>,
	state: IndicatorState
): void {
	const size = dress.size
	const half = size / 2
	const ringWidth = dress.ringWidth
	// The art is cut to the disc and the ring lies on its rim, over the art, the way cooldowns
	// lays the time left on a round modifier. A portrait spans the whole disc; an objective's
	// glyph stands inside it with room to breathe, clear of the ring.
	const artHeight = Math.max(1, Math.round(size * dress.artScale))
	const artWidth = Math.max(artHeight, Math.round(artHeight * dress.artAspect))
	state.artWidth = artWidth
	state.artHeight = artHeight
	state.artLeft = Math.round((size - artWidth) / 2)
	state.artTop = Math.round((size - artHeight) / 2) - dress.artLift
	const backing = handle.Element("portraitBacking")!
	MenuSDK.WritePx(backing, "left", -half)
	MenuSDK.WritePx(backing, "top", -half)
	MenuSDK.WritePx(backing, "width", size)
	MenuSDK.WritePx(backing, "height", size)
	const clip = handle.Element("portraitClip")!
	MenuSDK.WritePx(clip, "left", -half)
	MenuSDK.WritePx(clip, "top", -half)
	MenuSDK.WritePx(clip, "width", size)
	MenuSDK.WritePx(clip, "height", size)
	MenuSDK.WriteStyle(clip, "mask-image", PORTRAIT_MASK)
	const portrait = handle.Element("portrait")!
	MenuSDK.WritePx(portrait, "left", state.artLeft)
	MenuSDK.WritePx(portrait, "top", state.artTop)
	MenuSDK.WritePx(portrait, "width", artWidth)
	MenuSDK.WritePx(portrait, "height", artHeight)
	const scrim = handle.Element("scrim")!
	if (dress.scrim !== "") {
		MenuSDK.WritePx(scrim, "left", 0)
		MenuSDK.WritePx(scrim, "top", dress.scrimTop)
		MenuSDK.WritePx(scrim, "width", size)
		MenuSDK.WritePx(scrim, "height", dress.scrimHeight)
		MenuSDK.WriteStyle(scrim, "decorator", dress.scrim)
	}
	MenuSDK.WriteShown(scrim, dress.scrim !== "")
	if (!dress.showRing) {
		MenuSDK.WriteShown(handle.Element("health")!, false)
	}
	if (stripped(dress)) {
		const reach = ringWidth / 2 + 1
		for (let index = 0; index < ARC_STEPS; index++) {
			const segment = handle.Element(ARC_NAMES[index])!
			MenuSDK.WritePx(segment, "left", 0)
			MenuSDK.WritePx(segment, "top", 0)
			MenuSDK.WritePx(segment, "height", ringWidth + 2)
			MenuSDK.WriteStyle(segment, "transform-origin", `1px ${reach}px`)
			if (!dress.showRing) {
				MenuSDK.WriteShown(segment, false)
			}
		}
	}
	const badge = handle.Element("badge")
	if (badge !== undefined) {
		const badgeSize = dress.badgeSize
		const at = Math.round(half * BADGE_REACH - badgeSize / 2)
		MenuSDK.WritePx(badge, "left", at)
		MenuSDK.WritePx(
			badge,
			"top",
			dress.badgeRaised ? Math.round(-half * BADGE_REACH - badgeSize / 2) : at
		)
		MenuSDK.WritePx(badge, "width", badgeSize)
		MenuSDK.WritePx(badge, "height", badgeSize)
		MenuSDK.WritePx(badge, "font-size", dress.badgeFontSize)
		MenuSDK.WritePx(badge, "line-height", dress.badgeLine)
		MenuSDK.WriteStyle(badge, "font-family", dress.fontFamily)
		MenuSDK.WriteFmt(badge, "font-weight", 700, "")
		MenuSDK.WriteStyle(badge, "color", "#ffffff")
		MenuSDK.WriteText(badge, "")
		MenuSDK.WriteShown(badge, false)
	}
	const distance = handle.Element("distance")!
	MenuSDK.WritePx(distance, "left", -Math.round(dress.distanceWidth / 2))
	MenuSDK.WritePx(distance, "top", -Math.round(dress.distanceHeight / 2))
	MenuSDK.WritePx(distance, "width", dress.distanceWidth)
	MenuSDK.WritePx(distance, "height", dress.distanceHeight)
	MenuSDK.WritePx(distance, "font-size", dress.fontSize)
	MenuSDK.WritePx(distance, "line-height", dress.distanceLine)
	MenuSDK.WriteStyle(distance, "font-family", dress.fontFamily)
	MenuSDK.WriteFmt(distance, "font-weight", dress.fontWeight, "")
	MenuSDK.WriteStyle(distance, "color", dress.textColor)
	MenuSDK.WriteStyle(distance, "font-effect", dress.distanceEffect)
	MenuSDK.WriteText(distance, "")
	const plate = handle.Element("plate")!
	const plated = dress.plate && dress.showDistance
	if (plated) {
		MenuSDK.WritePx(plate, "top", -Math.round(dress.distanceHeight / 2) - 1)
		MenuSDK.WritePx(plate, "height", dress.distanceHeight + 2)
	}
	MenuSDK.WriteShown(plate, plated)
	const pointer = handle.Element("pointer")!
	MenuSDK.WritePx(pointer, "left", 0)
	MenuSDK.WritePx(pointer, "top", 0)
	MenuSDK.WritePx(pointer, "width", dress.arrowSize)
	MenuSDK.WritePx(pointer, "height", dress.arrowSize)
	MenuSDK.WriteShown(distance, dress.showDistance)
}

function updateBadge(
	handle: MenuSDK.IWorldOverlayHandle,
	dress: Readonly<IndicatorDress>,
	frame: Readonly<IndicatorFrame>,
	state: IndicatorState
): void {
	const badge = handle.Element("badge")
	if (badge === undefined) {
		return
	}
	if (state.badge !== frame.badge) {
		MenuSDK.WriteText(badge, frame.badge)
		MenuSDK.WriteShown(badge, frame.badge !== "")
		state.badge = frame.badge
	}
	if (frame.badge !== "" && state.badgeRim !== frame.baseColor) {
		MenuSDK.WriteStyle(
			badge,
			"decorator",
			PillPaint(BADGE_FILL, frame.baseColor, dress.badgeSize / 2)
		)
		state.badgeRim = frame.baseColor
	}
}

/**
 * The plate under the reading, cut to it with a margin each side and never narrower than round.
 * It is an even number of pixels wide, so it centres on the pixel the reading does.
 */
function updatePlate(
	handle: MenuSDK.IWorldOverlayHandle,
	dress: Readonly<IndicatorDress>,
	frame: Readonly<IndicatorFrame>,
	state: IndicatorState,
	x: number,
	y: number
): void {
	const plate = handle.Element("plate")!
	const height = dress.distanceHeight
	const span = Math.max(height, frame.labelWidth + height * PLATE_MARGIN * 2)
	const width = 2 * Math.round(span / 2) + 2
	if (state.plateWidth !== width) {
		MenuSDK.WritePx(plate, "left", -width / 2)
		MenuSDK.WritePx(plate, "width", width)
		state.plateWidth = width
	}
	if (state.plateRim !== frame.baseColor) {
		MenuSDK.WriteStyle(
			plate,
			"decorator",
			PillPaint(BADGE_FILL, frame.baseColor, height / 2)
		)
		state.plateRim = frame.baseColor
	}
	MenuSDK.WritePlacement(plate, x, y, 0)
}

/**
 * Writes one frame of an indicator through its mounted elements. Art with room around it is
 * centred by what of it shows on the backing rather than by its canvas, since a hero icon's glyph
 * stands high or low on its own. The reading is snapped as an offset from the anchor, not as a
 * point on the screen, so it moves in step with the disc and never slips a pixel against it as
 * the indicator glides.
 */
export function UpdateIndicator(
	handle: MenuSDK.IWorldOverlayHandle,
	dress: Readonly<IndicatorDress>,
	frame: Readonly<IndicatorFrame>
): void {
	const anchor = handle.Element("anchor")
	if (anchor === undefined) {
		return
	}
	const anchorX = Snap(frame.x)
	const anchorY = Snap(frame.y)
	MenuSDK.WritePx(anchor, "left", anchorX)
	MenuSDK.WritePx(anchor, "top", anchorY)
	let state = states.get(handle)
	if (state === undefined) {
		state = {
			version: -1,
			icon: "",
			artWidth: 0,
			artHeight: 0,
			artLeft: 0,
			artTop: 0,
			distance: "",
			healthColor: "",
			filled: -1,
			accent: "",
			badge: "",
			badgeRim: "",
			plateWidth: 0,
			plateRim: "",
			batch: MenuSDK.CapsulesShaderSupported
				? new MenuSDK.CChainBatch()
				: undefined,
			stroke: { color: "", thickness: 0 },
			blur: 0
		}
		states.set(handle, state)
	}
	if (state.version !== dress.version) {
		layout(handle, dress, state)
		state.version = dress.version
		state.icon = ""
		state.distance = ""
		state.accent = ""
		state.healthColor = ""
		state.filled = -1
		state.badge = ""
		state.badgeRim = ""
		state.plateWidth = 0
		state.plateRim = ""
	}
	const accent = frame.warning ? frame.warningColor : frame.baseColor
	if (state.accent !== accent) {
		MenuSDK.WriteStyle(handle.Element("pointer")!, "image-color", accent)
		state.accent = accent
	}
	const arrowOffset = dress.size / 2 + dress.arrowSize * 0.42 + 4
	MenuSDK.WritePlacement(
		handle.Element("pointer")!,
		Fine(frame.x - anchorX + frame.directionX * arrowOffset - dress.arrowSize / 2),
		Fine(frame.y - anchorY + frame.directionY * arrowOffset - dress.arrowSize / 2),
		frame.angle
	)
	if (state.icon !== frame.icon) {
		const portrait = handle.Element("portrait")!
		if (dress.artScale < 1) {
			const centre = ArtCentreOf(frame.icon)
			MenuSDK.WritePx(
				portrait,
				"left",
				state.artLeft - Math.round(centre.x * state.artWidth)
			)
			MenuSDK.WritePx(
				portrait,
				"top",
				state.artTop - Math.round(centre.y * state.artHeight)
			)
		}
		MenuSDK.WriteSizedArt(portrait, frame.icon, state.artWidth, state.artHeight)
		MenuSDK.WriteShown(portrait, frame.icon !== "")
		state.icon = frame.icon
	}
	if (dress.showDistance) {
		const distance = handle.Element("distance")!
		if (state.distance !== frame.distance) {
			MenuSDK.WriteText(distance, frame.distance)
			state.distance = frame.distance
		}
		const labelX = Snap(frame.labelX)
		const labelY = Snap(frame.labelY)
		MenuSDK.WritePlacement(distance, labelX, labelY, 0)
		if (dress.plate) {
			updatePlate(handle, dress, frame, state, labelX, labelY)
		}
	}
	updateBadge(handle, dress, frame, state)
	const filled = RingFilled(frame.health)
	if (dress.showRing) {
		const health = handle.Element("health")!
		const ringWidth = dress.ringWidth
		const changed = state.filled !== filled || state.healthColor !== frame.healthColor
		if (filled >= RingDegrees) {
			if (changed) {
				const outer = dress.size / 2 + 1
				MenuSDK.WritePx(health, "left", -outer)
				MenuSDK.WritePx(health, "top", -outer)
				MenuSDK.WritePx(health, "width", outer * 2)
				MenuSDK.WritePx(health, "height", outer * 2)
				MenuSDK.WriteStyle(
					health,
					"decorator",
					RingPaint(frame.healthColor, ringWidth)
				)
				if (stripped(dress)) {
					for (let index = 0; index < ARC_STEPS; index++) {
						MenuSDK.WriteShown(handle.Element(ARC_NAMES[index])!, false)
					}
				}
			}
			MenuSDK.WriteShown(health, true)
		} else if (MenuSDK.CapsulesShaderSupported) {
			if (filled <= 0) {
				MenuSDK.WriteShown(health, false)
			} else {
				const batch = state.batch!
				const stroke = state.stroke
				const radius = (dress.size - ringWidth) / 2
				const sweep = RingSweep(filled)
				const count = Math.min(
					Math.ceil(sweep / ARC_SEGMENT),
					MenuSDK.ShaderSlotSegments
				)
				const step = sweep / count
				const start = RingStart(filled)
				batch.Reset()
				let fromX = Math.cos(start) * radius
				let fromY = Math.sin(start) * radius
				for (let index = 1; index <= count; index++) {
					const angle = start + step * index
					const toX = Math.cos(angle) * radius
					const toY = Math.sin(angle) * radius
					batch.Segment(fromX, fromY, toX, toY, 0)
					fromX = toX
					fromY = toY
				}
				stroke.color = frame.healthColor
				stroke.thickness = ringWidth
				batch.Flush(health, stroke)
			}
		} else {
			MenuSDK.WriteShown(health, false)
			if (changed) {
				const radius = (dress.size - ringWidth) / 2
				const reach = ringWidth / 2 + 1
				const sweep = RingSweep(filled)
				const start = RingStart(filled)
				const paint = ArcPaint(frame.healthColor, ringWidth)
				for (let index = 0; index < ARC_STEPS; index++) {
					const segment = handle.Element(ARC_NAMES[index])!
					const from = index * ARC_STEP
					const span = Math.min(ARC_STEP, sweep - from)
					if (span <= 0) {
						MenuSDK.WriteShown(segment, false)
						continue
					}
					const head = start + from
					const tail = head + span
					const x = Math.cos(head) * radius
					const y = Math.sin(head) * radius
					const dx = Math.cos(tail) * radius - x
					const dy = Math.sin(tail) * radius - y
					MenuSDK.WritePx(segment, "width", Math.sqrt(dx * dx + dy * dy) + 2)
					MenuSDK.WriteStyle(segment, "decorator", paint)
					MenuSDK.WritePlacement(
						segment,
						x - 1,
						y - reach,
						Math.atan2(dy, dx) * RAD_TO_DEG
					)
					MenuSDK.WriteShown(segment, true)
				}
			}
		}
		state.filled = filled
		state.healthColor = frame.healthColor
	}
	MenuSDK.WriteStyle(anchor, "opacity", OPACITY[Math.round(frame.opacity * 50)])
	const blur = Math.min(Math.round(frame.veil * dress.blur * 2), BLUR.length - 1)
	if (state.blur !== blur) {
		for (const name of LAYERS) {
			const element = handle.Element(name)
			if (element !== undefined) {
				MenuSDK.WriteStyle(element, "filter", BLUR[blur])
			}
		}
		state.blur = blur
	}
}
