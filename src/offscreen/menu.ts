import { OffscreenIcons } from "./icons"
import { TextSettings } from "./text"

export const enum EPlacementMode {
	SafeEdge,
	FocusRing
}

export const enum EOverlapMode {
	StablePriority,
	Collision
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
	Inside
}

export class OffscreenMenu {
	public readonly Page: MenuSDK.Node
	public readonly State: MenuSDK.Toggle
	public readonly Distance: MenuSDK.Slider
	public readonly MaxIndicators: MenuSDK.Slider
	public readonly Visibility: MenuSDK.Dropdown
	public readonly Placement: MenuSDK.Dropdown
	public readonly Overlap: MenuSDK.Dropdown
	public readonly EdgeInset: MenuSDK.Slider
	public readonly FocusRadius: MenuSDK.Slider
	public readonly CircleFocus: MenuSDK.Toggle
	public readonly IndicatorSize: MenuSDK.Slider
	public readonly ImageType: MenuSDK.Dropdown
	public readonly ShowDistance: MenuSDK.Toggle
	public readonly DistancePosition: MenuSDK.Dropdown
	public readonly Text: TextSettings
	public readonly ShowHealth: MenuSDK.Toggle
	public readonly HiddenOpacity: MenuSDK.Slider
	public readonly DistanceFade: MenuSDK.Slider
	public readonly FadeDistance: MenuSDK.Slider
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

		const layout = page.AddNode("Layout", OffscreenIcons.Layout)
		layout.SortNodes = false
		this.Placement = layout.AddDropdown(
			"Placement",
			["Safe edge", "Focus ring"],
			EPlacementMode.FocusRing
		)
		this.Placement.IconPath = OffscreenIcons.Placement
		this.Overlap = layout.AddDropdown(
			"Overlap handling",
			["Stable priority", "Collision"],
			EOverlapMode.StablePriority,
			"Spread overlapping indicators along the edge or ring."
		)
		this.Overlap.IconPath = OffscreenIcons.Overlap
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
		this.IndicatorSize = layout.AddSlider("Indicator size", 52, 36, 76)
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
			EImageType.Portrait
		)
		this.ImageType.IconPath = OffscreenIcons.ImageType
		this.ShowDistance = appearance.AddToggle(
			"Show distance",
			true,
			"",
			0,
			OffscreenIcons.ShowDistance
		)
		this.DistancePosition = appearance.AddDropdown(
			"Distance position",
			["Opposite arrow", "Below", "Inside"],
			ELabelPosition.OppositeArrow,
			"Where the distance stands: across the ring from the arrow, under the ring, or over the bottom of the portrait."
		)
		this.DistancePosition.IconPath = OffscreenIcons.DistancePosition
		this.ShowHealth = appearance.AddToggle(
			"Show health",
			true,
			"",
			0,
			OffscreenIcons.ShowHealth
		)
		this.Text = new TextSettings(appearance)
		this.ShowDistance.OnValue(shown => {
			this.DistancePosition.IsHidden = !shown.value
			this.Text.Node.IsHidden = !shown.value
		})
		this.HiddenOpacity = appearance.AddSlider("Occluded opacity", 100, 30, 100)
		this.HiddenOpacity.Suffix = "%"
		this.HiddenOpacity.IconPath = OffscreenIcons.HiddenOpacity
		this.DistanceFade = appearance.AddSlider("Distance fade", 100, 10, 100)
		this.DistanceFade.Suffix = "%"
		this.DistanceFade.IconPath = OffscreenIcons.DistanceFade
		this.FadeDistance = appearance.AddSlider("Fade distance", 5000, 500, 10000)
		this.FadeDistance.IconPath = OffscreenIcons.FadeDistance
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
