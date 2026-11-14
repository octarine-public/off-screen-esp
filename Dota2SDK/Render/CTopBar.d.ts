// AUTO-GENERATED - do not edit.
/** Which rectangle of a top bar player slot to read. */
type PlayerRect = PlayerRect.Slot | PlayerRect.HeroImage | PlayerRect.HealthBar | PlayerRect.ManaBar | PlayerRect.Buyback | PlayerRect.RespawnTimer | PlayerRect.TPIndicator | PlayerRect.TPIcon | PlayerRect.UltReadyIndicator | PlayerRect.Salute | PlayerRect.COUNT
declare namespace PlayerRect {
	type Slot = 0
	type HeroImage = 1
	type HealthBar = 2
	type ManaBar = 3
	type Buyback = 4
	type RespawnTimer = 5
	type TPIndicator = 6
	type TPIcon = 7
	type UltReadyIndicator = 8
	type Salute = 9
	type COUNT = 10
}
/**
 * One player slot of the top bar.
 *
 * The game gives only the first slot of each team a unique id and names the rest
 * `RadiantPlayer-1`, so slots are addressed by their position in the container.
 */
interface CTopBarPlayer {
	/**
	 * True while a player sits in this slot.
	 *
	 * The game keeps five slot panels per team whether or not five players are in the match and
	 * lays the spare ones out like the rest, so this is the only thing telling them apart.
	 */
	get IsAssigned(): boolean
	/**
	 * True while the slot belongs to the team the local player is against.
	 *
	 * The game marks those slots itself, and that marking is exactly what decides whether it
	 * lays a health bar, mana bar or teleport indicator out at all: without vision it leaves
	 * them out of layout entirely. It is also which way round the slot's contents are slanted,
	 * so it says whether geometry taken from another slot has to be flipped.
	 */
	get IsEnemy(): boolean
	get Slot(): Nullable<Rectangle>
	get HeroImage(): Nullable<Rectangle>
	get HealthBar(): Nullable<Rectangle>
	get ManaBar(): Nullable<Rectangle>
	get Buyback(): Nullable<Rectangle>
	get RespawnTimer(): Nullable<Rectangle>
	get TPIndicator(): Nullable<Rectangle>
	/**
	 * The teleport button as it is painted, which is smaller than the box it sits in.
	 *
	 * `dota_hud_top_bar.css` gives `#TopBarTPIcon` a `ui-scale: 80%`, so the 48px button
	 * inside it is laid out at 38.4x38.4 at 1080p, centred in the 51x51 indicator.
	 */
	get TPIcon(): Nullable<Rectangle>
	get UltReadyIndicator(): Nullable<Rectangle>
	get Salute(): Nullable<Rectangle>
	/**
	 * Where the game paints this part of the slot: measured when it can be, and taken from
	 * the stylesheet when the game lays nothing out to measure at the current resolution.
	 */
	Rect(kind: PlayerRect): Nullable<Rectangle>
	/**
	 * Where the game paints this part of the slot, which for the health and mana bars is
	 * below their layout box — see {@link CTopBarPlayer.BarPaintOffset}. Undefined while the
	 * game keeps the panel out of layout, which it does for anything it has no reason to draw
	 * yet and for anything belonging to a team there is no vision of, and while the layout it
	 * holds is left over from another resolution — see {@link CTopBarPlayer.AtSlotScale}.
	 */
	Measured(kind: PlayerRect): Nullable<Rectangle>
	/**
	 * Where `dota_hud_top_bar.css` puts this part of the slot, for while the game lays nothing
	 * out to measure. Undefined for a part the stylesheet leaves to whatever is around it, and
	 * while the slot itself is out of layout.
	 */
	Designed(kind: PlayerRect): Nullable<Rectangle>
	Panel(kind: PlayerRect): HUDPanel
}
/**
 * One team's half of the top bar.
 *
 * The arrays handed out are reused between calls, so reading a second one rewrites the first:
 * copy what you need to keep.
 */
interface CTopBarTeam {
	get Score(): Nullable<Rectangle>
	get Background(): Nullable<Rectangle>
	get Image(): Nullable<Rectangle>
	get SpectatorGoldDisplay(): Nullable<Rectangle>
	/** One entry per player actually in the match on this team, in slot order. */
	get Players(): CTopBarPlayer[]
	/**
	 * One rectangle per slot the game lays out for this team, in the game's own slot order, so
	 * index by a player's team slot. A slot with no player in it reads undefined rather than
	 * being dropped, which would shift every later index.
	 */
	Rects(kind: PlayerRect): Nullable<Rectangle>[]
	/** Lets a team borrow the other side's geometry when the game lays out none of its own. */
	PairWith(other: CTopBarTeam): void
	/**
	 * The geometry of this kind relative to the slot it sits in, taken from the first slot
	 * the game does lay it out for, and whether that slot is an enemy one. Undefined when
	 * this team has none to offer.
	 */
	Offsets(kind: PlayerRect, target: Rectangle): Nullable<boolean>
	/** The panels of that kind belonging to slots a player actually sits in. */
	Panels(kind: PlayerRect): HUDPanel[]
}
/**
 * The top bar: both team rosters, the score, the clock and the spectator gold readouts.
 *
 * Slot order follows the game's own layout, left to right on screen for both teams. Every array
 * property hands back an array the section reuses, so reading another one rewrites it: copy what
 * you need to keep past the next read.
 */
interface CTopBar extends CHUDSection {
	/** The whole top bar. */
	get TopBar(): Nullable<Rectangle>
	/** The clock and day/night icon. */
	get TimeOfDay(): Nullable<Rectangle>
	/** The block the clock is painted on, a little wider and taller than the clock itself. */
	get TimeOfDayBackground(): Nullable<Rectangle>
	/** The strip of event timers under the clock; undefined while the game folds it away. */
	get Timers(): Nullable<Rectangle>
	/**
	 * The round icon of every event timer, in the order the game lays them out: power rune,
	 * bounty rune, wisdom shrine, lotus pool, jungle camps.
	 * @example
	 * const [powerRune] = GUIInfo.TopBar.TimerIcons
	 */
	get TimerIcons(): Nullable<Rectangle>[]
	/** The power rune timer's icon. */
	get PowerRuneTimer(): Nullable<Rectangle>
	/** The bounty rune timer's icon. */
	get BountyRuneTimer(): Nullable<Rectangle>
	/** The wisdom shrine timer's icon. */
	get WisdomShrineTimer(): Nullable<Rectangle>
	/** The lotus pool timer's icon. */
	get LotusPoolTimer(): Nullable<Rectangle>
	/** The jungle camps timer's icon. */
	get JungleCampsTimer(): Nullable<Rectangle>
	/** The "time until day/night" label the game shows while ALT is held. */
	get TimeOfDayTimeUntil(): Nullable<Rectangle>
	get Radiant(): CTopBarTeam
	get Dire(): CTopBarTeam
	get RadiantTeamScore(): Nullable<Rectangle>
	get DireTeamScore(): Nullable<Rectangle>
	get RadiantTeamImage(): Nullable<Rectangle>
	get DireTeamImage(): Nullable<Rectangle>
	get RadiantTeamBackground(): Nullable<Rectangle>
	get DireTeamBackground(): Nullable<Rectangle>
	get RadiantSpectatorGoldDisplay(): Nullable<Rectangle>
	get DireSpectatorGoldDisplay(): Nullable<Rectangle>
	get RadiantPlayers(): Nullable<Rectangle>[]
	get DirePlayers(): Nullable<Rectangle>[]
	get RadiantPlayersHeroImages(): Nullable<Rectangle>[]
	get DirePlayersHeroImages(): Nullable<Rectangle>[]
	get RadiantPlayersHealthbars(): Nullable<Rectangle>[]
	get DirePlayersHealthbars(): Nullable<Rectangle>[]
	get RadiantPlayersManabars(): Nullable<Rectangle>[]
	get DirePlayersManabars(): Nullable<Rectangle>[]
	get RadiantPlayersBuybacks(): Nullable<Rectangle>[]
	get DirePlayersBuybacks(): Nullable<Rectangle>[]
	get RadiantPlayersRespawnTimers(): Nullable<Rectangle>[]
	get DirePlayersRespawnTimers(): Nullable<Rectangle>[]
	get RadiantPlayersTPIndicators(): Nullable<Rectangle>[]
	/** The painted teleport icons, smaller than the indicator boxes around them. */
	get RadiantPlayersTPIcons(): Nullable<Rectangle>[]
	get DirePlayersTPIcons(): Nullable<Rectangle>[]
	get DirePlayersTPIndicators(): Nullable<Rectangle>[]
	get RadiantPlayersUltReadyIndicators(): Nullable<Rectangle>[]
	get DirePlayersUltReadyIndicators(): Nullable<Rectangle>[]
	get RadiantPlayersSalutes(): Nullable<Rectangle>[]
	get DirePlayersSalutes(): Nullable<Rectangle>[]
	/**
	 * Re-derives every rectangle the section owns rather than reads straight off a panel — the
	 * shifted bars, the ultimate indicator, and anything borrowed from the other side.
	 */
	Refresh(): void
	/**
	 * Outlines every rectangle the top bar hands out, so a script can be checked against them.
	 *
	 * Several of these the game only paints at a moment of its own — the bars and the teleport
	 * indicator while ALT is held, the buyback strip on top of that, the ultimate indicator when
	 * one is up — and the boxes are drawn all the same, because knowing where they will land is
	 * the point of the overlay. A slot with no player in it is left out.
	 */
	DebugDraw(): void
}
