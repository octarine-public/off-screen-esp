const DEG_TO_RAD = Math.PI / 180
/** How far along its ray a probe is cast to read the frame's spread, well past the near plane. */
const PROBE_DEPTH = 1000
/**
 * How steeply a corner's ray falls at the least: a camera tipped up to the horizon still sees a
 * patch of ground with an end to it, fifty times its height away.
 */
const MIN_FALL = 0.02

/**
 * What the camera sees of the ground: the point it looks at, and the patch the screen's corners
 * cast onto a height, which a target off the screen is measured from. The rays are the ones the
 * frame is projected through: their spread is read back off the projection itself.
 */
export class CCameraView {
	/** The ground under the middle of the screen. */
	public readonly Focus = new Vector3()
	private eyeX = 0
	private eyeY = 0
	private eyeZ = 0
	/** The screen's corners as rays from the eye, clockwise from the top left: x, y and z. */
	private readonly rays = new Float64Array(12)
	/** The patch the corners cast at the height last measured at: x and y. */
	private readonly patch = new Float64Array(8)
	private readonly probe: [number, number] = [0, 0]

	/** Reads the camera of this frame; the projection must have begun it. */
	public Begin(width: number, height: number): void {
		const eye = CameraSDK.Position
		const angles = CameraSDK.Angles
		const pitch = angles.x * DEG_TO_RAD
		const yaw = angles.y * DEG_TO_RAD
		const roll = angles.z * DEG_TO_RAD
		const sinPitch = Math.sin(pitch)
		const cosPitch = Math.cos(pitch)
		const sinYaw = Math.sin(yaw)
		const cosYaw = Math.cos(yaw)
		const sinRoll = Math.sin(roll)
		const cosRoll = Math.cos(roll)
		const forwardX = cosPitch * cosYaw
		const forwardY = cosPitch * sinYaw
		const forwardZ = -sinPitch
		const rightX = -sinRoll * sinPitch * cosYaw + cosRoll * sinYaw
		const rightY = -sinRoll * sinPitch * sinYaw - cosRoll * cosYaw
		const rightZ = -sinRoll * cosPitch
		const upX = cosRoll * sinPitch * cosYaw + sinRoll * sinYaw
		const upY = cosRoll * sinPitch * sinYaw - sinRoll * cosYaw
		const upZ = cosRoll * cosPitch
		this.eyeX = eye.x
		this.eyeY = eye.y
		this.eyeZ = eye.z
		const distance = CameraSDK.Distance
		this.Focus.x = eye.x + forwardX * distance
		this.Focus.y = eye.y + forwardY * distance
		this.Focus.z = eye.z + forwardZ * distance
		const centerX = width / 2
		const centerY = height / 2
		const fallback = centerX / Math.tan((CameraSDK.FoV * DEG_TO_RAD) / 2)
		const spreadX = this.spread(
			forwardX + rightX,
			forwardY + rightY,
			forwardZ + rightZ,
			0,
			centerX,
			fallback
		)
		const spreadY = -this.spread(
			forwardX + upX,
			forwardY + upY,
			forwardZ + upZ,
			1,
			centerY,
			-fallback
		)
		for (let corner = 0; corner < 4; corner++) {
			const across =
				((corner === 1 || corner === 2 ? width : 0) - centerX) / spreadX
			const down = ((corner >= 2 ? height : 0) - centerY) / spreadY
			const x = forwardX + rightX * across - upX * down
			const y = forwardY + rightY * across - upY * down
			const z = forwardZ + rightZ * across - upZ * down
			const at = corner * 3
			this.rays[at] = x
			this.rays[at + 1] = y
			this.rays[at + 2] = Math.min(z, -MIN_FALL * Math.sqrt(x * x + y * y))
		}
	}

	/**
	 * How far a point at height `z` lies outside what the screen shows, in world units along the
	 * ground; zero on the screen, whatever stands over it there.
	 */
	public Distance(x: number, y: number, z: number): number {
		const rays = this.rays
		const patch = this.patch
		const drop = Math.min(z - this.eyeZ, -1)
		for (let corner = 0; corner < 4; corner++) {
			const along = drop / rays[corner * 3 + 2]
			patch[corner * 2] = this.eyeX + rays[corner * 3] * along
			patch[corner * 2 + 1] = this.eyeY + rays[corner * 3 + 1] * along
		}
		return outside(patch, x, y)
	}

	/**
	 * How many pixels the screen moves across one unit of a ray's tangent, along axis `axis`,
	 * read off where the probe cast along (`x`, `y`, `z`) lands; `fallback` if it lands nowhere.
	 */
	private spread(
		x: number,
		y: number,
		z: number,
		axis: number,
		center: number,
		fallback: number
	): number {
		const probe = this.probe
		if (
			!Source2SDK.Projection.WorldToScreenXYZ(
				this.eyeX + x * PROBE_DEPTH,
				this.eyeY + y * PROBE_DEPTH,
				this.eyeZ + z * PROBE_DEPTH,
				probe
			)
		) {
			return fallback
		}
		const spread = probe[axis] - center
		return Math.abs(spread) > 1 ? spread : fallback
	}
}

/** How far (`x`, `y`) lies outside the convex quad `patch`, zero inside it. */
function outside(patch: Float64Array, x: number, y: number): number {
	let side = 0
	let inside = true
	let nearest = Infinity
	for (let corner = 0; corner < 4; corner++) {
		const next = (corner + 1) & 3
		const fromX = patch[corner * 2]
		const fromY = patch[corner * 2 + 1]
		const edgeX = patch[next * 2] - fromX
		const edgeY = patch[next * 2 + 1] - fromY
		const pointX = x - fromX
		const pointY = y - fromY
		const cross = edgeX * pointY - edgeY * pointX
		if (cross !== 0) {
			const sign = cross > 0 ? 1 : -1
			if (side === 0) {
				side = sign
			} else if (sign !== side) {
				inside = false
			}
		}
		const lengthSqr = edgeX * edgeX + edgeY * edgeY
		const along =
			lengthSqr > 0
				? Math.max(0, Math.min(1, (pointX * edgeX + pointY * edgeY) / lengthSqr))
				: 0
		const gapX = pointX - edgeX * along
		const gapY = pointY - edgeY * along
		nearest = Math.min(nearest, gapX * gapX + gapY * gapY)
	}
	return inside ? 0 : Math.sqrt(nearest)
}
