const radiant: string[] = []
const dire: string[] = []

function slotOf(unit: Unit): number {
	const own = PlayerCustomData.get(unit.PlayerID)?.TeamSlot
	if (own !== undefined && own >= 0) {
		return own
	}
	const owner = PlayerCustomData.get(unit.OwnerPlayerID)?.TeamSlot
	return owner !== undefined && owner >= 0 ? owner : -1
}

/** The unit's own player colour as CSS, or `fallback` for a unit no team slot stands behind. */
export function PlayerColorCss(unit: Unit, fallback: string): string {
	const slot = slotOf(unit)
	if (slot < 0) {
		return fallback
	}
	const isDire = unit.Team === Team.Dire
	const cache = isDire ? dire : radiant
	let css = cache[slot]
	if (css === undefined) {
		const palette = isDire ? Color.PlayerColorDire : Color.PlayerColorRadiant
		const color = palette[slot]
		if (color === undefined) {
			return fallback
		}
		css = MenuSDK.cssColor(color)
		cache[slot] = css
	}
	return css
}
