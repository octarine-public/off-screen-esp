// AUTO-GENERATED - do not edit.
/**
 * Snakebite's toxin: it ticks on its bearer by itself, and each attack its bearer launches bites it
 * again for `base_damage` from Venomancer (the server's `CDOTA_Modifier_Venomancer_Snakebite`
 * acts on its bearer's attacks, `MODIFIER_EVENT_ON_ATTACK`; not those of Lunar Orbit).
 */
declare class modifier_venomancer_snakebite extends Modifier {
	/** `base_damage` from Venomancer, through its bearer's resistances. */
	public get DamageOnOwnAttack(): number
	public get IsPurgable(): boolean
}
