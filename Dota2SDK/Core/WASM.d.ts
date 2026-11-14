// AUTO-GENERATED - do not edit.
/** Projection the core computes for a camera the caller describes, not the game's own. */
declare const WASM: {
	/**
	 * The world point that shows at `screen` on the near plane of a camera at `cameraPosition`
	 * turned to `cameraAngles`. `screen` runs from -1 to 1 across the window with y up, not in
	 * pixels. The core builds the camera itself, with a 66 degree vertical field of view for a
	 * window of `windowSize`; `cameraDistance` does not change the result.
	 */
	ScreenToWorld: ((screen: Vector2, cameraPosition: Vector3, cameraDistance: number, cameraAngles: QAngle, windowSize: Vector2) => Vector3)
}

/** Where the map's height map (its `.vhcg`) lies: the X and Y it covers, read as the map loads. */
interface CHeightMap {
	/** The corner with the lowest X and Y; a copy. */
	get MinMapCoords(): Vector2
	/** How far the height map reaches along X and along Y, in world units; a copy. */
	get MapSize(): Vector2
	/** The corner with the highest X and Y. */
	get MaxMapCoords(): Vector2
	/** Whether the X and Y of `pos` lie on the height map, its edges included. */
	Contains(pos: Vector2 | Vector3): boolean
}
/** The current map's height map; undefined while no map has loaded or its `.vhcg` did not parse. */
declare let HeightMap: Nullable<CHeightMap>
