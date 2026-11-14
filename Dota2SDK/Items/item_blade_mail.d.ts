// AUTO-GENERATED - do not edit.
declare class item_blade_mail extends Item {
	public static readonly ModifierName: string
	/** Damage Return turns the damage its bearer takes in a fight back at the enemies. */
	public get IsCombatBuff(): boolean
	/** Damage Return sends the damage its bearer takes back at whoever dealt it. */
	public get ReturnsDamage(): boolean
	/** Damage Return sends `active_reflection_pct` of a hit back at `source`, of the hit's type. */
	public DamageReturnedTo(source: Unit, raw: number, type: DAMAGE_TYPES): number
	public ReturnsDamageAt(time: number): boolean
	/** Damage Return stands `duration`. */
	public GuardDuration(_target: Unit): number
}
