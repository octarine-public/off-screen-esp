// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * The script profiler: an overlay table of the time each script or event handler took per second
	 * over a sampling window, with its settings in the menu under Settings, Script Profiler. Only a
	 * debug build sets it up.
	 */
	interface CScriptProfiler {
		/** Registers the shared profiler settings and RmlUi overlay once; a release build skips both. */
		Setup(): void
		/**
		 * Publishes a completed sampling window on a stable menu frame boundary. Only the stack the
		 * panel stands in is asked for a render: a reading a second is not news to the world.
		 */
		Tick(): void
	}
	/** The menu's script profiler, which the menu sets up at startup and ticks every frame. */
	const ScriptProfiler: CScriptProfiler
}
