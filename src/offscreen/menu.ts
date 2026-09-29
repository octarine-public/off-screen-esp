import { OffscreenIcons } from "./icons"
import { RuneValues } from "./objectives"
import { TextSettings } from "./text"

export const enum EPlacementMode {
	SafeEdge,
	FocusRing
}

export const enum EVisibilityFilter {
	All,
	VisibleOnly,
	HiddenOnly
}

export const enum EImageType {
	Portrait,
	Icon
}

export const enum EColorMode {
	Player,
	Custom
}

export const enum ELabelPosition {
	OppositeArrow,
	Below,
	Inside,
	/** On the middle of the portrait, over a soft shade. */
	Center,
	/** In a dark band the bottom of the portrait fades into, just above the ring. */
	Band,
	/** On a plate hung on the bottom rim, rimmed in the indicator's colour. */
	Plate
}

/**
 * Whether a reading placed there is moved by the text offset: the gap out from the ring or in from
 * the edge. The middle, the band and the plate stand where they stand.
 */
function usesOffset(position: ELabelPosition): boolean {
	return (
		position === ELabelPosition.OppositeArrow ||
		position === ELabelPosition.Below ||
		position === ELabelPosition.Inside
	)
}

/** How an indicator goes once its target is no longer pointed at. */
export const enum EHideAnimation {
	Instant,
	Fade,
	FadeBlur
}

export class OffscreenMenu {
	public readonly Page: MenuSDK.Node
	public readonly State: MenuSDK.Toggle
	public readonly Distance: MenuSDK.Slider
	public readonly MaxIndicators: MenuSDK.Slider
	public readonly Visibility: MenuSDK.Dropdown
	public readonly Runes: MenuSDK.Toggle
	public readonly RuneTypes: MenuSDK.ImageSelector
	public readonly StackRunes: MenuSDK.Toggle
	public readonly StackAngle: MenuSDK.Slider
	public readonly Wisdom: MenuSDK.Toggle
	public readonly WisdomColor: MenuSDK.ColorPicker
	public readonly Lotus: MenuSDK.Toggle
	public readonly LotusColor: MenuSDK.ColorPicker
	public readonly MinLotuses: MenuSDK.Slider
	public readonly ObjectiveDistance: MenuSDK.Slider
	public readonly ObjectiveSize: MenuSDK.Slider
	public readonly Placement: MenuSDK.Dropdown
	public readonly Collision: MenuSDK.Toggle
	public readonly EdgeInset: MenuSDK.Slider
	public readonly FocusRadius: MenuSDK.Slider
	public readonly CircleFocus: MenuSDK.Toggle
	public readonly IndicatorSize: MenuSDK.Slider
	public readonly ImageType: MenuSDK.Dropdown
	public readonly ShowDistance: MenuSDK.Toggle
	public readonly DistancePosition: MenuSDK.Dropdown
	public readonly Text: TextSettings
	public readonly ShowHealth: MenuSDK.Toggle
	public readonly RingWidth: MenuSDK.Slider
	public readonly HiddenOpacity: MenuSDK.Slider
	public readonly DistanceFade: MenuSDK.Slider
	public readonly FadeDistance: MenuSDK.Slider
	public readonly HideAnimation: MenuSDK.Dropdown
	public readonly ColorMode: MenuSDK.Dropdown
	public readonly IndicatorColor: MenuSDK.ColorPicker
	public readonly NearbyWarning: MenuSDK.Toggle
	public readonly WarningDistance: MenuSDK.Slider
	public readonly WarningColor: MenuSDK.ColorPicker

	constructor() {
		const page = MenuSDK.Menu.AddEntry("Visual").AddNode(
			"Off-screen ESP",
			OffscreenIcons.Offscreen
		)
		page.SortNodes = false
		this.Page = page

		this.State = page.AddToggle("State", true)
		page.HeaderControl = this.State
		page.Gate = this.State

		const enemies = page.AddNode("Enemies", OffscreenIcons.Enemies)
		enemies.SortNodes = false
		this.Distance = enemies.AddSlider("Max distance", 4000, 500, 10000)
		this.Distance.IconPath = OffscreenIcons.Distance
		this.MaxIndicators = enemies.AddSlider("Max indicators", 6, 1, 12)
		this.MaxIndicators.IconPath = OffscreenIcons.MaxIndicators
		this.Visibility = enemies.AddDropdown(
			"Visibility",
			["All", "Visible only", "Hidden only"],
			EVisibilityFilter.All,
			"Which enemies get an indicator: any, only those visible on the map, or only those hidden in the fog."
		)
		this.Visibility.IconPath = OffscreenIcons.Visibility

		const objectives = page.AddNode("Objectives", OffscreenIcons.Objectives)
		objectives.SortNodes = false
		this.Runes = objectives.AddToggle(
			"Runes",
			true,
			"Power, bounty and water runes the map knows of; one out of sight is drawn at the occluded opacity.",
			0,
			OffscreenIcons.Runes
		)
		this.RuneTypes = objectives.AddImageSelector(
			"Rune types",
			RuneValues,
			RuneValues.map(value => [value, true])
		)
		this.StackRunes = objectives.AddToggle(
			"Stack runes",
			true,
			"Runes of one type lying in about the same direction share one indicator, with how many it stands for on the badge.",
			0,
			OffscreenIcons.StackRunes
		)
		this.StackAngle = objectives.AddSlider("Stack angle", 25, 5, 90)
		this.StackAngle.Suffix = "°"
		this.StackAngle.IconPath = OffscreenIcons.StackAngle
		this.Wisdom = objectives.AddToggle(
			"Wisdom rune",
			true,
			"A shrine whose wisdom rune is ready to be taken.",
			0,
			OffscreenIcons.Wisdom
		)
		this.WisdomColor = objectives.AddColorPicker(
			"Wisdom color",
			new Color(176, 132, 255)
		)
		this.Wisdom.PairColors(this.WisdomColor)
		this.Lotus = objectives.AddToggle(
			"Lotus pools",
			true,
			"A pool holding lotuses, with how many it holds on the badge.",
			0,
			OffscreenIcons.Lotus
		)
		this.LotusColor = objectives.AddColorPicker(
			"Lotus color",
			new Color(238, 150, 205)
		)
		this.Lotus.PairColors(this.LotusColor)
		this.MinLotuses = objectives.AddSlider("Min lotuses", 1, 1, 6)
		this.MinLotuses.IconPath = OffscreenIcons.MinLotuses
		this.ObjectiveDistance = objectives.AddSlider(
			"Objective distance",
			4000,
			500,
			10000
		)
		this.ObjectiveDistance.IconPath = OffscreenIcons.Distance
		this.ObjectiveSize = objectives.AddSlider("Objective size", 80, 50, 100)
		this.ObjectiveSize.Suffix = "%"
		this.ObjectiveSize.IconPath = OffscreenIcons.ObjectiveSize
		this.Lotus.OnValue(lotus => {
			this.MinLotuses.IsHidden = !lotus.value
		})

		const layout = page.AddNode("Layout", OffscreenIcons.Layout)
		layout.SortNodes = false
		this.Placement = layout.AddDropdown(
			"Placement",
			["Safe edge", "Focus ring"],
			EPlacementMode.FocusRing
		)
		this.Placement.IconPath = OffscreenIcons.Placement
		this.Collision = layout.AddToggle(
			"Collision",
			true,
			"Spread overlapping indicators along the edge or ring, so none stands on another.",
			0,
			OffscreenIcons.Collision
		)
		this.EdgeInset = layout.AddSlider("Screen inset", 78, 48, 220)
		this.EdgeInset.Suffix = "px"
		this.EdgeInset.IconPath = OffscreenIcons.EdgeInset
		this.FocusRadius = layout.AddSlider("Focus radius", 61, 40, 95)
		this.FocusRadius.Suffix = "%"
		this.FocusRadius.IconPath = OffscreenIcons.FocusRadius
		this.CircleFocus = layout.AddToggle(
			"Circular ring",
			false,
			"",
			0,
			OffscreenIcons.CircleFocus
		)
		this.IndicatorSize = layout.AddSlider("Indicator size", 32, 24, 76)
		this.IndicatorSize.Suffix = "px"
		this.IndicatorSize.IconPath = OffscreenIcons.IndicatorSize
		this.Placement.OnValue(placement => {
			const ring = placement.SelectedID === EPlacementMode.FocusRing
			this.FocusRadius.IsHidden = !ring
			this.CircleFocus.IsHidden = !ring
		})

		const appearance = page.AddNode("Appearance", OffscreenIcons.Appearance)
		appearance.SortNodes = false
		this.ImageType = appearance.AddDropdown(
			"Image type",
			["Portrait", "Icon"],
			EImageType.Icon
		)
		this.ImageType.IconPath = OffscreenIcons.ImageType
		this.ShowDistance = appearance.AddToggle(
			"Show distance",
			false,
			"How far the target lies past the edge of the camera's view; zero while it is on the screen.",
			0,
			OffscreenIcons.ShowDistance
		)
		this.DistancePosition = appearance.AddDropdown(
			"Distance position",
			[
				"Opposite arrow",
				"Below",
				"Inside",
				"Center",
				"Bottom band",
				"Bottom plate"
			],
			ELabelPosition.Band,
			"Where the distance stands: across the ring from the arrow, under the ring, over the bottom of the portrait, on its middle, in a dark band across its bottom, or on a plate hung on the bottom rim."
		)
		this.DistancePosition.IconPath = OffscreenIcons.DistancePosition
		this.ShowHealth = appearance.AddToggle(
			"Show health",
			true,
			"",
			0,
			OffscreenIcons.ShowHealth
		)
		this.RingWidth = appearance.AddSlider(
			"Ring width",
			2,
			1,
			6,
			0,
			"How thick the ring round an indicator is drawn: the health of a hero, the colour of an objective."
		)
		this.RingWidth.Suffix = "px"
		this.RingWidth.IconPath = OffscreenIcons.RingWidth
		this.Text = new TextSettings(appearance)
		this.ShowDistance.OnValue(shown => {
			this.DistancePosition.IsHidden = !shown.value
			this.Text.Node.IsHidden = !shown.value
		})
		this.DistancePosition.OnValue(position => {
			this.Text.Offset.IsHidden = !usesOffset(position.SelectedID)
		})
		this.HiddenOpacity = appearance.AddSlider("Occluded opacity", 100, 30, 100)
		this.HiddenOpacity.Suffix = "%"
		this.HiddenOpacity.IconPath = OffscreenIcons.HiddenOpacity
		this.DistanceFade = appearance.AddSlider("Distance fade", 100, 10, 100)
		this.DistanceFade.Suffix = "%"
		this.DistanceFade.IconPath = OffscreenIcons.DistanceFade
		this.FadeDistance = appearance.AddSlider("Fade distance", 5000, 500, 10000)
		this.FadeDistance.IconPath = OffscreenIcons.FadeDistance
		this.HideAnimation = appearance.AddDropdown(
			"Hide animation",
			["Instant", "Fade", "Fade blur"],
			EHideAnimation.Instant,
			"How an indicator goes once its target comes into view or drops out: at once, fading away, or fading out of focus."
		)
		this.HideAnimation.IconPath = OffscreenIcons.HideAnimation
		this.ColorMode = appearance.AddDropdown(
			"Indicator color",
			["Player color", "Custom"],
			EColorMode.Player
		)
		this.ColorMode.IconPath = OffscreenIcons.ColorMode
		this.IndicatorColor = appearance.AddColorPicker(
			"Custom color",
			new Color(255, 255, 255)
		)
		this.ColorMode.PairColors(EColorMode.Custom, this.IndicatorColor)
		this.NearbyWarning = appearance.AddToggle(
			"Nearby warning",
			true,
			"",
			0,
			OffscreenIcons.NearbyWarning
		)
		this.WarningColor = appearance.AddColorPicker(
			"Warning color",
			new Color(255, 184, 64)
		)
		this.NearbyWarning.PairColors(this.WarningColor)
		this.WarningDistance = appearance.AddSlider("Warning distance", 1500, 300, 5000)
		this.WarningDistance.IconPath = OffscreenIcons.WarningDistance
	}
}

export const OffscreenConfig = new OffscreenMenu()
