// AUTO-GENERATED - do not edit.
declare class modifier_spectre_dispersion extends Modifier {
	protected readonly CanPostDataUpdate = true
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public PostDataUpdate(): void
	/**
	 * What it takes off a hit sends back at `source` as pure damage - the whole of it within
	 * `min_radius` of Spectre, less as `source` stands farther, none from `max_radius` on: the
	 * share of the damage Spectre would take beside it. It comes with no damage event.
	 */
	public DamageReturnedTo(source: Unit, raw: number, damageType: DAMAGE_TYPES): number
	protected GetIncomingDamagePercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
}
