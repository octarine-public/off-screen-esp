// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * How a graph draws the run of samples it is handed. Every one of them reads the same data and
	 * the same scale, so a caller may hand the choice to the user and change nothing else.
	 */
	const enum EHudGraph {
		/** A line through the samples, drawn as one unbroken curve. */
		Line = 0,
		/** The same curve with everything under it filled. */
		Area = 1,
		/** A column per sample, growing from the floor. */
		Bars = 2,
		/** A stair: every sample held until the next one lands. */
		Steps = 3,
		/** Columns mirrored about the middle, the way a waveform reads. */
		Mirror = 4,
		/** A dot per sample, riding where the curve would run. */
		Dots = 5,
		/** A row of cells, each lit by its own value instead of raised by it. */
		Heat = 6,
		/** The newest sample alone, as a sweep around a ring. */
		Dial = 7
	}
	/** The names the styles are listed under, in the order {@link EHudGraph} declares them. */
	const HudGraphNames: string[]
	/** What a graph is drawn with. Everything but the style and the colour has a default. */
	interface IHudGraphLook {
		/** How the samples are drawn. */
		readonly style: EHudGraph
		/** The colour the curve, the columns and the cells are drawn in. */
		readonly color: Color
		/** The colour they ramp toward at the top of the scale; the same colour by default. */
		readonly hot?: Color
		/** How thick a curve is drawn, in dp. */
		readonly thickness?: number
		/** How much of its own colour the fill under a curve keeps, 0..1. */
		readonly fill?: number
		/** Whether a floor and a pair of lines across the box are drawn under the samples. */
		readonly grid?: boolean
		/** Whether the newest sample carries a lit head. */
		readonly head?: boolean
		/** Whether the run's peak is marked with a line across the box. */
		readonly peak?: boolean
		/** Whether the run's average is marked with a line across the box. */
		readonly average?: boolean
	}
	/**
	 * The samples of one reading over the last stretch of seconds, and the scale they are drawn
	 * against. A ring buffer: a sample costs one write wherever the frame rate stands, and nothing
	 * is ever moved.
	 *
	 * The scale is the series' own rather than the graph's, because it is what carries between
	 * frames: it opens quickly to a peak that arrives and settles back slowly, so a run that is
	 * standing still does not swing between wildly different zooms.
	 *
	 * @example
	 * const speed = new HudSeries(6, 8)
	 * speed.Push(hero.Velocity.Length2D, hrtime() / 1000)
	 */
	class HudSeries {
		/** How many seconds of samples are kept and drawn, on the clock `Push` is given. */
		public Span: number
		/** The lowest the top of the scale is ever taken to, in the reading's own units. */
		public Floor: number
		/**
		 * @param capacity how many samples are held at once; the oldest is dropped past it.
		 */
		constructor(
		/** How many seconds of samples are kept and drawn, on the clock `Push` is given. */
		Span?: number, 
		/** The lowest the top of the scale is ever taken to, in the reading's own units. */
		Floor?: number, capacity?: number)
		/** How many samples are kept right now. */
		public get Count(): number
		/** The newest sample, or nothing at all while the run is empty. */
		public get Latest(): number
		/** The tallest sample of the kept run. */
		public get Peak(): number
		/** The mean of the kept run. */
		public get Average(): number
		/** The top of the scale the run is drawn against right now, eased toward its peak. */
		public get Ceiling(): number
		/** The moment sample `index` landed, counted from the oldest one kept. */
		public TimeAt(index: number): number
		/** The reading of sample `index`, counted from the oldest one kept. */
		public ValueAt(index: number): number
		/** Takes one reading, at `now` seconds on whatever clock the caller keeps. */
		public Push(value: number, now: number): void
		/**
		 * Drops what has fallen out of the window, takes the run's peak and mean, and eases the scale
		 * toward the peak. The newest sample past the edge is kept as the anchor the curve exits
		 * through, carrying no weight in the peak or the mean. The graph calls this for its caller; a
		 * caller reading {@link Peak} or {@link Ceiling} without drawing calls it itself.
		 */
		public Advance(now: number): void
		/** Forgets every sample and puts the scale back where it started. */
		public Clear(): void
	}
	/**
	 * Graphs of a {@link HudSeries}, drawn onto the active surface in any {@link EHudGraph} style;
	 * {@link HudGraph} is the instance.
	 */
	interface CHudGraph {
		/**
		 * Advances `series` to `now`, on the clock its samples were pushed with, and draws it inside
		 * `box` in the style `look` asks for. The box is the plot alone: a title or a readout goes
		 * outside it. Every style is drawn against {@link HudSeries.Ceiling}, and the cell still
		 * filling shows the latest sample rather than the tallest one in it.
		 *
		 * @example
		 * MenuSDK.HudGraph.Draw(plot, this.speed, { style: MenuSDK.EHudGraph.Area, color }, now)
		 */
		Draw(box: Rectangle, series: HudSeries, look: IHudGraphLook, now: number): void
		/**
		 * The newest reading as a sweep around a ring, three quarters of a turn from the bottom left,
		 * with the run's peak left standing as a mark on the track. It is the same reading and the
		 * same scale every other style draws, in the shape a dial reads best at: one number, watched
		 * rather than followed. `thickness` is held to 1 to 2 px, as `HudCard.Arc` holds it.
		 */
		Dial(centerX: number, centerY: number, radius: number, thickness: number, fraction: number, look: IHudGraphLook, peak?: number): void
	}
	/**
	 * The graphs a card can carry: one call per frame with a run of samples and a look, and every
	 * style is drawn from the same data against the same scale.
	 *
	 * @example
	 * HudGraph.Draw(plot, series, { style: EHudGraph.Line, color: HudColors.accent }, now)
	 */
	const HudGraph: CHudGraph
}
