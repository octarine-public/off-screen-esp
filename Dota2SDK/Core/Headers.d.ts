// AUTO-GENERATED - do not edit.
/** What a {@link Headers} is built from: another one, `[name, value]` pairs or a plain object. */
type HeadersInit = Headers | [string, string][] | Record<string, string>
/**
 * HTTP headers of a request or a response. Names are case-insensitive and values are stored
 * trimmed; several values under one name read back joined by `", "`.
 * @example
 * const headers = new SharedSDK.Headers({ Authorization: "Bearer " + token })
 * headers.append("Accept", "application/json")
 */
interface Headers {
	/** Adds a value under `name`, keeping the ones already there. */
	append(name: string, value: string): void
	/** Stores `value` under `name` in place of what was there. */
	set(name: string, value: string): void
	/** Removes every value stored under `name`. */
	delete(name: string): void
	/** The values stored under `name` joined by `", "`, or `undefined` when there are none. */
	get(name: string): Nullable<string>
	/** Whether anything is stored under `name`. */
	has(name: string): boolean
	/** Calls `callback` for every stored value, in the order they were added. */
	forEach(callback: (value: string, name: string, headers: Headers) => void): void
	/** Every `[name, value]` pair, in the order they were added. Names are lower-case. */
	entries(): IterableIterator<[string, string]>
	/** The name of every stored value; a name holding several values repeats. */
	keys(): IterableIterator<string>
	/** Every stored value, in the order they were added. */
	values(): IterableIterator<string>
	/** Iterates the pairs {@link entries} returns. */
	[Symbol.iterator](): IterableIterator<[string, string]>
}
