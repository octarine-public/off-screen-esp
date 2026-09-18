interface CachedColor {
	key: number
	css: string
}

const colors = new WeakMap<MenuSDK.ColorPicker, CachedColor>()
const pills = new Map<string, string>()
const rings = new Map<string, string>()
const arcs = new Map<string, string>()

/**
 * How many decorators one cache keeps before it is emptied whole: a dragged picker walks the key
 * every frame, and without the cap every shade it passed would be kept for the session.
 */
const PaintCache = 128

function keep(cache: Map<string, string>, key: string, decorator: string): string {
	if (cache.size >= PaintCache) {
		cache.clear()
	}
	cache.set(key, decorator)
	return decorator
}

function colorKey(color: Color): number {
	return ((color.r << 24) | (color.g << 16) | (color.b << 8) | color.a) >>> 0
}

export function PickerColor(picker: MenuSDK.ColorPicker): string {
	const color = picker.SelectedColor
	const key = colorKey(color)
	let cached = colors.get(picker)
	if (cached === undefined) {
		cached = { key, css: MenuSDK.cssColor(color) }
		colors.set(picker, cached)
	} else if (cached.key !== key) {
		cached.key = key
		cached.css = MenuSDK.cssColor(color)
	}
	return cached.css
}

/**
 * A ring `thickness` wide the whole way round, laid inside the edge of its circle the way the sdf
 * circle lays a border. The circle stands a pixel in from the element on every side, for the
 * antialiased edge, so the element is drawn two pixels wider than the ring.
 */
export function RingPaint(color: string, thickness: number): string {
	const key = `${color}|${thickness}`
	const decorator = rings.get(key)
	if (decorator === undefined) {
		return keep(
			rings,
			key,
			MenuSDK.SdfCircle("#00000000", thickness, color, 1).decorator!
		)
	}
	return decorator
}

/** A pill `thickness` wide, for a strip of a ring on a host without the capsules shader. */
export function ArcPaint(color: string, thickness: number): string {
	const key = `${color}|${thickness}`
	const decorator = arcs.get(key)
	if (decorator === undefined) {
		return keep(
			arcs,
			key,
			MenuSDK.SdfShape(thickness / 2, color, 0, "", 1).decorator!
		)
	}
	return decorator
}

export function PillPaint(fill: string, rim: string, radius: number): string {
	const key = `${fill}|${rim}|${radius}`
	const decorator = pills.get(key)
	if (decorator === undefined) {
		return keep(pills, key, MenuSDK.SdfShape(radius, fill, 1, rim, 1).decorator!)
	}
	return decorator
}
