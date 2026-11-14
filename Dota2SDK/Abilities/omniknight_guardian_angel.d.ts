// AUTO-GENERATED - do not edit.
/**
 * Guardian Angel: Omniknight's ultimate, cast at nothing - the units of his side within `radius`
 * of him immune to attacks for `duration`; with Aghanim's Scepter (`is_global`) the whole map's.
 */
declare class omniknight_guardian_angel extends Ability implements IBuff, IShield {
	public readonly BuffModifierName = "modifier_omninight_guardian_angel"
	public readonly ShieldModifierName = "modifier_omninight_guardian_angel"
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	/**
	 * Its `radius`; with Aghanim's Scepter (`is_global`) the whole map. Read as 700 there, it left a
	 * hero of ours past 700 out of the save's count (20 October 2026, data).
	 */
	public GetBaseAOERadiusForLevel(level: number): number
	/** Its guarded unit takes no physical damage. */
	public GuardsDamageOf(type: DAMAGE_TYPES): boolean
	public get AppliesUnitState(): bigint
	/** It guards every unit of Omniknight's side within its radius. */
	public get GuardsAllies(): boolean
}
