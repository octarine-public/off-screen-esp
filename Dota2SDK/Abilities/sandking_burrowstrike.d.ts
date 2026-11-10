// AUTO-GENERATED - do not edit.
declare class sandking_burrowstrike extends Ability implements INuke {
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	public get AppliesUnitState(): bigint
	/** Its cast moves its caster: Sand King burrows to the point. */
	public get MovesCaster(): boolean
	/** The rush cast from `from` at `toward`, starting at `landsAt`: `burrow_speed` fast toward the point, its cast range that way at most. */
	public MotionOn(target: Unit, from: Vector3, toward: Vector3, landsAt: number): Nullable<Motion>
}
