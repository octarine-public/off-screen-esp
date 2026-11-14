// AUTO-GENERATED - do not edit.
interface Inventory {
	readonly Owner: Unit
	get TotalItems(): Nullable<Item>[]
	get TPScroll(): Nullable<Item>
	get NeutralItem(): Nullable<Item>
	get Items(): Item[]
	/** Whether one of `Items` channels, the list not built. */
	get IsChanneling(): boolean
	get Backpack(): Item[]
	get Stash(): Item[]
	get FreeSlotsInventory(): DOTAScriptInventorySlot[]
	get FreeSlotsBackpack(): DOTAScriptInventorySlot[]
	get FreeSlotsStash(): DOTAScriptInventorySlot[]
	get HasAnyItemInventory(): boolean
	get HasAnyItemBackpack(): boolean
	get HasAnyItemStash(): boolean
	get HasFreeSlotsInventory(): boolean
	get HasFreeSlotsBackpack(): boolean
	get HasFreeSlotsStash(): boolean
	GetItem(slot: DOTAScriptInventorySlot): Nullable<Item>
	GetItemSlot(item: Item): Nullable<DOTAScriptInventorySlot>
	GetItems(start: DOTAScriptInventorySlot, end: DOTAScriptInventorySlot): Item[]
	GetFreeSlots(start: DOTAScriptInventorySlot, end: DOTAScriptInventorySlot): DOTAScriptInventorySlot[]
	HasAnyItem(start: DOTAScriptInventorySlot, end: DOTAScriptInventorySlot): boolean
	HasFreeSlot(start: DOTAScriptInventorySlot, end: DOTAScriptInventorySlot): boolean
	HasFreeSlots(start: DOTAScriptInventorySlot, end: DOTAScriptInventorySlot, howMany: number): boolean
	HasItemInInventory(name: string | RegExp, includeBackpack?: boolean): boolean
	CountItemByOtherPlayer(player?: Nullable<Player>): number
	GetItemByName(name: string | RegExp, includeBackpack?: boolean): Nullable<Item>
	GetItemByClass<T extends Item>(class_: Constructor<T>, includeBackpack?: boolean): Nullable<T>
	GetItemsByNames(names: string[], includeBackpack?: boolean): Item[]
	GetItemsByClasses<T extends Item>(classes: Constructor<T>[], includeBackpack?: boolean): T[]
}
