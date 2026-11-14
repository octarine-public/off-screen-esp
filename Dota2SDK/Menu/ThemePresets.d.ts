// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** The colors and numbers a theme is made of; {@link BuildPalette} derives a palette from them. */
	interface IThemeSeeds {
		/**
		 * Color behind everything: the window, the glass of popovers and panels, pills and inputs, at
		 * {@link IThemeSeeds.Opacity}. The danger, status and new-setting colors shift until they read
		 * on it.
		 */
		Background: string
		/**
		 * Color of a card raised above the background. Its alpha sets how solid the card, surface and
		 * input edges are; the card fill ignores it and fades with {@link IThemeSeeds.Opacity} alone.
		 */
		Surface: string
		/**
		 * Color of text at full strength. The dimmer text tiers, the hover washes, the glass edges and
		 * the scrollbar are this color at a lower opacity.
		 */
		Text: string
		/**
		 * Color of the window frame and the edges derived from it. Its alpha carries into every edge
		 * it feeds, the pill's included, and every edge also thins faster than the window as
		 * {@link IThemeSeeds.Opacity} drops - a glass theme is not framed in solid lines.
		 */
		Border: string
		/**
		 * Color of the inert controls - switch tracks, slider rails and the dividers beside them.
		 * Omitted means they follow {@link IThemeSeeds.Border}, which is what every theme saved
		 * before this seed existed expects.
		 */
		Controls?: string
		/** How strongly glass blurs what stands behind it, in dp; 0 turns the blur off. */
		GlassBlur: number
		/**
		 * Opacity of the window and its glass fills. The edges fade with its square, so they thin
		 * faster, and the scrims behind dialogs darken as it drops.
		 */
		Opacity: number
		/** Corner radius scale as a fraction, 1 = 100%. Omitted means 1. */
		Radius?: number
		/**
		 * Whether switches, sliders, color swatches and the bar marking the selected row are drawn
		 * fully round whatever {@link IThemeSeeds.Radius} says. Omitted means they follow the corner
		 * scale.
		 */
		RoundControls?: boolean
		/** Text size scale as a fraction, 1 = 100%. Omitted means 1. */
		TextScale?: number
		/**
		 * Whether a settings page sets its card titles and the values its rows show close to
		 * {@link IThemeSeeds.Text}, the way its labels already are, so only descriptions read dimmed
		 * there. Navigation, tabs and every other surface keep their graded tiers. Omitted means the
		 * page is graded like the rest.
		 */
		BrightContent?: boolean
		/** Whether a surface is lit with a glow around it. Omitted means none. */
		Glow?: boolean
		/** How far the glow reaches past a surface's edge, in dp. Omitted means the default reach. */
		GlowSize?: number
		/** How much of the accent the glow keeps, 0..1. Omitted means the default strength. */
		GlowStrength?: number
	}
	/**
	 * The seeds of the "Default" preset. A stored theme whose blur or opacity is not a finite number
	 * takes theirs.
	 */
	const DefaultSeeds: IThemeSeeds
	/** The accent every theme starts from. */
	const DefaultAccent = "#9854ff"
	/**
	 * The range each numeric seed is held to: what the controls offer, and what a stored or shared
	 * theme is read into, so a number nobody could have set never reaches a surface.
	 */
	const SeedRange: {
		/** From no blur to 100dp. */
		readonly GlassBlur: readonly [0, 100]
		/** From 30% to fully opaque. */
		readonly Opacity: readonly [0.3, 1]
		/** From square corners to twice the default radius. */
		readonly Radius: readonly [0, 2]
		/** From 85% to 120% of the default text size. */
		readonly TextScale: readonly [0.85, 1.2]
		/** From 2dp to 40dp past a surface's edge. */
		readonly GlowSize: readonly [2, 40]
		/** From 5% of the glow's color to all of it. */
		readonly GlowStrength: readonly [0.05, 1]
	}
	/**
	 * Everything a theme preset captures: the seed colors plus the accent, and the typeface. A
	 * snapshot that names none is set in the default type: a theme saved before the font was part
	 * of one was made in it. A preset is seeds alone, so whoever puts one on carries the type worn
	 * over - `IThemeGalleryHost.Apply` does, and so does the page that dresses a surface.
	 */
	interface IThemeSnapshot {
		/** What the palette is built from, with the corner and text scales and the glow. */
		seeds: IThemeSeeds
		/** The accent color as `#rrggbb`; an alpha it carries is ignored. */
		accent: string
		/** The typeface. Omitted means the default one, {@link DefaultThemeFont}. */
		font?: IThemeFont
		/**
		 * Whether the window logo keeps its original artwork colors. Omitted means it does: only
		 * `false` tints it, with {@link IThemeSnapshot.logoColor} or the accent.
		 */
		keepOriginalLogoColor?: boolean
		/**
		 * The color the window logo is tinted with instead of the accent - its arrow alone when
		 * {@link IThemeSnapshot.logoSecondColor} paints the pieces beside it. Omitted means it follows
		 * the accent; {@link IThemeSnapshot.keepOriginalLogoColor} draws the original artwork over it.
		 */
		logoColor?: string
		/**
		 * The color of the three pieces beside the window logo's arrow, which makes the logo
		 * two-colored. Omitted means the whole logo is one color.
		 */
		logoSecondColor?: string
		/** The color the name beside the window logo is set in. Omitted means it follows the accent. */
		wordmarkColor?: string
	}
	/**
	 * Carries the logo choice of `from` over to `to`: the original artwork and the colors the logo
	 * and the name beside it are drawn in. It is the user's own, so it rides along with whatever
	 * theme is put on rather than being part of the look.
	 *
	 * @example
	 * const menu = { ...preset.theme }
	 * CarryThemeLogo(worn.menu, menu)
	 */
	function CarryThemeLogo(from: IThemeSnapshot, to: IThemeSnapshot): void
	/** How far the side pieces of a two-colored logo are faded from its arrow, 0..1. */
	const LogoSecondFade = 0.4
	/**
	 * Dresses a theme that carries no logo choice in the one its accent calls for: the original
	 * artwork on the brand accent, whose colors it already wears, and on any other accent the arrow
	 * in the accent over side pieces faded from it, so the brand violet never sits on a theme of
	 * another color.
	 *
	 * @example
	 * const menu = { ...preset.theme }
	 * FitThemeLogo(menu)
	 */
	function FitThemeLogo(theme: IThemeSnapshot): void
	/** A copy of a snapshot that shares nothing with it, for a store that keeps its own. */
	function CloneThemeSnapshot(snapshot: IThemeSnapshot): IThemeSnapshot
	/**
	 * Whether two sets of seeds make the same theme. Colors are compared with their alpha, the
	 * blur to the dp and opacity, radius, text scale and glow strength to the percent; an omitted
	 * seed counts as its default, and the glow's reach and strength only while it is on.
	 */
	function seedsEqual(a: IThemeSeeds, b: IThemeSeeds): boolean
	/**
	 * Whether two snapshots look alike: seeds, accent and typeface. The logo choice is left out - it
	 * is drawn by the menu alone and compared with the document that carries it.
	 */
	function snapshotsEqual(a: IThemeSnapshot, b: IThemeSnapshot): boolean
	/**
	 * A built-in theme of the gallery: seeds, accent and typeface, and what its glow lights with.
	 * The gallery puts one on whole, clearing the colors set by hand and fitting the logo with
	 * {@link FitThemeLogo}; only a theme of their own on the screen panels or world overlays is
	 * kept. The objects are shared: clone a theme before keeping it.
	 *
	 * @example
	 * const onyx = MenuSDK.ThemePresets.find(preset => preset.name === "Onyx")
	 */
	interface IThemePreset {
		/** The name the gallery shows; its translation is looked up by it. */
		readonly name: string
		/** The look the preset puts on: seeds, accent and typeface. */
		readonly theme: IThemeSnapshot
		/** What the glow lights with. Omitted means the accent, as a fresh theme does. */
		readonly glow?: IThemeGlowStyle
	}
	/**
	 * The built-in themes, in the order the gallery shows them: the default and its glass twin,
	 * then dark, glass and light.
	 */
	const ThemePresets: readonly IThemePreset[]
	/**
	 * What a saved theme says about itself at a glance. Chosen by whoever saved it, the way a cloud
	 * config carries its play style rather than being guessed from the colors - a theme built on a
	 * near-black background can still be meant as the light one of a pair.
	 */
	const enum EThemeBadge {
		/** No label; the card shows nothing. */
		None = 0,
		Light = 1,
		Dark = 2,
		Blur = 3
	}
	/** Display names of {@link EThemeBadge}, indexed by it. */
	const ThemeBadgeNames: string[]
	/**
	 * Whether `value` carries every seed a theme needs. Both the stored themes and the per-surface
	 * themes come off disk as `unknown`, and half a theme is worse than none.
	 */
	function IsThemeSeeds(value: unknown): value is IThemeSeeds
	/**
	 * The palette `seeds` make. Fills come from the background and surface colors at the seed
	 * opacity and edges from the surface and border colors at its square, each text tier is the text
	 * color at its own opacity, and the danger, status and new-setting colors keep their default
	 * hue, shifted in lightness until they read on the background. `LockedMark` and `DangerBorder`
	 * keep their {@link DefaultPalette} values.
	 */
	function BuildPalette(seeds: IThemeSeeds): IThemePalette
}
