// AUTO-GENERATED - do not edit.
/**
 * Blink: Anti-Mage blinks to the point - a cast beyond its reach goes as far as it reaches that
 * way, one short of `MinRange` that far. With Aghanim's Scepter his next Mana Break after it
 * burns more (`EmpoweredBreakDuration`).
 */
declare class antimage_blink extends Ability {
	/** Its cast dodges the projectiles flying at its caster (ProjectileDodge, server.dll). */
	public get Disjoints(): boolean
	/**
	 * How far a blink takes him at least: cast nearer, he goes this far that way - from 198 off
	 * the target, cast 60 ahead he came down 225 on, cast 150 aside 200 on (19 October 2026, in the
	 * demo).
	 */
	public get MinRange(): number
	/**
	 * Seconds after a cast within which his next Mana Break burns more and stops the target's mana
	 * coming back - Aghanim's Scepter; none without it.
	 */
	public get EmpoweredBreakDuration(): number
	public IsBlink(): boolean
	/**
	 * Where a blink cast from `from` at `toward` sets its owner down: there - no nearer than
	 * `MinRange` - or its reach that way.
	 */
	public MotionOn(target: Unit, from: Vector3, toward: Vector3, landsAt: number): Nullable<Motion>
}
