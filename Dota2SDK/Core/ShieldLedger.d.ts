// AUTO-GENERATED - do not edit.
/**
 * The shields of one unit as one reckoning spends them - a cast's blow, its ticks and those its
 * hits add, the damage over time on the unit, the steps of a kill (`IDamageContext.Shields`): what
 * is left of each kind and until when. What is left of the game's pools - an Aphotic Shield, a
 * Pipe's barrier - is read as it fills (`Fill`); each blow then takes off them what it blocks
 * (`Take`), so a later one finds less, and a tick they take whole still leaves the next its turn.
 * A block of each blow alone - Meat Shield's - is never spent (`Modifier.BlockOfEachHit`), Living
 * Armor's falls for each blow it blocks (`Modifier.BlockLossPerHit`); of those and a pool taking
 * every kind the largest blocks, as of two such pools (the highest the game takes), the smaller
 * not counted. Of a kind's pool and one taking every kind, the kind's goes
 * first (not measured). Spent in the order the reckoning takes the blows, not as they land.
 */
declare class ShieldLedger {
	/** What is left of the pools taking any damage, the block of each blow among them. */
	public Total: number
	/** What is left of those taking magical damage alone - a Pipe's barrier. */
	public Magical: number
	/** What is left of those taking physical damage alone - a Crystal Nova barrier. */
	public Physical: number
	/** The block of each blow alone, taking any damage - Meat Shield's: never spent. */
	public Each: number
	/**
	 * What is left of the block of each blow alone falling for each blow it blocks - Living
	 * Armor's - and what each takes off it.
	 */
	public Decaying: number
	public DecayLoss: number
	/** Game time the last of each kind ends; `Infinity` for one without an end. */
	public TotalUntil: number
	public MagicalUntil: number
	public PhysicalUntil: number
	public EachUntil: number
	public DecayUntil: number
	/** Damage they took off the blows so far. */
	public Absorbed: number
	/**
	 * Whether a pool took the last blow (`Take`): the game takes it off the blow's whole part - one
	 * it takes part of deals its whole part less what the pool had, one it takes whole none - and
	 * spends that, where a block of each blow leaves the rest rounded up.
	 */
	public Pooled: boolean
	/** Reads the shields of `target` as they stand: nothing taken off them yet. */
	public Fill(target: Unit): this
	/** Takes what is left of `other`'s shields as its own. */
	public CopyFrom(other: ShieldLedger): this
	/**
	 * Of `block` - what the shields as they stand take off a blow of `type`, no more than the blow -
	 * what they take off it landing at game time `at`, as they are left then: no more than they
	 * still give. Taken off them is the whole part of it, as the game takes it.
	 */
	public Take(block: number, type: DAMAGE_TYPES, at: number): number
}
