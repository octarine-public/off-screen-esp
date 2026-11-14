// AUTO-GENERATED - do not edit.
declare class tusk_walrus_punch extends Ability implements INuke {
	public get DamageType(): DAMAGE_TYPES
	public IsNuke(): this is INuke
	public GetRawDamage(target: Unit): number
	public GetDamage(target: Unit): number
	/**
	 * The punch is a swing of Tusk's: it lands at his attack point - its behavior names no attack
	 * (`AbilityBehaviorMask`), so the base would give the data's cast point.
	 */
	public get CastPoint(): number
	public get AbilityBehaviorMask(): DOTA_ABILITY_BEHAVIOR
	/** The punch is cast as an attack, as its data says - the mask above leaves that out. */
	public get IsAttack(): boolean
	/** Its target is thrown up, stunned, for `air_time`. */
	public get HitUnitState(): bigint
}
