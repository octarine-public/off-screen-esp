// AUTO-GENERATED - do not edit.
/**
 * Firefly: Batrider flies for `duration`, faster as it lasts, and leaves a burning trail behind
 * him - a buff on himself, whatever it burns.
 */
declare class batrider_firefly extends Ability implements IBuff {
	public readonly BuffModifierName = "modifier_batrider_firefly"
	public IsBuff(): this is IBuff
	/**
	 * Its speed and its flight take Batrider into the fight, and a target his Flaming Lasso drags
	 * is dragged along the trail it burns: cast as the fight begins - as a nuke of its trail's radius
	 * it waited for the target within 250 of him and went after the Lasso (19 October 2026, demo).
	 */
	public get IsCombatBuff(): boolean
	public GetBaseAOERadiusForLevel(level: number): number
}
