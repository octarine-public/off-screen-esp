// AUTO-GENERATED - do not edit.
/**
 * Counterspell: a shell round Anti-Mage for `MaxDuration` that sends back every targeted spell
 * landing on him meanwhile, as a Lotus Orb does (`Unit.ReflectsAt`), and takes it, as a Lotus Orb
 * does not (`BlocksTargetedSpells`, `Unit.AbsorbsAt`); with the Shard each one sent back brings an
 * illusion of his by its caster.
 */
declare class antimage_counterspell extends Ability {
	public get BlocksTargetedSpells(): boolean
	/**
	 * Whether its shell, standing as `threat` lands, sends it back: an enemy's spell bound to a unit
	 * (`Threat.Bound`) - homing on its owner, or still in its cast point, whether at him the
	 * threat's `ImpactTime` on him tells - that a Lotus Orb sends back too (`TriggersSpellBlock`).
	 * Chaos Bolt cast at him from
	 * 500 flew 0.33 s; the shell up as it came, the bolt stunned Chaos Knight and, with the Shard,
	 * an illusion came out 58 from him (19 October 2026, in the demo).
	 * @example
	 * const back = antimage.Threats.some(threat => counterspell.SendsBack(threat))
	 */
	public SendsBack(threat: Threat): boolean
	protected DurationFrom(values: ISpecialValues, level: number): number
}
