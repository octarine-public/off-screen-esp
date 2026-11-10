// AUTO-GENERATED - do not edit.
/**
 * Spirits: `spirit_amount` spirits circle Io `default_radius` off for `spirit_duration`, a round each
 * `revolution_time`; one that comes within `hero_hit_radius` of an enemy hero hits it for
 * `hero_damage` and is gone. The ring hits only what stands on it - neither inside it by Io nor
 * beyond it. With Aghanim's Scepter Io steers the ring (`Steers`): Spirits In draws it in to
 * `min_range`, Spirits Out sends it out to `max_range`, `spirit_movement_rate` a second, and with
 * neither on it stays where it is (21 October 2026, demo: 425 → 650 in 0.9 s, 650 → 200 back).
 */
declare class wisp_spirits extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	/** Damage of one spirit to a hero: `hero_damage`. */
	public GetBaseDamageForLevel(level: number): number
	/** How far from Io the spirits circle as they come: `default_radius`. */
	public get OrbitRadius(): number
	/** How near a spirit's middle a hero's edge comes for the spirit to hit it: `hero_hit_radius`. */
	public get HeroHitRadius(): number
	/**
	 * How far Io's middle may stand from `target`'s for the ring to hit it: the orbit and a spirit's
	 * hit, to the target's edge. Farther, the spirits pass by it; with the ring's 150 as its reach
	 * Io walked to 175 off Sand King, inside the ring, and none hit (21 October 2026, demo). Cast by
	 * hand from 461 off, a spirit hit him 110-130 off its middle once a second.
	 */
	public ReachOf(target: Unit): number
	/**
	 * How near Io's middle may stand to `target`'s for the ring still to hit it: the orbit less a
	 * spirit's hit and the target's edge. Nearer, the spirits circle round it.
	 */
	public InnerReachOf(target: Unit): number
	/** How near Io Spirits In draws the ring: `min_range`. */
	public get MinRadius(): number
	/** How far from Io Spirits Out sends the ring: `max_range`. */
	public get MaxRadius(): number
	/**
	 * Whether Io steers the ring in and out: Spirits In - and with it Spirits Out - learnt and on his
	 * bar, as Aghanim's Scepter puts them there.
	 */
	public get Steers(): boolean
	/**
	 * How far from Io his spirits circle now, read off one of them; none while no ring of his is
	 * up. A spirit gone - one that hit, one of a ring that ended - stays where it went, of the
	 * neutral team, and a spirit of an Io of an earlier game stays his by another owner (21 October
	 * 2026, demo: gone ones 1176-1537 off Io, one 92 off): neither is read.
	 */
	public get RadiusNow(): Nullable<number>
}
