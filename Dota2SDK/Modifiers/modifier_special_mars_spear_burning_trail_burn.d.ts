// AUTO-GENERATED - do not edit.
declare class modifier_special_mars_spear_burning_trail_burn extends Modifier implements IDebuff {
	public readonly DebuffModifierName: string
	/**
	 * The trail burns a unit on it `shard_dps` a second over each `shard_interval` from the moment
	 * it steps on. The trail lays the debuff anew each time it thinks and the client sees no end
	 * of the trail: counted while the debuff itself lasts.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public IsDebuff(): this is IDebuff
}
