// AUTO-GENERATED - do not edit.
declare class modifier_dark_willow_shadow_realm_buff extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	/**
	 * Seconds until an attack from the realm hits for its full `damage`: the damage grows with the
	 * time the buff is on, up to `max_damage_duration` (server.dll).
	 */
	public get FullDamageIn(): number
	/**
	 * Whether the first attack from the realm ends it: it does but for a caster with Aghanim's
	 * Scepter, whose attacks keep it on - each for the damage grown by then (server.dll, 7.41f).
	 */
	public get EndsOnAttack(): boolean
	protected GetAttackRangeBonus(): [number, boolean]
	protected GetPreAttackBonusDamageMagical(): [number, boolean]
	protected UpdateSpecialValues(): void
	public get IsPurgable(): boolean
}
