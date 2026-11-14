// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** What {@link CConfirmModal.Show} puts in the dialog. Every text is localized before it shows. */
	interface IConfirmModalOptions {
		/** The line in bold at the top. */
		readonly title: string
		/** The body; each `\n` starts a new line, and an empty line leaves a gap. */
		readonly message: string
		/** Label of the confirm button, `"Confirm"` by default. */
		readonly confirmText?: string
		/** Label of the cancel button, `"Cancel"` by default. */
		readonly cancelText?: string
		/** Runs when the dialog is confirmed, after `input.onConfirm` and `dontAskAgain.onConfirm`. */
		readonly onConfirm?: () => void
		/**
		 * Runs when the dialog closes any other way: Cancel, Escape, a click outside it or
		 * {@link CConfirmModal.Dismiss}.
		 */
		readonly onCancel?: () => void
		/** Adds a required single-line field and passes its trimmed value when the dialog is confirmed. */
		readonly input?: {
			readonly placeholder?: string
			readonly initialValue?: string
			readonly maxLength?: number
			readonly onConfirm: (value: string) => void
		}
		/** Adds an opt-out checkbox whose callback runs only when the checked dialog is confirmed. */
		readonly dontAskAgain?: {
			readonly label?: string
			readonly onConfirm: () => void
		}
	}
	/** The menu's confirmation dialog: a title, a message and a Cancel and a Confirm button. */
	interface CConfirmModal {
		/** Whether the dialog is on the screen; it comes up the frame after {@link Show}. */
		get IsOpen(): boolean
		/**
		 * Keeps the dialog centered over the menu window; ticked once per
		 * frame while the menu runs.
		 */
		Tick(): void
		/**
		 * Opens the dialog with `options` on the next frame; a call while one is open or opening is
		 * ignored. Escape cancels it, and Enter confirms it unless its `input` field is empty.
		 */
		Show(options: IConfirmModalOptions): void
		/** Closes the dialog as Cancel does, running `onCancel`; nothing happens while none is open. */
		Dismiss(): void
	}
	/**
	 * The menu's confirmation dialog.
	 * @example
	 * MenuSDK.ConfirmModal.Show({
	 * 	title: "Clear the list?",
	 * 	message: "Every saved route is removed.",
	 * 	confirmText: "Clear",
	 * 	onConfirm: () => routes.clear()
	 * })
	 */
	const ConfirmModal: CConfirmModal
}
