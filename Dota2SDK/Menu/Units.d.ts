// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** A side of a unit's screen rectangle a docked widget hangs off. */
	type WorldUnitSide = "top" | "bottom" | "left" | "right"
	/** How a frame widget draws a unit's box this frame. */
	type WorldUnitFrameShape = "box" | "box3d" | "corners3d" | "none"
	/**
	 * How a script feeds units to an overlay. The host calls `Units` once per frame and `Fill`
	 * once per unit into a reused bounds — a pass over every unit allocates nothing. `Fill`
	 * answering false skips the unit this frame without unmounting it.
	 */
	interface IWorldUnitAdapter<T> {
		/** The units to draw, asked once a tick. A unit missing from it is taken off at once. */
		Units(): readonly T[]
		/** Stable identity; a changed key is a different unit. */
		Key(unit: T): number
		/**
		 * Writes the world box of `unit` for this frame into `out`, one object reused for every unit.
		 * `false` hides the unit until it is placed again, without unmounting it.
		 */
		Fill(unit: T, out: WorldUnitBounds): boolean
		/**
		 * The handle of the game entity the unit is, when it is one. The unit's widgets are pinned to
		 * the middle of its box and moved with the camera when the frame is presented; with a handle
		 * they follow the entity too, so they keep to it even on a frame whose script pass ran late.
		 */
		Handle?(unit: T): number
		/** Tracking range in world units from the overlay's origin; unmounting keeps 15% slack. */
		MaxDistance?(): number
		/**
		 * How long, in ms, a unit takes to fade in once it is placed within `MaxDistance` and to fade
		 * out past it, scaled by the menu's animation speed and read every tick; without it a unit
		 * cuts in and out. A unit that `Fill` turns down or `Units` drops cuts out at once, and one
		 * that only leaves the screen comes back at the fade it had. The fade is written on the unit's
		 * root as `opacity`; a widget that writes its own opacity or filter gets it as `fade` in
		 * `Update` and multiplies it in.
		 */
		Fade?(): number
		/**
		 * How far off the unit's box the FIRST element on each side sits, in screen px. Docked
		 * elements stack outward from there, each one leaving its own gap behind it.
		 *
		 * Read once a tick rather than held, so it follows the ui scale it was measured against.
		 * Nothing given is flush against the box.
		 */
		Edge?(): number
	}
	/** What a widget factory receives: element supply in the overlay's layer, and the layer. */
	interface IWorldUnitHost {
		/** A fresh absolutely positioned element for this widget's own use. */
		Element(): HTMLElement
		/**
		 * A fresh absolutely positioned element inside `parent`, for a widget built as a subtree:
		 * children place in the parent's own space and leave with it. Release the subtree by
		 * releasing its root — a child is never handed back on its own.
		 */
		Child(parent: HTMLElement): HTMLElement
		/** Hands a widget's element back to the renderer's destroy queue. */
		Release(element: HTMLElement): void
		/** The world layer registered under the overlay's key, which its units are drawn in. */
		readonly Layer: IWorldLayer
	}
	/**
	 * One widget of one unit. `Update` runs when the unit is on screen, with the projected frame
	 * and the widget's docked offset from its side; `Hide` when it is not. The host never reads
	 * anything back — a widget owns its elements outright.
	 */
	interface IWorldUnitWidget<T> {
		/** The side the widget docks to, or undefined for one that overlays the box itself. */
		readonly side: Nullable<WorldUnitSide>
		/** How many px across its side the widget reserves. */
		readonly thickness: number
		/** The gap to the next widget on the same side. */
		readonly gap: number
		/**
		 * Whether the widget draws on this unit at all, asked before the stack is laid out. One that
		 * answers false takes no room from its side: what is docked past it closes up rather than
		 * standing off a gap where nothing is being drawn.
		 *
		 * `Update` is called either way, so a widget that has stopped drawing still hides itself.
		 */
		Draws?(unit: T, distance: number): boolean
		/**
		 * Draws the widget on a unit that is on screen. `fade` is what the unit is painted at this
		 * frame, 0 to 1, as it comes into the adapter's range and thins away out of it — 1 for an
		 * overlay that names no fade. The host has written it on the unit's root as `opacity`
		 * already; a widget that writes an opacity of its own, or a filter, multiplies it in.
		 */
		Update(unit: T, frame: CWorldUnitFrame, out: number, distance: number, fade: number): void
		/**
		 * Hides the widget's elements. Called once each time its unit stops being drawn, not on every
		 * frame it stays hidden.
		 */
		Hide(): void
		/**
		 * Hands this widget's elements to another unit. A widget that keeps something of the unit it
		 * was drawing between frames - a bar draining toward a health it saw, a plate fading in -
		 * drops it here, so what the elements carry belongs to the unit that has them now.
		 */
		Recycle?(): void
		/**
		 * Hands the widget's elements back through the host's `Release`. Called when its unit's subtree
		 * is destroyed rather than kept for another unit.
		 */
		Destroy(): void
	}
	/**
	 * Builds one unit's instance of a widget from the elements `host` hands out. An overlay calls it
	 * when it builds a unit's subtree; a subtree a unit leaves may be reused for another one.
	 */
	type WorldUnitWidgetFactory<T> = (host: IWorldUnitHost) => IWorldUnitWidget<T>
	/** A mounted unit overlay; destroy it to unmount every unit it tracks. */
	interface IWorldUnitOverlay {
		/**
		 * The origin distances are measured from — the local hero, typically. While it resolves to a
		 * point, nearer units cover farther ones in the shared world stack.
		 */
		Origin(origin: Nullable<WorldAnchor>): void
		/** Raises this overlay over ordinary world items while preserving distance order within it. */
		Priority(priority: number): void
		/** Shows or hides the whole overlay; hidden, its units stay mounted. */
		SetVisible(on: boolean): void
		/** Unmounts every unit, calling `Destroy` on each of its widgets, and stops the overlay. */
		Destroy(): void
	}
	/**
	 * Mounts a unit overlay: the adapter names the units, the widgets say what every unit
	 * carries, and the host owns tracking, mounting, docking and per-frame projection. A unit
	 * gets one instance of every widget, stacked along its side in array order.
	 */
	function RegisterUnitOverlay<T>(key: string, adapter: IWorldUnitAdapter<T>, widgets: readonly WorldUnitWidgetFactory<T>[]): IWorldUnitOverlay
	/** Ticks every unit overlay; the menu tick drives this before the layers flush. */
	function TickUnitOverlays(): void
	/**
	 * The settings of `WorldUnitWidgets.Frame`. Its functions are called for each unit on every frame
	 * it is drawn.
	 */
	interface WorldUnitFrameConfig<T> {
		/** The shape to draw this frame; defaults to a flat box. */
		shape?: (unit: T) => WorldUnitFrameShape
		/**
		 * The line the box is drawn with, 2 px thick when it names no thickness. A flat `"box"` takes
		 * only its colour and thickness.
		 */
		stroke: (unit: T) => Readonly<WorldStroke>
	}
	/**
	 * The settings of `WorldUnitWidgets.Bar`. Its functions are called for each unit on every frame it
	 * is drawn.
	 */
	interface WorldUnitBarConfig<T> {
		/**
		 * The side of the box the bar docks to, `"top"` when not given. On `"left"` or `"right"` it
		 * stands upright and fills from the bottom.
		 */
		side?: WorldUnitSide
		/** How thick the bar is, in px; 6 when not given. */
		thickness?: number
		/** The room before the next widget docked on the same side, in px; 4 when not given. */
		gap?: number
		/** How full the bar is, 0 to 1; a value outside is clamped. */
		fraction: (unit: T) => number
		/** The colour of the filled part, as `#rrggbb[aa]` hex. */
		color: (unit: T) => string
		/** The colour of the track behind the fill, as `#rrggbb[aa]` hex; `#000000c0` if not given. */
		background?: string
		/** The width of a border drawn inside the track's edge, in px; none when not given. */
		border?: number
		/** The colour of the border, as `#rrggbb[aa]` hex; black when not given. */
		borderColor?: string
	}
	/**
	 * The settings of `WorldUnitWidgets.Label`. Its functions are called for each unit on every frame
	 * it is drawn.
	 */
	interface WorldUnitLabelConfig<T> {
		/** The side of the box the label docks to, `"bottom"` when not given. */
		side?: WorldUnitSide
		/** The font size in px, 14 when not given. The label takes 1.4 times it across its side. */
		size?: number
		/** The room before the next widget docked on the same side, in px; 3 when not given. */
		gap?: number
		/** The text to show; `""` hides the label. */
		text: (unit: T) => string
		/** The colour of the text, `#ffffff` when not given. */
		color?: (unit: T) => string
		/** The font weight, 400 when not given. */
		weight?: number
		/** Whether the text has a 1 px black outline; on when not given. */
		outline?: boolean
	}
	/** The built-in unit widgets; custom ones implement {@link IWorldUnitWidget} directly. */
	const WorldUnitWidgets: {
		/** A widget that outlines the unit's box, in the shape and stroke `config` gives each frame. */
		Frame<T>(config: WorldUnitFrameConfig<T>): WorldUnitWidgetFactory<T>
		/** A bar as long as the side of the unit's box it docks to, filled to `config.fraction`. */
		Bar<T>(config: WorldUnitBarConfig<T>): WorldUnitWidgetFactory<T>
		/** A line of text docked to a side of the unit's box, centred along it. */
		Label<T>(config: WorldUnitLabelConfig<T>): WorldUnitWidgetFactory<T>
	}
}
