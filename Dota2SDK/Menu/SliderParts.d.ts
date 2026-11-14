// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** The props of {@link SliderBar}. */
	interface ISliderBarProps {
		/** Where the thumb stands, 0 at the left end to 1 at the right. */
		readonly value: number
		/** Takes the position, 0 to 1, each step of a drag moves the thumb to. */
		readonly onChange: (value: number) => void
		/** Told when a drag starts (true) and when it ends (false). */
		readonly onDragging?: (dragging: boolean) => void
		/** Draws the fill and the halo in the inert accent. */
		readonly inert?: boolean
		/** Draws the rail and the fill without the thumb, for a list read at a glance. */
		readonly thumbless?: boolean
		/** Layout overrides for the bar, a flex share or margins. */
		readonly style?: RmlStyle
		/**
		 * Takes the bar's press, so a row holding it can grab the bar from a press anywhere on the
		 * row, the way a menu slider row does.
		 */
		readonly grip?: ISliderGrip
	}
	/** What a row holding a {@link SliderBar} presses the bar through; see {@link ISliderBarProps.grip}. */
	interface ISliderGrip {
		/** Moves the value to the pointer and starts a drag, given the row's left-button press. */
		press?: (event: Event) => void
	}
	/**
	 * The menu slider's rail, fill and thumb on their own, for a page that keeps its value somewhere
	 * other than a slider entry. Dragged with the left button; the bar is as tall as the thumb.
	 *
	 * @example
	 * <SliderBar value={opacity} onChange={setOpacity} style={{ flex: "1 1 auto" }} />
	 */
	function SliderBar(props: ISliderBarProps): React.ReactElement
	/** The props of {@link RangeBar}. */
	interface IRangeBarProps {
		/** Where the low thumb stands, 0 at the left end to 1 at the right. */
		readonly low: number
		/** Where the high thumb stands, never left of the low one. */
		readonly high: number
		/** What the bubble over the low thumb reads. */
		readonly lowText: string
		/** What the bubble over the high thumb reads. */
		readonly highText: string
		/** How many steps the rail is cut into, each end of one marked with a dot; none without. */
		readonly steps?: number
		/** Takes both ends, 0 to 1, each step of a drag moves the held thumb to. */
		readonly onChange: (low: number, high: number) => void
		/** Told when a drag starts (true) and when it ends (false). */
		readonly onDragging?: (dragging: boolean) => void
		/** Draws the fill and the halos in the inert accent. */
		readonly inert?: boolean
		/** Layout overrides for the bar, a flex share or margins. */
		readonly style?: RmlStyle
		/** Takes the bar's press, the way {@link ISliderBarProps.grip} does. */
		readonly grip?: ISliderGrip
	}
	/**
	 * The menu slider's rail with two thumbs, the stretch between them filled and each end's value
	 * in a bubble over its thumb: the span a range slider picks. The rail is cut into its `steps`,
	 * a dot at each when there are 24 or fewer, lit where the span covers it. A press drags the
	 * thumb nearer to it, and where the two stand together, the high one from a press right of them.
	 * A thumb dragged into the other stops against it, and two bubbles that would overlap merge.
	 *
	 * @example
	 * <MenuSDK.RangeBar low={0.3} high={0.5} lowText="150" highText="250" onChange={setSpan} />
	 */
	function RangeBar(props: IRangeBarProps): React.ReactElement
	/** What a host writes a {@link SliderValueInput}'s value through between renders; see {@link ISliderValueInputProps.display}. */
	interface ISliderValueDisplay {
		/** Shows `text` in the field without a render, for a value that moves every step of a drag. */
		show?: (text: string) => void
	}
	/** The props of {@link SliderValueInput}. */
	interface ISliderValueInputProps {
		/** The value as shown while the field is not being typed in. */
		readonly text: string
		/** The widest text the field ever shows, which sets its width so it never jumps. */
		readonly widest: string
		/**
		 * Takes what was typed, once, when the field loses focus or Enter is pressed. Nothing is
		 * handed over when the field was left untouched or Escape gave up the typing.
		 */
		readonly onType: (raw: string) => void
		/**
		 * Gets a writer that changes the shown value without rendering the field, so a slider can
		 * move its readout every step of a drag the way it moves its thumb.
		 */
		readonly display?: ISliderValueDisplay
	}
	/**
	 * The menu slider's value field: reads the value in even-width digits and takes a typed one on a
	 * click. A host parses the typed text itself, so it can clamp and round to its own range.
	 *
	 * @example
	 * <SliderValueInput text={seed.toString()} widest="00000" onType={raw => setSeed(parseInt(raw))} />
	 */
	function SliderValueInput(props: ISliderValueInputProps): React.ReactElement
	/** Reads a typed number, a comma taken for the decimal point; `undefined` when it is not one. */
	function ParseTypedNumber(raw: string): Nullable<number>
}
