// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** The menu's strings in each language, and the language it shows. */
	interface CLocalization {
		/**
		 * Set at start, when the language changes and when a unit adds strings. The menu clears it on
		 * its next frame, once its font and Language dropdown follow.
		 */
		wasChanged: boolean
		/** Fires after the language switches or a unit adds strings; panels re-localize on it. */
		OnChanged(listener: () => void): void
		/**
		 * A count that grows whenever the language changes or strings or search words are added, for
		 * a cache of localized text to compare.
		 */
		get Version(): number
		/**
		 * Name of the language the menu shows, such as `"english"`; empty until one is chosen, which
		 * shows English. Setting another one re-renders the menu and fires {@link OnChanged}.
		 */
		get SelectedUnitName(): string
		set SelectedUnitName(name: string)
		/** The languages the Settings Language dropdown lists, in its order. */
		Languages: string[]
		/**
		 * Selects the language `Languages.at(idx)` names as {@link SelectedUnitName}, or the first one
		 * when there is none there.
		 */
		SetLang(idx: number): void
		/** Every `unitName` {@link AddLocalizationUnit} has been given, in the order first given. */
		get LocalizationUnitsNames(): string[]
		/**
		 * Adds `unit`'s strings to the language `unitName`, each keyed by the name {@link Localize} is
		 * asked for; a key already there takes the new string. When anything changed, the menu
		 * re-renders and {@link OnChanged} fires.
		 * @example
		 * MenuSDK.Localization.AddLocalizationUnit("russian", new Map([["Enemies", "Враги"]]))
		 */
		AddLocalizationUnit(unitName: string, unit: Map<string, string>): void
		/**
		 * Keeps a composed label's internal name while translating its parts at display time.
		 * @example
		 * node.AddToggle(Localization.Compose(["Visual", "Backpack"], " > "), true)
		 */
		Compose(parts: readonly string[], separator: string): string
		/**
		 * `name` in the selected language. Without a string there, a name from {@link Compose} is put
		 * together from its parts' strings, and any other is the English string or `name` itself.
		 */
		Localize(name: string): string
		/** Inserts values into a translated label without translating player names or numbers. */
		Format(name: string, values: Readonly<Record<string, string | number>>): string
		/** {@link Localize} into `language` instead of the selected one. */
		LocalizeIn(language: string, name: string): string
		/**
		 * Each added language's string for `name`, every distinct one once; a language without one
		 * adds nothing. A name from {@link Compose} is put together in every language.
		 */
		LocalizeAll(name: string): string[]
		/**
		 * Gives names more words the menu search finds them by besides their translations, such as a
		 * hero's nicknames. A name handed again takes its new words in place of the old ones, and an
		 * empty list takes them away.
		 * @example
		 * const aliases = new Map([["npc_dota_hero_nevermore", ["sf", "nevermore"]]])
		 * MenuSDK.Localization.AddSearchAliases(aliases)
		 */
		AddSearchAliases(aliases: ReadonlyMap<string, readonly string[]>): void
		/**
		 * Every text the menu search finds `name` by, each once: its English text, its translations
		 * and the words {@link AddSearchAliases} gave it.
		 */
		SearchTermsOf(name: string): string[]
	}
	/** The menu's strings in each language, and the language it shows. */
	const Localization: CLocalization
}
