// AUTO-GENERATED - do not edit.
declare class earthshaker_echo_slam extends Ability implements INuke {
	public IsNuke(): this is INuke
	/** The slam stuns by Aftershock. */
	protected get HoldingAbility(): Nullable<string>
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	/**
	 * The slam's initial damage, its Aftershock's at a unit near Earthshaker, and the echoes at
	 * `target` (`EchoesAt`) - they fly at 650 a second (Liquipedia), counted here as the slam lands.
	 */
	public GetRawDamage(target: Unit): number
	/**
	 * How many echoes reach `target` (Liquipedia): each other enemy unit the slam hits - within
	 * `echo_slam_echo_search_range` of Earthshaker, seen now - sends one to every enemy within
	 * `echo_slam_echo_range` of it, not to itself, a hero or a clone two, a creep or an illusion one;
	 * a building none.
	 */
	public EchoesAt(target: Unit): number
	public get AppliesUnitState(): bigint
}
