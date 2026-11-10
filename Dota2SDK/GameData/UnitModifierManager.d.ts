// AUTO-GENERATED - do not edit.
declare class UnitModifierManager {
	public readonly Owner: Unit
	/** @private NOTE: this is internal field use Unit#CanUseItems */
	public CanUseAllItems_: boolean
	/** @private NOTE: this is internal field use Unit#NoIntellect */
	public NoIntellect_: boolean
	/** @private NOTE: this is internal field use Unit#HasAeigs */
	public HasAeigs_: boolean
	/** @private NOTE: this is internal field use Unit#IsTempestDouble */
	public IsTempestDouble_: boolean
	/** @private NOTE: this is internal field use Unit#IsChargeOfDarkness */
	public IsChargeOfDarkness_: boolean
	/** @private NOTE: this is internal field use Unit#IsClone */
	public IsClone_: boolean
	/** @private NOTE: this is internal field use Unit#GetAttackHitDamage */
	public AttackCounter_: Nullable<AttackCountModifier>
	/** @private NOTE: this is internal field use Unit#IsIllusion */
	public IsIllusion_: boolean
	/** @private NOTE: this is internal field use Unit#IsReflection */
	public IsReflection_: boolean
	/** @private NOTE: this is internal field use Unit#IsStrongIllusion */
	public IsStrongIllusion_: boolean
	/** @private NOTE: this is internal field use Unit#IsFountainInvulnerable */
	public IsFountainInvulnerable_: boolean
	/** @private NOTE: this is internal field use Unit#ActsInvulnerable */
	public ActsInvulnerable_: boolean
	/** @private NOTE: this is internal */
	public IsMorphlingReplicateIllusion_: boolean
	/**
	 * The unit's hits on the target landing before the attack its procs are read for
	 * (`IModifierParams.HitsAhead`): set by `Unit.GetSwingDamage` for the length of its reading,
	 * none otherwise.
	 */
	public HitsAhead: number
	/** Whether the attack its procs are read for has not begun (`IModifierParams.Ahead`), set alike. */
	public SwingAhead: boolean
	/**
	 * Whether the unit's shields take nothing off a blow read now (`GetDamageBlock` past its
	 * resistances): set by `Unit.GetSwingDamage` for a reckoning that spends them blow by blow
	 * itself (`ShieldLedger`), none otherwise.
	 */
	public Unshielded: boolean
	/**
	 * Game time the values are read for: the one `ReadAt` set, now while they are read as they
	 * stand - what a modifier whose value runs with its time reads it by (`Modifier.ElapsedTime`,
	 * `Modifier.RemainingTime`): Viper Strike's slow fading, Diffusal Blade's.
	 */
	public static get ReadTime(): number
	/**
	 * The modifiers on the unit that run out - a duration of their own (`Modifier.Duration`), so an
	 * end (`Modifier.DieTime`) - kept as they come, go and are refreshed: what asks when the
	 * unit's state changes next visits these, not every modifier.
	 * @example
	 * let soonest = Infinity
	 * for (const buff of enemy.ModifierManager.Timed) {
	 * 	soonest = Math.min(soonest, buff.DieTime)
	 * }
	 */
	public get Timed(): readonly Modifier[]
	public get AttacksPerSecond(): number
	public get ArmorPerAgility(): number
	public get MagicResistPerIntellect(): number
	public get SlowResistance(): number
	/**
	 * A speed `GetMoveSpeed` cannot exceed, told without summing the unit's modifiers: while no
	 * modifier on it lifts or moves the limit or sets its speed outright
	 * (`moveSpeedLifts`), the limit (`MoveSpeedData.Max`) or the floor its slow resistance raises
	 * `MoveSpeedData.Min` to, whichever is higher; Infinity while one does. One lookup a property:
	 * a far unit is told out of reach before its speed is read.
	 */
	public get MoveSpeedCeiling(): number
	/**
	 * Whether a shield on the unit can take something off a blow past its resistances
	 * (`GetDamageBlock`); without one a blow reads the same with its shields left out (`Unshielded`).
	 */
	public get HasShields(): boolean
	public get StatusResistance(): number
	/**
	 * The share of attacks on the unit it evades: each evasion (`EVASION_CONSTANT`) leaves its share
	 * of the rest, one after another.
	 */
	public get Evasion(): number
	/**
	 * The unit's status resistance, a share, against a debuff of `caster`: the highest
	 * (`STATUS_RESISTANCE`) and each that stacks (`STATUS_RESISTANCE_STACKING`) leave their share
	 * one after another, no more than the game's bound (`StatusResistanceData.Max`). Some count only
	 * against some casters (Ichor of Nyctasha: Bane's).
	 */
	public GetStatusResistance(caster?: Unit): number
	/**
	 * The share of a debuff of `caster` the unit's status resistance leaves, unbounded: the highest
	 * (`STATUS_RESISTANCE`) and each that stacks (`STATUS_RESISTANCE_STACKING`) one after another.
	 * The game bounds what it makes of it at 99% resisted (`GetStatusResistance`,
	 * `Unit.GetDebuffDurationFactor`).
	 */
	public GetStatusResistanceShare(caster?: Unit): number
	/**
	 * How much longer the unit's debuffs hold `target`, a factor: one minus each of its status
	 * resistance as a caster (`STATUS_RESISTANCE_CASTER`, the debuff amplification negated).
	 */
	public GetDebuffAmplification(target?: Unit): number
	public get SpellAmplification(): number
	/**
	 * The unit's spell amplification on `target`, percent: what adds up, the highest unique one
	 * (Kaya and its kin) and the highest of the second unique kind (Divine Rapier). Some count
	 * only against some targets (Partisan's Brand: units a player controls); without `target`,
	 * none of those.
	 */
	public GetSpellAmplification(target?: Unit): number
	public get SpellAmplificationTarget(): number
	public get IsSuppressCrit(): boolean
	public get IsAvoidTotalDamage(): boolean
	public get IsLinkensProtected(): boolean
	public get IsConvertManaCostToHPCost(): boolean
	public GetAttackDamageConvertPhysicalToMagical(target: Unit): boolean
	/**
	 * The unit's base armor from `baseArmor` with agility's, as the game reckons it: each times the
	 * lowest base percentage (`PHYSICAL_ARMOR_BASE_PERCENTAGE`) and the total percentage
	 * (`PHYSICAL_ARMOR_TOTAL_PERCENTAGE`) - the base only when above none; none while armor is
	 * ignored (`IGNORE_PHYSICAL_ARMOR`).
	 */
	public GetBaseBonusPhysicalArmor(baseArmor: number): number
	public GetBaseTurnRate(baseTurnRate: number): number
	/**
	 * The unit's base attack time from `baseAttackTime`, as the game reckons it: less the adjustment
	 * (`BASE_ATTACK_TIME_CONSTANT_ADJUST`), times the percentages (`BASE_ATTACK_TIME_PERCENTAGE`); a
	 * constant one (`BASE_ATTACK_TIME_CONSTANT`) stands for `baseAttackTime` - the adjustment and the
	 * constant those of the highest-ranked modifiers (`Modifier.Priority`).
	 */
	public GetBaseAttackTime(baseAttackTime: number): number
	/**
	 * The unit's base attack speed, `baseAttackSpeed` itself: what overrides it
	 * (`ATTACKSPEED_BASE_OVERRIDE`) is the whole speed, in `GetAttackSpeed`.
	 */
	public GetBaseAttackSpeed(baseAttackSpeed: number): number
	/** The unit's base attack range from `baseAttackRange`: the lowest override above none, else it. */
	public GetBaseAttackRange(baseAttackRange: number): number
	/** The unit's base move speed from `baseMoveSpeed`: the lowest override above none, else it. */
	public GetBaseMoveSpeed(baseMoveSpeed: number): number
	public GetBaseAttributePrimary(basePrimary: Attributes): Attributes
	public GetBaseMagicResistance(baseResist: number): number
	public GetAttackAnimationPoint(baseAnimationPoint: number): number
	/**
	 * The unit's attack speed from `baseAttackSpeed` - its base attack speed with its agility
	 * (`Unit.BaseAttackSpeedIncrease`) -, as the game reckons it: the bonus
	 * (`ATTACKSPEED_BONUS_CONSTANT`, slows cut by the reduction and, where a modifier says so,
	 * `SLOW_RESISTANCE_APPLIES_TO_ATTACKS`, by slow resistance) and agility's
	 * (`BASE_ATTACKSPEED_PER_AGI_BONUS_PERCENTAGE`) no lower than the game's bound together
	 * (`AttackSpeedData.LowestBonus`); a base override (`ATTACKSPEED_BASE_OVERRIDE`) is the speed
	 * itself. Then the percentages, the game's limits but where a modifier lifts them, and an
	 * absolute most.
	 */
	public GetAttackSpeed(baseAttackSpeed: number): number
	public GetAttackRange(baseRange: number): number
	public GetTurnRate(baseTurnRate: number): number
	public GetCastRangeBonus(baseCastRange: number): number
	/**
	 * The unit's move speed from `baseSpeed` with its modifiers - `extraPercentage` percent more of
	 * it besides, a buff not yet on it (`Unit.MoveSpeedWith`), and `extraSlow` percent less, a
	 * negative number: slows on their way to it (`Unit.MoveSpeedAt`), cut by its slow resistance
	 * and kept off an unslowable unit as the slows on it are - and `extraAfter` more speed after
	 * the percentages, as a current's is added (`modifier_path_movespeed`): its bonus taken off,
	 * the speed it walks with off the current (`Unit.TimeToReach`).
	 */
	public GetMoveSpeed(baseSpeed: number, isUnslowable?: boolean, extraPercentage?: number, extraSlow?: number, extraAfter?: number): number
	/**
	 * The unit's armor from `baseArmor` with its modifiers, as the game reckons it: its base and
	 * agility's (`GetBaseBonusPhysicalArmor`) and, but on an illusion, its bonus armor - what adds up
	 * and the highest unique ones, times the total percentage when above none, then what comes after
	 * (`PHYSICAL_ARMOR_BONUS_POST`), all of it no lower than a minimum armor a modifier gives
	 * (`MIN_PHYSICAL_ARMOR`).
	 */
	public GetPhysicalArmor(baseArmor: number): number
	/**
	 * The unit's magic resistance, a share, from `baseResist`, as the game reckons it: what adds up
	 * directly (`MAGICAL_RESISTANCE_DIRECT_MODIFICATION`) and each bonus leaving its share one after
	 * another - an illusion's own (`MAGICAL_RESISTANCE_BONUS_ILLUSIONS`) instead of the bonuses and
	 * the highest unique one - and the lowest Decrepify kind.
	 */
	public GetMagicResistance(baseResist: number, ignoreMagicResist?: boolean): number
	public GetPredictiveArmor(target: Unit): number
	public GetPiercingArmor(target: Unit): number
	public GetTimeVisionRange(baseVision: number, isNight: boolean, ignoreFixedVision?: boolean): number
	public GetNightTimeVisionRange(baseVision: number, ignoreFixedVision?: boolean): number
	public GetDayTimeVisionRange(baseVision: number, ignoreFixedVision?: boolean): number
	public GetDamageBlock(damage: number, damageType: DAMAGE_TYPES, isRaw: boolean, source?: Unit): number
	/**
	 * What the unit's barriers of `damageType` can still take of a blow as large as any, as they
	 * stand: a magical one's (Pipe), a physical one's (Crystal Nova), for `NONE` one's taking every
	 * kind (Aphotic Shield) - the highest, with those that stack.
	 */
	public GetBarrier(damageType: DAMAGE_TYPES): number
	public GetRawDamageBlock(rawDamage: number, damageType: DAMAGE_TYPES): number
	public GetAttackProjectileSpeed(baseSpeed: number): number
	public GetPassiveDamageBlock(damageType: DAMAGE_TYPES, damageValue?: ATTACK_DAMAGE_STRENGTH, breaks?: boolean): number
	public GetCritDamageBonus(target: Unit): number
	public GetCritDamageBonusTarget(target: Unit): number
	public GetIncomingRawAttackDamage(target: Unit): number
	public GetIncomingAttackDamage(target: Unit, isRaw: boolean): number
	/**
	 * The share of damage of `damageType` from `target` the unit takes: its incoming damage
	 * (`INCOMING_DAMAGE_PERCENTAGE`), of physical the physical's, and an illusion's
	 * (`INCOMING_DAMAGE_ILLUSION`). The game takes the illusion's off a blow after a barrier
	 * (`INCOMING_DAMAGE_CONSTANT`) took its part, the SDK's barriers come off after it.
	 */
	public GetIncomingDamage(target: Unit, damageType: DAMAGE_TYPES, rawDamage?: number, breaks?: boolean, isAttack?: boolean): number
	/**
	 * The share of its damage on `target` the unit deals, spells and attacks alike: the total
	 * outgoing damage (`TOTALDAMAGEOUTGOING_PERCENTAGE`), an illusion's and, of physical damage, the
	 * physical (`PHYSICALDAMAGEOUTGOING_PERCENTAGE`). What only its attacks
	 * deal more or less (`DAMAGEOUTGOING_PERCENTAGE`) is in `GetPreAttackDamageBonus`. `isAttack`
	 * for an attack's damage (`IModifierParams.IsAttack`). `illusionShare` false: the illusion's
	 * share left out - an attack takes it as it begins (server.dll 0x182552436), the mana its blow
	 * burns as it lands (`GetProcAttackFeedback`) never has it.
	 */
	public GetOutgoingDamage(target: Unit, damageType: DAMAGE_TYPES, isAttack?: boolean, illusionShare?: boolean): number
	/**
	 * The bonus damage the unit's attack on `target` gets after its crit and its outgoing damage
	 * (`PREATTACK_BONUS_DAMAGE_POST_CRIT`): Shadow Blade's and Silver Edge's break, Wind Walk's.
	 */
	public GetPostCritAttackDamageBonus(target: Unit): number
	/**
	 * The physical damage of the mana the unit's blow on `target` burns as it lands
	 * (`PROCATTACK_FEEDBACK`): Mana Break's, Diffusal Blade's.
	 */
	public GetProcAttackFeedback(target: Unit, rawDamageBase: number): number
	/**
	 * What the procs of the unit's attack on `target` add of `damageType`; of physical damage the
	 * burnt mana's (`GetProcAttackFeedback`) too unless `withFeedback` is false.
	 */
	public GetProcAttackDamageBonus(target: Unit, damageType: DAMAGE_TYPES, rawDamageBase: number, withFeedback?: boolean): number
	/**
	 * What the unit's modifiers add to an attack of `baseDamage` on `target`: the bonus damage and
	 * the base damage percent of `baseDamage` (`BASEDAMAGEOUTGOING_PERCENTAGE`; the bonus base damage,
	 * `BASEATTACK_BONUSDAMAGE`, is in the white damage the game sends), then the share of the attack it deals - the outgoing damage of attacks
	 * (`DAMAGEOUTGOING_PERCENTAGE`, added up with the SDK's own `PREATTACK_BONUS_DAMAGE_PERCENTAGE`)
	 * times each multiplier (`DAMAGEOUTGOING_PERCENTAGE_MULTIPLICATIVE`). Without `baseDamage`, the
	 * bonus over the minimum roll.
	 */
	public GetPreAttackDamageBonus(baseDamage?: number, target?: Unit): number
	public GetAbsoluteNoDamage(damageType: DAMAGE_TYPES, target: Unit): boolean
	public GetHealthRegen(baseRegen: number): number
	public GetConstantFirstInternal(eModifierfunction: EModifierfunction, ignoreFlags?: boolean, params?: IModifierParams): number
	/**
	 * The value of a property the game takes one handler's value of - a base attack time, an
	 * attack point: the handler of the modifier ranked highest (`Modifier.Priority`), the one
	 * added first among equals, gives it whatever it is; 0 when its flag or the filter
	 * (`IModifierParams.ImmuneFilter`) leaves it out, or without any.
	 */
	public GetConstantByPriorityInternal(eModifierfunction: EModifierfunction, params?: IModifierParams): number
	public GetConstantLowestInternal(eModifierfunction: EModifierfunction, ignoreFlags?: boolean, params?: IModifierParams): number
	public GetConstantHighestInternal(eModifierfunction: EModifierfunction, ignoreFlags?: boolean, params?: IModifierParams): number
	public GetConditionalAdditiveInternal(eModifierfunction: EModifierfunction, ignoreFlags?: boolean, multiplier?: number, incoming?: number, params?: IModifierParams): number
	public GetConditionalPercentageInternal(eModifierfunction: EModifierfunction, ignoreFlags?: boolean, multiplier?: number, reduction?: number, params?: IModifierParams): number
	public GetPercentageLowestInternal(eModifierfunction: EModifierfunction, ignoreFlags?: boolean, params?: IModifierParams): number
	public GetPercentageHighestInternal(eModifierfunction: EModifierfunction, ignoreFlags?: boolean, params?: IModifierParams): number
	/**
	 * The product of one plus `sign` times each handler's percent of `eModifierfunction` - one
	 * minus each for a `sign` of -1 -; 1 without any.
	 */
	public GetPercentageProductInternal(eModifierfunction: EModifierfunction, params?: IModifierParams, sign?: number): number
	/** Whether a modifier on the unit gives `eModifierfunction`, gone or flagged ones too. */
	public HasHandlers(eModifierfunction: EModifierfunction): boolean
	public GetPercentageMultiplicativeInternal(eModifierfunction: EModifierfunction, ignoreFlags?: boolean, isNegative?: boolean, applyOnlyPositive?: boolean, params?: IModifierParams): number
	/**
	 * The modifiers on the unit that declare `key`, as the game's own declare it: a property they
	 * give a value of (`Modifier.DeclaredFunction`) or an event they act on
	 * (`Modifier.DeclaredEvents`) - what asks after one effect visits these, not every modifier.
	 * @example
	 * const shells = enemy.ModifierManager.Declaring(
	 * 	EModifierfunction.MODIFIER_PROPERTY_REFLECT_SPELL
	 * )
	 */
	public Declaring(key: EModifierfunction): readonly Modifier[]
	/**
	 * When the move speed the unit's modifiers give it may change by itself after the game time
	 * `from`: pushes into `out` the game times before `to` a modifier giving it runs out
	 * (`Modifier.DieTime`) - a time may come more than once - and returns whether any such
	 * modifier is still on at `from`, which may fade meanwhile: Viper Strike's slow. One without a
	 * duration, or an aura's, which the game keeps on while the unit stands in it, changes
	 * nothing by itself.
	 * @example
	 * const ends: number[] = []
	 * const varies = enemy.ModifierManager.MoveSpeedChanges(now, now + 2, ends)
	 */
	public MoveSpeedChanges(from: number, to: number, out: number[]): boolean
	/**
	 * Has every unit's values read for game time `time` - a blow landing then, a tick due then:
	 * the modifiers gone by then pass over (`Modifier.RemainingAt`), but an aura's, which the
	 * game keeps on while the unit stands in it; -Infinity reads them as they stand. Returns the
	 * time read for before, to set back once read.
	 * @example
	 * const was = UnitModifierManager.ReadAt(landsAt)
	 * const resist = enemy.GetMagicalDamageResist()
	 * UnitModifierManager.ReadAt(was)
	 */
	public static ReadAt(time: number): number
	/**
	 * The game time every unit's values are read for now as `ReadAt` set it: -Infinity while they
	 * are read as they stand - unlike `ReadTime`, which tells that from a read for this very moment,
	 * where a modifier run out passes over. What a cache of values read keys them by.
	 * @example
	 * const key = `${unit.Index}:${UnitModifierManager.ReadingAt}`
	 */
	public static get ReadingAt(): number
	/**
	 * @private NOTE: this is internal method - also declares a modifier the network's fade time
	 * fades the unit by (`Modifier.FadesParent`) as the game declares it,
	 * `MODIFIER_PROPERTY_INVISIBILITY_LEVEL`, with any class of its own or none.
	 */
	public DeclareInternal(modifier: Modifier, functions: Nullable<ModifierMapFieldHandler>, events: Nullable<readonly EModifierfunction[]>, isCreate: boolean): void
	/**
	 * @private NOTE: this is internal method - `modifier` came on the unit or changed while on it
	 * (`on`), or left it: it stands among `Timed` while it is on and runs out.
	 */
	public TimeInternal(modifier: Modifier, on: boolean): void
	/** @private NOTE: this is internal method */
	public AddOrRemoveInternal(eModifierfunctions: Nullable<ModifierMapFieldHandler>, isCreate: boolean, modifier: Modifier): void
}
