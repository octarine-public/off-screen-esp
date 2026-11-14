// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * The room a stage is lit by, and how its image is graded. A physically based material takes
	 * most of its light from the room around it rather than from the lamps: under lamps and no room
	 * a weapon comes out black. A subject in a flat material of its own, such as a cham, needs none.
	 */
	interface IPreviewRoom {
		/** The cubemap, and which room out of it when the file holds an array of them. */
		readonly environment: string
		/** A multiplier on the room's light, 1 leaving the cubemap at its own levels. */
		readonly exposure?: number
		/** Which room to take out of {@link environment} when the file holds an array of them. */
		readonly probe?: number
		/** How much of the room stands in for irradiance on the diffuse. */
		readonly ambient?: number
		/** How much of the room's own colour that ambient carries; 0 keeps only its brightness. */
		readonly saturation?: number
		/** The display transform: its exposure, its per-channel highlight rolloff, its knee. */
		readonly display?: readonly [number, number?, number?]
		/** Grade with the GAME's own transform instead, which its inspect view draws through. */
		readonly tonemap?: boolean
	}
	/** What a lamp on a preview stage is. Directional unless it says otherwise. */
	interface IPreviewLight {
		/** Where it shines from. A directional lamp reads it as a direction, not as a place. */
		readonly position: readonly number[]
		/** Which way it points, for the shapes that have a facing. */
		readonly rotation?: readonly number[]
		/** 0xRRGGBBAA, its alpha carrying the intensity unless {@link intensity} says otherwise. */
		readonly color?: number
		/** Brightness multiplier on the colour, uncapped. */
		readonly intensity?: number
		/** A lamp at a place rather than a direction. */
		readonly point?: boolean
	}
	/**
	 * A model standing on the stage beside its subject: a weapon in its hands, a sight on that
	 * weapon, a crate at its feet. Everything is optional but the model itself, and what is left out
	 * is what the model already says — a spec of one line is a model standing at the origin in
	 * whichever idle it carries.
	 */
	interface IPreviewModel {
		/** The model file. */
		readonly model: string
		/**
		 * The bone it hangs off, by name, and it follows that bone through the animation. Left out,
		 * it stands where {@link position} puts it instead.
		 *
		 * A rig without the bone carries nothing: a weapon bone is a convention of one game's models,
		 * and a stage showing something else must not sprout a rifle at its origin.
		 */
		readonly bone?: string
		/**
		 * Which model that bone belongs to, by the id it was added under. Left out, the bone is the
		 * subject's — what a stage hangs things off nine times in ten.
		 */
		readonly parent?: string
		/**
		 * Wear it on the parent's skeleton instead of hanging it off one bone: every bone the two
		 * share by name follows the parent's, so the model needs no bone or animation of its own. This
		 * is how a garment skinned to a hero's skeleton, such as his hair, moves with him. Its bounds
		 * count toward the subject's framing, and a host that cannot merge bones leaves it off.
		 */
		readonly merge?: boolean
		/** Where it stands, when it hangs off nothing. */
		readonly position?: readonly number[]
		/** Which way it faces there, as pitch, yaw and roll. */
		readonly angles?: readonly number[]
		/** How large it stands there, 1 being its own size. */
		readonly scale?: number
		/** A clip file to load beside it, for a model carrying no animation of its own. */
		readonly clip?: string
		/**
		 * The animation to play, by name. Left out, a model carrying a clip plays it and a model
		 * carrying none stands in its bind pose — a held object wants exactly that, since the hand
		 * it hangs off is what moves it.
		 */
		readonly animation?: string
		/** One material over every submesh of it, as a `.vmat` path or as inline KV3. */
		readonly material?: string
		/**
		 * With {@link material}, the submeshes whose own material name contains any of these
		 * lower-case words keep their own: the parts a finish must not cover, such as a sticker or a
		 * lens.
		 */
		readonly keep?: readonly string[]
		/**
		 * Show the older of a weapon's two bodies. A finish authored before the models were remade is
		 * unwrapped for that geometry and lands on nothing over the newer one.
		 */
		readonly legacy?: boolean
	}
	/**
	 * Where the camera stands, in multiples of the height of whatever model is on the stage — so a
	 * framing outlives the model it was written for, and a stage showing a hero one moment and a crate
	 * the next holds both at the same size on screen.
	 */
	interface IPreviewFraming {
		/** How far back the camera sits. The camera is orthographic, so this decides depth, not size. */
		readonly distance?: number
		/** How far above what it looks at, which is the whole of its downward tilt. */
		readonly rise?: number
		/** How far above the model's middle it looks, for a subject that does not fill its bounds. */
		readonly lift?: number
		/** How far to the side it looks, for a subject that does not stand centred in them. */
		readonly slide?: number
		/** What the camera centres on across the model: its authored origin, or the middle of its bounds. */
		readonly center?: "origin" | "bounds"
		/**
		 * What the framing is measured against. `height` is the subject standing up, which is what a
		 * body is; `widest` is its longest side whichever that is, which is what anything lying down
		 * is — a rifle is a tenth as tall as it is long, and framed by its height it is drawn ten
		 * times past the edges of the stage.
		 */
		readonly span?: "height" | "widest"
		/**
		 * Sizes the subject to the stage instead of standing it at a share of the stage's height: the
		 * room kept clear on each side is given, and the subject is made as large as fits in the rest,
		 * measured as it is posed. What it carries counts up to 1.35 times the body's own half extent.
		 * It replaces {@link CPreviewScene.SetFill}, {@link lift}, {@link span}, {@link slide} and
		 * {@link center}.
		 */
		readonly fit?: IPreviewFit
	}
	/** The room a fitted stage keeps clear around its subject, in fractions of the stage. */
	interface IPreviewFit {
		/** Kept clear above the subject, as a share of the stage's height; 0 when left out. */
		readonly top?: number
		/** Kept clear below the subject, as a share of the stage's height; 0 when left out. */
		readonly bottom?: number
		/** Kept clear on BOTH sides, so the subject stays centred across the stage. */
		readonly sides?: number
	}
	/**
	 * The 3D stage behind a preview page: one GFX scene showing the model it is given, published to
	 * RmlUi as the texture {@link CPreviewScene.TextureId} names. It renders only while the page
	 * keeps it active, and lets go of its scene and models 5 s after that ends. On a host without the
	 * GFX scene manager it never becomes ready, so a preview built on it never appears.
	 */
	class CPreviewScene {
		/** The vg texture slot to embed as `octarine://scene/<id>`, once a model is loaded and rendering. */
		public get TextureId(): Nullable<number>
		/** Skeleton segments of the shown model, as bone index pairs. */
		public get Links(): readonly [number, number][]
		/** The bone names of each link, parallel to {@link Links}, for telling body parts apart. */
		public get LinkNames(): readonly [string, string][]
		/** The chain each link belongs to, parallel to `Links` and contiguous by construction. */
		public get ChainIds(): readonly number[]
		/**
		 * How much of the stage's height the model stands, as a share of it. The default leaves
		 * room for a frame and readings around the sample; a page that draws on the model itself
		 * asks for more. Held as well as applied, so a scene reframes live and one set up before
		 * its model loads comes up at the asked size.
		 */
		public SetFill(fill: number): void
		/**
		 * Where the camera stands over the model, in multiples of its height. Held as well as
		 * applied, for the reason the fill is: a page frames its stage before the model that framing
		 * is measured against has finished loading.
		 */
		public SetFraming(framing: Readonly<IPreviewFraming>): void
		/**
		 * The lamps on the stage, replacing whatever stood there. Held as well as applied, because the
		 * scene is built the first time a model is named and a page lights it before that.
		 *
		 * A single key leaves the far side of a subject black. A second lamp opposite it is one answer
		 * and {@link SetAmbient} is the other: the fill flattens the shading, the room lifts it.
		 */
		public SetLights(lights: readonly IPreviewLight[]): void
		/**
		 * The light the room itself casts: `scale` how much of the environment's blurred top mip
		 * stands in for irradiance on the diffuse, `saturation` how much of that room's own colour it
		 * carries. Held as well as applied.
		 *
		 * A stage that never calls this is left at whatever ambient the host renders scenes under,
		 * rather than written to a default of ours.
		 */
		public SetAmbient(scale: number, saturation: number): void
		/**
		 * What the subject holds, or nothing. Held as well as applied, because it hangs off a bone of
		 * Held as well as applied, because everything it can hang off reloads out from under it: a
		 * page names its models once, and each is raised again on every subject that has a place for
		 * it. Call it every frame if that is easier — a spec that says the same thing does nothing.
		 *
		 * The `id` is what a later call replaces, and what another model names as its {@link
		 * IPreviewModel.parent}. Adding under one already taken re-raises that model rather than
		 * standing a second one beside it.
		 *
		 * @example
		 * scene.AddModel("weapon", { model: rifle, bone: "wpn" })
		 * scene.AddModel("sight", { model: scope, parent: "weapon", bone: "scope_attach" })
		 */
		public AddModel(id: string, spec: Readonly<IPreviewModel>): void
		/**
		 * Takes the model added under `id` off the stage. Its instance is kept under that id, so a
		 * model added under the same id again reuses it instead of adding an instance to the scene.
		 */
		public RemoveModel(id: string): void
		/**
		 * The room the stage stands in, or nothing for a stage lit by its lamps alone. Held as well as
		 * applied, because the scene is built the first time a model is named and a page furnishes it
		 * before that.
		 */
		public SetRoom(room: Nullable<IPreviewRoom>): void
		/**
		 * The stage's size on screen, in pixels. The render target follows it supersampled, so the
		 * model is drawn over size and averaged down however large the card is laid out and whatever
		 * the UI is scaled to — a target of a fixed size is either a waste or a blur, depending.
		 *
		 * The host calls this every layout; nothing happens unless the answer changed.
		 */
		public SetStageSize(width: number, height: number): void
		/**
		 * Show the older of a weapon's two bodies as the subject. A finish authored before the models
		 * were remade is unwrapped for that geometry and lands on nothing over the newer one.
		 *
		 * Held as well as applied, since the subject reloads out from under it.
		 */
		public SetLegacyBody(on: boolean): void
		/**
		 * Silhouette glow around the model, 0 turns it off. Held as well as applied, and forwarded
		 * only when the value changes: the pages call this every frame, and the scene is created
		 * lazily, so a fresh scene replays the held glow instead of coming up glowless.
		 */
		public SetGlow(color: number, width: number): void
		/**
		 * One material over every submesh of the shown model, as inline KV3, or the model's own back
		 * when nothing is given. Call it every frame; binding happens only when the text changes.
		 *
		 * Held rather than only applied, because a distinct text mints a material the scene then keeps
		 * — and because the model reloads out from under it. A page that switches the hero it shows
		 * would otherwise get its stock materials back with nothing here noticing.
		 */
		public SetOverrideMaterial(material: Nullable<string>): void
		/**
		 * Keeps the model's own look drawn under the override material, the way a chams style that keeps
		 * the original does in game. Held like the material itself, so a model that reloads keeps it;
		 * call it every frame, it only reaches the instance when it changes.
		 */
		public SetKeepOriginal(keep: boolean): void
		/**
		 * Overrides one parameter of whatever the model draws with, for this instance alone. Mints
		 * nothing, so it is the right home for anything that moves — a color picker above all.
		 *
		 * Held as well as applied, for the same reason the material is: an override lives on the
		 * instance, and a freshly bound material carries its own declared defaults instead. The page
		 * unloads its model every time it leaves the screen, so without this a color survives exactly
		 * until the menu is closed and reopened, and then reads as whatever the material declared.
		 */
		public SetOverrideParam(name: string, value: number[]): void
		/**
		 * Projects the eight corners of the model's bounds, turned into the pose it stands in, onto a
		 * `width` by `height` px stage: `x, y` pairs into `out`, the four base corners first and then
		 * the four top ones, each ring in order around its square so consecutive corners share an
		 * edge. False until a model is shown.
		 */
		public ProjectCorners(width: number, height: number, out: Float64Array): boolean
		/**
		 * Screen position of one point of the model's own space, in stage pixels. It is turned into
		 * the pose the model stands in first, so what is projected is where that point ended up.
		 *
		 * For a page that knows the shape of its subject better than the model does: what a game
		 * draws a box to is rarely the model's bounds, which are the pose it was authored in rather
		 * than the one it stands in and take in every limb at its furthest.
		 */
		public ProjectPoint(x: number, y: number, z: number, width: number, height: number, out: Float64Array, offset?: number): boolean
		/**
		 * Screen position of a link's bones inside a stage of the given size, mirroring the scene's
		 * orthographic camera. False when either bone has no transform yet.
		 */
		public ProjectLink(link: number, width: number, height: number, out: [number, number, number, number]): boolean
		/** Subscribes to the stage becoming ready or unloading; answers with the unsubscribe. */
		public OnChange(listener: () => void): () => void
		/**
		 * The scene renders only while the page is open. Remembered as well as applied: the page
		 * usually says so before there is a scene to say it to.
		 */
		public SetActive(active: boolean): void
		/**
		 * Turns the model on its stage, in degrees. Held as well as applied, because the model
		 * reloads out from under the pose and a page poses the stage before its model is up.
		 *
		 * All three, because two are not enough to pose a subject lying down. Tipping one up to face
		 * the camera carries its front to the bottom of the frame, and the only way back is a turn
		 * about the axis the camera looks down — which is the roll.
		 */
		public SetModelAngles(pitch: number, yaw: number, roll?: number): void
		/**
		 * Shifts where the model is drawn by `x, y, z` in its own units, for art that is not centred
		 * on the origin it stands at. The framing and what {@link ProjectCorners} and
		 * {@link ProjectPoint} answer stay on the subject; only the drawing and the bones
		 * {@link ProjectLink} projects move with it.
		 */
		public SetModelOffset(x: number, y: number, z: number): void
		/**
		 * Leans the model's upper body to a view pitch, in degrees, positive looking down — the bend
		 * an aim pose puts on a pawn. Spread over the spine chain and the neck so the model curls the
		 * way a body does instead of folding at one joint; a rig missing some of those bones shares
		 * the angle over the ones it has. Held as well as applied, because the model reloads out from
		 * under the lean.
		 */
		public SetViewPitch(pitch: number): void
		/**
		 * The model on the stage, and the clip file it is to be shown in when its owner knows one.
		 * Call it every frame; loading starts only when the path changes.
		 *
		 * A named clip is for models that carry no animation of their own — a walker keeps every one
		 * of its as a loose file beside it, and no search of the model can find them.
		 */
		public SetModel(path: Nullable<string>, clip?: string): void
	}
}
