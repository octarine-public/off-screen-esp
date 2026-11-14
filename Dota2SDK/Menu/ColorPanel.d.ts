// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** The width in dp a {@link ColorPickerPalette} lays its rows out to. */
	const ColorPickerPaletteWidth = 252
	/**
	 * The height in dp of a {@link ColorPickerPalette}'s own rows, its header and footer aside: what a
	 * popover holding one needs to keep itself on screen before it lays out. The saved colours
	 * are part of it, so it grows a row at a time as colours are saved.
	 */
	function ColorPickerPaletteHeight(alpha?: boolean): number
	/**
	 * The height in dp of a {@link ColorPickerSlider}, laid out on one line or stacked, its reading
	 * a field to type in or plain text.
	 */
	function ColorPickerSliderHeight(stacked?: boolean, typed?: boolean): number
	/** The props of {@link ColorPickerSlider}. */
	interface IColorPickerSliderProps {
		/** The name before the ramp, localized on the way in. */
		readonly label: string
		/**
		 * Sets the name and the reading on a line of their own over a ramp as wide as the row, for
		 * names too long to share a line with it and for rows stacked under one another.
		 */
		readonly stacked?: boolean
		/**
		 * Gives the name a column this many dp wide on a one-line slider, so the ramps of sliders
		 * laid under one another start and end together. A longer name scrolls while the row is
		 * hovered.
		 */
		readonly labelWidth?: number
		/** Draws the ramp as a rail and its fill without the thumb. */
		readonly thumbless?: boolean
		/** Where the thumb stands, 0 at the left end to 1 at the right. */
		readonly value: number
		/** The reading after the ramp. */
		readonly text: string
		/** Takes the position, 0 to 1, a drag moved the thumb to. */
		readonly onChange: (value: number) => void
		/** Told when a drag starts (true) and when it ends (false). */
		readonly onDragging?: (dragging: boolean) => void
		/** Puts the value back on a right click; a right click does nothing without it. */
		readonly onReset?: () => void
		/**
		 * Makes the reading a field a value can be typed into, handed over raw on Enter or when the
		 * field loses focus; the reading is plain text without it.
		 */
		readonly onType?: (raw: string) => void
		/** The widest reading the slider shows, which keeps a typed-in field from changing width. */
		readonly widest?: string
	}
	/**
	 * A slider in the menu's own look, with a name before it and a reading after it: the
	 * rainbow's speed is one, and a surface holding a {@link ColorPickerPalette} lays its own tunables
	 * out with it. Lit under the pointer like a menu row, and grabbed from a press anywhere on it,
	 * the name included; the wheel over it scrolls the list holding it. Given `onType`, a click on
	 * the reading types a value in.
	 *
	 * @example
	 * <ColorPickerSlider label="Glow" value={glow} text={glow.toFixed(2)} onChange={setGlow} />
	 */
	function ColorPickerSlider(props: IColorPickerSliderProps): React.ReactElement
	/** The props of {@link ColorPickerPalette}. */
	interface IColorPickerPaletteProps {
		/** The colour shown and edited, its alpha included. */
		readonly color: Color
		/** Offers the alpha ramp and the percent field; without them the colour's alpha is kept as it is. */
		readonly alpha?: boolean
		/** Takes every change, each step of a drag included. */
		readonly onChange: (color: Color) => void
		/** Told when a drag over the square or a ramp starts (true) and when it ends (false). */
		readonly onDragging?: (dragging: boolean) => void
		/** Told once a change is final: a drag let go, a value typed in, a saved colour picked. */
		readonly onCommit?: () => void
		/** Rows drawn above the square. */
		readonly header?: React.ReactNode
		/** Rows drawn under the saved colours. */
		readonly footer?: React.ReactNode
		/**
		 * The z-index the format list opens at, for a palette drawn on a surface that stands above
		 * the menu's own dropdowns.
		 */
		readonly listZ?: number
	}
	/**
	 * The colour picker's palette for a surface of your own: the square, the hue ramp, the alpha
	 * ramp with `alpha`, the typed value and the saved colours, editing one solid colour. `header`
	 * and `footer` add rows over and under it. It lays out {@link ColorPickerPaletteWidth} wide and
	 * {@link ColorPickerPaletteHeight} tall besides them; the arrow keys move the square's point
	 * while the cursor is over it.
	 *
	 * @example
	 * <MenuSDK.ColorPickerPalette
	 * 	color={tint}
	 * 	onChange={next => setTint(next)}
	 * 	footer={<GlowSlider />}
	 * />
	 */
	function ColorPickerPalette(props: IColorPickerPaletteProps): React.ReactElement
	/**
	 * Opens the colour picker of the stored colour entry `entry`, replacing one already open.
	 * `anchor` is in dp, as `MenuSDK.ElementRect` measures an element: the picker opens under it,
	 * or beside the settings panel of a row's gear button while one is open and there is room.
	 */
	function OpenColorPicker(entry: ColorEntry, anchor: ScreenRect): void
	/** Closes the colour picker. Its edits apply as they are made, so closing keeps them. */
	function CloseColorPicker(): void
}
