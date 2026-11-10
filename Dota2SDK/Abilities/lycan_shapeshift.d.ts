// AUTO-GENERATED - do not edit.
/**
 * Shapeshift: Lycan turns into a wolf - a moment stunned in the change - and runs at `speed` with
 * critical strikes for `duration`: a buff of the fight he starts.
 */
declare class lycan_shapeshift extends Ability implements IBuff {
	public readonly BuffModifierName = "modifier_lycan_shapeshift"
	public IsBuff(): this is IBuff
	/**
	 * Its speed takes him into the fight: cast as it begins. Waiting for his attack range, it went
	 * 1 s after Howl from 400 off, he walking in meanwhile (21 October 2026, demo).
	 */
	public get IsCombatBuff(): boolean
	public GetBaseSpeedForLevel(level: number): number
}
