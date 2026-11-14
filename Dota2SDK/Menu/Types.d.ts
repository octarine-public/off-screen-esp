// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** A world position in engine units. Anything with `x`, `y`, `z` fits — a Vector3 included. */
	interface WorldPoint {
		/** World x, in engine units. */
		readonly x: number
		/** World y, in engine units. */
		readonly y: number
		/** World z, the vertical axis, in engine units. */
		readonly z: number
	}
	/** A fixed point, or a provider re-read every frame; `undefined` from a provider hides the node. */
	type WorldAnchor = WorldPoint | (() => Nullable<WorldPoint>)
	/** A stroke for lines and chains, in px; colors are `#rrggbb[aa]` hex. */
	interface WorldStroke {
		/** Color of the line. */
		readonly color: string
		/** Width of the line in px; 2 when omitted. */
		readonly thickness?: number
		/** Width of an outline around the line, in px; none when omitted or 0. */
		readonly outline?: number
		/** Color of the outline; `#000000aa` when omitted. */
		readonly outlineColor?: string
	}
	/** A filled shape, in px; `border` draws inside the edge. */
	interface WorldShapeStyle {
		/** Color the shape is filled with. */
		readonly fill: string
		/** Width of the border in px; none when omitted or 0. */
		readonly border?: number
		/** Color of the border; `#000000ff` when omitted. */
		readonly borderColor?: string
		/** Corner radius for rectangles; a circle ignores it. */
		readonly radius?: number
	}
	/** A text run, in px. */
	interface WorldTextStyle {
		/** Font size in px. */
		readonly size: number
		/** Color the text is drawn in. */
		readonly color: string
		/** Font weight, 400 when omitted; the menu's font weight setting can raise it. */
		readonly weight?: number
		/** Whether the text gets a 1 px black outline; on unless `false`. */
		readonly outline?: boolean
	}
	/** A two-tone bar: what remains in `fill` over a `background` track. */
	interface WorldBarStyle {
		/** Color of the filled part, which grows from the left edge. */
		readonly fill: string
		/** Color of the track; `#000000aa` when omitted. */
		readonly background?: string
		/** Width of the track's border in px, which the fill sits inside; none when omitted or 0. */
		readonly border?: number
		/** Color of the track's border; `#000000ff` when omitted. */
		readonly borderColor?: string
	}
	/**
	 * A drawing that follows a world point. A node owns one element, keeps whatever it was told
	 * between calls, and re-projects every frame: scripts set it up once and only touch it again
	 * to change it. The primitive kind is fixed by the first call — an element cannot shed a
	 * role's styling, so switching kinds is a contract violation and throws.
	 */
	interface IWorldNode {
		/** The world point the node follows; a provider is re-read every frame. */
		Anchor(anchor: WorldAnchor): IWorldNode
		/** Screen-px offset from the projected anchor. */
		Offset(x: number, y: number): IWorldNode
		/** A filled circle of `radius` px, centered on the anchor. */
		Circle(radius: number, style: WorldShapeStyle): IWorldNode
		/** A filled rectangle, centered on the anchor. */
		Rect(width: number, height: number, style: WorldShapeStyle): IWorldNode
		/** A centered text run. */
		Text(text: string, style: WorldTextStyle): IWorldNode
		/** A centered image; `color` tints it. */
		Image(path: string, width: number, height: number, color?: string): IWorldNode
		/**
		 * A polyline in world space through the x, y, z triples of `points`: `segments` lines joining
		 * the first `segments + 1` points in order, drawn as one shape. `points` is kept and read again
		 * every frame, so it can be changed in place. A line with an end behind the camera is left
		 * out.
		 */
		Chain(points: ArrayLike<number>, segments: number, stroke: WorldStroke): IWorldNode
		/** Fades the node between the two distances from the layer's fade origin, in world units. */
		FadeByDistance(from: number, to: number): IWorldNode
		/** Hides the node while `on` is false, keeping what it was told; a node starts shown. */
		Show(on: boolean): IWorldNode
		/** Removes the node from its layer and takes down what it drew. */
		Destroy(): void
	}
	/**
	 * One script's world drawing surface. Retained nodes live until destroyed; the immediate
	 * calls draw for one frame and vanish on the next — call them every frame from a Draw
	 * listener. Everything lands in the world layer document, so nothing drawn here can
	 * reformat the menu.
	 */
	interface IWorldLayer {
		/** A retained node; set an anchor and a primitive, then leave it be. */
		Node(): IWorldNode
		/** One line for this frame, in world space. */
		Line(from: WorldPoint, to: WorldPoint, stroke: WorldStroke): void
		/** A polyline for this frame: x, y, z triples, `segments` joins. */
		Chain(points: ArrayLike<number>, segments: number, stroke: WorldStroke): void
		/** A text run for this frame, centered over the point. */
		Text(at: WorldPoint, text: string, style: WorldTextStyle): void
		/** A filled circle for this frame, centered on the point. */
		Circle(at: WorldPoint, radius: number, style: WorldShapeStyle): void
		/** A filled rectangle for this frame, centered on the point. */
		Rect(at: WorldPoint, width: number, height: number, style: WorldShapeStyle): void
		/** An image for this frame, centered on the point. */
		Image(at: WorldPoint, path: string, width: number, height: number): void
		/**
		 * The twelve edges of `bounds`' box for this frame, turned by its `yaw` and drawn as one shape;
		 * nothing is drawn while a corner is behind the camera. `stubs` draws only the end of each edge at
		 * every corner: 15% of its length, at most 14 px.
		 */
		Box3D(bounds: Readonly<WorldUnitBounds>, stroke: WorldStroke, stubs?: boolean): void
		/**
		 * A circle lying on the ground for this frame: a world-space ring of `radiusUnits`
		 * around the point, projected with the perspective the ground actually has.
		 */
		GroundCircle(center: WorldPoint, radiusUnits: number, stroke: WorldStroke): void
		/** A horizontal bar for this frame, centered over the point; `fraction` fills it. */
		Bar(at: WorldPoint, width: number, height: number, fraction: number, style: WorldBarStyle): void
		/** The origin `FadeByDistance` and unit gating measure from — the local hero, typically. */
		FadeOrigin(origin: Nullable<WorldAnchor>): void
		/** Hides the whole layer without tearing anything down. */
		SetVisible(on: boolean): void
		/** Destroys every retained node; pooled immediate elements stay for reuse. */
		Clear(): void
		/** Unregisters the layer and destroys everything it drew. */
		Destroy(): void
	}
}
