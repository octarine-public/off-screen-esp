function load(name: string) {
	return new Map(
		Object.entries(
			SharedSDK.readJSON<Record<string, string>>(`translations/${name}.json`)
		)
	)
}

MenuSDK.Localization.AddLocalizationUnit("russian", load("ru"))
MenuSDK.Localization.AddLocalizationUnit("english", load("en"))
MenuSDK.Localization.AddLocalizationUnit("chinese", load("cn"))
