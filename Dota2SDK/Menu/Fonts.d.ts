// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** One font file the menu ships, as {@link FontRegistry} lists it. */
	interface FontVariant {
		/** The family the face belongs to, by the name styles and the font picker use. */
		readonly family: string
		/** Path of the font file under {@link FontsBase}. */
		readonly file: string
		/** The face's weight: 400 regular, 500 medium, 600 semibold, 700 bold. */
		readonly weight: number
		/**
		 * Whether the face is the family's italic. In a family without one, italic text is set
		 * upright ({@link MenuFontStyle}).
		 */
		readonly italic: boolean
		/**
		 * Whether the face is loaded as a fallback face. A family whose every face is a fallback, as
		 * NotoEmoji's is, stays out of the font picker.
		 */
		readonly fallback: boolean
		/**
		 * The language this face draws, by the name the menu's language list uses: while the menu is
		 * in that language its text is set in this family, and the face is loaded only while the list
		 * has it.
		 * Omitted on a face of no particular language.
		 */
		readonly language?: string
	}
	/**
	 * Loads the font file at `path` into the menu's renderer as a face of the family the file
	 * names, at `weight`; a fallback face draws the glyphs the faces of a text's own family lack.
	 * Answers whether the file loaded.
	 * @example
	 * MenuSDK.LoadFontFace("panorama/fonts/radiance-bold.otf", 700)
	 */
	function LoadFontFace(path: string, weight: number, fallback?: boolean): boolean
	/** The asset folder every {@link FontVariant.file} is relative to. */
	const FontsBase = "fonts/"
	/**
	 * The family a surface is set in until a theme picks another, and the one a family the pickers
	 * do not offer falls back to.
	 */
	const DefaultFamily = "Roboto"
	/**
	 * Every font face the menu ships, one per file; {@link ActiveFonts} picks the ones it loads. The
	 * font picker lists families in this order.
	 */
	const FontRegistry: FontVariant[]
	/**
	 * The factor `family` is drawn at against the font size a style asks for, so every family takes
	 * about the room the menu was laid out for in Roboto: below 1 for a family that sets larger, above
	 * 1 for a narrower one, and 1 for Roboto and every family drawn at the size asked for.
	 */
	function FamilySize(family: string): number
	/**
	 * The faces of {@link FontRegistry} the menu loads: all of them but those drawing a language the
	 * menu's language list does not have.
	 */
	function ActiveFonts(): FontVariant[]
	/**
	 * Families the font picker offers, in registry order: every family with a
	 * regular language-independent face, excluding pure fallbacks.
	 */
	function MenuFontFamilies(): string[]
	/** The weights the font weight picker offers, lightest first; the first is the default. */
	const FontWeightNames: string[]
	/**
	 * The typeface a surface is set in: a family the font picker offers, and a weight by its name
	 * in {@link FontWeightNames}. Part of a theme snapshot, one per surface the menu dresses.
	 */
	interface IThemeFont {
		/** The family's name, one the font picker offers ({@link MenuFontFamilies}). */
		family: string
		/**
		 * The lightest weight the surface's text is drawn at, by its name in {@link FontWeightNames};
		 * text asking for a heavier one keeps it.
		 */
		weight: string
		/**
		 * The weight the surface's settings rows are set in, by its name in {@link FontWeightNames}.
		 * Omitted means they follow {@link IThemeFont.weight} like everything else.
		 */
		settingsWeight?: string
	}
	/**
	 * Which weight setting a run of text is drawn under: the one its surface is set in, or the one
	 * the surface's settings rows carry apart from it.
	 */
	const enum EFontRole {
		/** Navigation, tabs, titles, popovers - everything on a surface that is not a settings row. */
		Surface = 0,
		/** A settings row: its label, description and value, and the card or panel title over it. */
		Settings = 1
	}
	/** The typeface a surface is set in until a theme says otherwise: the default family, regular. */
	function DefaultThemeFont(): IThemeFont
	/** Whether two themes are set in the same type. A theme that names none is set in the default one. */
	function fontsEqual(a: Nullable<IThemeFont>, b: Nullable<IThemeFont>): boolean
	/**
	 * A counter that goes up whenever any surface's family or weight changes, or a language comes to
	 * be drawn in another face. Code that writes the face onto elements itself and writes again only
	 * when its own input moved compares it to know the elements need one more write.
	 */
	function FontEpoch(): number
	/** The family `scope` renders with, before language overrides; the active scope's by default. */
	function SelectedFontFamily(scope?: EThemeScope): string
	/**
	 * Selects the family `scope` renders with; names outside MenuFontFamilies fall back to the
	 * default. Returns whether the selection moved; the caller re-applies the root font and
	 * invalidates when it did.
	 */
	function SetMenuFontFamily(family: string, scope?: EThemeScope): boolean
	/** The name from {@link FontWeightNames} `scope` renders with; the active scope's by default. */
	function SelectedFontWeight(scope?: EThemeScope): string
	/**
	 * Selects the weight `scope` renders with by its name in {@link FontWeightNames}; names outside
	 * it fall back to regular. Returns whether the selection moved — a weight is baked into every
	 * written style, so the caller rebuilds the trees when it did.
	 */
	function SetMenuFontWeight(name: string, scope?: EThemeScope): boolean
	/**
	 * Selects the weight the settings rows of `scope` are set in by its name in
	 * {@link FontWeightNames}; undefined, or a name outside it, lets them follow the surface's weight.
	 * Returns whether the selection moved — the caller rebuilds the trees when it did, as it does for
	 * {@link SetMenuFontWeight}.
	 */
	function SetSettingsFontWeight(name: Nullable<string>, scope?: EThemeScope): boolean
	/**
	 * The weight text in `role` asking for `weight` is drawn at under the settings of `scope` - the
	 * active one by default: raised to the floor of the weight its role is set in, never lowered, so
	 * heavier runs keep their emphasis. Settings rows are set in their own weight while one is chosen
	 * and in the surface's otherwise.
	 */
	function RoleFontWeight(weight: number, role: EFontRole, scope?: EThemeScope): number
	/**
	 * The weight text asking for `weight` is drawn at under the font weight setting of `scope` -
	 * the active one by default: raised to the setting's floor, never lowered, so heavier runs keep
	 * their emphasis. The style writers and the text measurers apply it themselves — callers keep
	 * passing design weights.
	 */
	function MenuFontWeight(weight: number, scope?: EThemeScope): number
	/**
	 * The `font-weight` style value of settings-row text asking for `weight`. A number in a style is
	 * a design weight the writer lays the surface's setting over; this is the weight already resolved
	 * under the settings rows' own, so it is handed over as the written value instead.
	 *
	 * @example
	 * <Text style={{ fontSize: 13, fontWeight: SettingsFontWeight(500) }}>{label}</Text>
	 */
	function SettingsFontWeight(weight: number): string
	/**
	 * The `font-style` to write for text asking for `style` under `scope`, the active one by default.
	 * Italic comes back as `"normal"` when the family the scope draws its language in has no italic
	 * face, since the engine draws no text at all for italic without one. Call it while rendering, so
	 * the style follows a change of language or family.
	 */
	function MenuFontStyle(style: "normal" | "italic", scope?: EThemeScope): "normal" | "italic"
	/**
	 * The family `scope` draws `language` in: the language's own face where one is shipped, the
	 * family selected for the scope otherwise. A language drawn in another face than the one before
	 * it moves {@link FontEpoch}, as a family selected does: the HUD writes its face onto every
	 * element again.
	 */
	function FamilyForLanguage(language: string, scope?: EThemeScope): string
}
