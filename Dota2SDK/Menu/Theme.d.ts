// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** A scope's palette: each token's value by token name. */
	type Palette = Record<string, string>
	/** A token reference for every key of `P`, as {@link DefineTokens} returns them. */
	type TokenSet<P> = {
		readonly [K in keyof P]: ThemeTokenRef
	}
	/**
	 * The alphas the palette keeps the accent at as tokens of their own, `AccentA6` to `AccentA40`,
	 * each rebuilt with the accent. The preview's drop marks and selected chip borders use them.
	 */
	const AccentAlphas: readonly [0.06, 0.15, 0.25, 0.3, 0.4]
	/**
	 * The name of the palette token that holds the accent at `alpha`: `AccentA` and the alpha in
	 * percent, `AccentA6` for 0.06.
	 */
	function AccentAlphaToken(alpha: (typeof AccentAlphas)[number]): string
	/**
	 * Delivers every palette change made since the last flush, one listener call per moved scope.
	 * A theme apply moves the accent, the palette and the glow of up to three scopes in one pass,
	 * and each listener answers with a full retint and re-render - so the changes are batched here
	 * and drained once per menu frame instead of firing per setter.
	 */
	function FlushPaletteChanges(): void
	/**
	 * Subscribes to the glow of any scope being rebuilt: a color walking, a reach or a strength set,
	 * an accent it follows moving. For the layer that draws a halo in a React tree, which re-renders
	 * itself on it and nothing else - a whole tree is told through the palette, and only when a
	 * theme is put on.
	 */
	function SubscribeGlow(onChange: () => void): () => void
	/** Counts every time a scope's glow was rebuilt; what a glow subscriber compares. */
	function GlowEpoch(): number
	/**
	 * Adds `initial` to the palette of every scope and returns a token reference for each of its
	 * keys. A style that carries one is written with the active scope's value, and the menu rewrites
	 * it when that palette changes. A name the palette already holds is overwritten in every scope.
	 *
	 * @example
	 * const Own = MenuSDK.DefineTokens({ BadgeFill: "#ff8800" })
	 * return <div style={{ backgroundColor: Own.BadgeFill }} />
	 */
	function DefineTokens<P extends Record<keyof P, string>>(initial: P): TokenSet<P>
	/** Whether `value` is a token reference: an object with a `token` key. */
	function IsToken(value: unknown): value is ThemeTokenRef
	/** The value `reference` holds in the active scope's palette, `""` for a token it lacks. */
	function ResolveToken(reference: ThemeTokenRef): string
	/**
	 * Resolves a style color to the `#rrggbb[aa]` literal an SDF decorator needs.
	 * Token references are looked up in the live palette, so the result is only
	 * valid for the render that produced it.
	 */
	function HexOf(color: StyleColor): string
	/**
	 * Runs the listener whenever one scope repaints. Acting on it takes both a retint of that scope's
	 * tree and a re-render: a token style is rewritten in place, but an SDF fill bakes its hex into a
	 * decorator string, which only a render can rebuild.
	 */
	function OnPaletteChanged(listener: (scope: EThemeScope) => void): void
	/**
	 * Runs the listener whenever a scope's radius, control roundness or text scale moves. A scaled
	 * metric is baked in when the style value is written, so the tree that changed has to be rebuilt
	 * rather than re-rendered - the listener is told which scope moved.
	 */
	function OnMetricsChanged(listener: (scope: EThemeScope) => void): void
	/**
	 * A numeric style value as the active scope draws it: `font-size` times {@link Theme.FontScale},
	 * a property whose name ends in `radius` times {@link Theme.RadiusScale}, any other as given.
	 * `property` is the CSS spelling, `font-size` rather than `fontSize`.
	 */
	function ScaleMetric(property: string, value: number): number
	/**
	 * The class of {@link Theme}. Each read answers for the active scope ({@link ActiveThemeScope});
	 * each setter changes the scope it is given, the menu's by default.
	 */
	interface CTheme {
		/**
		 * The font family the active scope draws text in: the one registered for the selected
		 * language, otherwise the one picked for that scope.
		 */
		get FontFamily(): string
		/** The accent every scope starts with, `#9854ff`. The object is shared: clone it to edit it. */
		readonly DefaultAccent: Color
		/**
		 * The accent of the active scope: a switch track while on, the active tab's label, a primary
		 * button's fill. The object is the theme's own; change the accent with {@link SetAccent}.
		 */
		get Accent(): Color
		/**
		 * Counts the changes to the active scope's palette: every {@link SetAccent}, {@link SetPalette}
		 * or {@link SetGlow} call that changed something adds one. Compare it with an earlier read to
		 * know whether a colour moved.
		 */
		get PaletteEpoch(): number
		/**
		 * The glow the theme of the scope being drawn in asks its surfaces for. The object is rebuilt
		 * only when the theme moves, so a surface may read it every frame and compare it by identity.
		 *
		 * @example
		 * const width = Size(Theme.Glow.size)
		 */
		get Glow(): IThemeGlow
		/**
		 * The active scope's corner scale, 0 to 3, 1 by default. Every numeric style property whose
		 * name ends in `radius` is multiplied by it when written.
		 */
		get RadiusScale(): number
		/** Whether the theme draws its controls fully round, whatever its corner scale. */
		get RoundControls(): boolean
		/**
		 * How large text is drawn against the size a style asks for: the theme's text size times the
		 * size of the family the scope draws in ({@link FamilySize}).
		 */
		get FontScale(): number
		/** {@link Accent} as `#rrggbb`. */
		get AccentHex(): string
		/**
		 * `WindowBg` with 9% of the accent mixed in, keeping its alpha: the fill of an active tab or a
		 * selected page.
		 */
		get AccentSurface(): string
		/**
		 * {@link AccentSurface} as glass: the popover glass tinted the same way, keeping its own
		 * transparency, for a floating accent surface that blurs what stands behind it.
		 */
		get AccentGlass(): string
		/** {@link AccentHex} at `alpha`, 0 to 1, as `#rrggbbaa`. */
		AccentAlpha(alpha: number): string
		/**
		 * The theme's glass blur at a fraction of its full strength, as a `backdrop-filter`
		 * value. A backdrop blur is not touched by the element's own opacity, so a glass
		 * surface that fades in or out has to ramp this alongside it - otherwise the frosted
		 * rectangle holds full strength for the whole fade and then snaps away with the
		 * element. Below a quarter of a dp the filter is dropped entirely, so a blur nobody
		 * can see costs nothing.
		 *
		 * @example
		 * applyStyle(panel, { opacity: t, backdropFilter: Theme.BlurAt(t) })
		 */
		BlurAt(fraction: number): string
		/**
		 * The neutral an inert control paints instead of the accent, at the weight of muted text
		 * and mixed from the theme's own background and text so it fits any palette. Solid on
		 * purpose: it fills switch tracks and slider ranges, where the translucent text colours
		 * would blow out to white over a dark surface.
		 */
		get InertAccent(): string
		/**
		 * The first of `candidates` that reads on `fill`, or the one that comes closest when none of
		 * them clear the bar. A control painting a fill of its own - a primary or a danger button -
		 * covers the surface the palette's text was picked against, and on a light theme the two land
		 * on top of each other. Order the candidates by preference: the colour a control wants is
		 * kept as long as it survives its own fill, and only swapped for the pole behind it when it
		 * does not.
		 *
		 * @example
		 * const label = Theme.ReadableOn(Theme.AccentHex, Theme.ValueOf("TextPrimary"), Theme.ValueOf("PopoverBg"))
		 */
		ReadableOn(fill: string, ...candidates: string[]): string
		/**
		 * The accent as an inert control paints it. Everything under a switch that is off keeps
		 * its value and its contrast but drops the hue, so a page reads as "set up, not running"
		 * without fading the labels it is being read from.
		 */
		AccentHexOf(inert: boolean): string
		/** {@link AccentHexOf} at `alpha`, 0 to 1, as `#rrggbbaa`. */
		AccentAlphaOf(inert: boolean, alpha: number): string
		/** The value of palette token `token` in the active scope, `""` when it has none. */
		ValueOf(token: keyof IThemePalette): string
		/**
		 * Dresses one scope's surfaces in a glow: how far it reaches past their edge, in dp, how much
		 * of a color it keeps, and which color that is. A reach of nothing puts it out. It repaints
		 * the scope like a palette change, because that is what it is - the halo is baked into a
		 * decorator string, and only a fresh render rebuilds one.
		 *
		 * @example
		 * Theme.SetGlow({ size: 12, strength: 0.4, mode: EGlowColor.Accent, color: "" }, EThemeScope.Panels)
		 */
		SetGlow(next: IThemeGlowSeed, scope?: EThemeScope): void
		/**
		 * Moves one scope's halo onto another color and tells the glow layers alone, through
		 * {@link SubscribeGlow}. A color that walks moves several times a second, and a palette
		 * change is a retint of every panel in the scope and a render of every tree - while a halo
		 * is one layer that re-renders itself, and everything drawing one outside the menu window
		 * reads the glow every frame anyway.
		 */
		WalkGlow(color: string, scope?: EThemeScope): void
		/**
		 * Sets the accent of `scope`, fully opaque whatever the alpha of `color`, which is copied. The
		 * tokens built from it (`Accent`, `AccentMuted`, `AccentSurface`, the `AccentA` set) follow,
		 * and {@link OnPaletteChanged} listeners hear of it on the menu's next frame.
		 */
		SetAccent(color: Color, scope?: EThemeScope): void
		/**
		 * Writes `values` into the palette of `scope`, skipping `undefined`. When anything changed, the
		 * tokens built from the accent are rebuilt and {@link OnPaletteChanged} listeners hear of it on
		 * the menu's next frame. `PopoverBg` is always rebuilt as `WindowBg` made opaque, so a value
		 * given for it does not hold.
		 */
		SetPalette(values: Partial<IThemePalette>, scope?: EThemeScope): void
		/**
		 * Sets the corner scale, the text scale and whether controls are fully round for `scope`.
		 * `radius` is held to 0 to 3 and `font` to 0.7 to 1.5; a value left out stays. When anything
		 * changed, every {@link OnMetricsChanged} listener is told at once.
		 */
		SetMetrics(values: {
			radius?: number
			font?: number
			roundControls?: boolean
		}, scope?: EThemeScope): void
		/**
		 * Re-reads the family every scope draws its text in, and rebuilds each scope whose family is
		 * drawn at another size than before, as any metric change does: a size is baked into a style
		 * when it is written. Call it whenever a face moves - a family picked, a language switched.
		 */
		RefreshFamilySizes(): void
	}
	/**
	 * The colours, glow and metrics the menu paints with, one set per {@link EThemeScope}. A read
	 * answers for the active scope; `WithThemeScope` reads another.
	 *
	 * @example
	 * const world = MenuSDK.WithThemeScope(MenuSDK.EThemeScope.World, () => MenuSDK.Theme.AccentHex)
	 */
	const Theme: CTheme
}
