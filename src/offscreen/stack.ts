export interface StackItem {
	readonly key: number
	alpha: number
	directionX: number
	directionY: number
	distanceSqr: number
	/** The opacity the indicator heads for this frame; one folded into another's is let fade. */
	goal: number
	/**
	 * How many targets the indicator stands for: one on its own, none once folded into another's.
	 * One on its way out keeps the count it stood at, so its card fades out saying what it said.
	 */
	stack: number
	/** The key of the indicator it was folded into last frame, -1 if none. */
	stackedInto: number
	/** Whether the target itself stands on the screen this frame, clear of the HUD. */
	inView: boolean
}

/** How much wider than the joining angle a folded target strays before it leaves the stack. */
const LEAVE_MARGIN = 1.25

/**
 * Lets the targets lying together at one spot go out of view as one: once the screen shows one of
 * them, every wanted target of its group that `together` says lies with it is taken as seen too.
 * The edge of the screen passes over a pile a rune at a time, and without this the card it shares
 * counts them down one by one on the way out. A negative group has no piles.
 */
export function SeePiles<T extends StackItem>(
	entries: readonly T[],
	group: (entry: T) => number,
	together: (left: T, right: T) => boolean
): void {
	for (const seen of entries) {
		const kind = seen.inView ? group(seen) : -1
		if (kind < 0) {
			continue
		}
		for (const entry of entries) {
			if (entry.goal > 0 && group(entry) === kind && together(seen, entry)) {
				entry.goal = 0
			}
		}
	}
}

/** The indicator already on screen leads its stack, then the nearest, so a stack never swaps its card. */
function compareLead(left: StackItem, right: StackItem): number {
	return (
		right.alpha - left.alpha ||
		left.distanceSqr - right.distanceSqr ||
		left.key - right.key
	)
}

export class CIndicatorStacks<T extends StackItem> {
	private readonly ordered: T[] = []
	private readonly leaders: T[] = []

	/**
	 * Folds the wanted targets of one group that point within `angle` radians of a stack's lead
	 * into its indicator, which counts them; a negative group never stacks. A folded target leaves
	 * only once it strays a quarter wider, so a stack on its threshold does not flicker.
	 */
	public Update(
		entries: readonly T[],
		group: (entry: T) => number,
		angle: number
	): void {
		const join = Math.cos(angle)
		const leave = Math.cos(Math.min(Math.PI, angle * LEAVE_MARGIN))
		const ordered = this.ordered
		const leaders = this.leaders
		for (const entry of entries) {
			if (entry.goal > 0 && group(entry) >= 0) {
				entry.stack = 1
				ordered.push(entry)
			} else {
				entry.stackedInto = -1
			}
		}
		ordered.sort(compareLead)
		for (const entry of ordered) {
			const kind = group(entry)
			let lead: Nullable<T>
			let closest = -2
			for (const leader of leaders) {
				if (group(leader) !== kind) {
					continue
				}
				const cos =
					entry.directionX * leader.directionX +
					entry.directionY * leader.directionY
				if (
					cos >= (entry.stackedInto === leader.key ? leave : join) &&
					cos > closest
				) {
					lead = leader
					closest = cos
				}
			}
			if (lead === undefined) {
				entry.stackedInto = -1
				leaders.push(entry)
				continue
			}
			lead.stack++
			entry.stack = 0
			entry.goal = 0
			entry.stackedInto = lead.key
		}
		ordered.length = 0
		leaders.length = 0
	}

	/** Lets every indicator stand for its own target again. */
	public Clear(entries: readonly T[]): void {
		for (const entry of entries) {
			entry.stack = 1
			entry.stackedInto = -1
		}
	}
}
