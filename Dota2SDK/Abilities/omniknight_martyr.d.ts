// AUTO-GENERATED - do not edit.
/**
 * Heavenly Grace: Omniknight blesses a hero of his side - himself too - for `duration`: magic
 * resistance and health regeneration. A buff cast at a unit of his side; with no modifier named it
 * could go again at a hero who has it (20 October 2026).
 */
declare class omniknight_martyr extends Ability implements IBuff {
	public readonly BuffModifierName = "modifier_omniknight_martyr"
	public IsBuff(): this is IBuff
	/** The unit it is cast at is immune to debuffs. */
	public get AppliesUnitState(): bigint
}
