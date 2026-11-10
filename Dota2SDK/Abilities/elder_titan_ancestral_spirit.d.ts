// AUTO-GENERATED - do not edit.
/**
 * Ancestral Spirit: the spirit stands at the point it was cast at the moment the cast ends - a
 * circle there, with no flight to wait for. Its `speed` is not the cast's: read as the cast's
 * flight, the spirit came 0.5 s (a line) to 0.85 s (a circle) after it was there (20 October 2026,
 * demo: from 762 and from 1195 the spirit unit was at the point the first tick of the cooldown).
 */
declare class elder_titan_ancestral_spirit extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	/** The spirit strikes the units it passes through within `radius`, once each. */
	public GetBaseDamageForLevel(level: number): number
}
