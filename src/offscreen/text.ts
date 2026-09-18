import { OffscreenIcons } from "./icons"

const FONT_FAMILIES = MenuSDK.MenuFontFamilies()
const FONT_NAMES = [
	"Default",
	...FONT_FAMILIES.map(family => (family === "Stratum2" ? "Stratum 2" : family))
]
const WEIGHTS = [400, 500, 600, 700]

const enum ETextShade {
	None,
	Glow,
	Outline,
	Shadow
}

export class TextSettings {
	public readonly Node: MenuSDK.Node
	public readonly Font: MenuSDK.Dropdown
	public readonly FontSize: MenuSDK.Slider
	public readonly Weight: MenuSDK.Dropdown
	public readonly Color: MenuSDK.ColorPicker
	public readonly Offset: MenuSDK.Slider
	public readonly Shade: MenuSDK.Dropdown
	public readonly ShadeColor: MenuSDK.ColorPicker
	public readonly GlowRadius: MenuSDK.Slider

	private shadeColor = "#000000cc"
	private shadeSettle = 0
	private readonly effects: string[] = []

	constructor(parent: MenuSDK.Node) {
		const node = parent.AddSettings("Text settings", OffscreenIcons.Text)
		node.SortNodes = false
		this.Node = node
		this.Font = node.AddDropdown("Font", FONT_NAMES, 0)
		this.Font.IconPath = OffscreenIcons.Font
		this.FontSize = node.AddSlider("Font size", 11, 9, 24)
		this.FontSize.IconPath = OffscreenIcons.FontSize
		this.FontSize.Suffix = "px"
		this.Weight = node.AddDropdown(
			"Weight",
			["Regular", "Medium", "Semi-bold", "Bold"],
			2
		)
		this.Weight.IconPath = OffscreenIcons.Weight
		this.Color = node.AddColorPicker("Text color", new Color(255, 255, 255))
		this.Color.IconPath = OffscreenIcons.TextColor
		node.PairColors(this.Color)
		this.Offset = node.AddSlider("Text offset", 6, 0, 24)
		this.Offset.IconPath = OffscreenIcons.TextOffset
		this.Offset.Suffix = "px"
		this.Shade = node.AddDropdown(
			"Under text",
			["None", "Glow", "Outline", "Shadow"],
			ETextShade.Outline
		)
		this.Shade.IconPath = OffscreenIcons.Shade
		this.ShadeColor = node.AddColorPicker("Text shade color", new Color(0, 0, 0, 204))
		this.ShadeColor.IconPath = OffscreenIcons.ShadeColor
		this.GlowRadius = node.AddSlider("Text glow radius", 2, 1, 4)
		this.GlowRadius.IconPath = OffscreenIcons.GlowRadius
		this.GlowRadius.Suffix = "px"
		this.Shade.OnValue(() => this.syncShade())
		this.ShadeColor.OnValue(() => {
			if (this.shadeSettle !== 0) {
				clearTimeout(this.shadeSettle)
			}
			this.shadeSettle = setTimeout(() => {
				this.shadeSettle = 0
				this.shadeColor = MenuSDK.cssColor(this.ShadeColor.SelectedColor)
				this.rebuildEffects()
			}, 150)
		})
		this.GlowRadius.OnValue(() => this.rebuildEffects())
		this.shadeColor = MenuSDK.cssColor(this.ShadeColor.SelectedColor)
		this.rebuildEffects()
		this.syncShade()
	}

	public FontFamily(): string {
		return FONT_FAMILIES[this.Font.SelectedID - 1] ?? MenuSDK.Theme.FontFamily
	}

	public FontWeight(): number {
		return WEIGHTS[this.Weight.SelectedID] ?? 600
	}

	public Effect(): string {
		return this.effects[this.Shade.SelectedID] ?? "none"
	}

	private rebuildEffects(): void {
		const color = this.shadeColor
		this.effects[ETextShade.None] = "none"
		this.effects[ETextShade.Glow] =
			`glow(1px ${this.GlowRadius.value}px 0px 0px ${color})`
		this.effects[ETextShade.Outline] = `outline(1px ${color})`
		this.effects[ETextShade.Shadow] = `shadow(1px 1px ${color})`
	}

	private syncShade(): void {
		this.ShadeColor.IsHidden = this.Shade.SelectedID === ETextShade.None
		this.GlowRadius.IsHidden = this.Shade.SelectedID !== ETextShade.Glow
	}
}
