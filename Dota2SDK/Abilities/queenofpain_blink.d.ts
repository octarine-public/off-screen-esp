// AUTO-GENERATED - do not edit.
/**
 * Blink: Queen of Pain blinks to the point - a cast beyond its reach goes as far as it reaches
 * that way, one short of `MinRange` that far. With the Shard she lands with a blast that harms
 * and silences the enemies round where she comes down (`shard_aoe`).
 */
declare class queenofpain_blink extends Ability {
	/** Its cast dodges the projectiles flying at its caster (ProjectileDodge, server.dll). */
	public get Disjoints(): boolean
	/** How far a blink takes her at least: cast nearer, she goes this far that way. */
	public get MinRange(): number
	public IsBlink(): boolean
	/**
	 * Where a blink cast from `from` at `toward` sets its owner down: there - no nearer than
	 * `MinRange` - or its reach that way.
	 */
	public MotionOn(target: Unit, from: Vector3, toward: Vector3, landsAt: number): Nullable<Motion>
	public GetBaseAOERadiusForLevel(level: number): number
	public get AppliesUnitState(): bigint
}
