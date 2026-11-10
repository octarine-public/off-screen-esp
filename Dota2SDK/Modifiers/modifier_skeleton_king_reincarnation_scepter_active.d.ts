// AUTO-GENERATED - do not edit.
declare class modifier_skeleton_king_reincarnation_scepter_active extends Modifier {
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected GetAttackSpeedBonusConstant(): [number, boolean]
	/**
	 * The wraith form ends in its bearer's death, the kill its trigger's (Liquipedia): no blow
	 * landing at any time while it is on finishes the bearer.
	 */
	public PreventsDeathAt(_time: number, _damageType: DAMAGE_TYPES): boolean
	protected GetMinHealth(): [number, boolean]
	protected UpdateSpecialValues(): void
	public get IsPurgable(): boolean
}
