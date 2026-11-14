// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** One tab's share of the config, sizes in UTF-8 bytes of JSON. */
	interface IConfigTabSize {
		/** The tab's name, the key it is written under. */
		readonly tab: string
		/** The tab written with every row, defaults included. */
		readonly dense: number
		/** The tab written with the rows off their defaults alone. */
		readonly compact: number
		/** Stored branches under the tab that no node or row of the menu holds now. */
		readonly orphan: number
		/** Rows saved to the config under the tab. */
		readonly rows: number
		/** Rows a compact write carries. */
		readonly written: number
	}
	/** What {@link MeasureConfig} found: sizes in UTF-8 bytes of JSON, times in ms. */
	interface IConfigSize {
		/** The tabs of the menu, largest dense size first. */
		readonly tabs: readonly IConfigTabSize[]
		/** Top-level branches of the stored config that name no tab of the menu, by key. */
		readonly unknown: Readonly<Record<string, number>>
		/** The keys the document fills itself: the binds and the scripts' data. */
		readonly service: number
		/** The whole document as a dense write lays it out. */
		readonly dense: number
		/** The whole document as a compact write lays it out. */
		readonly compact: number
		/** Median time to build and stringify the dense document. */
		readonly denseMs: number
		/** Median time to build and stringify the compact document. */
		readonly compactMs: number
	}
}
