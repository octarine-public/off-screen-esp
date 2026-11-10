// AUTO-GENERATED - do not edit.
declare class modifier_phoenix_supernova_hiding extends Modifier {
	/**
	 * In the egg Phoenix dies only as heroes' attacks break it, and comes back whole when it holds
	 * (Liquipedia): declared a least health here - the game declares nothing for it - so
	 * `Unit.PreventsDeathAt` finds it.
	 */
	protected readonly DeclaredEvents: EModifierfunction[]
	/** No blow landing at any time while it is on finishes Phoenix. */
	public PreventsDeathAt(_time: number, _damageType: DAMAGE_TYPES): boolean
	public UnitPropertyChanged(changed?: boolean): boolean
	public get IsPurgable(): boolean
}
