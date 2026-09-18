import { Fine, Snap } from "../lib/layout"
import { ArcPaint, RingPaint } from "../lib/paint"
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

export interface IndicatorDress {
	version: number
	size: number
	fontSize: number
	fontWeight: number
	distanceOffset: number
	arrowSize: number
	healthRingWidth: number
	distanceWidth: number
	distanceHeight: number
	portraitAspect: number
	showDistance: boolean
	showHealth: boolean
	fontFamily: string
	textColor: string
	distanceEffect: string
}

export interface IndicatorFrame {
	x: number
	y: number
	directionX: number
	directionY: number
	angle: number
	icon: string
	distance: string
	/** Where the distance stands, as an offset from the indicator's centre. */
	labelX: number
	labelY: number
	health: number
	healthColor: string
	baseColor: string
	warningColor: string
	warning: boolean
	opacity: number
}

interface IndicatorState {
	version: number
	icon: string
	/** The box the portrait is cut to, in whole screen pixels. */
	portraitWidth: number
	portraitHeight: number
	distance: string
	healthColor: string
	filled: number
	accent: string
	batch: Nullable<MenuSDK.CChainBatch>
	stroke: { color: string; thickness: number }
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
				}
			}
			store(element)
		}
		portraitRefs.set(handle, ref)
	}
	return ref
}

function Indicator(props: { handle: MenuSDK.IWorldOverlayHandle }) {
	const { handle } = props
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
			</div>
			<div
				ref={handle.Ref("health")}
				style={{
					position: "absolute",
					backgroundColor: "transparent",
					borderRadius: 0
				}}
			/>
			{!MenuSDK.CapsulesShaderSupported &&
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

export function OffscreenIndicator(props: { handle: MenuSDK.IWorldOverlayHandle }) {
	return <Indicator handle={props.handle} />
}

function layout(
	handle: MenuSDK.IWorldOverlayHandle,
	dress: Readonly<IndicatorDress>,
	state: IndicatorState
): void {
	const size = dress.size
	const half = size / 2
	const ringWidth = dress.healthRingWidth
	// The portrait is cut to the whole disc and the health ring lies on its rim, over the art, the
	// way cooldowns lays the time left on a round modifier: what the ring no longer reaches shows
	// the portrait's own edge, as the game's buff icons do as they drain.
	const portraitWidth = Math.max(size, Math.round(size * dress.portraitAspect))
	state.portraitWidth = portraitWidth
	state.portraitHeight = size
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
	MenuSDK.WritePx(portrait, "left", Math.round((size - portraitWidth) / 2))
	MenuSDK.WritePx(portrait, "top", 0)
	MenuSDK.WritePx(portrait, "width", portraitWidth)
	MenuSDK.WritePx(portrait, "height", size)
	const reach = ringWidth / 2 + 1
	if (!dress.showHealth) {
		MenuSDK.WriteShown(handle.Element("health")!, false)
	}
	if (!MenuSDK.CapsulesShaderSupported) {
		for (let index = 0; index < ARC_STEPS; index++) {
			const segment = handle.Element(ARC_NAMES[index])!
			MenuSDK.WritePx(segment, "left", 0)
			MenuSDK.WritePx(segment, "top", 0)
			MenuSDK.WritePx(segment, "height", ringWidth + 2)
			MenuSDK.WriteStyle(segment, "transform-origin", `1px ${reach}px`)
			if (!dress.showHealth) {
				MenuSDK.WriteShown(segment, false)
			}
		}
	}
	const distance = handle.Element("distance")!
	MenuSDK.WritePx(distance, "left", -Math.round(dress.distanceWidth / 2))
	MenuSDK.WritePx(distance, "top", -Math.round(dress.distanceHeight / 2))
	MenuSDK.WritePx(distance, "width", dress.distanceWidth)
	MenuSDK.WritePx(distance, "height", dress.distanceHeight)
	MenuSDK.WritePx(distance, "font-size", dress.fontSize)
	MenuSDK.WritePx(distance, "line-height", dress.distanceHeight)
	MenuSDK.WriteStyle(distance, "font-family", dress.fontFamily)
	MenuSDK.WriteFmt(distance, "font-weight", dress.fontWeight, "")
	MenuSDK.WriteStyle(distance, "color", dress.textColor)
	MenuSDK.WriteStyle(distance, "font-effect", dress.distanceEffect)
	MenuSDK.WriteText(distance, "")
	const pointer = handle.Element("pointer")!
	MenuSDK.WritePx(pointer, "left", 0)
	MenuSDK.WritePx(pointer, "top", 0)
	MenuSDK.WritePx(pointer, "width", dress.arrowSize)
	MenuSDK.WritePx(pointer, "height", dress.arrowSize)
	MenuSDK.WriteShown(distance, dress.showDistance)
}

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
			portraitWidth: 0,
			portraitHeight: 0,
			distance: "",
			healthColor: "",
			filled: -1,
			accent: "",
			batch: MenuSDK.CapsulesShaderSupported
				? new MenuSDK.CChainBatch()
				: undefined,
			stroke: { color: "", thickness: 0 }
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
		MenuSDK.WriteSizedArt(
			portrait,
			frame.icon,
			state.portraitWidth,
			state.portraitHeight
		)
		MenuSDK.WriteShown(portrait, frame.icon !== "")
		state.icon = frame.icon
	}
	if (dress.showDistance) {
		const distance = handle.Element("distance")!
		if (state.distance !== frame.distance) {
			MenuSDK.WriteText(distance, frame.distance)
			state.distance = frame.distance
		}
		MenuSDK.WritePlacement(
			distance,
			Snap(frame.x + frame.labelX) - anchorX,
			Snap(frame.y + frame.labelY) - anchorY,
			0
		)
	}
	const filled = RingFilled(frame.health)
	if (dress.showHealth) {
		const health = handle.Element("health")!
		const ringWidth = dress.healthRingWidth
		const changed = state.filled !== filled || state.healthColor !== frame.healthColor
		if (filled >= RingDegrees) {
			if (changed) {
				// the sdf circle lays its border inside its edge, and wants a pixel of quad around it
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
				if (!MenuSDK.CapsulesShaderSupported) {
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
}
