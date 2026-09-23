import { ETargetKind, NewTarget, ResetFade, TrackedTarget } from "./target"

export type ObjectiveKind = ETargetKind.Rune | ETargetKind.Wisdom | ETargetKind.Lotus

export interface TrackedObjective extends TrackedTarget {
	readonly kind: ObjectiveKind
	/** The modifier a shrine's or a pool's state is read from, found once and kept while valid. */
	modifier: Nullable<Modifier>
	/** How many lotuses the pool holds, as of the last check. */
	count: number
}

/** What the menu asks of the objectives this frame. */
export interface ObjectiveFilter {
	runes: boolean
	/** Whether the rune whose selector value this is has been picked. */
	rune: (value: string) => boolean
	wisdom: boolean
	lotus: boolean
	minLotuses: number
	maxDistance: number
}

/** The modifier whose stacks count a pool's lotuses, and the one whose stacks say a shrine is ready. */
const LOTUS_MODIFIER = "modifier_passive_lotus_pool"
const WISDOM_MODIFIER = "modifier_xp_fountain_aura"
/** The lotus the HUD's own timer wears. */
const LOTUS_ICON = `${PathData.ImagePath}/hud/timer/lotus_png.vtex_c`

interface RuneStyle {
	/** The name the rune's art is filed under, and the value it stands for in the menu. */
	readonly name: string
	readonly value: string
	readonly color: string
}

function rune(name: string, color: string): RuneStyle {
	return { name, value: `rune_${name}`, color }
}

/** Each rune the way it is drawn: its art, and the colour its ring and arrow wear. */
const RUNES = new Map<DOTA_RUNES, RuneStyle>([
	[DOTA_RUNES.DOTA_RUNE_DOUBLEDAMAGE, rune("doubledamage", "#4aa8ff")],
	[DOTA_RUNES.DOTA_RUNE_HASTE, rune("haste", "#ff5147")],
	[DOTA_RUNES.DOTA_RUNE_ILLUSION, rune("illusion", "#ffd54a")],
	[DOTA_RUNES.DOTA_RUNE_INVISIBILITY, rune("invis", "#b98cff")],
	[DOTA_RUNES.DOTA_RUNE_REGENERATION, rune("regen", "#5bdc6c")],
	[DOTA_RUNES.DOTA_RUNE_ARCANE, rune("arcane", "#ff6ad5")],
	[DOTA_RUNES.DOTA_RUNE_SHIELD, rune("shield", "#e8e2d0")],
	[DOTA_RUNES.DOTA_RUNE_WATER, rune("water", "#43d9e6")],
	[DOTA_RUNES.DOTA_RUNE_BOUNTY, rune("bounty", "#f2b544")]
])
const WISDOM_ICON = ImageData.GetRuneTexture("xp")

/** The runes the menu offers, in the order its selector lays them out. */
export const RuneValues = Array.from(RUNES.values(), style => style.value)

const objectives: TrackedObjective[] = []
const active: TrackedObjective[] = []
const byIndex = new Map<number, TrackedObjective>()

function kindOf(entity: Entity): Nullable<ObjectiveKind> {
	if (entity instanceof Rune) {
		return ETargetKind.Rune
	}
	if (entity instanceof XPFountain) {
		return ETargetKind.Wisdom
	}
	return entity instanceof LotusPool ? ETargetKind.Lotus : undefined
}

function modifierName(kind: ObjectiveKind): string {
	return kind === ETargetKind.Lotus ? LOTUS_MODIFIER : WISDOM_MODIFIER
}

/** Whether a rune is a wisdom rune, which the menu lists with the shrines rather than the runes. */
function isWisdomRune(entry: TrackedObjective): boolean {
	return (
		entry.kind === ETargetKind.Rune &&
		(entry.entity as Rune).Type === DOTA_RUNES.DOTA_RUNE_XP
	)
}

export function TrackObjective(entity: Entity): void {
	const kind = kindOf(entity)
	if (kind === undefined || byIndex.has(entity.Index)) {
		return
	}
	const entry: TrackedObjective = {
		...NewTarget(kind, entity),
		modifier: undefined,
		count: 0
	}
	objectives.push(entry)
	byIndex.set(entity.Index, entry)
}

export function UntrackObjective(entity: Entity): void {
	const entry = byIndex.get(entity.Index)
	if (entry === undefined || entry.entity !== entity) {
		return
	}
	byIndex.delete(entity.Index)
	const index = objectives.indexOf(entry)
	if (index >= 0) {
		objectives.splice(index, 1)
	}
}

export function SeedObjectives(): void {
	for (const entity of EntityManager.AllEntities) {
		TrackObjective(entity)
	}
}

/**
 * Picks up the modifier a pool's lotuses or a shrine's rune are counted on when it is cast from
 * the building rather than laid on it, where a look through the building's own buffs misses it.
 */
export function TrackObjectiveModifier(modifier: Modifier): void {
	const name = modifier.Name
	if (name !== LOTUS_MODIFIER && name !== WISDOM_MODIFIER) {
		return
	}
	for (const owner of [modifier.Parent, modifier.Caster]) {
		const entry = owner === undefined ? undefined : byIndex.get(owner.Index)
		if (
			entry !== undefined &&
			entry.entity === owner &&
			entry.kind !== ETargetKind.Rune &&
			modifierName(entry.kind) === name
		) {
			entry.modifier = modifier
			return
		}
	}
}

export function ClearObjectives(): void {
	active.length = 0
	for (const entry of objectives) {
		entry.selected = false
		ResetFade(entry)
	}
}

function stacks(entry: TrackedObjective): number {
	let modifier = entry.modifier
	if (modifier === undefined || !modifier.IsValid) {
		modifier = (entry.entity as Unit).GetBuffByName(modifierName(entry.kind))
		entry.modifier = modifier
	}
	return modifier?.StackCount ?? 0
}

/**
 * Whether the objective is there to be taken and the menu asks for it: a shrine is ready while
 * its aura stands at one stack.
 */
export function ObjectiveWanted(
	entry: TrackedObjective,
	filter: ObjectiveFilter
): boolean {
	if (!entry.entity.IsValid) {
		return false
	}
	switch (entry.kind) {
		case ETargetKind.Rune: {
			if (isWisdomRune(entry)) {
				return filter.wisdom
			}
			const style = RUNES.get((entry.entity as Rune).Type)
			return style !== undefined && filter.runes && filter.rune(style.value)
		}
		case ETargetKind.Wisdom:
			return filter.wisdom && stacks(entry) === 1
		case ETargetKind.Lotus:
			if (!filter.lotus) {
				return false
			}
			entry.count = stacks(entry)
			return entry.count > 0 && entry.count >= filter.minLotuses
	}
}

/**
 * The objectives to point at this frame: every one that is there, asked for and in range. The
 * rest are let go of, so the indicators already on screen fade out.
 */
export function ActiveObjectives(
	origin: Vector3,
	filter: ObjectiveFilter
): readonly TrackedObjective[] {
	active.length = 0
	const maxDistanceSqr = filter.maxDistance * filter.maxDistance
	for (const entry of objectives) {
		entry.selected = false
		if (!ObjectiveWanted(entry, filter)) {
			continue
		}
		entry.distanceSqr = entry.entity.Position.DistanceSqr2D(origin)
		if (entry.distanceSqr <= maxDistanceSqr) {
			entry.selected = true
			active.push(entry)
		}
	}
	return active
}

/** The art an objective is drawn with; a rune's is looked up again only when its type turns. */
export function ObjectiveIcon(entry: TrackedObjective): string {
	if (entry.kind !== ETargetKind.Rune) {
		return entry.kind === ETargetKind.Lotus ? LOTUS_ICON : WISDOM_ICON
	}
	const type = (entry.entity as Rune).Type
	if (entry.iconMode !== type) {
		entry.iconMode = type
		const style = RUNES.get(type)
		entry.icon = isWisdomRune(entry)
			? WISDOM_ICON
			: style === undefined
				? ""
				: ImageData.GetRuneTexture(style.name)
	}
	return entry.icon
}

/** The colour an objective's ring and arrow wear: the rune's own, or the one the menu gave. */
export function ObjectiveColor(
	entry: TrackedObjective,
	wisdom: string,
	lotus: string
): string {
	switch (entry.kind) {
		case ETargetKind.Rune:
			return isWisdomRune(entry)
				? wisdom
				: (RUNES.get((entry.entity as Rune).Type)?.color ?? wisdom)
		case ETargetKind.Wisdom:
			return wisdom
		case ETargetKind.Lotus:
			return lotus
	}
}
