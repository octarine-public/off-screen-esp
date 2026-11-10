// AUTO-GENERATED - do not edit.
declare class puck_phase_shift extends Ability {
	/** Its cast dodges the projectiles flying at its caster (ProjectileDodge, server.dll). */
	public get Disjoints(): boolean
	/** While it channels, Puck is invulnerable and attacks miss her: what lands then misses her. */
	public get AppliesUnitState(): bigint
	/** The states are Puck's own. */
	public get StatesOnCaster(): boolean
	/** Puck stays shifted its `duration` at most, the channel's length. */
	protected AppliedFrom(values: ISpecialValues, level: number): number
}
