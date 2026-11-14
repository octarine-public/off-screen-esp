// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * The semantic colours a card's contents use, every one of them a menu token: a re-themed menu
	 * re-themes the HUD with it, and nothing here has to be kept in step by hand.
	 */
	const HudColors: {
		/** The theme's primary text colour, the one a card's title is drawn in. */
		readonly title: Color
		/**
		 * A shade off {@link HudColors.title}, for a line that is the card's own subject rather than a
		 * heading over it: still the brightest thing on the glass, without the flat white a title takes
		 * when it is the only run of text there.
		 */
		readonly body: Color
		/** The theme's muted text colour, `TextMuted`. */
		readonly sub: Color
		/**
		 * A step under {@link HudColors.sub}, for a run that has to be there without being read — a
		 * counter ticking beside a bar, a name under the line it belongs to. It is the faintest a card
		 * writes anything in, so it wants the HUD's own bold under it at the sizes those runs are set at.
		 */
		readonly faint: Color
		/** The theme's accent colour. */
		readonly accent: Color
		/** The theme's `StatusBad` colour. */
		readonly kill: Color
		/** The theme's `StatusGood` colour. */
		readonly ok: Color
		/** The material a card is carved from, for a badge that carries no card of its own. */
		readonly glass: Color
		/** The hairline a card is rimmed with, on the same terms. */
		readonly rim: Color
		/**
		 * `color` relit until it reads on the card glass of the active theme, to a contrast ratio of
		 * 4.5: darker on light glass, lighter on dark, with its hue, saturation and alpha kept. A
		 * colour that already reads comes back unchanged.
		 */
		readonly readable: (color: Color) => Color
	}
	/**
	 * A `#rrggbb[aa]` literal packed as a HUD command carries it, parsed once and cached — the form a
	 * per-frame draw wants, where parsing the string each time would mint a colour per call.
	 *
	 * @example
	 * surface.Push({ kind: "rect", ..., borderColor: PackedHex(HexOf(Tokens.Accent)) })
	 */
	function PackedHex(hex: string): number
	/**
	 * A `#rrggbb[aa]` literal as the engine's colour, cached: a token resolves to the same literal
	 * until the palette changes, and the HUD asks for it on every label of every frame.
	 *
	 * Exported for a caller that needs a palette entry as a colour outside a draw - a menu row's
	 * declared default, which must be the same literal in every theme or a config stops travelling.
	 *
	 * @example
	 * const swatch = node.AddColorPicker("Color", HudColorOf(DefaultPalette.TextBody))
	 */
	function HudColorOf(hex: string): Color
	/**
	 * The weight the HUD's own bold is set in. One notch under the menu's 700: a card is read over a
	 * lit world rather than over the menu's own glass, and the heavier cut closes up its counters at
	 * the sizes a marker is written at. Exported for a caller writing a weight as a number, where the
	 * `bold` flag cannot reach.
	 */
	const HudBold = 600
	/**
	 * The weight a run is set in where the caller asks for none. The HUD's plain cut, and the number
	 * every measurement here defaults to, so a line measured without a weight and drawn without one
	 * are the same line.
	 */
	const HudRegular = 400
	/**
	 * The corner radius of a card in dp: {@link CHudCard.Frame}'s default, and what
	 * {@link CHudCard.Border} always rounds to.
	 */
	const HudCardRadius = 10
	/** Space the header leaves between a title and the value on its right. */
	const HudHeaderGap = 10
	/** What a carved shape's quad is grown by, so its antialiased edge is not clipped by its own box. */
	const HudSdfInset = 1
	/**
	 * `base` faded by the alpha the card frame set: readings drawn after a {@link CHudCard.Frame}
	 * follow the card's own fade without carrying it by hand.
	 */
	function hudAlpha(base?: number): number
	/**
	 * The scale a card pinned to the screen is laid out at, and the theme it is measured against. A
	 * card sizes itself to its contents before it draws, so the measuring pass runs while no surface
	 * is active: the scope has to be declared here rather than borrowed from whoever draws next.
	 */
	function setHudScale(scale: number): void
	/**
	 * The scale a card standing in the world is laid out at. `DpToPx` carries the menu window's own
	 * transform, which is what a panel pinned to the screen wants and what a marker over a rune must
	 * not have: scaling the menu would resize everything the world carries with it. Taken back out,
	 * a marker keeps the same share of the screen on any monitor whatever the menu is set to.
	 */
	function setHudWorldScale(scale: number): void
	/**
	 * A horizontal length of `value` dp as screen px, at the layout scale of the card being laid out
	 * ({@link setHudScale}, {@link setHudWorldScale}).
	 */
	function hudW(value: number): number
	/** A vertical length of `value` dp as screen px, converted as {@link hudW} converts. */
	function hudH(value: number): number
	/**
	 * A font size in dp as the px a card sets it at: times the layout scale ({@link setHudScale},
	 * {@link setHudWorldScale}) and the font scale of the theme the card is laid out against.
	 * {@link HudText} takes sizes in dp and applies this itself.
	 */
	function hudFont(value: number): number
	/** A corner radius, carrying that theme's radius scale for the same reason. */
	function hudRadius(value: number): number
	/**
	 * A card's text, drawn onto the active surface; {@link HudText} is the instance. Sizes are font
	 * sizes in dp, scaled as {@link hudFont} scales them, and the rest is px. A colour's alpha is not
	 * used: text fades with {@link HudAlphaScale} alone, which {@link CHudCard.Frame} sets.
	 */
	interface CHudText {
		/**
		 * How wide `text` is at `size`, in px, every digit counted as a zero so a ticking number keeps
		 * one width. 0 until the host can measure it.
		 */
		Width(text: string, size: number, weight?: number, family?: string): number
		/**
		 * The line the engine will actually lay out, in px. Digits are measured as zeroes: the
		 * line box does not depend on which digit it is, and a ticking counter would otherwise
		 * mint a fresh measurement cache entry every change.
		 */
		Height(text: string, size: number, weight: number, family?: string): number
		/**
		 * The longest prefix that fits, ellipsis included, found by binary search and remembered:
		 * a clipped name is the same clipped name every frame, and the shrink loop cost one
		 * measurement per overflowing character each time it ran.
		 */
		Clip(text: string, maxWidth: number, size: number, weight?: number, family?: string): string
		/**
		 * Draws `text` from `x`, centred on `centerY`, and returns its width as {@link CHudText.Width}
		 * gives it. `effect` adds a dark outline or shadow, drawn at `effectOpacity` of full darkness
		 * (1 when omitted).
		 */
		Left(x: number, centerY: number, text: string, size: number, color: Color, weight?: number, effect?: EHudTextEffect, family?: string, effectOpacity?: number): number
		/**
		 * A line held to a box `width` px wide instead of clipped to a prefix: what does not fit is cut
		 * by the box itself and its glyphs dissolve into the edge they are cut at, the way the menu's
		 * labels end. `offset` scrolls the line that many px towards its tail, and the head dissolves
		 * into the other edge as it leaves. {@link HudMarquee} drives the offset for a line that is read
		 * by travelling it.
		 *
		 * @returns how far the line runs past its box, in px, and so the furthest `offset` can take it
		 */
		Fit(x: number, centerY: number, width: number, text: string, offset: number, size: number, color: Color, weight?: number, effect?: EHudTextEffect): number
		/**
		 * Draws `text` centred in a box `boxWidth` px wide from `x`, on `centerY`, for a chip or a cell
		 * the caller has sized. The layout does the centring, so a box sized by {@link CHudText.Width}
		 * holds the run centred whatever its digits. `effect` and `effectOpacity` as in
		 * {@link CHudText.Left}.
		 */
		Center(x: number, centerY: number, boxWidth: number, text: string, size: number, color: Color, weight?: number, effect?: EHudTextEffect, family?: string, effectOpacity?: number): void
		/** Draws `text` ending at `rightX` and returns its width; the rest as {@link CHudText.Left}. */
		Right(rightX: number, centerY: number, text: string, size: number, color: Color, weight?: number, effect?: EHudTextEffect, family?: string, effectOpacity?: number): number
	}
	/**
	 * A card's text. It is measured in the face, weight and size of the theme the card is laid out
	 * against ({@link setHudScale}, {@link setHudWorldScale}), which is the theme its surface draws
	 * it in, so a box sized by `Width` before `SetActiveSurface` holds the run drawn into it.
	 */
	const HudText: CHudText
	/**
	 * One line of a card that is read by travelling it when it does not fit, as the menu's own labels
	 * are: at rest it is cut at its box and dissolves into the edge, and while `reading` it waits at
	 * its head, travels far enough to bring the tail in, waits there and comes back, then slides home
	 * once the reading stops. Held by whatever draws the line, one per line, because the travel
	 * outlives the frame it is drawn in; a line whose text changes starts again from its head.
	 *
	 * @example
	 * private readonly title = new HudMarquee()
	 * this.title.Left(x, centerY, width, track.title, 12, HudColors.title, HudBold, hovered)
	 * this.title.EndFrame()
	 */
	class HudMarquee {
		/**
		 * Draws `text` in a box `width` px wide from `x`, centred on `centerY`, cut at the box and
		 * travelled while `reading` is true; `size` is a font size in dp. A `text` other than the last
		 * one starts again from its head.
		 */
		public Left(x: number, centerY: number, width: number, text: string, size: number, color: Color, weight: number, reading: boolean, effect?: EHudTextEffect): void
		/**
		 * Closes the frame for this line, once a frame after the card is drawn, whether or not it
		 * was. A line that was not drawn since the last call is not being read: its travel stops and
		 * it goes back to its head, so a hidden card leaves nothing running behind it.
		 *
		 * @example
		 * this.DrawCard()
		 * this.title.EndFrame()
		 */
		public EndFrame(): void
	}
	/** The value {@link CHudCard.Header} shows at the right edge of a header. */
	interface HudHeaderValue {
		/** What the header shows there. */
		text: string
		/** The colour of the text, and the tint of the badge with {@link HudHeaderValue.badge}. */
		color: Color
		/** Draws the value as a tinted badge ({@link CHudCard.BadgeRight}), not bold 13 dp text. */
		badge?: boolean
	}
	/**
	 * The shapes a HUD card is drawn from, in screen px; {@link HudCard} is the instance. A call draws
	 * onto the active surface ({@link SetActiveSurface}) and does nothing while there is none. Where a
	 * call takes a colour and an `alpha`, the alpha (0 to 255) replaces the colour's own.
	 */
	interface CHudCard {
		/** The padding in dp {@link CHudCard.Header} keeps from the card's left and right edges. */
		readonly Pad: 10
		/** A flat quad, for a card that does not use the shared palette. */
		Fill(x: number, y: number, w: number, h: number, color: Color, alpha?: number): void
		/**
		 * {@link CHudCard.Fill} with its corners taken off: the plate a chip standing on artwork or on
		 * the world wears, where a {@link CHudCard.Disc} is rounder than what it carries and a quad
		 * shows four hard corners against everything around it that is not.
		 *
		 * Carved by the shader rather than by a border radius, for the reason {@link CHudCard.Frame} is:
		 * a radius rasterizes on the pixel grid and a plate a dozen pixels across shows every step it
		 * cut, which is exactly the size a chip is drawn at.
		 *
		 * @example
		 * HudCard.Plate(x, y, w, h, h * 0.34, HudColors.glass, 150)
		 */
		Plate(x: number, y: number, w: number, h: number, radius: number, color: Color, alpha?: number): void
		/**
		 * The shadow under a tile lifted into the hand, `lift` of the way, as the menu's image selector
		 * drops one (`0 6dp 14dp #00000040`): dropped 6 dp, its blur laid as rounded plates from inside
		 * the tile's edge to past it, all of it as deep as the tile is lifted. `rect` and `corner` are px.
		 *
		 * @example
		 * HudCard.LiftShadow({ x, y, w: side, h: side }, side * 0.2, lift)
		 */
		LiftShadow(rect: Readonly<ScreenRect>, corner: number, lift: number): void
		/**
		 * The dress a badge wears without its label: a plate washed `tint` deep in `color` and rimmed
		 * `edge` deep in it by a hairline, for a chip whose contents the caller lays out itself - a
		 * reading beside its word, a glyph in front of them. `radius` is in dp, like a badge's.
		 *
		 * @example
		 * HudCard.Chip(x, y, w, h, 7, HudColors.ok, hudAlpha(36), hudAlpha(107))
		 */
		Chip(x: number, y: number, w: number, h: number, radius: number, color: Color, tint: number, edge: number): void
		/**
		 * The card the menu's own panels wear: the theme's glass, hairline rim and halo over a frosted
		 * backdrop. `alpha` (0 to 255) fades it and sets {@link HudAlphaScale}, by which
		 * {@link hudAlpha} and {@link HudText} fade the readings drawn on it afterwards. `dpRadius` is
		 * the corner radius in dp. A surface that draws more than one card gives each its own `carve`,
		 * the steps of alpha its glass is lowered by.
		 *
		 * @example
		 * MenuSDK.HudCard.Frame(box, MenuSDK.hudAlpha(), CHIP_RADIUS, this.carved++)
		 */
		Frame(box: Rectangle, alpha?: number, dpRadius?: number, carve?: number): void
		/**
		 * {@link CHudCard.Frame} for chrome that belongs to no card - a handle beside one, a tab at the
		 * screen's edge: the same glass, rim, halo and frost, in screen px at the menu's own scale,
		 * whatever layout scale the last card laid out left behind ({@link setHudScale}). `radius` is
		 * in px too; `alpha` fades it and sets {@link HudAlphaScale} as a frame's does.
		 *
		 * @example
		 * MenuSDK.HudCard.FramePx(x, y, w, h, MenuSDK.DpToPx(7), 255 * presence)
		 */
		FramePx(x: number, y: number, w: number, h: number, radius: number, alpha?: number): void
		/**
		 * {@link CHudCard.Frame} as a disc: the same glass, the same hairline rim and the same frosted
		 * backdrop under both, for a badge carrying a glyph instead of a row of readings. A card and a
		 * badge are one material, so nothing about them has to be kept in step by hand.
		 */
		Badge(centerX: number, centerY: number, radius: number, alpha?: number): void
		/**
		 * A square-cornered outline along the inside of `box`, `width` px held to 1 to 2:
		 * {@link CHudCard.Stroke} from a `Rectangle`.
		 */
		Outline(box: Rectangle, width: number, color: Color, alpha: number): void
		/**
		 * A square-cornered outline drawn as four quads, in the same numbers {@link CHudCard.Fill}
		 * takes. {@link CHudCard.Outline} is this from a `Rectangle`; a caller drawing every frame
		 * uses this one and builds no rectangle to do it.
		 */
		Stroke(x: number, y: number, w: number, h: number, width: number, color: Color, alpha?: number): void
		/** A rounded border around a card or panel. */
		Border(box: Rectangle, width: number, color: Color, alpha: number): void
		/**
		 * A header row `height` px tall across the top of `box`: an accent marker, `title` in bold at
		 * 13 dp, cut short with an ellipsis where it would reach `right`, and `right` at the right
		 * edge. A {@link CHudCard.Separator} goes under the row unless `underline` is false.
		 */
		Header(box: Rectangle, height: number, title: string, right?: HudHeaderValue, underline?: boolean): void
		/**
		 * A status chip: the tint washed back for the fill, the tint itself for the label, and the
		 * menu's corner radius. A solid fill with primary text on top reads as an alert next to every
		 * value on the card, which is not what a count or a slot name is. Answers the width it took.
		 */
		/**
		 * A tinted pill with its label centred inside it. Drawn as two elements on purpose: folding
		 * both into one flex box stopped the label rendering at all, because a flex container lays out
		 * element children and the label is a bare text node.
		 *
		 * `frosted` lays the card's own frosted backdrop and glass under the tint, for a pill that
		 * stands on a busy plot rather than on the card's calm glass. `reserve` is a run the pill
		 * keeps room for even while the label is shorter, so a ticking reading does not breathe.
		 */
		BadgeRight(rightX: number, centerY: number, text: string, color: Color, frosted?: boolean, reserve?: string): number
		/**
		 * {@link CHudCard.BadgeRight} pinned by its left edge instead, for a reading standing in a
		 * corner a card fills from the left. The same pill in the same metrics and on the same terms,
		 * so a value wears one dress wherever it sits.
		 */
		BadgeLeft(x: number, centerY: number, text: string, color: Color, frosted?: boolean, reserve?: string): number
		/**
		 * A rounded bar of `size` at `pos`: the theme's slider track, filled from the left over `pct`
		 * of its width (0 to 1) in `fillColor`, drawn opaque and faded with the card alone. A
		 * `markerPct` strictly between 0 and 1 adds a tick across the bar there.
		 */
		Bar(pos: Vector2, size: Vector2, pct: number, fillColor: Color, markerPct?: number): void
		/** A hairline from `x, y` across `width` px, 1 dp thick, in the theme's panel border colour. */
		Separator(x: number, y: number, width: number): void
		/**
		 * Draws the image at `path` into the box `size` at `pos`, tinted `color`. `radius` rounds its
		 * corners in px, half the size for a round portrait; `angle` turns it clockwise about its
		 * centre in degrees. By default the whole file is stretched to the box; `"cover"` keeps its
		 * proportions and crops it to the box about its centre. `source` draws only that rectangle of
		 * the file, in its own pixels ({@link ImageSize}). With either, nothing shows until the host
		 * knows the file's size.
		 */
		Image(path: string, pos: Vector2, size: Vector2, color: Color, alpha?: number, radius?: number, angle?: number, fit?: "cover" | "stretch", source?: {
			readonly x: number
			readonly y: number
			readonly w: number
			readonly h: number
		}): void
		/** A filled disc: the chip a glyph or a portrait is set on. */
		Disc(centerX: number, centerY: number, radius: number, color: Color, alpha?: number): void
		/**
		 * A ring drawn by the sdf circle, round at any size. `radius` is the middle of the stroke and
		 * `thickness` is held to 1 to 2 px.
		 */
		Ring(centerX: number, centerY: number, radius: number, thickness: number, color: Color, alpha?: number): void
		/**
		 * An arc of a ring from `start` clockwise by `sweep` radians, `0` at three o'clock; nothing
		 * while `sweep` is 0 or less. `radius` is the middle of the stroke, as on
		 * {@link CHudCard.Ring}, so an arc and a ring of one radius and thickness lie on the same band;
		 * `thickness` is held to 1 to 2 px. One shape with no joints, or a chain of
		 * {@link CHudCard.Line}s where the capsules shader is missing or out of slots.
		 *
		 * @example
		 * const top = -Math.PI / 2
		 * MenuSDK.HudCard.Arc(x, y, radius, 2, top, Math.PI * 2 * health, color, MenuSDK.hudAlpha())
		 */
		Arc(centerX: number, centerY: number, radius: number, thickness: number, start: number, sweep: number, color: Color, alpha?: number): void
		/** A line segment with rounded ends. */
		Line(startX: number, startY: number, endX: number, endY: number, thickness: number, color: Color, alpha?: number): void
	}
	/** What a HUD card is drawn with: glass, plates, chips, rings, arcs, bars and images. */
	const HudCard: CHudCard
}
