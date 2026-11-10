// AUTO-GENERATED - do not edit.
/**
 * Hunter's Boomerang, Hoodwink's with the Shard: thrown at an enemy, it deals `damage` to the
 * enemies on its way and marks them for `mark_duration` - slowed and taking `spell_amp` more
 * spell damage; its own damage lands on the mark.
 */
declare class hoodwink_hunters_boomerang extends Ability implements INuke {
	public IsNuke(): this is INuke
	public get IsAmplifier(): boolean
	/** A marked enemy takes `spell_amp` more spell damage: any cast's. */
	public Amplifies(ability: Ability): boolean
	/**
	 * Thrown at an enemy first, its mark adds `spell_amp` percent to the damage of spells the enemy
	 * takes, summed with the other damage it takes more of (`IncomingAmplification`: Veil of
	 * Discord's, Track's): the damage of `ability` after it lands harder by as much - as the
	 * boomerang's own (`GetRawDamage`). Not on one marked already - the mark renews.
	 */
	public AmplificationOf(ability: Ability, target: Unit): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	/** The boomerang's `damage` lands on the mark it lays: harder by the mark (`AmplificationOf`). */
	public GetRawDamage(target: Unit): number
}
