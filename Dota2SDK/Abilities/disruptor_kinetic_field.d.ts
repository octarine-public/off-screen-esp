// AUTO-GENERATED - do not edit.
declare class disruptor_kinetic_field extends Ability implements IDebuff {
	public readonly DebuffModifierName = "modifier_disruptor_kinetic_field"
	/**
	 * The owner's kinetic field up or forming now - its thinker's modifier: the centre is its
	 * parent's position, the wall up `ActivationDelay` after its `CreationTime`, down at its
	 * `DieTime`. The latest of them; none without.
	 * @example
	 * const field = kineticField.Field
	 * if (field?.Parent !== undefined) {
	 * 	staticStorm.UseAbility(field.Parent.Position)
	 * }
	 */
	public get Field(): Nullable<modifier_disruptor_kinetic_field_thinker>
	public IsDebuff(): this is IDebuff
	public GetBaseAOERadiusForLevel(level: number): number
	protected DurationFrom(values: ISpecialValues, level: number): number
	public GetBaseActivationDelayForLevel(level: number): number
	/** The data names no targets: its wall keeps in the enemies in its area. */
	public TargetTeamOf(): DOTA_UNIT_TARGET_TEAM
	/** A hero or a creep. */
	public TargetTypeOf(): DOTA_UNIT_TARGET_TYPE
}
