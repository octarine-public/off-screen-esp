// AUTO-GENERATED - do not edit.
/**
 * Mirror Image: Naga Siren hides for `invuln_duration` and comes back with her images beside her -
 * cast at nothing, a buff of the fight she starts.
 */
declare class naga_siren_mirror_image extends Ability implements IBuff {
	/** Its cast dodges the projectiles flying at its caster (ProjectileDodge, server.dll). */
	public get Disjoints(): boolean
	public readonly BuffModifierName = "modifier_naga_siren_mirror_image"
	public IsBuff(): this is IBuff
	public get AppearanceDelay(): number
	/**
	 * Its images are the damage of her fight: cast as it begins, they walk in beside her. Waiting
	 * for her attack range it came late or never - she attacks from farther than the range the
	 * wait reads, and standing at 197-214 from the target she never cast it in four of nine runs;
	 * cast, it came 1.8 s after the Ensnare (20 October 2026, demo).
	 */
	public get IsCombatBuff(): boolean
	/** Its split lays a basic dispel on Naga Siren as the images come. */
	public get DispelsCaster(): SPELL_DISPELLABLE_TYPES
}
