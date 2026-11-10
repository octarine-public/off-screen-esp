// AUTO-GENERATED - do not edit.
declare class primal_beast_uproar extends Ability implements IBuff {
	/**
	 * The roar's own buff on Primal Beast, not `modifier_primal_beast_uproar`, which holds the
	 * stacks and is on him whenever he has any: read as the buff, it kept every roar "on".
	 */
	public readonly BuffModifierName = "modifier_primal_beast_roared_self"
	public IsBuff(): this is IBuff
	/**
	 * The stacks Primal Beast roars with, those `modifier_primal_beast_uproar` holds: with none the
	 * game takes no roar - ordered every 0.4 s at none, it never went (20 October 2026, demo).
	 * @example
	 * const roars = uproar.Stacks > 0
	 */
	public get Stacks(): number
	public GetBaseAOERadiusForLevel(level: number): number
}
