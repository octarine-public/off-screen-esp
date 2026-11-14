// AUTO-GENERATED - do not edit.
declare class modifier_muerta_parting_shot_physical_body_debuff extends Modifier implements IDebuff, IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	public get Duration(): number
	public IsDebuff(): this is IDebuff
	public IsDisable(): this is IDisable
	/** The game's debuff counts on a debuff-immune body as well. */
	public get PiercesDebuffImmunity(): boolean
	public get IsPurgable(): boolean
	public get IsStunDebuff(): boolean
}
