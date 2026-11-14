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
		/** How many segments the batch holds, at most {@link ShaderSlotSegments}. */
		public count: number
		/**
		 * The world point the batch's first shape was projected from, which a caller pins the batch's
		 * element to; `HasReference` is false until one is given.
		 */
		public ReferenceX: number
		/** World y of the point the batch is pinned to, beside {@link ReferenceX}. */
		public ReferenceY: number
		/** World z of the point the batch is pinned to, beside {@link ReferenceX}. */
		public ReferenceZ: number
		/** Whether {@link Refer} has set the reference point since the last {@link Reset}. */
		public HasReference: boolean
		/** Empties the batch and drops its reference point, keeping the buffer for the next frame. */
		public Reset(): void
		/**
		 * Adds one segment in screen px; segments that share a `chain` number are drawn as one union.
		 * `false`, with nothing added, once the batch holds {@link ShaderSlotSegments}.
		 */
		public Segment(x1: number, y1: number, x2: number, y2: number, chain: number): boolean
		/** Keeps `x, y, z` as the batch's reference, unless it has one. */
		public Refer(x: number, y: number, z: number): void
		/**
		 * Streams the batch and stretches the quad; `pinned` bypasses the frame allocator. `shiftX`,
		 * `shiftY` are taken off the quad's place: where the anchor the element is pinned to lands.
		 */
		public Flush(element: HTMLElement, stroke: WorldStroke, pinned?: number, shiftX?: number, shiftY?: number): void
	}
	/**
	 * Every segment one stroke draws in a frame, over as many {@link CChainBatch} batches as it takes:
	 * a segment the current batch refuses starts the next one. {@link Reset} empties the batches for
	 * the next frame and keeps them.
	 */
	class CStrokeRun {
		/** The stroke the run is drawn in, for a caller to hand {@link CChainBatch.Flush}. */
		public Stroke: WorldStroke
		/** A run holding one empty batch. */
		constructor(
		/** The stroke the run is drawn in, for a caller to hand {@link CChainBatch.Flush}. */
		Stroke: WorldStroke)
		/** How many batches the frame has put segments in, every one of them to be flushed. */
		public get Filled(): number
		/** The `index`th batch of the frame, `index` under {@link Filled}. */
		public Batch(index: number): CChainBatch
		/**
		 * Names the world point the shape about to be added was projected from: the batch it starts in,
		 * and any it spills into, are pinned there unless an earlier shape pinned them.
		 */
		public Refer(x: number, y: number, z: number): void
		/** Adds one segment in screen px, starting the next batch when this one is full. */
		public Segment(x1: number, y1: number, x2: number, y2: number, chain: number): void
		/** Empties every batch the frame filled, for the next frame to fill from the first. */
		public Reset(): void
	}
}
