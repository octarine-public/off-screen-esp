export function CanDraw(): boolean {
	const state = GameState
	if (!state.IsConnected || state.IsEscapeMenuOpen) {
		return false
	}
	if (state.UIState !== DOTAGameUIState.DOTA_GAME_UI_DOTA_INGAME) {
		return false
	}
	const rules = GameRules
	return (
		rules !== undefined &&
		rules.GameState !== DOTAGameState.DOTA_GAMERULES_STATE_POST_GAME
	)
}
