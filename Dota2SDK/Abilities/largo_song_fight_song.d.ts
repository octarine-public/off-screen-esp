// AUTO-GENERATED - do not edit.
/**
 * Fight Song: strummed on the beat of Amphibian Rhapsody (`largo_amphibian_rhapsody.OnBeatAt`), a
 * burst of magical damage round Largo.
 */
declare class largo_song_fight_song extends Ability implements INuke {
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	/**
	 * The song's own spell amplification (`spell_amp_bonus`) is Largo's already as its burst
	 * strikes, once: not again while the last song's lasts.
	 */
	public SpellAmplifyOn(target?: Unit): number
}
