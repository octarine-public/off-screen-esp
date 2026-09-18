interface DistanceEntry {
	readonly key: number
	distanceSqr: number
}

const SWITCH_MARGIN = 100
const SWITCH_RATIO = 0.1

export class CIndicatorPriority<T extends DistanceEntry> {
	private readonly ordered: T[] = []

	public Clear(): void {
		this.ordered.length = 0
	}

	public Update(entries: readonly T[]): readonly T[] {
		const ordered = this.ordered
		for (let index = ordered.length - 1; index >= 0; index--) {
			if (!entries.includes(ordered[index])) {
				ordered.splice(index, 1)
			}
		}
		for (const entry of entries) {
			if (ordered.includes(entry)) {
				continue
			}
			let index = ordered.length
			while (index > 0) {
				const previous = ordered[index - 1]
				if (
					previous.distanceSqr < entry.distanceSqr ||
					(previous.distanceSqr === entry.distanceSqr &&
						previous.key < entry.key)
				) {
					break
				}
				index--
			}
			ordered.splice(index, 0, entry)
		}
		for (let index = 1; index < ordered.length; index++) {
			const entry = ordered[index]
			const distance = Math.sqrt(entry.distanceSqr)
			let position = index
			while (position > 0) {
				const previous = ordered[position - 1]
				const previousDistance = Math.sqrt(previous.distanceSqr)
				const margin = Math.max(SWITCH_MARGIN, previousDistance * SWITCH_RATIO)
				if (distance + margin >= previousDistance) {
					break
				}
				ordered[position] = previous
				position--
			}
			ordered[position] = entry
		}
		return ordered
	}
}
