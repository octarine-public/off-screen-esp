// AUTO-GENERATED - do not edit.
interface UnitModifierManager {
	readonly Owner: Unit
	/**
	 * The unit's hits on the target landing before the attack its procs are read for
	 * (`IModifierParams.HitsAhead`): set by `Unit.GetSwingDamage` for the length of its reading,
	 * none otherwise.
	 */
	HitsAhead: number
	/** Whether the attack its procs are read for has not begun (`IModifierParams.Ahead`), set alike. */
	SwingAhead: boolean
	/**
	 * Whether the unit's shields take nothing off a blow read now (`GetDamageBlock` past its
	 * resistances): set by `Unit.GetSwingDamage` for a reckoning that spends them blow by blow
	 * itself (`ShieldLedger`), none otherwise.
	 */
	Unshielded: boolean
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
	get Timed(): readonly Modifier[]
	get AttacksPerSecond(): number
	get ArmorPerAgility(): number
	get MagicResistPerIntellect(): number
	get SlowResistance(): number
	/**
	 * A speed `GetMoveSpeed` cannot exceed, told without summing the unit's modifiers: while no
	 * modifier on it lifts or moves the limit or sets its speed outright
	 * (`moveSpeedLifts`), the limit (`MoveSpeedData.Max`) or the floor its slow resistance raises
	 * `MoveSpeedData.Min` to, whichever is higher; Infinity while one does. One lookup a property:
	 * a far unit is told out of reach before its speed is read.
	 */
	get MoveSpeedCeiling(): number
	/**
	 * Whether a shield on the unit can take something off a blow past its resistances
	 * (`GetDamageBlock`); without one a blow reads the same with its shields left out (`Unshielded`).
	 */
	get HasShields(): boolean
	get StatusResistance(): number
	/**
	 * The share of attacks on the unit it evades: each evasion (`EVASION_CONSTANT`) leaves its share
	 * of the rest, one after another.
	 */
	get Evasion(): number
	/**
	 * The unit's status resistance, a share, against a debuff of `caster`: the highest
	 * (`STATUS_RESISTANCE`) and each that stacks (`STATUS_RESISTANCE_STACKING`) leave their share
	 * one after another, no more than the game's bound (`StatusResistanceData.Max`). Some count only
	 * against some casters (Ichor of Nyctasha: Bane's).
	 */
	GetStatusResistance(caster?: Unit): number
	/**
	 * The share of a debuff of `caster` the unit's status resistance leaves, unbounded: the highest
	 * (`STATUS_RESISTANCE`) and each that stacks (`STATUS_RESISTANCE_STACKING`) one after another.
	 * The game bounds what it makes of it at 99% resisted (`GetStatusResistance`,
	 * `Unit.GetDebuffDurationFactor`).
	 */
	GetStatusResistanceShare(caster?: Unit): number
	/**
	 * How much longer the unit's debuffs hold `target`, a factor: one minus each of its status
	 * resistance as a caster (`STATUS_RESISTANCE_CASTER`, the debuff amplification negated).
	 */
	GetDebuffAmplification(target?: Unit): number
	get SpellAmplification(): number
	/**
	 * The unit's spell amplification on `target`, percent: what adds up, the highest unique one
	 * (Kaya and its kin) and the highest of the second unique kind (Divine Rapier). Some count
	 * only against some targets (Partisan's Brand: units a player controls); without `target`,
	 * none of those.
	 */
	GetSpellAmplification(target?: Unit): number
	get SpellAmplificationTarget(): number
	get IsSuppressCrit(): boolean
	get IsAvoidTotalDamage(): boolean
	get IsLinkensProtected(): boolean
	get IsConvertManaCostToHPCost(): boolean
	GetAttackDamageConvertPhysicalToMagical(target: Unit): boolean
	/**
	 * The unit's base armor from `baseArmor` with agility's, as the game reckons it: each times the
	 * lowest base percentage (`PHYSICAL_ARMOR_BASE_PERCENTAGE`) and the total percentage
	 * (`PHYSICAL_ARMOR_TOTAL_PERCENTAGE`) - the base only when above none; none while armor is
	 * ignored (`IGNORE_PHYSICAL_ARMOR`).
	 */
	GetBaseBonusPhysicalArmor(baseArmor: number): number
	GetBaseTurnRate(baseTurnRate: number): number
	/**
	 * The unit's base attack time from `baseAttackTime`, as the game reckons it: less the adjustment
	 * (`BASE_ATTACK_TIME_CONSTANT_ADJUST`), times the percentages (`BASE_ATTACK_TIME_PERCENTAGE`); a
	 * constant one (`BASE_ATTACK_TIME_CONSTANT`) stands for `baseAttackTime` - the adjustment and the
	 * constant those of the highest-ranked modifiers (`Modifier.Priority`).
	 */
	GetBaseAttackTime(baseAttackTime: number): number
	/**
	 * The unit's base attack speed, `baseAttackSpeed` itself: what overrides it
	 * (`ATTACKSPEED_BASE_OVERRIDE`) is the whole speed, in `GetAttackSpeed`.
	 */
	GetBaseAttackSpeed(baseAttackSpeed: number): number
	/** The unit's base attack range from `baseAttackRange`: the lowest override above none, else it. */
	GetBaseAttackRange(baseAttackRange: number): number
	/** The unit's base move speed from `baseMoveSpeed`: the lowest override above none, else it. */
	GetBaseMoveSpeed(baseMoveSpeed: number): number
	GetBaseAttributePrimary(basePrimary: Attributes): Attributes
	GetBaseMagicResistance(baseResist: number): number
	GetAttackAnimationPoint(baseAnimationPoint: number): number
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
	GetAttackSpeed(baseAttackSpeed: number): number
	GetAttackRange(baseRange: number): number
	GetTurnRate(baseTurnRate: number): number
	GetCastRangeBonus(baseCastRange: number): number
	/**
	 * The unit's move speed from `baseSpeed` with its modifiers - `extraPercentage` percent more of
	 * it besides, a buff not yet on it (`Unit.MoveSpeedWith`), and `extraSlow` percent less, a
	 * negative number: slows on their way to it (`Unit.MoveSpeedAt`), cut by its slow resistance
	 * and kept off an unslowable unit as the slows on it are - and `extraAfter` more speed after
	 * the percentages, as a current's is added (`modifier_path_movespeed`): its bonus taken off,
	 * the speed it walks with off the current (`Unit.TimeToReach`).
	 */
	GetMoveSpeed(baseSpeed: number, isUnslowable?: boolean, extraPercentage?: number, extraSlow?: number, extraAfter?: number): number
	/**
	 * The unit's armor from `baseArmor` with its modifiers, as the game reckons it: its base and
	 * agility's (`GetBaseBonusPhysicalArmor`) and, but on an illusion, its bonus armor - what adds up
	 * and the highest unique ones, times the total percentage when above none, then what comes after
	 * (`PHYSICAL_ARMOR_BONUS_POST`), all of it no lower than a minimum armor a modifier gives
	 * (`MIN_PHYSICAL_ARMOR`).
	 */
	GetPhysicalArmor(baseArmor: number): number
	/**
	 * The unit's magic resistance, a share, from `baseResist`, as the game reckons it: what adds up
	 * directly (`MAGICAL_RESISTANCE_DIRECT_MODIFICATION`) and each bonus leaving its share one after
	 * another - an illusion's own (`MAGICAL_RESISTANCE_BONUS_ILLUSIONS`) instead of the bonuses and
	 * the highest unique one - and the lowest Decrepify kind.
	 */
	GetMagicResistance(baseResist: number, ignoreMagicResist?: boolean): number
	GetPredictiveArmor(target: Unit): number
	GetPiercingArmor(target: Unit): number
	GetTimeVisionRange(baseVision: number, isNight: boolean, ignoreFixedVision?: boolean): number
	GetNightTimeVisionRange(baseVision: number, ignoreFixedVision?: boolean): number
	GetDayTimeVisionRange(baseVision: number, ignoreFixedVision?: boolean): number
	GetDamageBlock(damage: number, damageType: DAMAGE_TYPES, isRaw: boolean, source?: Unit): number
	/**
	 * What the unit's barriers of `damageType` can still take of a blow as large as any, as they
	 * stand: a magical one's (Pipe), a physical one's (Crystal Nova), for `NONE` one's taking every
	 * kind (Aphotic Shield) - the highest, with those that stack.
	 */
	GetBarrier(damageType: DAMAGE_TYPES): number
	GetRawDamageBlock(rawDamage: number, damageType: DAMAGE_TYPES): number
	GetAttackProjectileSpeed(baseSpeed: number): number
	GetPassiveDamageBlock(damageType: DAMAGE_TYPES, damageValue?: ATTACK_DAMAGE_STRENGTH, breaks?: boolean): number
	GetCritDamageBonus(target: Unit): number
	GetCritDamageBonusTarget(target: Unit): number
	GetIncomingRawAttackDamage(target: Unit): number
	GetIncomingAttackDamage(target: Unit, isRaw: boolean): number
	/**
	 * The share of damage of `damageType` from `target` the unit takes: its incoming damage
	 * (`INCOMING_DAMAGE_PERCENTAGE`), of physical the physical's, and an illusion's
	 * (`INCOMING_DAMAGE_ILLUSION`). The game takes the illusion's off a blow after a barrier
	 * (`INCOMING_DAMAGE_CONSTANT`) took its part, the SDK's barriers come off after it.
	 */
	GetIncomingDamage(target: Unit, damageType: DAMAGE_TYPES, rawDamage?: number, breaks?: boolean, isAttack?: boolean): number
	/**
	 * The share of its damage on `target` the unit deals, spells and attacks alike: the total
	 * outgoing damage (`TOTALDAMAGEOUTGOING_PERCENTAGE`), an illusion's and, of physical damage, the
	 * physical (`PHYSICALDAMAGEOUTGOING_PERCENTAGE`). What only its attacks
	 * deal more or less (`DAMAGEOUTGOING_PERCENTAGE`) is in `GetPreAttackDamageBonus`. `isAttack`
	 * for an attack's damage (`IModifierParams.IsAttack`). `illusionShare` false: the illusion's
	 * share left out - an attack takes it as it begins (server.dll 0x182552436), the mana its blow
	 * burns as it lands (`GetProcAttackFeedback`) never has it.
	 */
	GetOutgoingDamage(target: Unit, damageType: DAMAGE_TYPES, isAttack?: boolean, illusionShare?: boolean): number
	/**
	 * The bonus damage the unit's attack on `target` gets after its crit and its outgoing damage
	 * (`PREATTACK_BONUS_DAMAGE_POST_CRIT`): Shadow Blade's and Silver Edge's break, Wind Walk's.
	 */
	GetPostCritAttackDamageBonus(target: Unit): number
	/**
	 * The physical damage of the mana the unit's blow on `target` burns as it lands
	 * (`PROCATTACK_FEEDBACK`): Mana Break's, Diffusal Blade's.
	 */
	GetProcAttackFeedback(target: Unit, rawDamageBase: number): number
	/**
	 * What the procs of the unit's attack on `target` add of `damageType`; of physical damage the
	 * burnt mana's (`GetProcAttackFeedback`) too unless `withFeedback` is false.
	 */
	GetProcAttackDamageBonus(target: Unit, damageType: DAMAGE_TYPES, rawDamageBase: number, withFeedback?: boolean): number
	/**
	 * What the unit's modifiers add to an attack of `baseDamage` on `target`: the bonus damage and
	 * the base damage percent of `baseDamage` (`BASEDAMAGEOUTGOING_PERCENTAGE`; the bonus base damage,
	 * `BASEATTACK_BONUSDAMAGE`, is in the white damage the game sends), then the share of the attack it deals - the outgoing damage of attacks
	 * (`DAMAGEOUTGOING_PERCENTAGE`, added up with the SDK's own `PREATTACK_BONUS_DAMAGE_PERCENTAGE`)
	 * times each multiplier (`DAMAGEOUTGOING_PERCENTAGE_MULTIPLICATIVE`). Without `baseDamage`, the
	 * bonus over the minimum roll.
	 */
	GetPreAttackDamageBonus(baseDamage?: number, target?: Unit): number
	GetAbsoluteNoDamage(damageType: DAMAGE_TYPES, target: Unit): boolean
	GetHealthRegen(baseRegen: number): number
	GetConstantFirstInternal(eModifierfunction: EModifierfunction, ignoreFlags?: boolean, params?: IModifierParams): number
	/**
	 * The value of a property the game takes one handler's value of - a base attack time, an
	 * attack point: the handler of the modifier ranked highest (`Modifier.Priority`), the one
	 * added first among equals, gives it whatever it is; 0 when its flag or the filter
	 * (`IModifierParams.ImmuneFilter`) leaves it out, or without any.
	 */
	GetConstantByPriorityInternal(eModifierfunction: EModifierfunction, params?: IModifierParams): number
	GetConstantLowestInternal(eModifierfunction: EModifierfunction, ignoreFlags?: boolean, params?: IModifierParams): number
	GetConstantHighestInternal(eModifierfunction: EModifierfunction, ignoreFlags?: boolean, params?: IModifierParams): number
	GetConditionalAdditiveInternal(eModifierfunction: EModifierfunction, ignoreFlags?: boolean, multiplier?: number, incoming?: number, params?: IModifierParams): number
	GetConditionalPercentageInternal(eModifierfunction: EModifierfunction, ignoreFlags?: boolean, multiplier?: number, reduction?: number, params?: IModifierParams): number
	GetPercentageLowestInternal(eModifierfunction: EModifierfunction, ignoreFlags?: boolean, params?: IModifierParams): number
	GetPercentageHighestInternal(eModifierfunction: EModifierfunction, ignoreFlags?: boolean, params?: IModifierParams): number
	/**
	 * The product of one plus `sign` times each handler's percent of `eModifierfunction` - one
	 * minus each for a `sign` of -1 -; 1 without any.
	 */
	GetPercentageProductInternal(eModifierfunction: EModifierfunction, params?: IModifierParams, sign?: number): number
	/** Whether a modifier on the unit gives `eModifierfunction`, gone or flagged ones too. */
	HasHandlers(eModifierfunction: EModifierfunction): boolean
	GetPercentageMultiplicativeInternal(eModifierfunction: EModifierfunction, ignoreFlags?: boolean, isNegative?: boolean, applyOnlyPositive?: boolean, params?: IModifierParams): number
	/**
	 * The modifiers on the unit that declare `key`, as the game's own declare it: a property they
	 * give a value of (`Modifier.DeclaredFunction`) or an event they act on
	 * (`Modifier.DeclaredEvents`) - what asks after one effect visits these, not every modifier.
	 * @example
	 * const shells = enemy.ModifierManager.Declaring(
	 * 	EModifierfunction.MODIFIER_PROPERTY_REFLECT_SPELL
	 * )
	 */
	Declaring(key: EModifierfunction): readonly Modifier[]
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
	MoveSpeedChanges(from: number, to: number, out: number[]): boolean
	/**
	 * @private NOTE: this is internal method - also declares a modifier the network's fade time
	 * fades the unit by (`Modifier.FadesParent`) as the game declares it,
	 * `MODIFIER_PROPERTY_INVISIBILITY_LEVEL`, with any class of its own or none.
	 */
	DeclareInternal(modifier: Modifier, functions: Nullable<ModifierMapFieldHandler>, events: Nullable<readonly EModifierfunction[]>, isCreate: boolean): void
	/**
	 * @private NOTE: this is internal method - `modifier` came on the unit or changed while on it
	 * (`on`), or left it: it stands among `Timed` while it is on and runs out.
	 */
	TimeInternal(modifier: Modifier, on: boolean): void
	/** @private NOTE: this is internal method */
	AddOrRemoveInternal(eModifierfunctions: Nullable<ModifierMapFieldHandler>, isCreate: boolean, modifier: Modifier): void
}
