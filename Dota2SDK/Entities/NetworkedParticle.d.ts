// AUTO-GENERATED - do not edit.
/**
 * A particle effect the server had the client create, kept up to date from the server's particle
 * messages until it is destroyed. `ParticleCreated`, `ParticleUpdated`, `ParticleReleased` and
 * `ParticleDestroyed` carry it.
 */
declare class NetworkedParticle {
	/** The id the server's particle messages name the effect by. */
	public readonly Index: number
	/** The particle file the effect plays, resolved from {@link ParticleSystemHandle}. */
	public readonly Path: string
	/** The 64-bit resource hash of the particle file, as the create message carried it. */
	public readonly ParticleSystemHandle: bigint
	/** The attach type the effect was created with, a `ParticleAttachment` of the game. */
	public readonly Attach: number
	/**
	 * The entity the effect was created on. Undefined when the server named none or the
	 * client does not have that entity.
	 */
	public AttachedTo: Nullable<INativePredictionTarget>
	/**
	 * The entity the create message named for modifiers. Undefined when it named none or the
	 * client does not have that entity.
	 */
	public ModifiersAttachedTo: Nullable<INativePredictionTarget>
	/** Every particle created and not yet destroyed, by {@link Index}. */
	public static readonly Instances: Map<number, NetworkedParticle>
	/** The position the server set for a control point, by control point number. */
	public readonly ControlPoints: Map<number, Vector3>
	/** The snapshot name the server set for a control point, by control point number. */
	public readonly ControlPointsSnapshot: Map<number, string>
	/** The model name the server set for a control point, by control point number. */
	public readonly ControlPointsModel: Map<number, string>
	/** The forward direction the server set for a control point, by control point number. */
	public readonly ControlPointsForward: Map<number, Vector3>
	/**
	 * The orientation the server set for a control point, as a quaternion, by control point
	 * number. Absent for a point whose position updates carried no orientation.
	 */
	public readonly ControlPointsQuaternion: Map<number, Vector4>
	/**
	 * The fallback position the server last sent for a control point, by control point number.
	 * For a point bound to an entity it is where the server puts that entity, and it is kept
	 * while the client has no such entity.
	 */
	public readonly ControlPointsFallback: Map<number, Vector3>
	/** The forward, up and left axes the server set for a control point, by its number. */
	public readonly ControlPointsOrient: Map<number, [Vector3, Vector3, Vector3]>
	/** The origin offset and the angle offset the server set for a control point, by its number. */
	public readonly ControlPointsOffset: Map<number, [Vector3, QAngle]>
	/**
	 * What a control point is bound to, by control point number: the entity, the attach type, the
	 * attachment on the entity, and whether its wearables are included. Holds only the points
	 * whose entity the client has.
	 */
	public readonly ControlPointsEnt: Map<number, [INativePredictionTarget, number, number, boolean]>
	/** The texture the server set for a texture attribute of the effect, by attribute name. */
	public readonly TextureAttributes: Map<string, string>
	/**
	 * When the effect is estimated to end, on the `GameState.RawGameTime` clock: worked out from
	 * its particle file as it was created, or -1 for an effect the file gives no end.
	 */
	public readonly EndTime: number
	/**
	 * {@link Path} with an economy item's replacement undone: the particle file the item's own
	 * stands in for, or `Path` itself when it replaces none.
	 */
	public readonly PathNoEcon: string
	/**
	 * Whether the game let the particle play out on its own instead of cutting it: one with a
	 * known lifetime then stays until that ends, one without is destroyed at once but keeps
	 * the flag, so a destroy listener can tell a cut effect from a finished one.
	 */
	public Released: boolean
	/** Whether the server has the effect drawn: true until the server says otherwise. */
	public ShouldDraw: boolean
	/** When the server froze the effect, in game time, or -1 while it is not frozen. */
	public FrozenAt: number
	/** The text the server set on the effect; empty when it set none. */
	public Text: string
	/**
	 * Takes the particle out of {@link Instances} and emits `ParticleDestroyed`. This ends the
	 * SDK's tracking of the effect only: the effect in the game is left as it is.
	 */
	public Destroy(): void
}
