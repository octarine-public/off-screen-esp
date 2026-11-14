// AUTO-GENERATED - do not edit.
/** Options of {@link SharedSDK.fetch}. */
interface FetchInit {
	/** HTTP method, such as `"POST"`. */
	method?: string
	/** Headers to send. */
	headers?: HeadersInit
	/** Body to send. */
	body?: string | ArrayBuffer | ArrayBufferView
	/**
	 * Cancels the request when it aborts. One that has aborted already makes `fetch` reject with
	 * its reason before anything is sent.
	 */
	signal?: AbortSignal
	/** `"follow"` follows redirects, `"manual"` returns the 3xx response itself. Default `"follow"`. */
	redirect?: "follow" | "manual"
	/** Time limit for the whole request, in milliseconds. The client caps it. */
	timeoutMs?: number
	/** Largest response body to accept, in bytes; a larger one fails the request. The client caps it. */
	maxResponseBytes?: number
}
