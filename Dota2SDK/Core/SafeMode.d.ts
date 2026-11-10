// AUTO-GENERATED - do not edit.
/**
 * Dota's Safe mode, split by what would give a feature away: the Settings tab opens the Safe mode
 * window with a card and a switch for each part. Register a control on the part that answers for
 * it.
 * @example
 * DotaSafeMode.ConVars.RegisterOption(weather, 0)
 */
declare class CDotaSafeMode {
	/**
	 * Valve's server-side anti-cheat, which lines the orders a game sends up with the cursor and
	 * camera they came with. Holds the humanizer off.
	 */
	public readonly ServerAntiCheat: MenuSDK.CSafeModeGroup
	/** Features that write the game's console variables, which the server can read. */
	public readonly ConVars: MenuSDK.CSafeModeGroup
	/**
	 * Features that lift what a low communication score restricts. The game server reports how
	 * long each player talked to Valve after the match.
	 */
	public readonly Communication: MenuSDK.CSafeModeGroup
}
declare const DotaSafeMode: CDotaSafeMode
