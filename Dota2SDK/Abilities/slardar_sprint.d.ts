// AUTO-GENERATED - do not edit.
/**
 * Guardian Sprint: Slardar runs faster for `duration` - a buff on himself, cast at nothing and at
 * once (no cast point), slows do not hold him back.
 */
declare class slardar_sprint extends Ability implements IBuff {
	public readonly BuffModifierName = "modifier_slardar_sprint"
	public IsBuff(): this is IBuff
	/**
	 * Its speed takes him in to the target - Slithereen Crush lands only around him: cast as the
	 * fight begins. Waiting for his attack range, it went after the Crush: from 700 he walked 1.4 s
	 * into it at his own speed, the sprint 0.5 s later (21 October 2026, demo).
	 */
	public get IsCombatBuff(): boolean
	/** He runs `bonus_speed` percent faster. */
	public SpeedsUp(caster: Unit): number
}
