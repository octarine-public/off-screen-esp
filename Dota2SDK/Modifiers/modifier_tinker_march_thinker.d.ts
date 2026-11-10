// AUTO-GENERATED - do not edit.
declare class modifier_tinker_march_thinker extends Modifier {
	protected get DamagesAround(): boolean
	/**
	 * The robots of the march at `unit`: its ability's (`Ability.DamageOverTime`) from the moment it
	 * came on, each reaching the unit as it walks at `speed` from the back of the march - `radius`
	 * behind its middle, the thinker, along the way the thinker faces - while the unit stands in the
	 * march: within `radius` of its middle both along that way and across it.
	 */
	protected AroundTicks(unit: Unit, out: DamageTicks): boolean
}
