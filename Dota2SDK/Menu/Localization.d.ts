// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	class CLocalization {
		public wasChanged: boolean
		/** Fires after the language switches or a unit adds strings; panels re-localize on it. */
		public OnChanged(listener: () => void): void
		public get Version(): number
		public get SelectedUnitName(): string
		public set SelectedUnitName(name: string)
		public Languages: string[]
		public SetLang(idx: number): void
		public get LocalizationUnitsNames(): string[]
		public AddLocalizationUnit(unitName: string, unit: Map<string, string>): void
		/**
		 * Keeps a composed label's internal name while translating its parts at display time.
		 * @example
		 * node.AddToggle(Localization.Compose(["Visual", "Backpack"], " > "), true)
		 */
		public Compose(parts: readonly string[], separator: string): string
		public Localize(name: string): string
		/** Inserts values into a translated label without translating player names or numbers. */
		public Format(name: string, values: Readonly<Record<string, string | number>>): string
		public LocalizeIn(language: string, name: string): string
		public LocalizeAll(name: string): string[]
		/**
		 * Gives names other words the menu search finds them by - a hero's nicknames, an item's
		 * shorthand - besides their translations. A name handed again takes its new words in place of
		 * the old ones, and an empty list takes them away.
		 * @example
		 * Localization.AddSearchAliases(new Map([["npc_dota_hero_nevermore", ["sf", "nevermore"]]]))
		 */
		public AddSearchAliases(aliases: ReadonlyMap<string, readonly string[]>): void
		/**
		 * Every text the menu search finds `name` by, each once: its English text, its translations
		 * and the words {@link AddSearchAliases} gave it.
		 */
		public SearchTermsOf(name: string): string[]
	}
	const Localization: CLocalization
}
