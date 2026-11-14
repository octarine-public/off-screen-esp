// AUTO-GENERATED - do not edit.
/** Why a request or a socket failed. */
type NetErrorCode = NetErrorCode.None | NetErrorCode.Blocked | NetErrorCode.Invalid | NetErrorCode.Timeout | NetErrorCode.Transport | NetErrorCode.TooLarge | NetErrorCode.Throttled | NetErrorCode.Aborted | NetErrorCode.Unavailable
declare namespace NetErrorCode {
	/** No error. */
	type None = 0
	/**
	 * The target is not allowed: a private address, Octarine's own servers, an unencrypted
	 * connection off this machine, or a port the client listens on.
	 */
	type Blocked = 1
	/** The request was malformed: a bad URL, an illegal header or an unsupported method. */
	type Invalid = 2
	/** No answer within the time limit. */
	type Timeout = 3
	/** DNS, TCP, TLS or protocol failure. */
	type Transport = 4
	/** The response body or a socket message was over the size limit. */
	type TooLarge = 5
	/** Too many requests or sockets at once, or too many over time. */
	type Throttled = 6
	/** Cancelled through an `AbortSignal`. */
	type Aborted = 7
	/** The client's network bridge is gone, normally because the game is shutting down. */
	type Unavailable = 8
}
/**
 * The error `fetch` rejects with and a socket's `error` event carries.
 * @example
 * try {
 *   await SharedSDK.fetch(url)
 * } catch (e) {
 *   if (e instanceof SharedSDK.NetError && e.code === SharedSDK.NetErrorCode.Blocked) { ... }
 * }
 */
interface NetError extends Error {
	/** Why it failed. */
	readonly code: NetErrorCode
}
