// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** What a game gives the menu, every field optional; it is handed over with {@link AttachHost}. */
	interface MenuHost {
		/**
		 * Hooks `tick` to run every frame. It is {@link TickMenu}, the whole of the menu's work: a
		 * host without this hook calls that itself.
		 */
		readonly onFrame?: (tick: () => void) => void
		/**
		 * The host's retained draw pass, run at a tick's rate rather than every frame: `begin` goes
		 * before the first listener of a pass and `end` after the last, both before the frame's own
		 * tick. A HUD surface drawn between the two keeps what it drew until the next pass, where one
		 * drawn every frame is wiped by any frame that does not draw it. The pass is for what stands on
		 * the screen; anything placed from a world position is drawn every frame, or it trails the
		 * camera. A host without one has every surface drawn per frame.
		 */
		readonly onRetainedPass?: (begin: () => void, end: () => void) => void
		/** Runs the retained pass on the next frame, for what a user is moving by hand. */
		readonly requestRetainedPass?: () => void
		/**
		 * Hooks `teardown` for the host to call as the scripts go away: it writes what the config and
		 * the theme still hold to disk and takes the menu off the screen.
		 */
		readonly onTeardown?: (teardown: () => void) => void
		/**
		 * Hooks `handler` to the host's server info event. The menu lets go of what its logic rules
		 * hold and rebuilds.
		 */
		readonly onServerInfo?: (handler: () => void) => void
		/**
		 * Hooks `handler` to every key press, with the key's virtual-key code; the host keeps the
		 * press from the game when `handler` answers `true`. Wired only along with
		 * {@link MenuHost.onKeyUp}.
		 */
		readonly onKeyDown?: (handler: (code: number) => boolean) => void
		/** {@link MenuHost.onKeyDown} for the key's release. */
		readonly onKeyUp?: (handler: (code: number) => boolean) => void
		/**
		 * Hooks `handler` to every mouse button press, with the button's code: 1 left, 2 right,
		 * 4 middle, 5 and 6 the side buttons. The host keeps the press from the game when `handler`
		 * answers `true`.
		 */
		readonly onMouseDown?: (handler: (code: number) => boolean) => void
		/** {@link MenuHost.onMouseDown} for the button's release. */
		readonly onMouseUp?: (handler: (code: number) => boolean) => void
		/**
		 * Hooks `handler` to every step of the mouse wheel, `up` for its direction. The host keeps
		 * the step from the game when `handler` answers `true`, as it does while the cursor is on the
		 * open menu.
		 */
		readonly onMouseWheel?: (handler: (up: boolean) => boolean) => void
		/**
		 * Hooks `handler` to every character typed. The host keeps the character from the game when
		 * `handler` answers `true`, as it does while a text field of the open menu has the focus.
		 */
		readonly onCharInput?: (handler: () => boolean) => void
		/**
		 * Hooks `handler` to a change of the game window's size; the menu asks for
		 * {@link MenuHost.viewport} again.
		 */
		readonly onViewportChanged?: (handler: () => void) => void
		/** Width and height of the game window in px. */
		readonly viewport?: () => [number, number]
		/**
		 * Where the renderer loads `path` from, a file the menu ships such as a font or an icon.
		 * `""` when the host does not know it, and the menu then takes `path` as it is.
		 */
		readonly resolveAsset?: (path: string) => string
		/**
		 * The image path for a name the menu shows as a picture, such as an ability's or a hero's.
		 * `""` when the host knows none, and the name is then taken as a path itself.
		 */
		readonly resolveImage?: (value: string) => string
		/**
		 * Whether `path` is art whose shape is its alpha alone, to be loaded white on alpha. A game's
		 * ability icons are such silhouettes, and the colour under them is whatever each source file
		 * held; a host that does not answer loads every image as it is.
		 */
		readonly monochromeArt?: (path: string) => boolean
		/**
		 * For the name of a hero's own ability, not an item's: the hero's data name, which
		 * {@link MenuHost.resolveImage} turns into a portrait, and the number of the button that
		 * casts it. A floating window's sidebar shows it as a hint over the row; a host that does not
		 * answer shows none.
		 */
		readonly abilityOwner?: (name: string) => Nullable<[hero: string, slot: number]>
		/** The menu scale the user chose, 1 for the default size; see {@link MenuScale}. */
		readonly scale?: () => number
		/** The cursor's position on the screen in px. */
		readonly cursor?: () => [number, number]
		/**
		 * Width and height in px of `text` set in the font family `font` at `sizePx`, or `undefined`
		 * while the host cannot measure it yet; the menu asks again on a later frame.
		 */
		readonly measureText?: (text: string, font: string, sizePx: number, weight: number, italic?: boolean) => Nullable<[number, number]>
		/**
		 * An image's own size in the file's pixels, or `undefined` until the host has it decoded;
		 * the menu asks again on a later frame.
		 */
		readonly imageSize?: (path: string) => Nullable<[number, number]>
		/** Whether the game is in a match; a host that does not answer is always in one. */
		readonly inGame?: () => boolean
		/**
		 * Whether an overlay may draw right now: the game is in a match and has none of its own
		 * screens over it. Panels stand down while it says no - they stop drawing, stop holding
		 * their place in the snapping guides and stop taking the clicks that land where they were.
		 * A host that does not answer lets them draw whenever the game is running.
		 */
		readonly canDrawOverlays?: () => boolean
		/**
		 * Whether one of the game's own panels, such as the shop or the scoreboard, stands over the
		 * screen point `x`, `y`. A screen panel asks it of its top-left corner and stands down while
		 * the answer is yes. A host that does not answer covers nothing.
		 */
		readonly occluded?: (x: number, y: number) => boolean
		/**
		 * True while the game has taken the keyboard — a chat box or a console. Keybinds stay quiet
		 * then, so typing a message does not fire them, unless {@link MenuFlags.TriggerWhileTyping}
		 * says otherwise.
		 */
		readonly inputCaptured?: () => boolean
		/** True while the game's text chat is open for interaction. */
		readonly chatOpen?: () => boolean
		/**
		 * Seconds on the match clock, `undefined` while no match is running - a menu, a hero select,
		 * an intro. Logic rules stand down without an answer and let go of whatever they were
		 * holding, so leaving a match puts every driven entry back where the user left it.
		 */
		readonly gameTime?: () => Nullable<number>
		/** Called with the whole config after every write of it. */
		readonly onConfigWritten?: (config: Record<string, unknown>) => void
		/**
		 * Hooks `handler` to the host's notice that the stored config changed; the menu reads it
		 * back in with {@link HandleConfigsChanged}.
		 */
		readonly onConfigsChanged?: (handler: () => void) => void
		/**
		 * Restarts the scripts. {@link ReloadScripts} calls it once the config is written and the
		 * menu is off the screen.
		 */
		readonly reloadScripts?: () => void
		/**
		 * The user moved the menu-scale slider in the shared Settings tab. The game
		 * stores the value it serves back through {@link MenuHost.scale} and
		 * relayouts whatever depends on it. Without this the slider is not shown.
		 */
		readonly menuScaleChanged?: (scale: number) => void
		/**
		 * The server pushed a UI language for this account. The settings menu
		 * applies it through Localization, ignoring the first push when the config
		 * already chose a language.
		 */
		readonly onSetLanguage?: (handler: (language: number) => void) => void
		/**
		 * Icons the game pins to menu pages, keyed by path — `"Visual"`, `"Visual/Players"`.
		 * @see {@link SetEntryDefaults}
		 */
		readonly entryIcons?: () => Record<string, string>
		/**
		 * The order the game puts menu pages in, keyed by path — `"Visual"`, `"Visual/Players"` —
		 * lowest number first. It is what a list of pages several scripts register has instead of
		 * the alphabet.
		 * @see {@link SetEntryDefaults}
		 */
		readonly entryPriorities?: () => Record<string, number>
		/**
		 * The game as the client names it - `"dota2"`, `"cs2"`, `"deadlock"` - which the menu map
		 * carries to the client. Without it the map names none and the client goes by its session.
		 */
		readonly game?: string
	}
	/** The host the menu runs on, or `undefined` before one is attached. */
	function CurrentHost(): Nullable<MenuHost>
	/** Replaces the host outright and wires none of it; {@link AttachHost} merges and wires. */
	function SetMenuHost(next: MenuHost): void
	/**
	 * How many measurements the host has left unanswered so far, in any phase. A run of drawing that
	 * moves it laid something out at a stand-in size.
	 */
	function HostMeasureMisses(): number
	/**
	 * Asks the host again, from the frame tick, for every size a render of the menu fell back on
	 * ({@link HostMeasureText}, {@link HostImageSize}). True when one of them is known now: the menu
	 * renders once more to use it, and a size never measured by a render never costs one.
	 */
	function SettleHostMeasurements(): boolean
	/** The smallest menu scale the settings offer, as a fraction of the default size. */
	const MinMenuScale = 0.5
	/**
	 * The menu scale {@link MenuHost.scale} serves, 1 for the default size and never below 0.01.
	 * Always 1 where the renderer cannot scale the menu, or the host does not answer.
	 */
	function MenuScale(): number
	/** Whether an overlay may draw right now; see {@link MenuHost.canDrawOverlays}. */
	function HostCanDrawOverlays(): boolean
	/** @see MenuHost.occluded */
	function HostOccluded(x: number, y: number): boolean
	/** The cursor's screen position in px from {@link MenuHost.cursor}, `[0, 0]` without one. */
	function HostCursorPosition(): [number, number]
	/**
	 * Text size in px for a render of the menu, cached after the first successful host measurement,
	 * so the answer is identical no matter which phase asks for it. An unknown string the host
	 * cannot answer yet returns undefined and records a measure miss, and the menu renders once
	 * more when the host has measured it (see {@link SettleHostMeasurements}).
	 */
	function HostMeasureText(text: string, font: string, sizePx: number, weight: number, italic?: boolean): Nullable<[number, number]>
	/**
	 * {@link HostMeasureText} for drawing done again every frame - a HUD or a world overlay. A miss
	 * is counted and nothing else: the next frame asks again and has the host's answer, where
	 * re-rendering the menu for a reading that changes every frame would cost a render a frame.
	 */
	function HostMeasureTextPerFrame(text: string, font: string, sizePx: number, weight: number, italic?: boolean): Nullable<[number, number]>
	/** An image's own size in the file's pixels, cached and settled like {@link HostMeasureText}. */
	function HostImageSize(path: string): Nullable<[number, number]>
	/**
	 * Whether the host has a source decoded and in hand, asked afresh every time. Nothing is cached
	 * and no measure miss is noted - the answer is expected to change, and the next frame is the
	 * time to ask again. A host that cannot say is taken at its word that the source is ready.
	 * @example
	 * if (MenuSDK.HostImageReady(path)) {
	 * 	canvas.Image(path, rect)
	 * }
	 */
	function HostImageReady(path: string): boolean
	/** Whether the game is in a match, as {@link MenuHost.inGame} says; `true` without an answer. */
	function HostInGame(): boolean
	/**
	 * Whether the game has taken the keyboard, as {@link MenuHost.inputCaptured} says; `false`
	 * without an answer.
	 */
	function HostInputCaptured(): boolean
	/** Seconds on the match clock; see {@link MenuHost.gameTime}. */
	function HostGameTime(): Nullable<number>
	/**
	 * Whether the host has a match clock, that is, answers {@link MenuHost.gameTime} at all.
	 * Without one the menu offers no logic rules and runs none.
	 */
	function HostHasGameClock(): boolean
	/**
	 * Label of the one navigation row the menu shows in panic mode, while its tree holds a single
	 * tab; a click on the row reloads the scripts.
	 */
	const PanicEntryTitle = "Try to reload"
	/**
	 * Registered by whoever writes a stored document - Store/Config for the config, the theme
	 * settings for the theme; importing them here would be a cycle. Each flushes what it holds
	 * before the runtime dies, so a change made in the same frame as a reload still reaches disk.
	 */
	function OnBeforeScriptsReload(fn: () => void): void
	/**
	 * Runs every flush registered for a reload. A reload is also the recovery path out of a broken
	 * menu, so a flush that throws never blocks the others, nor the reload.
	 */
	function FlushBeforeReload(): void
	/**
	 * Registered by the bootstrap (same cycle): takes the menu and its layer documents off the
	 * screen before the runtime dies. The render thread goes on compositing whatever documents
	 * exist while the new runtime compiles, with every asset of this one already freed — a ghost
	 * of white tiles and missing text for the whole freeze. Nothing on screen beats that.
	 */
	function SetOnScriptsReload(fn: () => void): void
	/**
	 * Reloads the scripts: the config and theme are written now, the menu leaves the screen on the
	 * next frame and the host reloads two frames later. A call while one is on its way does nothing.
	 */
	function ReloadScripts(): void
	/**
	 * Whether a reload is on its way, ticked once per frame by the bootstrap. The first tick takes
	 * the menu down — here rather than in {@link ReloadScripts}, which a button handler calls, and
	 * an unmount from inside the dispatch destroys the dispatching element under its own feet. The
	 * tick that reaches zero kills the runtime; every one until then keeps the menu from remounting
	 * into the frames the renderer is clearing.
	 */
	function TickScriptsReload(): boolean
}

declare namespace MenuSDK {
	/** Stacking orders for {@link ShowOverlay}: a higher order draws above a lower one. */
	const OverlayOrder: {
		/** Tooltips and toasts. The only order {@link HasInteractiveOverlays} does not count. */
		Tooltip: number
		/**
		 * Popups and dropdowns. The cursor counts as over the menu only on their panels, and
		 * {@link CloseOverlays} closes them.
		 */
		Popup: number
		/**
		 * Modals. The cursor counts as over the menu anywhere on screen, and {@link CloseOverlays}
		 * leaves them open.
		 */
		Modal: number
		/** The drag shield of {@link BeginDrag}: above modals, and treated like them. */
		Drag: number
	}
	/**
	 * Draws `render` on the menu's overlay layer at `order`, one of {@link OverlayOrder}, under
	 * `key`. Showing a key again replaces what it showed; within one order the overlay shown last
	 * draws on top.
	 */
	function ShowOverlay(key: string, order: number, render: () => React.ReactNode): void
	/** Takes down the overlay shown under `key`, if there is one. */
	function HideOverlay(key: string): void
	/** Whether an overlay is shown under `key`. */
	function IsOverlayOpen(key: string): boolean
	/** Whether an overlay above the tooltip order is shown: a popup, a modal or a drag shield. */
	function HasInteractiveOverlays(): boolean
	/**
	 * Positional input test: modal- and drag-order overlays cover the screen and
	 * consume everywhere; popup-order overlays consume only while the cursor is
	 * inside a panel rect, so outside clicks fall through to the game while the
	 * panels' own scrims close them. Full-screen children (scrims) are skipped.
	 */
	function CursorOverOverlays(): boolean
	/**
	 * Takes down every tooltip and popup at once, leaving modals and the drag shield. It only
	 * removes them: no `onClose` they were opened with runs.
	 */
	function CloseOverlays(): void
	/**
	 * Closes what a new overlay replaces, keeping the one it is opened from: a panel carrying the row
	 * a popup hangs off has to outlive the click that opens the popup, or the settings of an element
	 * would close the preview panel they were asked for on. Modal-order overlays stay as they stay
	 * for {@link CloseOverlays}.
	 */
	function CloseOverlaysExcept(anchor: Nullable<HTMLElement>): void
	/**
	 * Frees the elements dropped from the page since the last frame and runs the work queued for
	 * after it. The menu calls it every frame.
	 */
	function TickOverlays(): void
	/**
	 * Drops every overlay and unmounts the overlay layer; the next {@link ShowOverlay} mounts it
	 * again. The menu calls it when it unmounts.
	 */
	function ResetOverlays(): void
}

declare namespace MenuSDK {
	/** Where the preview card and its stage sit on screen this frame, in pixels. */
	interface PreviewLayout {
		/** The card's left edge. */
		readonly left: number
		/** The card's top edge. */
		readonly top: number
		/** The card's width. */
		readonly width: number
		/** The card's height. */
		readonly height: number
		/** The stage's left edge, on a whole pixel. */
		readonly stageLeft: number
		/** The stage's top edge, on a whole pixel. */
		readonly stageTop: number
		/** The stage's width, in whole pixels. */
		readonly stageWidth: number
		/** The stage's height, in whole pixels. */
		readonly stageHeight: number
	}
	/** The height of the preview card's header band, in dp. */
	const HeaderHeight = 40
	/**
	 * Where the preview card stands against the menu `window` and where its stage lands inside it,
	 * in screen px, for a card `height` px tall at `ratio` px per dp. The stage is the band under the
	 * header, inside the card's border, each edge rounded to a whole pixel so that what a page draws
	 * on it in whole pixels stays sharp.
	 */
	function ComputeLayout(window: WindowState, ratio: number, height: number): PreviewLayout
	/**
	 * What one page shows on its preview: the scene, the model on it, what is drawn over it, and what
	 * it adds to the card's header and footer. Where the card sits, when it shows, and how the stage
	 * is sized and driven are the host's, the same for every page.
	 */
	interface PreviewSource {
		/** Distinguishes this preview's panels from another page's. */
		readonly key: string
		/**
		 * The scene rendered on the stage. The host loads {@link Model} into it, sizes it to the
		 * stage and keeps it active only while the card is shown.
		 */
		readonly scene: CPreviewScene
		/** Whether the page this belongs to is the one on screen. */
		Shown(): boolean
		/** The model on the stage this frame; the scene reloads only when it changes. */
		Model(): Nullable<string>
		/** A clip file to show the model in, for one that carries no animation of its own. */
		Clip?(): Nullable<string>
		/** The elements drawn over the stage, as structure — the frame pass positions them. */
		Stage(): React.ReactNode
		/** Whether stage elements may extend beyond the preview. Defaults to hidden. */
		readonly Overflow?: "visible" | "hidden"
		/** What the card's header shows between its daylight switch and its hide button. */
		Header?(): React.ReactNode
		/**
		 * The card's band under the stage. Without one the stage ends the card and takes its bottom
		 * corners.
		 */
		Footer?(): React.ReactNode
		/** Frame pass over the stage, in its own pixels. */
		Tick(visible: boolean, width: number, height: number): void
		/** Where the stage landed on screen, for a preview that can be dragged on. */
		Frame?(left: number, top: number, width: number, height: number): void
	}
	/** Mounts one page's preview: the glass card, the stage over it, and the pass that drives it. */
	function MountPreview(source: PreviewSource): void
}
