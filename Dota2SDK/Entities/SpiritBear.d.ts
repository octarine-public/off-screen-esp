// AUTO-GENERATED - do not edit.
declare class SpiritBear extends Unit {
	public readonly Index: number
	/** @readonly */
	public ShouldRespawn: boolean
	public readonly Agility: number
	public readonly Intellect: number
	public readonly Strength: number
	public readonly TotalAgility: number
	public readonly BaseTotalIntellect: number
	public readonly TotalStrength: number
	public CanMove(checkChanneling?: boolean, checkAbilityPhase?: boolean): boolean
	public CanAttack(target?: Unit, checkChanneling?: boolean, checkAbilityPhase?: boolean, additionalRange?: number, checkAttackRange?: boolean): boolean
}
