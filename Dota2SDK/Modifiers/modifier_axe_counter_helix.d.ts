// AUTO-GENERATED - do not edit.
/**
 * Counter Helix on Axe: its stacks count down the hits on him left until he spins, `trigger_attacks`
 * again after each spin.
 */
declare class modifier_axe_counter_helix extends Modifier {
	public readonly IsHidden = false
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	/**
	 * The spins that catch `victim` within `horizon` seconds: on the hit on Axe its stacks leave
	 * and each `trigger_attacks` hits after (`Unit.HitsLanding`) while `victim` stands within the
	 * radius, the ability's damage each; none while Axe is broken.
	 */
	public TriggeredBlows(victim: Unit, horizon: number, out: IncomingDamageEntry[]): void
	public get IsPurgable(): boolean
	protected GetIncomingPhysicalDamagePercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
}
