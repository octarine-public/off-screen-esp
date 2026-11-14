// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** A node whose own entries come from more than one package. */
	interface IMixedNode {
		/** The node's path, its names joined by `" > "`. */
		readonly path: string
		/** How many of the node's own entries each package made; `""` stands for an unknown one. */
		readonly owners: Readonly<Record<string, number>>
	}
	/** What {@link MeasureMenuOwnership} found; sizes in UTF-8 bytes of JSON. */
	interface IMenuOwnership {
		/** The menu map as it would be sent now. */
		readonly mapBytes: number
		/** The dictionary of names as it would be sent now. */
		readonly namesBytes: number
		/** Branches the map lists. */
		readonly mapNodes: number
		/** Packages the map names. */
		readonly packages: number
		/** Names the dictionary holds. */
		readonly names: number
		/** Branches of the map whose owner is unknown, `__data` aside, as paths joined by `" > "`. */
		readonly unowned: readonly string[]
		/** Entries the documents carry whose owner is unknown. */
		readonly unknownEntries: number
		/** Nodes whose own entries come from more than one package, most mixed first. */
		readonly mixed: readonly IMixedNode[]
	}
}
