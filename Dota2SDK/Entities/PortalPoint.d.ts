// AUTO-GENERATED - do not edit.
/**
 * A teleport the game remembers for the extra channel time of the ones after it: the server's
 * `CDOTA_TeleportTimerManager` keeps each scroll teleport of a team for 25 seconds from the cast
 * (`m_vecTrackedTeleports`: landing point, expiry, whether it went to an outpost).
 */
interface PortalPoint {
	readonly StartPosition: Vector3
	readonly EndPosition: Vector3
	IsValid: boolean
	IsOutpost: boolean
	Team: Team
	RecentTime: number
	readonly CreateTime: number
	InternalSkipIteration: boolean
	InternalSkipEmitNotify: boolean
	get IsExpired(): boolean
	get Caster(): Nullable<Unit>
}
