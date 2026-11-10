// AUTO-GENERATED - do not edit.
declare function ScreenToWorld(screen: Vector2, cameraPosition: Vector3, cameraDistance: number, cameraAngles: QAngle, windowSize: Vector2): Vector3
declare const WASM: {
	ScreenToWorld: typeof ScreenToWorld
}

/**
 * What a cursor has under it through the camera at `cameraPosition`, in one native call: `point`
 * gets the world point under `pointScreen` (as `ScreenToWorldFar`), `hits[i]` whether the ray
 * through `rayScreen` passes the bounding box of `ents[i]` (as `BatchCheckRayBox`).
 */
declare function CursorUnder(pointScreen: Vector2, rayScreen: Vector2, windowSize: Vector2, cameraPosition: Vector3, cameraDistance: number, cameraAngles: QAngle, fov: number, ents: readonly {
	readonly BoundingBox: AABB
}[], point: Vector3, hits: boolean[]): void
