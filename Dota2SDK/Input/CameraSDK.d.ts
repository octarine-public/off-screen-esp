// AUTO-GENERATED - do not edit.
/**
 * The game's camera, asked of the engine anew on every read of a property. Use the game's
 * `CameraSDK` instance.
 */
declare class CCameraManager {
	/**
	 * The manager the SDK's own projection reads the camera through. A game may put its own
	 * manager here in place of the base one.
	 */
	public static Current: CCameraManager
	/** The camera's field of view in degrees, as the game reports it. */
	public get FoV(): number
	/**
	 * The camera distance the game reports. What it measures is the game's own; the SDK only
	 * hands it to the engine's projection along with the position and the angles.
	 */
	public get Distance(): number
	/**
	 * The camera's view angles in degrees: pitch in `x`, yaw in `y`, roll in `z`. A new object on
	 * every read.
	 */
	public get Angles(): QAngle
	/** Where the camera is in the world. A new vector on every read. */
	public get Position(): Vector3
}

interface CCameraSDK {
	/** @readonly */
	DefaultDistance: number
	readonly DefaultAngles: QAngle
	/** @description Camera polygon update only with humanizer */
	readonly Polygon: WorldPolygon
	get Angles(): QAngle
	set Angles(value: QAngle)
	get FoV(): number
	get Distance(): number
	set Distance(value: number)
	get Position(): Vector3
	/**
	 * Reads the camera's defaults from the game's console variables. They hold for a whole game,
	 * so this runs when one starts or ends and not every frame; a value changed from the console
	 * in a game with cheats on is taken by calling it again.
	 */
	UpdateDefaultValues(): void
}
declare const CameraSDK: CCameraSDK
