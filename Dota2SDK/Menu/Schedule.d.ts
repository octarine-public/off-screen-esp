// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** Adds `flush` to what {@link FlushAfterEvent} runs; the call returned takes it off again. */
	function AddWorkFlusher(flush: () => void): () => void
	/**
	 * Runs every flusher {@link AddWorkFlusher} added: each menu root commits the React work waiting
	 * on it. Every event handler set through props calls it after running, and the menu once a
	 * frame. A call made while one is running returns at once.
	 */
	function FlushAfterEvent(): void
}
