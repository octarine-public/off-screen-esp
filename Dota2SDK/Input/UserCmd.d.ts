// AUTO-GENERATED - do not edit.
interface UserCmd {
	readonly MousePosition: Vector2
	readonly CameraPosition: Vector2
	readonly VectorUnderCursor: Vector3
	readonly ViewAngles: QAngle
	ComandNumber: number
	TickCount: number
	ForwardMove: number
	SideMove: number
	UpMove: number
	ClickBehaviors: number
	ScoreboardOpened: boolean
	ShopMask: number
	SpectatorStatsCategoryID: number
	SpectatorStatsSortMethod: number
	Buttons: bigint
	Impulse: number
	Pawn: Nullable<Entity>
	QueryUnit: Nullable<Entity>
	WeaponSelect: Nullable<Entity>
	Write(): void
}
