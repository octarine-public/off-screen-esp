// AUTO-GENERATED - do not edit.
/**
 * The ticks of the damage over time an ability lays on an enemy (`Ability.DamageOverTime`): one
 * every `Interval` seconds, the first `Delay` seconds after it lands, until `Duration` seconds
 * after - a tick due right as it ends too while `AtEnd` - each `Flat` damage plus `OfHealth` of
 * the unit's health then and `OfMaxHealth` of its maximum, before what the unit takes of it, no
 * more than `Count` of them when it is given (Dismember's `ticks`); and `Final` damage as it ends -
 * Phantom's Embrace popping. A tick rising with the time since the first - Nethertoxin - reaches
 * `FlatMax` `RampTime` seconds after it. One dealt only `WhileInArea` - Rot, Macropyre, Pulse
 * Nova - reaches a unit while it stays inside and `Linger` seconds after it walks out or the area
 * ends - the time the debuff an aura leaves on it lasts. One `StatusResisted` lasts shorter by the
 * target's status resistance - Viper Strike, Doom; Poison Touch does not - with fewer ticks, or
 * with every tick closer together when it `KeepsTicks` (Doom). A tick of one dealt `PerStack` -
 * Poison Attack, Burning Spear - is as many times itself as the modifier has stacks; one whose
 * renewal does not move its ticks keeps their time (`PhaseKept`: Poison Attack, Corrosive Skin) -
 * the modifier's time renewed, theirs not known once it runs. One `PerFrame` strikes on the
 * first frame once `Interval` has passed since its last - Rot thinks every frame - so a
 * frame later at most each time, and no tick of it is due at a known time once it runs. A cast
 * laying two of them - Firestorm's waves and the burn each lays - fills the second in the rule
 * `Beside` the first. One dealt only `WhileMoving` - Rupture - strikes a unit only as it walks:
 * `OfMoveSpeed` of its speed a tick, none at the lowest roll, the unit free to stand. One whose
 * ticks land at `Random` - Freezing Field's explosions - strikes with each by its chance at the
 * unit (`Ability.TickChance`): only a sure one at the lowest roll, its share of each at the
 * average, each that may at the highest. One laid `After` some seconds - a Crystal Clone
 * shattering, the Frostbite of a Scepter's Freezing Field - counts its `Delay` and `Duration` from
 * then, the target's status resistance cutting the `Duration` alone. A tick of one that grows -
 * Sun Ray - is itself and `Growth` of itself for each second since the ticks began. One bursting
 * every `BurstEvery` seconds after it is laid - Maledict - deals with each burst, before the tick
 * due with it, `OfLost` of the health the unit lost since: from its health as it was laid
 * (`HealthLaid`; its health as the ticks begin when it is not known), less what it regenerates
 * meanwhile; none while it has more. One whose ticks each deal their own - Croak of Genius's echo,
 * its shares running out - has them one by one from the first in `Amounts`, none past them. One
 * taking its damage off the unit's health as it is - Prophet's Pendulum's held damage - is a
 * `Removal`: no resistance or amplification, each tick rounded up as the game takes it, and on the
 * unit that holds it too, an ally of the ability's owner, none it may be rid of; one setting the
 * unit's health - the rum's hangover - `SetsHealth` too: each tick as it is, and never below 1
 * health, so it never kills. A tick of a `Volley` of hits landing together - the Serpent Wards' -
 * is as many blows, each taken, blocked and rounded up on its own.
 *
 * What is not known of a tick - when it lands, whether the unit walks out or dispels it - the roll
 * a reader asks for settles (docs/damage-over-time.md in aio): the lowest
 * (`ATTACK_DAMAGE_STRENGTH.DAMAGE_MIN`) counts what surely lands - a tick by the frame after it is
 * due, a tick by frames at its longest, none the unit may yet be rid of (`KeptUntil`); the average
 * counts every tick when it is due; the highest, every tick as soon as it may land. The ability
 * fills it in place, from nothing (`Reset`); its cast's forecast (`Ability.DamageUntil`) and the
 * modifier it lays (`Modifier.DamageUntil`) read it.
 * @example
 * const ticks = new DamageTicks()
 * if (frostbite.DamageOverTime(ticks, frostbite.Level)) {
 * 	const now = GameState.RawGameTime
 * 	const dealt = ticks.Deal(frostbite, enemy, now, now + ticks.Duration, -Infinity, now + 1)
 * }
 */
declare class DamageTicks {
	public Interval: number
	public Delay: number
	public Duration: number
	public AtEnd: boolean
	public Flat: number
	public FlatMax: number
	public RampTime: number
	public OfHealth: number
	public OfMaxHealth: number
	public Final: number
	public Count: number
	public WhileInArea: boolean
	public Linger: number
	public PerFrame: boolean
	public StatusResisted: boolean
	public KeepsTicks: boolean
	public PerStack: boolean
	public PhaseKept: boolean
	public WhileMoving: boolean
	public OfMoveSpeed: number
	public Random: boolean
	public After: number
	public Growth: number
	public BurstEvery: number
	public OfLost: number
	public HealthLaid: number
	public Amounts: Nullable<readonly number[]>
	public Removal: boolean
	public SetsHealth: boolean
	public Volley: number
	/** Where the latest `Deal` notes each hit it counts, when given (`Ability.DamageUntil`). */
	public Hits: Nullable<DamageHits>
	/**
	 * The target's shields each tick of `Deal` goes through, as the blows before left them, when
	 * given: a tick they take whole leaves the next its turn (`ShieldLedger`).
	 */
	public Shields: Nullable<ShieldLedger>
	/** The ticks' damage type when it is not the ability's - Cinder Brew's ignite, magical. */
	public DamageType: Nullable<DAMAGE_TYPES>
	/** Game time the last tick the latest `Deal` counted is due; `-Infinity` when it counted none. */
	public LastAt: number
	/**
	 * How many of the ticks due every `interval` from game time `first` on are in by game time
	 * `time`: each lands on the first server tick it is due by (`LandsAt`), so those due by then,
	 * or within `dealtWithin` after it.
	 */
	public static DueBy(first: number, interval: number, time: number): number
	/** No ticks: what an ability with no damage over time leaves it. */
	public Reset(): this
	/**
	 * A second rule of the same cast, handed out from nothing (`Reset`) for the ability to fill
	 * beside this one (`Ability.BesideOverTime`) - Firestorm's burn beside its waves.
	 */
	public Beside(): DamageTicks
	/**
	 * Game time until which `target` surely keeps the ticks `ability` laid on it at game time `laid`:
	 * to their end, unless it is a hero that may dispel them (`Ability.IsDispellable`) - then only
	 * while it can neither cast nor use an item (`Unit.LostUntil`), and `held` seconds after they
	 * are laid at least: the disable of the cast laying them; an area's also while the unit cannot
	 * walk out of it (`Unit.ImmobileUntil`), laid anew all along.
	 */
	public KeptUntil(ability: Ability, target: Unit, laid: number, held?: number): number
	/**
	 * The damage the ticks of `ability` laid on `target` at game time `start`, ending at game time
	 * `end`, deal it after game time `from` and by game time `until` at the roll `strength` - the
	 * lowest by default - the blow as it ends among them, none due after game time `kept`
	 * (`KeptUntil`): each through what the target takes of the ability's damage
	 * (`Ability.DamageOf`), its health less what the ones before took, its shields as they left
	 * them (`Shields`). None at a unit that is no enemy of the ability's owner.
	 */
	public Deal(ability: Ability, target: Unit, start: number, end: number, from: number, until: number, strength?: ATTACK_DAMAGE_STRENGTH, kept?: number): number
	/**
	 * Game time the next of the ticks of `ability` laid on `target` at game time `start`, ending at
	 * game time `end`, lands after game time `from` at the roll `strength`: as soon as it may by
	 * default - one landing at `Random`, the next that may. `Infinity` when none does, or at a unit
	 * that is no enemy of the ability's owner.
	 */
	public NextAt(ability: Ability, target: Unit, start: number, end: number, from: number, strength?: ATTACK_DAMAGE_STRENGTH): number
	/**
	 * Makes ticks laid anew at game time `start` keep the time of the ones first laid at game time
	 * `origin` - a renewal that does not move them, Mage Slayer's: the first after `start` comes
	 * as theirs would. None of it for `origin` not before `start`.
	 */
	public KeepTime(origin: number, start: number): void
	/**
	 * Fills it with the ticks of shares each dealing `shares[i]` on `count` ticks every `interval`
	 * from game time `firsts[i]` on - all on one row of ticks - laid at game time `start`: each tick
	 * the shares due then (`Amounts`, kept in `amounts`). Whether any is due.
	 */
	public Shares(firsts: readonly number[], shares: readonly number[], count: number, interval: number, start: number, amounts: number[]): boolean
}
