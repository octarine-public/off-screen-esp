// AUTO-GENERATED - do not edit.
declare type PanoramaSymbol = number
declare interface IUIPanel {
	FindChild(id: string): Nullable<IUIPanel>
	FindChildTraverse<T extends IUIPanel>(id: string): Nullable<T>
	FindChildInLayoutFile(id: string): Nullable<IUIPanel>
	FindPanelInLayoutFile(id: string): Nullable<IUIPanel>
	FindAncestor(id: string): Nullable<IUIPanel>
	FindLowestCommonAncestor(panel: IUIPanel): Nullable<IUIPanel>
	GetChildCount(): number
	GetChild(index: number): Nullable<IUIPanel>
	GetFirstChild(): Nullable<IUIPanel>
	GetLastChild(): Nullable<IUIPanel>
	GetChildIndex(child: IUIPanel): number
	GetChildCountOfType(symbol: PanoramaSymbol): number
	GetHiddenChildCount(): number
	GetHiddenChild(index: number): Nullable<IUIPanel>
	GetHiddenChildIndex(child: IUIPanel): number
	IsDescendantOf(child: IUIPanel): boolean
	MoveChildAfter(childToMove: IUIPanel, before: IUIPanel): void
	MoveChildBefore(childToMove: IUIPanel, after: IUIPanel): void
	RemoveAndDeleteChildren(): void
	RemoveAndDeleteChildrenOfType(symbol: PanoramaSymbol): void

	SetID(id: string): void
	GetID(): string
	BHasID(): boolean
	BIsLoaded(): boolean
	GetPanelType(): PanoramaSymbol
	LoadLayout(xmlPath: string, override: boolean): void

	GetActualXOffset(): number
	GetActualYOffset(): number
	GetRawActualXOffset(): number
	GetRawActualYOffset(): number
	GetActualLayoutWidth(): number
	GetActualLayoutHeight(): number
	GetActualRenderWidth(): number
	GetActualRenderHeight(): number
	GetContentWidth(): number
	GetContentHeight(): number
	GetDesiredLayoutWidth(): number
	GetDesiredLayoutHeight(): number
	GetActualUIScaleX(): number
	GetActualUIScaleY(): number
	GetActualUIScaleZ(): number

	GetContentsXScrollOffset(): number
	GetContentsYScrollOffset(): number
	GetContentsXScrollOffsetTarget(): number
	GetContentsYScrollOffsetTarget(): number
	ScrollToTop(): void
	ScrollToBottom(): void
	ScrollToLeftEdge(): void
	ScrollToRightEdge(): void
	IsScrolledIntoView(): boolean

	BHasClass(symbol: PanoramaSymbol): boolean
	BAscendantHasClass(symbol: PanoramaSymbol): boolean
	AddClass(symbol: PanoramaSymbol): void
	RemoveClass(symbol: PanoramaSymbol): void
	RemoveAllClasses(): void
	ToggleClass(symbol: PanoramaSymbol): void
	TriggerClass(symbol: PanoramaSymbol): void
	SetHasClass(symbol: PanoramaSymbol, value: boolean): void

	SetVisible(visible: boolean): void
	BIsVisible(): boolean
	SetEnabled(enable: boolean): void
	IsEnabled(): boolean
	SetSelected(enable: boolean): void
	IsSelected(): boolean
	IsActivationEnabled(): boolean
	SetActivationEnabled(enable: boolean): void
	SetAllChildrenActivationEnabled(enable: boolean): void
	SetDraggable(enable: boolean): void
	IsDraggable(): boolean

	BAcceptsInput(): boolean
	SetAcceptsInput(accepts: boolean): void
	BAcceptsFocus(): boolean
	SetAcceptsFocus(accepts: boolean): void
	BCanAcceptInput(): boolean
	SetDefaultFocus(childId: string): void
	GetDefaultFocus(): string
	SetDisableFocusOnMouseDown(disable: boolean): void
	BFocusOnMouseDown(): boolean
	BCanClearFocusByClicking(): boolean
	SetCanClearFocusByClicking(enable: boolean): void
	BAlwaysConsumeHoverClicks(): boolean
	SetAlwaysConsumeHoverClicks(enable: boolean): void
	BScrollParentToFitWhenFocused(): boolean
	SetScrollParentToFitWhenFocused(scrollParentToFit: boolean): void
	BTopOfInputContext(): boolean
	SetTopOfInputContext(top: boolean): void
	GetParentInputContext(): Nullable<IUIPanel>
	GetDefaultInputFocus(): Nullable<IUIPanel>
	SetFocus(): void
	SetRememberChildFocus(enable: boolean): void
	GetRememberChildFocus(): boolean
	SetChildFocusOnHover(enable: boolean): void
	GetChildFocusOnHover(): boolean
	SetFocusOnHover(enable: boolean): void
	GetFocusOnHover(): boolean

	SetHitTestEnabled(enable: boolean): void
	BHitTestEnabled(): boolean
	SetHitTestEnabledTraverse(enable: boolean): void
	SetHitTestChildrenEnabled(enable: boolean): void
	BHitTestChildrenEnabled(): boolean

	BHasOnActivateEvent(): boolean
	BHasOnMouseActivateEvent(): boolean
	GetAttribute(symbol: PanoramaSymbol, defaultValue: string): string
	SetAttribute(symbol: PanoramaSymbol, value: string): void
	RemoveAttribute(symbol: PanoramaSymbol): void
	BSetProperty(symbol: PanoramaSymbol, value: string): boolean
}
