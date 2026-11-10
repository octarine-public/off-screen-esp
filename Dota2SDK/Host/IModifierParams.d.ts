// AUTO-GENERATED - do not edit.
declare interface IModifierParams {
	readonly Damage?: number
	readonly IgnoreMagicResist?: boolean
	readonly SourceIndex?: number
	readonly RawDamage?: number
	readonly RawDamageBase?: number
	/**
	 * Whether the hit breaks the unit before it lands - an attack ending Silver Edge's Shadow
	 * Walk: a passive the Break turns off does not take it.
	 */
	readonly Breaks?: boolean
	/** Whether the damage is an attack's: the attacker faces its target as the attack lands. */
	readonly IsAttack?: boolean
	/**
	 * The attacker's hits on the target that land before the attack asked about - none for the
	 * next to land: a proc that counts hits reads its count that many hits on (Fury Swipes,
	 * Bash of the Deep).
	 */
	readonly HitsAhead?: number
	/**
	 * Whether the attack asked about has not begun: a crit its animation would show is not shown
	 * yet, its chance is the swing's (`Modifier.SwingProc`).
	 */
	readonly Ahead?: boolean
	/**
	 * What the game leaves out of the values a debuff-immune unit's debuffs give the property asked
	 * - debuffs (`Modifier.IsDebuff`, or buffs as well with `BuffsToo`) whose ability does not pierce
	 * the immunity (`Modifier.PiercesDebuffImmunity`). Each formula asks a property with its own
	 * filter, as the game does; without one, every value counts, on a debuff-immune unit too.
	 */
	readonly ImmuneFilter?: IModifierImmuneFilter
}

/** The values a debuff-immune unit's debuffs give that the game leaves out (`IModifierParams.ImmuneFilter`). */
declare interface IModifierImmuneFilter {
	/** Their negative values: a slow on a unit under BKB, while the speed the same debuff gives counts. */
	readonly NoNegative?: boolean
	/** Their positive values. */
	readonly NoPositive?: boolean
	/** Every value of theirs. */
	readonly None?: boolean
	/** Buffs' values as well as debuffs'. */
	readonly BuffsToo?: boolean
	/** Their values below it: an absolute speed slower than the unit's own. */
	readonly AtLeast?: number
	/** Their values above it: a base attack time longer than the unit's own. */
	readonly AtMost?: number
}
