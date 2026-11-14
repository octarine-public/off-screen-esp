// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * The screen edge an {@link OverlayPanel} is docked to. A docked panel stands flush against its
	 * edge and wears a handle: a click on it tucks the panel behind the edge or brings it back.
	 */
	const enum EPanelDock {
		/** No edge: the panel stands wherever it was put down and wears no handle. */
		None = 0,
		Left = 1,
		Top = 2,
		Right = 3,
		Bottom = 4
	}
	/**
	 * Where an {@link OverlayPanel} keeps its place and size. {@link OverlayMenu} is the one that
	 * keeps them in menu rows.
	 */
	interface IOverlayMenu {
		/**
		 * The panel's top-left corner: read in screen px, and written in dp by the panel while it is
		 * dragged.
		 */
		Position: Vector2
		/**
		 * The panel's size as a factor, 1 for 100%, for its content to draw at;
		 * {@link OverlayPanel.Scale} reads a missing one as 1.
		 */
		Scale?: number
		/**
		 * The screen edge the panel is docked to, written by the panel as it is dropped past an edge
		 * or pulled away from one. A menu without it keeps its panel out of the docks altogether.
		 */
		Dock?: EPanelDock
		/**
		 * Whether the docked panel is tucked behind its edge, written by a click on its handle. Read
		 * only while {@link IOverlayMenu.Dock} names an edge.
		 */
		Stowed?: boolean
		/**
		 * Menu row a right-click on the panel reveals while the menu is open. A menu without one
		 * leaves the right button alone.
		 */
		readonly SetupEntry?: Entry
	}
	/** Rows under a menu node that keep an {@link OverlayPanel}'s place and size in the config. */
	class OverlayMenu implements IOverlayMenu {
		/** The node the panel's rows live under: what a right-click on the panel opens. */
		public readonly SetupEntry: Entry
		/**
		 * Adds to `node` two hidden sliders for the panel's place, starting at `defaultX` and
		 * `defaultY` in dp, and a "Size" slider the page shows, from 60 to 150 percent and starting
		 * at `defaultScale`. `scalePrecision` is the decimal places of the size: 0 for whole
		 * percent, 1 for tenths. Two more hidden rows keep the edge the panel is docked to and
		 * whether it is tucked behind it.
		 * @example
		 * new MenuSDK.OverlayMenu(node, 0, 309, 0, 82)
		 */
		constructor(node: Node, defaultX: number, defaultY: number, scalePrecision?: number, defaultScale?: number)
		public get Dock(): EPanelDock
		public set Dock(edge: EPanelDock)
		public get Stowed(): boolean
		public set Stowed(stowed: boolean)
		public get Scale(): number
		/** Held to the range the slider offers, so a pulled corner cannot leave it unreachable. */
		public set Scale(next: number)
		/** The panel's top-left corner in screen px. It is set in dp, the unit the sliders hold. */
		public get Position(): Vector2
		public set Position(position: Vector2)
		/** Takes the whole block off the page, or gives back the one row of it a page ever shows. */
		public SetHidden(hidden: boolean): void
	}
	/**
	 * A card pinned to a point in the world rather than to the screen. Same immediate-mode content
	 * callback as {@link OverlayPanel}, but there is nothing to drag and nothing to persist: the
	 * anchor comes from the caller every frame, and the core moves the card with the camera when the
	 * frame is presented.
	 *
	 * @example
	 * if (!panel.Draw(head, size, distance, origin => HudCard.Frame(new Rectangle(origin, origin.Add(size))))) {
	 *     // off screen this frame, nothing was drawn
	 * }
	 */
	class WorldPanel {
		/**
		 * `key` names the surface the card is drawn on, and two panels under one key share it. Left
		 * out, each panel gets a key of its own.
		 */
		constructor(key?: string)
		/** Draws the card centred above `world`, or hides it and answers `false` when off screen. */
		public Draw(world: Vector3, size: Vector2, distance: number, content: (origin: Vector2) => void): boolean
		/** Wipes the card off the screen now; nothing happens while it is not showing. */
		public Hide(): void
		/**
		 * Lets go of the panel's surface for good, for a card whose anchor is gone - the entity
		 * despawned, the marker picked up. A kept surface is walked by the frame gate every tick for
		 * the rest of the session; a panel built again under the same key opens a fresh one.
		 */
		public Destroy(): void
	}
	/**
	 * When a screen panel stands. The host's overlay gate closes on the game's own screens and
	 * outside a match; each life names what a panel answers to beyond it.
	 */
	const enum EPanelLife {
		/** Only while the host lets overlays draw: inside a match, no game screen over it. */
		Overlay = 0,
		/**
		 * Also while the menu is open — a window the user opened the menu to use is there on the
		 * main menu too.
		 */
		MenuBound = 1,
		/**
		 * Also anywhere outside a match, menu open or not: a card meant to live on every screen —
		 * a music player. In a match it still yields to the game's own screens.
		 */
		Standalone = 2,
		/**
		 * Ignores the host overlay gate: for a panel intentionally paired with one of the game's own
		 * screens, such as a companion shown while the scoreboard key is held.
		 */
		Always = 3
	}
	/**
	 * A card on the screen that the user can drag into place. It keeps its place and size in the
	 * {@link IOverlayMenu} it is built on and draws through a callback; the game's mouse events go
	 * to {@link OverlayPanel.MouseKeyDown} and {@link OverlayPanel.MouseKeyUp} for the drag.
	 *
	 * Dragged past a screen edge, it docks there and goes behind the edge, leaving a handle out: a
	 * click on the handle brings the panel back or tucks it away again, and pulling the handle
	 * takes the panel out of the dock. A menu that keeps no {@link IOverlayMenu.Dock} and a panel
	 * with {@link OverlayPanel.Dockable} off stay out of it.
	 *
	 * @example
	 * const panel = new MenuSDK.OverlayPanel(new MenuSDK.OverlayMenu(node, 20, 300), "my-card")
	 * Events.on("Draw", () => panel.Draw(size, origin => DrawCard(origin)))
	 * Events.on("MouseKeyDown", key => !MenuSDK.MenuManager.IsOpen || panel.MouseKeyDown(key))
	 * Events.on("MouseKeyUp", () => panel.MouseKeyUp())
	 */
	class OverlayPanel {
		/**
		 * Whether a hint that a right-click opens the panel's row in the menu comes out under the
		 * panel once the cursor has rested on it for half a second with the menu open. A panel with
		 * clicks and drags of its own turns it off, or the hint comes out every time the cursor
		 * stops on it. The right-click opens the row either way.
		 *
		 * @example
		 * const panel = new MenuSDK.OverlayPanel(menu, "combo-builder")
		 * panel.SetupHint = false
		 */
		public SetupHint: boolean
		/**
		 * Whether the panel docks to a screen edge it is dragged past. Off for a panel that has no
		 * business behind an edge, such as a stack of notifications; the rows its menu keeps for the
		 * dock are then left alone.
		 *
		 * @example
		 * const panel = new MenuSDK.OverlayPanel(menu, "hud-notifications")
		 * panel.Dockable = false
		 */
		public Dockable: boolean
		/** @param life when the panel stands; see {@link EPanelLife}. */
		constructor(menu: IOverlayMenu, key?: string, life?: EPanelLife)
		/** The size factor {@link IOverlayMenu.Scale} holds, or 1 when the menu has none. */
		public get Scale(): number
		/**
		 * Whether a panel is in the hand: while one is, the place it is carried to goes into its rows
		 * as a slider drag's values do (`SetSliderDragging`) - no config written and the menu not
		 * drawn again for every frame of the move, both once as it is put down.
		 */
		public static get InHand(): boolean
		/** Whether the panel is in hand right now, being carried by the cursor. */
		public get Dragging(): boolean
		/**
		 * Whether the panel is wholly tucked behind its screen edge, with nothing but its handle on
		 * screen: {@link OverlayPanel.Draw} then leaves `content` uncalled, and a caller can skip
		 * whatever it works out only to draw.
		 *
		 * @example
		 * if (!panel.Stowed) {
		 * 	this.rows = this.CollectRows()
		 * }
		 * panel.Draw(size, origin => this.DrawRows(origin))
		 */
		public get Stowed(): boolean
		/**
		 * Brings this panel in front of every other one, in what is drawn and in what takes a click.
		 * A window calls it the moment it is clicked, which is what click-to-front is.
		 */
		public Focus(): void
		/**
		 * Whether this panel owns the cursor right now: true only while it is the front-most one
		 * under it. A window with anything clickable of its own gates that on this, so the window
		 * behind does not answer a click that landed on the one in front.
		 */
		public HandlesInput(): boolean
		/**
		 * Extra ground that counts as part of this panel while a click is arbitrated - a dropdown or
		 * a context menu standing outside its rect, a handle hanging off its edge. A press on it
		 * starts a drag and a right-click opens the setup row the same as one on the panel itself.
		 * Pass nothing to clear it.
		 */
		public SetInputExtent(extent?: Rectangle): void
		/**
		 * Draws the panel, `size` px large, at its stored place: `content` gets the top-left corner in
		 * px and draws the card. Nothing is drawn while its {@link EPanelLife} keeps it down or one of
		 * the game's own panels covers its top-left corner.
		 *
		 * @param dragHandleHeight how much of the panel's top edge starts a drag, in px. Nothing (the
		 * default) makes the whole panel grabbable; a window with anything draggable of its own gives
		 * its title bar's height, so a drag inside the content never moves the window.
		 */
		public Draw(size: Vector2, content: (origin: Vector2) => void, dragHandleHeight?: number): void
		/**
		 * Keeps the panel's last frame at `size` on screen instead of drawing it again, for a caller
		 * whose content has not changed; the panel is placed and takes clicks as with
		 * {@link OverlayPanel.Draw}. Answers `false`, keeping nothing, when the frame has to be drawn:
		 * the panel may not show, is covered, in hand or just put down, shows its hint, has the
		 * cursor on it with the menu open, has moved, or its last frame is gone or held text the host
		 * had not measured. A caller whose content differs with the menu open compares that too.
		 *
		 * @example
		 * if (!(unchanged && panel.Hold(size))) {
		 * 	panel.Draw(size, origin => DrawCard(origin))
		 * }
		 */
		public Hold(size: Vector2): boolean
		/**
		 * Hands the panel a mouse press. A left press on it starts a drag, menu open or not, and a
		 * right press with the menu open opens its row in the menu. Answers `false` when the panel
		 * took the press and `true` to let it through, as an `Events.on("MouseKeyDown")` handler does.
		 */
		public MouseKeyDown(key?: VMouseKeys): boolean
		/**
		 * Puts the panel down if it is being dragged, writing its new place to the config once.
		 * Always answers `true`, so the release reaches the game.
		 */
		public MouseKeyUp(): boolean
		/**
		 * Drops a drag in progress and wipes the panel off the screen. Presses pass through it until
		 * the next {@link OverlayPanel.Draw}.
		 */
		public Reset(): void
		/**
		 * Takes the panel apart for good: the surface is dropped and the overlay registration stops
		 * taking clicks. For a panel owned by something that dies mid-session; one built again under
		 * the same key starts fresh. The menu rows given at birth stay where they are - they belong
		 * to whoever added them.
		 */
		public Destroy(): void
		/**
		 * Hands a left press to the dock handle under the cursor, whichever panel wears it, and
		 * answers `false` when one took it. The menu feeds it every press ahead of the scripts' own
		 * listeners, so a handle answers a click whatever its script lets through to
		 * {@link OverlayPanel.MouseKeyDown}.
		 */
		public static PressHandle(key: VMouseKeys): boolean
		/**
		 * The release of a press {@link OverlayPanel.PressHandle} took: the click flips the panel, or
		 * the panel pulled out by its handle is put down. Always answers `true`.
		 */
		public static ReleaseHandle(key: VMouseKeys): boolean
	}
	/**
	 * Joins the dock handles to the host's mouse, ahead of every script's own listeners. The
	 * bootstrap calls it once the menu is up: a panel's script decides which presses reach the panel
	 * - only with a key held, only with the menu open - and a handle has to answer a click whatever
	 * that script lets through.
	 */
	function SetupPanelDocks(): void
}
