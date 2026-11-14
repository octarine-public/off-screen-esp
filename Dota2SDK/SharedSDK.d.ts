// AUTO-GENERATED - do not edit.
/** Everything shared-sdk publishes, under one name. Its functions and its networking, storage and media classes are not global: they are reached only here. */
declare const SharedSDK: {
	readonly AABB: typeof AABB
	/**
	 * Owns one {@link AbortSignal} and aborts it.
	 * @example
	 * const controller = new SharedSDK.AbortController()
	 * setTimeout(() => controller.abort(), 1000)
	 */
	readonly AbortController: {
		new (): AbortController
		readonly prototype: AbortController
	}
	/**
	 * Cancels a request that is already under way: pass it as `signal` to `fetch`, then abort it
	 * through the {@link AbortController} it came from.
	 * @example
	 * const controller = new SharedSDK.AbortController()
	 * const pending = SharedSDK.fetch(url, { signal: controller.signal })
	 * controller.abort()
	 */
	readonly AbortSignal: {
		new (): AbortSignal
		readonly prototype: AbortSignal
		/**
		 * A signal that aborts on its own after `ms` milliseconds.
		 * @example
		 * SharedSDK.fetch(url, { signal: SharedSDK.AbortSignal.timeout(5000) })
		 */
		timeout(ms: number): AbortSignal
	}
	/** The one {@link CBenchmark}. Safe to call in any build: without the recorder it does nothing. */
	readonly Benchmark: CBenchmark
	readonly CMaterial: typeof CMaterial
	readonly Capsule2D: typeof Capsule2D
	readonly Circle2D: typeof Circle2D
	readonly Color: typeof Color
	readonly EventEmitter: typeof EventEmitter
	readonly EventPriority: typeof EventPriority
	/**
	 * Converts HSV (each in `[0, 1]`) to 8-bit RGB channels (0-255, not rounded).
	 * @example
	 * const [r, g, b] = HSVToRGB(0, 1, 1) // [255, 0, 0]
	 */
	HSVToRGB(h: number, s: number, v: number): [number, number, number]
	/**
	 * HTTP headers of a request or a response. Names are case-insensitive and values are stored
	 * trimmed; several values under one name read back joined by `", "`.
	 * @example
	 * const headers = new SharedSDK.Headers({ Authorization: "Bearer " + token })
	 * headers.append("Accept", "application/json")
	 */
	readonly Headers: {
		/** @param init headers to start with */
		new (init?: HeadersInit): Headers
		readonly prototype: Headers
	}
	readonly KeyNames: typeof KeyNames
	/**
	 * Seconds until a projectile launched now from `from` at `speed` meets a target that is at
	 * `anchor` and keeps moving with `velocity`; `undefined` when it never catches up within
	 * `maxTime`. The meeting point is `anchor + velocity * time`.
	 * @example
	 * const time = LinearInterceptTime(caster.Position, target.Position, target.Velocity, speed)
	 */
	LinearInterceptTime(from: Vector2, anchor: Vector2, velocity: Vector2, speed: number, maxTime?: number): Nullable<number>
	/** The three-dimensional form of {@link SharedSDK.LinearInterceptTime}. */
	LinearInterceptTime3D(from: Vector3, anchor: Vector3, velocity: Vector3, speed: number, maxTime?: number): Nullable<number>
	readonly LocalStorage: typeof LocalStorage
	readonly LocalStorageError: typeof LocalStorageError
	readonly LocalStorageErrorCode: typeof LocalStorageErrorCode
	/**
	 * A plain object with the entries of `map`, each key turned into a string. A map found as a
	 * value, or inside an array at any depth, becomes an object the same way.
	 */
	MapToObject(map: Map<unknown, unknown>): Record<string, unknown>
	readonly MaterialFlags: typeof MaterialFlags
	readonly Matrix3x4: typeof Matrix3x4
	/** Thrown when the media session could not be reached at all. */
	readonly MediaSessionError: {
		new (message: string): MediaSessionError
		readonly prototype: MediaSessionError
	}
	readonly MenuLanguageID: typeof MenuLanguageID
	/**
	 * The smallest disc that contains every point, as a new circle; an empty list gives a zero disc
	 * at the origin. Expected linear time for points in arbitrary order.
	 * @example
	 * const area = MinimalEnclosingCircle(targets.map(target => target.Position))
	 * if (area.Radius <= ability.Radius) { ... }
	 */
	MinimalEnclosingCircle(points: readonly Vector2[]): Circle2D
	/**
	 * The error `fetch` rejects with and a socket's `error` event carries.
	 * @example
	 * try {
	 *   await SharedSDK.fetch(url)
	 * } catch (e) {
	 *   if (e instanceof SharedSDK.NetError && e.code === SharedSDK.NetErrorCode.Blocked) { ... }
	 * }
	 */
	readonly NetError: {
		new (message: string, 
	/** Why it failed. */
	code: NetErrorCode): NetError
		readonly prototype: NetError
	}
	/** Why a request or a socket failed. */
	readonly NetErrorCode: {
		/** No error. */
		readonly None: 0
		/**
		 * The target is not allowed: a private address, Octarine's own servers, an unencrypted
		 * connection off this machine, or a port the client listens on.
		 */
		readonly Blocked: 1
		/** The request was malformed: a bad URL, an illegal header or an unsupported method. */
		readonly Invalid: 2
		/** No answer within the time limit. */
		readonly Timeout: 3
		/** DNS, TCP, TLS or protocol failure. */
		readonly Transport: 4
		/** The response body or a socket message was over the size limit. */
		readonly TooLarge: 5
		/** Too many requests or sockets at once, or too many over time. */
		readonly Throttled: 6
		/** Cancelled through an `AbortSignal`. */
		readonly Aborted: 7
		/** The client's network bridge is gone, normally because the game is shutting down. */
		readonly Unavailable: 8
	}
	/** The material file at `path` as a {@link CMaterial}. Throws when it yields no KV data. */
	ParseMaterial(path: string): CMaterial
	readonly Polygon2D: typeof Polygon2D
	readonly Polygon3D: typeof Polygon3D
	/** Starts a synchronous profiling span and returns whether it must be ended. */
	ProfileBegin(): boolean
	/** Ends a span and reports time excluding its already-profiled child spans. */
	ProfileEnd(name: string, source: Nullable<string>, active: boolean): void
	/** Pauses profiling so profiler maintenance is excluded from its current parent span. */
	ProfilePause(): number
	/** Resumes profiling after a matching pause. */
	ProfileResume(started: number): void
	readonly ProjectionInfo: typeof ProjectionInfo
	readonly QAngle: typeof QAngle
	readonly Quaternion: typeof Quaternion
	/**
	 * Converts 8-bit RGB channels (0-255) to HSV, with each of h/s/v in `[0, 1]`.
	 * @example
	 * const [h, s, v] = RGBToHSV(255, 0, 0) // [0, 1, 1]
	 */
	RGBToHSV(r: number, g: number, b: number): [number, number, number]
	readonly React: typeof React
	readonly ReactReconciler: typeof ReactReconciler
	readonly Rectangle: typeof Rectangle
	/**
	 * An HTTP response. Its whole body has already arrived, so the body can be read any number of
	 * times.
	 * @example
	 * const res = await SharedSDK.fetch(url)
	 * if (res.ok) {
	 *   const data = await res.json<{ id: number }>()
	 * }
	 */
	readonly Response: {
		new (result: NetHttpResult): Response
		readonly prototype: Response
	}
	readonly Segment2D: typeof Segment2D
	readonly Sleeper: typeof Sleeper
	/**
	 * `str` encoded as UTF-8, in a new array. A surrogate pair becomes one four-byte sequence; a
	 * lone surrogate that ends the string is dropped.
	 */
	StringToUTF8(str: string): Uint8Array
	readonly TextFlags: typeof TextFlags
	readonly Trapezoid2D: typeof Trapezoid2D
	/**
	 * `bytes` decoded as UTF-8: the whole buffer, or the range a view covers. Malformed input is
	 * decoded as it comes, not rejected.
	 */
	UTF8ToString(bytes: ArrayBuffer | ArrayBufferView): string
	readonly UniformRandomStream: typeof UniformRandomStream
	readonly VKeys: typeof VKeys
	readonly VMouseKeys: typeof VMouseKeys
	readonly VXMouseKeys: typeof VXMouseKeys
	readonly Vector2: typeof Vector2
	readonly Vector3: typeof Vector3
	readonly Vector4: typeof Vector4
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
	readonly WebSocket: {
		/**
		 * Starts connecting; `open` or `error` follows.
		 * @param url a `wss://` endpoint, or `ws://` on this machine
		 * @param protocols subprotocols to offer in the handshake
		 * @throws SyntaxError when the scheme of `url` is neither `ws` nor `wss`
		 * @example
		 * new SharedSDK.WebSocket("wss://example.com/stream", "graphql-ws")
		 */
		new (url: string, protocols?: string | string[], init?: WebSocketInit): WebSocket
		readonly prototype: WebSocket
		/** `readyState` while the connection is being established. */
		readonly CONNECTING: 0
		/** `readyState` while connected: the only state `send` works in. */
		readonly OPEN: 1
		/** `readyState` after `close` was called, until the connection ends. */
		readonly CLOSING: 2
		/** `readyState` once the connection has ended or failed. */
		readonly CLOSED: 3
	}
	/**
	 * A counter that grows before every listener any emitter calls, and when SDK code reports a
	 * change of its own with `BumpWorldVersion`. Nothing else moves it, so while it reads the same
	 * no listener has been called since. A cache keyed on it holds for that long.
	 * @example
	 * if (this.builtAt !== SharedSDK.WorldVersion()) {
	 * 	this.builtAt = SharedSDK.WorldVersion()
	 * 	this.Rebuild()
	 * }
	 */
	WorldVersion(): number
	/**
	 * Sends one HTTP request and resolves with its {@link Response}.
	 *
	 * Resolves for any status, 4xx and 5xx included: check `res.ok`. Rejects with a {@link NetError}
	 * only when no response arrived.
	 *
	 * Reachable are `https://` on the public internet and, on this machine (`localhost`,
	 * `*.localhost`, a loopback address), plain `http://` as well. Private networks, Octarine's own
	 * servers and the ports the client listens on reject with {@link NetErrorCode.Blocked}.
	 * @example
	 * const res = await SharedSDK.fetch("https://api.example.com/v1/items", {
	 *   headers: { Accept: "application/json" },
	 *   timeoutMs: 5000
	 * })
	 * const items = await res.json<string[]>()
	 */
	fetch(url: string, init?: FetchInit): Promise<Response>
	/**
	 * Opens this script's store and hands back the handle, ready to use.
	 *
	 * Name it after the script — one store per script is the whole convention keeping two of them out
	 * of each other's data.
	 * @example
	 * const storage = await SharedSDK.openLocalStorage("deadlock-heroes")
	 */
	openLocalStorage(name: string): Promise<LocalStorage>
	/**
	 * The JSON file `path` parsed, found the way {@link SharedSDK.tryFindFile} finds it from the calling
	 * script. Throws an `Error` when the file is not found or is not valid JSON. The result is not
	 * checked against `T`.
	 */
	readJSON<T = unknown>(path: string): T
	/**
	 * One look at the media session — what is playing and every player that could be.
	 *
	 * This is the Windows media session, the same thing the volume flyout shows, so it follows
	 * whatever the user actually plays: Spotify, a browser tab, a desktop player. The game process
	 * cannot ask Windows this, so the question travels to the client and back; poll it about once a
	 * second rather than every frame.
	 * @example
	 * const { track, sources } = await SharedSDK.readMediaSession({ artwork: true })
	 * console.log(`players: ${sources.join(", ")}`)
	 * if (track !== undefined) {
	 * 	console.log(`${track.artist} — ${track.title}`)
	 * }
	 */
	readMediaSession(options?: MediaReadOptions): Promise<MediaSessionSnapshot>
	/**
	 * What the machine is playing right now, or `undefined` when nothing is. The short form of
	 * {@link SharedSDK.readMediaSession} for a script that does not care which players exist.
	 * @example
	 * const track = await SharedSDK.readNowPlaying()
	 * if (track !== undefined) {
	 * 	console.log(`${track.artist} — ${track.title}`)
	 * }
	 */
	readNowPlaying(options?: MediaReadOptions): Promise<Nullable<NowPlaying>>
	/**
	 * Where the player's own volume slider stands, from `0` to `1` — the row the volume mixer shows
	 * it under, not the machine's.
	 * @example
	 * const volume = await SharedSDK.readPlayerVolume()
	 */
	readPlayerVolume(source?: string): Promise<number>
	/**
	 * Sends `command` to the player `source` names, the way {@link MediaReadOptions.source} names
	 * it, or to whichever holds the current session when it is left out. Resolves to the player's
	 * volume from 0 to 1 after `volup` or `voldown` and to `undefined` after any other command.
	 * Rejects with a {@link MediaSessionError} when no such player is running or it does not offer
	 * that control.
	 */
	sendMediaCommand(command: MediaCommand, source?: string): Promise<Nullable<number>>
	/**
	 * The first place `path` exists at, or `undefined` when there is none. Tried in order: `path` as
	 * given, `scripts_files/<path>` in the calling script's folder and then in each folder above it,
	 * and the shared SDK's own `scripts_files`. `callstackDepth` moves "calling script" up the
	 * stack: 0 is the direct caller. Whether a path exists is asked once and remembered.
	 */
	tryFindFile(path: string, callstackDepth?: number): Nullable<string>
}
