// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** The curve a {@link Tween} moves along, as {@link EaseValue} evaluates it. */
	const enum Ease {
		Standard = 0,
		Out = 1,
		Enter = 2,
		Pop = 3,
		Linear = 4,
		/**
		 * Stands where it starts for the whole run and lands at the end: a value held for a time,
		 * which is how a highlight or a hint stays on screen for its while with motion switched off.
		 */
		Hold = 5
	}
	/**
	 * How long the menu's motions take, in ms at the designed pace. Handed to a {@link Tween}, each
	 * plays faster or slower with the animation speed.
	 */
	const Duration: {
		/** A hover fill or highlight turning on or off. */
		readonly Hover: 150
		/** A chevron turning or a marker sliding to its place. */
		readonly Slide: 180
		/** An element fading in or out. */
		readonly Fade: 200
		/** A dropped tile settling into its slot. */
		readonly Reveal: 300
		/** The window moving between pages, and a sub-panel sliding in. */
		readonly Page: 220
	}
	/**
	 * How far along, 0 to 1, a motion on `ease` stands with the share `t` of its time gone.
	 * `Ease.Hold` answers 0 until `t` reaches 1.
	 */
	function EaseValue(ease: Ease, t: number): number
	/**
	 * The range the animation speed control offers, as a fraction of the designed pace, and what a
	 * stored theme is read into.
	 */
	const AnimationSpeedRange: readonly [0.4, 3]
	/**
	 * Global speed multiplier applied to every tween and stylesheet transition;
	 * 1 is the designed pace, higher is faster. Held to {@link AnimationSpeedRange}.
	 */
	function SetAnimationSpeed(value: number): void
	/**
	 * The theme's animation speed: what every designed duration is divided by, 1 at the designed pace.
	 */
	function AnimationSpeed(): number
	/**
	 * Switches every motion on the surfaces of `scope` on or off. Off, a {@link Tween} there lands on
	 * its target the moment it is asked to move and one already under way lands on the next frame,
	 * while {@link MotionSpan} answers 0, so a surface that times its motion by hand stands still
	 * with it. The Animations page drives it: "Menu animations" for the menu, "Overlay animations"
	 * for the panels and the world.
	 */
	function SetMotionEnabled(scope: EThemeScope, enabled: boolean): void
	/** Whether the surfaces of `scope` move, as {@link SetMotionEnabled} last left them. */
	function MotionEnabled(scope: EThemeScope): boolean
	/**
	 * How long a motion designed to take `duration` ms plays on the surfaces of `scope`: the duration
	 * at the theme's animation speed, or 0 while motion there is switched off. A surface that times
	 * its motion by hand asks for its span here, so the speed control and the Animations page reach
	 * it the way they reach a {@link Tween}. A lifetime, a delay or a hold is time rather than motion
	 * and keeps its own duration.
	 *
	 * @example
	 * const span = MenuSDK.MotionSpan(ENTER_MS, MenuSDK.EThemeScope.World)
	 * const along = MenuSDK.MotionProgress(now, this.shownAt, span)
	 */
	function MotionSpan(duration: number, scope: EThemeScope): number
	/**
	 * How far along, 0 to 1, a motion begun at `since` and played over `span` ms stands at `now`. A
	 * span of 0, as for a motion switched off, answers 1.
	 */
	function MotionProgress(now: number, since: number, span: number): number
	/**
	 * The share of a `duration`-long motion that `elapsed` ms cover on the surfaces of `scope`, for a
	 * value stepped towards its target frame by frame. While motion there is switched off a step
	 * covers the whole of it.
	 *
	 * @example
	 * const step = MenuSDK.MotionStep(dt, REVEAL_MS, MenuSDK.EThemeScope.Panels)
	 * this.reveal = Math.min(this.reveal + step, 1)
	 */
	function MotionStep(elapsed: number, duration: number, scope: EThemeScope): number
	/**
	 * A number moved towards a target over time, each step handed to the `apply` it was built with.
	 * Every running tween advances once a menu frame.
	 */
	class Tween {
		/**
		 * A value that eases towards a target, applied at most once per frame. `apply` runs with
		 * `scope` active, so a fill that reads the theme paints the surface the tween belongs to
		 * rather than whichever scope happened to be ticking. The default captures the scope of the
		 * render or effect that created the tween, which is right everywhere except a tween built at
		 * module scope for a surface outside the menu - name that scope explicitly.
		 *
		 * @example
		 * const reveal = new Tween(0, applyPanelReveal, EThemeScope.Panels)
		 */
		constructor(initial: number, apply: (value: number) => void, scope?: EThemeScope)
		/** The number the tween stands at, moving along the curve while it runs. */
		public get Value(): number
		/** Whether a motion is under way, from a `To` or `Elapse` until it lands or is cancelled. */
		public get Running(): boolean
		/**
		 * Moves the value to `target` over a motion designed to take `duration` ms, at the theme's
		 * animation speed; while the tween's scope stands still (see {@link SetMotionEnabled}) it
		 * lands there at once, `done` included.
		 */
		public To(target: number, duration: number, ease?: Ease, done?: () => void): void
		/**
		 * Moves the value to `target` over `duration` ms of time rather than of motion: neither the
		 * animation speed nor a scope standing still shortens it. For a lifetime, a delay, or travel
		 * paced by a speed of its own - what the user reads off it is how long it takes.
		 *
		 * @example
		 * life.Elapse(0, ToastLife, Ease.Linear, exit)
		 */
		public Elapse(target: number, duration: number, ease?: Ease, done?: () => void): void
		/**
		 * Jumps to `value` at once and hands it to `apply`. A motion under way ends there, and its
		 * `done` runs.
		 */
		public Set(value: number): void
		/** Stops a motion where it stands. Its `done` is dropped without being called. */
		public Cancel(): void
		/**
		 * Moves the value to where its motion stands at `now`, on the `hrtime()` clock, and lands it on
		 * the target once the time is up. {@link tickTweens} calls it for every running tween.
		 */
		public Tick(now: number): void
	}
	/**
	 * Advances every running {@link Tween} to `now`, on the `hrtime()` clock. A tween that throws on
	 * its step is cancelled. The menu calls it once a frame.
	 */
	function tickTweens(now: number): void
	/** How {@link PopIn} brings an element in. */
	interface PopInOptions {
		/** The scale the element grows from to its own size: 0.98 by default. */
		readonly scale?: number
		/** Where the element starts out from, in dp, relative to where the layout stands it. */
		readonly dx?: number
		/** Where the element starts out from vertically, in dp; positive starts it lower. */
		readonly dy?: number
		/** How long the entrance takes, in ms at the designed pace: 130 by default. */
		readonly duration?: number
		/**
		 * Ramps the theme's glass blur along with the fade, for a surface that frosts what stands
		 * behind it. A backdrop filter does not answer to an element's own opacity, so a glass panel
		 * popped in without this holds a frosted rectangle at full strength from its first frame and
		 * then snaps away with the element. The element seeds `backdropFilter: "none"` in the style
		 * React writes and carries the raster `border-radius` the filter is cut by; the fill it wears
		 * is the one element in.
		 */
		readonly blur?: boolean
	}
	/**
	 * Brings `target` in from transparent, scaled and shifted as `options` say, to opaque in its own
	 * place, on the `Ease.Pop` curve. The first step is written at once; the last leaves
	 * `opacity: 1` and `transform: "none"` on the element.
	 */
	function PopIn(target: {
		current: Nullable<HTMLElement>
	}, options?: PopInOptions): void
	/**
	 * Plays {@link PopIn} on `target` once, after the component first mounts, with the `options` of
	 * that first render.
	 */
	function usePopIn(target: {
		current: Nullable<HTMLElement>
	}, options?: PopInOptions): void
	/**
	 * Slides an element back from an offset to where the layout already stands it. The move is a
	 * transform, so nothing around it is laid out again and the element travels at whatever precision
	 * the compositor has rather than in whole pixels. `pinned` is the element doing something else
	 * with its transform - a tile being dragged writes its own and must not be written over.
	 */
	function useGlide(element: {
		current: Nullable<HTMLElement>
	}, pinned?: {
		current?: boolean
	}): (dx: number, dy: number) => void
}
