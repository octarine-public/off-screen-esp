// AUTO-GENERATED - do not edit.
/**
 * Spiked Carapace: while it lasts the first damage of each source a player controls turns back on
 * the source - none of it lands on Nyx, the source takes it and a stun - and its later damage
 * lands (measured: a Dagon 0, the next 512). The game keeps the sources it turned back on the
 * server alone: they are noted from the damage it deals (`entity_hurt`, its ability the
 * inflictor).
 */
declare class modifier_nyx_assassin_spiked_carapace extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public IsBuff(): this is IBuff
	/** Whether it turns back the next damage of `source`: once for each source a player controls. */
	public TurnsBack(source: Unit): boolean
	/** A cast's first hit on Nyx it turns back (`HitsBeyond`). */
	protected readonly DeclaredEvents: EModifierfunction[]
	/**
	 * The first of the hits `hits` of a cast of `ability` landing on Nyx while it lasts deals none,
	 * its owner not turned back yet (`TurnsBack`).
	 */
	public HitsBeyond(ability: Ability, target: Unit, hits: DamageHits): number
	/**
	 * Notes the damage the unit of index `attacker` dealt the unit of index `victim` with the
	 * entity of index `inflictor`: the carapace turning the victim's hit back.
	 */
	public static Hurt(attacker: number, victim: number, inflictor: number): void
	protected OnAdded(): void
	public get IsPurgable(): boolean
}
