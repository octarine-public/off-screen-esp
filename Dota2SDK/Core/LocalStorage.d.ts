// AUTO-GENERATED - do not edit.
/**
 * Why a storage op failed. Mirrors the `result` contract the client answers with, so a script can
 * tell a name it may not use from a disk that would not take the write.
 */
declare enum LocalStorageErrorCode {
	None = 0,
	/**
	 * The store name is not one the client will put on disk: empty, over 64 characters, or holding
	 * anything but `a-z`, `0-9`, `.`, `_` and `-`.
	 */
	InvalidName = 1,
	/** The key is empty, over 128 bytes, or carries a control character. */
	InvalidKey = 2,
	/** The request is malformed: the value is not JSON, or is past the 256 KiB per-value cap. */
	InvalidValue = 3,
	/** The store is full: 1024 keys, 1 MiB on disk, or 64 stores for this game. */
	QuotaExceeded = 4,
	/** The file could not be read or written. */
	IOFailed = 5,
	/** The store was never opened — reach it through {@link SharedSDK.openLocalStorage}. */
	NotOpened = 6,
	/** Storage is gone, which normally means the client is shutting down. */
	Unavailable = 7
}
/**
 * The error every {@link LocalStorage} method rejects with.
 * @example
 * try {
 *   await storage.set("cheaters", list)
 * } catch (e) {
 *   if (
 *     e instanceof SharedSDK.LocalStorageError &&
 *     e.code === SharedSDK.LocalStorageErrorCode.QuotaExceeded
 *   ) { ... }
 * }
 */
declare class LocalStorageError extends Error {
	/**
	 * Why the operation failed: the client's answer, or `InvalidValue` when
	 * {@link LocalStorage.set} was given a value that is not JSON.
	 */
	public readonly code: LocalStorageErrorCode
	/** An error with `message` and the reason as `code`; its `name` is `"LocalStorageError"`. */
	constructor(message: string, 
	/**
	 * Why the operation failed: the client's answer, or `InvalidValue` when
	 * {@link LocalStorage.set} was given a value that is not JSON.
	 */
	code: LocalStorageErrorCode)
}
/**
 * A key/value store on the user's disk, written only by the client: one JSON file per game and
 * store name, so the same name under two games is two stores. Values are whatever
 * `JSON.stringify` carries. Every method is a round trip to the client, so read what you need
 * once and keep it; the promise of a write resolves once the file holds it. Any script that
 * knows the name can open the store.
 * @example
 * const storage = await SharedSDK.openLocalStorage("deadlock-heroes")
 * const cheaters = (await storage.get<string[]>("cheaters")) ?? []
 * cheaters.push(steamID)
 * await storage.set("cheaters", cheaters)
 */
declare class LocalStorage {
	/**
	 * The name as given. The client trims and lower-cases it, so `"MyStore"` and `"mystore"`
	 * are one store; a name it cannot use fails {@link open} with
	 * {@link LocalStorageErrorCode.InvalidName}.
	 */
	public readonly name: string
	/**
	 * A handle on the store `name`, which it does not open: call {@link open} before anything
	 * else, or take the handle from {@link SharedSDK.openLocalStorage}, which has already done so.
	 */
	constructor(
	/**
	 * The name as given. The client trims and lower-cases it, so `"MyStore"` and `"mystore"`
	 * are one store; a name it cannot use fails {@link open} with
	 * {@link LocalStorageErrorCode.InvalidName}.
	 */
	name: string)
	/**
	 * Creates the store if this is its first run and answers with every key it already holds.
	 * Until this has run, every other method rejects with {@link LocalStorageErrorCode.NotOpened}.
	 */
	public open(): Promise<string[]>
	/** The stored value, or `undefined` when nothing was ever stored under that key. */
	public get<T = unknown>(key: string): Promise<Nullable<T>>
	/**
	 * Stores one value, replacing whatever was there. Rejects with
	 * {@link LocalStorageErrorCode.InvalidValue} for anything `JSON.stringify` cannot carry —
	 * `undefined`, a function, a symbol, a `bigint`, a cycle — rather than storing a hole or
	 * throwing something that is not a {@link LocalStorageError}.
	 */
	public set(key: string, value: unknown): Promise<void>
	/** Drops one key. A key that was not there is not an error. */
	public remove(key: string): Promise<void>
	/** Empties the store, leaving the file behind. */
	public clear(): Promise<void>
	/** Every key the store holds, sorted. */
	public keys(): Promise<string[]>
}
