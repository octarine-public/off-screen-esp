// AUTO-GENERATED - do not edit.
declare class modifier_item_blade_mail_reflect extends Modifier implements IBuff, IShield {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly ShieldModifierName: string
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	/**
	 * What Damage Return sends back at `source` for a hit of `raw` damage of `damageType` its
	 * bearer takes, `raw` before the bearer's reductions - not what the bearer took:
	 * `active_reflection_pct` of it, of the same type, through `source`'s resistances - the bearer
	 * its source.
	 */
	public DamageReturnedTo(source: Unit, raw: number, damageType: DAMAGE_TYPES): number
	/**
	 * What `source` takes of `returned` damage of `damageType` that Damage Return on `bearer` sends
	 * back at it: through `source`'s resistances, the bearer its source.
	 */
	public static Through(bearer: Unit, source: Unit, returned: number, damageType: DAMAGE_TYPES): number
	public get IsPurgable(): boolean
}
