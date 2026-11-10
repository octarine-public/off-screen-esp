// AUTO-GENERATED - do not edit.
/**
 * Wave of Terror: a wave along a line that deals its damage and lays
 * `modifier_vengefulspirit_wave_of_terror` - armor and attack damage cut for `duration` - on
 * every enemy it passes. The cut is what it is for: cast again while it is on, it only renews it
 * (21 October 2026, demo: the modifier on Sand King 0.14 s after the cast).
 */
declare class vengefulspirit_wave_of_terror extends Ability implements INuke, IDebuff {
	public readonly DebuffModifierName = "modifier_vengefulspirit_wave_of_terror"
	public get SkillshotRange(): number
	public IsNuke(): this is INuke
	public IsDebuff(): this is IDebuff
	public GetBaseDamageForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
}
