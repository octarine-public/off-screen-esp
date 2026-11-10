// AUTO-GENERATED - do not edit.
declare class beastmaster_wild_axes extends Ability implements INuke {
	public get Speed(): number
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	/**
	 * Both axes cross the point cast at: a unit there takes `axe_damage` from each, each axe laying
	 * a stack of `damage_amp` percent before it strikes - on top of the stacks the target has,
	 * which the damage pipeline weighs (`modifier_beastmaster_axe_stack_counter`).
	 */
	public GetRawDamage(target: Unit): number
}
