// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * Lines, rings, areas, images and text over the world, drawn on one HUD surface. What the
	 * canvas projects itself ({@link Polyline}, {@link Area}, {@link Ring}) is pinned to the world
	 * and moves with the camera when the frame is presented; screen px a script projected itself
	 * are pinned the same way under {@link Pin}.
	 *
	 * @example
	 * const canvas = new MenuSDK.WorldCanvas("trajectory")
	 * canvas.Polyline(trajectory, 2, Color.Aqua)
	 */
	class WorldCanvas {
		/**
		 * The most segments a loop handed to {@link Area} may hold; the rest of a shader batch is
		 * room for the edges the camera and the screen cut into it.
		 */
		public static readonly AreaSegments: number
		/** `key` names the surface the canvas draws on, and two canvases under one key share it. */
		constructor(key: string)
		/** Wipes what the canvas shows, right away. */
		public Clear(): void
		/**
		 * Pins what is drawn after it, until {@link Unpin}, to the world point `x, y, z`: screen px the
		 * script projected from that point, or from things near it, keep up with the camera even on a
		 * frame whose script pass ran late.
		 * @example
		 * if (canvas.Project(impact, at)) {
		 * 	canvas.Pin(impact.x, impact.y, impact.z)
		 * 	canvas.Dot(at[0], at[1], 3, Color.Red)
		 * 	canvas.Unpin()
		 * }
		 */
		public Pin(x: number, y: number, z: number): void
		/**
		 * {@link Pin} on `x, y, z` world units from the origin of the entity `handle` names: what is
		 * drawn follows the entity too.
		 * @example
		 * canvas.PinEntity(hero.Handle, 0, 0, hero.BoundingBox.MaxZ - hero.Position.z)
		 */
		public PinEntity(handle: number, x?: number, y?: number, z?: number): void
		/** Ends a {@link Pin}: what is drawn after it stands on the screen again. */
		public Unpin(): void
		/** A run between two points already in screen pixels. */
		public Line(startX: number, startY: number, endX: number, endY: number, width: number, color: Color): void
		/**
		 * A line through `points`, `width` dp thick, broken wherever a point does not project. It is
		 * drawn by the capsule shader, or as separate strips on a host without it or once the
		 * frame's shader slots run out.
		 */
		public Polyline(points: Vector3[], width: number, color: Color): void
		/**
		 * A closed loop over the world with its inside painted: `interior` along the edge, easing to
		 * `depth` of its alpha deepest in, under the edge stroked in `color`. The loop closes on its
		 * first point and holds at most {@link WorldCanvas.AreaSegments} segments. What lies behind
		 * the camera or far off screen is cut away first, so the inside stays whole however close the
		 * camera stands. With no shader slot left this frame, or on a host without the capsules
		 * shader, the edge is drawn alone.
		 *
		 * @example
		 * canvas.Area(ring, 2, Color.Red, new Color(255, 0, 0, 110), 0.25)
		 */
		public Area(loop: Vector3[], width: number, color: Color, interior: Color, depth: number): void
		/**
		 * A ring through `edge`, centred on `center` and drawn by the shader as one element.
		 * Segmenting a ring into quads loses every run that projects shorter than a pixel, so a small
		 * or distant one came out as a broken arc; the sdf circle has no joints and no minimum size.
		 */
		public Ring(center: Vector3, edge: Vector3, width: number, color: Color): boolean
		/** A ring in screen pixels, drawn by the shader rather than by segments. */
		public Circle(centerX: number, centerY: number, radius: number, width: number, color: Color): void
		/** A filled disc in screen pixels. */
		public Dot(centerX: number, centerY: number, radius: number, color: Color): void
		/**
		 * A picture centred on the point, in screen pixels. White-filled art is painted by `color`
		 * the way every icon in the interface is tinted; the caller owns the aspect ratio, because
		 * only it knows what the file holds.
		 */
		public Image(centerX: number, centerY: number, width: number, height: number, path: string, color: Color): void
		/** A run of text in screen pixels, centred on the point. */
		public Text(centerX: number, centerY: number, text: string, size: number, color: Color, bold?: boolean): void
		/** Projects a world point, answering `false` when it is behind the camera. */
		public Project(point: Vector3, out: [number, number]): boolean
	}
}
