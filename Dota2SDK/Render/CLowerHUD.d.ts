// AUTO-GENERATED - do not edit.
/**
 * The lower HUD of whatever unit the player has selected.
 *
 * The game rebuilds this region for every selection — a hero gets a talent tree, an innate
 * display and a nine-slot inventory, a creep gets neither — so the panels are read rather than
 * predicted, and the ability and inventory lists are as long as the game currently makes them.
 */
interface CLowerHUD extends CHUDSection {
	/**
	 * The area the lower HUD actually covers — the union of the panels the game is laying out,
	 * so it shrinks when a unit has no talent tree and grows when it gains extra abilities.
	 */
	get FullHUDContainer(): Nullable<Rectangle>
	/** The whole lower HUD strip, including the space the game leaves empty around it. */
	get LowerHUD(): Nullable<Rectangle>
	/** The block holding the portrait, abilities, health bars and inventory. */
	get CenterBlock(): Nullable<Rectangle>
	get LeftFlare(): Nullable<Rectangle>
	get RightFlare(): Nullable<Rectangle>
	/** The unit portrait. */
	get Portrait(): Nullable<Rectangle>
	/** The name label under the portrait. */
	get UnitName(): Nullable<Rectangle>
	/** The attribute block that replaces the portrait backing for heroes. */
	get StatsContainer(): Nullable<Rectangle>
	/** The level orb with its experience ring. */
	get XP(): Nullable<Rectangle>
	/** The orb together with the experience label above it. */
	get XPContainer(): Nullable<Rectangle>
	/** The unit group panel shown when several units are selected. */
	get MultiUnit(): Nullable<Rectangle>
	/** The respawn timer and buyback button shown while the hero is dead. */
	get DeathPanel(): Nullable<Rectangle>
	/** The level-up button column beside the abilities. */
	get LevelUp(): Nullable<Rectangle>
	/** The health and mana bars. */
	get HealthManaContainer(): Nullable<Rectangle>
	/** The talent tree, abilities and aghanim's status taken together. */
	get AbilitiesContainer(): Nullable<Rectangle>
	/** The talent tree button; undefined for units that have none. */
	get TalentTree(): Nullable<Rectangle>
	/** The innate ability display; undefined for units that have none. */
	get RootInnateDisplay(): Nullable<Rectangle>
	/** The ability row itself, without the talent tree or aghanim's status. */
	get Abilities(): Nullable<Rectangle>
	/**
	 * The icon square of every ability the game is showing, left to right. Slots the unit does
	 * not use are left out, so the length is the visible ability count.
	 * @example
	 * for (const rect of GUIInfo.LowerHUD.AbilitiesRects) {
	 * 	RendererSDK.OutlinedRect(rect.pos1, rect.Size)
	 * }
	 */
	get AbilitiesRects(): Rectangle[]
	/**
	 * The whole slot of every ability the game is showing — the hotkey above the icon and the
	 * level pips below it included.
	 */
	get AbilitySlots(): Rectangle[]
	/** The aghanim's scepter and shard status block. */
	get AghsStatusContainer(): Nullable<Rectangle>
	/** The extra ability bar Invoker and friends get above the main row. */
	get SecondaryAbilities(): Nullable<Rectangle>
	/** The inventory block, backpack included. */
	get InventoryContainer(): Nullable<Rectangle>
	/** The six main inventory slots, in slot order. */
	get MainInventorySlots(): Nullable<Rectangle>[]
	/** The backpack slots, in slot order. */
	get BackpackSlots(): Nullable<Rectangle>[]
	/** The neutral item and teleport slots taken together. */
	get NeutralAndTPContainer(): Nullable<Rectangle>
	/** The neutral item slot. */
	get NeutralSlot(): Nullable<Rectangle>
	/** The teleport scroll slot. */
	get TPSlot(): Nullable<Rectangle>
	/** The buff row above the HUD. */
	get Buffs(): Nullable<Rectangle>
	/** The debuff row above the HUD. */
	get Debuffs(): Nullable<Rectangle>
	/**
	 * Re-derives the union rectangles the section owns, and counts the ability and backpack slots
	 * while the reading is open, so the first script to ask sees them.
	 */
	Refresh(): void
	DebugDraw(): void
}
