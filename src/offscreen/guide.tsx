import { PickerColor, PillPaint } from "../lib/paint"
import { CIndicatorGeometry } from "./geometry"
import { EColorMode, OffscreenConfig as menu } from "./menu"

const DOTS = 48
const TAU = Math.PI * 2
const COS = Array.from({ length: DOTS }, (_, index) => Math.cos((index / DOTS) * TAU))
const SIN = Array.from({ length: DOTS }, (_, index) => Math.sin((index / DOTS) * TAU))
const DOT_NAMES = Array.from({ length: DOTS }, (_, index) => `dot${index}`)
const DOT_SIZE = 9
const GUIDE: readonly number[] = [0]
const EMPTY: readonly number[] = []
const point: [number, number] = [0, 0]
const geometry = new CIndicatorGeometry()

let dotSize = DOT_SIZE
let dotDecorator = ""
let lastAccent = ""
let lastEpoch = -1
let lastDotSize = -1

function shown(): boolean {
	return (
		MenuSDK.MenuManager.IsOpen &&
		menu.Page.IsOpen &&
		menu.State.value &&
		GameState.IsConnected
	)
}

function accentColor(): string {
	return menu.ColorMode.SelectedID === EColorMode.Custom
		? PickerColor(menu.IndicatorColor)
		: MenuSDK.Theme.AccentHex
}

function GuideRing(props: { handle: MenuSDK.IWorldOverlayHandle }) {
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
			{DOT_NAMES.map(name => (
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
		</div>
	)
}

function begin(): boolean {
	if (!shown()) {
		return false
	}
	const width = MenuSDK.ViewportWidth()
	const height = MenuSDK.ViewportHeight()
	const scale = Math.max(height / 1080, 0.1)
	const size = Math.max(24, Math.round(menu.IndicatorSize.value * scale))
	const reserve = Math.max(menu.EdgeInset.value * scale, size * 0.92)
	geometry.Begin(
		width,
		height,
		menu.Placement.SelectedID,
		reserve,
		menu.FocusRadius.value / 100,
		menu.CircleFocus.value
	)
	const accent = accentColor()
	const epoch = MenuSDK.Theme.PaletteEpoch
	const nextDotSize = Math.max(4, Math.round(DOT_SIZE * scale))
	if (accent !== lastAccent || epoch !== lastEpoch || nextDotSize !== lastDotSize) {
		lastAccent = accent
		lastEpoch = epoch
		lastDotSize = nextDotSize
		dotSize = nextDotSize
		dotDecorator = PillPaint(`${accent.slice(0, 7)}99`, "#00000000", dotSize / 2)
	}
	return true
}

function update(_item: number, handle: MenuSDK.IWorldOverlayHandle): boolean {
	const half = dotSize / 2
	for (let index = 0; index < DOTS; index++) {
		const dot = handle.Element(DOT_NAMES[index])
		if (dot === undefined) {
			return false
		}
		geometry.Place(COS[index], SIN[index], point)
		MenuSDK.WritePx(dot, "left", point[0] - half)
		MenuSDK.WritePx(dot, "top", point[1] - half)
		MenuSDK.WritePx(dot, "width", dotSize)
		MenuSDK.WritePx(dot, "height", dotSize)
		MenuSDK.WriteStyle(dot, "decorator", dotDecorator)
	}
	return true
}

const adapter: MenuSDK.IWorldOverlayAdapter<number> = {
	Items: () => (shown() ? GUIDE : EMPTY),
	Key: item => item,
	Structure: () => 0,
	Render: (_item, handle) => <GuideRing handle={handle} />,
	Begin: begin,
	Update: update
}

MenuSDK.RegisterWorldOverlay("off-screen-esp-guide", adapter)
