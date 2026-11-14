// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** What one roll of the shuffler is allowed to change. */
	type EShuffleMode = EShuffleMode.Whole | EShuffleMode.Accent | EShuffleMode.Surfaces | EShuffleMode.Light
	namespace EShuffleMode {
		/** Surfaces and accent together, around one hue drawn at random. */
		type Whole = 0
		/** The accent alone; the surfaces keep every color they were given. */
		type Accent = 1
		/** The surfaces alone; the accent keeps its hue and is only relit to stay readable. */
		type Surfaces = 2
		/** Surfaces and accent as {@link Whole}, rolled light instead of dark. */
		type Light = 3
	}
}
