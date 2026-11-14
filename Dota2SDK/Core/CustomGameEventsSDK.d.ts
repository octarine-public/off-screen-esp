// AUTO-GENERATED - do not edit.
/** The events a custom game's UI sends to the game's server-side scripts, which listen by name. */
declare class CCustomGameEvents {
	/**
	 * Sends the event `name` with `data` to the server, as the custom game's own UI would.
	 * @example
	 * CustomGameEventsSDK.FireEventToServer("my_event", new Map([["value", 1]]))
	 */
	public FireEventToServer(name: string, data: RecursiveMap): void
}
/** The custom game events of the running game. */
declare const CustomGameEventsSDK: CCustomGameEvents
