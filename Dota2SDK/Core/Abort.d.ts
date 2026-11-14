// AUTO-GENERATED - do not edit.
/** Called when a signal aborts, with what it was aborted for. */
type AbortListener = (reason: unknown) => void
/**
 * Cancels a request that is already under way: pass it as `signal` to `fetch`, then abort it
 * through the {@link AbortController} it came from.
 * @example
 * const controller = new SharedSDK.AbortController()
 * const pending = SharedSDK.fetch(url, { signal: controller.signal })
 * controller.abort()
 */
interface AbortSignal {
	/** Whether the signal has aborted. */
	aborted: boolean
	/** What it was aborted for; `undefined` until it aborts. */
	reason: unknown
	/**
	 * Calls `listener` when the signal aborts, or at once if it already has.
	 * @example
	 * signal.addEventListener("abort", () => socket.close())
	 */
	addEventListener(type: "abort", listener: AbortListener): void
	/** Removes a listener added with {@link addEventListener}. */
	removeEventListener(type: "abort", listener: AbortListener): void
	/** Throws {@link reason} if the signal has aborted. */
	throwIfAborted(): void
}
/**
 * Owns one {@link AbortSignal} and aborts it.
 * @example
 * const controller = new SharedSDK.AbortController()
 * setTimeout(() => controller.abort(), 1000)
 */
interface AbortController {
	/** The signal {@link abort} aborts. */
	readonly signal: AbortSignal
	/**
	 * Aborts {@link signal} for `reason`, or for an `Error` when none is given. Only the first
	 * call has an effect.
	 */
	abort(reason?: unknown): void
}
