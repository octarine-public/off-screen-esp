// AUTO-GENERATED - do not edit.
/**
 * Bash of the Deep's count on Slardar: his hits on heroes count, and the one landing on the
 * `attack_count`-th bashes - its `bonus_damage` and a `duration` stun - the count starting over.
 */
declare class modifier_slardar_bash_active extends Modifier implements IBuff {
	protected readonly DeclaredEvents: EModifierfunction[]
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	public IsBuff(): this is IBuff
	/** Each hit counts toward the bash (`IModifierParams.HitsAhead`). */
	public get CountsHits(): boolean
	/** `duration` when his hit on `target`, `hitsAhead` of his hits on it landing before, bashes. */
	public SwingStun(target: Unit, hitsAhead: number): number
	protected GetProcAttackBonusDamagePhysical(params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
}
