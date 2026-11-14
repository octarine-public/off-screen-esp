// AUTO-GENERATED - do not edit.
/**
 * Prophet's Pendulum: of the damage its bearer takes `delay_pct` percent is held back (the
 * incoming damage it declares) and taken off its health later, a share each `damage_interval` for
 * `delay_time` - every hit's share on the same ticks, timed from the first hit while any is held.
 * The game keeps what is held on the server alone: it is noted from the damage the game reports
 * the bearer taking (`entity_hurt`), the part that got through. A Break on the bearer stops it -
 * the hits land whole, what is held still comes - though the data marks no item breakable; a hit
 * coming with the Break of a cast hitting first (Viper Strike's first tick) is still held, one
 * breaking first (Sharpshooter's bolt, Silver Edge's backstab) is whole (`HitsBeyond`).
 */
declare class modifier_item_prophets_pendulum extends Modifier {
	/** What it holds back is taken off its bearer by itself (`DamageOverTime`). */
	public get IsDamageOverTime(): boolean
	/** A hit on its bearer leaves a share held back (`HitOverTime`). */
	/**
	 * The ticks of what it holds back, to come: each the shares due then, none past the last
	 * (`DamageTicks.Shares`, a `Removal`).
	 */
	public DamageOverTime(out: DamageTicks, _level: number): boolean
	/**
	 * Each hit `hits` of a cast on its bearer - its blow, a tick of its damage over time - that does
	 * not find it broken (`BrokenAt`) leaves `delay_pct` of the whole held, taken off over the ticks
	 * of `delay_time`: on the held ticks while any is held, else on ones from the first held hit
	 * (`DamageTicks.Shares`, a `Removal`).
	 */
	public HitOverTime(ability: Ability, target: Unit, hits: DamageHits, out: DamageTicks): Nullable<Ability>
	/** Whether any bearer is watched. */
	public static get Watching(): boolean
	/**
	 * What the hits `hits` of a cast of `ability` on its bearer deal beyond what was counted, as
	 * each lands: one finding it broken (`BrokenAt`) lands whole (`DamageHits.Whole`), one finding
	 * it whole lands but the share let through - counted so already unless it is broken now.
	 */
	public HitsBeyond(ability: Ability, target: Unit, hits: DamageHits): number
	/** Notes `damage` the game reports the unit of index `index` taking. */
	public static Hurt(index: number, damage: number): void
	/** Notes since when each bearer is broken, as each frame comes; forgets those gone. */
	public static Watch(): void
	public get IsPurgable(): boolean
}
