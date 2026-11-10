// AUTO-GENERATED - do not edit.
declare class morphling_waveform extends Ability implements INuke {
	/** Its cast dodges the projectiles flying at its caster (ProjectileDodge, server.dll). */
	public get Disjoints(): boolean
	public IsNuke(): this is INuke
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	/** Its cast moves its caster: Morphling surges to the point as water. */
	public get MovesCaster(): boolean
	/** The rush cast from `from` at `toward`, starting at `landsAt`: `speed` fast toward the point, its cast range that way at most. */
	public MotionOn(target: Unit, from: Vector3, toward: Vector3, landsAt: number): Nullable<Motion>
}
