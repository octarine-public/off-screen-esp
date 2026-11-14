// AUTO-GENERATED - do not edit.
/**
 * The core's changer: the switches of its inventory changer, the items it makes on request and
 * the model the map's trees are drawn with. Every call can be made anywhere: the core carries it
 * to the game's main thread. Use the `ChangerSDK` instance.
 * @example
 * ChangerSDK.SetEnabled(true)
 * ChangerSDK.AddPrismaticGem(255, 0, 128)
 */
interface CChanger {
	/** Switches the inventory changer off or on. Kept with the changer's config. */
	SetEnabled(enabled: boolean): void
	/**
	 * Sets the attack effect an emblem gives: that of the item definition `definition`, 0 for the
	 * equipped emblem's own, -1 for none. A definition that carries no such effect counts as -1.
	 * Kept with the changer's config.
	 */
	SetEmblemAttackEffect(definition: number): void
	/**
	 * Unlocks every style the changer's items earn with progress, as an arcana's style unlocks
	 * once its counter reaches the unlock's value; the counters keep counting. Off by default.
	 */
	SetProgressUnlocked(unlocked: boolean): void
	/**
	 * Asks the server to turn the account's switch for sharing the changer's items on or off. It
	 * is kept with the account, and the server's answer comes as the native event
	 * `ChangerShareEnabledChanged`.
	 */
	SetShareEnabled(enabled: boolean): void
	/**
	 * Sets who the changer's items are shared with, among the Octarine users in the match who
	 * share theirs: bit 0 allies, bit 1 enemies, 0 nobody. Shared only while the account's switch
	 * is on ({@link SetShareEnabled}).
	 */
	SetShareAudience(audience: number): void
	/**
	 * Adds a Prismatic gem of the color `r`, `g`, `b` (0-255 each) to the changer's items; one of
	 * that color already there adds nothing.
	 */
	AddPrismaticGem(r: number, g: number, b: number): void
	/**
	 * Adds a greevil to the changer's items: `quas`, `wex`, `exort` and `unusual` from 0 to 3,
	 * `shadow` 0 or 1. One of the same make already there adds nothing.
	 */
	AddGreevil(quas: number, wex: number, exort: number, shadow: number, unusual: number): void
	/**
	 * Draws every tree of the map with the model `model` at scale `scale`, lifted by
	 * `heightOffset`. `resetRotation` drops each tree's own rotation; `color`, as
	 * `Color.toUint32()` gives it, tints the model, 0 leaving the tree's own. An empty `model`
	 * gives every tree its own model, scale, rotation, height and color back.
	 */
	SetTreeModel(model: string, scale: number, heightOffset: number, resetRotation: boolean, color: number): void
	/**
	 * Tells the core the stats of a unit the changer dresses, buffs and slows included: its move
	 * speed, its attack speed as the game shows it (100 for no bonus) and its attack range. The
	 * core picks a swapped-in run's activity modifiers (`jog`, `run`, `fast`) and its pace by
	 * them. `handle` is the unit's `Handle`; a negative move speed forgets the unit.
	 */
	SetUnitStats(handle: number, moveSpeed: number, attackSpeed: number, attackRange: number): void
}
/** The core's changer: the one {@link CChanger}. */
declare const ChangerSDK: CChanger
