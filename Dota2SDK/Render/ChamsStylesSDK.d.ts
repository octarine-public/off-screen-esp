// AUTO-GENERATED - do not edit.
/**
 * The core's chams: materials built from KV3 text, styles that lay those materials over a mesh, and
 * the style an entity and what it owns are drawn in. An entity is named by its `CustomNativeID`.
 * A chams page draws with this; a feature that only highlights a unit asks the page through
 * `ChamsSDK.Override`. Use the `ChamsStylesSDK` instance.
 * @example
 * const flat = ChamsStylesSDK.CreateMaterial("materials/octarine/flat.vmat", kv3)
 * ChamsStylesSDK.SetStyle(1, [flat], [])
 * ChamsStylesSDK.SetEntityStyle(unit.CustomNativeID, 1, Color.Red.toUint32())
 */
interface CChamsStyles {
	/**
	 * Builds a material from the KV3 text of a `.vmat` and answers the id that names it, -1 while the
	 * chams system is not up yet. The build runs later on the main thread, and an entity draws its
	 * own material until it is done. The same name and text answer the same material; edited text
	 * is a new one.
	 */
	CreateMaterial(name: string, kv3: string): number
	/**
	 * Declares style `style`: the materials drawn over a mesh, in order. A layer is tinted by the
	 * color at its place in `colors`, packed `0xAABBGGRR`, and one without takes the color its
	 * entity was given. `keepOriginal` draws the entity's own material under the layers. `hidden`
	 * draws the entity nowhere, its shadow included, and none of the layers.
	 */
	SetStyle(style: number, layers: readonly number[], colors: readonly number[], keepOriginal?: boolean, hidden?: boolean): void
	/**
	 * Writes `value` into parameter `name` of a built material, a number to all four components.
	 * False when the material is not built yet or has no such parameter.
	 */
	SetMaterialParam(material: number, name: string, value: number | number[]): boolean
	/**
	 * Draws the entity in style `style` until {@link RemoveEntityStyle} takes it off. `color`,
	 * packed `0xAABBGGRR`, tints the layers that have no color of their own.
	 */
	SetEntityStyle(entity: number, style: number, color?: number): void
	/** Draws the entity in its own material again. */
	RemoveEntityStyle(entity: number): void
	/**
	 * Draws what the unit owns in style `style`, and not the unit itself: its wearables, most of
	 * them client-side entities a script cannot name. `color` as in {@link SetEntityStyle}.
	 */
	SetOwnedStyle(entity: number, style: number, color?: number): void
	/** Draws what the unit owns in its own materials again. */
	RemoveOwnedStyle(entity: number): void
	/**
	 * Takes the style off every entity and everything owned. A style outlives the script that set
	 * it, so a script clears what its previous load left on before it claims style ids of its own.
	 */
	RemoveEntityStyles(): void
}
/** The core's chams: the one {@link CChamsStyles}. */
declare const ChamsStylesSDK: CChamsStyles
