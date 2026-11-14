// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** A quad the surface paints this frame. */
	interface IHudRect {
		/** Always `"rect"`: the tag a {@link HudCommand} is told apart by. */
		readonly kind: "rect"
		/** Uses an elliptical fill, preserving both radii on non-square boxes. */
		ellipse?: boolean
		/**
		 * An ellipse shades from `color` inside `fade` of its radius to `edgeColor` at its rim, and
		 * the quad's corners past the rim stay clear, so a vignette is one fill and a soft halo
		 * another; left out, the fill runs whole to an antialiased edge and `edgeColor` is nothing.
		 * A plain quad holds `color` over `fade` of its width and melts to clear at its right edge,
		 * the wash a strip of art stands on, with its `radius` carved by the sdf mask. Not with `sdf`.
		 */
		fade?: number
		/**
		 * The colour an `ellipse` with a {@link fade} shades to at its rim, packed `0xRRGGBBAA`; clear
		 * when omitted.
		 */
		edgeColor?: number
		/** Left edge, in px. */
		x: number
		/** Top edge, in px. */
		y: number
		/** Width, in px, rounded to a whole pixel. */
		w: number
		/** Height, in px, rounded to a whole pixel. */
		h: number
		/** Fill colour, packed `0xRRGGBBAA` as {@link HudColor} builds it. */
		color: number
		/** Corner radius in px; a card carries the menu's, a bar none. */
		radius?: number
		/** A backdrop filter, for the frosted card the menu's own panels use. */
		blur?: string
		/**
		 * Width of the rim, in px, held between 1 and 2; 0 or omitted draws none. An `ellipse` has no
		 * rim.
		 */
		borderWidth?: number
		/** Rim colour, packed `0xRRGGBBAA`; clear when omitted. */
		borderColor?: number
		/**
		 * Carve the shape with the sdf shader instead of a plain border radius. A radius rasterizes on
		 * the pixel grid and shows its steps at pill size; the shader antialiases the edge. Opt-in,
		 * because the shader owns the background and a frosted card needs its own backdrop filter.
		 */
		sdf?: boolean
		/**
		 * Pixels the quad is grown by on every side, so the shader's antialiased edge falls inside the
		 * geometry instead of on its boundary, where it is clipped back to a hard one. The shape still
		 * lands on the box that was asked for. `sdf` only.
		 */
		inset?: number
		/**
		 * A soft halo that many pixels wide falling off from the shape's edge in {@link glowColor}:
		 * outside the shape while the width is positive, in which case the inset has to carry
		 * {@link GlowPad} of room for it, and inside it while the width is negative. `sdf` only.
		 */
		glow?: number
		/** Colour of the {@link glow} halo, packed `0xRRGGBBAA`; clear when omitted. */
		glowColor?: number
		/** Clockwise sector in percent, starting at twelve o’clock plus start degrees. */
		sweep?: number
		/**
		 * Where the {@link sweep} sector begins, in degrees past twelve o'clock; 0 when omitted. Read
		 * with `sdf` or `ellipse` only.
		 */
		start?: number
	}
	/**
	 * A run of text in a box it is laid out inside, rather than at a computed corner. Centring it by
	 * arithmetic never lined up: the height a font reports is the glyph box, RmlUi lays out by the
	 * line box, and the leftover leading showed as a label sitting off the bar beside it. A line
	 * height equal to the box centres the glyphs exactly, and an alignment pins the edge without
	 * trusting a measured width.
	 */
	interface IHudText {
		/** Always `"text"`: the tag a {@link HudCommand} is told apart by. */
		readonly kind: "text"
		/** Explicit line height and whitespace for multiline readouts. */
		lineHeight?: number
		/**
		 * Keeps the text's spaces and line breaks and lets it run past the box; otherwise it stands on
		 * one line, clipped to the box.
		 */
		preformatted?: boolean
		/** Left edge of the box, in px. */
		x: number
		/** Top edge of the box, in px. */
		y: number
		/** Width of the box, in px, rounded to a whole pixel; {@link align} places the text in it. */
		w: number
		/**
		 * Height of the box, in px, rounded to a whole pixel. It is also the line height while
		 * {@link lineHeight} is unset, which centres one line in the box.
		 */
		h: number
		/** Where the text stands across the box: on its left edge, its right edge or its centre. */
		align: "left" | "right" | "center"
		/**
		 * What is drawn; an empty string draws nothing. A line break in it counts only when
		 * {@link preformatted}.
		 */
		text: string
		/** Font size, in px. */
		size: number
		/** Font weight on the CSS scale; the menu's font weight setting may raise it, never lower. */
		weight: number
		/** Glyph colour, packed `0xRRGGBBAA` as {@link HudColor} builds it. */
		color: number
		/**
		 * The rim under the glyphs that holds them against what stands behind: none, a black shadow
		 * or a black outline. {@link effectOpacity} sets how dark it is.
		 */
		effect: EHudTextEffect
		/**
		 * The face the run is set in, defaulting to the one the surface itself carries. A reading
		 * choosing its own names it here, and whatever measured it has to have been given the same
		 * name: a width taken from one face and laid out in another lands the run beside where it
		 * was aimed.
		 */
		family?: string
		/** Selects the italic face. */
		italic?: boolean
		/**
		 * How strongly the whole run is drawn, 0 to 1, defaulting to fully opaque. A fade belongs here
		 * rather than in the colour's alpha: a glyph effect is baked with its own opaque colour, so a
		 * faded fill over an untouched rim leaves the run reading as a black silhouette, while opacity
		 * is multiplied through every layer the run is drawn from - and, unlike an effect colour that
		 * moved, costs the font atlas nothing.
		 */
		opacity?: number
		/**
		 * How dark the glyph effect under the run is drawn, 0 to 1, defaulting to a solid black. A
		 * rim heavy enough to hold a reading over a bright wall is heavier than the same reading
		 * wants over anything else, so the darkness is asked apart from which effect is drawn.
		 *
		 * Snapped to twenty steps before it reaches the engine: the font atlas keeps a layer per
		 * distinct effect per size, so every value a dragged slider passes through on its way
		 * somewhere would mint another one and hold it for the session.
		 */
		effectOpacity?: number
		/** How far the run is scrolled inside its box, in px, for a line read by travelling it. */
		scroll?: number
		/**
		 * How far the glyphs dissolve into the box's left edge, in dp, for a line the box cuts rather
		 * than one clipped to a prefix. 0 when omitted, a hard edge.
		 */
		fadeHead?: number
		/** How far the glyphs dissolve into the box's right edge, in dp, as {@link fadeHead} does. */
		fadeTail?: number
	}
	/**
	 * What a run of text is cut against the thing behind it with. A card carries its own glass and
	 * needs none of it; a run standing on the world does, because the map behind a label is not ours
	 * to darken and every colour loses to some wall somewhere.
	 *
	 * The widths are constant rather than following the font size, so the engine keeps one extra glyph
	 * layer per size rather than one per caller.
	 */
	const enum EHudTextEffect {
		None = 0,
		Shadow = 1,
		Outline = 2
	}
	/** Names of the glyph effects, in the order a dropdown offering them lists them. */
	const HudTextEffectNames: string[]
	/** Where a surface stands what it draws on the screen's pixel grid. */
	const enum EHudPlacement {
		/**
		 * Positions and sizes are rounded to whole pixels: art lands texel for pixel, and a marker on
		 * something the game draws on whole pixels, such as a health bar, moves in step with it.
		 */
		Pixel = 0,
		/**
		 * Positions keep their fractions, so an icon gliding across the minimap moves smoothly rather
		 * than a pixel at a time. Sizes stay whole pixels, centred on the box asked for, except a
		 * sprite frame (an image with `sourceW` and `sourceH`): where the host can cut it out of its
		 * sheet, it is cut at the frame's own resolution and scaled to the exact size asked for.
		 */
		Subpixel = 1
	}
	/** An image the surface paints this frame. */
	interface IHudImage {
		/** Always `"image"`: the tag a {@link HudCommand} is told apart by. */
		readonly kind: "image"
		/** Clips to an ellipse; square boxes use the ordinary rounded clip. */
		circle?: boolean
		/** Left edge, in px. */
		x: number
		/** Top edge, in px. */
		y: number
		/**
		 * Width, in px, rounded to a whole pixel except for a sprite frame placed
		 * {@link EHudPlacement.Subpixel}.
		 */
		w: number
		/**
		 * Height, in px, rounded to a whole pixel except for a sprite frame placed
		 * {@link EHudPlacement.Subpixel}.
		 */
		h: number
		/**
		 * The art drawn: a file a package ships under `scripts_files/`, a resource of the game's own,
		 * or a `://` source the host serves.
		 */
		path: string
		/** Colour multiplied into the art, packed `0xRRGGBBAA`; opaque white leaves the art as is. */
		color: number
		/**
		 * Corner radius in px, half the size for a round portrait. Carved by the sdf mask, so the
		 * corner carries per-pixel coverage rather than the stair steps a raster clip leaves at the
		 * menu's default 0 samples, with a {@link IHudImage.fade} or without one.
		 */
		radius?: number
		/** Degrees clockwise about the image's own centre, for a glyph that carries a bearing. */
		angle?: number
		/** Desaturates the artwork without affecting its border or neighbouring text. */
		grayscale?: boolean
		/** Cover crops to the destination's aspect ratio; stretch uses the full source. */
		fit?: "cover" | "stretch"
		/**
		 * Fraction of the width from which the art melts away towards its right edge, for a cover
		 * standing on a card it has to become part of. A mask on the element around the rounded one,
		 * so the two multiply and the corners keep their sdf edge.
		 */
		fade?: number
		/** Left edge of the part of the source drawn, in the source's own pixels. */
		sourceX?: number
		/** Top edge of the part of the source drawn, in source pixels. */
		sourceY?: number
		/**
		 * Width of the part of the source drawn, in source pixels; the source's whole width when
		 * omitted. Setting it holds the image back until the host has measured the source.
		 */
		sourceW?: number
		/** Height of the part of the source drawn, in source pixels; its whole height when omitted. */
		sourceH?: number
		/** Left edge of the rectangle the image is cut to, in px; no cut on the left when omitted. */
		clipX?: number
		/** Top edge of the rectangle the image is cut to, in px; no cut at the top when omitted. */
		clipY?: number
		/** Width of the rectangle the image is cut to, from {@link clipX}, else from {@link x}. */
		clipW?: number
		/** Height of the rectangle the image is cut to, from {@link clipY}, else from {@link y}. */
		clipH?: number
	}
	/**
	 * A straight run of one thickness, drawn as a quad rotated about its left edge. RmlUi has no path
	 * API, so a line is geometry plus a shader that carves the rounded cap inside it.
	 */
	interface IHudStrip {
		/** Always `"strip"`: the tag a {@link HudCommand} is told apart by. */
		readonly kind: "strip"
		/** Horizontal position of the start point, in px: the tip of the strip's first end. */
		x: number
		/** Vertical position of the start point, in px. */
		y: number
		/** Length from tip to tip, in px, the rounded ends included. */
		length: number
		/** Width across, in px; each end is a half circle of it. */
		thickness: number
		/** Turn about the start point, in degrees clockwise; 0 runs to the right. */
		angle: number
		/** Stroke colour, packed `0xRRGGBBAA` as {@link HudColor} builds it. */
		color: number
	}
	/** A ring, or a disc when `filled`, drawn by the sdf circle so it stays round at any size. */
	interface IHudCircle {
		/** Always `"circle"`: the tag a {@link HudCommand} is told apart by. */
		readonly kind: "circle"
		/** Horizontal position of the centre, in px. */
		x: number
		/** Vertical position of the centre, in px. */
		y: number
		/** Radius of the outer edge, in px; a ring's {@link thickness} lies inside it. */
		radius: number
		/** Width of the ring, in px; unused when {@link filled}. */
		thickness: number
		/** Colour of the disc or the ring, packed `0xRRGGBBAA` as {@link HudColor} builds it. */
		color: number
		/** Draws a solid disc instead of a ring. */
		filled: boolean
		/** A halo on the same terms as {@link IHudRect.glow}; the quad carries its own room. */
		glow?: number
		/** Colour of the {@link glow} halo, packed `0xRRGGBBAA`; clear when omitted. */
		glowColor?: number
	}
	/**
	 * A run of a circle's edge, from `start` clockwise by `sweep` radians. The capsules shader unions
	 * every segment of the run into one field and shades it once, so the whole arc is a single quad
	 * with no seam where two segments meet - a chain of {@link IHudStrip}s draws the same shape, but
	 * their rounded caps overlap at every joint and a translucent one beads there.
	 */
	interface IHudArc {
		/** Always `"arc"`: the tag a {@link HudCommand} is told apart by. */
		readonly kind: "arc"
		/** Horizontal position of the circle's centre, in px. */
		x: number
		/** Vertical position of the circle's centre, in px. */
		y: number
		/** Radius to the middle of the stroke, in px. */
		radius: number
		/** Width of the stroke, in px. */
		thickness: number
		/** Angle the arc begins at, in radians clockwise from three o'clock. */
		start: number
		/** How far the arc runs clockwise from {@link start}, in radians, up to a full turn. */
		sweep: number
		/** Stroke colour, packed `0xRRGGBBAA` as {@link HudColor} builds it. */
		color: number
		/** The native capsule slot the geometry rides in, claimed by the emitter for this frame. */
		slot: number
	}
	/**
	 * A run of straight segments of one thickness, drawn as a single quad: the capsules shader unions
	 * every segment of the run into one field and shades it once, so a curve drawn this way carries
	 * no seam at any joint and none at any alpha. A chain of {@link IHudStrip}s draws the same shape,
	 * but their rounded caps overlap at every joint and a translucent one beads there.
	 */
	interface IHudPath {
		/** Always `"path"`: the tag a {@link HudCommand} is told apart by. */
		readonly kind: "path"
		/** The points the run passes through, as x, y pairs in screen px; two of them at least. */
		points: readonly number[]
		/** Width of the stroke, in px. */
		thickness: number
		/** Stroke colour, packed `0xRRGGBBAA` as {@link HudColor} builds it. */
		color: number
		/**
		 * Paints the run's interior as well, the run read as a closed loop: this colour along the
		 * edge, under the stroke, easing towards the middle. A host whose shader predates interiors
		 * draws the stroke alone.
		 */
		interior?: number
		/** The share of {@link interior}'s alpha left deepest in, 0 to 1; 1 when omitted. */
		depth?: number
		/** The native capsule slot the geometry rides in, claimed by the emitter for this frame. */
		slot: number
	}
	/**
	 * One draw call of a {@link CHudSurface}, told apart by its `kind`. Positions and sizes are in
	 * screen px, or in px from the anchor point after {@link CHudSurface.Anchor}; colours are packed
	 * `0xRRGGBBAA` numbers, as {@link HudColor} builds them.
	 */
	type HudCommand = IHudRect | IHudText | IHudImage | IHudStrip | IHudCircle | IHudArc | IHudPath
	/**
	 * A point HUD commands can be pinned to, placed by the core when the frame is presented; Source 2's
	 * `CRenderAnchor` is one.
	 */
	interface IHudAnchor {
		/** The core's anchor slot, or -1 where the host has none: the surface then projects it itself. */
		readonly Slot: number
		/** Where the anchor lands in this frame's projection, in screen px; false when off the frame. */
		Project(out: [number, number]): boolean
	}
	/**
	 * One overlay's slice of the RmlUi document. The HUD keeps its immediate-mode API - a caller still
	 * emits a frame's worth of draw calls. On a host with HUD lists ({@link HudListsSupported}) the
	 * stream is encoded into `<hud-surface>` lists the host draws itself, and only what a list cannot
	 * draw (see {@link DrawnNatively}) keeps an element; elsewhere every command does. Elements live
	 * in pools written straight through the world writers, so a frame costs no React render and an
	 * unchanged command costs nothing at all. Only growing a pool asks React for a pass.
	 */
	class CHudSurface {
		/**
		 * Whether this surface stands with the menu rather than over the world. The host's overlay
		 * gate closes on the game's own screens and outside a match, which is right for anything
		 * pinned to the world and wrong for a window the user opened the menu to use: a settings
		 * window belongs on the main menu as much as it does in a match. A surface on the menu's
		 * own layer is part of the menu and stands with it from the start, and opens and closes on
		 * the window's own motion; one on a HUD layer is bound by whoever owns it.
		 */
		public MenuBound: boolean
		/**
		 * A surface that takes its panel under `key` on `layer`. Only the surfaces
		 * {@link HudSurfaceOf} hands out are closed with the host's frame; one built here is closed by
		 * its owner, through {@link Close} or {@link Tick}.
		 */
		constructor(key: string, layer: EPanelLayer, placement?: EHudPlacement)
		/**
		 * The theme this surface's colours resolve against, which its layer decides: what is anchored
		 * to the world wears the world's theme, what stands on the screen wears the panels' one.
		 */
		public get Scope(): EThemeScope
		/**
		 * Draws the whole surface at `value` of its strength, 0 to 1, rounded to hundredths, until the
		 * next call. Where the host draws no HUD lists, text keeps its full strength; to fade it with
		 * the rest, scale the alpha {@link hudAlpha} hands out through {@link SetHudAlphaScale}.
		 */
		public Fade(value: number): void
		/**
		 * How much of the theme's blur a frosted backdrop drawn onto the surface carries, as a fraction
		 * of its full strength. A backdrop filter is composited outside the element's opacity, so a
		 * surface fading in through {@link CHudSurface.Fade} has to ramp the frost by hand or the card
		 * holds a frosted rectangle at full strength until the glass catches up. It may overshoot 1,
		 * the way the menu's own open effects do.
		 */
		public Backdrop(fraction: number): void
		/** The fraction {@link CHudSurface.Backdrop} set; 1 while nothing did. */
		public get BackdropScale(): number
		/**
		 * Blurs everything the surface draws, text included, by `value` screen px until the next call,
		 * rounded to tenths and held between 0 and 16; 0 is sharp.
		 */
		public Blur(value: number): void
		/** Places this world surface in the shared distance stack. */
		public Depth(distance: number): void
		/**
		 * Where this surface stands among its siblings. {@link CHudSurface.Depth} is this in world
		 * terms; a screen panel raised to the front of a stack of overlapping windows sets it
		 * directly.
		 */
		public Order(index: number): void
		/**
		 * Whether what the surface shows was drawn in the host's retained pass, and so stands until
		 * the next one rather than being wiped by a frame that does not draw it.
		 * @see MenuHost.onRetainedPass
		 */
		public get Retained(): boolean
		/**
		 * Leaves the surface showing what the last frame wrote, for a drawer whose frame would come out
		 * the same, and returns whether it did. It keeps nothing after a push this frame, on a surface
		 * showing no frame, while an image waits on its texture, on a host without anchors after a
		 * frame drawn on an anchor, or when no capsule slots are left for the frame's arcs and paths.
		 * `shiftX` and `shiftY` move the kept frame by that many whole px. A push after it drops the
		 * hold.
		 *
		 * @example
		 * if (unchanged && surface.Keep(anchor.x - drawnAt.x, anchor.y - drawnAt.y)) {
		 * 	return
		 * }
		 */
		public Keep(shiftX?: number, shiftY?: number): boolean
		/**
		 * Starts an empty frame with no anchor set. {@link Push} opens a frame on its own; called
		 * mid-frame, this throws away what the frame pushed so far.
		 */
		public Open(): void
		/**
		 * Pins the commands pushed after it, until the next call or the end of the frame, to `anchor`:
		 * their positions are px from the point it lands on, which the core places when the frame is
		 * presented, so they keep up with the camera even on a frame whose script pass ran late. Called
		 * without one, the commands after it stand on the screen again. On a host without anchors the
		 * surface projects the anchor itself, and drops what is pinned to one off the frame.
		 * @example
		 * const anchor = new CRenderAnchor()
		 * anchor.SetWorld(rune.x, rune.y, rune.z + 64)
		 * surface.Anchor(anchor)
		 * surface.Push({ kind: "rect", x: -50, y: -8, w: 100, h: 8, color })
		 * surface.Anchor()
		 */
		public Anchor(anchor?: IHudAnchor): void
		/**
		 * {@link CHudSurface.Anchor} on the world point `x, y, z`, `screenX, screenY` px from where it
		 * lands, through an anchor the surface keeps for the frame: a marker at a place in the world -
		 * a rune, a ward, a spell's area - needs no anchor of its own to define and free. The anchors
		 * go out in the order of the calls, and those a frame leaves unused are freed when it ends, so
		 * a marker drawn in the same order every frame keeps its anchor. Pin what moves to an anchor
		 * of its own (`CRenderAnchor.SetEntity`), which follows it at every present.
		 * @example
		 * canvas.AnchorWorld(rune.x, rune.y, rune.z)
		 * canvas.Image(path, new Vector2(-16, -16), new Vector2(32, 32))
		 * canvas.Anchor()
		 */
		public AnchorWorld(x: number, y: number, z: number, screenX?: number, screenY?: number): void
		/**
		 * Pins the commands pushed after it, until the next call or the end of the frame, to the world
		 * point `x, y, z`, or with a handle to `x, y, z` world units from the origin of the entity it
		 * names, while they keep the screen px of the script's projection: the core moves them with the
		 * camera, and the entity, when the frame is presented. For what a script projects itself; content
		 * laid out around a point from the start belongs on {@link Anchor}. On a host without anchors,
		 * and where the point cannot be placed, the commands stand on the screen as given.
		 * @example
		 * surface.Pin(-1, impact.x, impact.y, impact.z)
		 * surface.Push({ kind: "circle", x: screen.x, y: screen.y, radius: 4, color })
		 * surface.Anchor()
		 */
		public Pin(handle: number, x: number, y: number, z: number): void
		/**
		 * A frame opens at its first command rather than on a call, so a caller drawing from more than
		 * one phase of the tick lands in one frame instead of having the earlier phase discarded.
		 */
		public Push(command: HudCommand): void
		/**
		 * Ends the frame and writes it onto the screen. The surface takes its panel the first time a
		 * frame has something to show, and a frame that needs more elements than the surface holds
		 * shows once its layer has rendered them. A surface from {@link HudSurfaceOf} is closed with
		 * the host's frame.
		 */
		public Close(): void
		/** Wipes what the surface shows, by opening and closing an empty frame. */
		public Clear(): void
		/**
		 * Takes the surface off the panel host for good, for a thing that is gone rather than merely
		 * quiet: the host walks every panel registered with it on each refresh, and a surface kept for
		 * a rune that was picked up ten minutes ago is one more of those walks, every time, for the
		 * rest of the session. The elements die with the host's own unmount.
		 */
		public Destroy(): void
		/** One tick has finished drawing: flush what was pushed, or wipe a surface that drew nothing. */
		public Tick(): void
	}
	/**
	 * The surface a panel draws into, created on first use in the layer it belongs to and kept for
	 * the session. A surface anchored to the screen goes into `Screen`, which the host stacks over
	 * every world layer it hosts — a marker over a unit can then never cover a card.
	 *
	 * The placement is the surface's for life: a key asked for again gets the surface it was first
	 * made with, whatever is asked for the second time.
	 */
	function HudSurfaceOf(key: string, layer: EPanelLayer, placement?: EHudPlacement): CHudSurface
	/**
	 * Drops the surface `key` was drawing on, if it ever drew: the caller has nothing left to put on
	 * it and nobody should tick it again. A key handed to {@link HudSurfaceOf} afterwards opens a
	 * fresh surface, so a thing that comes back gets one of its own.
	 *
	 * @example
	 * Events.on("EntityDestroyed", entity => DropHudSurface(`marker:${entity.Handle}`))
	 */
	function DropHudSurface(key: string): void
	/**
	 * Draws `drawer` at the end of every retained pass, so what it puts on a surface stands until the
	 * next pass; on a host without a retained pass every frame is one, see {@link RunRetainedHudPass}.
	 * For an overlay that stands on the screen and changes at a tick's rate - anything placed from a
	 * world position is drawn every frame, or it trails the camera.
	 * @example
	 * OnRetainedHudPass(() => panel.Draw(size, origin => DrawStrip(origin)))
	 */
	function OnRetainedHudPass(drawer: () => void): void
	/**
	 * Asks the host to run its retained pass on the next frame, for a surface drawn in it that is
	 * moving under the user's hand, such as a panel being dragged, which the pass's own rate would
	 * show moving in steps. A host without a retained pass draws every frame and ignores the call.
	 */
	function RequestRetainedHudPass(): void
	/**
	 * How much of full opacity everything drawn onto the active surface keeps right now, 0 to 1.
	 * {@link CHudCard.Frame} sets it from the card's own alpha so the readings on the glass fade with
	 * it; opening or closing a surface puts it back to 1.
	 */
	function HudAlphaScale(): number
	/** Fades everything drawn onto the active surface from here on; the card frame calls it. */
	function SetHudAlphaScale(value: number): void
	/**
	 * Makes `surface` the one {@link EmitHud} draws onto and enters its theme scope, so a colour asked
	 * of the theme meanwhile, such as `HudColors.accent`, resolves against the theme that surface
	 * wears. Called without one, it hands back the surface and scope that were active before, so
	 * calls nest. Either way {@link HudAlphaScale} goes back to 1.
	 * @example
	 * MenuSDK.SetActiveSurface(surface)
	 * try {
	 * 	MenuSDK.HudCard.Frame(box)
	 * } finally {
	 * 	MenuSDK.SetActiveSurface(undefined)
	 * }
	 */
	function SetActiveSurface(surface: Nullable<CHudSurface>): void
	/** Where every HUD primitive lands while a panel's content callback runs. */
	function EmitHud(command: HudCommand): void
	/**
	 * A colour as a command carries it: one number, so a frame of commands is compared and stored
	 * without walking a string per colour, and the literal below is built only for a command that
	 * actually changed.
	 *
	 * @example
	 * EmitHud({ kind: "rect", x, y, w, h, color: HudColor(HudColors.glass, hudAlpha()) })
	 */
	function HudColor(color: Color, alpha?: number): number
	/**
	 * `color` as a `#rrggbbaa` string, with `alpha`, 0 to 255, in place of its own; each channel is
	 * rounded and held to that range.
	 */
	function CssColor(color: Color, alpha?: number): string
}
