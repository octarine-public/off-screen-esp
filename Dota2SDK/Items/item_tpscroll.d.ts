// AUTO-GENERATED - do not edit.
declare class item_tpscroll extends Item {
	public get MaxChannelTime(): number
	public get CastRange(): number
	/**
	 * How far from the unit it lands on the teleport puts its caster at most, toward the point the
	 * scroll was cast at (`maximum_distance`): a cast at a point within it lands on that point.
	 */
	public get MaxLanding(): number
	/**
	 * Whether the teleport of `caster` - the scroll's owner by default - lands on `target`: a building
	 * of the caster's side; with Boots of Travel in the inventory a creep of its side as well, and
	 * with Boots of Travel 2 a hero of its side too, never the caster itself. The data lists heroes
	 * and creeps for either boots; the server's target filter of the scroll (server.dll,
	 * `item_tpscroll`'s cast filter and its point search, dota2-ida `notes/teleport_timer.txt`) adds
	 * creeps with either boots and heroes with the second only. The scroll is cast at a point: the
	 * server takes the unit nearest it that passes the filter.
	 * @example
	 * if (scroll.LandsOn(allyCreep)) {
	 * 	hero.CastPosition(scroll, allyCreep.Position)
	 * }
	 */
	public LandsOn(target: Unit, caster?: Nullable<Unit>): boolean
	/**
	 * Seconds the teleport of `caster` - the scroll's owner by default - channels: the scroll's own
	 * channel, or Boots of Travel 2's shorter one (`tp_channel_time`) while it is in the inventory.
	 * Not the longer channel to an outpost, nor the time several teleports to one place add up to
	 * without boots (`UnitPortalData`).
	 */
	public ChannelTimeFor(caster?: Nullable<Unit>): number
}
