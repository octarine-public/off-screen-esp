// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * Whether the host build carries the debug tooling. The Beta v8 build sets the flag before
	 * any script runs; release builds leave it unset, which strips every debug surface — the
	 * script profiler's menu node and overlay included.
	 */
	const DebugEnabled: boolean
	/**
	 * Whether `DEBUG_ENABLED` is set now: read at each call, so a hint for the developer - the
	 * script's own name beside its place in the configs pages - follows the flag changed from the
	 * console. {@link DebugEnabled} is what the menu was built with and gates the debug tooling.
	 */
	function DebugOn(): boolean
}
