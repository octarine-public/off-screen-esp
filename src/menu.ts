import { Menu, Team } from "github.com/octarine-public/wrapper/index"

import { Colors } from "./colors"

export class MenuManager {
	public readonly State: Menu.Toggle
	public readonly ImageType: Menu.Dropdown
	public readonly IsVisible: Menu.Toggle
	public readonly ShowDistance: Menu.Toggle

	private readonly basePath = "github.com/octarine-public/off-screen-esp/scripts_files/"
	private readonly icon = this.basePath + "icons/screen.svg"

	private readonly color: Menu.Dropdown
	private readonly imageSize: Menu.Slider
	private readonly elipsSize: Menu.Slider
	private readonly distance: Menu.Slider
	private readonly customColor: Menu.Toggle

	private readonly tree = Menu.AddEntryDeep(["Visual", "Maphack"])
	public readonly node = this.tree.AddNode("Off-Screen ESP", this.icon)

	private readonly colorNames = [
		"Purple",
		"Red",
		"Orange",
		"Aqua",
		"Fuchsia",
		"White",
		"Blue",
		"Green"
	]

	private readonly elipsSizeMin = 0.2
	private readonly elipsSizeMax = 0.8
	private readonly imageSizeMin = 32
	private readonly imageSizeMax = 50

	constructor() {
		this.node.SortNodes = false

		this.State = this.node.AddToggle("State", true)
		this.IsVisible = this.node.AddToggle(
			"Visible check",
			true,
			"Display if the hero is not visible on the map"
		)
		this.customColor = this.node.AddToggle("Custom indicator color", false)
		this.ShowDistance = this.node.AddToggle("Show distance", false)
		this.elipsSize = this.node.AddSlider("Size", 40, 0, 100)
		this.distance = this.node.AddSlider("Max distance", 40, 10, 80)
		this.imageSize = this.node.AddSlider("Indicator size", 0, 0, 100)
		this.ImageType = this.node.AddDropdown("Image type", ["Full", "Icon"], 1)
		this.color = this.node.AddDropdown("Color", this.colorNames)
		this.color.IsHidden = true

		this.customColor.OnValue(call => (this.color.IsHidden = !call.value))
	}
	public get IsOpen() {
		return this.node.IsOpen
	}
	public get MaxDistance() {
		return this.distance.value * 100
	}
	public get Size() {
		return Math.remapRange(
			this.elipsSize.value,
			this.elipsSize.min,
			this.elipsSize.max,
			this.elipsSizeMin,
			this.elipsSizeMax
		)
	}
	public get ImageSize() {
		return Math.remapRange(
			this.imageSize.value,
			this.imageSize.min,
			this.imageSize.max,
			this.imageSizeMin,
			this.imageSizeMax
		)
	}
	public ArrowColor(team: Team, playerSlot: number) {
		return !this.customColor.value
			? Colors.Arrow(team, playerSlot)
			: Colors.ArrowColors[this.color.SelectedID]
	}
	public InnerColor(team: Team, playerSlot: number) {
		return !this.customColor.value
			? Colors.Inner(team, playerSlot)
			: Colors.InnerColors[this.color.SelectedID]
	}
	public OutlineColor(team: Team, playerSlot: number) {
		return !this.customColor.value
			? Colors.Outline(team, playerSlot)
			: Colors.OutlineColors[this.color.SelectedID]
	}
}
