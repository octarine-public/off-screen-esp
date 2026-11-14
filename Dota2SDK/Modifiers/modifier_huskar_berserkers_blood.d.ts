// AUTO-GENERATED - do not edit.
declare class modifier_huskar_berserkers_blood extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public IsBuff(): this is IBuff
	public PostDataUpdate(): void
	/** Health regeneration a second: `maximum_health_regen` percent of its parent's strength at its full. */
	public HealthRegenWith(health: number, maxHealth: number, strength: number): number
	public MagicResistWith(health: number, maxHealth: number): number
}
