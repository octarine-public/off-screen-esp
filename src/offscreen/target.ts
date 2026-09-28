import { CollisionItem } from "./collision"
import { StackItem } from "./stack"

/** What an indicator points at, which decides how it is dressed and when it is wanted. */
export const enum ETargetKind {
	Hero,
	Rune,
	Wisdom,
	Lotus
}

/** What every indicator carries, whatever it points at. */
export interface TrackedTarget extends CollisionItem, StackItem {
	readonly kind: ETargetKind
	readonly entity: Entity
	/** How far the target stands from the ground under the middle of the screen, squared. */
	distanceSqr: number
	/** How far the target lies outside what the camera sees, the reading on the label; zero on the screen. */
	edgeDistance: number
	/** Whether the target stands before the camera, with a point on the screen's plane to aim at. */
	projected: boolean
	/** Where the target lands on the screen's plane this frame, off the screen as often as not. */
	screenX: number
	screenY: number
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
	/** The arrow's turn in degrees, clockwise from pointing right. */
	angle: number
	/** How far out of focus the indicator has gone on its way out: 0 sharp, 1 gone. */
	veil: number
	/**
	 * The opacity a way out is measured from: where the indicator stood as it began to go, grown
	 * by what blur it still carried then, so a hide that follows a return picks up where it was.
	 */
	veilFrom: number
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
		edgeDistance: 0,
		projected: false,
		screenX: 0,
		screenY: 0,
		depthDistance: 0,
		selected: false,
		goal: 0,
		stack: 1,
		stackedInto: -1,
		inView: false,
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
		pointerX: 0,
		pointerY: 0,
		angle: 0,
		veil: 0,
		veilFrom: 0
	}
}

export function ResetFade(entry: TrackedTarget): void {
	entry.alpha = 0
	entry.goal = 0
	entry.stack = 1
	entry.stackedInto = -1
	entry.inView = false
	entry.collisionOffset = 0
	entry.stamp = 0
	entry.projected = false
	entry.directionX = 0
	entry.directionY = 0
	entry.pointerX = 0
	entry.pointerY = 0
	entry.angle = 0
	entry.veil = 0
	entry.veilFrom = 0
}

export function DistanceText(entry: TrackedTarget, distance: number): string {
	const rounded = Math.round(distance)
	if (entry.roundedDistance !== rounded) {
		entry.roundedDistance = rounded
		entry.distanceText = String(rounded)
	}
	return entry.distanceText
}
