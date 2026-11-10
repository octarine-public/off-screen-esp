// AUTO-GENERATED - do not edit.
declare class modifier_earthshaker_aftershock extends Modifier {
	public get AOEDamage(): number
	/**
	 * The damage the Aftershock of a cast of Earthshaker deals `target` before what it takes of it:
	 * `AOEDamage` at one within `aftershock_range` of him and its hull, none farther.
	 */
	public DamageAt(target: Unit): number
	protected UpdateSpecialValues(): void
}
