// AUTO-GENERATED - do not edit.
/**
 * What a damage estimate made inside a sequence has to know about the blows before it: the
 * health left to take, what of the target's shields and barriers they left, and the game time the
 * damage lands.
 */
interface IDamageContext {
	/** Health the target is expected to have when this damage lands. */
	RemainingHealth: number
	/** Whether an earlier blow of the sequence already took the target's shields and barriers. */
	ShieldsConsumed: boolean
	/** Game time this damage lands. */
	Time: number
	/**
	 * The target's shields as the blows before spent them: this one takes off them what it blocks,
	 * no more than they still give (`ShieldLedger`).
	 */
	Shields?: ShieldLedger
	/**
	 * Where the blow comes from, for a cast at a point: the point. A blow that falls off with the
	 * distance from it - Proximity Mines' - reads it; left out, the blow is reckoned on the target.
	 */
	From?: Vector3
}
/** How `SimulateKill` plays the sequence. */
interface IKillSimulationOptions {
	/** Seconds the first cast waits before it starts, such as a blink or a walk. */
	Delay?: number
	/** Whether the blows already on their way to the target count; on by default. */
	IncludeIncoming?: boolean
	/** Whether the caster's attack is added after the abilities, at `AttackStrength`. */
	WithAttack?: boolean
	/** The attack damage roll taken when `WithAttack` is set; the minimum by default. */
	AttackStrength?: ATTACK_DAMAGE_STRENGTH
	/**
	 * Game time no blow past counts: one landing later is left out, out of time, and each counts
	 * with the ticks of its damage over time due by then (`Ability.DamageUntil`). None by default.
	 */
	Until?: number
	/**
	 * The roll the ticks of damage over time are counted at with `Until` (`Ability.DamageUntil`):
	 * the lowest by default - only the ticks the target cannot be rid of first; the average, every
	 * tick when it is due.
	 */
	Strength?: ATTACK_DAMAGE_STRENGTH
}
/** What `SimulateKill` found. */
interface IKillSimulation {
	/** Whether the sequence brings the target down. */
	Killable: boolean
	/** Damage the sequence deals in total. */
	Damage: number
	/** Seconds from now the last blow of the sequence lands. */
	Time: number
	/** Indices of the abilities the sequence used, in cast order; the ones it could not cast are left out. */
	Used: number[]
	/** Seconds from now the casts of the sequence are done: its casters are free to attack from then. */
	CastsEnd: number
}
/** What `Unit.HoldForecast` found. */
interface IHoldForecast {
	/** Damage the attackers deal the unit by then: their spells and items, then their attacks. */
	Damage: number
	/** Whether the unit lives through it, on top of the blows already on their way to it. */
	Survives: boolean
}
