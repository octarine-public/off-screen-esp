// AUTO-GENERATED - do not edit.
interface DamageTracker {
	readonly Damage: number
	readonly LastDamageTime: number
	get IsExpired(): boolean
}
declare class modifier_nyx_assassin_jolt_damage_tracker extends Modifier {
	public EchoDuration: number
	public BonusTotalDamage: number
	public readonly BonusDamages: DamageTracker[]
	public PostDataUpdate(): void
	public get IsPurgable(): boolean
}
