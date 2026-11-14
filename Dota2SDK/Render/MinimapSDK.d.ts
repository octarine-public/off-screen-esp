// AUTO-GENERATED - do not edit.
/**
 * An icon of the game's minimap (`scripts/mod_textures.txt`, `minimap_*`): the texture it is cut
 * from and, for one of a sheet, where on the sheet it stands, in the texture's own pixels.
 */
interface MinimapIcon {
	readonly path: string
	readonly sourcePosition?: Vector2 | undefined
	readonly sourceSize?: Vector2 | undefined
	get size(): Vector2
	Draw(pos: Vector2, size: Vector2, color: Color): void
}
interface MinimapOverview {
	readonly material: string
	readonly simpleMaterial: string
	/** The world position of the overview's top-left corner. */
	readonly pos: Vector2
	/** The world units the overview spans on each side. */
	readonly size: number
}
interface CMinimapSDK {
	readonly MinimapBounds: Rectangle
	CurrentMinimapOverview: Nullable<MinimapOverview>
	/**
	 * Draws icon at minimap
	 *
	 * @param icon_name can be found at https://github.com/SteamDatabase/GameTracking-Dota2/blob/master/game/dota/pak01_dir/scripts/modTextures.txt
	 * @param size you can get that value for heroes from ConVarsSDK.GetFloat("dota_minimap_hero_size")
	 * @param endTime Must be for ex. Game.RawGameTime + ConVarsSDK.GetFloat("dota_minimap_ping_duration").
	 * @param endTime Changing it to 0 will hide icon from minimap if you're not calling it repeatedly in Draw event
	 * @param uid you can use this value to edit existing uid's location/color/icon/endTime
	 */
	DrawIcon(name: string, worldPos: Vector3, size?: number, color?: Color, endTime?: number, uid?: any, minSizeAnimated?: number, animationCycle?: number, priority?: number): void
	DeleteIcon(uid: any): void
	GetIconSize(name: string): Nullable<Vector2>
	/**
	 * The minimap's icon `name` (without its `minimap_` prefix): its texture and its place on the
	 * sheet, to draw it as the minimap does - e.g. a neutral camp's `creepcamp`, `creepcamp_mid`,
	 * `creepcamp_big`, `creepcamp_ancient`; none before the server's info or for an unknown name.
	 */
	GetIcon(name: string): Nullable<MinimapIcon>
	/**
	 * Draws ping at minimap
	 *
	 * @param endTime Must be for ex. Game.RawGameTime + ConVarsSDK.GetFloat("dota_minimap_ping_duration").
	 * @param endTime Changing it to 0 will hide icon from minimap if you're not calling it repeatedly in Draw event
	 * @param uid you can use this value to edit existing uid's location/color/icon, or specify 0x80000000 to make it unique
	 */
	DrawPing(worldPos: Vector3, color?: Color, endTime?: number, uid?: any): void
	DrawLineArrow(start: Vector3, end: Vector3, color?: Color, width?: number, arrowLength?: number, rotationDeg?: number): void
	DeletePing(uid: any): void
	SendPing(location: Vector2, type?: PingType, directPing?: boolean, target?: Entity): void
	/**
	 * Where a world position lands on the minimap, or undefined while the game lays out no
	 * minimap — there is then nothing to put it on.
	 */
	WorldToMinimap(pos: Vector3): Nullable<Vector2>
	/** The world position under a minimap point, or undefined while it is not laid out. */
	MinimapToWorld(pos: Vector2): Nullable<Vector3>
}
declare const MinimapSDK: CMinimapSDK
