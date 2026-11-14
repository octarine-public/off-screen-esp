// AUTO-GENERATED - do not edit.
/**
 * One region of the game's HUD, backed by the panels Panorama lays out for it.
 *
 * Every rectangle a section hands out is the game's own, measured at the last reading; a
 * rectangle is undefined while the panel behind it is gone or takes part in no layout.
 */
interface CHUDSection {
	/** Outlines every panel the section knows about, for `GUIInfo.debugDraw`. */
	DebugDraw(): void
	/**
	 * Brings the section's own rectangles up to date for this reading.
	 *
	 * A rectangle that comes straight off a panel re-measures itself whenever it is read, so a
	 * caller may hold on to it. One the section works out for itself — a panel moved to where
	 * the game paints it, or geometry borrowed from another slot — lives in a rectangle the
	 * section owns, and that one would sit frozen until something read it again. GUIInfo calls
	 * this at every reading, while it is still open, so both kinds behave alike, a held
	 * reference never goes stale, and whatever a section asks about here is answered at once.
	 */
	Refresh(): void
}
