// AUTO-GENERATED - do not edit.
/** Everything source2-sdk publishes, under one name. What is not also a global is reached only here. */
declare const Source2SDK: {
	/** Every entity the SDK holds, by entity index. */
	readonly AllEntitiesAsMap: Map<number, INativeEntity>
	readonly CCameraManager: typeof CCameraManager
	readonly CConVars: typeof CConVars
	readonly CEntityManager: typeof CEntityManager
	readonly CGameState: typeof CGameState
	readonly CInputManager: typeof CInputManager
	readonly CMainThread: typeof CMainThread
	readonly CPanorama: typeof CPanorama
	/**
	 * World-to-screen projection through the engine's own view-projection matrix — the same one the
	 * current frame is rendered with, so results cannot drift from what the player sees.
	 *
	 * `BeginFrame` must run once per frame before anything else; it captures the camera the rest of
	 * the methods project through.
	 */
	readonly CProjection: {
		new (): CProjection
		readonly prototype: CProjection
	}
	readonly CRenderAnchor: typeof CRenderAnchor
	readonly CRenderer: typeof CRenderer
	readonly CSoundSDK: typeof CSoundSDK
	readonly CStringTablesManager: typeof CStringTablesManager
	readonly CTaskManager: typeof CTaskManager
	readonly CWorldDraw: typeof CWorldDraw
	readonly ConVarsSDK: typeof ConVarsSDK
	readonly ERenderAnchorFlags: typeof ERenderAnchorFlags
	/** The game's entities. */
	readonly EntityManager: CEntityManager<INativeEntity>
	readonly Events: typeof Events
	/**
	 * The networked class name a wrapper class was declared under, which is the name the game data
	 * keys everything by — `AbilityStore`, image resolution, the vdata itself. It is the way back
	 * that survives minification: the constructor's own `name` is whatever the bundler left of it,
	 * while this is what `WrapperClass` was told. A class registered under several names answers
	 * with the first, which is the one on its own declaration.
	 */
	GetNameByConstructor(constructor: Constructor<INativeEntity>): Nullable<string>
	/** The keys and mouse buttons held down, and where the cursor is. */
	readonly InputManager: CInputManager
	readonly InputMessage: typeof InputMessage
	/**
	 * Has `Draw2D` fire on the next frame, where it otherwise waits its turn at about 30 passes a
	 * second. One call covers one frame: call it on every frame something the user moves by hand is
	 * on screen, such as a panel being dragged, so the motion does not step.
	 */
	InvalidateDraw2D(): void
	readonly MainThread: typeof MainThread
	/**
	 * The emitter the core fires its events into, each with the arguments the core gave it. `Events`
	 * carries what the SDK makes of them.
	 */
	readonly NativeEvents: EventEmitter<NativeEventsMap>
	readonly NetworkedParticle: typeof NetworkedParticle
	readonly Panel: typeof Panel
	/** The game's Panorama windows and the panels in them. */
	readonly Panorama: CPanorama
	/** World-to-screen projection through the camera of the frame being drawn. */
	readonly Projection: CProjection
	/** The game's viewport: its size, scaling to it, and projection through the game camera. */
	readonly Renderer: CRenderer
	readonly SoundSDK: typeof SoundSDK
	readonly StringTables: typeof StringTables
	readonly TaskManager: typeof TaskManager
	readonly WASM: typeof WASM
	readonly WorldDraw: typeof WorldDraw
}
