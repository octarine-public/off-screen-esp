// AUTO-GENERATED - do not edit.
declare class monkey_king_mischief extends Ability {
	public readonly Index: number
	public get ShouldBeDrawable(): boolean
	/**
	 * As he transforms Monkey King takes no damage of any kind - his transform's absolute
	 * no-damage, no state: a stun and the projectiles flying at him land all the same.
	 */
	public get GuardsDamage(): boolean
	/**
	 * A projectile homing on him comes down to what he turned into: from near him it hits a tenth
	 * of a second or more after the transform, past the no-damage.
	 */
	public get GuardsHoming(): boolean
	/**
	 * His form ends as he attacks or casts - a walk, a stop, a hold keep it: an order to attack or
	 * to cast, queued or not, ends the no-damage with it.
	 */
	public GuardBrokenBy(order: ExecuteOrder): boolean
	/** For `invul_duration` from the transform. */
	public GuardDuration(_target: Unit): number
}
