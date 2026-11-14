// AUTO-GENERATED - do not edit.
/**
 * An HTTP response. Its whole body has already arrived, so the body can be read any number of
 * times.
 * @example
 * const res = await SharedSDK.fetch(url)
 * if (res.ok) {
 *   const data = await res.json<{ id: number }>()
 * }
 */
interface Response {
	/** Headers the server sent. */
	readonly headers: Headers
	/** HTTP status code. */
	readonly status: number
	/** The text sent with the status code, such as `"Not Found"`. */
	readonly statusText: string
	/** The URL that answered; differs from the requested one after a followed redirect. */
	readonly url: string
	/** Whether the status is 2xx. */
	get ok(): boolean
	/** Whether the status is 3xx: a redirect that was not followed. */
	get redirected(): boolean
	/** The body as an `ArrayBuffer`. */
	arrayBuffer(): Promise<ArrayBuffer>
	/** The body as bytes: a view over the buffer {@link arrayBuffer} returns, not a copy. */
	bytes(): Promise<Uint8Array>
	/** The body decoded as UTF-8. */
	text(): Promise<string>
	/**
	 * The body parsed as JSON. Rejects with a `SyntaxError` when it is not valid JSON.
	 * @example
	 * const data = await res.json<{ items: string[] }>()
	 */
	json<T = unknown>(): Promise<T>
}
