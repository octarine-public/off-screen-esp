import { EVisibilityFilter } from "./menu"
import { CIndicatorPriority } from "./priority"
import { ETargetKind, NewTarget, ResetFade, TrackedTarget } from "./target"

export interface TrackedHero extends TrackedTarget {
	readonly kind: ETargetKind.Hero
	readonly entity: Unit
}

const heroes: TrackedHero[] = []
const activeHeroes: TrackedHero[] = []
const heroByIndex = new Map<number, TrackedHero>()
const heroPriority = new CIndicatorPriority<TrackedHero>()

let heroRefreshAt = 0
let cachedDistance = -1
let cachedLimit = -1
let cachedFilter = -1

function trackable(entity: Entity): entity is Unit {
	return entity instanceof Hero || entity instanceof SpiritBear
}

/** Whether a unit is one the indicators are for: an enemy hero or bear that is alive and real. */
export function IsTarget(unit: Unit): boolean {
	return unit.IsValid && unit.IsAlive && unit.IsEnemy() && !unit.IsIllusion
}

export function PassesVisibility(visible: boolean, filter: EVisibilityFilter): boolean {
	return (
		filter === EVisibilityFilter.All ||
		(filter === EVisibilityFilter.VisibleOnly) === visible
	)
}

export function TrackEntity(entity: Entity): void {
	if (!trackable(entity) || heroByIndex.has(entity.Index)) {
		return
	}
	const hero = NewTarget(ETargetKind.Hero, entity)
	heroes.push(hero)
	heroByIndex.set(entity.Index, hero)
	heroRefreshAt = 0
}

export function UntrackEntity(entity: Entity): void {
	const hero = heroByIndex.get(entity.Index)
	if (hero === undefined) {
		return
	}
	heroByIndex.delete(entity.Index)
	const index = heroes.indexOf(hero)
	if (index >= 0) {
		heroes.splice(index, 1)
	}
	heroRefreshAt = 0
}

export function SeedEntities(): void {
	for (const entity of EntityManager.AllEntities) {
		TrackEntity(entity)
	}
}

export function ClearActive(): void {
	activeHeroes.length = 0
	heroPriority.Clear()
	heroRefreshAt = 0
	for (const entry of heroes) {
		entry.selected = false
		ResetFade(entry)
	}
}

export function ActiveHeroes(
	origin: Vector3,
	maxDistance: number,
	limit: number,
	filter: EVisibilityFilter
): readonly TrackedHero[] {
	const now = hrtime()
	if (
		now < heroRefreshAt &&
		cachedDistance === maxDistance &&
		cachedLimit === limit &&
		cachedFilter === filter
	) {
		return activeHeroes
	}
	heroRefreshAt = now + 80
	cachedDistance = maxDistance
	cachedLimit = limit
	cachedFilter = filter
	activeHeroes.length = 0
	const maxDistanceSqr = maxDistance * maxDistance
	for (const entry of heroes) {
		entry.selected = false
		const unit = entry.entity
		if (!IsTarget(unit) || !PassesVisibility(unit.IsVisible, filter)) {
			continue
		}
		entry.distanceSqr = unit.NetworkedPosition.DistanceSqr2D(origin)
		if (entry.distanceSqr <= maxDistanceSqr) {
			activeHeroes.push(entry)
		}
	}
	const ordered = heroPriority.Update(activeHeroes)
	activeHeroes.length = 0
	for (let index = 0; index < Math.min(ordered.length, limit); index++) {
		const entry = ordered[index]
		entry.selected = true
		activeHeroes.push(entry)
	}
	return activeHeroes
}
