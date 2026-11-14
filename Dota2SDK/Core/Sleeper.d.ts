// AUTO-GENERATED - do not edit.
/** A per-key cooldown timer backed by the host's high-resolution clock (`hrtime`, in milliseconds). */
declare class Sleeper {
	/**
	 * Sleeps `key` for `ms` milliseconds and returns the absolute wake time.
	 * @example
	 * sleeper.Sleep(500, "ability")
	 */
	public Sleep(ms: number, key: unknown): number
	/**
	 * Milliseconds left until `key` wakes, or `0` if it is not sleeping (expired keys are pruned on read).
	 * @example
	 * const left = sleeper.RemainingSleepTime("ability")
	 */
	public RemainingSleepTime(key: unknown): number
	/**
	 * Absolute wake time stored for `key`, or `0` if none is set.
	 * @example
	 * const wakeAt = sleeper.StartTime("ability")
	 */
	public StartTime(key: unknown): number
	/**
	 * True while `key` is still sleeping.
	 * @example
	 * if (sleeper.Sleeping("ability")) { return }
	 */
	public Sleeping(key: unknown): boolean
	/**
	 * Clears every key and returns `this`.
	 * @example
	 * sleeper.FullReset()
	 */
	public FullReset(): this
	/**
	 * Clears a single `key`.
	 * @example
	 * sleeper.ResetKey("ability")
	 */
	public ResetKey(key: unknown): void
}

/** A per-key cooldown timer driven by game time instead of the host clock. */
declare class GameSleeper extends Sleeper {
}
/** A single-slot cooldown timer driven by game time. */
declare class TickSleeper {
	public lastSleepTickCount: number
	/** True while the timer has not expired yet. */
	public get Sleeping(): boolean
	/** Milliseconds left before the timer expires, clamped at `0`. */
	public get RemainingSleepTime(): number
	/**
	 * Sleeps for `duration` milliseconds of game time.
	 * @example
	 * sleeper.Sleep(250)
	 */
	public Sleep(duration: number): void
	/** Wakes the timer immediately. */
	public ResetTimer(): void
}
