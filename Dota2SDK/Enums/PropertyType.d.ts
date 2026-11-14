// AUTO-GENERATED - do not edit.
/**
 * The kind of value a networked field holds, numbered as the byte octarine-core writes before
 * every networked value.
 */
type EPropertyType = EPropertyType.BOOL | EPropertyType.INT8 | EPropertyType.INT16 | EPropertyType.INT32 | EPropertyType.INT64 | EPropertyType.UINT8 | EPropertyType.UINT16 | EPropertyType.UINT32 | EPropertyType.UINT64 | EPropertyType.FLOAT | EPropertyType.STRING | EPropertyType.VECTOR2 | EPropertyType.VECTOR3 | EPropertyType.VECTOR4 | EPropertyType.TRANSFORM | EPropertyType.SERIALIZED_ARRAY_SIZE | EPropertyType.INVALID
declare namespace EPropertyType {
	/** A `boolean`. */
	type BOOL = 0
	/** A signed 8-bit integer, read as a `number`. */
	type INT8 = 1
	/** A signed 16-bit integer, read as a `number`. */
	type INT16 = 2
	/** A signed 32-bit integer, read as a `number`. */
	type INT32 = 3
	/** A signed 64-bit integer, read as a `bigint`. */
	type INT64 = 4
	/** An unsigned 8-bit integer, read as a `number`. */
	type UINT8 = 5
	/** An unsigned 16-bit integer, read as a `number`. */
	type UINT16 = 6
	/** An unsigned 32-bit integer, read as a `number`. */
	type UINT32 = 7
	/** An unsigned 64-bit integer, read as a `bigint`. */
	type UINT64 = 8
	/** A 32-bit float, read as a `number`. */
	type FLOAT = 9
	/** UTF-8 text, read as a `string`. */
	type STRING = 10
	/** Two 32-bit floats, read as a `Vector2`. */
	type VECTOR2 = 11
	/** Three 32-bit floats, read as a `Vector3`. */
	type VECTOR3 = 12
	/** Four 32-bit floats, read as a `Vector4`. */
	type VECTOR4 = 13
	/**
	 * The six 32-bit floats the game sends for a `CTransform`, read as a `Float32Array` in the
	 * order they were sent. No other type re-encodes to it or from it.
	 */
	type TRANSFORM = 14
	/**
	 * Not a property type: the protocol tag octarine-core writes in a type's place before a
	 * dynamic array's element count. A wire value, it stays 15 and past every type
	 */
	type SERIALIZED_ARRAY_SIZE = 15
	/** No type. As the type to re-encode a value to, it leaves the value as it was networked. */
	type INVALID = -1
}
