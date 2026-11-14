// AUTO-GENERATED - do not edit.
/**
 * The entities the SDK holds, and the layout of the handles that name them: the entity index in
 * the low {@link CEntityManager.INDEX_BITS} bits, the serial in the
 * {@link CEntityManager.SERIAL_BITS} above. Use the `EntityManager` instance.
 */
declare class CEntityManager<T extends INativeEntity = INativeEntity> {
	/** The index of no entity, `-Infinity`: {@link EntityByIndex} returns `undefined` for it. */
	public readonly INVALID_INDEX: number
	/**
	 * The handle of no entity, 16777215 (`0xFFFFFF`): {@link EntityByIndex} returns `undefined`
	 * for it.
	 */
	public readonly INVALID_HANDLE = 16777215
	/** How many low bits of a handle hold the entity index: 14. */
	public readonly INDEX_BITS = 14
	/** The mask of those bits, 16383 (`0x3FFF`): `handle & INDEX_MASK` is the entity index. */
	public readonly INDEX_MASK: number
	/** How many bits of a handle, right above the index, hold the serial: 17. */
	public readonly SERIAL_BITS = 17
	/**
	 * The mask of the serial once it is shifted down, 131071 (`0x1FFFF`):
	 * `(handle >> INDEX_BITS) & SERIAL_MASK` is the serial.
	 */
	public readonly SERIAL_MASK: number
	/**
	 * Every entity that exists now, visible or not, in the order they were created. The array is
	 * the manager's own and changes as entities come and go: read it, do not modify it.
	 */
	public readonly AllEntities: T[]
	/**
	 * Resolves an entity handle (or raw index) to a live entity, or `undefined` when the handle
	 * is unset, a sentinel, or its serial no longer matches. Sentinels are rejected before the
	 * index mask is applied, since `INVALID_INDEX` would otherwise collapse to a real index.
	 * @example
	 * const target = EntityManager.EntityByIndex(handle)
	 */
	public EntityByIndex<E extends T>(handle: Nullable<number>): Nullable<E>
	/**
	 * The entities of `class_` and of every class derived from it that exist now, visible or not.
	 * The array is the manager's own and changes as entities come and go: read it, do not modify
	 * it. Throws when `class_` is not a registered entity class.
	 */
	public GetEntitiesByClass<E>(class_: Constructor<E>): E[]
}

/**
 * The Dota view of the shared entity manager: the same instance, with its entities narrowed to the
 * game's `Entity` hierarchy.
 */
type IDotaEntityManager = Pick<CEntityManager, "INVALID_INDEX" | "INVALID_HANDLE" | "INDEX_BITS" | "INDEX_MASK" | "SERIAL_BITS" | "SERIAL_MASK"> & {
	readonly AllEntities: Entity[]
	EntityByIndex<E extends Entity>(handle: Nullable<number>): Nullable<E>
	GetEntitiesByClass<E>(class_: Constructor<E>): E[]
	GetConstructorByName<E extends Entity>(name: string): Nullable<Constructor<E>>
	/**
	 * The wrapper class declared for an ability's or an item's name as the game data has it, or
	 * none - nothing reported for a name without one, as most of the data's are.
	 * @example
	 * const wall = EntityManager.GetDeclaredConstructor<Ability>("invoker_ice_wall")
	 */
	GetDeclaredConstructor<E extends Entity>(name: string): Nullable<Constructor<E>>
}
declare const EntityManager: IDotaEntityManager
