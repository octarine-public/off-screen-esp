// AUTO-GENERATED - do not edit.
/**
 * A queue of one-shot callbacks: each runs once, on the first pass of the queue after the delay
 * it was begun with. Use the `TaskManager` instance.
 */
declare class CTaskManager {
	/** How many tasks have not run yet. */
	public get Size(): number
	/** Whether the task is still waiting: begun, not run yet and not cancelled. */
	public IsValid(handleID: bigint): boolean
	/**
	 * Schedules `callback` to run once, on the first pass of the queue that comes `ms`
	 * milliseconds from now or later. With no delay that is the next pass, or the running one
	 * when a task begins another.
	 * @returns the handle {@link Cancel} and {@link IsValid} take
	 */
	public Begin(callback: () => void, ms?: number): bigint
	/**
	 * Takes a waiting task off the queue, so it never runs, and emits `TaskCancelled` with its
	 * handle. Returns false when no such task is waiting: it ran, was cancelled, or never was.
	 */
	public Cancel(handleID: bigint): boolean
	/**
	 * One pass of the queue: runs every task whose time has come, earliest first, and emits
	 * `TaskReleased` with the handle after each. A task that throws is reported to the console
	 * and released all the same, and the pass goes on. The game SDK calls this itself.
	 */
	public Tick(): void
}
/** The SDK's own {@link CTaskManager}: the one the game SDK calls {@link CTaskManager.Tick} on. */
declare const TaskManager: CTaskManager
