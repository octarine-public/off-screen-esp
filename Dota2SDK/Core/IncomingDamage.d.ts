// AUTO-GENERATED - do not edit.
/** One blow on its way to a unit: who deals it, how much lands and when. */
declare class IncomingDamageEntry {
	/** Index of the unit dealing the damage: the attacker of the `entity_hurt` event that settles it. */
	public readonly Source: number
	/** Damage the blow lands at its lowest roll, the target's armor, resistances and blocks already taken off. */
	public Damage: number
	/** Game time the damage lands. */
	public LandsAt: number
	/** Whether a projectile carries it; a swing without one lands at its attack point. */
	public HasProjectile: boolean
	/** The same blow at its highest roll; equal to `Damage` for anything that does not roll. */
	public MaxDamage: number
	/**
	 * What the blow lands on average: the source's own average roll, which weighs a chance to
	 * block by that chance - not the middle of the lowest and highest rolls, which holds only
	 * for an even chance. Equal to `Damage` for anything that does not roll.
	 */
	public AvgDamage: number
	/** Whether an attack deals it - a swing or its projectile - which an attack immunity keeps off. */
	public IsAttack: boolean
	constructor(
	/** Index of the unit dealing the damage: the attacker of the `entity_hurt` event that settles it. */
	Source: number, 
	/** Damage the blow lands at its lowest roll, the target's armor, resistances and blocks already taken off. */
	Damage: number, 
	/** Game time the damage lands. */
	LandsAt: number, 
	/** Whether a projectile carries it; a swing without one lands at its attack point. */
	HasProjectile: boolean, 
	/** The same blow at its highest roll; equal to `Damage` for anything that does not roll. */
	MaxDamage?: number, 
	/**
	 * What the blow lands on average: the source's own average roll, which weighs a chance to
	 * block by that chance - not the middle of the lowest and highest rolls, which holds only
	 * for an even chance. Equal to `Damage` for anything that does not roll.
	 */
	AvgDamage?: number, 
	/** Whether an attack deals it - a swing or its projectile - which an attack immunity keeps off. */
	IsAttack?: boolean)
	/** Seconds it stuns the unit it lands on: a bash (`Unit.SwingStun`); 0 for none. */
	public Stuns: number
	/**
	 * The blow at its lowest, highest and average roll with the target's shields left out - its
	 * barriers, the block of each hit (`ShieldLedger`): what a reckoning spending them blow by blow
	 * takes them off itself (`UnshieldedAt`); `NaN` for one that does not tell - the blow as it
	 * lands.
	 */
	public UnshieldedDamage: number
	public UnshieldedMax: number
	public UnshieldedAvg: number
	/** The kind of damage the target's shields read the blow as: an attack's; `NONE` for one that does not tell. */
	public DamageType: DAMAGE_TYPES
	/**
	 * Game time it may land at the soonest: a swing not begun may play a quicker attack animation
	 * than its last (`Unit.NextSwings`); `LandsAt` for a blow on its way.
	 */
	public EarliestAt: number
	/** The game time it may land at the soonest (`EarliestAt`), `LandsAt` unless told. */
	public get Soonest(): number
	/**
	 * What the blow lands at the roll `strength`: the lowest by default, which is the only
	 * number a decision of one's own has to hold against.
	 */
	public At(strength?: ATTACK_DAMAGE_STRENGTH): number
	/**
	 * What the blow lands at the roll `strength` with the target's shields left out
	 * (`UnshieldedDamage`): of it the shields take what a reckoning spending them blow by blow
	 * finds left (`ShieldLedger.Take`).
	 * @example
	 * const bare = blow.UnshieldedAt(strength)
	 * const lands = bare - ledger.Take(bare - blow.At(strength), blow.DamageType, blow.LandsAt)
	 */
	public UnshieldedAt(strength?: ATTACK_DAMAGE_STRENGTH): number
	/** Notes what it lands with the target's shields left out at each roll, and as what kind of damage. */
	public Unshield(damage: number, maxDamage: number, avgDamage: number, type: DAMAGE_TYPES): this
}
/**
 * The blows on their way to one unit: attack swings past their start, attack and spell
 * projectiles in flight. `Before` sums what lands by a moment, which is what `HealthAt` takes
 * off the health. Entries settle on the `entity_hurt` event of their source and expire shortly
 * after their landing time when nothing confirms them, such as a missed attack.
 */
declare class IncomingDamage {
	public readonly Entries: IncomingDamageEntry[]
	/**
	 * Damage landing by the game time `time`, the blows of the source `except` left out: the
	 * asker's own. Every blow counts at the roll `strength`, the lowest by default; the average
	 * is what tells whether someone else's blows bring the target down first.
	 */
	public Before(time: number, except?: number, strength?: ATTACK_DAMAGE_STRENGTH): number
	/**
	 * The attacks landing after the game time `from` and by `to`, at the roll `strength`: what an
	 * attack immunity standing over that stretch keeps off.
	 */
	public AttacksBetween(from: number, to: number, strength?: ATTACK_DAMAGE_STRENGTH): number
	/**
	 * Registers a blow at its lowest, highest and average roll, an attack's or not; a swing from
	 * the same source still waiting for its projectile is replaced.
	 */
	public Add(source: number, damage: number, landsAt: number, hasProjectile: boolean, maxDamage?: number, avgDamage?: number, isAttack?: boolean): IncomingDamageEntry
	/** The blow from `source` that has no projectile yet: the swing a projectile is about to leave. */
	public Pending(source: number): Nullable<IncomingDamageEntry>
	/** Drops the swing from `source` that never reached its attack point. */
	public Cancel(source: number): void
	/** Drops the projectile blow from `source` that will not land any more. */
	public Dodged(source: number): void
	/**
	 * Settles the earliest blow from `source` of its kind: the game just dealt it - an attack
	 * (`IsAttack`) for damage it reports with no ability behind it, else a spell's. The damage a
	 * spell or an attack's proc deals beside the attack - Viper's Predator, a Poison Attack tick,
	 * Venomous Gale - settles no attack still on its way.
	 */
	public Landed(source: number, attack?: boolean): void
	/** Drops the blows the game never confirmed within `grace` seconds after their landing time. */
	public Prune(now: number, grace: number): void
	public Clear(): void
}
