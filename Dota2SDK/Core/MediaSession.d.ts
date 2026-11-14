// AUTO-GENERATED - do not edit.
/**
 * A command for a media player. `playpause`, `play`, `pause`, `next` and `prev` go to it through
 * the Windows media session. `volup` and `voldown` move the player's own volume, the row the
 * volume mixer shows for it, by 0.05 of full and leave every other volume on the machine alone.
 */
type MediaCommand = "playpause" | "play" | "pause" | "next" | "prev" | "volup" | "voldown"
/** What the machine is playing, as the player reported it to Windows. */
interface NowPlaying {
	/** Whether the player reports the track as playing; `false` for a paused or stopped one. */
	readonly playing: boolean
	/** The track title the player published. */
	readonly title: string
	/** The artist the player published. */
	readonly artist: string
	/** The album title the player published. */
	readonly album: string
	/**
	 * Seconds into the track. The system only republishes this on seek, pause and track
	 * change, so it arrives already extrapolated from the last report — a progress bar can
	 * read it every frame and it will move.
	 */
	readonly position: number
	/** Seconds, or `0` when the player does not publish a length (a live stream, say). */
	readonly duration: number
	/** The app reporting it, e.g. `"Spotify.exe"` or `"Chrome"`. */
	readonly source: string
	/**
	 * The cover the player itself is showing, as image bytes — png or jpeg, whatever the
	 * player published. Present only when {@link MediaReadOptions.artwork} asked for it and
	 * the player publishes one; plenty report a title and no picture.
	 *
	 * This is the real artwork rather than a guess: no search that can land on the wrong
	 * album, and nothing leaves the machine to fetch it.
	 */
	readonly artwork?: ArrayBuffer
}
/** Narrows what a read asks the session for. */
interface MediaReadOptions {
	/**
	 * Follow one particular player, named as it appears in {@link MediaSessionSnapshot.sources}.
	 * Left out, the read follows whichever session the system considers current.
	 *
	 * A player that is named but is not running reads as nothing playing, rather than quietly
	 * falling back to another one — a panel told to follow Spotify must not start showing a
	 * browser tab.
	 */
	readonly source?: string
	/**
	 * Ask for the artwork as well. Off by default: it is tens of kilobytes and it travels the
	 * same pipe as everything else, so ask for it when the track changed rather than on every
	 * poll.
	 */
	readonly artwork?: boolean
}
/** One look at the media session: what is playing, and who could be. */
interface MediaSessionSnapshot {
	/** What is playing, or `undefined` when nothing is. */
	readonly track: Nullable<NowPlaying>
	/**
	 * Every app reporting a session right now. Filled in even when nothing is playing, which
	 * is exactly when a user is most likely to be choosing which player to follow.
	 */
	readonly sources: readonly string[]
}
/** Thrown when the media session could not be reached at all. */
interface MediaSessionError extends Error {
}
