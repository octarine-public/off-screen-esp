// AUTO-GENERATED - do not edit.
/**
 * The game's illusion: it deals and takes the damage its creator gave it
 * (`DAMAGEOUTGOING_PERCENTAGE_ILLUSION`, `INCOMING_DAMAGE_ILLUSION`), of the outgoing a share on a
 * building and on Roshan (`IllusionDamageData`). The client gets only its caster and duration, so
 * the creator is the one whose own modifier the illusion carries - of several the one giving
 * illusions of its duration, else the first - else the caster's ability giving illusions of its
 * duration, else a rune by its duration; with none known it deals and takes the hero's damage.
 * Phantom Lancer's illusions all carry one modifier: Juxtapose's and Spirit Lance's of one
 * duration are taken as Juxtapose's, and both of Doppelwalk's - the client tells them apart by
 * nothing - as its second (`illusion_2_*`). The values are those of the unit whose ability made
 * the illusion, not of the hero an illusion of another hero copies.
 */
declare class modifier_illusion extends Modifier {
	public readonly IsHidden = false
	public UnitPropertyChanged(changed?: boolean): boolean
}
