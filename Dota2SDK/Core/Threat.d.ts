// AUTO-GENERATED - do not edit.
/** What a threat needs from the ability behind it. */
interface IThreatAbility {
	readonly Index: number
	readonly Name: string
	readonly DamageType: DAMAGE_TYPES
	/**
	 * The unit states the effect puts on the units it hits, as a `modifierstate` mask - not the
	 * ones its caster takes on itself: Supernova's egg hides Phoenix, its burst stuns.
	 */
	readonly HitUnitState: bigint
	/** Whether the effect goes through spell immunity, so a Black King Bar does not answer it. */
	readonly CanHitSpellImmuneEnemy: boolean
	/** Whether the effect comes as an attack: none of it lands on a unit immune to attacks. */
	readonly IsAttack: boolean
	/** Whether the effect carries the unit it lands on somewhere: a push, a pull, a swap. */
	readonly MovesTarget: boolean
	/** Seconds the effect stands on the ground once it lands, hurting the units in its area while they stand in it: a field's; none for another. */
	readonly LingersFor: number
	/** Which units the projectile stops at on its way; `None` for one that flies through everything or has none. */
	readonly CollisionFlags: CollisionFlag
	/** Whose units the projectile collides with. */
	readonly CollisionTeam: CollisionTeam
	/** Whether the ability has `flag` among the flags of what it affects - not ancients, one passes them by. */
	HasTargetFlags(flag: DOTA_UNIT_TARGET_FLAGS): boolean
	/** Whether the projectile hits with a flat front as wide as the effect rather than a round head: a wave reaches a unit when its front line passes it. */
	readonly FlatFront: boolean
	/** Units the hitting front runs ahead of the projectile the game reports; zero for one that hits where it is. */
	readonly FrontLead: number
	/**
	 * Whether the effect landing at the game time `time` gets to `target` at all - an immunity to
	 * debuffs does not keep it off, only its states (`StatesOnAt`).
	 */
	ReachesAt(target: IPredictionTarget, time: number): boolean
	/** Whether the effect at the game time `time` may go at `target`, a spell block or not. */
	TargetsAt(target: IPredictionTarget, time: number): boolean
	/** Whether a cast of it may be aimed at `target` by its side: an enemy of its caster, an ally, as its target team says. */
	MayAimAt(target: IPredictionTarget): boolean
	/** The radius of the area its effect lands on; none for one that lands on its unit alone. */
	readonly Radius: number
	/**
	 * The farthest `target`'s middle may get from the caster's while a cast at it is in its cast
	 * point; farther, the cast breaks off.
	 */
	BreakRangeOf(target: IPredictionTarget): number
	/** The unit states the effect landing at the game time `time` puts on `target`; none on one immune to its debuffs then. */
	StatesOnAt(target: IPredictionTarget, time: number): bigint
	/** Whether a dispel of strength `dispel` (`Ability.DispelsCaster`) takes off what the effect lays on the units it hits. */
	DispelledBy(dispel: SPELL_DISPELLABLE_TYPES): boolean
	GetDamage(target: IPredictionTarget): number
	/**
	 * The damage it deals `target` within `seconds` after it lands at game time `landsAt`, its damage
	 * over time with its blow, at the roll `strength`, through `shields` when given.
	 */
	DamageUntil(target: IPredictionTarget, seconds: number, landsAt?: number, strength?: ATTACK_DAMAGE_STRENGTH, shields?: ShieldLedger): number
}
/**
 * How a threat still being aimed reaches units: a cast in progress can turn to anyone within
 * reach before it goes off, so until then the aim, not the shape, says who is threatened.
 */
interface IThreatAim {
	/** Whether the effect is aimed at a unit and lands on it wherever it goes, a cast at a unit: no spot on the ground escapes it. */
	readonly Bound: boolean
	/** Game time the cast goes off, its cast point over; `-Infinity` for an effect already on its way. */
	readonly GoesOffAt: number
	/**
	 * Seconds the effect lands after it gets to the unit it is cast at: a cast at a unit still in
	 * its cast point lays its effect its activation after it goes off and flies there - Laguna
	 * Blade's damage 0.25 s on; none for the rest.
	 */
	readonly LandsAfter: number
	/** Game time the effect reaches `unit` if aimed at it; `Infinity` when it cannot be, `undefined` once the aim is settled and the shape decides. */
	ImpactTime(unit: IPredictionTarget, horizon: number): Nullable<number>
	/** Whether a unit of hull `hull` standing at `position` is inside the effect aimed at `unit`; `undefined` once the aim is settled. */
	Covers(unit: IPredictionTarget, position: Vector3, hull: number): Nullable<boolean>
}
/** A projectile homing on the unit a threat is bound to (`TrackingSign`). */
interface IThreatHoming {
	/** Game time it reaches the spot its unit stands at from the game time `at`, walking until then. */
	ReachesAt(at: number): number
}
/**
 * One effect on its way: an ability, the unit casting it, and the shape it covers over time
 * from the moment the threat was seen. Everything a unit asks about it comes from the shape
 * timeline the ability also casts by, so the volume to dodge is the volume to hit. A threat
 * bound to a unit lands on that unit wherever it goes and is answered with a counter, never by
 * walking.
 */
declare class Threat {
	public readonly Kind: EThreatKind
	public readonly Ability: IThreatAbility
	public readonly Caster: IPredictionTarget
	/** The covered shape over time, in seconds from `Created`. */
	public Shape: IShapeTimeline
	/** Game time the shape was last laid; the shape counts from it. */
	public Created: number
	/** The unit a homing effect is bound to; `undefined` for one that covers ground. */
	public readonly Target?: IPredictionTarget | undefined
	/** What the threat came from - a projectile id, an entity index, a modifier serial - to find it again when that goes away. */
	public readonly Handle: number
	/** The aim of an effect not yet placed; while it answers, it overrides the shape for who is reached and what is covered. */
	public Aim?: IThreatAim | undefined
	/** False once the effect was cancelled, dodged or finished. */
	public IsValid: boolean
	/**
	 * Whether where the effect lands is the SDK's guess: a circle cast at a point, which the game
	 * does not tell until it lands, laid on the unit its caster turns to as the cast point begins;
	 * a cast with no facing (`Ability.RequiresFacing`), aimed at anyone in reach.
	 */
	public Guessed: boolean
	/**
	 * Whether a disjoint dodges it: a tracking projectile the game lets be dodged
	 * (`TrackingProjectile.IsDodgeable`) - Storm Hammer, not Arcane Bolt. An area it lays where it
	 * ends still comes.
	 */
	public Disjointable: boolean
	/** The projectile homing on `Target` it comes as; none for the rest. */
	public Homing?: IThreatHoming
	constructor(Kind: EThreatKind, Ability: IThreatAbility, Caster: IPredictionTarget, 
	/** The covered shape over time, in seconds from `Created`. */
	Shape: IShapeTimeline, 
	/** Game time the shape was last laid; the shape counts from it. */
	Created: number, 
	/** The unit a homing effect is bound to; `undefined` for one that covers ground. */
	Target?: IPredictionTarget | undefined, 
	/** What the threat came from - a projectile id, an entity index, a modifier serial - to find it again when that goes away. */
	Handle?: number, 
	/** The aim of an effect not yet placed; while it answers, it overrides the shape for who is reached and what is covered. */
	Aim?: IThreatAim | undefined)
	/** Game time the effect starts to cover anything. */
	public get Start(): number
	/**
	 * Game time the effect is over; `Infinity` for one that lingers while its sign still follows
	 * it, the moment it was settled at once nothing does (`Settle`).
	 */
	public get End(): number
	/**
	 * Whether the effect is a field standing on the ground: laid by what stays where it lands - a
	 * thinker, its modifier, a particle - as long as that stays, and hurting the units in it while
	 * they stand there (`IThreatAbility.LingersFor`): Macropyre, Shrapnel, Rot round Pudge.
	 */
	public get Lingers(): boolean
	/** Whether the effect is bound to a unit and lands on it wherever it goes: no spot on the ground escapes it. */
	public get Bound(): boolean
	/**
	 * Game time the cast goes off, its cast point over; `-Infinity` for an effect already on its
	 * way. Before it a cast at a unit breaks off when the unit turns invulnerable or out of reach,
	 * and the caster casts again: a state put up then delays the cast, one up after it dodges it.
	 */
	public get GoesOffAt(): number
	/**
	 * Game time the effect gets to `unit`, looking at most `horizon` seconds ahead - what a spell
	 * block standing then takes (`Unit.SpellBlockAt`): its impact (`ImpactTime`) less what lands
	 * after it (`IThreatAim.LandsAfter`). A Counterspell up as Laguna Blade went off sent it back;
	 * one up after, before its damage, did not.
	 * @example
	 * const blocked = up < threat.MeetsAt(hero, 3) && up + counterspell.MaxDuration > threat.MeetsAt(hero, 3)
	 */
	public MeetsAt(unit: IPredictionTarget, horizon: number): number
	/** Whether the effect goes through spell immunity, so a Black King Bar does not answer it. */
	public get PiercesImmunity(): boolean
	/** The area covered at the game time `time`; `undefined` outside the threat's window. */
	public ShapeAt(time: number): Nullable<IShape2D>
	/** The area that harms at the game time `time`, a projectile's head rather than its trail; `undefined` outside the threat's window. */
	public ActiveAt(time: number): Nullable<IShape2D>
	/**
	 * Nothing follows the effect any more as of the game time `now`: one with no end of its own -
	 * a cast's area, which lays no sign of its effect once it went off - is over once it has
	 * landed, or now if that is later, so it leaves the store instead of staying in it for good.
	 * Kept in the shape's own seconds: an effect settled at the instant it lands - a marker the
	 * game lets go at once - still lands then.
	 */
	public Settle(now: number): void
	/** Whether a unit of hull `hull` standing at `position` is harmed by the threat at the game time `time`. */
	public Contains(position: Vector3, time: number, hull?: number): boolean
	/**
	 * Whether a unit of hull `hull` standing at `position` is inside anything the threat covers
	 * over its whole life: the full path of a projectile, the area of a landing effect; for an
	 * effect still being aimed, the effect aimed at `unit`.
	 */
	public Covers(position: Vector3, hull?: number, unit?: IPredictionTarget): boolean
	/**
	 * Game time the effect first reaches `unit` walking its predicted path, looking at most
	 * `horizon` seconds ahead; `Infinity` when it never does. A bound effect lands on its unit
	 * when it arrives and on nobody else; a sweeping effect that already hurt the unit is past it.
	 */
	public ImpactTime(unit: IPredictionTarget, horizon: number): number
	/**
	 * Game time the effect lands on `unit` dodged at the game time `at` (`Disjointable`): a
	 * projectile homing on it flies on to the spot it stood at then and lays its area there - Storm
	 * Hammer's stun - later than it meets a unit walking into it, sooner than one walking away. Its
	 * impact (`ImpactTime`) for the rest.
	 * @example
	 * const lands = threat.ImpactDodgedAt(hero, hero.ResponseTime(manta), PredictionSDK.Tuning.ThreatHorizon)
	 */
	public ImpactDodgedAt(unit: IPredictionTarget, at: number, horizon: number): number
	/**
	 * Game time the effect may last land on `unit` once it reached it (`ImpactTime`): a sweeping
	 * projectile until it has passed the unit on its path - one it could not hurt as it came, an
	 * invulnerable one, it hurts as soon as it can while it still covers it - and a bound effect
	 * or one landing whole, its impact; `Infinity` when it never reaches the unit.
	 * @example
	 * const covered = up <= threat.ImpactTime(hero, 3) && up + lasts >= threat.LandsUntil(hero, 3)
	 */
	public LandsUntil(unit: IPredictionTarget, horizon: number): number
	/**
	 * Damage the effect may deal to `unit` after its resistances and blocks: its blow and every tick
	 * of the damage over time it lays, the unit staying in its area and keeping it to the end
	 * (`Ability.DamageUntil` at the highest roll) - through `shields` as other blows left them,
	 * spending them, when given, else through its shields as they stand.
	 */
	public Damage(unit: IPredictionTarget, shields?: ShieldLedger): number
	/**
	 * Marks the effect answered for `unit` by `response` until the game time `until`: a response
	 * to it is on its way or up, and every other reader leaves it to that response meanwhile
	 * (`AnswerFor`). A later answer for the same unit takes its place.
	 * @example
	 * threat.Answer(hero, manta, threat.ImpactTime(hero, PredictionSDK.Tuning.ThreatHorizon))
	 */
	public Answer(unit: IPredictionTarget, response: IThreatAbility, until: number): void
	/** What answers the effect for `unit` at the game time `time` (`Answer`); none once its answer has run out. */
	public AnswerFor(unit: IPredictionTarget, time?: number): Nullable<IThreatAbility>
	/** Records that the effect hurt the unit with entity index `index`; a sweeping effect is past it from then on. */
	public Landed(index: number): void
	/** Lays a new shape from the game time `created`: the caster turned, the projectile moved on. */
	public Relay(shape: IShapeTimeline, created: number): void
}
