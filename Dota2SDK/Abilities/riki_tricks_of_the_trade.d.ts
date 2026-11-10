// AUTO-GENERATED - do not edit.
declare class riki_tricks_of_the_trade extends Ability {
	/** Its cast dodges the projectiles flying at its caster (ProjectileDodge, server.dll). */
	public get Disjoints(): boolean
	/** Riki is out of reach while he channels it: `AbilityChannelTime`. */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public get AppliesUnitState(): bigint
	/** The invulnerability is Riki's own, not of the units he strikes. */
	public get StatesOnCaster(): boolean
	/**
	 * Riki's strikes while he channels: `attack_count` of them - `scepter_bonus_attacks` more with
	 * the Scepter - the first as the channel starts, the rest spread over the channel less a frame
	 * (the server's `TricksOfTheTrade_Phase`), each at the units it picks (`TickChance`) and as
	 * hard as `TickBonus`; none after a unit walks out of `radius`.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	/** A strike from behind: `attack_damage` and the Backstab of Riki's Agility. */
	public TickBonus(target: Unit): number
	/**
	 * Chance a strike picks `target`: each picks `interval_targets` of the enemy heroes and creeps
	 * within `radius` of it, where it is cast, at random - surely while no more stand there.
	 */
	public TickChance(target: Unit, _tick: number): number
}
