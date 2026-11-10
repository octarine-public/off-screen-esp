// AUTO-GENERATED - do not edit.
/**
 * The spot a cast that moves its caster takes it to out of what lands on it (`Unit.BlinkEscape`):
 * straight ahead first in each - the way it faces, no turn to take.
 */
declare enum EEscapeSpot {
	/** The nearest spot clear of it. */
	Nearest = 0,
	/** As far as the cast takes it. */
	Farthest = 1,
	/**
	 * Its double tap first (`Ability.DoubleTapPoint`) - Blink Dagger toward the team's fountain,
	 * no cursor needed - else as far as the cast takes it.
	 */
	Home = 2
}
