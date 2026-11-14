// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** Corner radius of a card on the config pages, in dp before the theme's corner scale. */
	const CardRadius = 12
	/** Corner radius of the config pages' buttons and segments, in dp before the corner scale. */
	const ControlRadius = 6
	/** Gap between the cards of a config page's grid, in dp. */
	const GridGap = 12
	/** `name` in the selected language: shorthand for `MenuSDK.Localization.Localize(name)`. */
	function t(name: string): string
	/** Free-standing text entry for page-local fields that never touch the config. */
	function MakeField(placeholder: string): TextEntry
	/** Width of the page body inside the content scroll, in dp. */
	function PageContentWidth(): number
	/** Cell count and cell width for an auto-fill grid of `minW`-wide cards. */
	function GridColumns(contentW: number, minW: number): {
		cols: number
		cellW: number
	}
	/** «2 h ago» from a unix-milliseconds stamp — the largest unit that is not zero. */
	function FormatAgo(unixMs: number): string
	/** 1840 → «1.8k»: the order of magnitude decides, the exact count does not. */
	function FormatCompact(value: number): string
	/**
	 * The colour of a {@link CfgTag}: `accent` the theme's accent, `success`, `warn` and `danger`
	 * its status colours, `neutral` a faint fill of the page's text colour.
	 */
	type TagTone = "neutral" | "accent" | "success" | "warn" | "danger"
	/** The same, for a control the cursor rests on. */
	const HoverFillAlpha = 0.06
	/** The same, for a row of a list, which wears the wash over a busier surface. */
	const RowFillAlpha = 0.04
	/**
	 * A pill of text in a {@link TagTone}, `neutral` by default; `text` is shown as given, not
	 * localized, behind `icon` in the text's colour when there is one. With `onClick` it lights up
	 * under the cursor and runs it after the frame, and `tooltip` shows while the cursor is on it.
	 */
	function CfgTag(props: {
		text: string
		tone?: TagTone
		icon?: string
		tooltip?: string
		style?: RmlStyle
		onClick?: () => void
	}): React.ReactElement
	/** Play-style label of a config: Legit / Semi-rage / Rage, toned like the reference. */
	function BadgeTag(props: {
		badge?: number
		style?: RmlStyle
	}): React.ReactElement | null
	/** A part of a {@link Meta} line that is more than text in the muted colour. */
	interface IMetaPart {
		readonly text: string
		/** Its colour; the muted one when unset. */
		readonly color?: string
		/** Shown while the cursor is on the part. */
		readonly tooltip?: string
		/** Makes the part a link: it takes the accent under the cursor and runs this after the frame. */
		readonly onClick?: () => void
	}
	/**
	 * One part of a {@link Meta} line: text in the muted colour, or an {@link IMetaPart} with a
	 * colour, a tooltip or a click of its own. `undefined`, `false` and `""` are left out.
	 */
	type MetaItem = Nullable<string | false | IMetaPart>
	/**
	 * «a · b · c» fact line: dim, one row, separators drawn between non-empty parts.
	 * A part that does not fit fades out instead of cutting off.
	 */
	function Meta(props: {
		items: MetaItem[]
		style?: RmlStyle
	}): React.ReactElement | null
	/**
	 * Section header above a list or panel: quiet title, count, right-side controls. When the
	 * controls do not fit beside the title in a narrow window they drop onto a line of their own.
	 */
	function SectionTitle(props: {
		title: string
		count?: number
		right?: React.ReactNode
		style?: RmlStyle
	}): React.ReactElement
	/** Card surface without a header — the panel every configs list sits on. */
	function CfgPanel(props: {
		style?: RmlStyle
		children?: React.ReactNode
	}): React.ReactElement
	/**
	 * A 1 dp line in the theme's panel border colour, inset 16 dp at both ends: the rule between
	 * the rows of a {@link CfgPanel}.
	 */
	function PanelDivider(): React.ReactElement
	/** Quiet explanatory line — the text-only hint under rows and pages. */
	function HintLine(props: {
		style?: RmlStyle
		children?: React.ReactNode
	}): React.ReactElement
	/**
	 * The look of a {@link CfgButton}: `primary` filled with the accent, `secondary` (the default)
	 * an outlined field, `ghost` a fill only under the cursor, `danger` the theme's danger colours.
	 */
	type CfgButtonKind = "primary" | "secondary" | "ghost" | "danger"
	/** Height of a {@link CfgButton} or {@link CfgIconButton}: `sm` 26 dp, `md` (the default) 32 dp. */
	type CfgButtonSize = "sm" | "md"
	/**
	 * A button of the config surface. Its action runs after the frame rather than inside the click:
	 * pressing Cancel or Delete takes the tile the button sits in off the screen, and destroying an
	 * element while the engine is still walking the event through it hangs the game.
	 */
	function CfgButton(props: {
		text?: string
		icon?: string
		kind?: CfgButtonKind
		size?: CfgButtonSize
		enabled?: boolean
		tooltip?: string
		style?: RmlStyle
		onClick: () => void
	}): React.ReactElement
	/** Laid-out side of a `CfgIconButton` in dp, for hosts that budget a toolbar row. */
	function CfgIconButtonSide(size?: CfgButtonSize): number
	/** Square glyph button for toolbar actions that a label would only make heavier. */
	function CfgIconButton(props: {
		icon: string
		tooltip: string
		size?: CfgButtonSize
		active?: boolean
		enabled?: boolean
		style?: RmlStyle
		onClick: (event: Event) => void
	}): React.ReactElement
	/**
	 * Width in dp of a {@link CfgSegmented} of these `names` in the selected language, for a toolbar
	 * row that hands the rest of its room to another control.
	 */
	function CfgSegmentedWidth(names: string[]): number
	/**
	 * A row of options all in view, one of them picked: a sort order, a filter. `names` and
	 * `tooltips` are localized, `value` is the index shown as picked, and `onChange` gets the index
	 * clicked, after the frame.
	 */
	function CfgSegmented(props: {
		names: string[]
		value: number
		tooltips?: string[]
		style?: RmlStyle
		onChange: (index: number) => void
	}): React.ReactElement
	/** Thin quota bar — amber near the ceiling, red at it. */
	function CfgMeter(props: {
		value: number
		max: number
		width: number
		style?: RmlStyle
	}): React.ReactElement
	/** What a list says when it has nothing to show; `action` is the way out. */
	function EmptyState(props: {
		icon?: string
		title: string
		text?: string
		action?: React.ReactNode
	}): React.ReactElement
	/**
	 * Short caption shown in place of a row's meta after an action with no visible
	 * result («Code copied»). Lives a couple of seconds and disappears.
	 */
	function useFlash(ms?: number): {
		flash: (id: string, text: string) => void
		flashOf: (id: string) => Nullable<string>
	}
	/** A row of the context menu that {@link OpenActionsUnder} and {@link OpenActionsAtCursor} open. */
	interface CfgAction {
		/** Path of the icon in front of the label. */
		icon: string
		/** Text of the row, localized before it is shown. */
		label: string
		/** Greys the row out, and a click on it does nothing. */
		disabled?: boolean
		/**
		 * Text, icon and hover tint of the row as `#rrggbb[aa]` hex. A `danger` or disabled row does
		 * not use it.
		 */
		color?: string
		/** Paints the row in the theme's danger colour, for an action that throws work away. */
		danger?: boolean
		/** Runs when the left button goes down on the row, after the frame; the menu closes first. */
		run: () => void
	}
	/** Opens the shared context menu under an anchor, right edges aligned. */
	function OpenActionsUnder(anchor: Nullable<HTMLElement>, actions: CfgAction[]): void
	/** Opens the shared context menu at the event's cursor position. */
	function OpenActionsAtCursor(event: Event, actions: CfgAction[]): void
	/**
	 * Grows or folds its children when `show` flips, on the shared collapse motion
	 * the settings cards and rows use. Children stay mounted in both states.
	 */
	function RevealBox(props: {
		show: boolean
		children?: React.ReactNode
	}): React.ReactElement
	/** A small on/off switch of the config pages; `onToggle` runs on a click, inside it. */
	function CfgSwitch(props: {
		on: boolean
		onToggle: () => void
	}): React.ReactElement
	/**
	 * The switch between the scripts' configs and the changer's at the top of a config page, shown
	 * while the game has a changer; `onChange` runs after the pages switched.
	 */
	function ConfigKindSwitch(props: {
		onChange?: () => void
	}): React.ReactElement | null
	/** Card surface that answers hover with the reference's border lift. */
	function CardFill(mix: number): RmlStyle
	/** Resting fill hex of the accent-tinted card, for overlays that must match it. */
	function AccentCardHex(): string
	/** Accent-tinted card surface of the applied config and recommended preset. */
	function AccentCardFill(): RmlStyle
}
