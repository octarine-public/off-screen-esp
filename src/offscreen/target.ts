import { CollisionItem } from "./collision"

/** What an indicator points at, which decides how it is dressed and when it is wanted. */
export const enum ETargetKind {
	Hero,
	Rune,
	Wisdom,
	Lotus
}

/** What every indicator carries, whatever it points at. */
export interface TrackedTarget extends CollisionItem {
	readonly kind: ETargetKind
	readonly entity: Entity
	distanceSqr: number
	depthDistance: number
	selected: boolean
	warning: boolean
	roundedDistance: number
	distanceText: string
	/** The text {@link labelWidth} was measured for, and the dress it was measured under. */
	labelText: string
	labelVersion: number
	labelWidth: number
	/** Where the distance stands this frame, as an offset from the indicator's centre. */
	labelX: number
	labelY: number
	iconMode: number
	icon: string
	stamp: number
	angle: number
}

/** A target that has not been drawn yet: faded out, pointing nowhere, measured for nothing. */
export function NewTarget<K extends ETargetKind, E extends Entity>(
	kind: K,
	entity: E
): TrackedTarget & { readonly kind: K; readonly entity: E } {
	return {
		key: entity.Handle,
		kind,
		entity,
		distanceSqr: 0,
		depthDistance: 0,
		selected: false,
		warning: false,
		x: 0,
		y: 0,
		collisionOffset: 0,
		collisionLeft: 0,
		collisionTop: 0,
		collisionRight: 0,
		collisionBottom: 0,
		roundedDistance: -1,
		distanceText: "",
		labelText: "",
		labelVersion: -1,
		labelWidth: 0,
		labelX: 0,
		labelY: 0,
		iconMode: -1,
		icon: "",
		alpha: 0,
		stamp: 0,
		directionX: 0,
		directionY: 0,
		angle: 0
	}
}

export function ResetFade(entry: TrackedTarget): void {
	entry.alpha = 0
	entry.collisionOffset = 0
	entry.stamp = 0
	entry.directionX = 0
	entry.directionY = 0
	entry.angle = 0
}

export function DistanceText(entry: TrackedTarget, distanceSqr: number): string {
	const rounded = Math.round(Math.sqrt(distanceSqr))
	if (entry.roundedDistance !== rounded) {
		entry.roundedDistance = rounded
		entry.distanceText = String(rounded)
	}
	return entry.distanceText
}
