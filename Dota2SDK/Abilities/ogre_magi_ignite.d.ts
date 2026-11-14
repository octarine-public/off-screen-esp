// AUTO-GENERATED - do not edit.
declare class ogre_magi_ignite extends Ability {
	public get ProjectileAttachment(): string
	/**
	 * Ignite deals its damage only as it burns: `burn_damage` each second, the first as it lands,
	 * the last as `duration` runs out. The second between ticks is not in the data, which gives
	 * `burn_damage` a second. A further landing on a burning unit - a multicast's, or the other unit
	 * a cast sets alight - ticks as it lands, runs the ticks on from it and adds `duration` to the
	 * burn: the modifier the game sends carries that (`Modifier.DamageUntil`), while a cast's
	 * forecast counts the one landing it surely has - more of them only bring each tick sooner.
	 * Its ticks are the server's own: `CDOTA_Modifier_Ogre_Magi_Ignite` thinks first 0.1 s after it
	 * is laid, then every 1 s (server.dll).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public GetBaseSpeedForLevel(level: number): number
}
