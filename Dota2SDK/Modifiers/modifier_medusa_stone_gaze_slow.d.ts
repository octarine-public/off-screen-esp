// AUTO-GENERATED - do not edit.
/** Stone Gaze's slow on a unit while it looks at Medusa, gone as it looks away. */
declare class modifier_medusa_stone_gaze_slow extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	public IsDebuff(): this is IDebuff
	/** A look that is over adds to how long the bearer has looked under the gaze (`modifier_medusa_stone_gaze_facing.Faced`). */
	public Remove(): boolean
	public get IsPurgable(): boolean
}
