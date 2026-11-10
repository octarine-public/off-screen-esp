// AUTO-GENERATED - do not edit.
interface EventsMap {
	Draw: []
	PreDraw: []
	/**
	 * A draw pass at the server's tick rate rather than the frame rate, on a frame that is not
	 * carrying a server tick, just before `PreDraw`. What an overlay draws here stays on screen
	 * until its next pass: a reading that only changes with the game state costs a tick's worth
	 * of work instead of a frame's, and none of it lands on the frames a tick already makes slow.
	 */
	Draw2D: []
	PreDataUpdate: []
	PostDataUpdate: [dt: number]
	GameStarted: []
	GameEnded: []
	ServerInfo: [map: RecursiveProtobuf]
	ServerTick: [
		tick: number,
		hostComputationTime: number,
		hostFrameTimeStdDeviation: number,
		hostComputationTimeStdDeviation: number,
		legacyHostLoss: number,
		hostUnfilteredFrameTime: number,
		hltvReplayFlags: number,
		expectedLongTick: number,
		expectedLongTickReason: string,
		hostFrameDroppedPctX10: number,
		hostFrameIrregularArrivalPctX10: number
	]
	InputCaptured: [isCaptured: boolean]
	LocalTeamChanged: []
	MapDataLoaded: []
	WindowSizeChanged: []
	RemoveAllStringTables: []
	UpdateStringTable: [name: string, update: Map<number, [string, ArrayBuffer]>]
	WorldLayerVisibilityChanged: [layerName: string, state: boolean]
	WorldLayersVisibilityChanged: []
	TaskCancelled: [handleID: bigint]
	TaskReleased: [handleID: bigint]
}

interface EventsMap {
	/**
	 * The frame's world-shape stage, right after the interpolated positions are applied and before
	 * `PreDraw`: what `WorldDraw` is given here is drawn with the camera of the frame on screen.
	 */
	WorldDraw: []
	NewConnection: []
	ConfigsChanged: []
	PanoramaFrame: []
	PanoramaWindowCreate: [windowName: string]
	PanoramaWindowDestroy: [windowName: string]
	ScriptsUpdated: []
	SetLanguage: [language: MenuLanguageID]
	KeyDown: [keyMask: VKeys]
	KeyUp: [keyMask: VKeys]
	CharInput: [char: string]
	MouseKeyDown: [key: VMouseKeys]
	MouseKeyUp: [key: VMouseKeys]
	MouseMove: []
	MouseWheel: [up: boolean]
}

interface NativeEventsMap {
	ConfigsChanged: []
	PanoramaFrame: []
	PanoramaWindowCreate: [windowName: string]
	PanoramaWindowDestroy: [windowName: string]
	CustomGameEvent: [eventName: string, data: RecursiveMap]
	DebuggerPrepareUnitOrders: [isUserInput: boolean, wasCancelled: boolean]
	/** onScreen: the uint32 entity indices of the units on screen, undefined from a core that does not list them */
	Draw: [
		visualData: ArrayBuffer,
		w: number,
		h: number,
		x: number,
		y: number,
		onScreen?: ArrayBuffer
	]
	GCPingResponse: []
	GameEvent: [eventName: string, obj: unknown]
	InputCaptured: [isCaptured: boolean]
	NewConnection: []
	PrepareUnitOrders: []
	ScriptsUpdated: []
	ServerMessage: [msgID: number, buf: ArrayBuffer]
	SetLanguage: [language: MenuLanguageID]
	SharedObjectChanged: [typeID: number, reason: number, msg: ArrayBuffer]
	WndProc: [messageType: number, wParam: bigint, lParam: bigint, x: number, y: number]
}

declare const Events: EventEmitter<EventsMap>

interface EventsMap {
	/**
	 * Emitted before all EntityCreateds.
	 * Same as EntityCreated, but have much less global guarantees
	 * [such as Owner might not be initialized if it was emitted in the same entities packet,
	 * white EntityCreated guarantees that it'll be initialized in that case]
	 */
	PreEntityCreated: [ent: Entity]
	/**
	 * Emitted after all entity properties handlers were called, a.k.a. entity is fully set up
	 * This callback is best suited for use.
	 */
	EntityCreated: [ent: Entity]
	EntityDestroyed: [ent: Entity]
	EntityTeamChanged: [ent: Entity]
	/**
	 * @description Equivalently to Entity#IsVisible
	 */
	EntityVisibleChanged: [entity: Entity]
	UnitVisibleStateChanged: [data: TeamData]
	/** Emitted when `Unit.IsInEnemySight` of a unit of the local team changes (`VisionSDK`). */
	UnitTeamVisibilityChanged: [unit: Unit]
	/** Emitted when a threat comes on its way (`PredictionSDK.Threats`): a cast seen, a projectile, a landing. */
	ThreatAdded: [threat: Threat]
	/** Emitted when a threat is over: it passed, was cancelled, or its sign let go of it. */
	ThreatRemoved: [threat: Threat]
	/** Emitted when a threat hurt `unit`, as the game's `entity_hurt` of its ability says. */
	ThreatLanded: [threat: Threat, unit: Unit]
	FakeUnitCreated: [unit: FakeUnit]
	FakeUnitDestroyed: [unit: FakeUnit]
	/**
	 * Emitted every time GameRules.RawGameTime changes, a.k.a. tick,
	 * right after PostUpdate
	 * @deprecated
	 */
	Tick: [dt: number]
	ControllableByPlayerMaskChanged: [npc: Unit]
	TrueSightedChanged: [npc: Unit]
	HasScepterChanged: [npc: Unit]
	HasShardChanged: [npc: Unit]
	ParticleCreated: [particle: DotaNetworkedParticle]
	ParticleUpdated: [particle: DotaNetworkedParticle]
	ParticleUnitPositionUpdated: [unit: Nullable<FakeUnit | Unit>, particle: Nullable<DotaNetworkedParticle>]
	ParticleReleased: [particle: DotaNetworkedParticle]
	ParticleDestroyed: [particle: DotaNetworkedParticle]
	PrepareUnitOrders: [order: ExecuteOrder]
	/** An order got to the game (`EOrderStage.Sent`) or never will (`EOrderStage.Dropped`). */
	OrderStageChanged: [order: ExecuteOrder]
	DebuggerPrepareUnitOrders: [order: ExecuteOrder, is_user_input: boolean, was_cancelled: boolean]
	LinearProjectileCreated: [proj: LinearProjectile]
	LinearProjectileDestroyed: [proj: LinearProjectile]
	TrackingProjectileCreated: [proj: TrackingProjectile]
	TrackingProjectileUpdated: [proj: TrackingProjectile]
	TrackingProjectileDestroyed: [proj: TrackingProjectile]
	TrackingProjectilesDodged: [ent: Unit | FakeUnit, attacks_only: boolean]
	/**
	 * `startTime` is the game time of the tick the animation began on, also when the client shows
	 * several ticks in one frame: the game sends the message ahead of that tick's own `net_Tick`.
	 */
	UnitAnimation: [npc: Nullable<Unit | FakeUnit>, sequenceVariant: number, playbackrate: number, castpoint: number, type: number, activity: GameActivity, lagCompensationTime: number, rawCastPoint: number, startTime: number]
	UnitAnimationEnd: [npc: Unit | FakeUnit, snap: boolean]
	GameEvent: [eventName: string, obj: any]
	/**
	 * The engine's Speech message has no level field, so the argument list follows the wire
	 * format: `recipient_type` is followed directly by `muteable`.
	 */
	UnitSpeech: [npc: Nullable<Unit | FakeUnit>, concept: number, response: string, recipient_type: number, muteable: boolean, predelay_start: number, predelay_range: number, flags: number, responseType: number]
	UnitSpeechMute: [npc: Nullable<Unit | FakeUnit>, delay: number]
	UnitAddGesture: [npc: Nullable<Unit | FakeUnit>, activity: GameActivity, slot: number, fade_in: number, fade_out: number, playback_rate: number, sequence_variant: number]
	UnitRemoveGesture: [npc: Nullable<Unit | FakeUnit>, activity: number]
	UnitRemoveAllGestures: [npc: Nullable<Unit | FakeUnit>]
	UnitFadeGesture: [npc: Nullable<Unit | FakeUnit>, activity: number]
	GameStateChanged: [newState: DOTAGameState]
	/**
	 * Emitted once per flip of `GameRules.IsNight`: the regular cycle, Nightstalker's night and
	 * temporary day or night alike. Not emitted for the value a match starts with.
	 * @example
	 * EventsSDK.on("DayNightChanged", isNight => {
	 * 	console.log(isNight ? "night" : "day")
	 * })
	 */
	DayNightChanged: [isNight: boolean]
	LifeStateChanged: [ent: Entity]
	UnitAbilitiesChanged: [ent: Unit]
	UnitWearablesChanged: [ent: Unit]
	UnitItemsChanged: [ent: Unit]
	/**
	 * @description Emitted if the properties of an unit have changed
	 * example:
	 * Unit#IsClone
	 * Unit#IsRanged
	 * Unit#IsIllusion
	 * Unit#AttackCapabilities
	 * Unit#IsStrongIllusion
	 * SpiritBear#ShouldRespawn
	 * UNit#IsWaitingToSpawn
	 * */
	UnitPropertyChanged: [unit: Unit]
	NetworkActivityChanged: [npc: Unit]
	ModifierCreated: [mod: Modifier]
	ModifierChanged: [mod: Modifier]
	/**
	 * @description Emitted when the server re-sends a modifier unchanged, which it does for every
	 * modifier of a unit once another team gains vision of that unit
	 */
	ModifierChangedVBE: [mod: Modifier]
	/**
	 * @description Emitted at most once per tick when an allied unit becomes visible to the enemy
	 * team, and when its visible-for-enemies debuffs change
	 */
	UnitVBEModifierChanged: [unit: Unit]
	ModifierRemoved: [mod: Modifier]
	UnitAbilityDataUpdated: []
	/**
	 * @description Includes fog of war
	 */
	UnitLevelChanged: [unit: Unit]
	StartSound: [name: string, source_ent: Nullable<Unit | FakeUnit>, position: Vector3, seed: number, start_time: number]
	ChatEvent: [type: DOTA_CHAT_MESSAGE, value: number, playerid_1: number, playerid_2: number, playerid_3: number, playerid_4: number, playerid_5: number, playerid_6: number, value2: number, value3: number]
	MatchmakingStatsUpdated: [msg: RecursiveMap]
	SharedObjectChanged: [typeID: SOType, reason: number, msg: RecursiveMap]
	HumanizerStateChanged: []
	PlayerResourceUpdated: [playerResource: CPlayerResource]
	/**
	 * @description Includes PlayerResourceUpdated
	 */
	PlayerCustomDataUpdated: [player: PlayerCustomData]
	AttackStarted: [unit: Unit, castPoint: number, animationNames: string[]]
	AttackEnded: [unit: Unit, isCancelled: boolean]
	AbilityPhaseChanged: [ability: Ability]
	AbilityChannelingChanged: [ability: Ability]
	/**
	 * @description Includes fog of war
	 */
	AbilityLevelChanged: [abil: Ability]
	/**
	 * @description NOTE: Includes only changed by network
	 */
	AbilityCooldownChanged: [ability: Ability]
	AbilityHiddenChanged: [ability: Ability]
	MenuConfigChanged: [config: Record<string, unknown>]
	EntityPositionChanged: [entity: Entity]
	UnitStateChanged: [entity: Unit]
	UnitPortalChanged: [model: UnitPortalData]
	UnitPortalDestroyed: [model: UnitPortalData]
	StockInfoChanged: [stock: StockInfo]
	/**
	 * Emitted in PreDraw when a HUD panel read during the previous frame came out at a
	 * different place or size — the HUD was rebuilt, the selection changed, the window was
	 * resized, or the player moved a setting.
	 *
	 * Only panels something actually read are watched, so a script that never asks about the
	 * shop is never woken by it. Ask a single panel with `HUDPanel.HasChanged` when you need to
	 * know which one moved.
	 */
	GUIChanged: []
}

interface NativeEventsMap {
	UIStateChanged: [newState: DOTAGameUIState]
	RequestUserCmd: []
	MatchmakingStatsUpdated: [msg: ArrayBuffer]
	RankData: [
		rankType: ERankType,
		rankValue: number,
		rankData1: number,
		rankData2: number,
		rankData3: number,
		rankData4: number
	]
	DOTAFullHeroGlobalDataUpdated: [obj: unknown]
	/** The account's switch for sharing the changer's items as the server keeps it, and whether the server has said yet */
	ChangerShareEnabledChanged: [enabled: boolean, known: boolean]
	/** The players whose units the changer dresses in the loadouts they share, the whole set each time it changes */
	ChangerSharedPlayersChanged: [playerIDs: number[]]
	/**
	 * A move message went out (Beta native only): its `hrtime`, whether the commands are the
	 * scripts' (false: the game's own) and the commands as the server decodes them.
	 */
	UserCmdSent: [time: number, own: boolean, commands: WireUserCmd[]]
	/**
	 * Orders went out in an ExecuteOrders message (Beta native only): its `hrtime`, the orders,
	 * and whether the game sent them rather than the scripts.
	 */
	OrdersSent: [time: number, orders: WireOrder[], fromGame: boolean]
}

/** A user command as the server decodes it from a move message (`UserCmdSent`). */
interface WireUserCmd {
	readonly tick: number
	/** The cursor's x on the screen, 0..511. */
	readonly mouseX: number
	/** The cursor's y on the screen, 0..384. */
	readonly mouseY: number
	readonly cameraX: number
	readonly cameraY: number
	/** The world point under the cursor (crosshairtrace). */
	readonly underX: number
	readonly underY: number
	readonly underZ: number
	/** The entity under the cursor. */
	readonly weaponSelect: number
	readonly click: number
	/** The buttons held (buttons_pb.buttonstate1..3). */
	readonly buttons1: number
	readonly buttons2: number
	readonly buttons3: number
	readonly forwardMove: number
	readonly leftMove: number
	readonly upMove: number
	/** The view angles' pitch and yaw. */
	readonly pitch: number
	readonly yaw: number
	readonly impulse: number
	readonly cmdFlags: number
	/** How many subtick moves the command carries, and every one's button or-ed. */
	readonly subticks: number
	readonly subtickButtons: number
}

/** An order as it went out in an ExecuteOrders message (`OrdersSent`). */
interface WireOrder {
	readonly sequence: number
	/** Its `dotaunitorder_t`. */
	readonly type: number
	readonly positionX: number
	readonly positionY: number
	readonly positionZ: number
	/** The target's entity index, -1 for none. */
	readonly target: number
	readonly ability: number
	readonly queue: boolean
	/** Whether this message sends it for the first time rather than again. */
	readonly firstSend: boolean
	readonly issuers: number[]
}
