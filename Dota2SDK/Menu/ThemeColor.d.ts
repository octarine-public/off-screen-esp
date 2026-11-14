// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** `value` rounded and held to 0 to 255, as two lowercase hex digits. */
	function toHex2(value: number): string
	/** `color` as `#rrggbb`, with `aa` appended when its alpha is below 255. */
	function cssColor(color: Color): string
	/**
	 * `hex` with `alpha`, 0 to 1, appended as two hex digits. `hex` has to be `#rrggbb`: an alpha
	 * already there is not replaced.
	 */
	function cssAlpha(hex: string, alpha: number): string
	/** The hue circle laid out left to right, as a decorator: what a rainbow shows while it stands still. */
	const HueGradient = "linear-gradient(to right, #ff0000, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000)"
	/** A gradient's two colours laid out left to right, as a decorator: what it shows while it stands still. */
	function gradientDecorator(from: Color, to: Color): string
	/**
	 * The red, green, blue and alpha of `#rrggbb` or `#rrggbbaa`, each 0 to 255; the alpha is 255
	 * when the string has none. The `#` is optional, and the three-digit form is not understood.
	 */
	function parseHex(hex: string): [number, number, number, number]
	/**
	 * `#rrggbb` from channels of 0 to 255, each rounded and held to that range, with `aa` appended
	 * when `a` is below 255.
	 */
	function composeHex(r: number, g: number, b: number, a: number): string
	/**
	 * `from` moved toward `to` by `ratio` on red, green and blue, 0 giving `from` and 1 giving `to`.
	 * The alpha stays that of `from`.
	 */
	function mixHex(from: string, to: string, ratio: number): string
	/** {@link mixHex} with the alpha moved toward that of `to` as well. */
	function lerpHex(from: string, to: string, ratio: number): string
	/** `hex` with its alpha multiplied by `alpha`, 0 to 1. */
	function fadeHex(hex: string, alpha: number): string
	/**
	 * `layer` laid over `ground` by its own alpha: the colour a translucent fill reads as on that
	 * surface. The ground keeps its alpha.
	 */
	function overHex(ground: string, layer: string): string
	/**
	 * How much of `tint` an edge scrim laid over a surface of that same colour may keep. A fill of
	 * alpha `a` over a surface of alpha `a` composites to `a + (1 - a) * a * p`, so the strip adds
	 * density of its own the moment the surface is glass, and reads as a band rather than as content
	 * running past an edge. The share returned holds that addition to 8% of density: an opaque
	 * surface takes the whole tint, because fading a fill into the colour already behind it changes
	 * nothing, and a transparent one takes only as much as it can hide.
	 *
	 * @example
	 * const stop = fadeHex(tint, ramp * scrimPeak(tint))
	 */
	function scrimPeak(tint: string): number
	/** `hex` with its alpha dropped, as `#rrggbb`. */
	function opaqueHex(hex: string): string
	/**
	 * `hex` moved by `ratio` toward black when the mean of its red, green and blue is above 140,
	 * toward white otherwise. The alpha stays.
	 */
	function shiftHex(hex: string, ratio: number): string
	/**
	 * An opaque `#rrggbb` from hue, saturation and lightness, each 0 to 1: the hue is a share of the
	 * circle, not degrees.
	 */
	function hslHex(hue: number, saturation: number, lightness: number): string
	/** The hue, saturation and lightness of `hex` as {@link hslHex} takes them, alpha ignored. */
	function hslOf(hex: string): [number, number, number]
	/** Relative luminance of an opaque color, per WCAG: 0 for black, 1 for white. */
	function luminanceOf(hex: string): number
	/**
	 * WCAG contrast ratio between two opaque colors, from 1 for a pair that matches to 21 for black
	 * on white. Text needs 7 to read comfortably, a control that only has to be spotted needs 3.
	 *
	 * @example
	 * const readable = contrastHex(Theme.ValueOf("TextPrimary"), Theme.ValueOf("WindowBg")) >= 7
	 */
	function contrastHex(a: string, b: string): number
	/** Whether a foreground has to go darker, rather than lighter, to be seen on `hex`. */
	function isLightHex(hex: string): boolean
	/**
	 * `hex` made darker on a light `against` and lighter on a dark one ({@link isLightHex}), in
	 * lightness steps of 0.02, until its contrast with `against` reaches `ratio`. Hue and saturation
	 * stay, the alpha is dropped, and the walk ends at black or white. A `hex` that already reads
	 * comes back as it is.
	 */
	function readableHex(hex: string, against: string, ratio: number): string
}
