// AUTO-GENERATED - do not edit.
declare class nevermore_shadowraze1 extends Ability implements INuke {
	/** A raze is aimed by Shadow Fiend's facing: see `ShadowrazeStrategy`. */
	public get PredictionStrategy(): IPredictionStrategy
	public get UsesRotation(): boolean
	public IsNuke(): this is INuke
	public GetBaseCastRangeForLevel(level: number): number
	public GetCastRangeForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * The raze strikes once, a circle `CastRange` ahead of Shadow Fiend's facing
	 * (`CastDirection`) and `AOERadius` wide, as its cast point ends - not around him.
	 */
	public GetShapeTimeline(input: PredictionInput, output: PredictionOutput): IShapeTimeline
	public GetBaseDamageForLevel(level: number): number
	/** The raze's damage, the target's stacks of earlier razes and Shadow Fiend's souls added. */
	public GetRawDamage(target: Unit): number
	/** The raze's damage, and an attack of Shadow Fiend's at the target while the raze procs one. */
	public GetDamage(target: Unit, context?: IDamageContext): number
}
