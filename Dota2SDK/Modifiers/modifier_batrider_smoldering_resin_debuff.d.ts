// AUTO-GENERATED - do not edit.
/**
 * Smoldering Resin on a unit, one of each Batrider's: his attack landing on it lays it with a
 * queue of `total_ticks` ticks, one every `tick_rate` from the moment it is laid, the first that
 * long after; every attack of his landing on it adds `tick_attack_damage_pct` percent of its
 * damage before the unit's armor - after its cut of a raw attack, a siege creep's of a hero's - to
 * each tick queued then - the next `total_ticks` - dealt physical; it ends at the first tick with
 * nothing queued (server.dll: `CDOTA_Modifier_Batrider_SmolderingResin_Debuff` fills the queue
 * with the laying attack's share as it is created and thinks every `tick_rate`, each think dealing
 * the front and moving the queue on, its attack-landed event adding to every slot). That event
 * adds the laying attack once more when it reaches the debuff it laid, which the server's code
 * leaves to the order it calls the attack's handlers in and the client cannot tell before the first
 * tick: the attack counts once - the least it deals - until that tick shows it twice. Demo, 1
 * November 2026, Batrider's attacks of 162-166 on siege creeps dealing 81-83: ticks 17, 17 of one
 * attack; 33, 50, 33, 34, 33, 33 of one each 0.9 s - the laying one once; 49, 65, 33, 33 - twice.
 * The game keeps the queue on the server alone: it is taken from the attacks the game reports
 * landing (`entity_hurt` with no ability), whichever of the hit and the debuff laid by it the
 * client sees first - the hit first in the demo - and from those on their way (`IncomingDamage`)
 * as they land, at the lowest roll. Sticky Napalm's damage on each tick is a hit of its own and
 * not counted.
 */
declare class modifier_batrider_smoldering_resin_debuff extends Modifier {
	protected readonly DeclaredEvents: EModifierfunction[]
	/** It deals its queue by itself once an attack fed it (`DamageOverTime`). */
	public get IsDamageOverTime(): boolean
	/**
	 * Its ticks to come: each the share of every attack fed to it, landed or on its way, queued for
	 * it (`DamageTicks.Shares`), physical.
	 */
	public DamageOverTime(out: DamageTicks, _level: number): boolean
	public get IsPurgable(): boolean
	/**
	 * Notes the attack of `caster` the game reports landing on `victim`, `damage` of it taken off:
	 * the debuff of his on it takes it; one it lays, coming after it, finds it left for a tick.
	 */
	public static Hurt(victim: Unit, caster: Unit, damage: number): void
	/**
	 * Notes a tick of `caster`'s Smoldering Resin the game reports `victim` taking, `damage` of it:
	 * his debuff on it learns from its first whether the attack laying it counted twice.
	 */
	public static Ticked(victim: Unit, caster: Unit, damage: number): void
	protected UpdateSpecialValues(): void
	protected OnAdded(): void
}
