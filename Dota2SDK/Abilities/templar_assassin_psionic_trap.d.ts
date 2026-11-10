// AUTO-GENERATED - do not edit.
declare class templar_assassin_psionic_trap extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	/** Damage a trap deals once it has charged for `trap_max_charge_duration`. */
	public GetBaseDamageForLevel(level: number): number
	/** None as it is placed: a trap deals its damage as it is sprung (`templar_assassin_trap`). */
	public GetDamage(_target: Unit): number
	/**
	 * A living trap of the caster's whose area covers `position` - the one charged longest; none
	 * without one. Its traps stay till sprung, up to `max_traps`.
	 * @example
	 * const laid = psionicTrap.TrapOver(enemy.Position) !== undefined
	 */
	public TrapOver(position: Vector3): Nullable<npc_dota_templar_assassin_psionic_trap>
}
