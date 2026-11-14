// AUTO-GENERATED - do not edit.
/**
 * A compiled material (`.vmat_c`) read into maps: its texture parameters, its attributes, its
 * dynamic expressions and the {@link MaterialFlags} those attributes set.
 */
declare class CMaterial {
	/** The texture path each texture parameter holds, by parameter name such as `g_tColor`. */
	public readonly TextureParams: Map<string, string>
	/**
	 * The material's integer and float attributes in one map, by name. Where both kinds carry
	 * the same name, the float value stands.
	 */
	public readonly NumberAttributes: Map<string, number>
	/** The material's text attributes (`m_stringAttributes`), by name. */
	public readonly StringAttributes: Map<string, string>
	/**
	 * The compiled dynamic expressions (`m_dynamicParams`) by parameter name: what the material
	 * recomputes from render attributes each draw. Evaluate them with {@link EvaluateDynamicParams}.
	 */
	public readonly DynamicParams: Map<string, Uint8Array>
	/**
	 * A mask of {@link MaterialFlags}: `Walkable` for a non-zero `dota.nav.walkable` attribute,
	 * `Nonsolid` for `mapbuilder.nonsolid` and `Water` for `mapbuilder.water`.
	 */
	public readonly Flags = MaterialFlags.None
	/**
	 * The token a render attribute is referenced by in dynamic expressions - the key
	 * {@link EvaluateDynamicParams} looks attributes up by.
	 */
	public static AttributeToken(name: string): number
	/** Reads the material file at `path`. Throws when it yields no KV data. */
	constructor(path: string)
	/**
	 * The render attributes parameter `name`'s dynamic expression reads, by token; undefined for a
	 * parameter with no expression or one that cannot be evaluated.
	 */
	public DynamicParamAttributes(name: string): Nullable<Set<number>>
	/**
	 * What each dynamic expression computes from `attributes`, by parameter name; a scalar result
	 * is a vector of one. `attributes` maps a render attribute's token to its value, and one it
	 * lacks reads as 0. A parameter whose expression needs what only the renderer has, such as a
	 * texture, a matrix, a material parameter or time, is left out.
	 * @example
	 * const hue = CMaterial.AttributeToken("$ChickenHue")
	 * for (const [name, value] of material.EvaluateDynamicParams(new Map([[hue, 0.4]]))) {
	 * 	preview.SetMaterialParam(material, name, value)
	 * }
	 */
	public EvaluateDynamicParams(attributes: ReadonlyMap<number, MaterialAttributeValue>): Map<string, number[]>
}
