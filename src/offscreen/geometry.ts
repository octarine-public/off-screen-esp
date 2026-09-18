import { EPlacementMode } from "./menu"

const RAD_TO_DEG = 180 / Math.PI

export class CIndicatorGeometry {
	private centerX = 0
	private centerY = 0
	private halfWidth = 1
	private halfHeight = 1
	private placement = EPlacementMode.SafeEdge
	private cameraX = 0
	private cameraY = 0
	private cameraZ = 0
	private minRadius = 6
	private readonly probe: [number, number] = [0, 0]

	public Begin(
		width: number,
		height: number,
		placement: EPlacementMode,
		inset: number,
		focusRadius: number,
		circle: boolean
	): void {
		this.centerX = width / 2
		this.centerY = height / 2
		let availableWidth = Math.max(1, this.centerX - inset)
		let availableHeight = Math.max(1, this.centerY - inset)
		const ring = placement === EPlacementMode.FocusRing
		if (ring && circle) {
			const radius = Math.min(availableWidth, availableHeight)
			availableWidth = radius
			availableHeight = radius
		}
		const focus = ring ? focusRadius : 1
		this.halfWidth = availableWidth * focus
		this.halfHeight = availableHeight * focus
		this.placement = placement
		this.minRadius = Math.max(6, Math.min(this.halfWidth, this.halfHeight) * 0.02)
		const camera = CameraSDK.Position
		this.cameraX = camera.x
		this.cameraY = camera.y
		this.cameraZ = camera.z
	}

	public Direction(
		x: number,
		y: number,
		z: number,
		out: [number, number, number]
	): boolean {
		const probe = this.probe
		if (
			!Source2SDK.Projection.WorldToScreenXYZ(
				this.cameraX * 2 - x,
				this.cameraY * 2 - y,
				this.cameraZ * 2 - z,
				probe
			)
		) {
			return false
		}
		return this.screenDirection(
			this.centerX * 2 - probe[0],
			this.centerY * 2 - probe[1],
			out
		)
	}

	public DirectionFromScreen(
		screenX: number,
		screenY: number,
		out: [number, number, number]
	): boolean {
		return this.screenDirection(screenX, screenY, out)
	}

	private screenDirection(
		x: number,
		y: number,
		out: [number, number, number]
	): boolean {
		const dx = x - this.centerX
		const dy = y - this.centerY
		const length = Math.sqrt(dx * dx + dy * dy)
		if (length < this.minRadius) {
			return false
		}
		out[0] = dx / length
		out[1] = dy / length
		out[2] = Math.atan2(dy, dx) * RAD_TO_DEG
		return true
	}

	public OnScreen(x: number, y: number): boolean {
		return x >= 0 && x <= this.centerX * 2 && y >= 0 && y <= this.centerY * 2
	}

	public Place(directionX: number, directionY: number, out: [number, number]): void {
		let x = directionX * this.halfWidth
		let y = directionY * this.halfHeight
		if (this.placement === EPlacementMode.SafeEdge) {
			const scale =
				1 /
				Math.max(
					Math.abs(directionX) / this.halfWidth,
					Math.abs(directionY) / this.halfHeight
				)
			x = directionX * scale
			y = directionY * scale
		}
		out[0] = this.centerX + x
		out[1] = this.centerY + y
	}
}
