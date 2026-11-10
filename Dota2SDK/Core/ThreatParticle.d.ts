// AUTO-GENERATED - do not edit.
/** Which control points of a particle carry the cast it shows: the caster, where the effect starts and ends, the unit it is bound to. */
interface IParticleRoles {
	/** Control point whose entity is the caster; its fallback position starts the effect when `Start` is absent. */
	readonly Source?: number
	/** Control point whose position starts the effect, for one that does not start at the caster. */
	readonly Start?: number
	/** Control point whose position ends the effect: the far end of a line, the centre of a landing. */
	readonly Target?: number
	/** Control point whose entity the effect is bound to; a flying effect that gets a unit there has caught it. */
	readonly TargetEntity?: number
	/**
	 * The ability's special value the effect lands that many seconds after the particle shows, for
	 * a particle shown at a set moment of the cast and not as it goes off - Meteor Hammer's fall,
	 * `land_time` after the channel; without it the landing waits what is left of the ability's
	 * `ActivationDelay` since it went off.
	 */
	readonly LandsAfter?: string
	/**
	 * Whether the particle shows as the cast point begins, not as the effect goes off - Reverse
	 * Polarity's, Finger of Death's, sent even while its caster is unseen: the effect goes off the
	 * ability's `CastPoint` after it, at the spot of the unit in `Source`; a cast at a unit, along a
	 * line or a cone, or a circle at a point (Terrorize) goes at any unit in reach of that spot, a
	 * guess (`Threat.Guessed`). A cast whose caster is seen in its phase is its cast's own sign.
	 */
	readonly CastStart?: boolean
	/**
	 * For a particle shown as the cast point begins: whether it lives through the cast point -
	 * Reverse Polarity's, Thundergod's Wrath's - so the game cutting it before the cast goes off
	 * is the cast cancelled; one the game lets go at once - Finger of Death's, Lightning Bolt's -
	 * tells nothing of a cancel, and its threat stands till the cast would land.
	 */
	readonly CastLives?: boolean
	/**
	 * Whether the particle shows as the effect lands - a field's, Shrapnel's after its delay: it
	 * covers its spot from then, no flight and no delay before it.
	 */
	readonly Lands?: boolean
	/**
	 * Whether the particle shows a field round its caster, on him, while it lasts - going where he
	 * goes: Scorched Earth's on Doom (`AuraSign`).
	 */
	readonly Aura?: boolean
}
/**
 * A particle an ability shows when it is cast and the roles of its control points. A class
 * declares it with `@ThreatParticle`, so a cast seen only through the particle, out of the fog,
 * still becomes a threat.
 * @example
 * @Source2SDK.WrapperClass("pudge_meat_hook")
 * @ThreatParticle("particles/units/heroes/hero_pudge/pudge_meathook.vpcf", {
 * 	Source: 0,
 * 	Target: 1,
 * 	TargetEntity: 1
 * })
 * export class pudge_meat_hook extends Ability {}
 */
interface IThreatParticle extends IParticleRoles {
	/** The particle's path without the econ suffix. */
	readonly Path: string
}
