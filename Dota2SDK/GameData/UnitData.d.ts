// AUTO-GENERATED - do not edit.
interface IFacetAbilityData {
	AbilityName: string
	AbilityIndex: number
	ReplaceAbility: string
	AutoLevelAbility: boolean
}
interface IFacetData {
	Name: string
	Abilities: IFacetAbilityData[]
}
declare class UnitData {
	public static globalStorage: Map<string, UnitData>
	public static empty: UnitData
	public static unitNamesSorted: string[]
	/**
	 * Data of the unit the ability `abilityName` summons, as the unit's data names that ability
	 * (`UnitToAbilityMap`) - Death Ward's ward, a Serpent Ward: the first of them when it summons
	 * several kinds.
	 * @example
	 * const ward = UnitData.SummonedBy("witch_doctor_death_ward")
	 * const shotsPerSecond = ward !== undefined ? 1 / ward.BaseAttackTime : 0
	 */
	public static SummonedBy(abilityName: string): Nullable<UnitData>
	/**
	 * Whether the data of some unit - a hero, a creep, a summon - names the ability `name` as its
	 * own: in any of its ability slots or a facet's. A toy a hero brings from the store (Dark
	 * Carnival's pie and balloon, a snowball) is named by none: the game gives it to the hero in the
	 * match.
	 * @example
	 * const fromStore = !UnitData.NamesAbility("seasonal_dark_carnival_pie") // true
	 */
	public static NamesAbility(name: string): boolean
	public static GetUnitNameByNameIndex(index: number): Nullable<string>
	public static GetHeroID(name: string): number
	public static GetUnitDataByName(name: string): Nullable<UnitData>
	public static GetHeroNameByID(id: number): string
	public static GetHeroAttributePrimary(name: string): Attributes
	public readonly HeroID: number
	public readonly HeroEnabled: boolean
	public readonly ModelName: string
	public readonly MovementTurnRate: number
	public readonly BaseMovementSpeed: number
	public readonly AttackAcquisitionRange: number
	public readonly BaseAttackRange: number
	public readonly BaseAttackTime: number
	public readonly BaseAttackSpeed: number
	public readonly AttackAnimationPoint: number
	public readonly ProjectileSpeed: number
	public readonly AttackDamageType: AttackDamageType
	public readonly ArmorType: ArmorType
	public readonly HullRadius: number
	public readonly CollisionPadding: number
	public readonly ProjectileCollisionSize: number
	public readonly RingRadius: number
	public readonly MinimapIcon: string
	public readonly MinimapIconSize: number
	public readonly HasInventory: boolean
	public readonly HealthBarOffset: number
	public readonly WorkshopName: string
	/**
	 * Other names players know the hero by, from its data's `NameAliases` - `sf` and `nevermore`
	 * for Shadow Fiend, `wr` and `Lyralei` for Windranger; none for a unit the data names none for.
	 */
	public readonly NameAliases: readonly string[]
	public readonly AttributePrimary: Attributes
	public readonly MovementCapabilities: DOTAUnitMoveCapability
	/** How the unit attacks, as its data says: melee, ranged, or not at all. */
	public readonly AttackCapabilities: DOTAUnitAttackCapability
	public readonly ArmorPhysical: number
	public readonly MagicalResistance: number
	public readonly Abilities: Map<string, boolean>
	public readonly Facets: IFacetData[]
	public readonly AttackSpeedActivityModifiers: [number, string][]
	public readonly MovementSpeedActivityModifiers: [number, string][]
	public readonly AttackRangeActivityModifiers: [number, string][]
	/** Whether the unit attacks from range, as its data says - a ranged attack, directional or not. */
	public get IsRanged(): boolean
}
