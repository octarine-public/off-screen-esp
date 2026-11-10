// AUTO-GENERATED - do not edit.
/**
 * The Admiral's Rum's hangover: what the rum held back (`modifier_kunkka_ghost_ship_damage_absorb`),
 * laid on it as a whole number with the rum's duration, is taken off its bearer each second from a
 * second after it comes to its end - that share of it a second, cut to a whole number - by setting
 * its bearer's health, so it never kills. The second is the server's own, not the data's: the
 * modifier's OnCreated starts thinking every 1 s, its OnIntervalThink sets the health with
 * ModifyHealth, not lethal (server.dll, `CDOTA_Modifier_Kunkka_GhostShip_DamageDelay`).
 */
declare class modifier_kunkka_ghost_ship_damage_delay extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredEvents: EModifierfunction[]
	/** It takes what the rum held back by itself (`DamageOverTime`). */
	public get IsDamageOverTime(): boolean
	/** It sets its bearer's health, 1 at least. */
	public get NeverKills(): boolean
	/**
	 * Its ticks: the share of what the rum held back a second of its `Duration`, cut to a whole
	 * number, each second, the first a second after it comes, the last as it ends
	 * (`DamageTicks.SetsHealth`).
	 */
	public DamageOverTime(out: DamageTicks, _level: number): boolean
	public IsBuff(): this is IBuff
	public get IsPurgable(): boolean
	protected OnAdded(): void
}
