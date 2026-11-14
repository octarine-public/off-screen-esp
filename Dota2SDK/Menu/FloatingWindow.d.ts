// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * The ranking {@link FloatingWindow.BindPageOrder} gives the sidebar, read from and written to
	 * whatever owns the order, such as an image selector's row, so a drag in the sidebar and a drag
	 * on its tiles change the same state. With `enabled` and `toggle` given, each ranked row also
	 * shows a switch that reads and flips its page through them.
	 */
	interface IPageOrder {
		/** The ranked page names, top first; a page it does not name is pinned above them. */
		order(): readonly string[]
		/** Moves the ranked row at `from` to `to`, both counted among the ranked rows shown. */
		move(from: number, to: number): void
		/** Whether the page `name` is on, for the switch on its row. */
		enabled?(name: string): boolean
		/** Flips the page `name` on or off from the switch on its row; the config is saved after. */
		toggle?(name: string): void
	}
	/** The sidebar's hands, lent to the HUD-side drag: carry a held row, settle a dropped one. */
	interface ISidebarView {
		/** Draws the held row `name` `dyDp` dp off its slot, lifted with a shadow. */
		hold(name: string, dyDp: number): void
		/** Puts the row `name` back in its slot without the lift. */
		settle(name: string): void
	}
	/**
	 * A window of menu controls on the HUD: a sidebar of pages, and the rows of the picked page. Each
	 * page is a {@link Node} under the node given to the constructor, so its values save with the
	 * config, but it is left out of that node's rows and of search. The window shows while the menu
	 * is open or the host lets overlays draw, and is dragged by its title bar like the other overlay
	 * cards. With the menu closed it answers only the mouse events a script passes to
	 * {@link FloatingWindow.MouseKeyDown}, `MouseKeyUp` and `MouseWheel`.
	 *
	 * @example
	 * const dodge = new MenuSDK.FloatingWindow(tab, "Dodge panel", 740, 220, () => {
	 * 	toggle.value = false
	 * })
	 * const page = dodge.AddPage("upgrade_counterspell")
	 * page.AddDynamicImageSelector("Abilities", names, defaults)
	 */
	class FloatingWindow {
		/** The title bar's text, localized when drawn. */
		public readonly Title: string
		/**
		 * Registers the window and adds the hidden sliders "Position: X" and "Position: Y" to
		 * `holder`, which keep its place in dp, starting at `defaultX` and `defaultY`. Without
		 * `onClose` the title bar's close button hides the window.
		 */
		constructor(holder: Node, 
		/** The title bar's text, localized when drawn. */
		Title: string, defaultX?: number, defaultY?: number, onClose?: (() => void) | undefined)
		/**
		 * Takes the window apart for good: the card unmounts, the overlay registration stops taking
		 * clicks and the outline surface is dropped. The pages added through
		 * {@link FloatingWindow.AddPage} stay in the menu tree - they belong to the node given at
		 * birth.
		 */
		public Destroy(): void
		/**
		 * Adds a page: an item in the sidebar, and a node whose rows fill the window while it is
		 * picked. The sidebar shows the node's localized name; its icon is resolved the way an image
		 * selector resolves a tile — the name through the image resolver first, `iconPath` where the
		 * name is not an image the game knows.
		 */
		public AddPage(name: string, iconPath?: string, tooltip?: string): Node
		/**
		 * Ranks the sidebar by `binding` and makes its rows draggable: a page named in the order
		 * sorts by it and is dragged into place, one the order does not name stays pinned on top.
		 */
		public BindPageOrder(binding: IPageOrder): void
		/** The ranking the sidebar is bound to, for the card that draws it. */
		public get OrderBinding(): Nullable<IPageOrder>
		/** Every page added so far, in the order they were added. */
		public get Pages(): readonly Node[]
		/** The name of the page the sidebar has picked. */
		public get Selected(): string
		/** One short localized line under the pages on how the window is used; empty shows none. */
		public get Hint(): string
		public set Hint(value: string)
		/** Whether the window is off the screen regardless of what the host would allow. */
		public get IsHidden(): boolean
		/**
		 * Claims the entrance for a card that just mounted: true the first time since the window came
		 * onto the screen, false for a card the menu rebuilt in place - a theme, a scale or a server
		 * change tears every tree down and mounts it again, and a window that never left has nothing
		 * to enter.
		 */
		public TakeEntrance(): boolean
		/** The window has left the screen for real, so its next card enters again. */
		public NoteOffScreen(): void
		/** Where this window stands in the stack of overlay cards, for its element's z-index. */
		public get StackOrder(): number
		/** Takes the window off the screen or puts it back, e.g. from a toggle's listener. */
		public SetHidden(hidden: boolean): void
		/** Picks a page, exactly like a click on its sidebar row. */
		public Select(name: string): void
		/** Opens the window's own node in the menu, which is what the title bar's right button asks. */
		public Reveal(): void
		/** What the title bar's close button does: the closer given at birth, or plain hiding. */
		public Close(): void
		/**
		 * Where the window stands, in px: the hand that drags it, else the sliders that keep it, held
		 * on screen - a place kept on a wider or taller screen would otherwise stand off this one.
		 */
		public get Position(): {
			x: number
			y: number
		}
		/**
		 * The sidebar's rows top to bottom: pages the order does not name pinned first, then the
		 * ranked ones in the bound order. One composition serves the card that draws the rows and
		 * the hit-test that picks one without them.
		 */
		public SidebarNames(): string[]
		/** Whether the card is on the screen this frame, for the capture its frost lives on. */
		public get IsMounted(): boolean
		/**
		 * The sidebar lends its hands: the transform that carries a held row and the wipe that
		 * settles it, so the HUD-side drag moves the same pixels the in-menu one does.
		 */
		public AttachSidebarView(view: Nullable<ISidebarView>): void
		/** The sidebar's scroll area lends its controller, so both input paths read the same rows. */
		public AttachSidebarScroll(controller: Nullable<ScrollController>): void
		/** How far the sidebar is scrolled down, in dp. */
		public get SidebarScrollDp(): number
		/**
		 * The game-event side of the sidebar's scrolling, for the closed menu: a wheel over the
		 * sidebar turns its rows exactly as the in-menu wheel does. Answers whether the game
		 * should still see the turn.
		 */
		public MouseWheel(up: boolean): boolean
		/** The row the HUD-side drag is holding, for the sidebar to dress and to spare gliding. */
		public get HeldRow(): Nullable<string>
		/** The card hands its root over so the input can hit-test and drag it. */
		public AttachRoot(element: Nullable<HTMLElement>): void
		/** The card has left the screen for real: the manager forgets it took clicks anywhere. */
		public Release(): void
		/**
		 * Brings this window in front of every other overlay card, in what takes a click and in
		 * what is drawn over what; called the moment it is clicked, which is what click-to-front is.
		 */
		public Focus(): void
		/**
		 * One side of the input, fed from the game's own mouse events the way every overlay card
		 * is, open or closed menu alike — so the same checks arbitrate a click between this window
		 * and the cards drawn beside it. A press on the title bar starts the drag; with the menu
		 * closed a sidebar press arms its page or toggle until release, using geometry since the controls
		 * cannot be asked anything without the menu's cursor. Answers whether the game should
		 * still see the click.
		 */
		public MouseKeyDown(key?: VMouseKeys): boolean
		/** Lets go of whatever is held and writes it down; the click itself goes through. */
		public MouseKeyUp(key?: VMouseKeys): boolean
		/**
		 * Starts dragging the window from a left press on its title bar while the menu is open, when
		 * the menu takes the click before {@link FloatingWindow.MouseKeyDown} could see it. The drag
		 * follows the cursor and snaps as one started there does, and ends on the release the menu's
		 * drag system reports.
		 */
		public BeginHeaderDrag(event: Event): void
		/**
		 * The once-per-frame heartbeat: keeps the manager's rectangle on the element, counts the
		 * window among the visible cards, and while the title bar is held follows the cursor
		 * through the manager's snapping — the accent guides and the outline included.
		 */
		public TickHud(): void
		/** Whether the cursor stands on this window, for the click the menu keeps off the game. */
		public CoversCursor(x: number, y: number, now: number): boolean
	}
	/**
	 * Runs the floating windows' frame: each one's overlay rectangle, a title-bar drag and its
	 * guides, and a re-render when the host starts or stops letting overlays draw. The menu calls it
	 * every frame.
	 */
	function TickFloatingWindows(): void
	/**
	 * Whether any floating window stands on the screen — which is a claim on the cursor: a host
	 * that frees its cursor for the menu frees it for these windows on the same terms, so their
	 * switches and pages can be touched without the menu standing open.
	 */
	function FloatingWindowsWantCursor(): boolean
	/**
	 * Whether the cursor stands on one of the floating windows while the menu is open, so the
	 * click that lands on its controls never reaches the game.
	 */
	function CursorOverFloatingWindows(): boolean
}
