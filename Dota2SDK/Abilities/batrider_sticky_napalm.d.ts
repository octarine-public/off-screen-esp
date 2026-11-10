// AUTO-GENERATED - do not edit.
/**
 * Sticky Napalm: `stacks_per_cast` stacks of napalm on every enemy in the area, renewing the rest -
 * a debuff that slows and burns its bearer for more with each hit of Batrider's.
 */
declare class batrider_sticky_napalm extends Ability implements IDebuff {
	/** Cast the way its caster stands: it turns to nothing (`Ability.RequiresFacing`). */
	public get RequiresFacing(): boolean
	public readonly DebuffModifierName = "modifier_batrider_sticky_napalm"
	public IsDebuff(): this is IDebuff
	/** Each cast stacks up to `max_stacks`; with Aghanim's Shard (`unlimited_stacks`) without a cap. */
	public get MaxStacks(): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
}
