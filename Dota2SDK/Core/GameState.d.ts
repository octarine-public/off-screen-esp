// AUTO-GENERATED - do not edit.
/**
 * The state of the game session: ticks and clocks, the map, and what the game's own UI is
 * showing. Each game SDK extends it; use the game's `GameState` instance.
 */
declare class CGameState {
	/**
	 * The instance the SDK itself reads and updates. A game SDK puts its `GameState` here, so
	 * the two are one object.
	 */
	public static Current: CGameState
	/** Seconds per tick assumed until the server states its own. */
	public readonly DefaultTickInterval: number
	/**
	 * Seconds per server tick: the `tick_interval` of the server's info message, or
	 * {@link DefaultTickInterval} before one arrives or when it carries none.
	 */
	public TickInterval: number
	/** The tick the server's last tick message carried. */
	public CurrentServerTick: number
	/**
	 * Ticks of game time: {@link CurrentServerTick} less the ticks spent paused, standing at the
	 * tick a pause began for as long as it lasts. Updated only while the game rules entity exists.
	 */
	public CurrentGameTick: number
	/** Frames drawn so far: goes up by 1 as each frame's draw begins. */
	public CurrentFrame: number
	/** Whether the server's info message says it is a dedicated server; false until one arrives. */
	public IsDedicatedServer: boolean
	/** The map the server's last info message named, or `"<empty>"` when none has. */
	public MapName: string
	/** The `addon_name` of the server's last info message; empty when it carried none. */
	public AddonName: string
	/**
	 * True while a frame's draw events run: `WorldDraw`, `Draw2D`, `PreDraw` and `Draw`. An
	 * entity's `Position` and `Angles` are the frame's interpolated ones then, and the networked
	 * ones otherwise.
	 */
	public IsInDraw: boolean
	/** Whether the game's shop or buy menu is open. The game SDK keeps it. */
	public IsShopOpen: boolean
	/**
	 * True while the in-game menu covers the HUD. The engine reports no such flag, so each game
	 * fills it in from its own UI.
	 */
	public IsEscapeMenuOpen: boolean
	/**
	 * Game clock in seconds: {@link CurrentGameTick} times {@link TickInterval}, so it stands
	 * still during a pause. 0 while there is no game rules entity.
	 */
	public RawGameTime: number
	/** Server clock in seconds: {@link CurrentServerTick} times {@link TickInterval}. */
	public RawServerTime: number
	/** The local player's team, a value of the game's `Team` enum. */
	public LocalTeam: number
	/** Starts at `defaultTickInterval` seconds per tick: 1/64 unless a game SDK passes its own. */
	constructor(defaultTickInterval?: number)
	/**
	 * Round-trip time to the server. A method rather than a property because a game whose net
	 * channel reports the two directions apart passes which one it means.
	 */
	public GetLatency(): number
	/** The engine's average of the latency to the server, in seconds; 0 without a connection. */
	public GetAvgLatency(): number
	/** What {@link GetIOLag} answers for the latency of the moment. */
	public get IOLag(): number
	/** What {@link GetInputLag} answers for the latency of the moment. */
	public get InputLag(): number
	/** Whether a server has named a map: false while {@link MapName} is `"<empty>"`. */
	public get IsConnected(): boolean
	/**
	 * Sends `command` to the server as a console command of this client. It does not run in the
	 * local console: {@link ExecuteClientCommand} does.
	 */
	public ExecuteCommand(command: string): void
	/**
	 * Runs `command` the way the client runs its own input, through the engine's client command
	 * path, so `+`/`-` input commands press and release like the bound key; `false` when the
	 * engine refused it.
	 *
	 * @example
	 * GameState.ExecuteClientCommand("+in_mantle; -in_mantle")
	 */
	public ExecuteClientCommand(command: string): boolean
	/** `latency` seconds rounded up to whole ticks, and never less than one tick. */
	public GetIOLag(latency: number): number
	/**
	 * Seconds from an input leaving the client to the server acting on it, for a `latency` in
	 * seconds: {@link GetIOLag} plus one tick. One tick alone when `latency` is under 0.001 and
	 * the server is not dedicated.
	 */
	public GetInputLag(latency: number): number
}

/**
 * The shared game state with what only Dota reports: which panorama screen is up, whether the game
 * is eating input, and a net channel that measures the two directions apart.
 */
interface CDotaGameState extends CGameState {
	/** @deprecated use GameState.TickInterval */
	LatestTickDelta: number
	IsInputCaptured: boolean
	UIState: DOTAGameUIState
	LocalTeam: Team
	/** @deprecated */
	get Ping(): number
	/** @deprecated */
	get AvgPing(): number
	get IOLag(): number
	get InputLag(): number
	/**
	 * Seconds between an order leaving the client and its result showing in the client's own state,
	 * for a unit that does not have to turn first: the order reaching the server, the server acting
	 * on it the tick after, and the snapshot of that tick coming back.
	 */
	get AnswerLag(): number
	/** Whether the game is the hero demo (the `hero_demo` addon), whatever map it runs on. */
	get IsDemo(): boolean
	/**
	 * Whether a screen overlay would land on the game world right now: connected, with the match
	 * UI up rather than the dashboard or another full-screen panorama page.
	 */
	get CanDrawOverlays(): boolean
	/** Whether this client has the player with `steamID64` muted. */
	IsPlayerMuted(steamID64: bigint): boolean
	/**
	 * Lets the account use voice chat while its communication score is too low for it: the voice
	 * keys, the voice HUD and the party open mic stop treating it as restricted, and the party and
	 * coach voice of restricted players is played. Off by default.
	 */
	SetVoiceBanBypass(enabled: boolean): void
	GetLatency(flow?: Flow): number
	GetAvgLatency(flow?: Flow): number
	/**
	 * Seconds between an order leaving the client and the server acting on it, on the client's
	 * clock of the game: the latency rounded up to whole ticks (`IOLag`) and the tick the server
	 * takes; one tick on a listen server.
	 */
	GetInputLag(latency: number): number
}
declare const GameState: CDotaGameState
