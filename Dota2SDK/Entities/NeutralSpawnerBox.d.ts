// AUTO-GENERATED - do not edit.
declare class NeutralSpawnerBox {
	public readonly Spawner: NeutralSpawner
	public static readonly Sleeper: GameSleeper
	public static get TimeLeft(): number
	public static get RemainingTime(): number
	public readonly Creeps: Creep[]
	public readonly Attackers: Unit[]
	public readonly Type: NeutralSpawnerType
	public Hits: number
	public IsEmpty: boolean
	public IsStack: boolean
	public LastAttackTime: number
	public TotalCreepAvgGold: number
	public get IsValidSpawner(): boolean
	public get Team(): Team
	public get IsAlly(): boolean
	public get Position(): Vector3
	public get EndPosition(): Vector3
	public get StackEndTime(): number
	public get StackStartTime(): number
	public get ValidCreeps(): Creep[]
	/**
	 * Whether `position` is at the camp: inside its spawn box, or within the camp's reach of its
	 * spawner. The height is ignored.
	 * @example
	 * const camp = NeutralSpawners.find(x => x.Covers(hero.Position))
	 */
	public Covers(position: Vector3): boolean
	public CanBeStack(unit: Unit): boolean
	public Stack(unit: Unit, creeps: Creep[], endPosition: Vector3): boolean
	public PostDataUpdate(): void
	public EntityPositionChanged(entity: Unit): void
	public UnitPropertyChanged(_entity: Creep): void
	public EntityCreated(entity: Creep): void
	public EntityDestroyed(entity: NeutralSpawner | Unit): void
	public LifeStateChanged(unit: Creep): void
	public DrawDebug(pSDK: ParticlesSDK): void
	public AttackStarted(unit: Unit): void
}
