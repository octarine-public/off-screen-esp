const iconsPath = `${__OCT_PACKAGE_ROOT__}/scripts_files/images/icons`

/** Icons of the off-screen ESP menu: the page, its sections, the rows and the text popover. */
export const OffscreenIcons = {
	Offscreen: `${iconsPath}/offscreen.svg`,
	Enemies: `${iconsPath}/users.svg`,
	Objectives: MenuSDK.MenuIcons.Sparkles,
	/** A cut stone: the runes on the river and at the bounty spots. */
	Runes: `${iconsPath}/gem.svg`,
	/** The rune standing over the bowl of the shrine. */
	Wisdom: `${iconsPath}/wisdom.svg`,
	Lotus: `${iconsPath}/lotus.svg`,
	/** Bars of rising height: how full a pool has to be to be shown. */
	MinLotuses: MenuSDK.MenuIcons.LevelBars,
	ObjectiveSize: MenuSDK.MenuIcons.Expand,
	Layout: "menu/icons/sliders.svg",
	Appearance: MenuSDK.MenuIcons.Palette,
	/** A ruler: how far out the tracker reaches. */
	Distance: `${iconsPath}/ruler.svg`,
	MaxIndicators: MenuSDK.MenuIcons.Rows3,
	Visibility: MenuSDK.MenuIcons.IconEye,
	/** The corners of the screen the indicators sit against. */
	Placement: MenuSDK.MenuIcons.Scan,
	Overlap: MenuSDK.MenuIcons.SquareStack,
	EdgeInset: MenuSDK.MenuIcons.DoubleContour,
	FocusRadius: MenuSDK.MenuIcons.Radius,
	/** A ring around the hero's dot. */
	CircleFocus: `${iconsPath}/circle-dot.svg`,
	IndicatorSize: MenuSDK.MenuIcons.Expand,
	ImageType: `${iconsPath}/image.svg`,
	/** A milestone sign: the distance written under the indicator. */
	ShowDistance: `${iconsPath}/milestone.svg`,
	DistancePosition: MenuSDK.MenuIcons.Move,
	ShowHealth: MenuSDK.MenuIcons.Heart,
	/** Two rims a band apart: how thick the ring round the portrait is drawn. */
	RingWidth: `${iconsPath}/ring.svg`,
	HiddenOpacity: ImageData.Icons.icon_close_cross_eye_hidden,
	DistanceFade: MenuSDK.MenuIcons.Checkerboard,
	/** A span between two arrowheads: the distance the fade runs over. */
	FadeDistance: `${iconsPath}/move-horizontal.svg`,
	ColorMode: MenuSDK.MenuIcons.IconColorPickerPaintPalette,
	NearbyWarning: MenuSDK.MenuIcons.IconAlert,
	/** A radar sweep: the range around the hero that raises the warning. */
	WarningDistance: `${iconsPath}/radar.svg`,
	Text: MenuSDK.MenuIcons.Type,
	/** "Aa": the font family. */
	Font: `${iconsPath}/case-sensitive.svg`,
	FontSize: MenuSDK.MenuIcons.TextSize,
	Weight: MenuSDK.MenuIcons.LetterBold,
	TextColor: MenuSDK.MenuIcons.Baseline,
	TextOffset: MenuSDK.MenuIcons.ArrowUpFromLine,
	Shade: MenuSDK.MenuIcons.TextDots,
	ShadeColor: MenuSDK.MenuIcons.Palette,
	GlowRadius: MenuSDK.MenuIcons.Blur
} as const
