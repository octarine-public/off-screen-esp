// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * The ground a run of rows stands on, as the colour a label too long for its row fades out into.
	 * Rows rest on a card unless the host says otherwise: one drawing them on a popover or on the
	 * window itself wraps them in the provider, or the fade shows as a block of the wrong colour.
	 *
	 * @example
	 * <RowSurface.Provider value={Tokens.PopoverBg}>
	 * 	{rows.map((entry, index) => RenderControl(entry, index > 0))}
	 * </RowSurface.Provider>
	 */
	const RowSurface: React.Context<StyleColor>
	/**
	 * The colour of the mark beside a control's name, `""` for none. A mark colour token set on the
	 * control comes first. Otherwise a control saved to the config is marked "new" while its
	 * `FirstTime` holds and `MenuFlags.DrawMarksNew` is on, and "changed" while it, or anything shown
	 * with it, differs from its default and `MenuFlags.DrawMarksNonDefault` is on.
	 */
	function MarkColorOf(entry: Entry): string
	/**
	 * Answers a click on a locked control: a Safe mode lock offers to release it, any other lock
	 * takes the click.
	 */
	function OfferLockRelease(entry: Entry): void
	/** Whether `entry` shows the glyph that opens its hint, or its tooltip at the side. */
	function HasHintIcon(entry: Entry): boolean
	/** The glyph that opens `entry`'s hint, or shows its tooltip, on hover. */
	function HintIcon(props: {
		entry: Entry
	}): React.ReactElement
	/**
	 * The frame every control row stands in: icon, label, change mark, hover pill, tooltip and the
	 * right-click menu of `entry`, with `children` laid out on the right. A host drawing a row of its
	 * own kind keeps the look and the behaviour of the menu's rows through it.
	 */
	function ControlRow(props: {
		entry: Entry
		divider: boolean
		nested?: boolean
		iconTint?: StyleColor
		contentStyle?: RmlStyle
		rightStyle?: RmlStyle
		hideLabel?: boolean
		hoverHighlight?: boolean
		retainHover?: boolean
		onClick?: (event: Event) => void
		onPress?: (event: Event) => void
		below?: React.ReactNode
		children?: React.ReactNode
	}): React.ReactElement
	/**
	 * Folds its content in when the entry turns visible and out when it hides, keeping a hidden
	 * entry mounted until the fold has run; `VisibleRows` is what lists such an entry meanwhile.
	 */
	function Reveal(props: {
		entry: Entry
		children?: React.ReactNode
	}): React.ReactElement | null
	/**
	 * The entries of `children` that draw a row: the shown ones and a hidden one still folding away,
	 * without `skip` and the entries that ride another row. Pass the node's own `children` array, so
	 * an entry shown since the last call folds in.
	 * @example
	 * node.CustomPage = () =>
	 * 	MenuSDK.VisibleRows(node.entry.children).map((row, i) => MenuSDK.RenderControl(row, i > 0))
	 */
	function VisibleRows(children: Entry[], skip?: Entry): Entry[]
	/** Closes the settings panel opened from a row's gear button, if one is open. */
	function CloseSubSettings(): void
	/**
	 * The row of a note or a section header. A header is its name on a heading line; a note is its
	 * text in muted italics, with its status at the right and, when it has an action, a button that
	 * a click anywhere on the row runs.
	 */
	function DescriptionRow(props: {
		entry: DescriptionEntry
		divider: boolean
	}): React.ReactElement
	/**
	 * The switch itself, detached from any entry: the same track, knob, classes and easing the
	 * menu's toggle rows wear, driven by a plain boolean — for a surface whose state lives
	 * somewhere no entry stands for, a floating window's sidebar being the one so far.
	 */
	function SwitchFace(props: {
		on: boolean
		inert?: boolean
		scope?: EThemeScope
		style?: RmlStyle
	}): React.ReactElement
	/**
	 * The switch of a switch control without its row, on while `entry` is on. It does not react to a
	 * click; the host flips the value itself. Drawn in the muted accent while the control is locked
	 * or a switch above it is off.
	 */
	function ToggleTrack(props: {
		entry: ToggleEntry
		style?: RmlStyle
	}): React.ReactElement
	/**
	 * The row of a switch: its name and the switch, flipped by a click anywhere on the row. Paired
	 * colour pickers show as swatches beside the switch while it is on.
	 */
	function ToggleRow(props: {
		entry: ToggleEntry
		divider: boolean
		nested?: boolean
	}): React.ReactElement
	/**
	 * The row of a slider: its name, the value field and the rail, with the slider's note under it.
	 * A left-button press anywhere on the row moves the value to the pointer and drags it; a number
	 * typed into the field is kept in range and rounded like any other set.
	 */
	function SliderRow(props: {
		entry: SliderEntry
		divider: boolean
		nested?: boolean
	}): React.ReactElement
	/**
	 * The rail of a slider control without its row, ticks and zones included. A left-button press
	 * moves the value of `entry` to the pointer and drags it.
	 */
	function SliderTrack(props: {
		entry: SliderEntry
	}): React.ReactElement
	/**
	 * The row of a dropdown: its name and a chip with the selected option; a click on the row opens
	 * the list of options. In the `"cards"` layout, with option icons set, the options stand under
	 * the row as picture cards instead.
	 */
	function DropdownRow(props: {
		entry: DropdownEntry
		divider: boolean
		nested?: boolean
	}): React.ReactElement
	/**
	 * The preset selector's bare dropdown chip, for the window's top bar: no row and no label,
	 * just the selected preset opening the panel — and beside it, where the selector carries
	 * settings of its own, the button that opens them.
	 */
	function PresetsHeader(props: {
		entry: PresetsEntry
	}): React.ReactElement
	/**
	 * The row of a preset selector: its name and a chip with the selected preset; a click on the row
	 * opens or closes the presets panel.
	 */
	function PresetsRow(props: {
		entry: PresetsEntry
		divider: boolean
		nested?: boolean
	}): React.ReactElement
	/**
	 * The row of a multiselect: its name and a chip naming the ticked options, "None", "All", or the
	 * first few and how many more; a click on the row opens the list to tick them in.
	 */
	function MultiSelectRow(props: {
		entry: MultiSelectEntry
		divider: boolean
		nested?: boolean
	}): React.ReactElement
	/**
	 * The row of a key bind: its name and a chip with the bound key, `···` while unbound; a click
	 * opens the panel that takes a new key. A bind with a `defaultMode` also shows a Hold/Toggle
	 * button beside the key that switches between the two.
	 */
	function KeybindRow(props: {
		entry: KeybindEntry
		divider: boolean
		nested?: boolean
	}): React.ReactElement
	/**
	 * The row of a button control: the button spans the row with the control's name and icon on it,
	 * and a click runs its callbacks unless it is locked.
	 */
	function ButtonRow(props: {
		entry: ButtonEntry
		divider: boolean
		nested?: boolean
	}): React.ReactElement
	/**
	 * The row of a colour picker: its name and a swatch of its colour; a click on the row opens the
	 * picker.
	 */
	function ColorSwatch(props: {
		entry: ColorEntry
		divider: boolean
		nested?: boolean
	}): React.ReactElement
	/** The row of a text control: its name and a text field 180 dp wide. */
	function TextInputRow(props: {
		entry: TextEntry
		divider: boolean
		nested?: boolean
	}): React.ReactElement
	/**
	 * The list editor: the label with a count on the right, and under it a field with an Add
	 * button and the rows themselves, which scroll once there are more than a handful. Enter in
	 * the field adds and keeps the focus, so several strings go in one after another.
	 */
	function TextListRow(props: {
		entry: ListEntry
		divider: boolean
		nested?: boolean
	}): React.ReactElement
	/**
	 * The row of an image selector: its name, and its images as tiles under it. A click turns a tile
	 * on or off, and a draggable selector is reordered by dragging. One with a catalogue shows only
	 * the chosen tiles, which a click drops, and a tile that opens the catalogue.
	 */
	function ImageSelectorRow(props: {
		entry: ImagesEntry
		divider: boolean
		nested?: boolean
	}): React.ReactElement | null
	/**
	 * The row the menu draws for `entry`, picked by its kind, folding in and out as the control is
	 * shown and hidden. `divider` draws a line above it; `nested` sets the name in the lighter weight
	 * of the rows inside a node.
	 * @example
	 * node.CustomPage = () => [size, glow].map((row, i) => MenuSDK.RenderControl(row.entry, i > 0))
	 */
	function RenderControl(entry: Entry, divider?: boolean, nested?: boolean): React.ReactNode
}

declare namespace MenuSDK {
	/** The corner every plain surface is carved with, and the one its glow follows. */
	const SurfaceRadius = 8
	/**
	 * The style of a {@link Surface} without glow: a column on the theme's card background with a
	 * 1 dp panel border and {@link SurfaceRadius} corners. `elevation: "raised"` adds a drop shadow,
	 * and the second argument is merged over the result.
	 */
	const surfaceStyle: StyledFactory<{
		elevation: {
			flat: {}
			raised: {
				boxShadow: string
			}
		}
	}>
	/**
	 * The style of a {@link Row}: 32 dp tall with 10 dp side padding and its items centred
	 * vertically. `state: "hovered"` fills it with the row hover colour, and `"disabled"` dims it to
	 * 40% and lets the pointer through.
	 */
	const rowStyle: StyledFactory<{
		state: {
			normal: {}
			hovered: {
				backgroundColor: ThemeTokenRef
			}
			disabled: {
				opacity: number
				pointerEvents: "none"
			}
		}
	}>
	/**
	 * The style of {@link Text}: 13 dp in the theme's primary text colour, or its muted or accent
	 * colour with `tone: "muted"` or `"accent"`.
	 */
	const textStyle: StyledFactory<{
		tone: {
			normal: {}
			muted: {
				color: ThemeTokenRef
			}
			accent: {
				color: ThemeTokenRef
			}
		}
	}>
	/**
	 * The theme's glow around a surface, as an element placed first among the surface's children;
	 * the surface carries {@link SdfGlowHost}. Nothing renders while the theme has no glow. `fill` is
	 * the colour the surface is painted, for a theme that colours its halo after it; without it the
	 * halo takes the glow's own colour. It re-renders by itself when the glow changes, so the surface
	 * does not have to.
	 *
	 * @example
	 * <div style={{ ...SdfGlowHost, ...card }}>
	 * 	<GlowLayer radius={12} fill={Theme.ValueOf("CardBg")} />
	 * 	{children}
	 * </div>
	 */
	function GlowLayer(props: {
		radius: number
		fill?: string
	}): React.ReactElement | null
	/**
	 * A card in the theme's card background with a 1 dp panel border, {@link SurfaceRadius} corners
	 * and its children in a column; `elevation: "raised"` adds a drop shadow. `glow` adds the theme's
	 * glow, meant for a card standing alone rather than one of a list. A glowing card is a block with
	 * the column inside it, so a `display` in `style` is overridden there.
	 */
	function Surface(props: {
		elevation?: "flat" | "raised"
		glow?: boolean
		style?: RmlStyle
		children?: React.ReactNode
	}): React.ReactElement
	/**
	 * A row styled by {@link rowStyle} in `state`, with `style` merged over it and the mouse handlers
	 * passed to its element.
	 */
	function Row(props: {
		state?: "normal" | "hovered" | "disabled"
		style?: RmlStyle
		onClick?: (event: Event) => void
		onMouseOver?: (event: Event) => void
		onMouseOut?: (event: Event) => void
		children?: React.ReactNode
	}): React.ReactElement
	/** A block of text styled by {@link textStyle} in `tone`, with `style` merged over it. */
	function Text(props: {
		tone?: "normal" | "muted" | "accent"
		style?: RmlStyle
		children?: React.ReactNode
	}): React.ReactElement
	/**
	 * Single-line label whose overflow fades out through the text itself instead of ending at a
	 * hard cut: the renderer dissolves the glyphs into the clipped edge over a stretch that grows
	 * with how far the text runs past it, so a letter cut by a pixel loses only its last pixels
	 * softly and one cut in half melts away. Nothing is painted over the text and no layer is
	 * composited; text that fits keeps a clean edge.
	 */
	function FadeLabel(props: {
		/** Ref to the clipping element, for callers that also measure or hint from it. */
		labelRef?: React.RefObject<HTMLElement>
		className?: string
		style?: RmlStyle
		onClick?: (event: Event) => void
		onMouseDown?: (event: Event) => void
		children?: React.ReactNode
	}): React.ReactElement
	/**
	 * A one-line label whose overflow fades out through the glyphs at its clipped edges and, while
	 * `active`, scrolls so the whole line can be read: it waits at the start, travels until the end
	 * is in view, waits and travels back, until `active` goes false and it returns home. A line that
	 * fits does not move. The travel is a transform snapped to whole pixels, so nothing around the
	 * label lays out again while it moves.
	 *
	 * @example
	 * <ScrollLabel active={hovered} style={{ flex: "0 1 auto" }}>
	 *     {name}
	 * </ScrollLabel>
	 */
	function ScrollLabel(props: {
		/** Scrolls a line that does not fit while true, and sends it home when it goes false. */
		active: boolean
		className?: string
		style?: RmlStyle
		children?: React.ReactNode
	}): React.ReactElement
	/**
	 * The image at `path`, `size` dp square (16 by default) unless `width` or `height` say otherwise,
	 * coloured by `tint`, with `round` dp corners. A raster image is resampled to its on-screen pixel
	 * size where the host can do it; an empty `path` renders nothing.
	 */
	function Icon(props: {
		path: string
		size?: number
		width?: number
		height?: number
		tint?: StyleColor
		round?: number
		className?: string
		style?: RmlStyle
	}): React.ReactElement | null
}

declare namespace MenuSDK {
	/**
	 * The world drawing surface registered under `key`: the same layer on every call with that key
	 * until it is destroyed. Draw with the immediate calls from a `Draw` listener, or set up retained
	 * nodes once and let them follow their anchors. On a host without a game engine nothing is drawn.
	 */
	function CreateWorldLayer(key: string): IWorldLayer
	/**
	 * Opens the shader slot pool for the frame ahead. The menu ticks after the game has drawn, so
	 * this is the end of its tick: a card pinned to the screen claims its slots from a `Draw` of the
	 * game's, a world overlay claims from the tick that follows, and both belong to the same frame -
	 * resetting between them handed one slot to two writers and the second one's geometry won.
	 */
	function EndWorldFrame(): void
	/** Ticks every unit overlay, then flushes every world layer; the menu tick drives this. */
	function TickWorldLayers(): void
}
