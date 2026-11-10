// AUTO-GENERATED - do not edit.
declare class templar_assassin_meld extends Ability implements INuke, IBuff {
	public readonly BuffModifierName = "modifier_templar_assassin_meld"
	public IsBuff(): this is IBuff
	public get IsInvisibility(): boolean
	/** Her swing out of Meld brings its bonus damage and armor break with it. */
	public get RidesAttack(): boolean
	/** The swing she begins in Meld carries it - and ends Meld. */
	public RidesSwing(): boolean
	/**
	 * The swing out of Meld deals its bonus and lays the armor break: a cast before it ends Meld -
	 * Refraction cast in it took `modifier_templar_assassin_meld` off at once (21 October 2026, demo).
	 */
	public get RevealBonusDamage(): number
	public IsNuke(): this is INuke
	public GetBaseDamageForLevel(level: number): number
	public GetBaseSpeedForLevel(_level: number): number
	public GetRawDamage(target: Unit): number
	public GetDamage(target: Unit): number
	protected MeetsSpellBlock(): boolean
	/**
	 * Her attack range, as Meld makes it: its `attack_range_bonus` (a talent's) is on only while it
	 * lasts - she swings from there without a step, which would end it.
	 */
	public get CastRange(): number
}
