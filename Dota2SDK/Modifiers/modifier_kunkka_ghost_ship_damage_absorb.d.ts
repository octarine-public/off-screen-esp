// AUTO-GENERATED - do not edit.
/**
 * The Admiral's Rum - Ghostship's on the allies it passes, and Kunkka's own as his innate pours it
 * on him (the server's `CDOTA_Modifier_Kunkka_Admirals_Rum` lays this one, its own share and
 * duration): of the damage its bearer takes it holds back the share its incoming damage says -
 * `ghostship_absorb`, times `rum_factor` for Ghostship's, networked - for its
 * hangover to take off its health after it (`modifier_kunkka_ghost_ship_damage_delay`): as it ends
 * with its bearer alive, the server lays the hangover with what it held, cut to a whole number,
 * and its own duration (server.dll, `CDOTA_Modifier_Kunkka_GhostShip_DamageAbsorb`). The game
 * keeps what is held on the server alone: it is noted from the damage the game reports the bearer
 * taking while it lasts (`entity_hurt`), the part that got through - which the game rounds up,
 * so a little more than the server holds of the hit before.
 */
declare class modifier_kunkka_ghost_ship_damage_absorb extends Modifier implements IBuff, IShield {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly ShieldModifierName: string
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	public get IsPurgable(): boolean
	/** Whether any bearer is watched: a rum on it now, or one whose hangover has not come yet. */
	public static get Watching(): boolean
	/** Notes `damage` the game reports the unit of index `index` taking. */
	public static Hurt(index: number, damage: number): void
	/**
	 * What the latest rum on the unit of index `index` held back, handed to its hangover: none once
	 * handed, or with no rum noted.
	 */
	public static TakeHeld(index: number): number
}
