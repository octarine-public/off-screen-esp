// AUTO-GENERATED - do not edit.
/**
 * A listener of event `K`, called with that event's arguments. Only a `false` result means
 * anything, and only to a cancellable emit: see {@link EventEmitter.emit}.
 */
type EventListener<M extends Record<keyof M, unknown[]>, K extends keyof M> = (...args: M[K]) => false | unknown
/**
 * Named events with typed listeners; `M` maps an event name to the arguments its listeners take.
 * An emit calls the {@link on} listeners in ascending priority, then the {@link after} ones the
 * same way, and those of one priority in the order they were added. A listener that throws is
 * logged with `console.error` and the rest still run. Each listener runs as the package that was
 * current when it was added: `SharedSDK.CurrentPackage` reads that package during the call.
 */
declare class EventEmitter<M extends Record<keyof M, unknown[]> = EventsMap> {
	/**
	 * Calls `listener` on every emit of `name`. A lower `priority` runs earlier; see
	 * {@link EventPriority} for the named ones. Returning `false` stops an emit that was sent as
	 * cancellable. Returns the emitter itself.
	 */
	public on<K extends keyof M>(name: K, listener: EventListener<M, K>, priority?: number): EventEmitter<M>
	/**
	 * Calls `listener` on every emit of `name` once all {@link on} listeners have run, and not at
	 * all when one of them cancelled the emit. `priority` orders it among the `after` listeners;
	 * what it returns is ignored.
	 */
	public after<K extends keyof M>(name: K, listener: EventListener<M, K>, priority?: number): EventEmitter<M>
	/**
	 * {@link on} for a single emit: the listener is taken off just before its first call.
	 * {@link removeListener} cannot take it off earlier.
	 */
	public once<K extends keyof M>(name: K, listener: EventListener<M, K>, priority?: number): EventEmitter<M>
	/**
	 * Takes off one registration of `listener` under `name`: an {@link on} one when there is
	 * any, otherwise an {@link after} one. Does nothing when it is not registered.
	 */
	public removeListener<K extends keyof M>(name: K, listener: EventListener<M, K>): EventEmitter<M>
	/** Whether `name` has at least one listener, {@link on} or {@link after}. */
	public hasListeners(name: keyof M): boolean
	/**
	 * Reports how many listeners every event currently has, `on` and `after` summed - the number
	 * that grows when a registration is never taken back.
	 * @example
	 * Events.CountListeners((name, count) => console.log(name, count))
	 */
	public CountListeners(sink: (name: string, count: number) => void): void
	/**
	 * Calls the listeners of `name` with `args` and returns whether the emit went through. With
	 * `cancellable` set, an {@link on} listener returning `false` ends it there: the listeners
	 * still to come are skipped, {@link after} ones included, and the result is `false`.
	 */
	public emit<K extends keyof M>(name: K, cancellable?: boolean, ...args: M[K]): boolean
}
