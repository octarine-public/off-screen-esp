export interface CollisionItem {
	readonly key: number
	alpha: number
	directionX: number
	directionY: number
	x: number
	y: number
	collisionOffset: number
	collisionLeft: number
	collisionTop: number
	collisionRight: number
	collisionBottom: number
}

interface CollisionPath {
	Place(directionX: number, directionY: number, out: [number, number]): void
}

const SEARCH_STEPS = 90
const SEARCH_STEP = Math.PI / SEARCH_STEPS
const RETURN_MS = 120
const GAP = 4

/**
 * The box an indicator keeps clear around its centre: the ring, the arrow where it stands this
 * frame, and the distance label centred at (`labelX`, `labelY`) — a zero `labelWidth` leaves the
 * label out, for one drawn without it.
 */
export function SetCollisionBounds(
	entry: CollisionItem,
	size: number,
	arrowSize: number,
	labelX: number,
	labelY: number,
	labelWidth: number,
	labelHeight: number
): void {
	const half = size / 2
	const arrowOffset = half + arrowSize * 0.42 + 4
	const arrowRadius = arrowSize / Math.SQRT2
	const arrowX = entry.directionX * arrowOffset
	const arrowY = entry.directionY * arrowOffset
	const labeled = labelWidth > 0
	const labelHalfWidth = labelWidth / 2
	const labelHalfHeight = labelHeight / 2
	entry.collisionLeft =
		Math.max(half, arrowRadius - arrowX, labeled ? labelHalfWidth - labelX : 0) + GAP
	entry.collisionRight =
		Math.max(half, arrowRadius + arrowX, labeled ? labelHalfWidth + labelX : 0) + GAP
	entry.collisionTop =
		Math.max(half, arrowRadius - arrowY, labeled ? labelHalfHeight - labelY : 0) + GAP
	entry.collisionBottom =
		Math.max(half, arrowRadius + arrowY, labeled ? labelHalfHeight + labelY : 0) + GAP
}

function compareKey(left: CollisionItem, right: CollisionItem): number {
	return left.key - right.key
}

export class CIndicatorCollision {
	private readonly ordered: CollisionItem[] = []
	private readonly point: [number, number] = [0, 0]
	private bestOffset = 0
	private bestScore = 0
	private width = 0
	private height = 0

	public Update(
		entries: readonly CollisionItem[],
		path: CollisionPath,
		elapsed: number,
		width: number,
		height: number
	): void {
		this.width = width
		this.height = height
		const ordered = this.ordered
		ordered.length = 0
		for (const entry of entries) {
			if (entry.alpha > 0) {
				ordered.push(entry)
			} else {
				entry.collisionOffset = 0
			}
		}
		ordered.sort(compareKey)
		const decay = Math.exp(-Math.max(0, elapsed) / RETURN_MS)
		for (let index = 0; index < ordered.length; index++) {
			const entry = ordered[index]
			const angle = Math.atan2(entry.directionY, entry.directionX)
			const start = entry.collisionOffset * decay
			path.Place(Math.cos(angle + start), Math.sin(angle + start), this.point)
			this.bestOffset = start
			this.bestScore = this.score(entry, index)
			let offset = start
			if (this.bestScore > 0) {
				const sign = entry.collisionOffset < 0 ? -1 : 1
				const preferred = this.search(entry, index, path, angle, start, sign)
				const alternate =
					entry.collisionOffset === 0 || !Number.isFinite(preferred)
						? this.search(entry, index, path, angle, start, -sign)
						: Infinity
				offset =
					Math.abs(preferred - start) <= Math.abs(alternate - start)
						? preferred
						: alternate
				if (!Number.isFinite(offset)) {
					offset = this.bestOffset
				}
			}
			entry.collisionOffset = offset
			path.Place(Math.cos(angle + offset), Math.sin(angle + offset), this.point)
			entry.x = this.point[0]
			entry.y = this.point[1]
		}
		ordered.length = 0
	}

	private score(entry: CollisionItem, count: number): number {
		const x = this.point[0]
		const y = this.point[1]
		let score =
			Math.max(0, entry.collisionLeft - x) +
			Math.max(0, entry.collisionTop - y) +
			Math.max(0, x + entry.collisionRight - this.width) +
			Math.max(0, y + entry.collisionBottom - this.height)
		for (let index = 0; index < count; index++) {
			const other = this.ordered[index]
			const overlapX = Math.min(
				x + entry.collisionRight - (other.x - other.collisionLeft),
				other.x + other.collisionRight - (x - entry.collisionLeft)
			)
			const overlapY = Math.min(
				y + entry.collisionBottom - (other.y - other.collisionTop),
				other.y + other.collisionBottom - (y - entry.collisionTop)
			)
			if (overlapX > 0 && overlapY > 0) {
				score += Math.min(overlapX, overlapY)
			}
		}
		return score
	}

	private search(
		entry: CollisionItem,
		count: number,
		path: CollisionPath,
		angle: number,
		start: number,
		sign: number
	): number {
		const end = sign * Math.PI
		const steps = Math.ceil(Math.abs(end - start) / SEARCH_STEP)
		for (let step = 1; step <= steps; step++) {
			const offset =
				sign > 0
					? Math.min(end, start + step * SEARCH_STEP)
					: Math.max(end, start - step * SEARCH_STEP)
			path.Place(Math.cos(angle + offset), Math.sin(angle + offset), this.point)
			const score = this.score(entry, count)
			if (score < this.bestScore) {
				this.bestScore = score
				this.bestOffset = offset
			}
			if (score > 0) {
				continue
			}
			let blocked = start + sign * (step - 1) * SEARCH_STEP
			let free = offset
			for (let iteration = 0; iteration < 8; iteration++) {
				const middle = (blocked + free) / 2
				path.Place(Math.cos(angle + middle), Math.sin(angle + middle), this.point)
				if (this.score(entry, count) > 0) {
					blocked = middle
				} else {
					free = middle
				}
			}
			return free
		}
		return Infinity
	}
}
