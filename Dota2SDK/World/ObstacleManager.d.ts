// AUTO-GENERATED - do not edit.
type MapObstacle = Map<number, [EObstacleType, Vector3, Vector3, number]>
interface ObstacleManager {
	readonly Obstacles: MapObstacle
	AddObstacle(position: Vector3, radius: number, end?: Vector3, obstacleType?: EObstacleType): number
	GetBestPosition(position: Vector3, rotationRad: number, speed: number, turnRate: number, hullRadius: number, flying: boolean): Vector3
	DeleteObstacle(obstacleId: number): void
	ClearObstacles(): void
}
