// AUTO-GENERATED - do not edit.
declare class techies_sticky_bomb extends Ability implements INuke {
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	/**
	 * The bomb flies `duration` to the point - its `speed` is the chase of a hero it sticks to - and
	 * goes off `countdown` after.
	 */
	public GetBaseActivationDelayForLevel(level: number): number
}
