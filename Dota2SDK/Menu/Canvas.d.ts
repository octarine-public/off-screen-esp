// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** Image presentation in screen pixels. A source rectangle selects a sprite sheet frame. */
	interface CanvasImageStyle {
		/** Tint the image is multiplied by, white when omitted; its alpha fades the image. */
		readonly color?: Color
		/** Corner radius in px. */
		readonly radius?: number
		/**
		 * Clips the image to the ellipse its box holds, a circle in a square box, in place of
		 * {@link radius}.
		 */
		readonly circle?: boolean
		/** Rotation in degrees, clockwise about the image's centre. */
		readonly angle?: number
		/** Draws the image in greyscale. */
		readonly grayscale?: boolean
		/** Only the part of the image inside this rectangle is drawn, in the px of its position. */
		readonly clip?: Rectangle
		/** Top-left corner of the part of the file to draw, in its own pixels ({@link ImageSize}). */
		readonly sourcePosition?: Vector2
		/**
		 * Size of the part of the file to draw, in the file's own pixels. Nothing is drawn while either
		 * side is 0 or less, and the image waits to show until the host knows the file's size.
		 */
		readonly sourceSize?: Vector2
		/**
		 * `"cover"`, the default, fills the box with the image's proportions kept and crops the
		 * overhang about its centre, once the host knows the file's size; `"stretch"` scales the whole
		 * source to the box.
		 */
		readonly fit?: "cover" | "stretch"
	}
	/** An analytic shape, with the stroke centred on its boundary. Angles are clockwise degrees. */
	interface CanvasShapeStyle {
		/** Fill colour, white when omitted. */
		readonly color?: Color
		/** Stroke colour, white when omitted. */
		readonly borderColor?: Color
		/** Stroke width in px, held to 1 to 2; no stroke while 0 or omitted. */
		readonly borderWidth?: number
		/** Corner radius of a {@link Canvas.Rect} in px; {@link Canvas.Circle} ignores it. */
		readonly radius?: number
		/**
		 * Where the sector begins, in degrees clockwise from three o'clock; -90, twelve o'clock, when
		 * omitted.
		 */
		readonly start?: number
		/**
		 * How many degrees of the shape are drawn from {@link start}, clockwise, or counter-clockwise
		 * when negative. 360, the whole shape, when omitted; 0 draws nothing.
		 */
		readonly sweep?: number
	}
	/**
	 * A circular timer for {@link Canvas.CircleTimer}: a round portrait with a progress ring on its
	 * rim and a text over the middle.
	 */
	interface CanvasCircleTimerStyle {
		/** Path of the portrait. Without one only {@link text} is painted, with no ring or shadow. */
		readonly texture?: string
		/** Share of a full turn the ring covers clockwise from twelve o'clock, clamped to 0 to 1. */
		readonly progress: number
		/** Colour of the ring. */
		readonly color: Color
		/**
		 * Width of the ring in px, inside the portrait's edge; 8% of the diameter, and 3 dp at least,
		 * when omitted.
		 */
		readonly ringWidth?: number
		/**
		 * Width in px of a soft shadow around the portrait, {@link shadowColor} at its rim and clear at
		 * its reach, with a 1 dp rim line in that colour. It also shades the portrait's edge inward 2.5
		 * times as far unless {@link innerShadow} is off. No shadow when omitted or 0.
		 */
		readonly shadow?: number
		/** Colour of the shadow at the portrait's rim; black at alpha 153 when omitted. */
		readonly shadowColor?: Color
		/** Whether the outer shadow also shades the portrait's inner edge. Defaults to true. */
		readonly innerShadow?: boolean
		/** Text centred over the timer and outlined, painted with or without a {@link texture}. */
		readonly text?: string
		/** Font size of the text as a share of the diameter, shrunk to fit; 0.35 when omitted. */
		readonly textScale?: number
		/** Colour of the text, white when omitted. */
		readonly textColor?: Color
		/** Font weight of the text, 700 when omitted. */
		readonly weight?: number
		/**
		 * Fades the whole timer, 0 to 1, by multiplying the alpha of every colour in it; 1 when
		 * omitted. Nothing is painted at 0.
		 */
		readonly opacity?: number
	}
	/** Text measured and painted in the same RmlUi face and pixel size. */
	interface CanvasTextStyle {
		/** Text colour, white when omitted. Its alpha fades the whole run, outline included. */
		readonly color?: Color
		/** Font family; the menu's own, which follows its language, when omitted. */
		readonly family?: string
		/**
		 * Font size in px, 18 when omitted. {@link Canvas.TextIn} caps it at the box's height, shrinks
		 * it to fit the box's width, and without one takes it from {@link division}.
		 */
		readonly size?: number
		/** Font weight, 400 when omitted; the menu's weight setting may raise it, never lower it. */
		readonly weight?: number
		/** Sets the text in the italic face. */
		readonly italic?: boolean
		/** `false` drops the dark outline text carries by default; {@link effect} overrides it. */
		readonly outline?: boolean
		/** What is drawn under the glyphs: an outline when omitted, a shadow, or nothing. */
		readonly effect?: EHudTextEffect
		/** How dark the outline or shadow is drawn, 0 to 1; 1 when omitted. */
		readonly effectOpacity?: number
		/**
		 * Where {@link Canvas.TextIn} sets the text in its box: `Top` or `Bottom`, `Left` or `Right`,
		 * centred on an axis the flags leave open. `TextFlags.Center` when omitted.
		 */
		readonly flags?: TextFlags
		/**
		 * Without a {@link size}, {@link Canvas.TextIn} sets the text at the box's height divided by
		 * this; 1.2 when omitted, and never less.
		 */
		readonly division?: number
	}
	/**
	 * The size of the image at `path` in the file's own pixels, the units of
	 * {@link CanvasImageStyle.sourcePosition} and {@link CanvasImageStyle.sourceSize}; it does not
	 * change with resolution or menu scale. `(0, 0)` while the host cannot tell it yet.
	 */
	function ImageSize(path: string): Vector2
	/** The size of a text run in screen pixels. */
	function TextSize(text: string, style?: CanvasTextStyle): Vector3
	/**
	 * A script's drawing surface, in screen px, or in px from the anchor while {@link Canvas.Anchor}
	 * is in force. Anything a frame does not paint again is hidden. While the host keeps overlays
	 * down, such as outside a match, nothing shows unless the canvas is on {@link EPanelLayer.Menu}.
	 *
	 * What it draws lands on whole pixels unless the canvas is made with
	 * {@link EHudPlacement.Subpixel}, for markers that glide, such as icons crossing the minimap.
	 * @example
	 * const canvas = new MenuSDK.Canvas("cooldowns")
	 * canvas.Image(ability.TexturePath, position, size, { radius: 4 })
	 * @example
	 * const subpixel = MenuSDK.EHudPlacement.Subpixel
	 * const minimap = new MenuSDK.Canvas("minimap-icons", MenuSDK.EPanelLayer.World, subpixel)
	 */
	class Canvas {
		/**
		 * A canvas on the surface `key` names, made in `layer` with `placement` the first time the key
		 * is used and kept for the session: every canvas on that key shares it as it was first made.
		 */
		constructor(key: string, layer?: EPanelLayer, placement?: EHudPlacement)
		/** Hides the surface immediately. */
		public Clear(): void
		/**
		 * Paints what follows, until the next call or the end of the frame, in px from where `anchor`
		 * lands rather than from the screen's corner: the core places it when the frame is presented,
		 * so a bar over a unit stays on the unit while the camera pans, even on a frame whose script
		 * pass ran late. Without an argument painting is in screen px again.
		 * @example
		 * const anchor = new CRenderAnchor()
		 * anchor.SetEntity(unit.Handle, 0, 0, 200)
		 * canvas.Anchor(anchor)
		 * canvas.Rect(new Vector2(-50, -10), new Vector2(100, 8), { color: Color.Green })
		 * canvas.Anchor()
		 */
		public Anchor(anchor?: IHudAnchor): void
		/**
		 * {@link Canvas.Anchor} on the world point `x, y, z`, `screenX, screenY` px from where it lands,
		 * through an anchor the canvas keeps for the frame: a marker at a place in the world needs no
		 * anchor of its own. Pin what moves to an anchor of its own (`CRenderAnchor.SetEntity`).
		 * @example
		 * canvas.AnchorWorld(ward.x, ward.y, ward.z)
		 * canvas.Image(path, new Vector2(-16, -16), new Vector2(32, 32))
		 * canvas.Anchor()
		 */
		public AnchorWorld(x: number, y: number, z: number, screenX?: number, screenY?: number): void
		/**
		 * Pins what is painted after it, until {@link Canvas.Anchor} or the end of the frame, to the
		 * world point `x, y, z`: screen px the script projected from that point, or from things near
		 * it, keep up with the camera even on a frame whose script pass ran late. Where the host has no
		 * anchors or the point does not project, what follows stays where it was painted.
		 * @example
		 * if (Source2SDK.Projection.WorldToScreenXYZ(hit.x, hit.y, hit.z, at)) {
		 * 	canvas.Pin(hit.x, hit.y, hit.z)
		 * 	canvas.Circle(new Vector2(at[0] - 4, at[1] - 4), new Vector2(8, 8), { color })
		 * 	canvas.Anchor()
		 * }
		 */
		public Pin(x: number, y: number, z: number): void
		/**
		 * {@link Canvas.Pin} on `x, y, z` world units from the origin of the entity `handle` names: what
		 * follows keeps to the entity too.
		 * @example
		 * canvas.PinEntity(pawn.Handle, 0, 0, 36)
		 */
		public PinEntity(handle: number, x?: number, y?: number, z?: number): void
		/** Paints a rectangular image with optional clipping, tint, rotation and desaturation. */
		public Image(path: string, position: Vector2, size: Vector2, style?: CanvasImageStyle): void
		/** Paints a square frame from a horizontal sprite sheet once its intrinsic size is available. */
		public Sprite(path: string, position: Vector2, size: Vector2, frame: number, style?: CanvasImageStyle): void
		/** Paints a rectangle or a swept rectangle. */
		public Rect(position: Vector2, size: Vector2, style?: CanvasShapeStyle): void
		/** Paints a disc, ring or sector with the same analytic edge as rectangles. */
		public Circle(position: Vector2, size: Vector2, style?: CanvasShapeStyle): void
		/**
		 * Paints an arc of a circle `thickness` pixels wide with round ends, from `start` clockwise
		 * by `sweep`, both in degrees with twelve o'clock at -90. Unlike a shape's border it takes
		 * any width: it goes out through the capsules shader as one quad, and as a chain of lines
		 * where the shader is missing or the frame's slots are spent.
		 * @example
		 * canvas.Arc(center, radius, 4, -90, remaining * 360, playerColor)
		 */
		public Arc(center: Vector2, radius: number, thickness: number, start: number, sweep: number, color: Color): void
		/**
		 * Paints a circular timer `size` pixels across with its top-left corner at `position`: the
		 * portrait as a disc, the progress ring on its rim, and the reading centred over it. Nothing
		 * is painted under or around the portrait, so the ring reads as part of it.
		 * @example
		 * canvas.CircleTimer(position, 40, {
		 * 	texture: hero.TexturePath,
		 * 	progress: remaining / duration,
		 * 	color: playerColor,
		 * 	text: remaining.toFixed(1)
		 * })
		 */
		public CircleTimer(position: Vector2, size: number, style: CanvasCircleTimerStyle): void
		/** Paints a line between screen positions. */
		public Line(start: Vector2, end: Vector2, color: Color, width?: number): void
		/** Draws a closed world polygon, projecting each vertex once per frame. */
		public WorldPolygon(points: readonly Vector3[], color: Color, width?: number): void
		/** A line ending in two arrow strokes. */
		public LineArrow(start: Vector2, end: Vector2, color: Color, width?: number, length?: number, angle?: number): void
		/** Paints a text run at its top-left corner. */
		public Text(text: string, position: Vector2, style?: CanvasTextStyle): void
		/** Paints text aligned within a rectangle, at an explicit size or a fraction of its height. */
		public TextIn(text: string, box: Rectangle, style?: CanvasTextStyle): void
		/** Paints a readout next to the cursor. */
		public CursorText(text: string, style?: CanvasTextStyle): void
	}
}
