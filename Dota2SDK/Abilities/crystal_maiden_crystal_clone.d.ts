// AUTO-GENERATED - do not edit.
declare class crystal_maiden_crystal_clone extends Ability {
	/** Its cast dodges the projectiles flying at its caster (ProjectileDodge, server.dll). */
	public get Disjoints(): boolean
	/**
	 * The statue left where Crystal Maiden stood frostbites every enemy within `frostbite_radius`
	 * as it breaks (`ActivationDelay`): Frostbite's root and disarm, for Frostbite's time.
	 */
	public get AppliesUnitState(): bigint
	public get Range(): number
	/**
	 * When the statue breaks, at the latest: her Crystal Nova or an explosion of her Freezing Field
	 * breaks it at once (server.dll: both damage `modifier_crystal_maiden_crystal_clone_statue`) - in
	 * her field the one that falls near it, within a round of its explosions over every sector; else
	 * it stands `clone_duration`. Measured in the demo on Chaos Knight (20 October 2026): in the
	 * channel frostbitten 0.03-0.86 s on, out of it 5 s on; 470 from the statue it took him, 485 not.
	 */
	public GetBaseActivationDelayForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * The clone shatters `clone_duration` after it stands, Frostbiting the units within
	 * `frostbite_radius` of it: Frostbite's own ticks from then
	 * (`crystal_maiden_frostbite.DamageOverTime`). Struck down or shattered by Crystal Maiden's own
	 * spells, it bites sooner: not in the forecast.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
}
