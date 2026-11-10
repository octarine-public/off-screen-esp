// AUTO-GENERATED - do not edit.
declare class zuus_thundergods_wrath extends Ability implements INuke {
	/**
	 * Its mana - 250 to 500, the most of Zeus's spells - buys one strike on every enemy hero,
	 * wherever they stand: in a fight at one target what it is for is the kill. Cast as the fight
	 * opened - 0.7-1.8 s in - it spent its 500 mana on a strike far short of Sand King's 7798
	 * health, mana five Arc Lightnings would have taken (21 October 2026, demo).
	 */
	public get IsFinisher(): boolean
	public GetBaseAOERadiusForLevel(_level: number): number
	public get HitsEveryEnemy(): boolean
	/** The strike lands on every enemy hero the tick after the cast point, not with it. */
	public GetBaseActivationDelayForLevel(_level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetRawDamage(target: Unit, context?: IDamageContext): number
}
