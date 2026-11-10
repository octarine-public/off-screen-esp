// AUTO-GENERATED - do not edit.
declare class zuus_heavenly_jump extends Ability implements INuke {
	public IsNuke(): this is INuke
	/**
	 * Cast at nothing, it hops Zeus the way he faces (`MotionOn`): where it sets him down is his
	 * turn's to aim.
	 */
	public get UsesRotation(): boolean
	/** The shock strikes the closest enemy within `range` of Zeus as he leaps. */
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	/**
	 * The shock's `damage` with Static Field's share, on `target` only when the shock strikes it
	 * (`Strikes`): it goes to the `targets` enemies closest to Zeus within `range`, heroes before
	 * the rest - a target farther off than another enemy hero takes none, whatever the cast aims at.
	 */
	public GetRawDamage(target: Unit, context?: IDamageContext): number
	/**
	 * Whether the shock of a cast now strikes `target`: it is among the `targets` enemies of `owner`
	 * closest to it within `range` - living and in sight, heroes ahead of creeps whatever their
	 * distance.
	 * @example
	 * if (!jump.Strikes(enemy, zeus)) {
	 * 	// another enemy stands closer: the shock is theirs
	 * }
	 */
	public Strikes(target: Unit, owner: Unit): boolean
	/**
	 * The hop a cast landing at `landsAt` gives `target` - Zeus: `hop_distance` the way he faces
	 * then, over `hop_duration`, set down where he can stand (`PathfinderSDK.Standable`). Measured
	 * 21 October 2026 in the demo: turned away from Sand King 700 off, he went 600 straight on
	 * in 0.5 s, and the shock struck it 0.1 s into the hop, 870 off.
	 * @example
	 * const jump = zeus.GetAbilityByClass(zuus_heavenly_jump)
	 * const lands = jump?.MotionOn(zeus, zeus.Position, zeus.Position, landsAt)?.EndPosition
	 */
	public MotionOn(target: Unit, _from: Vector3, _toward: Vector3, landsAt: number): Nullable<Motion>
}
