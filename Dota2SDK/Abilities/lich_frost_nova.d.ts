// AUTO-GENERATED - do not edit.
declare class lich_frost_nova extends Ability implements INuke {
	public IsNuke(): this is INuke
	/** What the target cast at takes: its own `damage` and the blast's `aoe_damage` around it both. */
	public GetBaseDamageForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	/** The blast at the unit it is cast on: its `damage` and its area's `aoe_damage`, two blows. */
	public GetDamage(target: Unit, context?: IDamageContext): number
}
