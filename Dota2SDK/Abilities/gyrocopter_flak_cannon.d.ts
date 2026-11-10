// AUTO-GENERATED - do not edit.
/**
 * Flak Cannon: for `AbilityDuration`, Gyrocopter's next `max_attacks` attacks hit every enemy within
 * `radius` of him as well as the one he attacks - a buff on himself, cast at nothing and at once,
 * gone once the attacks are spent; its own damage is only a talent's (`bonus_damage`). By its
 * physical damage the data made it a nuke, cast at once from 1000 off the target, long before
 * Gyrocopter attacked (20 October 2026, demo).
 */
declare class gyrocopter_flak_cannon extends Ability implements IBuff {
	public readonly BuffModifierName = "modifier_gyrocopter_flak_cannon"
	public IsBuff(): this is IBuff
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
}
