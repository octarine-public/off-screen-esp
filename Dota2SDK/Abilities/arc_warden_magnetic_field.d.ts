// AUTO-GENERATED - do not edit.
/**
 * Magnetic Field: a field at a point where our side evades every attack from outside it, and its
 * caster attacks faster - a shield and a buff for our side, not a control of the enemy's.
 */
declare class arc_warden_magnetic_field extends Ability implements IBuff, IShield {
	public readonly BuffModifierName = "modifier_arc_warden_magnetic_field_evasion"
	public readonly ShieldModifierName = "modifier_arc_warden_magnetic_field_evasion"
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	/**
	 * The point its self-cast goes at, with no cursor - Alt with its key, or the key tapped twice:
	 * just ahead of its owner, the way it faces (`SelfCastAhead`). None with no owner.
	 * @example
	 * const feet = field.DoubleTapPoint
	 * if (feet !== undefined) {
	 * 	hero.CastPosition(field, feet)
	 * }
	 */
	public get DoubleTapPoint(): Nullable<Vector3>
	/** A cast at the point of its self-cast (`DoubleTapPoint`), as near as Pugna's ward reads one. */
	public IsDoubleTapAt(point: Vector3): boolean
	/** An order at the point of its self-cast (`IsDoubleTapAt`): it needs no cursor. */
	public IsDoubleTap(order: ExecuteOrder): boolean
	public GetBaseAOERadiusForLevel(level: number): number
	protected DurationFrom(values: ISpecialValues, level: number): number
	public get AppliesUnitState(): bigint
}
