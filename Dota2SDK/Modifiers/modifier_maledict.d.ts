// AUTO-GENERATED - do not edit.
declare class modifier_maledict extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	public IsDebuff(): this is IDebuff
	/**
	 * The bearer's health as the curse came on it, by the curse's ticks `ticks`: its bursts deal a
	 * share of what it lost since (`DamageTicks.HealthLaid`). The game keeps it on the server alone,
	 * so it is noted as the curse shows, the ticks due by then given back - the first lands with
	 * it; what else hurt the bearer before is not known. `NaN` before it shows.
	 */
	public HealthLaid(ticks: DamageTicks): number
	public get IsPurgable(): boolean
}
