// AUTO-GENERATED - do not edit.
/** Reads and writes the game's console variables by name. Use the `ConVarsSDK` instance. */
declare class CConVars {
	/**
	 * A convar as a boolean: a number is true unless it is 0, and `"true"`, `"false"` and numeric
	 * text are parsed. `defaultValue` when the convar is not found, is a vector, or is text that
	 * is no number.
	 */
	public GetBoolean(convarName: string, defaultValue: boolean): boolean
	/**
	 * A convar as a number; `true` reads as 1 and `false` as 0. `defaultValue` when the convar is
	 * not found, is a vector, or is text that is no number.
	 */
	public GetFloat(convarName: string, defaultValue: number): number
	/** What {@link GetFloat} answers, with the fraction dropped. */
	public GetInt(convarName: string, defaultValue: number): number
	/**
	 * A convar as text; a vector reads as its components joined by spaces. `defaultValue` when
	 * the convar is not found.
	 */
	public GetString(convarName: string, defaultValue: string): string
	/** {@link GetBoolean} for the value the convar starts with, not the one it holds now. */
	public GetDefaultBoolean(convarName: string, defaultValue: boolean): boolean
	/** {@link GetFloat} for the value the convar starts with, not the one it holds now. */
	public GetDefaultFloat(convarName: string, defaultValue: number): number
	/** {@link GetInt} for the value the convar starts with, not the one it holds now. */
	public GetDefaultInt(convarName: string, defaultValue: number): number
	/** {@link GetString} for the value the convar starts with, not the one it holds now. */
	public GetDefaultString(convarName: string, defaultValue: string): string
	/** Sets a convar. Does nothing for an empty name. */
	public Set<T extends string | number | boolean>(name: string, value: T): void
}
/** The game's console variables. */
declare const ConVarsSDK: CConVars
