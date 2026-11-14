// AUTO-GENERATED - do not edit.
/**
 * The hero selection screen: the roster header both teams pick under, and the screens the game
 * swaps through it — hero grid, strategy time, player draft and ability draft.
 *
 * A coach slot only takes part in layout while that team has a coach, so its rectangle is
 * undefined the rest of the time; there is nothing to ask the game about separately.
 */
interface CPreGame extends CHUDSection {
	/** The whole hero selection screen. */
	get PreGame(): Nullable<Rectangle>
	/** The roster header carrying both teams and the clock. */
	get Header(): Nullable<Rectangle>
	/** The clock block between the two rosters. */
	get Center(): Nullable<Rectangle>
	/** The countdown label itself. */
	get Clock(): Nullable<Rectangle>
	/** The Radiant coach slot; undefined while that team has no coach. */
	get RadiantCoach(): Nullable<Rectangle>
	/** The Dire coach slot; undefined while that team has no coach. */
	get DireCoach(): Nullable<Rectangle>
	/** True while the Radiant coach slot takes part in layout. */
	get HasRadiantCoach(): boolean
	/** True while the Dire coach slot takes part in layout. */
	get HasDireCoach(): boolean
	/** The hero grid and the pick controls beside it. */
	get HeroGrid(): Nullable<Rectangle>
	/** The strategy-time screen. */
	get StrategyScreen(): Nullable<Rectangle>
	/** The player draft screen. */
	get PlayerDraftScreen(): Nullable<Rectangle>
	/** The ability draft screen. */
	get AbilityDraft(): Nullable<Rectangle>
	/** The Radiant/Dire side picker of a lobby. */
	get TeamPicker(): Nullable<Rectangle>
	/** The lane-selection minimap under the hero grid. */
	get Minimap(): Nullable<Rectangle>
	/** Counts both rosters while the reading is open, so the first script to ask sees them. */
	Refresh(): void
	get RadiantPlayers(): Nullable<Rectangle>[]
	get DirePlayers(): Nullable<Rectangle>[]
	get RadiantPlayersHeroImages(): Nullable<Rectangle>[]
	get DirePlayersHeroImages(): Nullable<Rectangle>[]
	get RadiantPlayersNames(): Nullable<Rectangle>[]
	get DirePlayersNames(): Nullable<Rectangle>[]
	get RadiantPlayersHeroNames(): Nullable<Rectangle>[]
	get DirePlayersHeroNames(): Nullable<Rectangle>[]
	get RadiantPlayersRoles(): Nullable<Rectangle>[]
	get DirePlayersRoles(): Nullable<Rectangle>[]
	DebugDraw(): void
}
