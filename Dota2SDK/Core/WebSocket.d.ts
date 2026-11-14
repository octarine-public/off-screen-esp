// AUTO-GENERATED - do not edit.
/** Delivered once the connection is established. */
interface WebSocketOpenEvent {
	/** Event name. */
	readonly type: "open"
}
/** Delivered for every message received. */
interface WebSocketMessageEvent {
	/** Event name. */
	readonly type: "message"
	/** The payload: a string for a text frame, an `ArrayBuffer` for a binary one. */
	readonly data: string | ArrayBuffer
}
/** Delivered once when the connection ends, however it ends. */
interface WebSocketCloseEvent {
	/** Event name. */
	readonly type: "close"
	/** Close code; 1006 when the connection failed or was lost. */
	readonly code: number
	/** The reason sent with the close, or the error text after a failure. */
	readonly reason: string
	/** False when {@link code} is 1006. */
	readonly wasClean: boolean
}
/** Delivered when the connection fails. A `close` event with code 1006 follows it. */
interface WebSocketErrorEvent {
	/** Event name. */
	readonly type: "error"
	/** What went wrong, as text. */
	readonly message: string
	/** Why it failed. */
	readonly code: NetErrorCode
}
/** What a listener of each event name receives. */
interface WebSocketEventMap {
	/** The connection is established. */
	open: WebSocketOpenEvent
	/** A message arrived. */
	message: WebSocketMessageEvent
	/** The connection ended. */
	close: WebSocketCloseEvent
	/** The connection failed. */
	error: WebSocketErrorEvent
}
/** Options of the {@link WebSocket} constructor. */
interface WebSocketInit {
	/** Extra headers for the handshake. `Host` and `Sec-WebSocket-*` cannot be set. */
	headers?: HeadersInit
}
/** A handler of the event named `K`. */
type Listener<K extends keyof WebSocketEventMap> = (event: WebSocketEventMap[K]) => void
/**
 * A WebSocket connection with the browser's API: `readyState`, `send`, `close`, the `on*`
 * handlers and `addEventListener`.
 *
 * Reachable are `wss://` on the public internet and, on this machine (`localhost`,
 * `*.localhost`, a loopback address), plain `ws://` as well. A target that is not allowed fires
 * `error`, then `close`, like any connection that failed.
 * @example
 * const socket = new SharedSDK.WebSocket("wss://echo.example.com")
 * socket.onopen = () => socket.send("hello")
 * socket.onmessage = event => console.log(event.data)
 */
interface WebSocket {
	/** {@link readyState} while the connection is being established. */
	readonly CONNECTING: 0
	/** {@link readyState} while connected: the only state {@link send} works in. */
	readonly OPEN: 1
	/** {@link readyState} after {@link close} was called, until the connection ends. */
	readonly CLOSING: 2
	/** {@link readyState} once the connection has ended or failed. */
	readonly CLOSED: 3
	/** The URL given to the constructor. */
	readonly url: string
	/** Called when the connection is established. */
	onopen: Nullable<Listener<"open">>
	/** Called for every message received. */
	onmessage: Nullable<Listener<"message">>
	/** Called once when the connection ends. */
	onclose: Nullable<Listener<"close">>
	/** Called when the connection fails, before {@link onclose}. */
	onerror: Nullable<Listener<"error">>
	/** Connection state: {@link CONNECTING}, {@link OPEN}, {@link CLOSING} or {@link CLOSED}. */
	get readyState(): number
	/** The subprotocol the server chose, or `""` when there is none. */
	get protocol(): string
	/** Always 0: what `send` takes is queued by the client, not here. */
	get bufferedAmount(): number
	/**
	 * Adds a listener for `type`. Listeners run after the matching `on*` handler, in the order
	 * they were added.
	 */
	addEventListener<K extends keyof WebSocketEventMap>(type: K, listener: Listener<K>): void
	/** Removes a listener added with {@link addEventListener}. */
	removeEventListener<K extends keyof WebSocketEventMap>(type: K, listener: Listener<K>): void
	/**
	 * Sends one message: a string as a text frame, anything else as a binary one. Throws an
	 * `Error` unless {@link readyState} is {@link OPEN}.
	 */
	send(data: string | ArrayBuffer | ArrayBufferView): void
	/**
	 * Starts closing the connection; does nothing once it is closing or closed. `code` must be
	 * 1000 or within 3000-4999, and any other value is sent as 1000.
	 */
	close(code?: number, reason?: string): void
}
