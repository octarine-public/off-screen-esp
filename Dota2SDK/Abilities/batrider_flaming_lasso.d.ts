// AUTO-GENERATED - do not edit.
/**
 * Flaming Lasso: Batrider drags the target behind him for `duration`. With Aghanim's Scepter the
 * server lassoes the enemy hero nearest the target within `grab_radius_scepter` too, dragged
 * behind the target; the cast is the same. It goes from its cast range of the target's edge, as
 * any cast at a unit: ordered from 285 off Chaos Knight, Batrider walked to 223 and cast it - with
 * 100 added to its range a Blink set him down 274 off and he walked the rest, the lasso 0.7 s after
 * the Blink (19 October 2026, demo).
 */
declare class batrider_flaming_lasso extends Ability {
	protected AppliedFrom(values: ISpecialValues, level: number): number
	/** Each tick of the lasso takes Sticky Napalm's damage on the target too. */
	public TickBonus(target: Unit): number
	/**
	 * The lasso deals `damage` spread over its `duration`, a share every `tick_rate`, the first as
	 * it lands, as many as `tick_rate` goes into `duration` whole - short of the whole `damage`.
	 * The target's status resistance shortens it.
	 */
	public DamageOverTime(out: DamageTicks, level: number): boolean
	public GetBaseAOERadiusForLevel(level: number): number
	public get AppliesUnitState(): bigint
}
