// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * A style that fills the element with a rounded rectangle a shader draws, antialiased per pixel:
	 * `radius` dp on the theme's corner scale, with a `borderW` dp border in `borderColor` when that
	 * is above 0. Colors are `#rrggbb` or `#rrggbbaa`. The color is baked into the style, so a fill
	 * taken from the palette has to be built again on every render. The element must carry no class
	 * whose rule sets or transitions `background-color`, which leaves a square fill behind the shape.
	 */
	function SdfRounded(radius: number, fill: string, borderW?: number, borderColor?: string): RmlStyle
	/**
	 * The radius a control is drawn at, in dp: `radius` on the theme's corner scale, or fully round -
	 * a pill, or a circle on a square control - while the theme keeps its controls round.
	 */
	function ControlCornerRadius(radius: number): number
	/**
	 * {@link SdfRounded} for a control such as a switch, a slider or a color swatch: rounded at
	 * `radius` on the theme's corner scale, or fully round while the theme keeps its controls round.
	 * A control that grows through a transform passes `inset`, the pixels its quad stands out around
	 * the shape; without it the shape flattens into an oval as it grows.
	 *
	 * @example
	 * <div style={{ width: 28, height: 18, ...MenuSDK.SdfControl(9, MenuSDK.Theme.AccentHex) }} />
	 */
	function SdfControl(radius: number, fill: string, inset?: number): RmlStyle
	/** {@link SdfControl} with a live theme palette color, resolved at call time. */
	function SdfControlTheme(radius: number, fill: keyof IThemePalette): RmlStyle
	/**
	 * The same fragment at an absolute radius, outside the theme's radius scale, and with the quad
	 * grown by `inset` pixels on every side so the antialiased edge stays off its boundary. What is
	 * drawn over the world keeps its own proportions — the menu's corner style is not its business —
	 * and the radius, like the border width, is in dp. `glowW` paints a soft halo that many px wide
	 * falling off outside the shape in `glowColor`; the inset has to leave room for it.
	 */
	function SdfShape(radius: number, fill: string, borderW?: number, borderColor?: string, inset?: number, glowW?: number, glowColor?: string, sweep?: number, from?: number): RmlStyle
	/**
	 * What a surface has to carry for {@link SdfGlowLayer} to land on it: the layer is placed against
	 * the surface's own box, and the surface has to open a stacking context of its own or the halo is
	 * painted before the surface's fill and vanishes under it. Spread it before any positioning of
	 * the surface's own, which then wins.
	 */
	const SdfGlowHost: RmlStyle
	/**
	 * The style of an element that draws `glow` around the surface holding it and nothing else, or
	 * `undefined` while `glow`, the theme's by default, has no size. The element reaches past the
	 * surface far enough for the halo, stands under the surface's content and takes no input. The
	 * surface carries {@link SdfGlowHost} and must not clip its children; one that clips draws its
	 * halo on a quad of its own with {@link SdfShape} instead.
	 *
	 * @example
	 * const glow = MenuSDK.SdfGlowLayer(PanelRadius)
	 * return (
	 * 	<div style={{ ...MenuSDK.SdfGlowHost, ...card }}>
	 * 		{glow !== undefined && <div style={glow} />}
	 * 		{children}
	 * 	</div>
	 * )
	 */
	function SdfGlowLayer(radius: number, glow?: IThemeGlow, 
	/** What the surface under the halo is painted, for a theme that lights it in its own color. */
	fill?: string): Nullable<RmlStyle>
	/**
	 * A wedge of the rounded shape for a dial or a cooldown to drain through: `percent` of a full
	 * turn, opening at `from` degrees with twelve o'clock as 0 and running clockwise; the rest is not
	 * drawn, and 100 draws the whole shape. The cut is antialiased like the shape's edge, `radius` is
	 * absolute rather than on the theme's corner scale, and `inset` grows the quad as in
	 * {@link SdfShape}.
	 */
	function SdfSweep(radius: number, fill: string, percent: number, from?: number, inset?: number): RmlStyle
	/**
	 * The shape as a checkerboard: `light` with the `cell`-dp square at the shape's top-left corner
	 * and every other one from it in `dark` - what shows through a translucent color laid over the
	 * same shape. The squares are cut by the shader, so they run right up to the edge, rounded or
	 * not, and share its coverage. The radius is absolute and `inset` grows the quad, as in
	 * {@link SdfShape}.
	 */
	function SdfChecker(radius: number, light: string, dark: string, cell: number, inset?: number): RmlStyle
	/**
	 * Style fragment for a circle rendered by the same pipeline: the radius always collapses to the
	 * element's half-extent, so the shape stays round at any size and skips the theme's radius scale
	 * — a ring around an avatar has to match the avatar, not the menu's corner style. `inset` grows
	 * the quad around the circle by that many pixels, keeping the antialiased edge off the geometry
	 * boundary, where the quad would clip it. `glowW` and `glowColor` light it on the terms
	 * {@link SdfShape} states.
	 */
	function SdfCircle(fill: string, borderW?: number, borderColor?: string, inset?: number, glowW?: number, glowColor?: string): RmlStyle
	/**
	 * The popover surface at a given radius: the menu glass made opaque and faded to 0.96, rimmed
	 * with a 1dp panel border — the fill the preset panels and the tooltips share.
	 * Palette-reactive, so re-apply it on render like every SDF fragment.
	 */
	function SdfPopoverTheme(radius: number): RmlStyle
	/**
	 * The same surface as glass: {@link SdfPopoverTheme}'s rim over the theme's own menu glass
	 * instead of an opaque read of it, so the panel keeps whatever transparency the palette asks
	 * for. A decorator cannot filter what stands behind it, and an unshaped backdrop filter frosts
	 * a square, so the box around the fill carries the blur and the raster `border-radius` that
	 * shapes it - the fill is the one element in, exactly as the driver flyout and the sub-settings
	 * panel build it. Palette-reactive like every SDF fragment.
	 *
	 * @example
	 * <div style={{ borderRadius: Radius, backdropFilter: Tokens.GlassBlur }}>
	 * 	<div style={SdfPopoverGlass(Radius)}>{children}</div>
	 * </div>
	 */
	function SdfPopoverGlass(radius: number): RmlStyle
	/** SdfRounded with live theme palette colors, resolved at call time. */
	function SdfRoundedTheme(radius: number, fill: keyof IThemePalette, borderW?: number, borderColor?: keyof IThemePalette): RmlStyle
}
