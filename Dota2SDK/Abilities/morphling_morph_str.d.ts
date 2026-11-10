// AUTO-GENERATED - do not edit.
declare class morphling_morph_str extends Ability implements IHealthRestore<Unit> {
	public get RestoresAlly(): boolean
	public get RestoresSelf(): boolean
	public get InstantRestore(): boolean
	public readonly HealthRestoreModifierName = "modifier_morphling_morph_str"
	public HealthGain(seconds: number): number
	public GetHealthRestore(_target: Unit): number
	public IsHealthRestore(): this is IHealthRestore<Unit>
}
