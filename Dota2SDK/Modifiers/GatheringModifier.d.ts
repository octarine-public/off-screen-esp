// AUTO-GENERATED - do not edit.
/**
 * A modifier that gathers the damage its parent takes while it lasts and deals a share of it back
 * as it ends, magical - Orchid Malevolence's Soul Burn, Bloodthorn's Soul Rend (`GathersDamage`).
 * The game keeps what is gathered on the server alone; it is summed here from the damage the
 * game reports its parent taking since the modifier showed (`entity_hurt`).
 */
declare class GatheringModifier extends Modifier {
	/** The share of what it gathered it deals back: none by default. */
	protected get GatheredShare(): number
	public get GathersDamage(): boolean
	protected readonly DeclaredEvents: EModifierfunction[]
	/** It deals the share of what it gathered as it ends (`DamageOverTime`). */
	public get IsDamageOverTime(): boolean
	/**
	 * The share of what it gathered so far, as it ends; what its parent takes from now on is not
	 * counted.
	 */
	public DamageOverTime(out: DamageTicks, _level: number): boolean
	/** Notes `damage` the game reports the unit of index `index` taking. */
	public static Hurt(index: number, damage: number): void
	protected OnAdded(): void
}
