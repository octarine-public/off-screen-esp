// AUTO-GENERATED - do not edit.
declare class item_bottle extends Item implements IManaRestore<Unit>, IHealthRestore<Unit> {
	public get RestoresAlly(): boolean
	public get RestoresSelf(): boolean
	public get InstantRestore(): boolean
	public readonly ManaRestoreModifierName = "modifier_bottle_regeneration"
	public readonly HealthRestoreModifierName = "modifier_bottle_regeneration"
	public StoredRune: DOTA_RUNES
	public LastRuneTypeChangeTime: number
	public get IsInvisibility(): boolean
	public get StoredRuneTime(): number
	/** Mana one charge gives over its whole duration (`MaxDuration`), the share of the drinker's pool aside (`GetManaRestore`). */
	public get TotalManaRestore(): number
	/** Health one charge gives over its whole duration (`MaxDuration`), the share of the drinker's pool aside (`GetHealthRestore`). */
	public get TotalHealthRestore(): number
	/**
	 * Whether damage takes the regeneration off the unit drinking: any above zero dealt by a unit
	 * a player controls or by Roshan, the drinker's own aside (`break_on_hero_damage`).
	 */
	public get BreaksOnDamage(): boolean
	public get TexturePath(): string
	public get ManaRestore(): number
	public get HealthRestore(): number
	public get Cooldown(): number
	public get RuneExpireTime(): number
	public get IsCooldownReady(): boolean
	public get CanMoveInBackpack(): boolean
	public CanBeCasted(bonusMana?: number): boolean
	/** Mana one charge gives `target` over its whole duration: the flat amount and the share of its pool. */
	public GetManaRestore(target: Unit): number
	/** Health one charge gives `target` over its whole duration: the flat amount and the share of its pool. */
	public GetHealthRestore(target: Unit): number
	public IsManaRestore(): this is IManaRestore<Unit>
	public IsHealthRestore(): this is IHealthRestore<Unit>
}
