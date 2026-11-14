// AUTO-GENERATED - do not edit.
/** Reports one gauge of the current bucket; the recorder stores it under `js.<name>`. */
type BenchmarkGaugeSink = (name: string, value: number) => void
/** Runs once per bucket on the script thread and reports whatever it counts. */
type BenchmarkProvider = (emit: BenchmarkGaugeSink) => void
/**
 * The script half of the in-process benchmark recorder. Every listener the emitters run is
 * timed through the profiler and folded into five-second buckets beside the native zones;
 * providers add the counts that say what grew. Everything is a no-op in a build without the
 * recorder, so a layer registers what it knows without checking first.
 */
interface CBenchmark {
	/** Whether this build carries the recorder. Without it every method here does nothing. */
	get Enabled(): boolean
	/**
	 * Writes a labelled point in time into the session, to line a change up with what the
	 * numbers did around it.
	 * @example
	 * SharedSDK.Benchmark.Mark("config applied")
	 */
	Mark(label: string): void
	/**
	 * Registers gauges reported once per bucket. The provider runs on the script thread every
	 * five seconds, so it should read counts it already has, not compute them.
	 * @example
	 * SharedSDK.Benchmark.RegisterProvider(emit => emit("modifiers.active", active.size))
	 */
	RegisterProvider(provider: BenchmarkProvider): void
	/**
	 * Starts a span around code no event listener covers, such as a parser or a loop body, and
	 * returns what {@link End} needs to close it: 0 without the recorder, which `End` ignores.
	 * @example
	 * const started = SharedSDK.Benchmark.Begin()
	 * parse(buffer)
	 * SharedSDK.Benchmark.End("parse", started)
	 */
	Begin(): number
	/**
	 * Closes the span {@link Begin} started and adds its length to the zone `name`. Every five
	 * seconds a zone reports how many spans it took, their total and the longest, in milliseconds.
	 */
	End(name: string, started: number): void
}
