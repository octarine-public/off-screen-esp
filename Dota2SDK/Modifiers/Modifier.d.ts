// AUTO-GENERATED - do not edit.
type ModifierHandlerValue = (modifierParams?: IModifierParams) => [number, boolean]
type ModifierMapFieldHandler = Map<EModifierfunction, ModifierHandlerValue>
/**
 * A chance proc a swing may carry (`Modifier.SwingProc`): its chance, 0 to 1; the multiplier its
 * crit puts on the attack, 1 for none; the damage it adds on the target, its resistances taken.
 */
interface ISwingProc {
	Chance: number
	Multiplier: number
	Damage: number
}
declare class Modifier {
	public kv: IModifier
	/**
	 * The modifiers on the map that heal the units around their parents (`HealOf`), kept as they
	 * come and go: Nature's Attendants.
	 */
	public static readonly HealersAround: Modifier[]
	/**
	 * The modifiers on the map whose parents keep damaging the units around them (`DamageAround`),
	 * kept as they come and go: a Death Ward, each Serpent Ward, March of the Machines.
	 */
	public static readonly DamagersAround: Modifier[]
	public static readonly DebuffHeal: string[]
	public static readonly DebuffTrueSight: Set<string>
	public static readonly DebuffVisibleForEnemies: Set<string>
	public static HasTrueSightBuff(buffs: Modifier[]): boolean
	public static HasVisibleForEnemies(buffs: Modifier[]): boolean
	public static HasScepterBuff(buffs: Modifier[]): boolean
	public static HasShardBuff(buffs: Modifier[]): boolean
	public static CanBeHealed(unit: Unit): boolean
	public static CanBeHealed(buffs: Modifier[]): boolean
	public readonly Name: string
	public readonly IsAura: boolean
	public readonly Index: number
	public readonly SerialNumber: number
	public readonly DDAbilityName: string
	public readonly CreationTick: number
	public NetworkArmor: number
	public NetworkDamage: number
	public NetworkFadeTime: number
	public NetworkBonusMana: number
	public NetworkBonusHealth: number
	public NetworkAttackSpeed: number
	public NetworkChannelTime: number
	public NetworkMovementSpeed: number
	public NetworkBonusAllStats: number
	public NetworkSubtle: boolean
	public NetworkIsActive: boolean
	public NetworkAuraWithInRange: boolean
	public NetworkActivity: number
	public CreationTime: number
	public CustomEntity: Nullable<Unit>
	public InternalStackCount: number
	public InternalDuration: number
	public AbilityLevel: number
	public IsGhost: boolean
	public IsHidden: boolean
	public IsGlobally: boolean
	public Parent: Nullable<Unit>
	public Ability: Nullable<Ability>
	public Caster: Nullable<Unit>
	/** The displacement the modifier carries its bearer through while it lasts, made by `CreateMotion` when the modifier appears. */
	public Motion: Nullable<Motion>
	public AuraOwner: Nullable<Unit>
	public IsValid: boolean
	public HasVisualShield: boolean
	public ShouldDoFlyHeightVisual: boolean
	public HasShard: boolean
	public HasScepter: boolean
	public get StackCount(): number
	public get ForceVisible(): boolean
	public get Duration(): number
	/**
	 * How far the modifier has faded its parent into invisibility, 0 to 1, by the fade time the
	 * network gives it: none for one whose fade time holds a value of its own
	 * (`FadeTimeIsValue`). Read only of the modifiers declaring
	 * `MODIFIER_PROPERTY_INVISIBILITY_LEVEL` (`Unit.InvisibilityLevel`): those fading their parent
	 * (`FadesParent`), and a class reading a level of its own declares it.
	 */
	public get InvisibilityLevel(): number
	/**
	 * Whether the network gives the modifier a fade time that is no value of its own
	 * (`FadeTimeIsValue`): it fades its parent into invisibility, declared so as the game
	 * declares it - `MODIFIER_PROPERTY_INVISIBILITY_LEVEL` - with any class of its own or none.
	 */
	public get FadesParent(): boolean
	public get DeltaZ(): number
	public get DieTime(): number
	/**
	 * Seconds the modifier has been on by the game time its unit's values are read for
	 * (`UnitModifierManager.ReadTime`): now, or a later moment a prediction reads them at.
	 */
	public get ElapsedTime(): number
	/**
	 * Seconds the modifier has left at the game time its unit's values are read for
	 * (`UnitModifierManager.ReadTime`): a slow fading with it - Viper Strike's - reads as it will
	 * be then.
	 */
	public get RemainingTime(): number
	/**
	 * Seconds the modifier still has at the game time `time`: zero once it has expired,
	 * `Infinity` for one without a duration.
	 */
	public RemainingAt(time: number): number
	public get DDModifierID(): Nullable<number>
	public get vStart(): Vector4
	public get vEnd(): Vector4
	/** The ability that put the modifier on, as the game names it; empty for none known. */
	public get AbilityName(): string
	public get IsBreakable(): boolean
	public get IsDispellable(): boolean
	/**
	 * Whether a dispel takes it off, as its class in the game's server answers - written into the
	 * classes by dota2-aio tools/server/dispels.py, not by hand: a basic dispel when it is no stun
	 * (`IsStunDebuff`), a strong one always. The game's base: when it is not permanent - no
	 * `MODIFIER_ATTRIBUTE_PERMANENT`, no aura - which the classes say where the server's class
	 * tells; for the rest, when it does not last for ever.
	 */
	public get IsPurgable(): boolean
	/**
	 * Whether a strong dispel takes it off though it is not purgable (`IsPurgable`), as its class in
	 * the game's server answers: a hex. The base: no.
	 */
	public get IsPurgeException(): boolean
	/**
	 * Whether it is a stun, which a basic dispel leaves though it is purgable (`IsPurgable`), as its
	 * class in the game's server answers. The base: no.
	 */
	public get IsStunDebuff(): boolean
	/**
	 * Whether a dispel of strength `dispel` cast on its parent takes it off: one an enemy of the
	 * parent laid, as the game's purge does - a basic dispel a purgable one that is no stun, a
	 * strong one a purgable one or an exception (`IsPurgable`, `IsStunDebuff`, `IsPurgeException`).
	 * @example
	 * const freed = hero.Buffs.filter(buff => buff.DispelledBy(manta.DispelsCaster))
	 */
	public DispelledBy(dispel: SPELL_DISPELLABLE_TYPES): boolean
	public get CanHitSpellImmuneEnemy(): boolean
	public Update(force?: boolean): void
	public GetTexturePath(): string
	public IsEnemy(ent?: Entity): boolean
	/**
	 * Whether what keeps its bearer alive (`PreventsDeath`) is a reincarnation: the death comes,
	 * and the bearer stands up again - Wraith King's. Not by default.
	 */
	public get Reincarnates(): boolean
	/**
	 * Whether the modifier keeps its bearer alive through `damageType` right now, the way
	 * Shallow Grave, Borrowed Time or a ready Reincarnation do: by default while the minimum
	 * health it declares is above none (`MIN_HEALTH`) - Fowl Play ready, Wraith form.
	 */
	public PreventsDeath(_damageType: DAMAGE_TYPES): boolean
	/**
	 * Whether it keeps its bearer alive through `damageType` landing at game time `time`: as
	 * `PreventsDeath` says while it still stands then; one whose end decides the death itself - a
	 * wraith form, Supernova's egg - says so for every time while it is on.
	 */
	public PreventsDeathAt(time: number, damageType: DAMAGE_TYPES): boolean
	/**
	 * The displacement the modifier carries its bearer through, made once when the modifier
	 * appears: a push, a pull or a dash with its start, end and timing; `undefined` for one that
	 * moves nothing. The movement prediction of the bearer follows it while it lasts.
	 */
	public CreateMotion(): Nullable<Motion>
	/**
	 * The field the modifier changes projectiles' speed by around its bearer, made once when it
	 * appears - Faceless Void's Distortion Field, his Time Zone; `undefined` for one that changes
	 * none. The projectile prediction counts it while it lasts.
	 */
	public CreateProjectileSpeedField(): Nullable<ProjectileSpeedField>
	/** Centre a leash holds its bearer around, such as Slark or the arena; `undefined` for a modifier that is no leash. */
	public get LeashAnchor(): Nullable<Vector3>
	/** Distance from `LeashAnchor` the bearer cannot leave; zero for a modifier that is no leash. */
	public get LeashRadius(): number
	public IsBuff(): this is IBuff
	/**
	 * Whether it is a debuff - what the game leaves out of a debuff-immune unit's values
	 * (`IModifierParams.ImmuneFilter`). As the game's `IsDebuff` unless the class says otherwise:
	 * one put on a unit of a team other than its caster's; with no caster known, none.
	 */
	public IsDebuff(): this is IDebuff
	/**
	 * Its rank among the modifiers giving a property the game takes one value of - a base attack
	 * time, an attack point (`UnitModifierManager.GetConstantByPriorityInternal`): the value of the
	 * highest-ranked one counts, whatever it is. The game's `GetPriority`
	 * (`ModifierPriorityData.Default` unless its class gives its own).
	 */
	public get Priority(): number
	/**
	 * Whether its values count on a debuff-immune parent whatever the property's filter
	 * (`IModifierParams.ImmuneFilter`), as the game decides it: its ability's target flags take
	 * debuff-immune enemies (`MAGIC_IMMUNE_ENEMIES`) or its immunity type is
	 * `SPELL_IMMUNITY_ENEMIES_YES` - unless its class or its ability's class decides it on its own,
	 * as the game's do (Shiva's Guard's aura, Sharpshooter).
	 */
	public get PiercesDebuffImmunity(): boolean
	/**
	 * Whether the modifier keeps damaging its parent by itself while it lasts - a burn - so its
	 * parent taken out of reach meanwhile, into a cyclone or a tornado, takes none of it: as it
	 * declares (`MODIFIER_PROPERTY_DAMAGE_OVER_TIME`), a class whose burn comes and goes saying
	 * when.
	 */
	public get IsDamageOverTime(): boolean
	/**
	 * The damage its parent takes each time it launches an attack (`MODIFIER_EVENT_ON_ATTACK`),
	 * through its resistances as they stand - Snakebite's punish; none by default
	 * (`Unit.OwnAttackHits`).
	 */
	public get DamageOnOwnAttack(): number
	/**
	 * Whether the damage it keeps dealing its parent never kills it - it sets its parent's health,
	 * 1 at least (`DamageTicks.SetsHealth`): the rum's hangover. None by default.
	 */
	public get NeverKills(): boolean
	/**
	 * Whether the hits of a spell add ticks through it (`HitOverTime`) - Searing Signet on the
	 * caster, Prophet's Pendulum on the target - as it declares
	 * (`MODIFIER_PROPERTY_HIT_OVER_TIME`); none by default.
	 */
	public get AddsHitTicks(): boolean
	/**
	 * Fills `out` with the ticks the hits `hits` of a cast of `ability` on `target` - its blow and
	 * the ticks of its damage over time - add through it, it being on the ability's owner or on the
	 * target (`Ability.DamageUntil`), laid as the first hit lands: the ability they deal through,
	 * `undefined` for none.
	 */
	public HitOverTime(_ability: Ability, _target: Unit, _hits: DamageHits, _out: DamageTicks): Nullable<Ability>
	/**
	 * Damage the hits `hits` of a cast of `ability` on `target` deal beyond what was counted for
	 * each, as each lands, through it: none by default - a hit landing whole once the cast broke
	 * Prophet's Pendulum, counted at the share the pendulum lets through.
	 */
	public HitsBeyond(_ability: Ability, _target: Unit, _hits: DamageHits): number
	/**
	 * Whether it declares `property` - a value of it (`DeclaredFunction`): a shield's block
	 * (`ShieldLedger`) - or an event it acts on (`DeclaredEvents`).
	 */
	public Declares(property: EModifierfunction): boolean
	/**
	 * Whether what the parent's attacks deal or bring depends on its hits so far
	 * (`IModifierParams.HitsAhead`): Fury Swipes' stacks, Bash of the Deep's count. None by default.
	 */
	public get CountsHits(): boolean
	/**
	 * Seconds the parent's attack stuns `target` for as it lands, `hitsAhead` of the parent's hits
	 * on it landing before (`IModifierParams.HitsAhead`): a bash. None by default.
	 */
	public SwingStun(_target: Unit, _hitsAhead: number): number
	/**
	 * The chance proc the parent's attack on `target` carries, written into `out`: a crit, a bash's
	 * damage (`Unit.GetSwingDamage` counts it by the roll asked); `started` for a swing begun, whose
	 * crit a crit animation has shown already. Whether it carries one; none by default.
	 */
	public SwingProc(_target: Unit, _started: boolean, _out: ISwingProc): boolean
	/**
	 * The blows it deals `victim` within `horizon` seconds when something sets it off, added to
	 * `out` (`Unit.TriggeredBlows`): Counter Helix's spins as the hits on Axe count down. None by
	 * default.
	 */
	public TriggeredBlows(_victim: Unit, _horizon: number, _out: IncomingDamageEntry[]): void
	/**
	 * The damage it blocks of each blow alone - Meat Shield's, what is left of Living Armor's: none
	 * by default (`ShieldLedger`).
	 */
	public get BlockOfEachHit(): number
	/**
	 * What each blow it blocks takes off its block (`BlockOfEachHit`) - Living Armor's: none by
	 * default, a block never spent.
	 */
	public get BlockLossPerHit(): number
	/**
	 * The damage it deals its parent from now until the game time `time` at the roll `strength` -
	 * the lowest by default - while it keeps damaging it (`IsDamageOverTime`): the ticks its ability
	 * lays (`Ability.DamageOverTime`, `DamageTicks`) from the moment it was laid until it ends. One an
	 * aura keeps on it (`NetworkAuraWithInRange`), whose end the game does not send while the unit
	 * stays inside, lasts at the lowest roll its own `Duration` after the unit can walk out
	 * (`Unit.ImmobileUntil`), at the others its `Duration` after the area ends - both no longer than
	 * the area lasts from the moment it was laid; one the area lays anew (Macropyre's burn) lasts as
	 * laid at the lowest roll, to the area's end at the others. At the lowest, none a hero may
	 * dispel once it can cast or use an item (`DamageTicks.KeptUntil`). None for a modifier dealing
	 * none, one whose ability is out of sight, or one on a unit that is no enemy of its caster -
	 * Shadow Word heals an ally - but damage taken off the unit's health as it is
	 * (`DamageTicks.Removal`): Prophet's Pendulum's held damage on its own bearer. Each tick through
	 * the parent's shields as the ones before left them: `shields` when given, else as they stand
	 * (`ShieldLedger`). `hits`, when given, takes each tick it counts, named by its ability and its
	 * kind of damage (`DamageHits.From`).
	 */
	public DamageUntil(time: number, strength?: ATTACK_DAMAGE_STRENGTH, shields?: ShieldLedger, type?: DAMAGE_TYPES, hits?: DamageHits): number
	/**
	 * Game time the last tick it deals its parent is due, of those `DamageUntil` counts at the roll
	 * `strength` - the lowest by default - to its end: the one that finishes the parent when one
	 * does. `-Infinity` when it deals none from now on.
	 */
	public DamageEndsAt(strength?: ATTACK_DAMAGE_STRENGTH, shields?: ShieldLedger): number
	/**
	 * Game time the next tick it deals its parent may land after game time `from` - now by default
	 * - as soon as it may (`DamageTicks.NextAt`); `Infinity` for none, as `DamageUntil` deals none.
	 * @example
	 * // the moment the burns on the hero hurt it next: no Armlet toggle across it
	 * const next = hero.NextDamageTickAt()
	 */
	public NextDamageTickAt(from?: number): number
	/**
	 * Health at or below which a blow kills its parent while it lasts - Ice Blast's frostbite
	 * shattering it; 0 for one that brings no such end.
	 */
	public get KillThreshold(): number
	/**
	 * What it sends back at `source` of a hit of `raw` damage of `damageType` its parent takes from
	 * it, `raw` before the parent's reductions: Blade Mail's Damage Return, Dispersion; 0 for one
	 * that sends nothing back - and for an attack's return, Retaliate's, which no spell sets off.
	 */
	public DamageReturnedTo(_source: Unit, _raw: number, _damageType: DAMAGE_TYPES): number
	/**
	 * Health below which a hit its parent outlives sets off what keeps it alive from then on -
	 * Borrowed Time's passive below its `hp_threshold`; 0 for one that sets off nothing.
	 */
	public get SavesBelow(): number
	/**
	 * The damage the next spell its parent applies at an enemy at game time `time` deals on top,
	 * as a blow of its own - Empower Spell, Khanda's and Phylactery's, while their shared cooldown
	 * is over then; 0 for one that adds nothing.
	 */
	public SpellBonusAt(_time: number): number
	/**
	 * Damage it deals its parent, before the parent's resistances, as the parent begins a spell
	 * that spends `mana` - Nether Ward's aura; 0 for one that deals none.
	 */
	public SpentManaDamage(_mana: number): number
	/**
	 * Health a second it heals its parent with while it lasts, beyond the parent's regeneration -
	 * the game leaves heals out of `HPRegen`: Cold Embrace, Voodoo Restoration, Living Armor, which
	 * declare it (`MODIFIER_PROPERTY_HEAL_OVER_TIME`); 0 for one that heals nothing.
	 */
	public get HealPerSecond(): number
	/** Health a second it heals `unit` standing around its parent with; none by default. */
	public HealOf(_unit: Unit): number
	/**
	 * The damage its parent deals `unit` around it from now until the game time `time` at the roll
	 * `strength` - the lowest by default - each tick through the unit's shields as the ones before
	 * left them (`shields` when given, else as they stand): the ticks it says (`AroundTicks`), those
	 * set off from now on - a shot flying to the unit already is a blow on its way
	 * (`Unit.HealthAt`) - and at the lowest only those set off while the unit cannot walk out of
	 * their reach (`Unit.ImmobileUntil`), each at the unit by its chance (`Ability.TickChance`).
	 * None for a modifier whose parent damages nothing around it. `hits`, when given, takes each
	 * tick it counts, named by its ability and its kind of damage (`DamageHits.From`).
	 * @example
	 * let shots = 0
	 * for (const ward of Modifier.DamagersAround) {
	 * 	shots += ward.DamageAround(enemy, GameState.RawGameTime + 2)
	 * }
	 */
	public DamageAround(unit: Unit, time: number, strength?: ATTACK_DAMAGE_STRENGTH, shields?: ShieldLedger, type?: DAMAGE_TYPES, hits?: DamageHits): number
	/**
	 * Game time the last tick its parent deals `unit` is due, of those `DamageAround` counts at the
	 * roll `strength` - the lowest by default; `-Infinity` for none.
	 */
	public DamageAroundEndsAt(unit: Unit, strength?: ATTACK_DAMAGE_STRENGTH, shields?: ShieldLedger): number
	/**
	 * Game time the next tick its parent deals `unit` may land after game time `from` - now by
	 * default - as soon as it may (`DamageTicks.NextAt`); `Infinity` for none.
	 */
	public NextDamageAroundAt(unit: Unit, from?: number): number
	/**
	 * Health regeneration a second it would give its parent with `health` of `maxHealth` and
	 * `strength` - one whose regeneration its parent's health or strength sets: Berserker's
	 * Blood's; 0 for one whose regeneration neither sets (`Unit.HealthRegenAt`).
	 */
	public HealthRegenWith(_health: number, _maxHealth: number, _strength: number): number
	/**
	 * Magic resistance in percent it would give its parent with `health` of `maxHealth` - one whose
	 * resistance its parent's health sets: Berserker's Blood's; 0 for one whose resistance it does
	 * not set (`Unit.MagicTakenAt`).
	 */
	public MagicResistWith(_health: number, _maxHealth: number): number
	/**
	 * Fills `out` with the ticks it deals its parent at `level` (`DamageTicks`): its ability's
	 * (`Ability.DamageOverTime`) by default; one dealing ticks of its own beside its ability's -
	 * Firestorm's burn beside its waves - says them here. Whether it deals any.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	/**
	 * Whether the modifier gathers the damage its parent takes while it lasts, to deal a share of
	 * it back as it ends - Orchid Malevolence's Soul Burn, Bloodthorn's Soul Rend - so its parent
	 * taken out of reach meanwhile, into a cyclone or a tornado, takes none to gather.
	 */
	public get GathersDamage(): boolean
	/**
	 * Whether the modifier is a charge its parent runs at the unit it attacks, which a cast of any
	 * spell or item ends - Phantom Rush: a Spirit Lance given 0.2 s into it took the boost off and
	 * left Phantom Lancer 645 off on foot, the rush cooling (20 October 2026, demo).
	 * @example
	 * const charge = buff.IsCharge // a cast now would end it
	 */
	public get IsCharge(): boolean
	/**
	 * Whether its parent stays invisible through a cast of any spell or item while it is on -
	 * Shadow Dance: Power Treads toggled in it left Slark invisible, where the same toggle ended
	 * Shadow Blade's invisibility at once (1 November 2026, demo).
	 * @example
	 * const hidden = buff.KeepsInvisibilityOnCast // a cast now does not reveal its parent
	 */
	public get KeepsInvisibilityOnCast(): boolean
	/**
	 * Whether the charge (`IsCharge`) goes on through a cast the game takes at once beside it
	 * (`IMMEDIATE`) - Onslaught's windup through Trample (20 October 2026, demo); Phantom Rush is
	 * not known to.
	 */
	public get ChargeTakesInstant(): boolean
	/**
	 * The unit states the modifier brings its parent, as its class declares them: `undefined` for
	 * a class that declares nothing - the prediction learns them from the game (`StateCarriers`) -
	 * and zero for one that brings none, a push that only carries.
	 */
	public get States(): Nullable<bigint>
	public IsDisable(): this is IDisable
	public IsShield(): this is IShield
	public IsChannel(): this is IChannel
	public OnAbilityLevelChanged(): void
	public PostDataUpdate(): void
	public ForceUpdateSpecialValues(): void
	public Remove(): boolean
	public HasTargetFlags(flag: DOTA_UNIT_TARGET_FLAGS): boolean
	public IsMagicImmune(owner?: Nullable<Unit>, ignoreFlags?: boolean): boolean
	public IsPassiveDisabled(source?: Unit): boolean
	public IsSuppressCrit(source?: Unit): boolean
	public TestSpecialValue(): void
}
