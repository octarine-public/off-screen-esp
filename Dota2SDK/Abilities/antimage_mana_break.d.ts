// AUTO-GENERATED - do not edit.
/** Mana Break: each hit of Anti-Mage's burns the target's mana and deals a share of it. */
declare class antimage_mana_break extends Ability {
	/**
	 * Mana a hit burns from `target`: `mana_per_hit` and `mana_per_hit_pct` of its max mana, at
	 * most what it has - short of what a Blink with Aghanim's Scepter adds to the next one.
	 * @example
	 * const left = enemy.Mana - antimage.GetAbilityByClass(antimage_mana_break)!.BurnOn(enemy)
	 */
	public BurnOn(target: Unit): number
}
