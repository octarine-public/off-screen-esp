// AUTO-GENERATED - do not edit.
/** The full scoreboard the game folds out over the HUD. */
interface CScoreboard extends CHUDSection {
	/** The panel the scoreboard paints itself onto; undefined while it is folded away. */
	get Background(): Nullable<Rectangle>
	/** The Radiant half of the player table. */
	get RadiantTeam(): Nullable<Rectangle>
	/** The Dire half of the player table. */
	get DireTeam(): Nullable<Rectangle>
	/**
	 * True while the game is showing the scoreboard.
	 *
	 * The panel cannot answer this: once the scoreboard has been opened the first time it stays
	 * laid out and visible, and the game folds it away with a CSS transform that never reaches
	 * layout. The convar the game drives it with is the only honest source, read by
	 * {@link CScoreboard.Poll} once a frame.
	 */
	get IsOpen(): boolean
	/** Reads from the game whether the scoreboard is shown, for {@link CScoreboard.IsOpen} to answer until the next call. */
	Poll(): boolean
	DebugDraw(): void
}
