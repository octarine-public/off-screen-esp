// AUTO-GENERATED - do not edit.
/** One change of a unit's move speed on its way to it: the slow an Ethereal Blade in flight brings. */
interface IncomingSpeedEntry {
	/** What carries it: the projectile's id, which it goes with. */
	readonly Source: number
	/** Percent of its move speed it gives the unit, a slow below zero (`AbilityEffects.SpeedChangeAt`). */
	readonly Percentage: number
	/** Seconds it lasts from its landing, the unit's status resistance taken off. */
	readonly Duration: number
	/** Whether it fades evenly to nothing by its end: Viper Strike's slow. */
	readonly Fades: boolean
	/** Game time it lands. */
	LandsAt: number
	/** Game time it ends. */
	get EndsAt(): number
	/** Percent of its move speed it gives the unit at the game time `time`: none before it lands or once it ends. */
	At(time: number): number
}
/**
 * The changes of one unit's move speed on their way to it: the slows and buffs that projectiles in
 * flight bring it (`AbilityEffects.SpeedChangeAt`), which `Unit.MoveSpeedAt` counts from their
 * landing as its modifiers' own. An entry goes with its projectile, as the modifier it brings
 * takes over, or `PredictionTuning.DamageLandingGrace` past its landing when nothing ends it -
 * not with the unit's position history: a projectile goes on after its target jumps or leaves
 * sight, and one it dodges ends on its own.
 */
interface IncomingSpeed {
	readonly Entries: IncomingSpeedEntry[]
	/** Percent more of its speed the buffs on their way give the unit at the game time `time`. */
	BonusAt(time: number): number
	/** Percent of its speed the slows on their way take from the unit at the game time `time`, a negative number. */
	SlowAt(time: number): number
	/** Whether `source` brings the unit a change. */
	Has(source: number): boolean
	/** Pushes into `out` the game times after `from` and before `to` a change lands or ends. */
	Changes(from: number, to: number, out: number[]): void
	/**
	 * Registers the change of `percentage` percent of the unit's speed that `source` brings at the
	 * game time `landsAt`, lasting `duration` seconds and fading meanwhile when `fades`.
	 */
	Add(source: number, percentage: number, duration: number, fades: boolean, landsAt: number): IncomingSpeedEntry
	/** The changes `source` brings land at the game time `landsAt`: its flight timed again. */
	Retime(source: number, landsAt: number): void
	/** Drops the changes `source` brings: it landed, and the modifiers it lays take over, or it is gone. */
	Remove(source: number): void
	/** Drops the changes nothing ended `grace` seconds after their landing. */
	Prune(now: number, grace: number): void
	Clear(): void
}
