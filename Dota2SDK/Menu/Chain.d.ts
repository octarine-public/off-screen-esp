// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * One pooled element batch of capsule segments, drawn as a single quad through one native
	 * slot. Segments accumulate in screen px over the frame; `Flush` claims a slot, streams the
	 * buffer and stretches the quad over the padded bounds. Reused across frames — nothing here
	 * allocates once the buffer exists, and the decorator string is rebuilt only when the slot
	 * or the stroke actually changed.
	 */
	class CChainBatch {
		public count: number
		public Reset(): void
		/** Adds one segment in screen px; `chain` groups segments into one seamless union. */
		public Segment(x1: number, y1: number, x2: number, y2: number, chain: number): boolean
		/** Streams the batch and stretches the quad; `pinned` bypasses the frame allocator. */
		public Flush(element: HTMLElement, stroke: WorldStroke, pinned?: number): void
	}
	/**
	 * Every segment one stroke draws in a frame, over as many batches as that takes. A batch holds
	 * `ShaderSlotSegments` and refuses the rest, which a single long chain - a sector of a few dozen
	 * joins, a recorded path - or several shapes of one stroke reach easily; a run starts the next
	 * batch instead, so whatever is drawn arrives whole. Batches are reset between frames rather than
	 * dropped, so a run that once needed three allocates nothing more for them.
	 */
	class CStrokeRun {
		public Stroke: WorldStroke
		constructor(Stroke: WorldStroke)
		/** How many batches the frame has put segments in, every one of them to be flushed. */
		public get Filled(): number
		/** The `index`th batch of the frame, `index` under {@link Filled}. */
		public Batch(index: number): CChainBatch
		/** Adds one segment in screen px, starting the next batch when this one is full. */
		public Segment(x1: number, y1: number, x2: number, y2: number, chain: number): void
		/** Empties every batch the frame filled, for the next frame to fill from the first. */
		public Reset(): void
	}
}
