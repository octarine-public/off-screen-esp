// AUTO-GENERATED - do not edit.
/**
 * Fiend's Gate: a pair of portals, one by Underlord, one where it is cast - at least
 * `MinimumDistance` off him - and he warps from one to the other (`abyssal_underlord_portal_warp`
 * on the portal). With Aghanim's Scepter a Pit of Malice opens at each of them as they rise
 * (`SpawnsPit`): cast 1912 off a target, the far pit rooted it at once (21 October 2026, demo). It
 * reaches over the whole map (server: no cast range, only `minimum_distance` and ground it may stand
 * on - "cant cast here" else; casts 2100 and 2200 off him at trees were dropped, 21 October 2026);
 * the far portal stands 100-200 off the point cast at, where the game finds room for it.
 */
declare class abyssal_underlord_dark_portal extends Ability {
	/** Cast the way its caster stands: it turns to nothing (`Ability.RequiresFacing`). */
	public get RequiresFacing(): boolean
	/**
	 * Magical: the fire of its talent, the only damage it deals, takes the target's magic
	 * resistance; the data gives it no type.
	 */
	public get DamageType(): DAMAGE_TYPES
	/**
	 * With its talent the portals burn the enemies within `radius` of them while they stand
	 * (`duration`): `dps` each second - the second not in the data - the first as they open, on for
	 * a twentieth of a second after a unit walks out - its debuff's, not in the data. None without
	 * the talent.
	 * The 1 s between ticks is the server's own: `CDOTA_Modifier_Underlord_Portal_Fire_Effect`
	 * thinks every 1 s (server.dll).
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public get CastRange(): number
	/** How far off Underlord the gate is cast at least. */
	public get MinimumDistance(): number
	/** Whether a Pit of Malice opens at each portal as the gate rises - Aghanim's Scepter. */
	public get SpawnsPit(): boolean
	/**
	 * The owner's portal standing nearest `position`; none while no gate of his stands.
	 * @example
	 * const near = gate.PortalNear(hero.Position), far = gate.PortalNear(enemy.Position)
	 */
	public PortalNear(position: Vector3): Nullable<UnderlordPortal>
}
