// AUTO-GENERATED - do not edit.
/**
 * What may keep a unit alive through what is on it and on its way (`Unit.DiesAt`): an instant heal
 * landing at a moment, an invulnerability standing over a stretch, an attack immunity standing
 * over a stretch, a least health standing over a stretch, a dispel landing at a moment.
 * @example
 * const up = hero.ResponseTime(greaves)
 * const saved =
 * 	hero.DiesAt(3, {
 * 		Heal: greaves.GetHealthRestore(hero),
 * 		HealAt: up,
 * 		Dispel: greaves.DispelsCaster,
 * 		DispelAt: up
 * 	}) === Infinity
 */
interface IRescue {
	/** The health an instant heal gives the unit at the game time `HealAt`. */
	readonly Heal?: number
	readonly HealAt?: number
	/**
	 * The game times an invulnerability stands from and till: the ticks and the blows meeting it
	 * are missed.
	 */
	readonly GuardFrom?: number
	readonly GuardUntil?: number
	/**
	 * The game times an attack immunity stands from and till (Ghost Scepter): the attacks landing
	 * in it miss, the rest lands (`IncomingDamageEntry.IsAttack`).
	 */
	readonly AttacksOffFrom?: number
	readonly AttacksOffUntil?: number
	/**
	 * The game times a least health stands from and till (`Ability.KeepsAlive`: Shallow Grave):
	 * the blows and the ticks land, but the unit's health goes no lower than 1 meanwhile.
	 */
	readonly AliveFrom?: number
	readonly AliveUntil?: number
	/**
	 * The strength of a dispel cast on the unit at the game time `DispelAt`: the damage over time of
	 * the modifiers it takes off (`Modifier.DispelledBy`) stops then.
	 */
	readonly Dispel?: SPELL_DISPELLABLE_TYPES
	readonly DispelAt?: number
}
