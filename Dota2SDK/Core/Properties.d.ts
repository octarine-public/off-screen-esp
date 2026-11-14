// AUTO-GENERATED - do not edit.
/**
 * What {@link EntityPropertiesNode.ConvertToStringedMap} holds: a networked value, an array of
 * them, or a nested map keyed by field name.
 */
type StringEntityPropertyType = Map<string, StringEntityPropertyType> | StringEntityPropertyType[] | string | Float32Array | Vector4 | Vector3 | Vector2 | bigint | number | boolean
/**
 * One level of an entity's networked fields: each entry is a value, an array, or another node for
 * a field that has fields of its own. Entries are keyed by symbol id, the position of the field's
 * name in the symbol table of the server's serializer message; {@link EntityPropertiesNode.get}
 * takes the name itself.
 */
interface EntityPropertiesNode extends IEntityPropertiesNode {
	/** The node's entries by symbol id: values, arrays of them and nested nodes. */
	map: Map<number, EntityPropertyType>
	/**
	 * What is stored for the field `name`, or `undefined` when this node has no such field or the
	 * name is no networked symbol. With `propType` the stored bits are read again as that type,
	 * element by element for an array: a signed integer type is zigzag-decoded (2 reads as 1, 3
	 * as -2), `FLOAT` and the vector types take the bits as floats. Throws for text read as
	 * anything but `STRING`, for anything else read as `STRING`, and for a nested node.
	 */
	get<T extends EntityPropertyType>(name: string, propType?: EPropertyType): Nullable<T>
	/** Stores `prop` under the symbol id `id`, replacing what was there. */
	set(id: number, prop: EntityPropertyType): void
	/** Whether an entry is stored under the symbol id `id`. */
	has(id: number): boolean
	/**
	 * A copy of this node and everything under it with field names for keys: every node becomes a
	 * `Map`, every array a new array, and the values themselves are shared with the original.
	 */
	ConvertToStringedMap(): Map<string, StringEntityPropertyType>
}
