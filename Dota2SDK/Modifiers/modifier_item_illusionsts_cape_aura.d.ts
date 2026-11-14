// AUTO-GENERATED - do not edit.
/**
 * Illusionist's Cape's aura: more attack damage (`attack_damage_aura`) for the units of the
 * cape owner's player that are illusions or whose `UnitType` has the creep or considered-hero
 * bit (128, 2) - the units server.dll 0x1815d0e80 gives it to; heroes get none. The player is
 * the game's player owner (server.dll 0x181893550, 0x181893650): a hero's or Spirit Bear's own,
 * another unit's the hero's or bear's that owns it, a unit with the `UnitType` bits 0x20100
 * (a courier) its `OwnerPlayerID`, none (-1) otherwise.
 */
declare class modifier_item_illusionsts_cape_aura extends Modifier {
}
