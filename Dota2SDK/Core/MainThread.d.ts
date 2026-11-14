// AUTO-GENERATED - do not edit.
/**
 * The queue for work that needs a main-thread session of the game, such as a write to a Panorama
 * panel. Each frame, what was queued runs inside one session, one task after another in the order
 * it was queued, so no two tasks reach the engine at once. A frame that comes while the previous
 * batch is still running starts nothing, and what it would have run waits for a later frame.
 * Use the `MainThread` instance.
 */
declare class CMainThread {
	/** How many tasks wait for a flush. A batch that is already running is not counted. */
	public get QueuedCount(): number
	/**
	 * Queues work for the next per-frame flush and resolves with its result. The task may be
	 * sync or async, and may await native operations — the session is held for the whole batch.
	 * @example
	 * await MainThread.Queue(() => Source2SDK.Panorama.Find("DotaHud", "map_render")?.SetVisible(false))
	 */
	public Queue<T>(task: () => T | Promise<T>): Promise<T>
}
/** The SDK's own {@link CMainThread}: the queue its per-frame flush drains. */
declare const MainThread: CMainThread
