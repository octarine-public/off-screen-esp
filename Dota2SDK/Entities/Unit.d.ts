// AUTO-GENERATED - do not edit.
declare class Unit extends Entity {
	public static IsNpcVisibleState(state: bigint[], entId: number): boolean
	public readonly BaseHPRegen: number
	public readonly ManaRegen: number
	public readonly IsAncient: boolean
	public readonly NetworkedBaseArmor: number
	public readonly NetworkedBaseMagicResist: number
	public readonly CurrentShop: DOTA_SHOP_TYPE
	public readonly BKBChargesUsed: number
	public readonly AeonChargesUsed: number
	public readonly RefresherUseTime: number
	public readonly RefresherLastCooldown: number
	public readonly NetworkedBaseDayVision: number
	public readonly DeathTime: number
	public readonly HasStolenScepter: boolean
	public readonly HasUpgradeableAbilities: boolean
	public readonly IsDominatable: boolean
	public readonly CanBeRespawn: boolean
	public readonly BaseDamageMin: number
	public readonly BaseDamageMax: number
	public readonly AttackDamageMin: number
	public readonly AttackDamageMax: number
	public readonly IsMoving: boolean
	public readonly IsPhantom: boolean
	public readonly IsSummoned: boolean
	public readonly LastAttackTime: number
	public readonly LastDealtDamageTime: number
	public readonly NetworkBaseMoveSpeed: number
	public readonly NetworkBaseAttackRange: number
	public readonly NetworkBaseAttackTime: number
	public PredictedIsWaitingToSpawn: boolean
	public Mana: number
	public readonly MaxMana: number
	public readonly NetworkedBaseNightVision: number
	public readonly TauntCooldown: number
	public readonly TauntCooldown2: number
	public readonly XPBounty: number
	public readonly XPBountyExtra: number
	public readonly GoldBountyMin: number
	public readonly GoldBountyMax: number
	public readonly HealthBarOffsetOverride: number
	public readonly NetworkActivity: GameActivity
	public NetworkActivityPrev: GameActivity
	public NetworkActivityStartTime: number
	public readonly NetworkSequenceIndex: number
	public NetworkSequenceIndexPrev: number
	public SequenceParity: number
	public SequenceParityPrev: number
	public readonly StartSequenceCycle: number
	public readonly OwnerPlayerID: number
	public readonly Parity: number
	public readonly NetworkAttackDamageBonus: number
	public readonly UnitType: number
	public readonly AbilityPoints: number
	public readonly LastDispellTime: number
	public readonly RefresherChargesUsed: number
	public readonly TotalAbilityPoints: number
	public readonly ScepterUpgradeID: number
	public readonly ShardUpgradeID: number
	public Level: number
	public Agility: number
	public Intellect: number
	public Strength: number
	public TotalAgility: number
	public BaseTotalIntellect: number
	public TotalStrength: number
	public AttackCapabilities: number
	public UnitStateNetworked: bigint
	public IsWaitingToSpawn: boolean
	public Spawner: Nullable<NeutralSpawner>
	public LastActivity: GameActivity
	public LastActivitySequenceVariant: number
	/** Game time of the tick the last animation began on, however late its frame showed it. */
	public LastAnimationStartTime: number
	public LastAnimationEndTime: number
	public LastAnimationRawCastPoint: number
	public LastAnimationCastPoint: number
	public LastAnimationPlaybackRate: number
	public LastAnimationIsAttack: boolean
	public LastAnimationCasted: boolean
	public IsInAnimation: boolean
	public LastGestureActivity: GameActivity
	public LastGestureSequenceVariant: number
	public LastGesturePlaybackRate: number
	public AttackTimeAtLastTick: number
	public AttackTimeLostToLastTick: number
	public YawVelocity: number
	public IsVisibleState: boolean
	public IsAttacking: boolean
	/**
	 * Index of the unit this one began its last swing at (`AttackStarted`) - kept past the swing,
	 * which clears its target - and the game time it began: whom it swings at again
	 * (`NextSwings`).
	 */
	public LastSwingTarget: number
	public LastSwingStart: number
	/**
	 * Seconds its last swing took to its attack point, as the game played it (the animation's cast
	 * point): its next swings take as long (`NextSwings`); 0 before one.
	 */
	public LastSwingPoint: number
	/**
	 * The last game time the enemy team caught sight of the unit: the game re-sends a unit's
	 * modifiers on the tick a team it was hidden from starts seeing it, and on no other - it
	 * tells neither how long they keep seeing it nor when they stop.
	 */
	public IsVisibleForEnemiesLastTime: number
	public IsRoshan: boolean
	public IsCourier: boolean
	public IsHero: boolean
	public IsSpiritBear: boolean
	public IsCreep: boolean
	public IsTower: boolean
	public IsOutpost: boolean
	public IsBuilding: boolean
	public IsUnit: boolean
	public IsVisibleForTeamMask: number
	public UnitData: UnitData
	public IsTrueSightedForEnemies: boolean
	public HasModifierVisibleForEnemies: boolean
	/**
	 * Whether a viewer of the enemy team whose place we know sees the unit now and it is not
	 * invisible to them (`VisionSDK.EnemySees`). Kept for the local team's units; a viewer hidden
	 * from us is not in it.
	 */
	public IsInEnemySight: boolean
	public HasScepterModifier: boolean
	public HasShardModifier: boolean
	public CanBeHealed: boolean
	public PlayerID: number
	public HPRegenCounter: number
	public IsControllableByPlayerMask: bigint
	public MyWearables: Wearable[]
	/** @description The owner of the Unit. (example: Spirit Bear) */
	public OwnerNPC: Nullable<Unit>
	public readonly Buffs: Modifier[]
	public readonly Inventory: Inventory
	public readonly ModifierManager: UnitModifierManager
	/** Position history, velocity and the ability version of this unit; updated once per tick. */
	public readonly Prediction: UnitPrediction
	public readonly Spells: Nullable<Ability>[]
	public readonly TotalItems_: number[]
	public readonly TotalItems: Nullable<Item>[]
	public readonly TPEndPosition: Vector3
	public readonly TPStartPosition: Vector3
	public get Armor(): number
	public get ArmorType(): ArmorType
	public get HPRegen(): number
	public get AttacksPerSecond(): number
	public get AttackAnimationPoint(): number
	public get AttackHasteFactor(): number
	public get AttackPoint(): number
	public get AttackBackswing(): number
	/** @deprecated Use SecondsPerAttack */
	public get AttackRate(): number
	public get AttackSpeed(): number
	public get ReplicatingOtherHeroModel(): Nullable<Unit>
	public get AttackDamageClassType(): AttackDamageType
	public get AttackDamageAverage(): number
	/**
	 * How fast this unit's attack projectile flies, the bonuses its modifiers add counted in.
	 * A field on the way can still slow it down or hurry it: that is `ProjectileSpeedFactor`.
	 */
	public get AttackProjectileSpeed(): number
	public get BaseAttackTime(): number
	public get BaseAttackRange(): number
	public get BaseAttackSpeed(): number
	public get BaseAttackSpeedIncrease(): number
	public get BaseAttackProjectileSpeed(): number
	public get BaseAttackAnimationPoint(): number
	public get BaseTurnRate(): number
	public get BaseMoveSpeed(): number
	public get BaseArmor(): number
	public get BaseBonusArmor(): number
	public get BonusArmorPerAgility(): number
	public get BaseMagicalResist(): number
	public get DayVisionRange(): number
	public get LastDamageTime(): number
	public get MoveSpeed(): number
	/**
	 * A speed `MoveSpeed` cannot exceed, told by a few lookups instead of the sum of its modifiers:
	 * the limit (`MoveSpeedData.Max`) while nothing on the unit lifts it, Infinity while
	 * something does.
	 * @example
	 * // Out of reach in 3 s without reading its speed.
	 * const far = unit.Distance2D(spot) > radius + unit.MoveSpeedCeiling * 3
	 */
	public get MoveSpeedCeiling(): number
	/**
	 * Whether a slow takes some of the unit's move speed: it walks slower than it would unslowed.
	 * @example
	 * const caught = enemy.IsSlowed || enemy.ImmobileUntil > GameState.RawGameTime
	 */
	public get IsSlowed(): boolean
	/**
	 * The share of its move speed the unit's slows take, `0..1`: 0 unslowed, 0.4 walking at 60%
	 * of the speed it would have unslowed.
	 * @example
	 * const crawling = enemy.SlowShare >= 0.4
	 */
	public get SlowShare(): number
	/**
	 * Velocity over the last server tick in units per second, derived from networked positions;
	 * zero while the unit is unseen or has just jumped.
	 */
	public get Velocity(): Vector3
	public get MagicalDamageResist(): number
	/** @deprecated Use MoveSpeed */
	public get Speed(): number
	public get SecondsPerAttack(): number
	public get StatusResistance(): number
	/** The share of attacks on the unit it evades (`UnitModifierManager.Evasion`). */
	public get Evasion(): number
	/**
	 * The share of a debuff's duration of `caster` the unit takes: what its status resistance
	 * against that caster leaves, times the caster's debuff amplification on it - no less than the
	 * game's bound leaves (`StatusResistanceData.Max`).
	 */
	public GetDebuffDurationFactor(caster?: Unit): number
	public get SpellAmp(): number
	public get SpellAmpTarget(): number
	public get EffSpellAmp(): number
	/**
	 * One plus the unit's spell amplification on `target`: some counts only against some targets
	 * (`UnitModifierManager.GetSpellAmplification`).
	 */
	public EffSpellAmpOn(target?: Unit): number
	public get EffSpellAmpTarget(): number
	public get TotalIntellect(): number
	public get NightVisionRange(): number
	public get VisionRange(): number
	/** @deprecated Use DayVisionRange */
	public get DayVision(): number
	/** @deprecated Use NightVisionRange */
	public get NightVision(): number
	/** @deprecated Use VisionRange */
	public get Vision(): number
	public get Color(): Color
	public get MovementTurnRate(): number
	/**
	 * Returns a boolean value indicating if the Unit is a clone.
	 * @returns {boolean}
	 */
	public get IsClone(): boolean
	/**
	 * @description Determines if the instance is the current player's hero.
	 * @returns {boolean}
	 */
	public get IsMyHero(): boolean
	public get IsMovementImpaired(): boolean
	public get GoldBountyAverage(): number
	public get IsIllusion(): boolean
	/** @description e.g: Terror Blade conjure image */
	public get IsReflection(): boolean
	public get IsSuppressCrit(): boolean
	public get IsStrongIllusion(): boolean
	/** @deprecated use IsIllusion or IsStrongIllusion */
	public get IsHiddenIllusion(): boolean
	public get CanReincarnate(): boolean
	public get CanUseAllItems(): boolean
	public get IsFountainInvulnerable(): boolean
	/**
	 * Whether the unit moves and attacks though invulnerable: in its fountain
	 * (`IsFountainInvulnerable`), or Dazzle's soul of Nothl Projection - it walked and hit Chaos
	 * Knight 78 a swing (20 October 2026, demo).
	 */
	public get ActsInvulnerable(): boolean
	public get IsTempestDouble(): boolean
	/** @deprecated use IsChargeOfDarkness */
	public get IsCharge(): boolean
	public get IsChargeOfDarkness(): boolean
	public get IsLinkensProtected(): boolean
	public get CanBeMainHero(): boolean
	public get IsRooted(): boolean
	public get IsCommandRestricted(): boolean
	public get CanUseBackpack(): boolean
	public get IgnoreMoveAndAttackOrders(): boolean
	public get IsUnslowable(): boolean
	public get IsDisarmed(): boolean
	public get IsAttackImmune(): boolean
	public get IsSilenced(): boolean
	public get IsMuted(): boolean
	public get IsAttacksAreMelee(): boolean
	public get IsStunned(): boolean
	public get IsNightmared(): boolean
	public get IsHexed(): boolean
	public get IsPassiveDisabled(): boolean
	public get IsTethered(): boolean
	public get IsInvisible(): boolean
	public get IsNoTeamMoveTo(): boolean
	public get IsInvulnerable(): boolean
	public get IsUntargetable(): boolean
	public get IsMagicImmune(): boolean
	public get IsDebuffImmune(): boolean
	public get IsDeniable(): boolean
	public get IsAttackReady(): boolean
	/**
	 * Whether the unit cannot attack whenever its swing comes: invulnerable - but for one that acts
	 * so (`ActsInvulnerable`) - disarmed, deaf to orders, or with no attack at all - a Proximity
	 * Mine, a ward, a courier. `NO_ATTACK` is the capability 0, no bit a mask could hold: it is the
	 * capability itself, not a flag of it.
	 * @example
	 * if (!summon.IsAttackImpaired) {
	 * 	summon.AttackTarget(enemy)
	 * }
	 */
	public get IsAttackImpaired(): boolean
	public get HasAegis(): boolean
	public get HasIntellect(): boolean
	public get HasNoHealthBar(): boolean
	public get HasNoCollision(): boolean
	/**
	 * Whether ground units have to walk around this one: false for flyers, for units without
	 * collision, and for dummies such as the announcer.
	 */
	public get BlocksPathing(): boolean
	public get IsBlind(): boolean
	public get IsTrueSightImmune(): boolean
	public get IsInFadeTime(): boolean
	public get IsControllableByAnyPlayer(): boolean
	/** @deprecated */
	public get IsRangeAttacker(): boolean
	public get HasShard(): boolean
	public get HasScepter(): boolean
	public get HasInventory(): boolean
	public get HealthBarOffset(): number
	public get WorkshopName(): string
	/**
	 * How far the unit has faded into invisibility, 0 to 1: the furthest of its modifiers that
	 * declare `MODIFIER_PROPERTY_INVISIBILITY_LEVEL` (`Modifier.InvisibilityLevel`) - the rest fade
	 * it none, and their fade times are not read.
	 */
	public get InvisibilityLevel(): number
	public get IsControllable(): boolean
	public get IsMelee(): boolean
	public get IsRanged(): boolean
	public get IsSpawned(): boolean
	public get ManaPercent(): number
	public get ManaPercentDecimal(): number
	public get MinimapIcon(): string
	public get MinimapIconSize(): number
	/**
	 * @internal `motion` set the unit down while it is out of sight - a lift, a push: it is where the
	 * motion left it, a hint of it as a particle of its cast is, its way from there unknown.
	 */
	public SetDownUnseen(motion: Motion): void
	/**
	 * The unit's states as the game shows them - out of sight, as the modifiers that came and went
	 * since say (`UnitPrediction.StateMask`) - plus the ones expected after the local player's own
	 * casts (`ExpectState`). `UnitStateNetworked` is the server's mask alone.
	 */
	public get UnitStateMask(): bigint
	public get UnitState(): modifierstate[]
	public get IsGhost(): boolean
	public get IsEthereal(): boolean
	public get CanUseAbilitiesInInvisibility(): boolean
	public get Items(): Item[]
	public get HullRadius(): number
	public get CollisionPadding(): number
	public get PaddedCollisionRadius(): number
	public get ProjectileCollisionSize(): number
	public get PrimaryAttribute(): Attributes
	/** @deprecated use PrimaryAttribute */
	public get PrimaryAtribute(): Attributes
	public get IsRotating(): boolean
	public get IsChanneling(): boolean
	/**
	 * Whether a cast of another spell or item ends the channel the unit is in: it channels one whose
	 * channel does not take casts (`Ability.ChannelTakesCasts`) - Lich casts on through Sinister
	 * Gaze with the Scepter (20 October 2026, demo: Frost Nova in it, the gaze went on).
	 * @example
	 * const holds = hero.CastBreaksChannel // a cast now would end the channel
	 */
	public get CastBreaksChannel(): boolean
	/**
	 * Whether a cast of a spell or an item ends the charge the unit runs at the unit it attacks
	 * (`Modifier.IsCharge`) - Phantom Rush (20 October 2026, demo).
	 * @example
	 * const holds = hero.CastBreaksCharge // a cast now would end the rush
	 */
	public get CastBreaksCharge(): boolean
	/**
	 * Whether a cast of a spell or an item ends the unit's invisibility: it is invisible and none of
	 * its buffs keeps it so through a cast (`Modifier.KeepsInvisibilityOnCast`) - a Power Treads
	 * toggle ended Shadow Blade's, not Shadow Dance's (1 November 2026, demo).
	 * @example
	 * const reveals = hero.CastBreaksInvisibility // a cast now would reveal it
	 */
	public get CastBreaksInvisibility(): boolean
	/**
	 * Whether a cast of `ability` ends the charge the unit runs (`Modifier.IsCharge`): any cast but
	 * one of the ability the charge is of - Onslaught's own step, whose release lets the charge go -
	 * and one the game takes at once beside it (`IMMEDIATE`) where the charge lets it
	 * (`Modifier.ChargeTakesInstant`): Trample given in Onslaught's windup left the windup on, while
	 * a Pulverize given in the charge stopped it short of the target (20 October 2026, demo).
	 * @example
	 * const holds = hero.CastBreaksChargeWith(spell) // a cast of it now would end the charge
	 */
	public CastBreaksChargeWith(ability: Ability): boolean
	/**
	 * Whether the unit is busy with a cast an order would cut short: one of its spells in its cast
	 * point, or winding up after it (`Ability.IsWindingUp`) - Hoof Stomp.
	 */
	public get IsInAbilityPhase(): boolean
	/**
	 * Whether the unit is busy only with a windup a walk order steers (`Ability.SteeredInWindup`):
	 * it walks where ordered with it, no cast point of its on.
	 */
	public get IsSteeredInWindup(): boolean
	public get PhysicalDamageResist(): number
	public get Name(): string
	/**
	 * Game time the unit's position was last known: now while it is seen; while it is not, its last
	 * sighting, or a hint of it since - a particle of its cast, a teleport, a fog position a script
	 * set (maphack's, `LastPredictedPositionUpdate`).
	 * @example
	 * const unseenFor = GameState.RawGameTime - enemy.SeenAt
	 */
	public get SeenAt(): number
	/**
	 * Whether the unit, unseen, still walks the course it was last seen on: no hint placed it off
	 * that course since it went out of sight, which would leave its way from there unknown - one
	 * where the walk had it carries the walk on from there (`HintAt`) - and our sight did not rule
	 * it out - walked on, it would have come into a cell we see (`CourseRuledOut`).
	 */
	public get CourseKnown(): boolean
	/**
	 * @internal A hint - a particle the game ties to the unit - shows it at `position` now. Out
	 * of sight, one within its hull of where its walk had it keeps the course it was last seen on,
	 * walked on from the hint; one anywhere else leaves its way from there unknown (`CourseKnown`).
	 */
	public HintAt(position: Vector3): void
	/**
	 * Changes of course per second the unit is expected to make - starts, stops and turns of its
	 * walk - as it was seen to make them of late: high for one that jukes, low for one that walks
	 * its way. A skill shot reads from it how likely the unit keeps its course until it lands.
	 * @example
	 * const keepsCourse = Math.exp(-enemy.CourseChangeRate * hitTime)
	 */
	public get CourseChangeRate(): number
	public get RealPosition(): Vector3
	/**
	 * Where the unit is: while seen, where the server puts it; while not, where it was last known
	 * (`PredictedPosition`) - its last sighting, or the latest hint of it since, the SDK's or a
	 * script's: a fog position set with it (`FogVisiblePosition`) is not taken over a newer hint.
	 */
	public get Position(): Vector3
	public get HasFlyingVision(): boolean
	/**
	 * Whether the unit moves over trees and cliffs as a flyer does: one with flying vision - a
	 * flyer by nature or by a modifier (`MODIFIER_STATE_FLYING`) - or one flying for pathing
	 * only (`MODIFIER_STATE_FLYING_FOR_PATHING_PURPOSES_ONLY`).
	 */
	public get FliesForPathing(): boolean
	/** Whether the unit walks through trees (`MODIFIER_STATE_ALLOW_PATHING_THROUGH_TREES`). */
	public get PathsThroughTrees(): boolean
	public get HasVisualShield(): boolean
	public get ShouldDoFlyHeightVisual(): boolean
	public get SlowResistance(): number
	/** @deprecated use HasVisualShield */
	public get IsShield(): boolean
	public get IsFlyingVisually(): boolean
	public get IsGloballyTargetable(): boolean
	public get ShouldUnifyOrders(): boolean
	/**
	 * The layout of a health bar split into `pips` segments on this screen, as the game lays it
	 * out: every length is the one at 768px of screen height scaled to the screen, a segment at
	 * most 8 of those wide and the bar at most 60, segments narrowing to share that but never
	 * under 4, the frame and the gap between segments 1, each rounded up. Couriers carry 2 (one
	 * per 3 HP), wards 2.
	 * @example
	 * const bar = Unit.GetPipHealthBar(2)
	 * const corner = screenPoint.Subtract(bar.PositionCorrection)
	 */
	public static GetPipHealthBar(pips: number): IPipHealthBar
	/** The health bar's size on screen, a segmented bar's ({@link GetPipHealthBar}) included */
	public get HealthBarSize(): Vector2
	/** What takes the projected health bar point ({@link HealthBarOffset}) to the bar's top-left corner */
	public get HealthBarPositionCorrection(): Vector2
	/**
	 * The projected health bar point ({@link HealthBarOffset} over `origin`, the unit's own position
	 * by default) on the pixel the game draws the bar at, into `out`: the point as the game projects
	 * it, its fraction cut toward the middle of the screen. Fits 115 hero bars measured on
	 * screenshots at 1920x1080. Undefined when the point is off the screen.
	 * @example
	 * const anchor = new Vector2()
	 * if (enemy.HealthBarAnchor(enemy.Position, anchor) !== undefined) {
	 * 	const bar = enemy.GetHeroHealthBar(anchor)
	 * }
	 */
	public HealthBarAnchor(origin?: Vector3, out?: Vector2): Nullable<Vector2>
	/**
	 * {@link HealthBarAnchor} as a render anchor that follows the unit: what is painted relative to
	 * it (MenuSDK `Canvas.Anchor`) is placed when the frame is presented, on the pixel the game draws
	 * the bar at, so it stays on the bar while the camera and the unit move even on a frame whose
	 * script pass ran late. Subtract {@link HealthBarPositionCorrection} to stand on the bar's
	 * top-left corner. Kept for the unit's life and freed with it; the offset is re-read on access.
	 * A destroyed unit answers an anchor that is never defined, so what is pinned to it stays hidden.
	 * @example
	 * canvas.Anchor(unit.HealthBarRenderAnchor)
	 * canvas.Rect(unit.HealthBarPositionCorrection.Negate(), unit.HealthBarSize, { color })
	 */
	public get HealthBarRenderAnchor(): CRenderAnchor
	/**
	 * A render anchor on the unit's origin that follows it: what is painted relative to it (MenuSDK
	 * `Canvas.Anchor`) is placed when the frame is presented, where the unit stands then. Kept for
	 * the unit's life and freed with it, so nothing a script pins to a unit needs an anchor of its
	 * own. The core starts reading a unit's origin one present after the first access: take the
	 * anchor when the unit is first tracked, not on the frame its content first shows, and switch
	 * what is drawn between this and a world anchor rather than redefining one anchor. A destroyed
	 * unit answers an anchor that is never defined.
	 * @example
	 * canvas.Anchor(unit.OriginRenderAnchor)
	 * canvas.Text("illusion", new Vector2(0, -20))
	 */
	public get OriginRenderAnchor(): CRenderAnchor
	/**
	 * The bar the game draws over a hero, or over a unit a player controls (a bear, a familiar, a
	 * brewling), standing on `anchor` ({@link HealthBarAnchor}): the frame, the health and mana
	 * rows, and for a hero the level box and the icon, with {@link IHeroHealthBar.Bounds} around
	 * them all. Laid out for the camera at its default distance.
	 * @example
	 * const anchor = hero.HealthBarAnchor()
	 * if (anchor !== undefined) {
	 * 	const bar = hero.GetHeroHealthBar(anchor)
	 * 	const beside = new Vector2(bar.Bounds.Right + 2, bar.Frame.y)
	 * }
	 */
	public GetHeroHealthBar(anchor: Vector2): IHeroHealthBar
	/**
	 * {@link GetHeroHealthBar} for a unit that is not there: a bar standing on `anchor`, with a mana
	 * row when `hasMana`, and the level box and the icon of a hero at `level`, none without it.
	 * @example
	 * const bar = Unit.LayHeroHealthBar(new Vector2(960, 540), true, 30)
	 */
	public static LayHeroHealthBar(anchor: Vector2, hasMana: boolean, level?: number): IHeroHealthBar
	/**
	 * Segments of the health bar, as the game splits the bar of a unit that counts attacks
	 * (Nether Ward, Tombstone, couriers…); 0 for a plain bar.
	 */
	public get HealthBarPips(): number
	/**
	 * HP an attack of `attacker`'s takes off this unit when it counts attacks rather than damage
	 * (Nether Ward, Tombstone, couriers…); undefined when attacks deal damage to it.
	 * {@link GetAttackDamage} returns it for such a target.
	 */
	public GetAttackHitDamage(attacker: Unit): Nullable<number>
	public get HeroFacet(): string
	public get IsConvertManaCostToHPCost(): boolean
	public get IsAvoidTotalDamage(): boolean
	/**
	 * Game time the unit's hold - the states that keep it where it stands - begins: `now` while the
	 * game shows one (`UnitPrediction.StateMask`), else the moment the first one a cast of ours
	 * brings lands; `Infinity` when none is on it or expected. A shot landing between it and
	 * `ImmobileUntil` finds it standing.
	 */
	public get ImmobileFrom(): number
	/** Game time the unit can move again; `now` while nothing holds it. */
	public get ImmobileUntil(): number
	/**
	 * Game time until which the unit lacks every one of `capabilities`: for each, the latest end
	 * of the states taking it away (`CapabilityLosses`) - those expected of casts on their way
	 * included - and for the walk the end of a push, pull or lift carrying it; the earliest of
	 * those. `now` when it has any of them.
	 * @example
	 * if (enemy.LostUntil(EUnitCapability.Fight) > landsAt) {
	 * 	// still out of the fight when the next disable would land: chain it to the end instead
	 * }
	 */
	public LostUntil(capabilities: EUnitCapability): number
	/** Game time the unit can be hit again; the moment itself already counts. */
	public get InvulnerableUntil(): number
	/** Game time magic damage lands on the unit again. */
	public get SpellImmuneUntil(): number
	/** Game time debuffs stick to the unit again: what Black King Bar and its kin grant. */
	public get DebuffImmuneUntil(): number
	/**
	 * The threats that reach this unit within `PredictionTuning.ThreatHorizon` along its
	 * predicted path and can affect it when they land, earliest first. Worked out once a tick and
	 * the same for every reader of that tick; a threat that comes or goes in between has it worked
	 * out again.
	 */
	public get Threats(): readonly Threat[]
	/**
	 * Game time the next attack animation can begin: after the backswing of the last attack, or
	 * after the attack in progress lands and its backswing runs.
	 */
	public get NextAttackTime(): number
	public AttackDamageType(target: Unit): DAMAGE_TYPES
	/**
	 * @description example: panorama/images/heroes/npc_dota_hero_windrunner_png.vtex_c
	 */
	public TexturePath(small?: boolean, team?: Team): Nullable<string>
	public IsAbsoluteNoDamage(damageType: DAMAGE_TYPES, target: Unit): boolean
	public IsMagicAttackDamage(target: Unit): boolean
	/**
	 * Whether the enemy team sees the unit: a known viewer of theirs has it in sight
	 * (`IsInEnemySight`), a modifier on it gives them its vision, or the game told that they
	 * caught sight of it within the last `seconds` (`IsVisibleForEnemiesLastTime`) - the one
	 * word on a viewer hidden from us, kept only that long since the game never tells when it
	 * looks away.
	 */
	public IsVisibleForEnemies(seconds?: number): boolean
	public GetMagicalDamageResist(ignoreMagicResist?: boolean): number
	public GetMoveSpeedModifier(baseSpeed?: number, isUnslowable?: boolean): number
	/**
	 * The move speed this unit would have with `percentage` percent more of its speed - the bonus a
	 * buff not yet on it gives (`Ability.SpeedsUp`): Guardian Sprint, Phase Boots - as the game adds
	 * it to the bonuses it has, under its speed limit.
	 * @example
	 * const faster = hero.MoveSpeedWith(sprint.SpeedsUp(hero))
	 */
	public MoveSpeedWith(percentage: number): number
	/**
	 * The move speed this unit is expected to have at the game time `time`: the modifiers on it
	 * gone by then pass over and the ones fading read as they will be (`UnitModifierManager.ReadAt`)
	 * - a slow running out, a haste ending, Viper Strike's slow wearing off - and the changes on
	 * their way count from their landing (`Prediction.IncomingSpeed`): an Ethereal Blade in flight
	 * slows it from the moment it lands, cut by its slow resistance as the slows on it are.
	 * `percentage` more of its speed besides, as `MoveSpeedWith` takes it. Its speed now for a time
	 * that has passed.
	 * @example
	 * // How fast the enemy runs once the Ethereal Blade flying at it has landed.
	 * const slowed = enemy.MoveSpeedAt(lands + GameState.TickInterval)
	 */
	public MoveSpeedAt(time: number, percentage?: number): number
	/**
	 * How far this unit walks from the game time `from` to `to` at the speed it is expected to
	 * have meanwhile (`MoveSpeedAt`): a slow on its way cuts the walk from its landing, a buff
	 * running out from its end. `percentage` more of its speed besides, as `MoveSpeedWith` takes
	 * it. Only the walk: what holds or carries the unit meanwhile is the caller's to leave out. A
	 * time that has passed is walked at its speed now.
	 * @example
	 * // How far an enemy runs while an Ethereal Blade flies at it and the second after it lands.
	 * const run = enemy.WalkDistance(GameState.RawGameTime, lands + 1)
	 */
	public WalkDistance(from: number, to: number, percentage?: number): number
	public GetAttackRangeModifier(baseAttackRange?: number): number
	public GetCastRangeBonus(baseCastRange: number): number
	public GetAttackSpeedModifier(baseAttackSpeed?: number): number
	public GetPhysicalArmorModifier(baseArmor?: number): number
	public GetPredictiveArmorModifier(target: Unit): number
	public GetPiercingArmorModifier(target: Unit): number
	public GetPhysicalDamageResist(predictiveArmor?: number): number
	/**
	 * The unit's own attack damage, before its modifiers. A swing rolls anywhere between the
	 * minimum and the maximum, so the minimum is the only number a decision that has to hold -
	 * a last hit, a deny, a kill - can be taken on, and it is what this and every damage method
	 * here answer when no roll is named.
	 */
	public GetAttackDamageBase(damageValue?: ATTACK_DAMAGE_STRENGTH): number
	public GetAttackDamageBonus(baseDamage?: number, target?: Unit): number
	/**
	 * The share of damage of `damageType` from `target` - `rawDamage` of it - the unit takes, as
	 * its modifiers have it; `breaks` for a hit that breaks it first (`IModifierParams.Breaks`).
	 */
	public GetEffectiveIncomingDamage(target: Unit, damageType: DAMAGE_TYPES, rawDamage?: number, breaks?: boolean, isAttack?: boolean): number
	/**
	 * The share of its damage on `target` the unit deals (`UnitModifierManager.GetOutgoingDamage`);
	 * `illusionShare` false: an illusion's share left out.
	 */
	public GetEffectiveOutgoingDamage(target: Unit, damageType: DAMAGE_TYPES, isAttack?: boolean, illusionShare?: boolean): number
	public GetTimeVisionModifier(baseVision: number, isNight: boolean, ignoreFixedVision?: boolean): number
	public GetNextAttackPoint(delay: number, nth?: number): number
	public GetProjectileStartingPosition(activity: GameActivity, seqVariant: number, attackPoint: number, hasteFactor: number, pos: Vector3, ang: QAngle, scale?: number): Vector3
	public CanMove(checkChanneling?: boolean, checkAbilityPhase?: boolean): boolean
	public CanAttack(target?: Unit, checkChanneling?: boolean, checkAbilityPhase?: boolean, additionalRange?: number, checkAttackRange?: boolean): boolean
	public CanHitAttackImmune(target: Unit): boolean
	/** @deprecated - use custom logic in script */
	public HealthBarPosition(useHpBarOffset?: boolean, overridePosition?: Vector3): Nullable<Vector2>
	public GetAttackRange(target?: Entity, additional?: number, includeHull?: boolean): number
	/**
	 * What the unit's blocks and shields take off a blow of `damage` of `damageType` from `source`,
	 * a block taking a player's damage only (Living Armor) any source's when it is not given;
	 * `isRaw` for those taken before its resistances (Infused Raindrop).
	 */
	public GetDamageBlock(damage: number, damageType: DAMAGE_TYPES, isRaw?: boolean, source?: Unit): number
	/**
	 * The physical damage the unit's shields take off a blow before anything else. A melee hero
	 * blocks the game mode's innate amount on a share of the blows only, so `damageValue` decides
	 * how much of it counts: all of it for the minimum roll, its chance for the average, none for
	 * the maximum. `breaks` for an attack that breaks the unit first (`IModifierParams.Breaks`):
	 * Kraken Shell blocks none of it.
	 */
	public GetPassiveDamageBlock(damageType: DAMAGE_TYPES, damageValue?: ATTACK_DAMAGE_STRENGTH, breaks?: boolean): number
	public GetEffectiveDamageResist(target: Unit, ignoreMagicAttack?: boolean, predictiveArmor?: number): number
	public GetIncomingAttackDamage(target: Unit, isRaw: boolean): number
	public GetRawAttackDamage(target: Unit, damageValueType?: ATTACK_DAMAGE_STRENGTH, critMulDamage?: number): number
	public GetAttackDamageTypeResist(target: Unit, damageType: DAMAGE_TYPES, rawDamageBase: number): number
	public GetAttackDamagePure(target: Unit, rawDamageBase: number): number
	public GetAttackDamageMagic(target: Unit, rawDamageBase: number): number
	/**
	 * The damage one attack of this unit takes off `target`: the roll `damageValue` names, the
	 * bonuses its modifiers add, the block the target's shields hold back and the target's armor,
	 * resistances and amplifications. The roll is the minimum by default, which is what a last
	 * hit is decided on; the maximum is the other end of the same swing, never what it deals.
	 * @example
	 * const landsAt = GameState.RawGameTime + hero.GetAttackLandingTime(creep)
	 * if (creep.HealthAt(landsAt, hero) <= hero.GetAttackDamage(creep)) {
	 * 	hero.AttackTarget(creep)
	 * }
	 */
	public GetAttackDamage(target: Unit, damageValue?: ATTACK_DAMAGE_STRENGTH, overrideRawDamage?: number, damageType?: DAMAGE_TYPES, predictedArmor?: number, canDamageBlockMelee?: boolean): number
	/**
	 * The share of damage of `damageType` from `source` the unit takes: of physical damage the
	 * source's crit and the armor, then the unit's incoming and the source's outgoing damage
	 * (`illusionShare` false: an illusion's share left out).
	 */
	public GetDamageAmplification(source: Unit, damageType: DAMAGE_TYPES, predictiveArmor?: number, ignoreMagicResist?: boolean, ignoreMagicAttack?: boolean, rawDamage?: number, breaks?: boolean, isAttack?: boolean, illusionShare?: boolean): number
	/**
	 * Whether the unit's next attack on `target` breaks it before it lands: it ends Silver Edge's
	 * Shadow Walk on a unit not a building (`modifier_item_silver_edge_windwalk`) - measured: the
	 * hit skips a passive the Break turns off.
	 */
	public AttackBreaks(target: Unit): boolean
	public VelocityWaypoint(delay: number, movespeed?: number): Vector3
	public GetItemByName(name: string | RegExp, includeBackpack?: boolean): Nullable<Item>
	public GetItemByClass<T extends Item>(class_: Constructor<T>, includeBackpack?: boolean): Nullable<T>
	public HasItemInInventory(name: string | RegExp, includeBackpack?: boolean): boolean
	/**
	 * @param flag if not exists => is Melee or Range attack
	 */
	public HasAttackCapability(flag?: DOTAUnitAttackCapability): boolean
	/**
	 * @param flag if not exists => isn't move NONE
	 */
	public HasMoveCapability(flag?: DOTAUnitMoveCapability): boolean
	public IsUnitStateFlagSet(flag: modifierstate): boolean
	public IsControllableByPlayer(playerID: number): boolean
	/**
	 * @internal
	 * @deprecated
	 */
	public ForwardNativeProperties(healthBarOffset: number): void
	/**
	 * @param fromCenterToCenter include HullRadiuses (for Units)
	 */
	public Distance(vec: Vector3 | Entity, fromCenterToCenter?: boolean): number
	/**
	 * @param fromCenterToCenter include HullRadiuses (for Units)
	 */
	public Distance2D(vec: Vector3 | Vector2 | Entity, fromCenterToCenter?: boolean): number
	public GetAbilityByName(name: string | RegExp): Nullable<Ability>
	public GetAbilityByClass<T extends Ability>(class_: Constructor<T>): Nullable<T>
	/**
	 * The first of `Buffs` named `name`, looked up by name rather than through every buff.
	 * @example
	 * const haste = hero.GetBuffByName("modifier_rune_haste")
	 */
	public GetBuffByName(name: string): Nullable<Modifier>
	/** Whether one of `Buffs` is named `name`, looked up by name rather than through every buff. */
	public HasBuffByName(name: string): boolean
	/**
	 * Puts `buff` on the unit: last in `Buffs`, and last of its name.
	 * @internal
	 */
	public AddBuff(buff: Modifier): void
	/**
	 * Takes `buff` off the unit, out of `Buffs` and out of its name's.
	 * @internal
	 */
	public RemoveBuff(buff: Modifier): void
	public GetBuffByRegexp(regex: RegExp): Nullable<Modifier>
	public GetBuffByClass<T extends Modifier>(class_: Constructor<T>): Nullable<T>
	public GetAnyBuffByNames(names: string[]): Nullable<Modifier>
	public HasAnyBuffByNames(names: string[]): boolean
	/**
	 * @description faster (Distance <= range)
	 * @param fromCenterToCenter include HullRadiuses (for Units)
	 */
	public IsInRange(ent: Vector3 | Entity, range: number, fromCenterToCenter?: boolean): boolean
	/** ================================ Turn Time ======================================= */
	/** @deprecated */
	public GetTurnTime(angle: number | Vector3, currentTurnRate?: boolean, rotationDiff?: boolean): number
	/** @deprecated */
	public GetRotationTime(vec: Vector3, currentTurnRate?: boolean): number
	/** @deprecated */
	public TurnTime(angle: number, currentTurnRate?: boolean): number
	public TurnRate(currentTurnRate?: boolean): number
	/**
	 * `yaw` turned toward `heading` the short way round, by no more than the unit turns in
	 * `seconds` at the rate {@link TurnTime} assumes: 30 × {@link TurnRate} radians a second,
	 * without the game's turn acceleration. Both in degrees, `yaw` from -180 up; the result lies in
	 * [0, 360).
	 * @example
	 * angles.y = courier.TurnYawToward(angles.y, position.GetAngleTo(next), Math.min(dt, 0.1))
	 */
	public TurnYawToward(yaw: number, heading: number, seconds: number): number
	/**
	 * Degrees the unit turns in `seconds` at the rate {@link TurnTime} assumes: 30 × {@link TurnRate}
	 * radians a second, without the game's turn acceleration - what a tick of turning covers once
	 * the unit turns at speed, for a tolerance of facing.
	 * @example
	 * const facing = Math.abs(Vector3.NormalizeAngle(yaw - heading)) <= hero.TurnDegrees(GameState.TickInterval)
	 */
	public TurnDegrees(seconds: number): number
	/**
	 * Seconds the unit needs to turn `angle` radians from its heading: to face a path only as
	 * far as walking needs when `movement`, all the way otherwise.
	 */
	public TurnTimeForAngle(angle: number, movement: boolean): number
	public TurnTimeNew(target: Vector3, movement: boolean, directionalMovement?: boolean, currentTurnRate?: boolean): number
	/**
	 * Seconds the unit needs to turn until it faces `target` within `slack` degrees - for a spell
	 * the game sends the way the unit looks, with no turn of its own, which lands only that near the
	 * line: Pounce. A cast at a unit or a point is let go by the game farther off (`TurnTimeNew`).
	 * Added 21 October 2026: Pounce let go 15 degrees off from 664 flew 172 past Sand King's middle.
	 * @example
	 * const turn = slark.TurnTimeWithin(enemy.Position, 10)
	 */
	public TurnTimeWithin(target: Vector3, slack: number): number
	public IsInside(vec: Vector3, radius: number): boolean
	public IsManaEnough(abil: Ability): boolean
	/**
	 * Whether a Linken's Sphere blocks a targeted spell `time` seconds from now: its own sphere ready
	 * by then, or the block an ally's sphere gave it still standing then.
	 */
	public HasLinkenAtTime(time?: number): boolean
	public CalculateActivityModifiers(activity: GameActivity, ar: string[]): void
	public GetAnimationID(activity?: GameActivity, sequenceNum?: number, findBestMatch?: boolean): Nullable<number>
	public GetAnimation(activity?: GameActivity, sequenceNum?: number, findBestMatch?: boolean): Nullable<AnimationData>
	public GetAttachmentPosition(name: string, activity?: GameActivity, sequenceNum?: number, time?: number, pos?: Vector3, ang?: QAngle, scale?: number): Vector3
	public ExtendUntilWall(start: Vector3, direction: Vector3, distance: number): Vector3
	/**
	 * The share of its speed a projectile this unit fires keeps at `position`: Faceless Void's
	 * Distortion Field takes its share off an enemy attack projectile inside it, his Time Zone
	 * slows an enemy projectile and hurries his own. 1 where no field reaches the point, which
	 * is the usual answer.
	 */
	public ProjectileSpeedFactor(position: Vector3, isAttack: boolean): number
	/**
	 * Seconds a projectile of `source` flying at `speed` from `from` needs to reach this unit
	 * at `to`, its own position by default. The game moves a projectile once a tick straight at
	 * `to`, height and all, and lands it on the first tick from which the rest of the way fits
	 * into one more step - the way until its run over the ground comes within this unit's
	 * collision size: a shot from below or above lands once it is over the unit, whatever height
	 * is left. So the flight is a whole number of ticks and one step shorter than the way reads.
	 * A field that changes the projectile's speed counts over the chord it cuts out of the way,
	 * and holds the answer at `Infinity` when it leaves no speed at all.
	 * @example
	 * const flight = creep.ProjectileFlightTime(hero, hero.Position, hero.AttackProjectileSpeed)
	 */
	public ProjectileFlightTime(source: Unit, from: Vector3, speed: number, isAttack?: boolean, to?: Vector3): number
	/**
	 * Seconds a projectile of `source` at `speed`, launched at `from` in `after` seconds, needs
	 * to reach this unit while it keeps moving: the flight is solved against where this unit
	 * will be when the projectile arrives, since a projectile follows its target - one walking
	 * in is reached sooner than the shot was aimed and one walking away later. It walks for `walks`
	 * seconds from now and stands from then on: split by Manta there, the projectile flies on to
	 * where it stood. `ProjectileFlightTime` answers the same for a point that does not move.
	 * @example
	 * const flight = creep.ProjectileArrivalTime(hero, hero.Position, hero.AttackProjectileSpeed)
	 */
	public ProjectileArrivalTime(source: Unit, from: Vector3, speed: number, isAttack?: boolean, after?: number, walks?: number): number
	/**
	 * Where this unit is expected to be `delay` seconds from now: exact for a known motion or an
	 * own move order, walked along the heading around obstacles otherwise.
	 * @example
	 * const ahead = enemy.PredictPosition(0.6)
	 * if (ahead.Confidence >= EMovementConfidence.Straight) { ... }
	 */
	public PredictPosition(delay: number, options?: IMovementOptions, out?: MovementPrediction): MovementPrediction
	/** The route this unit is expected to walk over `duration` seconds, a point every `step` seconds. */
	public PredictPath(duration: number, step?: number, options?: IMovementOptions): Path
	/** Every cell this unit can reach within `delay` seconds, the turn it must make first included. */
	public PredictRegion(delay: number): ReachableRegion
	/**
	 * The farthest this unit can be at the game time `to` from where it is at `from`: carried by
	 * a motion, walking whenever nothing holds it, whichever way it likes.
	 * @example
	 * // How far a hero gets from where Cataclysm placed its strikes by the time they land.
	 * const reach = enemy.ReachBetween(lands - sunStrike.ActivationDelay, lands)
	 */
	public ReachBetween(from: number, to: number): number
	/**
	 * The route this unit would walk to `to`, with its own hull, flight and collision state.
	 * @example
	 * const path = hero.FindPath(InputManager.CursorOnWorld)
	 */
	public FindPath(to: Vector3, options?: IPathOptions): Nullable<Path>
	/**
	 * Seconds of walking along the route to `to`, setting out now; `Infinity` without a route. A
	 * unit the map's currents speed (`PathSpeedMap`) walks with the full bonus while the route
	 * goes a current's way from its start, and the rest without any: the bonus it has now holds
	 * only while it does. The walk goes at the speed the unit is expected to have meanwhile
	 * (`WalkDistance`): a slow on its way to it, a haste running out, take their share from when
	 * they come.
	 */
	public TimeToReach(to: Vector3, options?: IPathOptions): number
	/**
	 * Records that this unit is expected to hold `state` until the game time `until`, as right
	 * after a disable was cast at it; `UnitStateMask` counts it until the server confirms it or
	 * the time passes.
	 * @example
	 * target.ExpectState(modifierstate.MODIFIER_STATE_STUNNED, GameState.RawGameTime + stun.GetAppliedDuration(target))
	 */
	public ExpectState(state: modifierstate, until: number, showsBy?: number): void
	/**
	 * Records that this unit is expected to be carried through `motion` - a push of the local
	 * player's own on its way, as `Ability.MotionOn` gives it - so `PredictPosition` past the
	 * motion's start follows it, after any motion it is in before; the motion the game shows
	 * confirms and replaces it, and one the game never shows is dropped by itself.
	 * @example
	 * const push = blast.MotionOn(enemy, hero.Position, enemy.Position, landsAt)
	 * if (push !== undefined) {
	 * 	enemy.ExpectMotion(push)
	 * }
	 */
	public ExpectMotion(motion: Motion): void
	/** The unit is no longer expected to be carried through `motion`: the cast was cut. */
	public ForgetMotion(motion: Motion): void
	/**
	 * Game time the unit stops being in `state`: the later of the expected state and the
	 * modifiers observed to bring the networked one; `now` when it is not in the state,
	 * `Infinity` when nothing with a duration explains it.
	 */
	public StateUntil(state: modifierstate): number
	/**
	 * The unit a spell of `from` cast at this one, landing at game time `time`, goes to instead:
	 * Planar Pocket's Spirit Breaker for a spell of his enemy (`MODIFIER_PROPERTY_REDIRECT_SPELL`, the
	 * modifier's caster) - a cast a Linken's Sphere would take, an item's too
	 * (`Ability.TriggersSpellBlock`); none by default.
	 * @example
	 * const lands = !finger.TriggersSpellBlock || enemy.RedirectsAt(landsAt, hero) === undefined
	 */
	public RedirectsAt(time: number, from: Unit): Nullable<Unit>
	/**
	 * Whether a targeted spell landing at the game time `time` is taken off this unit: by a Linken's
	 * Sphere, or a shell that takes what it sends back (`AbsorbsAt`) - Counterspell. A Lotus Orb
	 * sends the spell back and lets it land (`LotusAt`): no block.
	 */
	public SpellBlockAt(time: number): boolean
	/**
	 * Whether a shell standing at the game time `time` sends a targeted spell back and takes it -
	 * declaring both `MODIFIER_PROPERTY_REFLECT_SPELL` and `MODIFIER_PROPERTY_ABSORB_SPELL`:
	 * Counterspell.
	 */
	public AbsorbsAt(time: number): boolean
	/**
	 * Whether a targeted spell landing at the game time `time` meets a Linken's Sphere: up then -
	 * one spell pops it, and the next one goes through.
	 */
	public LinkenAt(time: number): boolean
	/**
	 * Whether a targeted spell landing at the game time `time` is sent back by a Lotus Orb's shell
	 * or Anti-Mage's Counterspell standing then: every one is, until the shell ends - one landing
	 * in the tick it ends too (`ShellStandsAt`).
	 */
	public ReflectsAt(time: number): boolean
	/**
	 * Whether a Lotus Orb's shell stands at the game time `time`: it sends a targeted spell landing
	 * then back at its caster, the spell taking the unit all the same - unlike Counterspell, which
	 * blocks what it sends back (`ReflectsAt`): a shell that reflects
	 * (`MODIFIER_PROPERTY_REFLECT_SPELL`) and absorbs nothing (`MODIFIER_PROPERTY_ABSORB_SPELL`).
	 */
	public LotusAt(time: number): boolean
	/**
	 * Health at the game time `time`: the regeneration and the heals over time on it until then
	 * added (`HealOverTimeUntil`), the blows on their way that land by then and the ticks of the
	 * damage over time on it due by then (`DamageOverTimeUntil`) taken off, never past the maximum
	 * and never below zero. The blows of
	 * `except` are left out: the unit asking about its own attack does not count it twice.
	 * Those blows and those ticks count at the roll `incoming`, the lowest by default, which reads
	 * the health high while several are on their way - only the ticks that surely land; a last hit
	 * racing other units wants the average.
	 * @example
	 * const landsAt = GameState.RawGameTime + hero.GetAttackLandingTime(creep)
	 * const left = creep.HealthAt(landsAt, hero, ATTACK_DAMAGE_STRENGTH.DAMAGE_AVG)
	 * if (left > 0 && left <= hero.GetAttackDamage(creep)) {
	 * 	hero.AttackTarget(creep)
	 * }
	 */
	public HealthAt(time: number, except?: Unit, incoming?: ATTACK_DAMAGE_STRENGTH): number
	/**
	 * The next swings of the units attacking this one that land within `horizon` seconds, at the
	 * roll `strength` - the highest by default - into `out`, cleared first: each unit alive and
	 * seen whose last swing went at this one (`LastSwingTarget`) no longer ago than two of its
	 * attack intervals swings again at its rate (`AttacksPerSecond`) from that swing on - at once
	 * when the next is due already - each landing its attack point - as its last swing's played
	 * (`LastSwingPoint`) - and its projectile's flight after it begins, dealing what it deals with
	 * the unit's hits landing before it counted (`GetSwingDamage`) and stunning as it does
	 * (`IncomingDamageEntry.Stuns`), landing no sooner than its quickest swing begun on the tick
	 * its cooldown runs out in would (`QuickestSwingPoint`, `IncomingDamageEntry.EarliestAt`); the
	 * swing it is in is a blow on its way already (`IncomingDamage`). A unit that has not swung at
	 * this one yet - one turning on it, one coming at it - lands its first blow as `FirstSwings` has it.
	 * @example
	 * const harm = hero.NextSwings(1).reduce((sum, swing) => sum + swing.MaxDamage, 0)
	 */
	public NextSwings(horizon: number, strength?: ATTACK_DAMAGE_STRENGTH, out?: IncomingDamageEntry[]): IncomingDamageEntry[]
	/**
	 * The first blows the enemies of this unit not attacking it may land within `horizon` seconds,
	 * at the roll `strength` - the highest by default - into `out`, cleared first: each alive, seen,
	 * able to hit it and not among those whose next swings are foreseen (`NextSwings`) may turn on
	 * it at any moment - its swing begun as soon as its attack is ready (its last swing's interval
	 * run out), it faces this one (`TurnTime`), or it has walked into its attack reach straight at
	 * it - landing its quickest swing's point (`QuickestSwingPoint`) and its projectile's flight
	 * after: the soonest each may land (`IncomingDamageEntry.LandsAt`), any later time as likely.
	 * @example
	 * const soonest = hero.FirstSwings(1).reduce((at, blow) => Math.min(at, blow.LandsAt), Infinity)
	 */
	public FirstSwings(horizon: number, strength?: ATTACK_DAMAGE_STRENGTH, out?: IncomingDamageEntry[]): IncomingDamageEntry[]
	/**
	 * The damage this unit takes from its own attacks within `horizon` seconds - each one it
	 * launches hurts it through the modifiers that act on it (`Modifier.DamageOnOwnAttack`:
	 * Snakebite) - into `out`, cleared first: one blow a modifier at each attack point it reaches
	 * (`IncomingDamageEntry.LandsAt`), from the modifier's caster, of its ability's damage type: the
	 * swing it is in, its point still ahead (`LastSwingStart`, `LastSwingPoint`), and while it keeps
	 * attacking the unit it last swung at - alive and seen, the swing no longer ago than two of its
	 * attack intervals - one more every attack interval (`AttacksPerSecond`).
	 * @example
	 * const punished = hero.OwnAttackHits(1).reduce((sum, hit) => sum + hit.MaxDamage, 0)
	 */
	public OwnAttackHits(horizon: number, out?: IncomingDamageEntry[]): IncomingDamageEntry[]
	/**
	 * Game times the attacks on this unit land within `horizon` seconds, in order, into `out`,
	 * cleared first: those on their way (`IncomingDamage`) and the next swings (`NextSwings`).
	 */
	public HitsLanding(horizon: number, out?: number[]): number[]
	/**
	 * The blows the enemies around this unit deal it within `horizon` seconds when something sets
	 * them off, into `out`, cleared first (`Modifier.TriggeredBlows`): Counter Helix's spins as the
	 * hits on Axe count down.
	 * @example
	 * const spins = hero.TriggeredBlows(1).reduce((sum, blow) => sum + blow.MaxDamage, 0)
	 */
	public TriggeredBlows(horizon: number, out?: IncomingDamageEntry[]): IncomingDamageEntry[]
	/**
	 * Notes a swing this unit began now at the unit with the index `target`, its attack point played
	 * in `point` seconds (the animation's cast point; 0 unknown): `LastSwingTarget`,
	 * `LastSwingStart`, `LastSwingPoint`, and the quickest one `QuickestSwingPoint` reads.
	 */
	public SwingBegan(target: number, point: number): void
	/**
	 * Seconds its quickest swing takes to its attack point at its haste now - its attack animations
	 * differ, a swing not begun plays any of them, each its point shortened by the haste
	 * (`AttackHasteFactor`): the soonest its next blow may land (`IncomingDamageEntry.EarliestAt`);
	 * its `AttackPoint` before it swung.
	 */
	public get QuickestSwingPoint(): number
	/**
	 * What this unit's attack takes off `target` at the roll `strength`, `hitsAhead` of its hits on
	 * it landing before (`IModifierParams.HitsAhead`) - its procs that count hits read their count
	 * that many hits on - with its chance procs (`Modifier.SwingProc`) as the roll goes: at the
	 * highest each comes, its crit the largest one; at the average each weighed by its chance; at
	 * the lowest none. `started` for a swing begun: a crit its animation shows is in already.
	 * `shielded` false: the target's shields left out (`UnitModifierManager.Unshielded`) - a
	 * reckoning spending them blow by blow takes them off itself (`ShieldLedger`).
	 * @example
	 * const third = ursa.GetSwingDamage(hero, ATTACK_DAMAGE_STRENGTH.DAMAGE_MAX, 2)
	 */
	public GetSwingDamage(target: Unit, strength: ATTACK_DAMAGE_STRENGTH, hitsAhead: number, started?: boolean, shielded?: boolean): number
	/** Whether what this unit's attacks deal or bring depends on its hits so far (`Modifier.CountsHits`). */
	public get CountsHits(): boolean
	/**
	 * Seconds this unit's attack stuns `target` for as it lands, `hitsAhead` of its hits on it
	 * landing before: its longest bash (`Modifier.SwingStun`); 0 for none.
	 */
	public SwingStun(target: Unit, hitsAhead?: number): number
	/**
	 * The attacks on their way to this unit from the one with the index `source`
	 * (`IncomingDamage`): the hits of it landing before its next swing's.
	 */
	public AttacksOnWayFrom(source: number): number
	/**
	 * The enemies of this unit that may join those attacking it within `within` seconds, into
	 * `out`, cleared first: alive, seen, with an attack, out of their attack reach of it and not
	 * swinging at it - none of their blows is foreseen (`NextSwings`) - whose walk takes them into
	 * that reach: where each is (`PredictPosition`) when, both going on as they go now, it comes
	 * nearest this one within `within` seconds - a walk at it that would run past it is read where
	 * it reaches it, not where it ends.
	 * @example
	 * const nobodyComing = hero.ClosingIn(1).length === 0
	 */
	public ClosingIn(within: number, out?: Unit[]): Unit[]
	/**
	 * The least health `HealthAt` gives the unit at any time from now on, of the same blows - but
	 * `except`'s - and ticks at the roll `incoming`: all of them taken off, its regeneration and
	 * heals left out; 0 while it regenerates down, which runs out any health in time.
	 * @example
	 * const unkillable = enemy.LeastHealth(hero) - enemy.KillThresholdAt(now) > mostDamage
	 */
	public LeastHealth(except?: Unit, incoming?: ATTACK_DAMAGE_STRENGTH): number
	/**
	 * The first game time within `horizon` seconds that this unit's health runs out by the blows on
	 * their way to it and the damage over time already on it, at the highest roll (`HealthAt`) -
	 * `Infinity` when it lives through - with the invulnerability standing on it now
	 * (`InvulnerableUntil`) and the least health on it now (`MIN_HEALTH`: Shallow Grave), and what
	 * `rescue` brings: an instant heal landing at a moment, an invulnerability standing over a
	 * stretch, which the ticks and the blows meeting it miss as they miss the one on it, an attack
	 * immunity standing over a stretch, which the attacks landing in it miss, a least
	 * health standing over a stretch, which keeps the unit's health at 1 at the lowest while the
	 * blows land, a dispel landing at a moment, which stops the damage over time of what it takes
	 * off. Tick
	 * by tick, what it gains is capped at its maximum health as it stands then: a heal makes up what
	 * was taken before it.
	 * @example
	 * const dies = hero.DiesAt(3)
	 * const up = hero.ResponseTime(greaves)
	 * const saved = hero.DiesAt(3, { Heal: greaves.GetHealthRestore(hero), HealAt: up }) === Infinity
	 */
	public DiesAt(horizon: number, rescue?: IRescue): number
	/**
	 * The capabilities this unit lacks now (`CapabilitiesLost`) that a dispel of strength `dispel`
	 * cast on it gives back: those every modifier on it taking them away lets that dispel take off
	 * (`Modifier.DispelledBy`) - a basic one a root, a silence, a mute; a stun only a strong one.
	 * None of them while another modifier it leaves keeps it.
	 * @example
	 * const freed = hero.DispelFrees(manta.DispelsCaster) // EUnitCapability.Move under Frostbite
	 */
	public DispelFrees(dispel: SPELL_DISPELLABLE_TYPES): EUnitCapability
	/**
	 * The damage over time the modifiers a dispel of strength `dispel` takes off this unit
	 * (`Modifier.DispelledBy`) would still deal it after the game time `from` - the dispel landing
	 * then - at the highest roll, as they would with no dispel (`Modifier.DamageUntil`).
	 * @example
	 * const spared = hero.DispelSpares(manta.DispelsCaster, hero.ResponseTime(manta))
	 */
	public DispelSpares(dispel: SPELL_DISPELLABLE_TYPES, from: number): number
	/**
	 * The health the heals over time give the unit from now until the game time `time`, beyond its
	 * regeneration - the game leaves them out of `HPRegen`: of each modifier on it while it lasts
	 * (`Modifier.HealPerSecond`) - Cold Embrace, Voodoo Restoration, Living Armor - and of those
	 * that heal the units around their parents (`Modifier.HealersAround`): Nature's Attendants. Heal
	 * amplification is not weighed.
	 */
	public HealOverTimeUntil(time: number): number
	/**
	 * Health regeneration a second the unit would have with `health` of `maxHealth` and `strength` -
	 * as it stands by default: the game's now (`HPRegen`) with what its strength gives
	 * (`HealthRegenPerStrength`) and what its modifiers give by its health and strength
	 * (`Modifier.HealthRegenWith`: Berserker's Blood) moved there.
	 * @example
	 * const atLow = huskar.HealthRegenAt(100) // Berserker's Blood near its full
	 */
	public HealthRegenAt(health: number, maxHealth?: number, strength?: number): number
	/**
	 * The share of a magic blow's damage the unit would take with `health` of `maxHealth` against
	 * what it takes now: its modifiers' resistance by its health (`Modifier.MagicResistWith`:
	 * Berserker's Blood) moved there, each multiplying what gets through as the game stacks them.
	 * @example
	 * const later = spellDamage * huskar.MagicTakenAt(600)
	 */
	public MagicTakenAt(health: number, maxHealth?: number): number
	/**
	 * The damage the damage over time on the unit deals it from now until the game time `time` at
	 * the roll `strength` - the lowest, what surely lands, by default: the ticks of every modifier
	 * that keeps damaging it (`Modifier.DamageUntil`) - an Urn, a Frostbite, a Poison Touch - and of
	 * the units around that keep damaging it (`Modifier.DamagersAround`) - a Death Ward, the Serpent
	 * Wards - due by then, all through its shields in turn (`ShieldLedger`) - those `pool` holds,
	 * spending them, when given: what other blows left; of the damage `type` alone when given. The
	 * rum's hangover among them never kills (`SpareDamageUntil`). `hits`, when given, takes each
	 * tick it counts, as they come - `DamageOverTimeHits` gives them in the order they land.
	 */
	public DamageOverTimeUntil(time: number, strength?: ATTACK_DAMAGE_STRENGTH, type?: DAMAGE_TYPES, pool?: ShieldLedger, hits?: DamageHits): number
	/**
	 * The ticks the damage over time on the unit deals it from now until the game time `time` at
	 * the roll `strength` - the lowest, those that surely land, by default - one by one into `out`,
	 * cleared first, in the order they land: what `DamageOverTimeUntil` sums. Each with the game
	 * time it lands, what it deals the unit after and before what the unit takes of it, the ability
	 * it is dealt through and its kind of damage (`DamageHits`). A tick finds the health and the
	 * shields the ones before it left, whichever modifier dealt them.
	 * @example
	 * // whether a burn takes the creep before the hero's attack lands
	 * const ticks = creep.DamageOverTimeHits(landsAt, ATTACK_DAMAGE_STRENGTH.DAMAGE_MAX, hits)
	 * let health = creep.HP
	 * for (let i = 0; i < ticks.Count && health > 0; i++) {
	 * 	health -= ticks.Dealt[i]
	 * }
	 */
	public DamageOverTimeHits(time: number, strength?: ATTACK_DAMAGE_STRENGTH, out?: DamageHits): DamageHits
	/**
	 * The part of `DamageOverTimeUntil` that never kills the unit (`Modifier.NeverKills`): the rum's
	 * hangover, which leaves it 1 health at least.
	 * @example
	 * // the hangover leaves the hero standing: only the rest may finish it
	 * const lethal = hero.DamageOverTimeUntil(time) - hero.SpareDamageUntil(time)
	 */
	public SpareDamageUntil(time: number, strength?: ATTACK_DAMAGE_STRENGTH): number
	/**
	 * Game time the last tick of the damage over time on the unit is due, of those
	 * `DamageOverTimeUntil` counts at the roll `strength` - the lowest by default
	 * (`Modifier.DamageEndsAt`): until when its health still falls by it. `-Infinity` while none is
	 * on it.
	 */
	public DamageOverTimeEndsAt(strength?: ATTACK_DAMAGE_STRENGTH): number
	/**
	 * Game time the damage over time on the unit may hurt it next after game time `from` - now by
	 * default - as soon as it may (`Modifier.NextDamageTickAt`); `Infinity` while none is on it.
	 * @example
	 * if (hero.NextDamageTickAt() > GameState.RawGameTime + toggle) {
	 * 	// no tick lands while Armlet turns
	 * }
	 */
	public NextDamageTickAt(from?: number): number
	/**
	 * Health at or below which a blow landing at the game time `time` kills the unit - Ice Blast's
	 * frostbite shattering it below `kill_pct` (`Modifier.KillThreshold`), which acts on the hits the
	 * unit takes (`MODIFIER_EVENT_ON_TAKEDAMAGE`); 0 by default.
	 * @example
	 * if (enemy.HealthAt(landsAt) - damage <= enemy.KillThresholdAt(landsAt)) {
	 * 	// the blow finishes it
	 * }
	 */
	public KillThresholdAt(time: number): number
	/**
	 * Health below which a hit landing at the game time `time` that the unit outlives sets off
	 * what keeps it alive from then on (`Modifier.SavesBelow`): Borrowed Time's passive, which acts
	 * on the hits the unit takes (`MODIFIER_EVENT_ON_TAKEDAMAGE`) - a blow that kills outright it
	 * does not stop; 0 for none.
	 * @example
	 * const wasted = left - firstBlow > 0 && left - firstBlow < enemy.SavedBelowAt(landsAt)
	 */
	public SavedBelowAt(time: number): number
	/**
	 * Whether something keeps the unit alive through `damageType` landing at the game time
	 * `time`: Shallow Grave, Borrowed Time, False Promise, a ready Reincarnation or Aeon Disk, the
	 * ghost form of Ghost Scepter and Ethereal Blade against physical damage - of the modifiers that
	 * declare what the game saves a unit by (`DeathKeys`). Without `reincarnation` a reincarnation
	 * does not count (`Modifier.Reincarnates`): the death comes, and the unit stands up again.
	 */
	public PreventsDeathAt(time: number, damageType: DAMAGE_TYPES, reincarnation?: boolean): boolean
	/**
	 * Whether `damage` of `damageType` landing at the game time `time` brings the unit down on
	 * top of the blows already on their way, with nothing keeping it alive then. Those blows
	 * count at the roll `incoming`, the lowest by default.
	 */
	public IsKillableAt(time: number, damage: number, damageType?: DAMAGE_TYPES, attacker?: Unit, incoming?: ATTACK_DAMAGE_STRENGTH): boolean
	/**
	 * Plays `abilities` on this unit in order and tells whether they kill it: each cast waits
	 * for the one before it, lands by its own timeline, spends its mana from the budget of its
	 * owner by `ManaAt`, finds the shields and barriers as the blows before left them
	 * (`ShieldLedger`), and the health regenerates until every blow lands. An ability on
	 * cooldown, out of mana or unable to affect the target by then is left out of `Used`.
	 * @example
	 * const kill = enemy.SimulateKill([laguna, dragonSlave], { WithAttack: true })
	 * if (kill.Killable) {
	 * 	laguna.UseAbility(enemy)
	 * }
	 */
	public SimulateKill(abilities: readonly Ability[], options?: IKillSimulationOptions): IKillSimulation
	/**
	 * What `attackers` can do to this unit while it can do nothing until the game time `until` -
	 * held by a stun, a hex: each plays its spells and items that deal damage - ready, in mana and
	 * within reach by their own timelines, landing by then with every tick of their damage over
	 * time due by then - the unit held cannot dispel it (`SimulateKill`, the average roll) - and
	 * attacks for the time left; the damage of all of them on top of the blows already on their way to the unit
	 * (`HealthAt`). By default the enemy heroes: towers, creeps and illusions count when passed.
	 * Each attacker plays on its own, the unit's shields counted for each. A forecast for a threat,
	 * not for every frame.
	 * @example
	 * const held = hero.HoldForecast(threat.ImpactTime(hero, horizon) + stun.GetAppliedDuration(hero))
	 * if (!held.Survives) {
	 * 	// the control that lands is deadly: answer it first
	 * }
	 */
	public HoldForecast(until: number, attackers?: readonly Unit[]): IHoldForecast
	/**
	 * Whether `response`, cast on this unit now - or at `at` for the states it puts on its caster
	 * (`ResponseTime`) - is done before `threat` lands: a blink, a Black King Bar or a cyclone
	 * answers a threat only when its cast point and activation fit before the impact.
	 */
	public CanResolve(threat: Threat, response: Ability, at?: Unit | Vector3): boolean
	/**
	 * Game time `response`, cast on this unit now - or at `at` for the states it puts on its caster:
	 * Omnislash at an enemy (`Ability.StatesTargetOf`) - takes effect: its order's way to the
	 * server, the turn to `at`, its cast point and the delay of its states (`Ability.StateDelay`,
	 * its activation for most). The order goes as an escape, past a script's orders the humanizer still
	 * holds, with no pause or reaction of the unit's. A state it lays lasts from then on.
	 * @example
	 * const lands = threat.ImpactTime(hero, PredictionSDK.Tuning.ThreatHorizon)
	 * const centred = hero.ResponseTime(manta) + manta.GetAppliedDuration(hero) / 2 >= lands
	 */
	public ResponseTime(response: Ability, at?: Unit | Vector3): number
	/**
	 * The closest spot this unit can walk to before the earliest of `threats` lands that no
	 * threat in the store covers, with the moment the walk has to start; `undefined` when
	 * there is none in time, or when every threat is bound to this unit and walking answers
	 * none of them. The
	 * cells the grid holds as blocked never come up, so the answer does not run into trees or
	 * cliffs. A spot ahead beats one behind by the time the turn would take, and among spots
	 * equally near the one needing the smallest turn wins. A spot is taken with half a grid
	 * cell to spare beyond the threat's edge, the resolution spots are placed at, so a shape
	 * laid again a tick later does not put it back inside; when no such spot is reachable in
	 * time, one just past the edge is. With `speedUp` - a buff that quickens the unit
	 * (`Ability.SpeedsUp`): Guardian Sprint, Phase Boots - the walk starts once the buff is up
	 * (`ResponseTime`), at the speed it gives (`MoveSpeedWith`), its cast counted in `Escape.Travel`.
	 * The walk goes as far as the speed the unit is expected to have on the way takes it
	 * (`WalkDistance`): a slow flying at it cuts it from its landing. A field lying over the spot
	 * the unit stands at (`Threat.Lingers`: Macropyre, Rot) it walks out of at once - each moment in
	 * it hurts, there is no last moment to wait for - to the nearest clear spot it gets to within
	 * the horizon, or before the next of the others lands; one still coming, at its last moment, as
	 * any landing. A caller that leaves the unit in a field leaves it out of `threats`.
	 * @example
	 * const escape = hero.Escape()
	 * if (escape !== undefined && escape.Due) {
	 * 	hero.MoveTo(escape.Position)
	 * }
	 */
	public Escape(threats?: readonly Threat[], speedUp?: Ability): Nullable<Escape>
	/**
	 * Where a cast of `ability` - a blink, a push, a dash, as it sets this unit down
	 * (`Ability.MotionOn`) - takes this unit clear of `threats`, with the moment it has to go: of
	 * the spots it lands at cast each way round the unit, as far as its cast range and nearer, cast
	 * at the ground under the cursor that gives the orders (`ExecuteOrder.CursorPoint`) - a cast the
	 * humanizer's cursor needs no glide to - and cast as its double tap (`Ability.DoubleTapPoint`:
	 * Blink Dagger toward the fountain), which needs no cursor at all, the one `spot` asks for
	 * (`EEscapeSpot`) - the nearest to where the unit stands, the farthest from it, or its double tap
	 * first - that the unit can stand at and no threat in the store covers,
	 * that it lands at before the earliest of `threats` it takes the unit out of lands
	 * (`escapeDeadline`): out of the reach of a cast at it still in its cast point, out of the
	 * area of a projectile it dodges; its way there through nothing that covers it as it passes
	 * (`ThreatStore.CoversAt`); none nearer to an enemy hero seen than the unit stands, while
	 * another spot will do. A cast at a point counts the turn to it that way; the cast's point is
	 * `Escape.Position` - for one moving the unit along its facing (`Ability.MovesAlongFacing`:
	 * Force Staff's push, Leap) the way it turns to first, its turn counted; for another not cast
	 * at a point, which sets the unit down the same way wherever it is aimed, a point that tells
	 * nothing; for one aimed at a unit to move this one (`Ability.MovesOnto`: Phantom Strike to it,
	 * Hurricane Pike back from an enemy - each enemy in its reach beside the ways it faces) that
	 * unit, `Escape.Target`. With `turns` off - a click would not go, orders bound to the cursor -
	 * one moving the unit along its facing goes the way the unit faces now, one cast at a point only
	 * where it needs no click away from the cursor: its double tap or the ground under the cursor -
	 * and none goes at a unit or a point it has to be aimed at (`Ability.MovesTo`). For one
	 * cast at a point, first such a spot straight ahead, the way the unit faces, out to its reach:
	 * no time lost on a turn; for one moving the unit along its facing, which sets it down as far
	 * whichever way, the one it lands at first - the least turn. Its dispatch, its turn, its cast
	 * point and the motion are `Escape.Travel` - the order's own lag is the deadline's
	 * (`Escape.Deadline`). `undefined` for an ability that moves this unit nowhere, with no such
	 * spot, or with no threat it takes the unit out of.
	 * @example
	 * const escape = hero.BlinkEscape(blink, hero.Threats, true, EEscapeSpot.Home)
	 * if (escape !== undefined && escape.Due) {
	 * 	hero.CastPosition(blink, escape.Position)
	 * }
	 */
	public BlinkEscape(ability: Ability, threats?: readonly Threat[], turns?: boolean, spot?: EEscapeSpot): Nullable<Escape>
	/**
	 * Where a cast of `ability` takes this unit out of the reach of `spell` before the game time
	 * `lands` (`Ability.SoonestLandingOn`): a spot farther from the spell's caster than a cast at
	 * the unit reaches with its buffer (`Ability.BreakRangeOf`), or than the radius a cast at
	 * nothing takes (`Ability.ReachOf`). A cast that moves the spell's caster too (`Ability.MovesTo`,
	 * `Ability.MotionOn`) is measured from where it leaves him; with `parting` no other cast will
	 * do. `undefined` for a spell with no caster, or no such spot.
	 * @example
	 * const away = hero.BlinkOutOfReach(blink, hex, hex.SoonestLandingOn(hero))
	 * if (away !== undefined && away.Due) {
	 * 	hero.CastPosition(blink, away.Position)
	 * }
	 */
	public BlinkOutOfReach(ability: Ability, spell: Ability, lands: number, turns?: boolean, spot?: EEscapeSpot, parting?: boolean): Nullable<Escape>
	/**
	 * The units `ability` may be cast at from where this unit stands, with no walk to them - seen,
	 * alive, not this one, within its cast range and their hull: where a blink cast at a unit takes
	 * this one (`Ability.MovesOnto`). Refilled on each call.
	 * @example
	 * const creeps = hero.TargetsInReach(strike).filter(unit => unit.IsCreep)
	 */
	public TargetsInReach(ability: Ability): readonly Unit[]
	/** Mana at the game time `time` by the current regeneration, at most the maximum. */
	public ManaAt(time: number): number
	/**
	 * Game time the unit can move without losing an attack: the attack point of the animation
	 * it is in, `now` while idle or in backswing.
	 */
	public get CanMoveAfterAttackAt(): number
	/** Seconds the cast point or channel in progress keeps the unit from starting another cast. */
	public get CastBusyTime(): number
	/**
	 * Seconds the cast point or channel in progress keeps the unit from starting a cast of
	 * `ability`: one that ignores a channel (`IGNORE_CHANNEL`) goes in it - Crystal Clone cast in
	 * Freezing Field hopped Crystal Maiden at once, the channel going on (20 October 2026).
	 * @example
	 * const startsIn = hero.CastBusyTimeFor(glimmer) // no channel's rest, a cast point's rest
	 */
	public CastBusyTimeFor(ability: Ability): number
	/**
	 * Seconds until this unit's next attack on `target` lands, the way an attack order would
	 * play out: the attack in progress or the backswing left to wait, input lag for the local
	 * player's units, walking into range along the grid, turning, the next attack point and, for
	 * a ranged unit with `includeProjectile`, the projectile's flight to where the target will
	 * be when it arrives: the projectile follows the target, so a target walking in is reached
	 * sooner than the shot was aimed and one walking away later, and the flight is solved for
	 * that rather than aimed at where the target stands when the arrow leaves.
	 * @example
	 * const landsAt = GameState.RawGameTime + hero.GetAttackLandingTime(creep)
	 */
	public GetAttackLandingTime(target: Unit, includeProjectile?: boolean): number
	public GetPredictionPosition(delay?: number, useUntilWall?: boolean, forceMovement?: boolean): Vector3
	public ChangeFieldsByEvents(): void
	/**
	 * Casts `ability` the way its behaviour asks: its autocast or toggle switched on when asked to
	 * check them, else at nothing, at the point of `target` or at `target` itself. The order it
	 * gave; none for an ability cast in none of these ways.
	 */
	public UseSmartAbility(ability: Ability, target?: Vector3 | Entity, checkAutoCast?: boolean, checkToggled?: boolean, queue?: boolean, showEffects?: boolean): Nullable<ExecuteOrder>
	public MoveTo(position: Vector3, queue?: boolean, showEffects?: boolean): ExecuteOrder
	public MoveToTarget(target: Entity | number, queue?: boolean, showEffects?: boolean): ExecuteOrder
	public AttackMove(position: Vector3, queue?: boolean, showEffects?: boolean): ExecuteOrder
	public AttackTarget(target: Entity | number, queue?: boolean, showEffects?: boolean): ExecuteOrder
	public CastPosition(ability: Ability, position: Vector3, queue?: boolean, showEffects?: boolean): ExecuteOrder
	public PurchaseItem(itemID: number, queue?: boolean, showEffects?: boolean): ExecuteOrder
	public CastTarget(ability: Ability, target: Entity | number, queue?: boolean, showEffects?: boolean): ExecuteOrder
	public CastTargetTree(ability: Ability, tree: Tree | TempTree | number, queue?: boolean, showEffects?: boolean): ExecuteOrder
	public CastNoTarget(ability: Ability, queue?: boolean, showEffects?: boolean): ExecuteOrder
	public CastToggle(ability: Ability, queue?: boolean, showEffects?: boolean): ExecuteOrder
	public CastAltToggle(ability: Ability, queue?: boolean, showEffects?: boolean): ExecuteOrder
	public HoldPosition(position: Vector3, queue?: boolean, showEffects?: boolean): ExecuteOrder
	public TrainAbility(ability: Ability): ExecuteOrder
	public DropItemAtFountain(item: Item, queue?: boolean, showEffects?: boolean, slot?: DOTAScriptInventorySlot): ExecuteOrder
	public DropItem(item: Item, position: Vector3, queue?: boolean, showEffects?: boolean): ExecuteOrder
	public GiveItem(item: Item, target: Entity | number, queue?: boolean, showEffects?: boolean): ExecuteOrder
	public PickupItem(physicalItem: PhysicalItem | number, queue?: boolean, showEffects?: boolean): ExecuteOrder
	public PickupRune(rune: Rune | number, queue?: boolean, showEffects?: boolean): ExecuteOrder
	public SellItem(item: Item): ExecuteOrder
	public DisassembleItem(item: Item, queue?: boolean): ExecuteOrder
	public ItemSetCombineLock(item: Item, lock?: boolean | number, queue?: boolean): ExecuteOrder
	public TakeItemFromNeutralStash(item: Item): ExecuteOrder
	public MoveItem(item: Item, slot: DOTAScriptInventorySlot): ExecuteOrder
	public CastToggleAuto(item: Ability, queue?: boolean, showEffects?: boolean): ExecuteOrder
	public OrderStop(queue?: boolean, showEffects?: boolean): ExecuteOrder
	public UnitTaunt(queue?: boolean, showEffects?: boolean): ExecuteOrder
	public EjectItemFromStash(item: Item): ExecuteOrder
	public CastRune(runeItem: Item | number, queue?: boolean, showEffects?: boolean): ExecuteOrder
	public PingAbility(ability: Ability): ExecuteOrder
	public MoveToDirection(position: Vector3, queue?: boolean, showEffects?: boolean): ExecuteOrder
	public Patrol(position: Vector3, queue?: boolean, showEffects?: boolean): ExecuteOrder
	public VectorTargetPosition(ability: Ability, direction: Vector3, target?: Nullable<Entity | number>, queue?: boolean, showEffects?: boolean): ExecuteOrder
	/**
	 * Casts the vector-targeted `ability` from `position` - a point, or a unit and its point -
	 * toward `direction`: the direction's order, then the cast's, which it returns. The cast does
	 * not take the place of its own direction while both wait in the queue.
	 * @example
	 * hero.CastVectorTargetPosition(iceWall, enemy, enemy.Position.Extend2D(hero.Position, -300))
	 */
	public CastVectorTargetPosition(ability: Ability, position: Vector3 | Unit, direction: Vector3, queue?: boolean, showEffects?: boolean): ExecuteOrder
	public ItemLock(item: Item, state?: boolean): ExecuteOrder
	public OrderContinue(item: Item, queue?: boolean, showEffects?: boolean): ExecuteOrder
	public VectorTargetCanceled(position: Vector3, queue?: boolean, showEffects?: boolean): ExecuteOrder
}
