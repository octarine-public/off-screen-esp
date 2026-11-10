// AUTO-GENERATED - do not edit.
declare class chen_hand_of_god extends Ability implements IHealthRestore<Unit> {
	public get RestoresAlly(): boolean
	public get RestoresSelf(): boolean
	public get InstantRestore(): boolean
	public GetHealthRestore(_target: Unit): number
	public GetBaseAOERadiusForLevel(_level: number): number
	public IsHealthRestore(): this is IHealthRestore<Unit>
}
