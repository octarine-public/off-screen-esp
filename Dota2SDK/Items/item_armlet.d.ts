// AUTO-GENERATED - do not edit.
declare class item_armlet extends Item {
	public static readonly ModifierName: string
	/**
	 * Seconds Unholy Strength takes to reach its full strength once it comes on. The item's data
	 * does not say; agreed with the owner on 23 October 2026 from a measurement in the Training
	 * Polygon custom game: `unholy_bonus_strength` 25 came in six equal steps by the modifier's
	 * `ElapsedTime` - 0.1, 0.2, 0.3, 0.4, 0.533, 0.6 - the health with each.
	 */
	public static readonly UnholyRamp = 0.6
	/** Seconds between the steps of Unholy Strength's ramp (`UnholyRamp`), measured with it. */
	public static readonly UnholyStep = 0.1
	/**
	 * The least health toggling it off leaves: the strength it takes away never kills. The item's
	 * data does not say; agreed with the owner on 23 October 2026 from a measurement in the
	 * Training Polygon custom game: 504 health with Unholy Strength on, 1 once it went off.
	 */
	public static readonly HealthLeftOff = 1
	public get ToggleCooldown(): number
	/** Strength Unholy Strength adds at its full: `unholy_bonus_strength`. */
	public get UnholyStrength(): number
	/** Health a second Unholy Strength drains from its bearer while it is on. */
	public get UnholyDrain(): number
	public get TexturePath(): string
	/** Unholy Strength's strength and damage open a fight. */
	public get IsCombatBuff(): boolean
	/** Seconds Unholy Strength has been on `owner`; none while it is off. */
	public UnholyElapsed(owner: Unit): Nullable<number>
	/**
	 * Strength Unholy Strength adds `elapsed` seconds after it came on: a step every
	 * `UnholyStep` up to its full at `UnholyRamp`, each counted a tick after it is due, as the
	 * game lands one at times.
	 * @example
	 * armlet.UnholyStrengthAt(0.25) // 8.33: two steps of 25 / 6
	 */
	public UnholyStrengthAt(elapsed: number): number
	/**
	 * Health Unholy Strength adds to its bearer's current health `elapsed` seconds after it came
	 * on: `HealthGainPerStrength` for its strength then, whole points or not - its maximum takes
	 * only whole points of the bearer's strength (`UnholyHealthAt`); its drain not taken off.
	 * @example
	 * const gained = armlet.UnholyGainAt(item_armlet.UnholyRamp + GameState.TickInterval) // 550
	 */
	public UnholyGainAt(elapsed: number): number
	/**
	 * Health - its maximum, and its current health with it - Unholy Strength adds to `owner`
	 * `elapsed` seconds after it came on: the game's health for every whole point of strength
	 * over what `owner` has without it.
	 * @example
	 * const full = armlet.UnholyHealthAt(hero, item_armlet.UnholyRamp + GameState.TickInterval)
	 */
	public UnholyHealthAt(owner: Unit, elapsed: number): number
	/**
	 * Health `owner` keeps the moment it toggles the armlet off with `health`: what Unholy
	 * Strength added goes, never below `HealthLeftOff`; all of it while the armlet is off.
	 * @example
	 * const left = armlet.HealthAfterOff(hero, hero.HP) // 1 for 504 at its full
	 */
	public HealthAfterOff(owner: Unit, health: number): number
}
