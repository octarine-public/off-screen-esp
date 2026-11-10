// AUTO-GENERATED - do not edit.
/**
 * The game's own health bar of an enemy hero, painted on a HUD surface where no unit stands to draw
 * one - a page's preview in the menu - part for part and pixel for pixel, as the bars script draws
 * it: on the layout the SDK gives (`Unit.LayHeroHealthBar`), the level box, the frame and its rim,
 * the empty and full health rows with their dividers, the mana row, the icon backing and the hero's
 * icon. The rows are the game's own sheet sampled the way the game samples it
 * (`HeroHealthBarSheet`); the level box and the icon backing are its sprites themselves, tinted. The
 * tints are the defaults of `dota_hud_new_healthbar_enemy_*`, the level's colour the
 * `dota_hud_new_healthbar_level_local_*_brightness` ones met halfway, the dividers the game's, the
 * level's face the game's (clientscheme.res: UnitInfoPlayerLevelFont) - agreed with the owner as
 * constants on 23 October 2026. The face is the script's to load (`LevelFont`, `LevelWeight`): the
 * file ships with it. The rows are sampled once for each layout of the bar and the commands handed to
 * the surface are kept and refilled frame after frame.
 * @example
 * const painter = new HeroHealthBarPainter(surface)
 * const bar = Unit.LayHeroHealthBar(anchor, true, 13)
 * painter.Draw(bar, 1100, 2000, 0.6)
 * painter.Dress(bar, "13", ImageData.GetHeroTexture("npc_dota_hero_warlock"))
 */
declare class HeroHealthBarPainter {
	/** Dota Hypatia Bold, the level's face: its family, its weight - a script loads the face file under them. */
	public static readonly LevelFont = "Dota Hypatia Bold"
	public static readonly LevelWeight = 800
	/** Paints onto `surface`, the HUD surface of the page that shows the bar. */
	constructor(surface: MenuSDK.CHudSurface)
	/** `bar` of a hero at `health` of `maxHealth`, a share `mana` of its mana: everything under the icon. */
	public Draw(bar: IHeroHealthBar, health: number, maxHealth: number, mana: number): void
	/** The level `level` in its box, and the icon backing with the hero's icon `icon` over it. */
	public Dress(bar: IHeroHealthBar, level: string, icon: string): void
}
