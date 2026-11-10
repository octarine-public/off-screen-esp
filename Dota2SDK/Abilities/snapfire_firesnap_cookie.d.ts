// AUTO-GENERATED - do not edit.
declare class snapfire_firesnap_cookie extends Ability {
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public get ProjectileAttachment(): string
	public get CookieSpeed(): number
	public get JumpRange(): number
	/**
	 * How long the unit fed is in the air (`jump_duration`): the stun lands as it comes down -
	 * 0.50 s after the cast took, Snapfire fed (21 October 2026, demo).
	 */
	public get JumpDuration(): number
	/** The unit fed hops `JumpRange` forward and the cookie bursts where it lands. */
	public get LandsAhead(): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetCastDelay(unit?: Unit | Vector3, movement?: boolean, directionalMovement?: boolean, currentTurnRate?: boolean): number
	public get AppliesUnitState(): bigint
	/** The unit it is cast at hops and lands stunning the enemies round it. */
	public get HitsAroundTarget(): boolean
	/** Fed to herself, Snapfire hops the way she faces. */
	public get MovesAlongFacing(): boolean
	/** The unit fed - an ally, Snapfire herself - hops `JumpRange` the way it faces. */
	public get MovesTarget(): boolean
	/** The hop lasts `JumpDuration`. */
	public MovesTargetFor(_target: Unit): number
	/**
	 * The hop of `target` fed by a cast going off at `landsAt`: the cookie flies to it first, from
	 * Snapfire at `CookieSpeed` - none to herself - then the unit hops `JumpRange` the way it faces
	 * over `JumpDuration`.
	 */
	public MotionOn(target: Unit, from: Vector3, _toward: Vector3, landsAt: number): Nullable<Motion>
	/** The hop `MotionOn` gives `target` facing the way `way`: along it. */
	public MotionAlong(target: Unit, _from: Vector3, way: Vector3, landsAt: number): Nullable<Motion>
}
