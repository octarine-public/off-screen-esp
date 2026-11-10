// AUTO-GENERATED - do not edit.
/** Amphibian Rhapsody on Largo: its beat as the server keeps it (`BeatAt`). */
declare class modifier_largo_amphibian_rhapsody_self extends Modifier {
	/**
	 * The game time of a beat of the rhapsody, as the server shows it (its fade time): the next,
	 * moving on to the one after a quarter of a beat past it. The beats go one every
	 * `rhythm_interval` from it - not from the moment the rhapsody came on: 5 November 2026, the
	 * lab, the rhapsody on at 1342.07, beats at x.467 - the songs ready from x.3 to x.9; counted
	 * from its coming on, Auto Song strummed into the songs' cooldown and played nothing.
	 */
	public get BeatAt(): number
	public get IsPurgable(): boolean
}
