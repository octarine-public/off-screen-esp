// AUTO-GENERATED - do not edit.
declare class modifier_alchemist_unstable_concoction extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	/**
	 * The damage of the brew thrown now: `max_damage` brewed `brew_time` long, a share of it
	 * before.
	 */
	public get RemainingDamage(): number
	/**
	 * The damage of the brew thrown `seconds` from now, it brewing on until then: `max_damage`
	 * times the share of `brew_time` brewed by then, all of it after - physical.
	 */
	public DamageAfter(seconds: number): number
	public IsBuff(): this is IBuff
	public get IsPurgable(): boolean
}
