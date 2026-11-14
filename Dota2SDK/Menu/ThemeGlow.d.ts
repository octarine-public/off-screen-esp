// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** Where a halo takes its color from. */
	const enum EGlowColor {
		/** The scope's accent, which is what a glow wears until it is told otherwise. */
		Accent = 0,
		/** One color for everything the scope lights, whatever each surface is painted. */
		Custom = 1,
		/** The surface's own color, so a card, a bar and a warning each glow in their own. */
		Adaptive = 2,
		/** A color walking the circle of hues; the light itself is the animation. */
		Rainbow = 3
	}
	/** The names of {@link EGlowColor}, in its own order. */
	const GlowColorNames: readonly string[]
	/**
	 * How light a halo is drawn at, however dark the surface under it. A glass card is nearly black
	 * and a halo of nearly black is no halo, so an adaptive light keeps the surface's hue and its
	 * saturation and takes a lightness that can actually be seen.
	 */
	const GlowLightFloor = 0.62
	/** How many steps the walking light's circle of hues is cut into. */
	const GlowHueSteps = 60
	/**
	 * The walking light's color at one step of its circle. The circle is cut into steps rather than
	 * followed exactly: the halo is baked into a shader string, and a string per frame is a cache
	 * that never hits. The hue is a share of the circle rather than a degree of it, which is what
	 * the host's own conversion asks for.
	 *
	 * @example
	 * const color = GlowHueHex(step, 0.8)
	 */
	function GlowHueHex(step: number, saturation: number): string
	/** What a scope's glow is set from; the theme turns it into an {@link IThemeGlow}. */
	interface IThemeGlowSeed {
		/** How far the halo reaches past the surface's edge, in dp; nothing at all puts it out. */
		readonly size: number
		/** How much of a color the halo keeps, 0 to 1. */
		readonly strength: number
		/**
		 * Where the halo takes its color from. `Custom` and `Rainbow` light with {@link color}, or
		 * with the accent while it is empty; `Accent` with the accent; `Adaptive` with the color of
		 * each surface that gives one, and the accent elsewhere.
		 */
		readonly mode: EGlowColor
		/**
		 * The color `Custom` and `Rainbow` light with, the accent while it is empty; `Accent` and
		 * `Adaptive` ignore it.
		 */
		readonly color: string
	}
	/** What a theme asks a surface to glow with. */
	interface IThemeGlow {
		/**
		 * How far the halo reaches past the surface's edge, in dp, and nothing at all while the glow
		 * is off: every surface scales that reach the way it scales itself.
		 */
		readonly size: number
		/** The halo's color for a surface that has no color of its own to light with. */
		readonly color: string
		/** Whether a surface that knows its own color should light with that instead. */
		readonly adaptive: boolean
		/** How much of a color the halo keeps; what an adaptive one fades its surface by. */
		readonly strength: number
	}
	/**
	 * A theme that lights nothing, and the glow every scope wears until one is set. Its color is a
	 * real one, transparent: a surface may fade and hand it on without ever asking whether it is lit.
	 */
	const NoThemeGlow: IThemeGlow
	/** How far a glow reaches by default, in dp. */
	const DefaultGlowSize = 10
	/** How much of the accent a glow keeps by default. */
	const DefaultGlowStrength = 0.35
	/** Seconds one turn of the walking color takes by default. */
	const DefaultGlowSpeed = 6
	/** How far the walking color is from grey by default. */
	const DefaultGlowSaturation = 0.8
	/**
	 * The range the walking light's speed, in seconds per turn, and its saturation are held to: what
	 * the controls offer, and what a stored or shared theme is read into.
	 */
	const GlowStyleRange: {
		/** Seconds one turn of the walking color takes, fastest and slowest. */
		readonly speed: readonly [1, 30]
		/** How far the walking color is from grey, least and most. */
		readonly saturation: readonly [0.2, 1]
	}
	/** What the glow lights with, beyond the reach and strength the seeds carry. */
	interface IThemeGlowStyle {
		/** Where the halo takes its color from. */
		mode: EGlowColor
		/** The color {@link EGlowColor.Custom} lights with; the other modes do not read it. */
		color: string
		/** Seconds one turn of the walking color takes. */
		speed: number
		/** How far the walking color is from grey, 0 to 1. */
		saturation: number
	}
	/**
	 * How far a quad has to reach past the shape it carves for a halo `width` wide to fit outside
	 * it: `width` and one more for the antialiased edge, or 0 when `width` is 0 or less. The result
	 * is in the unit of `width`.
	 *
	 * @example
	 * const pad = MenuSDK.GlowPad(width)
	 * const style = MenuSDK.SdfShape(radius, fill, 0, "", pad, width, MenuSDK.Theme.Glow.color)
	 */
	function GlowPad(width: number): number
	/**
	 * The halo color for a surface painted `fill`. A glow that is not {@link IThemeGlow.adaptive}
	 * gives its own {@link IThemeGlow.color}; an adaptive one gives the hue and saturation of `fill`
	 * at a lightness of at least {@link GlowLightFloor}, with the glow's strength as alpha.
	 */
	function GlowColorOf(glow: IThemeGlow, fill: string): string
}
