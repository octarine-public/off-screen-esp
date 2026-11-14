// AUTO-GENERATED - do not edit.
/**
 * The cross-cutting side of prediction: tuning, debugging and the threats every caster puts out. Everything about one unit or one
 * ability lives on that unit or ability.
 */
interface CPredictionSDK {
	readonly Tuning: PredictionTuning
	readonly Debug: PredictionDebug
	/** Every effect on its way, from any caster, to read; `unit.Threats` picks the ones reaching a unit. */
	readonly Threats: ThreatStore
	/** The unit states each modifier - and the abilities that put them on - were seen to bring this session. */
	readonly States: CStateCarriers
}
declare const PredictionSDK: CPredictionSDK
