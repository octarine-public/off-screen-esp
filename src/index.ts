import "./translations"

import {
	DOTAGameState,
	DOTAGameUIState,
	Entity,
	EventsSDK,
	GameRules,
	GameState,
	Hero,
	Unit
} from "github.com/octarine-public/wrapper/index"

import { GUI } from "./gui"
import { MenuManager } from "./menu"

new (class COffScreenESP {
	private readonly gui!: GUI
	private readonly menu!: MenuManager
	private readonly entities: Unit[] = []

	constructor(canBeInitialized: boolean) {
		if (!canBeInitialized) {
			return
		}
		this.gui = new GUI()
		this.menu = new MenuManager()
		EventsSDK.on("Draw", this.Draw.bind(this))
		EventsSDK.on("EntityCreated", this.EntityCreated.bind(this))
		EventsSDK.on("EntityDestroyed", this.EntityDestroyed.bind(this))
		EventsSDK.on("UnitPropertyChanged", this.UnitPropertyChanged.bind(this))
	}
	private get shouldDraw() {
		return this.menu.State.value && this.isUIGame && !this.isPostGame
	}
	private get isUIGame() {
		return GameState.UIState === DOTAGameUIState.DOTA_GAME_UI_DOTA_INGAME
	}
	private get isPostGame() {
		return (
			GameRules === undefined ||
			GameRules.GameState === DOTAGameState.DOTA_GAMERULES_STATE_POST_GAME
		)
	}
	protected Draw() {
		if (!this.shouldDraw) {
			return
		}
		const position = this.gui.Draw(this.menu)
		for (let i = this.entities.length - 1; i > -1; i--) {
			const entity = this.entities[i]
			if (!entity.IsValid || entity.IsIllusion || !entity.IsEnemy()) {
				continue
			}
			if (this.menu.IsVisible.value && entity.IsVisible) {
				continue
			}
			if (entity.IsAlive) {
				this.gui.DrawEntity(entity, this.menu, position)
			}
		}
	}
	protected EntityCreated(entity: Entity) {
		if (!(entity instanceof Unit) || !entity.IsEnemy()) {
			return
		}
		if (entity instanceof Hero || entity.IsSpiritBear) {
			this.entities.push(entity)
		}
	}
	protected EntityDestroyed(entity: Entity) {
		if (!(entity instanceof Unit)) {
			return
		}
		if (entity.IsHero || entity.IsSpiritBear) {
			this.entities.remove(entity)
		}
	}
	protected UnitPropertyChanged(entity: Unit) {
		if (!entity.IsValid || entity.IsIllusion) {
			this.entities.remove(entity)
		}
	}
})(true)
