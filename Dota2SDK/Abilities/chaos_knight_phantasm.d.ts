// AUTO-GENERATED - do not edit.
declare class chaos_knight_phantasm extends Ability {
	/** Its cast dodges the projectiles flying at its caster (ProjectileDodge, server.dll). */
	public get Disjoints(): boolean
	/** As his images come Chaos Knight is invulnerable, out of the fight. */
	public get AppliesUnitState(): bigint
	/** The invulnerability is Chaos Knight's own. */
	public get StatesOnCaster(): boolean
	/** He is invulnerable `invuln_duration`. */
	protected AppliedFrom(values: ISpecialValues, level: number): number
}
