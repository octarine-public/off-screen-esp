// AUTO-GENERATED - do not edit.
declare namespace GameData {
	/** @description use GameState.TickInterval */
	const DefaultTickInterval: number
	/**
	 * https://dota2.gamepedia.com/Attributes
	 */
	const MaxManaPerIntellect = 12
	const MaxManaRegenerationPerIntellect = 0.05
	const DamageAmplifyPerIntellectPrecent = 0.07
	const BaseMagicImmunityResist = 50
	function GetArmorResistInternal(armor: number): number
	let ArmorPerAgility: number
	function SetArmorPerAgilityInternal(value: number): void
	let HealthGainPerStrength: number
	function SetHealthGainPerStrengthInternal(value: number): void
	/** Health regeneration a second each point of strength gives a hero (`m_flStrengthHPRegen`). */
	let HealthRegenPerStrength: number
	function SetHealthRegenPerStrengthInternal(value: number): void
	let MagicResistPerIntellect: number
	function SetMagicResistPerIntellectInternal(value: number): void
	let MeleeDamageBlockAmount: number
	function SetMeleeDamageBlockAmountInternal(value: number): void
	let MeleeDamageBlockPerLevel: number
	function SetMeleeDamageBlockPerLevelInternal(value: number): void
	let MeleeDamageBlockChance: number
	function SetMeleeDamageBlockChanceInternal(value: number): void
	class CMoveSpeedData {
		/**
		 * @readonly
		 */
		public readonly Max = 550
		/**
		 * @readonly
		 */
		public readonly Min = 100
	}
	class CAttackSpeedData {
		/**
		 * @readonly
		 * @defaultvalue `0` default value may be changed in progress game
		 */
		public SpecialAttackDelay: number
		/**
		 * @readonly
		 * @defaultvalue `0.10000000149011612` default value may be changed in progress game
		 */
		public MinHaste: number
		/**
		 * @readonly
		 * @defaultvalue `7` default value may be changed in progress game
		 */
		public MaxHaste: number
		/**
		 * @readonly
		 * @defaultvalue `10.000000149011612` default value may be changed in progress game
		 */
		public Min: number
		/**
		 * @readonly
		 * @defaultvalue `700` default value may be changed in progress game
		 */
		public Max: number
		/**
		 * The least the bonus attack speed, agility's with it, comes to before the percentages: the
		 * game's own bound, in its code (-0.8 of the speed), in no game data.
		 */
		public readonly LowestBonus = -80
		public SetMinMaxFactorInternal(min: number, max: number, special?: number): void
	}
	class CStatusResistanceData {
		/**
		 * The most status resistance a unit has, a share - a debuff lasts no less than the rest of its
		 * duration: the game's own bound, in its code (its status resistance and a debuff's duration),
		 * in no game data.
		 */
		public readonly Max = 0.99
	}
	/** How the game ranks the modifiers giving a property it takes one value of (`GetPriority`). */
	class CModifierPriorityData {
		/** A modifier's rank unless its class gives its own. */
		public readonly Default = 1
		/**
		 * The rank a modifier has to be above for its value to count: the game's own bound, in its
		 * code, in no game data.
		 */
		public readonly Floor = -999
	}
	/**
	 * How much of its attack animation a unit skips under an ability that gives it in its code, in no
	 * game data (`MODIFIER_PROPERTY_ATTACK_ANIM_TIME_PERCENTAGE`), percent.
	 */
	class CAttackAnimationData {
		/** Riki's attack after Blink Strike. */
		public readonly BlinkStrike = 50
		/** Tusk's attack while Walrus Punch is ready to strike with it. */
		public readonly WalrusPunch = 40
	}
	/**
	 * How much shorter a unit's base attack time is under an item that gives it in its code, not from its
	 * data (`MODIFIER_PROPERTY_BASE_ATTACK_TIME_PERCENTAGE`), percent: the data's value is the tooltip's.
	 */
	class CBaseAttackTimeData {
		/** Mechanical Arm (its data's `bat` 0.1). */
		public readonly MechanicalArm = 10
	}
	/**
	 * The game's own numbers of an illusion's damage, in its code and in no game data
	 * (`modifier_illusion`'s creation, `CDOTA_Modifier_Rune_Illusion`, `CDOTA_Item_Fusion_rune`).
	 */
	class CIllusionDamageData {
		/** The outgoing damage of a rune's illusion, percent added. */
		public readonly RuneOutgoing = -65
		/** The incoming damage of a ranged hero's rune illusion, percent added. */
		public readonly RuneIncomingRanged = 200
		/** The incoming damage of a melee hero's rune illusion, percent added. */
		public readonly RuneIncomingMelee = 100
		/** How long the Illusion Rune's illusions last, seconds. */
		public readonly RuneDuration = 75
		/** How long the Fusion Rune's illusions last, seconds. */
		public readonly FusionRuneDuration = 45
		/**
		 * The share of its whole outgoing damage an illusion deals a building: its outgoing damage
		 * there is `trunc((outgoing + 100) * share - 100)`.
		 */
		public readonly StructureShare = 0.4
		/** The share of its whole outgoing damage an illusion deals Roshan, as `StructureShare`. */
		public readonly RoshanShare = 0.2
	}
	class CDataRune {
		/**
		 * @readonly
		 * @defaultvalue `7` default value may be changed in progress game
		 * @description Represents the number of minutes between each spawn of XP runes.
		 * @description spawn XP runes every x minutes
		 */
		public XPSpawnEveryMinutes: number
		/**
		 * @readonly
		 * @defaultvalue `4` default value may be changed in progress game
		 * @description Represents the number of minutes between each spawn of bounty runes.
		 * @description spawn bounty runes every x minutes
		 */
		public BountySpawnEveryMinutes: number
		/**
		 * @readonly
		 * @defaultvalue `2` default value may be changed in progress game
		 * @description Represents the number of minutes between each spawn of Powerup runes.
		 * @description spawn Powerup runes every x minutes
		 */
		public PowerUpSpawnEveryMinutes: number
		/**
		 * @readonly
		 * @defaultvalue `420` default value may be changed in progress game
		 * @description Represents the number of seconds between each spawn of XP runes.
		 * @description spawn XP runes every x seconds
		 */
		public XPSpawnEverySeconds: number
		/**
		 * @readonly
		 * @defaultvalue `180` default value may be changed in progress game
		 * @description Represents the number of minutes between each spawn of bounty runes.
		 * @description spawn bounty runes every x seconds
		 */
		public BountySpawnEverySeconds: number
		/**
		 * @readonly
		 * @defaultvalue `120` default value may be changed in progress game
		 * @description Represents the number of seconds between each spawn of Powerup runes.
		 * @description spawn Powerup runes every x seconds
		 */
		public PowerUpSpawnEverySeconds: number
		/** @description Initial gold earned before the first 5 minutes */
		public readonly InitialGold: number
		/** @description Additional gold earned per minute after the first 5 minutes */
		public readonly GoldPerMinute: number
		/** @description Initial gold earned after 5 minutes */
		public readonly GoldAfterFiveMinute: number
		/**
		 * Calculates the total gold earned based on the game time.
		 * @param gameTime - The total game time in seconds.
		 * @param goldAfterFiveMinute - The initial gold earned after 5 minutes.
		 * @param goldPerMinute - The additional gold earned per minute after the first 5 minutes.
		 * @param initialGold - The initial gold earned before the first 5 minutes.
		 * @description https://dota2.fandom.com/wiki/Gold#Bounty_Rune
		 * @returns {number}
		 */
		public CalculateGoldBountyByTime(gameTime: number, goldAfterFiveMinute?: number, goldPerMinute?: number, initialGold?: number): number
	}
	const MoveSpeedData: CMoveSpeedData
	const AttackSpeedData: CAttackSpeedData
	const StatusResistanceData: CStatusResistanceData
	const ModifierPriorityData: CModifierPriorityData
	const AttackAnimationData: CAttackAnimationData
	const BaseAttackTimeData: CBaseAttackTimeData
	const IllusionDamageData: CIllusionDamageData
	const Runes: CDataRune
}
