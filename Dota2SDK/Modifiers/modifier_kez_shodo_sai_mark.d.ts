// AUTO-GENERATED - do not edit.
declare class modifier_kez_shodo_sai_mark extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	/**
	 * The critical strike the mark brings, in percent: `base_crit_pct`. A parry's mark with
	 * Aghanim's Shard adds `parry_bonus_crit` to it; a mark does not tell how it came, so the bonus
	 * is left out - the forecast reads low then, never high.
	 */
	public MulCritDamageBonus(_target: Unit): number
	public IsDebuff(): this is IDebuff
	protected GetPreAttackTargetCriticalStrike(params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
	public get IsPurgable(): boolean
	public get IsPurgeException(): boolean
}
