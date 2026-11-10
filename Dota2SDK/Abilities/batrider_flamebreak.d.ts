// AUTO-GENERATED - do not edit.
/**
 * Flamebreak: a cocktail thrown at a point bursts there, knocks back every enemy within
 * `explosion_radius` and burns them. The throw is `knockback_distance` whatever the way from the
 * burst, straight away from it (`MotionOn`): from a burst 200 short of Chaos Knight he went 250
 * away from Batrider (695 to 945 off him), from one 200 past him and from one right under him 250
 * toward Batrider (695 to 445), uniformly over `knockback_duration` (19 October 2026, demo). It
 * stuns no one: the server's burst puts on the burn and the knockback alone, `stun_duration` read
 * nowhere in it, and the unit thrown showed no state - not stunned - the 0.37 s of its knockback.
 */
declare class batrider_flamebreak extends Ability implements INuke {
	public IsNuke(): this is INuke
	/** How far the burst throws a unit it takes. */
	public get KnockbackDistance(): number
	/** Seconds the throw lasts. */
	public get KnockbackDuration(): number
	/** A hit throws the unit for the knockback's seconds: its walk is taken meanwhile, nothing else. */
	protected FillEffects(out: AbilityEffects): void
	/** On `target`, the throw cut by its status resistance. */
	protected FillEffectsOn(out: AbilityEffects, target: Unit): void
	/**
	 * The throw a cocktail Batrider at `from` bursts at `toward` at the game time `landsAt` gives
	 * `target`: `KnockbackDistance` over `KnockbackDuration` from where it will be then, straight away
	 * from the burst - toward Batrider for a unit right under it. None for a unit his Flaming Lasso
	 * tows: the tow holds it - the knockback came and went in a tick, the unit stayed (19 October
	 * 2026, demo).
	 * @example
	 * const push = flamebreak.MotionOn(enemy, hero.Position, burst, landsAt)
	 * const pulledTo = push?.EndPosition
	 */
	public MotionOn(target: Unit, from: Vector3, toward: Vector3, landsAt: number): Nullable<Motion>
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	/**
	 * The cocktail flies to the point it was cast at and bursts there: a circle, not a line. Read
	 * as a line, its flight ended a radius (400) and the target's hull short of the point - the
	 * burst expected 0.25 s before it comes (20 October 2026, demo: cast at a point 674 away, it
	 * burst 0.37 s after it left - 0.40 s the whole way at its speed).
	 */
	public get SkillShotType(): ESkillShotType
	/**
	 * The cocktail leaves from `attach_attack2`, 34 ahead of Batrider, not from his hit location 48
	 * behind him (20 October 2026, server.dll: the spell's start launches it from that attachment;
	 * demo: it appeared 35 ahead and burst 0.53 s after it left from 956 away). Taken from behind,
	 * its flight came 0.05 s long - a Flamebreak timed to the end of Flaming Lasso landed a tick
	 * before it, and the tow ate the knockback.
	 */
	public get ProjectileAttachment(): string
	public GetBaseDamageForLevel(level: number): number
	/** Each tick of the burn takes Sticky Napalm's damage on the target too, as the impact does. */
	public TickBonus(target: Unit): number
	/**
	 * The burn after the impact: `damage_per_second` each second of `damage_duration`, the first a
	 * second after it lands, the last as it ends. The second between ticks is not in the data,
	 * which gives the damage a second.
	 * The 1 s between ticks is the server's own: `CDOTA_Modifier_Batrider_Flamebreak_Damage` thinks
	 * every 1 s (server.dll).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public GetRawDamage(target: Unit): number
}
