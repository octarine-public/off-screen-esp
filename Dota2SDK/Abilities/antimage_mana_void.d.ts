// AUTO-GENERATED - do not edit.
declare class antimage_mana_void extends Ability implements INuke {
	public IsNuke(): this is INuke
	/**
	 * Its damage grows with the mana the target lacks: what it is for is the kill. At a target
	 * with its mana full it deals none - cast so in the demo, it only stunned for 0.3 s (19
	 * October 2026).
	 */
	public get IsFinisher(): boolean
	public GetBaseAOERadiusForLevel(level: number): number
	public GetRawDamage(target: Unit): number
}
