// AUTO-GENERATED - do not edit.
declare class Ability extends Entity implements IPredictionProfile {
	public readonly AbilityData: AbilityData
	public readonly AnimTime: number
	public readonly IsInIndefiniteCooldown: boolean
	public readonly MaxLevelOverride: number
	public readonly IsActivated: boolean
	public readonly AltCastState: boolean
	public readonly IsAutoCastEnabled: boolean
	public readonly IsCooldownFrozen: boolean
	public readonly IsReplicated: boolean
	public readonly IsStolen: boolean
	public readonly NetworkedManaCost: number
	public readonly OverrideCastPoint: number
	public readonly CastStartTime: number
	public readonly IsToggled: boolean
	public readonly DirtyButtons: number
	public readonly GrantedByFacet: boolean
	public readonly IsStealable: boolean
	public readonly HeroFacetKey: number
	public readonly ReflectionSourceAbility: number
	public readonly HiddenAbilityForDisplay: number
	public Level: number
	public IsEmpty: boolean
	public IsAbility: boolean
	public IsHidden: boolean
	public ChannelStartTime: number
	public AbilityChargeRestoreTimeRemaining: number
	/** @deprecated use by index */
	public AbilitySlot: EAbilitySlot
	/** Profile version of this ability; grows with level, scepter, shard, facet and talents. */
	public readonly Prediction: AbilityPrediction
	/** @private NOTE: this is internal field, use IsInAbilityPhase */
	public IsInAbilityPhase_: boolean
	public IsInAbilityPhaseChangeTime: number
	/** @private NOTE: this is internal field, use Owner or Cooldown */
	public Cooldown_: number
	public CooldownChangeTime: number
	/**
	 * How much the server takes off this cooldown at each of its counts, as the last count it
	 * showed; 0 until it has shown one. It counts a cooldown down in steps and takes a cast only
	 * once a count reads 0, so a count it showed above 0 holds for a step (`Cooldown`).
	 */
	public CooldownStep: number
	/** @private NOTE: this is internal field, use CooldownRestore */
	public CooldownRestore_: number
	public CooldownRestoreTime: number
	/**
	 * When the ability last went off, as the game showed it: its cooldown started, it spent a
	 * charge, or it was toggled on; `-Infinity` until it has. A charge coming back starts the next
	 * one's restore anew and is no cast; nor is a toggle turned off - Spell Steal takes the spell
	 * before it. A cast broken off in its cast point starts no cooldown and does not count, though
	 * the game moves `CastStartTime` for it all the same - Spell Steal takes the spell that went off
	 * (21 October 2026, the hero demo: Legion Commander's Press the Attack stopped in its cast point
	 * after Overwhelming Odds, the steal took Overwhelming Odds). One cast in the fog counts from
	 * when it shows.
	 * @example
	 * const fresh = spell.WentOffAt > GameState.RawGameTime - 1
	 */
	public WentOffAt: number
	/**
	 * @private NOTE: this is internal field, use CurrentCharges. The charges the ability showed
	 * last: a drop is a charge spent (`WentOffAt`).
	 */
	public ChargesShown_: number
	/**
	 * @private NOTE: this is internal field, use IsToggled. Whether the ability showed toggled on
	 * last: turned on, it went off (`WentOffAt`).
	 */
	public ToggledShown_: boolean
	/**@deprecated */
	public readonly ProjectilePath: Nullable<string>
	/**
	 * The shape prediction places for the ability, read from its behavior, radius and speed at
	 * the moment of the call: a vector cast is `Vector`, a point cast with a radius is `Line`
	 * when it travels, `Cone` when it widens, `Circle` otherwise, a no-target cast with a radius
	 * is `AreaOfEffect`, and unit targets, passives and attacks are `None`. A class overrides
	 * this only for a shape the behavior cannot tell, such as an arc.
	 */
	public get SkillShotType(): ESkillShotType
	/** Radius of the shape: the width of a line, the radius of a circle or an area of effect. */
	public get Radius(): number
	/**
	 * Distance the effect travels from the caster: the flight distance a directional ability or
	 * its class names, the cast range otherwise.
	 */
	public get Range(): number
	/** Which units the projectile stops at on its way; `None` for one that flies through everything or has none. */
	public get CollisionFlags(): CollisionFlag
	/** Whose units the projectile collides with. */
	public get CollisionTeam(): CollisionTeam
	/** The unit states the ability puts on what it hits, as a `modifierstate` mask; zero when it applies none. */
	public get AppliesUnitState(): bigint
	/**
	 * Whether the states `AppliesUnitState` names go on its caster, not on a target: Supernova's
	 * egg hides Phoenix herself - read as hers on the target, a combo took it for a cast that
	 * lifts the target away (21 October 2026, demo). None for most.
	 */
	public get StatesOnCaster(): boolean
	/**
	 * Seconds from the cast going off to the states it puts on its caster (`StatesOnCaster`): its
	 * activation by default; a class whose states come with the cast while its effect comes later
	 * says so - Blur's immunity to attacks - and less than none for states that come as its cast
	 * point begins: Raptor Dance's invulnerability.
	 */
	public get StateDelay(): number
	/**
	 * The states a cast of it puts on the unit it lands on that keep harm off that unit - an
	 * invulnerability, an immunity: its `AppliesUnitState` by default; a class whose hit lays them
	 * beside others names them - Nightmare's first second of invulnerability, apart from its sleep.
	 */
	public get GuardUnitState(): bigint
	/**
	 * Seconds the states that keep harm off `target` (`GuardUnitState`) last on it - or its damage
	 * kept off (`GuardsDamage`): as long as the cast holds it (`GetAppliedDuration`) by default;
	 * Nightmare's `nightmare_invuln_time`.
	 */
	public GuardDuration(target: Unit): number
	/**
	 * The damage a cast of it keeps off `target` - a barrier taking blows before the unit's health
	 * does: a Pipe's, an Aphotic Shield's - of the type `BarrierType`, for its `GuardDuration`; none
	 * for most.
	 * @example
	 * const kept = pipe.BarrierOn(hero) >= laguna.GetDamage(hero)
	 */
	public BarrierOn(_target: Unit): number
	/** The type of damage its barrier takes (`BarrierOn`): magical, physical, or any (`DAMAGE_TYPE_NONE`). */
	public get BarrierType(): DAMAGE_TYPES
	/**
	 * The share of each blow of its type its barrier takes (`BarrierOn`) till it is spent: all of it
	 * by default; Flame Guard's `shield_pct_absorb`, the rest getting through.
	 */
	public get BarrierShare(): number
	/**
	 * Whether a cast of it lets every attack at the unit it lands on miss for its `GuardDuration` -
	 * a full evasion: Windrun; a true strike lands all the same. None for most.
	 */
	public get EvadesAttacks(): boolean
	/**
	 * Whether a cast of it at nothing puts its guard - its states, its barrier, the damage it keeps
	 * off - on the units of its caster's side within its `AOERadius` too, not on its caster alone:
	 * Pipe of Insight, Guardian Angel, Warcry. Read off the class's prototype; none for most.
	 */
	public get GuardsAllies(): boolean
	/**
	 * Whether a cast of it keeps all damage off the unit it lands on for its `GuardDuration`, apart
	 * from any state - a stun lands all the same: Mischief's absolute no-damage. None for most.
	 */
	public get GuardsDamage(): boolean
	/**
	 * Whether a cast of it keeps all damage of `type` off the unit it lands on for its
	 * `GuardDuration`, apart from any state - a stun lands all the same - of a spell that pierces a
	 * debuff immunity (`pierces`) or not: every type when it keeps all (`GuardsDamage`); an ethereal
	 * form keeps physical damage off - Ghost Scepter, Decrepify. None for most.
	 * @example
	 * const kept = ghost.GuardsDamageOf(quills.DamageType)
	 */
	public GuardsDamageOf(_type: DAMAGE_TYPES, _pierces?: boolean): boolean
	/**
	 * Whether a cast of it keeps the unit it lands on alive for its `GuardDuration`: a least health
	 * of 1 its modifier declares (`MIN_HEALTH` in server.dll) - Shallow Grave, Battle Trance; the
	 * blows and the states land all the same. None for most.
	 * @example
	 * const saved = hero.DiesAt(3, { AliveFrom: up, AliveUntil: up + grave.GuardDuration(hero) })
	 */
	public get KeepsAlive(): boolean
	/**
	 * Whether a cast of it puts on the unit it lands on - its caster for one cast at nothing - a
	 * shell that takes every spell cast at it that a Linken's Sphere would take
	 * (`TriggersSpellBlock`) and lands while the shell stands (`GuardDuration`): Counterspell, sending
	 * it back (`Unit.AbsorbsAt`); Linken's Sphere cast at an ally. A Lotus Orb only sends it back
	 * (`ReflectsTargetedSpells`). None for most.
	 */
	public get BlocksTargetedSpells(): boolean
	/**
	 * Whether a cast of it puts on the unit it lands on - its caster for one cast at nothing - a
	 * shell that sends back at its caster every spell cast at the unit that a Linken's Sphere would
	 * take (`TriggersSpellBlock`) and lands while the shell stands (`GuardDuration`,
	 * `Unit.ReflectsAt`): Lotus Orb, Counterspell. The spell takes the unit all the same unless the
	 * shell takes it too (`BlocksTargetedSpells`) - or it comes back as one that frees it
	 * (`SentBackFrees`). None for most.
	 */
	public get ReflectsTargetedSpells(): boolean
	/**
	 * Whether its effect, sent back at its caster by a shell (`ReflectsTargetedSpells`), lets go of
	 * the unit it was cast at: a channel whose hit takes the casting away - a stun, a hex, a silence
	 * (`HitUnitState`) - breaks as its caster takes it, and what the channel held goes with it:
	 * Dismember, Fiend's Grip, Shackles.
	 * @example
	 * const freed = hero.LotusAt(goesOff) && threat.Ability.SentBackFrees
	 */
	public get SentBackFrees(): boolean
	/**
	 * As `SentBackFrees`, for an ability of this class before any unit carries it, `data` its game
	 * data: read off the class's prototype.
	 */
	public SentBackFreesOf(data: AbilityData): boolean
	/**
	 * Whether its guard (`GuardDuration`) keeps off a projectile homing on the unit it guards: all
	 * do but one whose cast puts the projectile's hit off past it - Mischief, the projectile coming
	 * down to what Monkey King turned into a tenth of a second later from near him.
	 */
	public get GuardsHoming(): boolean
	/**
	 * Whether `order`, given to its caster while its guard stands, ends the guard early: a channel's
	 * - Phase Shift, Tricks of the Trade - by an order that cuts the channel (`BreaksChannel`), a walk,
	 * an attack, a stop, a cast, not one queued after it; none else for most - a cyclone, an
	 * immunity stand whatever the caster is told.
	 */
	public GuardBrokenBy(order: ExecuteOrder): boolean
	/**
	 * The ability of its owner that ends what a cast of it put on its owner - Nightmare End wakes
	 * Bane from his own Nightmare; none for most.
	 */
	public get EndedBy(): Nullable<Ability>
	/**
	 * Where `caster` casts it, at a point, for the states it puts on its caster (`StatesOnCaster`):
	 * its own spot by default - Tricks of the Trade; a class whose states need something at the
	 * point says where - Sleight of Fist at the units it may strike - and `undefined` with none.
	 */
	public StatesSpotOf(caster: Unit): Nullable<Vector3>
	/**
	 * The unit `caster` casts it at, at a unit, for the states it puts on its caster
	 * (`StatesOnCaster`): the caster itself as it may be cast at it; for one cast only at others -
	 * Omnislash, Swift Slash - the nearest unit in sight it may be cast at within its cast range, no
	 * walk to it; `undefined` with none.
	 */
	public StatesTargetOf(caster: Unit): Nullable<Unit>
	/**
	 * Whether a cast of it moves its caster along the way the caster faces, wherever it is aimed -
	 * Force Staff's push on the caster, Mirana's Leap: a caster that turns first moves the way it
	 * turned (`MotionAlong`). None for most.
	 */
	public get MovesAlongFacing(): boolean
	/**
	 * Whether a cast of it moves its caster - a blink, a dash, a leap, a push along its facing:
	 * Blink, Waveform, Skewer, Pounce, Force Staff on itself. Where it sets it down is `MotionOn`,
	 * `MotionAlong` along its facing, or a point of `MovesTo` or a unit of `MovesOnto` it is aimed
	 * at. A blink (`IsBlink`) and one moving it along its facing by default.
	 */
	public get MovesCaster(): boolean
	/**
	 * Whether casting it dodges the tracking projectiles flying at its caster that the game lets be
	 * dodged (`Threat.Disjointable`): a split, a blink. None for most.
	 */
	public get Disjoints(): boolean
	/**
	 * The unit states the effect puts on the units it hits, as a threat to them: `AppliesUnitState`,
	 * none while those go on its caster (`StatesOnCaster`); a class whose hit lays other states
	 * than its caster takes names them.
	 */
	public get HitUnitState(): bigint
	/**
	 * Game time the effect lands on `unit`, which a modifier of its cast marks for it
	 * (`ThreatModifierMark`); `Infinity` for an ability that marks none.
	 */
	public MarkLandsAt(_unit: Unit): number
	/**
	 * The dispel its cast lays on its caster - cast on the caster, for one cast at a unit: a basic
	 * one (`SPELL_DISPELLABLE_YES`) or a strong one (`SPELL_DISPELLABLE_YES_STRONG`), what each
	 * takes off as `DispelledBy` says; `SPELL_DISPELLABLE_NONE` for most. The game data names it
	 * nowhere: a class says so.
	 */
	public get DispelsCaster(): SPELL_DISPELLABLE_TYPES
	/**
	 * Whether a dispel of strength `dispel` - basic `SPELL_DISPELLABLE_YES` or strong
	 * `SPELL_DISPELLABLE_YES_STRONG`, as `DispelsCaster` names it - takes off what the effect lays
	 * on the units it hits, by the data's `SpellDispellableType`: a basic one what is marked
	 * `SPELL_DISPELLABLE_YES` - roots, silences, slows, sleep; a strong one that and
	 * `SPELL_DISPELLABLE_YES_STRONG` - stuns, hexes. None takes off what is marked
	 * `SPELL_DISPELLABLE_NO` or not marked.
	 * @example
	 * const freed = threat.Ability.DispelledBy(manta.DispelsCaster)
	 */
	public DispelledBy(dispel: SPELL_DISPELLABLE_TYPES): boolean
	/**
	 * Whether the projectile hits with a flat front as wide as the effect rather than a round
	 * head: a wave reaches a unit when its front line passes it, a bolt when its head touches it.
	 */
	public get FlatFront(): boolean
	/**
	 * Whether it is cast at a unit with no shape its caster's facing places - a hex, a Laguna
	 * Blade, a Lightning Bolt that strikes the unit nearest its spot: aimed at the unit its caster
	 * faces, it lands on that unit wherever it goes.
	 */
	public get AimsAtUnit(): boolean
	/**
	 * How far from its caster its effect lands at most: its range or cast range and its width; a
	 * cast at a unit (`AimsAtUnit`) keeps going at it `CastRangeBuffer` past its cast range.
	 */
	public get ThreatReach(): number
	/**
	 * Seconds its effect flies from the caster to a unit `distance` away with hull `hull` once the
	 * cast goes off: to the unit's edge for a cast at it (`AimsAtUnit`); to the point a circle
	 * lands at, the unit's middle when it is cast at the unit; for another shape, until its front
	 * reaches the unit - its width ahead of it, or the unit's middle for a flat front
	 * (`FlatFront`). None for one that lands at once.
	 */
	public FlightTo(distance: number, hull: number): number
	/**
	 * Seconds from the first the threat module sees of a cast of it - the phase, or the effect for
	 * one without a cast point - to its landing on a unit `distance` from the caster with hull
	 * `hull`: its cast point, activation and flight (`FlightTo`), as the cast's threat counts them.
	 * The window a response has against it runs from `ThreatLead(0)` to `ThreatLead(ThreatReach)`;
	 * none for an instant cast with no sign of its own.
	 * @example
	 * const always = hero.ResponseTime(manta) - GameState.RawGameTime < laguna.ThreatLead(0)
	 */
	public ThreatLead(distance: number, hull?: number): number
	/**
	 * Whether a linear projectile of the ability flying at `speed` carries its landing to its end,
	 * hitting nothing on its way: a landing's (`SkillShotType` Circle) - Ghostship's ship,
	 * Flamebreak's flask. A bolt that hits as it goes does not.
	 */
	public CarriesLanding(_speed: number): boolean
	/**
	 * Units the hitting front runs ahead of the projectile the game reports; zero for one that hits
	 * where it is. A wave that widens harms from its leading edge, which stands its end radius
	 * ahead of that point.
	 */
	public get FrontLead(): number
	public get IsDodgeableProjectile(): boolean
	/** Whether the target's status resistance shortens the ability's durations; off for the few the game exempts. */
	public get IsAffectedByStatusResistance(): boolean
	/**
	 * Whether casting at an enemy unit is eaten by Linken's Sphere or sent back by Lotus Orb, as
	 * the ability stands now - its behaviour, teams and types may change with Aghanim's, a talent,
	 * a facet (`MeetsSpellBlock`).
	 */
	public get TriggersSpellBlock(): boolean
	/**
	 * As `TriggersSpellBlock`, for an ability of this class before any unit carries it, `data` its
	 * game data: read off the class's prototype.
	 * @example
	 * const urn = AbilityData.GetAbilityByName("item_urn_of_shadows")
	 * const urnClass = EntityManager.GetConstructorByName<Ability>("item_urn_of_shadows")
	 * const popsSphere = urn !== undefined && urnClass?.prototype.TriggersSpellBlockOf(urn) === true
	 */
	public TriggersSpellBlockOf(data: AbilityData): boolean
	/**
	 * Whether its effect holds what it lands on where it stands - a stun, a root, a freeze, a
	 * nightmare (`ImmobilizingStates`); not a hex, under which the unit walks: by the states it
	 * applies (`AppliesUnitState`), a constant of the class, so it answers off the class's prototype
	 * before any unit carries the ability.
	 * @example
	 * const holds = EntityManager.GetConstructorByName<Ability>("invoker_tornado")?.prototype.Immobilizes
	 */
	public get Immobilizes(): boolean
	/**
	 * Whether a cast with `behavior`, aimed at `teams` and `types`, meets Linken's Sphere and Lotus
	 * Orb: a cast at a unit, not an attack, at enemy heroes or units - unless the game data marks it
	 * as one that procs nothing (`DONT_PROC_OTHER_ABILITIES`: Urn of Shadows, Spirit Vessel). A
	 * class the data does not describe answers here, for both.
	 */
	protected MeetsSpellBlock(behavior: DOTA_ABILITY_BEHAVIOR, teams: DOTA_UNIT_TARGET_TEAM, types: DOTA_UNIT_TARGET_TYPE): boolean
	/** Seconds the cast animation holds the caster after the cast point; zero without animation data. */
	public get CastBackswing(): number
	/** Whether a cast `CastPredicted` sent is still before its cast point, where a stop order can take it back. */
	public get IsCastPending(): boolean
	/** A prediction the class runs instead of the core, built from the same primitives; `undefined` by default. */
	public get PredictionStrategy(): Nullable<IPredictionStrategy>
	/**
	 * Seconds the ability's effect holds `target`: how long it holds a unit it hits
	 * (`AppliedDuration`), cut by the target's status resistance where the game applies it.
	 */
	public GetAppliedDuration(target: Unit): number
	/**
	 * What a hit of the ability does to a unit as the ability stands, effect by effect: the unit
	 * states each takes and for how long, a push it carries (`FillEffects`). Refilled on every read.
	 * @example
	 * const effects = hex.Effects
	 * effects.LostFor(EUnitCapability.Fight) // the hex's seconds: no attack, spell or item
	 */
	public get Effects(): AbilityEffects
	/**
	 * The effects of a hit on `target` (`FillEffectsOn`): each for as long as it holds that unit -
	 * cut by its status resistance where the game applies it, and by whatever else the class counts
	 * of it, as `GetAppliedDuration` is - and the changes of its move speed the hit brings
	 * (`FillSpeedChangesOn`). Refilled on every read.
	 */
	public EffectsOn(target: Unit): AbilityEffects
	public get ProjectileAttachment(): string
	public get CastDelay(): number
	public get IsInvisibility(): boolean
	/**
	 * Whether the invisibility it brings (`IsInvisibility`) stays though the enemy sees through
	 * invisibility - a Gem, a Sentry Ward, a mark that reveals: Shadow Dance's (TRUESIGHT_IMMUNE).
	 * Read off the class's prototype; none for most.
	 */
	public get HidesFromTrueSight(): boolean
	/**
	 * How near an enemy hero ends the invisibility it brings (`IsInvisibility`) - Blur's `radius`:
	 * within it the bearer stays seen; none for most.
	 */
	public get RevealedWithin(): number
	/**
	 * Whether the invisibility it brings comes back after an attack or a cast reveals its bearer -
	 * the fade over again - its buff lasting its whole duration through them (`MaxDuration`):
	 * Moonlight Shadow. A Shadow Blade's walk ends with the reveal. None for what hides no one.
	 * @example
	 * const fightBuff = ability.IsInvisibility && ability.InvisibilityReturns
	 */
	public get InvisibilityReturns(): boolean
	/**
	 * Seconds the attack that ends the invisibility it brings stuns its target: Shadow Walk's.
	 * None for an invisibility whose reveal does nothing to the target, and for what hides no one.
	 * @example
	 * const strikes = ability.RevealStunDuration > 0 // a cast before the swing wastes the stun
	 */
	public get RevealStunDuration(): number
	/**
	 * How far from its bearer, at most, the units the invisibility it brings summons as it ends
	 * stand: Skeleton Walk's archers - immobile, they reach only what their attack range does from
	 * there. None for an invisibility whose end summons no one, and for what hides no one.
	 * @example
	 * const archersReach = hero.GetAttackRange(enemy) - walk.RevealSummonRadius
	 */
	public get RevealSummonRadius(): number
	/**
	 * Damage the attack that ends the invisibility it brings adds on its target: Vendetta's - a
	 * spell or an item cast ends it short of that, the damage lost. None for an invisibility whose
	 * reveal does nothing to the target, and for what hides no one.
	 * @example
	 * const strikes = walk.RevealStunDuration > 0 || walk.RevealBonusDamage > 0
	 */
	public get RevealBonusDamage(): number
	/**
	 * Whether casting it leaves its caster hidden by an invisibility that ends with an attack or a
	 * cast - Track: most spells and items reveal their caster.
	 * @example
	 * const reveals = hero.IsInvisible && !ability.KeepsInvisibility
	 */
	public get KeepsInvisibility(): boolean
	/** NOTE: @override in child classes */
	public get ShouldBeDrawable(): boolean
	public get IsUltimate(): boolean
	public get IsBreakable(): boolean
	/**
	 * Whether its hit breaks the unit, its passives off while its effect lasts - Viper Strike
	 * (`does_break`); one the game breaks with though its data does not say so (Silver Edge's
	 * backstab) is not known.
	 */
	public get Breaks(): boolean
	/**
	 * Whether its first hit lands before the Break it brings (`Breaks`), a passive the Break turns
	 * off still taking that hit - Viper Strike's first tick; one breaking first by default
	 * (Sharpshooter, Silver Edge's backstab).
	 */
	public get HitBeforeBreak(): boolean
	public get IsAttributes(): boolean
	public get CanHitSpellImmuneEnemy(): boolean
	public get CanHitSpellImmuneAlly(): boolean
	/**
	 * Seconds the ability needs before a cast can be ordered at all, beyond the order itself:
	 * Invoker crafting the spell. Zero for everything the hero can simply cast, and part of
	 * `CastTimeline.PrepareTime`.
	 */
	public get PrepareTime(): number
	public get CanBeUsable(): boolean
	/**
	 * Whether the ability can be used by the game time `time` as it stands: as `CanBeUsable`. A
	 * spell the game hides until it is readied - Invoker's - answers whether it is readied by then.
	 */
	protected CanBeUsableAt(_time: number): boolean
	public get Owner(): Nullable<Unit>
	public get OwnerHasShard(): boolean
	public get OwnerHasScepter(): boolean
	public get AbilityBehaviorMask(): DOTA_ABILITY_BEHAVIOR
	/**
	 * How an ability of this class is cast, `data` its game data: the data's behaviour, but the
	 * class's own where the data names none - Battle Trance, cast at nothing. Read off the class's
	 * prototype as `TargetTypeOf` is; a class that weighs its unit's state on top (a talent's
	 * point cast) does so in `AbilityBehaviorMask`.
	 */
	public BehaviorOf(data: AbilityData): DOTA_ABILITY_BEHAVIOR
	public get TargetTypeMask(): DOTA_UNIT_TARGET_TYPE
	public get TargetTeamMask(): DOTA_UNIT_TARGET_TEAM
	/**
	 * The types of unit an ability of this class may target, `data` its game data: the data's,
	 * but the class's own where the data calls them custom - Eul's Scepter takes an enemy hero or
	 * creep and its owner. It reads nothing of a unit, so it answers off the class's prototype
	 * before any unit carries the ability.
	 * @example
	 * const hex = EntityManager.GetConstructorByName<Ability>("item_sheepstick")
	 * const data = AbilityData.GetAbilityByName("item_sheepstick")
	 * const atHeroes =
	 * 	data !== undefined &&
	 * 	hex?.prototype.TargetTypeOf(data).hasMask(DOTA_UNIT_TARGET_TYPE.DOTA_UNIT_TARGET_HERO)
	 */
	public TargetTypeOf(data: AbilityData): DOTA_UNIT_TARGET_TYPE
	/**
	 * The teams an ability of this class may target, `data` its game data: the data's, but the
	 * class's own where the data calls them custom or names too few - Eul's takes enemies, Lion's
	 * Mana Drain allies too. Read off the class's prototype as `TargetTypeOf` is.
	 */
	public TargetTeamOf(data: AbilityData): DOTA_UNIT_TARGET_TEAM
	public get TargetFlagsMask(): DOTA_UNIT_TARGET_FLAGS
	public get SpellDispellableType(): SPELL_DISPELLABLE_TYPES
	public get BonusStatsMask(): EDOTASpecialBonusStats
	public get AbilityDamage(): number
	public get AbilityType(): ABILITY_TYPES
	public get IsInnate(): boolean
	public get IsDispellable(): boolean
	public get IsInnateHidden(): boolean
	/** Radius the shape ends with: the wide end of a cone when the class names it, the radius otherwise. */
	public get EndRadius(): number
	/**
	 * The end radius one projectile of it widens to: its `EndRadius` for most - a wave that
	 * widens as it goes; none past its radius for a cast whose width is the spread of its several
	 * projectiles - Earth Spike's cone with the talent, three spikes, each a line.
	 */
	public get ProjectileEndRadius(): number
	/**
	 * The radius one projectile of it hits with: its `Radius` for most; less for a cast whose
	 * width is the spread of its many projectiles - March of the Machines, `radius` across, sends
	 * robots of `collision_radius` each.
	 * @example
	 * const width = 2 * (projectile.Ability?.ProjectileRadius ?? 0)
	 */
	public get ProjectileRadius(): number
	/**
	 * The radius round the point it is cast at in which it seeks the unit it strikes - Lightning
	 * Bolt cast at the ground strikes the nearest enemy hero within `spread_aoe` of the point; none
	 * for most.
	 */
	public get SeekRadius(): number
	public get CastPoint(): number
	public get ActivationDelay(): number
	/**
	 * Seconds what the effect sends out as it activates flies homing on the units it took then -
	 * Starstorm's stars: those are judged where they stand as it activates and hit this much later
	 * wherever they went. Part of the cast's `TravelTime`; zero for an effect that hits what it
	 * covers.
	 */
	public get HomingTime(): number
	public get MaxChannelTime(): number
	/** Seconds the channel has run since it started. */
	public get ChannelTime(): number
	/**
	 * Seconds left until the channel runs its full time, from now - not a game time, despite the
	 * name; zero once it is over.
	 */
	public get ChannelEndTime(): number
	public get MaxCharges(): number
	public get MaxChargeRestoreTime(): number
	public get DamageType(): DAMAGE_TYPES
	public get ID(): number
	public get IsChanneling(): boolean
	/**
	 * Whether its channel goes on through a cast of another spell or item of its caster's - Sinister
	 * Gaze with Aghanim's Scepter; a walk, an attack or a stop still ends it. A cast ends most
	 * channels.
	 * @example
	 * const castsNow = !channel.IsChanneling || channel.ChannelTakesCasts
	 */
	public get ChannelTakesCasts(): boolean
	public get IsInAbilityPhase(): boolean
	/**
	 * Whether it was cast and its owner winds up before it lands, past its cast point and its
	 * cooldown begun: an order to the owner now cuts it short and gives the cooldown back - Hoof
	 * Stomp. The owner is busy with it as in a cast point (`Unit.IsInAbilityPhase`). None for most.
	 * @example
	 * const busy = stomp.IsInAbilityPhase || stomp.IsWindingUp
	 */
	public get IsWindingUp(): boolean
	/**
	 * Whether a walk order to its owner in its windup (`IsWindingUp`) steers the windup rather
	 * than cutting it short: the owner walks on with it where ordered - Starbreaker with the Shard.
	 * None for most.
	 */
	public get SteeredInWindup(): boolean
	public get CooldownLength(): number
	public get IsCooldownReady(): boolean
	public get IsReady(): boolean
	public get BaseManaCost(): number
	public get ManaCost(): number
	public get HealthCost(): number
	public get IsGrantedByScepter(): boolean
	/** Whether Aghanim's Shard grants the ability. */
	public get IsGrantedByShard(): boolean
	public get IsItem(): boolean
	public get LevelsBetweenUpgrades(): number
	public get MaxLevel(): number
	public get RequiredLevel(): number
	public get SharedCooldownName(): string
	public get DependentOnAbility(): string
	public get AbilityImmunityType(): SPELL_IMMUNITY_TYPES
	public get TargetFlags(): number[]
	public get TargetTeam(): number[]
	public get TargetType(): number[]
	public get TexturePath(): string
	public get IsPassive(): boolean
	/**
	 * Whether a cast of it comes as an attack (`DOTA_ABILITY_BEHAVIOR_ATTACK`): Walrus Punch, Frost
	 * Arrows - none of it lands on a unit immune to attacks.
	 */
	public get IsAttack(): boolean
	/**
	 * Seconds its effect stands on the ground once it lands, hurting the units in its area as long
	 * as they stand in it - a field: the duration of its damage over time when that lands only
	 * while a unit is in its area (`DamageTicks.WhileInArea`) - Macropyre, Shrapnel, Rot's for
	 * ever; none for another. Read off a unit's ability, its level's values.
	 */
	public get LingersFor(): number
	/**
	 * Whether its effect is a field standing on the ground (`LingersFor`) - at its level, or at its
	 * first while it is not learned: Macropyre, Rot, Nethertoxin. Read off a unit's ability.
	 */
	public get LaysField(): boolean
	/**
	 * Whether its effect comes with its caster's attack other than as a cast as an attack
	 * (`IsAttack`): the swing out of a buff of his - Meld. Read off the class's prototype; none for
	 * most.
	 */
	public get RidesAttack(): boolean
	/**
	 * Whether its caster attacks the unit it holds all through the hold, which is what hurts there:
	 * Duel - a unit immune to attacks takes none of it, and nobody wins. Read off the class's
	 * prototype; none for most.
	 */
	public get AttacksHeld(): boolean
	/**
	 * Whether the swing its caster begins now carries it, `gesture` the gesture the swing came with
	 * this tick: a cast as an attack (`IsAttack`) ready - its level, mana and cooldown - on
	 * autocast, or cast now: the swing comes with the animation its data casts it with
	 * (`AbilityData.CastAnimation`: Walrus Punch's). A class whose effect rides the swing otherwise
	 * says when (`RidesAttack`).
	 */
	public RidesSwing(gesture: Nullable<GameActivity>): boolean
	/**
	 * Whether its effect carries the unit it lands on somewhere - a push, a pull, a swap, a return:
	 * Force Staff and Hurricane Pike cast at an enemy, Harpoon, Nether Swap, X Marks the Spot,
	 * Reality Rift. Where to is `MotionOn` for the classes that know it. None for most.
	 */
	public get MovesTarget(): boolean
	/**
	 * Seconds the unit `target` its effect lands on is carried off (`MovesTarget`): a push's or a
	 * pull's travel, a mark's wait before it sets the unit back; none for an instant swap, and for
	 * an ability that moves no one.
	 */
	public MovesTargetFor(_target: Unit): number
	/**
	 * Whether a cast of it at a unit of its caster's side lays its effect on his enemies within its
	 * `Radius` of that unit: Purification, Shadow Wave, Firesnap Cookie where the unit lands. None
	 * for most - a radius may count units round the target (Soul Rip) and hit no one.
	 */
	public get HitsAroundTarget(): boolean
	/**
	 * Whether its effect lands on every enemy hero of its caster's wherever they stand, with its
	 * radius the largest there is: Thundergod's Wrath, Global Silence - no walk, move or fade gets
	 * out of it. Read off the class's prototype; none for most.
	 */
	public get HitsEveryEnemy(): boolean
	public get IsNotLearnable(): boolean
	public get NoTarget(): boolean
	public get IgnoreBackSwing(): boolean
	public get IsUIInnate(): boolean
	public get CooldownRestore(): number
	/**
	 * Seconds until the server takes a cast of it. The server counts a cooldown down in steps
	 * (`CooldownStep`) and takes a cast only once a count reads 0: a count it showed above 0, however
	 * little, holds until its next one, a step later.
	 */
	public get Cooldown(): number
	public get CooldownPercent(): number
	public get CooldownPercentDecimal(): number
	public get CooldownDuration(): number
	public get CooldownDurationPercent(): number
	public get CooldownDurationPercentDecimal(): number
	public get StackCount(): number
	public get Speed(): number
	/** How long its effect lasts: a Pit of Malice stands 12 s, whatever it roots a unit for. */
	public get MaxDuration(): number
	/**
	 * Seconds its effect holds a unit it hits, before status resistance: how long a stun, a root, a
	 * lift of it lasts on the unit - a Pit of Malice roots 1.8 s while it stands 12 s
	 * (`MaxDuration`). The hold of `HoldingAbility` when another ability of its owner holds for it.
	 */
	public get AppliedDuration(): number
	/**
	 * The level its durations read at: its own. A class whose values follow another level says
	 * which - an Invoker spell's, its orb's.
	 */
	protected get DurationLevel(): number
	/**
	 * The ability of its owner whose effect holds a unit this one hits, when the hold is not its
	 * own: Enchant Totem's strike stuns by Aftershock. `undefined` by default.
	 */
	protected get HoldingAbility(): Nullable<string>
	public get MaxCooldown(): number
	public get BaseCastRange(): number
	public get CastRange(): number
	/**
	 * The farthest the caster's middle may stand from `target`'s to cast at it from where it is:
	 * within cast range of its edge for a cast at a unit, of its middle for one at a point aimed
	 * there; for one cast at nothing, the radius around the caster its effect takes, to the
	 * target's edge - `Infinity` for one that takes none, and for one cast anywhere on the map.
	 * @example
	 * const reach = Math.min(meteor.ReachOf(target), blast.ReachOf(target))
	 * const stand = target.Position.Extend2D(hero.Position, reach)
	 */
	public ReachOf(target: Unit): number
	public get AOERadius(): number
	public get MinAOERadius(): number
	public get SkillshotRange(): number
	public get IsCastRangeFake(): boolean
	public get UsesRotation(): boolean
	/**
	 * Whether its caster turns toward what it is cast at before the cast starts - the game's
	 * `RequiresFacing`; most do. A class that goes the way the caster stands says so: Torrent,
	 * Sticky Napalm, Dark Portal, Burning Army always; Nyx Assassin's spells while he is burrowed;
	 * Sleight of Fist and Fire Remnant while Ember Spirit bears `modifier_ember_spirit_fire_remnant`.
	 * @example
	 * const turn = ability.RequiresFacing ? hero.TurnTimeNew(point, false) : 0
	 */
	public get RequiresFacing(): boolean
	public get CurrentCharges(): number
	public set CurrentCharges(newVal: number)
	public get SpellAmplify(): number
	/**
	 * One plus the spell amplification of its damage on `target` - some counts only against some
	 * targets (Partisan's Brand) - or, without one, against any.
	 */
	public SpellAmplifyOn(target?: Unit): number
	protected get CanBeCastedWhileRooted(): boolean
	/**
	 * Whether a stun lets it be cast: `DOTA_ABILITY_BEHAVIOR_IGNORE_PSEUDO_QUEUE` in the data -
	 * Borrowed Time. A hex lets none.
	 */
	protected get CanBeCastedWhileStunned(): boolean
	protected get CanBeCastedWhileSilenced(): boolean
	public GetProjectileStartingPosition(pos: Vector3, ang: QAngle, scale?: number): Vector3
	public GetMaxCooldownForLevel(level: number): number
	public GetChargeRestoreTimeForLevel(level: number): number
	public GetMaxChargesForLevel(level: number): number
	public GetMaxDurationForLevel(level: number): number
	/**
	 * The longest its effect lasts - `MaxDuration` at its best - from its game data `data`: at its
	 * top level, with every bonus the data names (Aghanim's Scepter, Shard, talents). It reads
	 * nothing of a unit, so it answers off the class's prototype before any unit carries it.
	 * @example
	 * const pit = EntityManager.GetConstructorByName<Ability>("abyssal_underlord_pit_of_malice")
	 * const data = AbilityData.GetAbilityByName("abyssal_underlord_pit_of_malice")
	 * const stands = data === undefined ? 0 : (pit?.prototype.MaxDurationOf(data) ?? 0)
	 */
	public MaxDurationOf(data: AbilityData): number
	/** Seconds its effect holds a unit it hits at `level`, before status resistance. */
	public GetAppliedDurationForLevel(level: number): number
	/**
	 * The longest its effect holds a unit it hits - `AppliedDuration` at its best - from its game
	 * data `data`: at its top level, with every bonus the data names, the longest a distance-scaled
	 * one reaches; the hold of `HoldingAbility` by that ability's data. Off the class's prototype,
	 * before any unit carries it; 0 when the data does not say.
	 * @example
	 * const impale = EntityManager.GetConstructorByName<Ability>("lion_impale")
	 * const data = AbilityData.GetAbilityByName("lion_impale")
	 * const stun = data === undefined ? 0 : (impale?.prototype.AppliedDurationOf(data) ?? 0)
	 */
	public AppliedDurationOf(data: AbilityData): number
	/**
	 * How long its effect lasts at `level`, its special values read from `values` - the ability as
	 * it stands, or its data at its best (`MaxDurationOf`): the class's formula, one for both.
	 */
	protected DurationFrom(values: ISpecialValues, level: number): number
	/**
	 * How long its effect holds a unit it hits at `level`, its special values read from `values`:
	 * how long the effect lasts (`DurationFrom`) by default. A class whose effect is not the hold -
	 * an area that stands, a stun after a lift - says how long it holds.
	 */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	/**
	 * Names the effects of a hit into `out`: one by default, the unit states the ability applies
	 * (`AppliesUnitState`) for as long as it holds a unit (`AppliedDuration`). A class whose hit
	 * brings several of lengths of their own - a push and a disarm - names each.
	 */
	protected FillEffects(out: AbilityEffects): void
	/**
	 * Names the effects of a hit on `target` into `out`: by default the unit states the ability
	 * applies for as long as it holds that unit (`GetAppliedDuration`) - a class whose hold depends
	 * on the target says so there. A class naming effects of its own (`FillEffects`) names them for
	 * a target too.
	 */
	protected FillEffectsOn(out: AbilityEffects, target: Unit): void
	/**
	 * Names the changes of move speed a hit on `target` brings into `out`
	 * (`AbilityEffects.AddSpeedChange`), each for as long as it lasts on that unit: none by
	 * default; a class whose hit slows or quickens the unit names it, its percent and its seconds
	 * from its own data - Ethereal Blade's slow on an enemy. What a projectile of it in flight
	 * brings its target before it lands (`UnitPrediction.IncomingSpeed`).
	 */
	protected FillSpeedChangesOn(_out: AbilityEffects, _target: Unit): void
	/**
	 * `duration` seconds of a hold on `target`, cut by its status resistance and drawn out by the
	 * owner's debuff amplification where the game applies them (`Unit.GetDebuffDurationFactor`).
	 */
	protected HoldOn(target: Unit, duration: number): number
	public GetBaseCastPointForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseManaCostForLevel(level: number): number
	public GetBaseHealthCostForLevel(level: number): number
	public GetCastRangeForLevel(level: number): number
	public GetBaseCastRangeForLevel(level: number): number
	/** Delay between the cast point and the effect; a class names the key value it comes from. */
	public GetBaseActivationDelayForLevel(_level: number): number
	/** Projectile speed; a class names the key value it comes from. */
	public GetBaseSpeedForLevel(_level: number): number
	/** Radius of the shape; a class names the key value it comes from, and without one the ability has no shape. */
	public GetBaseAOERadiusForLevel(_level: number): number
	public GetBaseMinAOERadiusForLevel(_level: number): number
	/** Flight distance of the effect when it is not the cast range; a class names the key value it comes from. */
	public GetBaseRangeForLevel(_level: number): number
	public GetBaseChannelTimeForLevel(level: number): number
	public GetCastDelay(unit?: Unit | Vector3, movement?: boolean, directionalMovement?: boolean, currentTurnRate?: boolean): number
	public GetHitTime(unit: Unit | Vector3, movement?: boolean, directionalMovement?: boolean, currentTurnRate?: boolean): number
	/**
	 * The displacement the ability's effect carries `target` through when it hits it at the game
	 * time `hitTime`, cast from `from` toward `toward`: a knockback, a pull. `undefined` for an
	 * ability that moves nothing, which is most. A caster tells the unit with `ExpectMotion` while
	 * its cast is on the way, so what lands after the push is aimed where the push leaves the
	 * target.
	 * @example
	 * const push = blast.MotionOn(enemy, hero.Position, enemy.Position, landsAt)
	 * if (push !== undefined) {
	 * 	enemy.ExpectMotion(push)
	 * }
	 */
	public MotionOn(_target: Unit, _from: Vector3, _toward: Vector3, _landsAt: number): Nullable<Motion>
	/**
	 * The points a cast of it takes its caster to, whichever of them it is aimed nearest - Reality's
	 * illusions; none for one that goes where it is aimed (`MotionOn`).
	 * @example
	 * const spots = reality.MovesTo(spectre) ?? []
	 */
	public MovesTo(_caster: Unit): Nullable<readonly Vector3[]>
	/**
	 * The percent more move speed a cast of it gives `caster` - a buff to walk out on: Guardian
	 * Sprint, Phase Boots, Scorched Earth (`Unit.MoveSpeedWith`, `Unit.Escape`); none for most.
	 * @example
	 * const faster = hero.MoveSpeedWith(boots.SpeedsUp(hero))
	 */
	public SpeedsUp(_caster: Unit): number
	/**
	 * Whether a cast of it takes its caster onto a tree, perched on it, not on the ground - Tree
	 * Dance (`TreeToward`). None for most.
	 */
	public get MovesOntoTrees(): boolean
	/**
	 * The tree a cast of it toward `toward` takes its caster onto - a leap cast at a tree, Tree
	 * Dance: the one it may be cast at nearest `toward`; none for any other, or with none.
	 * @example
	 * const tree = dance.TreeToward(escape.Position)
	 */
	public TreeToward(_toward: Vector3): Nullable<Tree | TempTree>
	/**
	 * The units a cast of it at one of them takes its caster to - a blink cast at a unit, Phantom
	 * Strike, Blink Strike: those it may be cast at within its reach (`Unit.TargetsInReach`); none
	 * for one cast at a point or at nothing, or moving the caster along its facing.
	 * @example
	 * const by = strike.MovesOnto(hero)?.[0]
	 */
	public MovesOnto(caster: Unit): Nullable<readonly Unit[]>
	/**
	 * The motion a cast from `from` landing at `landsAt` gives `target` facing the way `way` then -
	 * a direction in the plane, of length 1: for one moving it along its facing
	 * (`MovesAlongFacing`), as `MotionOn` with the target turned that way first. None for any other.
	 * @example
	 * const push = staff.MotionAlong(hero, hero.Position, new Vector3(1, 0, 0), landsAt)
	 */
	public MotionAlong(_target: Unit, _from: Vector3, _way: Vector3, _landsAt: number): Nullable<Motion>
	/**
	 * Its owner's rush from `from` toward `toward` at `Speed`, starting at `landsAt`: as far as its
	 * cast range that way at most and `least` at least - Time Walk, Waveform, Skewer; landed at
	 * once for a speed past any travel - Astral Step. None for another unit than its owner, or with
	 * no speed.
	 */
	protected RushOf(target: Unit, from: Vector3, toward: Vector3, landsAt: number, least?: number): Nullable<Motion>
	/**
	 * How a cast at `target` issued now plays out, stretch by stretch; see `CastTimeline`. The
	 * approach walks the grid to the nearest point in cast range of where a unit target will be
	 * as the walk ends - its walk, or the push, leap or lift the game shows it in - so a target
	 * carried away is met where it is left rather than chased; the turn follows the caster's turn
	 * data, and a unit target is aimed at where it will be when the effect lands. A cast at a point
	 * at a unit in a teleport catches it at the start or lands at the end as it arrives
	 * (`WaitTime`). A cast that goes as a key - at nothing, or at the caster itself - waits for no
	 * cursor glide of the humanizer's (`DispatchTime`).
	 * @example
	 * const timeline = ability.GetCastTimeline(enemy)
	 * const landsAt = GameState.RawGameTime + timeline.HitTime
	 */
	public GetCastTimeline(target: Unit | Vector3, options?: ICastTimelineOptions, out?: CastTimeline): CastTimeline
	/**
	 * Whether the ability can be cast at the game time `time`: levelled and usable, off cooldown
	 * and with a charge by then, enough mana by the owner's regeneration, and no stun, hex,
	 * silence or root known to last past it that the ability does not ignore.
	 */
	public CanBeCastedAt(time: number): boolean
	/**
	 * The soonest game time a cast of it by its owner could land on `target` from now: its owner
	 * seen and the ability castable now (`CanBeCastedAt`), the owner walking into range, turning to
	 * the target, its cast point, activation and flight (`GetCastTimeline`), the effect taking the
	 * target then (`CanHitAt`); `Infinity` when it could not. What a guard weighs ahead of a cast it
	 * cannot see coming - no cast point, no sign before it lands.
	 * @example
	 * if (hex.SoonestLandingOn(hero) <= hero.ResponseTime(bkb)) {
	 * 	// once the hex is cast, the bar would be up too late
	 * }
	 */
	public SoonestLandingOn(target: Unit): number
	/**
	 * Whether the ability may be aimed at `unit` right now: its target team, type and flags,
	 * and the unit's immunities. The game refuses an order at a unit it cannot target - one
	 * untargetable, or invulnerable (in a Tornado, a cyclone) unless the ability's flags let it
	 * target such - whenever the effect would land. Whether the effect still affects the unit
	 * when it lands is `CanHitAt`. A custom team or type - the game's code filters - lets either
	 * team and heroes and creeps by, never the caster itself: Phantom Strike, Nether Swap, Infest
	 * go at another unit. A class whose filter differs says so - its `TargetTeamOf` and
	 * `TargetTypeOf`, as Eul's Scepter's, or its own `CanTarget`.
	 */
	public CanTarget(unit: Unit): boolean
	/**
	 * Whether the effect landing at the game time `time` affects `target`: alive, not
	 * invulnerable or immune by then, not an ancient creep for one that does not affect them
	 * (`DOTA_UNIT_TARGET_FLAG_NOT_ANCIENTS`), and not behind a spell block it would trigger.
	 */
	public CanHitAt(target: Unit, time: number): boolean
	/**
	 * Whether the effect landing at the game time `time` gets to `target` at all: one it may go at
	 * then (`TargetsAt`) not behind a spell block it would trigger. An immunity to debuffs does not
	 * keep it off: it lands and deals its damage, only its states do not (`StatesOnAt`).
	 */
	public ReachesAt(target: Unit, time: number): boolean
	/**
	 * How far past its cast range a unit cast at may get while the cast point runs before the cast
	 * breaks off, the caster then walking after it: `AbilityCastRangeBuffer` in the data, 250 for
	 * most (Assassinate 600, Nether Strike 500).
	 */
	public get CastRangeBuffer(): number
	/**
	 * The farthest `target`'s middle may get from the caster's while a cast at it is in its cast
	 * point: cast range to its edge and `CastRangeBuffer` past it. Farther, the cast breaks off.
	 */
	public BreakRangeOf(target: IPredictionTarget): number
	/**
	 * Whether the effect goes through invulnerability: a unit in a cyclone or a split still takes
	 * it. By the data, its target flags (`DOTA_UNIT_TARGET_FLAG_INVULNERABLE`); a class whose area
	 * the game lays on invulnerable units all the same says so.
	 */
	public get HitsInvulnerable(): boolean
	/**
	 * Whether a cast of it may be aimed at `target` by its side, as the data's target team says: an
	 * enemy of its caster for one at enemies, an ally for one at allies - the caster itself for one
	 * that names itself - either for one at both or a team of the game's code; an enemy for one that
	 * names none. A Finger of Death goes at no ally of Lion's standing on the line he looks along.
	 */
	public MayAimAt(target: IPredictionTarget): boolean
	/**
	 * Whether the effect at the game time `time` may go at `target`, a spell block or not: alive,
	 * not invulnerable then unless it goes through that (`HitsInvulnerable`), not spell immune for
	 * one that does not pierce it, not an ancient creep for one that passes them.
	 */
	public TargetsAt(target: Unit, time: number): boolean
	/**
	 * The unit states the effect landing at the game time `time` puts on `target`: its
	 * `HitUnitState`, none on a unit immune to its debuffs then that it does not pierce - the stun
	 * of Earth Spike on a hero under Black King Bar.
	 */
	public StatesOnAt(target: Unit, time: number): bigint
	/** The prediction's timeline: `GetCastTimeline` at `target` into `out`. */
	public Timeline(target: IPredictionTarget | Vector3, out: CastTimeline, options?: ICastTimelineOptions): CastTimeline
	/** Seconds the effect needs from `from` to `to`: the projectile flight rounded up to a tick, zero without one. */
	public GetTravelTime(from: Vector3, to: Vector3): number
	/** Where the effect really lands for the placement in `output`; the target's predicted position by default. */
	public GetHitPosition(output: PredictionOutput): Vector3
	/**
	 * The shape the placement in `output` covers over time, from the profile: a line as a
	 * capsule with a running front, a cone as a trapezoid that widens as its front runs, a
	 * circle and an area as discs, a vector cast as a rectangle from the cast point along its
	 * direction. A cone with no speed of its own appears whole.
	 */
	public GetShapeTimeline(input: PredictionInput, output: PredictionOutput): IShapeTimeline
	/** Changes the prediction's input before the core runs; nothing by default. */
	public ModifyInput(_input: PredictionInput): void
	/** Changes the prediction's output after the core ran; nothing by default. */
	public ModifyOutput(_output: PredictionOutput): void
	/**
	 * Predicts one cast. The mode follows the ability's profile of this moment: a unit target
	 * gets its timeline and hit check, a point cast with a shape gets the shape placed on where
	 * the target will be, an area around the caster asks who will be inside. Without a target
	 * the best placement over every unit in reach is found.
	 * @example
	 * const output = hook.Predict(enemy)
	 * if (output.HitChance >= EHitChance.High) {
	 * 	hook.UseAbility(output.CastPosition)
	 * }
	 */
	public Predict(target?: Unit | Vector3, options?: IPredictOptions, out?: PredictionOutput): PredictionOutput
	/**
	 * Predicts a cast at `position` - the point the player clicks, not one the prediction picks -
	 * against `target` (`CastPredictor.PredictAt`): the shape a cast there covers as it lands, what
	 * stands in its way and how likely `target` is inside; `CastPosition` is `position` - or where
	 * the ability moves its cast off a click (`ModifyOutput`). An ability that places its cast its
	 * own way (`PredictionStrategy`) answers no hit.
	 * @example
	 * const cursor = InputManager.CursorOnWorld,
	 * 	output = sunStrike.PredictAt(enemy, cursor)
	 * if (output.HitChance >= EHitChance.Medium) {
	 * 	sunStrike.UseAbility(cursor)
	 * }
	 */
	public PredictAt(target: Unit, position: Vector3, options?: IPredictOptions, out?: PredictionOutput): PredictionOutput
	/**
	 * Predicts and casts when the ability can be cast now and the prediction is good enough:
	 * `HitChance` at least `MinHitChance` and the shape covering at least `MinTargets` units.
	 * Returns the prediction when the order went out, `undefined` when it did not. Called again
	 * while the cast is still before its cast point, it sends no new order: it predicts afresh
	 * and takes the cast back with a stop order when the target has left what the cast covers,
	 * so a caller that calls it every tick guards its own casts.
	 * @example
	 * if (hook.CastPredicted(enemy, { MinHitChance: EHitChance.High }) !== undefined) {
	 * 	return
	 * }
	 */
	public CastPredicted(target?: Unit | Vector3, options?: IPredictOptions): Nullable<PredictionOutput>
	/**
	 * Whether `placed` - this ability's prediction at `target`, cast by it - still catches the
	 * target with the effect landing at the game time `hitAt`: the effect can hit it then, where
	 * it is predicted then is inside what the cast covers - as the effect activates, for one that
	 * homes on what it took (`HomingTime`) - and nothing the cast stops at comes first along its
	 * own line - an aim taken aside of a blocked line is judged on its own. Asked
	 * each tick of the cast point, it tells a cast that would now miss, to be taken back
	 * (`CastPredicted` does). `out` takes a fresh prediction, which reads the world anew.
	 * @example
	 * if (hook.IsInAbilityPhase && !hook.StillCatches(enemy, placed, hitAt)) {
	 * 	owner.OrderStop()
	 * }
	 */
	public StillCatches(target: Unit, placed: PredictionOutput, hitAt: number, options?: IPredictOptions, out?: PredictionOutput): boolean
	/**
	 * The ability's damage at `target` before any amplification or reduction; a damage that grows
	 * or shrinks with the target's health reads it as `context` has it as the blow lands
	 * (`HealthOf`).
	 */
	public GetRawDamage(_target: Unit, _context?: IDamageContext): number
	/**
	 * Health `target` has as a blow of it lands: `context`'s (`IDamageContext.RemainingHealth`) -
	 * the blows of a kill before it taken off - else as it stands.
	 */
	public HealthOf(target: Unit, context?: IDamageContext): number
	/**
	 * Damage the ability deals to `target` after its armor, resistances, amplification and
	 * blocks. Inside a sequence, `context` says what of the shields and barriers the blows before
	 * left (`IDamageContext.Shields`), or that they are spent. What lands at once: the damage over
	 * time a cast of it lays comes on top of it (`DamageUntil`).
	 */
	public GetDamage(target: Unit, context?: IDamageContext): number
	/**
	 * Damage `raw` of the ability's own type deals `target` as one blow of it - one tick of its
	 * damage over time, one hit - after its armor, resistances, amplification and blocks, as
	 * `GetDamage` takes them; `breaks` for a blow that breaks the unit first
	 * (`IModifierParams.Breaks`). What is left of a blow is rounded up, but a pool's (`context`'s
	 * `ShieldLedger.Pooled`): the game takes one off a blow's whole part.
	 * Read for the time the blow lands (`context`'s `Time`): an amplification, a cut of resistance
	 * gone by then counts no more (`UnitModifierManager.ReadAt`) - Ethereal Blade's ending before
	 * a burn's late ticks - and at the health the target has then (`RemainingHealth`): a magic
	 * resistance running with it counts as it stands at that health (`Unit.MagicTakenAt`) -
	 * Berserker's Blood's, higher the lower Huskar is.
	 */
	public DamageOf(raw: number, target: Unit, context?: IDamageContext, type?: DAMAGE_TYPES, breaks?: boolean): number
	/**
	 * Fills `out` with the ticks of the damage over time a cast of it lays on an enemy at `level`;
	 * whether it lays any. None for most.
	 */
	public DamageOverTime(_out: DamageTicks, _level: number): boolean
	/**
	 * What a cast of it landing on `target` at game time `landsAt` - now by default - sends back at
	 * its owner off what the target wears then (`Modifier.DamageReturnedTo`): Blade Mail's Damage
	 * Return, which acts on the hits the target takes (`MODIFIER_EVENT_ON_TAKEDAMAGE`), Dispersion,
	 * which cuts them (`MODIFIER_PROPERTY_INCOMING_DAMAGE_PERCENTAGE`) - of its blow before the
	 * target's reductions, the owner's amplification in it. The ticks after it send back their
	 * share too - not counted here.
	 * @example
	 * const safe = dagon.ReturnedFrom(enemy) < hero.HP
	 */
	public ReturnedFrom(target: Unit, landsAt?: number): number
	/**
	 * Damage casting it deals its owner as the cast begins, through the owner's resistances: Nether
	 * Ward's for the mana it spends (`Modifier.SpentManaDamage`) - one that kills the owner loses
	 * the cast; none for an item, which the ward lets be.
	 * @example
	 * const safe = finger.SpentManaDamage() < hero.HP
	 */
	public SpentManaDamage(): number
	/**
	 * Whether a cast of it at an enemy sets off its owner's Empower Spell - Khanda's, Phylactery's
	 * (`Modifier.SpellBonusAt`): a spell, not an item, at the unit, one a Linken's Sphere would
	 * take (`TriggersSpellBlock`) - the sphere taking it, nothing is set off.
	 */
	public get EmpowersSpell(): boolean
	/**
	 * The blow its owner's Empower Spell adds to a cast of it landing on `target` at game time
	 * `landsAt` - now by default (`EmpowersSpell`): the item's bonus as magical damage through the
	 * target's resistances and its shields `shields` left then, when given, taken off them; none
	 * once the shared cooldown runs then - one cast in it takes the bonus, the first to land.
	 * @example
	 * const kills = finger.GetDamage(enemy) + finger.EmpowerOf(enemy) >= enemy.HP
	 */
	public EmpowerOf(target: Unit, landsAt?: number, shields?: ShieldLedger): number
	/**
	 * Whether a cast of it at `target` landing at game time `landsAt` - now by default - is sent back
	 * at its owner by the target's Lotus Orb (`Unit.LotusAt`): one at an enemy that a spell block
	 * meets (`TriggersSpellBlock`). The spell takes the target all the same (`CanHitAt`).
	 * @example
	 * const waits = hex.ReflectedAt(enemy, GameState.RawGameTime + hex.CastPoint)
	 */
	public ReflectedAt(target: Unit, landsAt?: number): boolean
	/**
	 * What a cast of it at `target` landing at game time `landsAt` - now by default - deals its owner
	 * as the target's Lotus Orb sends it back (`ReflectedAt`): the spell cast at the owner, its
	 * damage through the owner's resistances; none for a cast not at a unit, or no shell then.
	 * @example
	 * const safe = finger.ReflectedFrom(enemy) < hero.HP
	 */
	public ReflectedFrom(target: Unit, landsAt?: number): number
	/**
	 * The damage a cast of it landing on `target` at game time `landsAt` - now by default - deals it
	 * within `seconds` after, at the roll `strength`, the lowest by default: its blow (`GetDamage`)
	 * and the ticks of the damage over time it lays due by then (`DamageOverTime`) - at the lowest
	 * roll those that surely land (`DamageTicks`), over a time the target's status resistance cuts
	 * for one it shortens (`DamageTicks.StatusResisted`): an area's while the unit cannot walk out after the
	 * landing (`Unit.ImmobileUntil`) and their linger after, a hero's it may dispel while it can
	 * neither cast nor use an item, this cast's own disable counted (`DamageTicks.KeptUntil`).
	 * The blow, the ticks and those its hits add go through the target's shields in turn, each
	 * finding what the ones before left: of `shields` when given - the blows of a kill before it
	 * spent them - else as they stand (`ShieldLedger`). The blow reads the target's health as
	 * `health` - what the blows before it left - by default as it stands (`HealthOf`). A cast at
	 * a point lands `from` it: a blow that falls off with the distance from the point reads it
	 * (`IDamageContext.From`) - Proximity Mines' - left out, the blow is reckoned on the target.
	 * @example
	 * if (frostbite.DamageUntil(enemy, 2) >= enemy.HP) {
	 * 	hero.CastTarget(frostbite, enemy)
	 * }
	 */
	public DamageUntil(target: Unit, seconds: number, landsAt?: number, strength?: ATTACK_DAMAGE_STRENGTH, shields?: ShieldLedger, health?: number, from?: Vector3): number
	/**
	 * Game time the last tick of the damage over time a cast of it landing on `target` at game time
	 * `landsAt` - now by default - lays is due, of those `DamageUntil` counts at the roll
	 * `strength`, the lowest by default; the one that finishes the target when one does. `landsAt`
	 * when it lays none: until when its damage is on its way.
	 */
	public DamageEndsAt(target: Unit, landsAt?: number, strength?: ATTACK_DAMAGE_STRENGTH): number
	/**
	 * Damage every tick of its damage over time adds at `target` beside its own, before what the
	 * target takes of it: none by default - Sticky Napalm's stacks on the target for Batrider's, an
	 * arrow's share of the attack for Clinkz's Burning Barrage.
	 */
	public TickBonus(_target: Unit): number
	/**
	 * Chance the tick `tick` - from the first - of its damage over time landing at random
	 * (`DamageTicks.Random`) strikes `target` where it stands: surely by default - Freezing Field's
	 * explosions fall at random round the caster.
	 */
	public TickChance(_target: Unit, _tick: number): number
	/**
	 * Seconds after a cast of it lands that its damage over time reaches `target`: at once by
	 * default - Icarus Dive's arc gets to a unit on its way.
	 */
	public ReachesAfter(_target: Unit): number
	/**
	 * Fills `out` with the second rule of the ticks a cast of it lays at `level`, beside the first
	 * (`DamageTicks.Beside`): none by default - Firestorm's burn beside its waves.
	 */
	protected BesideOverTime(_out: DamageTicks, _level: number): boolean
	public UseAbility(target?: Vector3 | Entity, checkAutoCast?: boolean, checkToggled?: boolean, queue?: boolean, showEffects?: boolean): Nullable<ExecuteOrder>
	public UpgradeAbility(): ExecuteOrder | undefined
	public PingAbility(): ExecuteOrder | undefined
	public GetSpecialValue(specialName: string, level?: number, optional?: ISpecialValueOptions, checkShard?: boolean, checkScepter?: boolean): number
	public IsManaEnough(bonusMana?: number): boolean
	public HasBehavior(flag: DOTA_ABILITY_BEHAVIOR): boolean
	public HasBonusStats(flag: EDOTASpecialBonusStats): boolean
	public HasTargetFlags(flag: DOTA_UNIT_TARGET_FLAGS): boolean
	public HasTargetTeam(flag: DOTA_UNIT_TARGET_TEAM): boolean
	public HasTargetType(flag: DOTA_UNIT_TARGET_TYPE): boolean
	public CanHit(target: Unit | Vector3): boolean
	public CanBeCasted(bonusMana?: number): boolean
	public IsDoubleTap(_order: ExecuteOrder): boolean
	/**
	 * The point a double tap of it is cast at, with no cursor - Blink Dagger's toward the team's
	 * fountain (`item_blink.DoubleTapPoint`); none for most.
	 * @example
	 * const home = blink.DoubleTapPoint
	 */
	public get DoubleTapPoint(): Nullable<Vector3>
	/**
	 * Whether a cast of it at `point` goes as its double tap (`DoubleTapPoint`): the order needs no
	 * cursor, the humanizer sends it at once. Never for most.
	 */
	public IsDoubleTapAt(_point: Vector3): boolean
	/**
	 * Whether the server takes a cast of it at `position`: a Proximity Mine goes nowhere near
	 * another of its side's, nor off walkable ground (`techies_land_mines.CanPlaceAt`). The
	 * humanizer moves a script's cast off its point (`ExecuteOrder.CastSpreadMin`) only where this
	 * still holds. Anywhere for most.
	 * @example
	 * if (ability.CanPlaceAt(point)) {
	 * 	caster.CastPosition(ability, point)
	 * }
	 */
	public CanPlaceAt(_position: Vector3): boolean
	/**
	 * Whether a script's cast of it at a point lands on that very point: the humanizer does not move
	 * it off (`ExecuteOrder.CastSpreadMin`) - the point itself decides what the cast takes, a few
	 * units off it another outcome (`skywrath_mage_mystic_flare`). False for most.
	 * @example
	 * const exact = flare.KeepsCastPoint
	 */
	public get KeepsCastPoint(): boolean
	/**
	 * Whether the effect it lays on its target makes the target take more of the damage `ability`
	 * deals, while it lasts: cast first, the other lands harder - Ethereal Blade, Decrepify or
	 * Ancient Seal the magical damage, Veil of Discord or Track any. None for most.
	 * @example
	 * if (veil.Amplifies(meteor)) {
	 * 	veil.UseAbility(target.Position)
	 * }
	 */
	public Amplifies(_ability: Ability): boolean
	/**
	 * The factor its cast, landed on `target` before it, multiplies the damage of `ability` at
	 * `target` by (`Amplifies`): Ethereal Blade's or Decrepify's cut of magic resistance, Ancient
	 * Seal's, Veil of Discord's spell damage taken, Track's damage taken - beyond what is on `target`
	 * now; 1 for one that amplifies nothing.
	 * @example
	 * const together =
	 * 	ethereal.GetDamage(enemy) + dagon.GetDamage(enemy) * ethereal.AmplificationOf(dagon, enemy)
	 */
	public AmplificationOf(_ability: Ability, _target: Unit): number
	/**
	 * The factor the magical damage at `target` grows by once an ethereal form cutting its magic
	 * resistance by `bonus` percent - negative, `MAGICAL_RESISTANCE_DECREPIFY_UNIQUE`, only the
	 * strongest such cut on a unit counting - lands on it, over the strongest on it now: Ethereal
	 * Blade's blast, Decrepify, Spectral Slug. 1 for an ally of the owner or a unit spell immune.
	 */
	protected EtherealAmplification(target: Unit, bonus: number): number
	/**
	 * The factor the magical damage at `target` grows by once a debuff cutting its magic resistance
	 * by `cut` percent - negative, `MAGICAL_RESISTANCE_BONUS`, each such debuff multiplying what the
	 * resistance leaves - lands on it: Ancient Seal, Ice Vortex. 1 for an ally of the owner, a unit
	 * spell immune, or one wearing `modifier` already - the debuff renews, it does not stack.
	 */
	protected ResistCutAmplification(target: Unit, cut: number, modifier: string): number
	/**
	 * The factor the damage of `ability` at `target` grows by once a debuff adding `percent` to the
	 * damage the target takes (`INCOMING_DAMAGE_PERCENTAGE`, the debuffs on a unit summed) lands on
	 * it: Track, Veil of Discord, Hunter's Mark. 1 for an ally of the owner, a unit spell immune, or
	 * one wearing `modifier` already - the debuff renews, it does not stack.
	 */
	protected IncomingAmplification(ability: Ability, target: Unit, percent: number, modifier: string): number
	/**
	 * What its cast takes from its own caster while what it lays on it lasts (`MaxDuration`):
	 * Mask of Madness's Berserk silences its bearer - its spells, not its items. None for most.
	 * @example
	 * if ((mask.SelfLost & EUnitCapability.Cast) !== 0) {
	 * 	// cast the spells first
	 * }
	 */
	public get SelfLost(): EUnitCapability
	/**
	 * Whether a hit turns its target ethereal while it lasts - no attack hits it, it lands none: the
	 * states it lays on what it hits (`HitUnitState`) make it immune to attacks - Ghost Scepter,
	 * Decrepify - or an Ethereal Blade's blast; not the caster's own - Phase Shift. None for most.
	 * @example
	 * const spoilsDuel = enemy.IsUnitStateFlagSet(modifierstate.MODIFIER_STATE_TAUNTED) && item.MakesEthereal
	 */
	public get MakesEthereal(): boolean
	/**
	 * Whether the effect it lays makes its target take more of some damage (`Amplifies`): an
	 * Ethereal Blade, a Veil of Discord - what goes ahead of the nukes it serves. None for most.
	 * @example
	 * const first = hero.Items.filter(item => item.IsAmplifier)
	 */
	public get IsAmplifier(): boolean
	/**
	 * Whether the effect it lays on a unit gathers the damage the unit takes while it lasts, to
	 * deal a share of it back as it ends - Orchid Malevolence's Soul Burn, Bloodthorn's Soul Rend:
	 * the unit taken out of reach meanwhile, into a cyclone or a tornado, takes none to gather.
	 * None for most.
	 * @example
	 * if (bloodthorn.GathersDamage) {
	 * 	// lift the target only once the silence ends
	 * }
	 */
	public get GathersDamage(): boolean
	/**
	 * Whether its cast strips the target's buffs as it lands - Nullifier's dispel: a cast that
	 * takes off a Ghost Scepter, a Glimmer Cape or an Eul's of the target's goes at once, not
	 * chained after a control of ours - the buffs are now (20 October 2026). None for most.
	 * @example
	 * if (nullifier.DispelsTarget) {
	 * 	// cast it as soon as it lands, whatever holds the target
	 * }
	 */
	public get DispelsTarget(): boolean
	/**
	 * Whether the buff it lays on its caster serves a fight the caster starts, cast as it begins:
	 * a debuff immunity, attack speed, a static shield, an invisibility to walk in under, damage
	 * turned back - not a heal, a restore or a save. None for most.
	 * @example
	 * const opening = hero.Items.filter(item => item.IsCombatBuff)
	 */
	public get IsCombatBuff(): boolean
	/**
	 * The attack range the buff it lays on its caster adds while it lasts - Elder Dragon Form's
	 * dragon attacks from range: how much farther the caster reaches once it is cast. None for most.
	 * @example
	 * const fightsFrom = hero.GetAttackRange(enemy, form.AttackRangeBonus)
	 */
	public get AttackRangeBonus(): number
	/**
	 * How many stacks the effect it lays on a unit builds up to: each cast adds one and renews the
	 * rest - Viscous Nasal Goo - so a cast while the effect lasts is not wasted. None for most,
	 * whose effect cast again only lasts longer.
	 * @example
	 * const castAgain = goo.MaxStacks > 0 || enemy.GetBuffByName(name) === undefined
	 */
	public get MaxStacks(): number
	/**
	 * Whether the effect it lays on a unit and the one `other` lays are one: on one unit they do
	 * not stack, the later adding nothing while the other lasts. Its own kind's always; an
	 * upgraded item and the one it is built from where the class says so - Bloodthorn and Orchid
	 * Malevolence.
	 * @example
	 * if (bloodthorn.SharesEffectWith(orchid)) {
	 * 	// wait for Orchid's silence to end before Bloodthorn's
	 * }
	 */
	public SharesEffectWith(other: Ability): boolean
	/**
	 * Whether it is an upgrade of `other` that carries its effect on in its place, the two not
	 * stacking on one unit. None for most.
	 */
	protected CarriesOn(_other: Ability): boolean
	public IsNuke(): this is INuke
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	public IsDebuff(): this is IDebuff
	/**
	 * Whether it moves its caster where it is cast - a blink, a dash, a teleport to a unit - and
	 * that is what it is for: where it sets the caster down is `MotionOn`. None for most.
	 * @example
	 * const lands = blink.IsBlink() ? blink.MotionOn(hero, hero.Position, goal, landsAt)?.EndPosition : undefined
	 */
	public IsBlink(): boolean
	/**
	 * Whether the game shows, by a sign of the ability's own, that a cast of it ordered at the game
	 * time `orderedAt` took - for one whose cooldown, charges, channel and modifiers show nothing:
	 * Ethereal Jaunt, its orb gone. None for most.
	 * @example
	 * const took = !jaunt.IsCooldownReady || jaunt.TookSince(orderedAt)
	 */
	public TookSince(_orderedAt: number): boolean
	/**
	 * Whether what it is for is the kill: it is worth casting only when its damage (`GetDamage`)
	 * takes the unit's last health - Culling Blade. None for most.
	 * @example
	 * const goes = !blade.IsFinisher || blade.GetDamage(enemy) >= enemy.HP
	 */
	public get IsFinisher(): boolean
	/**
	 * How far ahead of the unit it is cast at - along that unit's facing - its effect lands:
	 * Firesnap Cookie hops its unit forward and bursts where it lands. None for most, which land
	 * on the unit.
	 * @example
	 * const landing = hero.InFront(cookie.LandsAhead)
	 */
	public get LandsAhead(): number
	public IsHealthCost(): this is IHealthCost
	public IsManaRestore(): this is IManaRestore<Unit>
	public IsHealthRestore(): this is IHealthRestore<Unit>
	public GetHealthCost(baseManaCost: number): number
	public GetManaCostModifier(baseManaCost: number): number
	protected GetCastPointModifier(baseCastPoint: number): number
	protected GetManaCostModifierSpellSteal(owner: Unit): number
	protected GetSpellAmpModifierSpellSteal(owner?: Nullable<Unit>, target?: Unit): number
	protected IsAbsoluteNoDamage(source: Unit, target: Unit, damageType: DAMAGE_TYPES): boolean
}
