// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** The styles one variant axis picks from, by choice name. */
	type VariantValues = Record<string, RmlStyle>
	/** Every variant axis of a {@link Styled} definition, by axis name. */
	type VariantMap = Record<string, VariantValues>
	/** A choice for each axis of `V`, by axis name; an axis left out takes its default. */
	type SelectedVariants<V extends VariantMap> = {
		[K in keyof V]?: keyof V[K]
	}
	/** What {@link Styled} builds a style factory from. */
	interface StyledDefinition<V extends VariantMap> {
		/** The style every result starts from. */
		base?: RmlStyle
		/**
		 * The axes and their choices. The choice picked on each axis is laid over {@link base}, axis
		 * after axis in the order they are declared here.
		 */
		variants?: V
		/** The choice an axis takes when a call picks none. */
		defaults?: SelectedVariants<V>
	}
	/**
	 * A new style: the definition's base, then the choice picked or defaulted on each axis, then
	 * `extra`, each laid over the one before. A key set to `undefined` in a choice or in `extra`
	 * overrides nothing.
	 */
	type StyledFactory<V extends VariantMap> = (selected?: SelectedVariants<V>, extra?: RmlStyle) => RmlStyle
	/**
	 * A style factory for one kind of element: a base style and named axes of variants, picked per
	 * call.
	 *
	 * @example
	 * const buttonStyle = MenuSDK.Styled({
	 * 	base: { height: 24 },
	 * 	variants: { state: { normal: { opacity: 1 }, disabled: { opacity: 0.35 } } },
	 * 	defaults: { state: "normal" }
	 * })
	 * return <div style={buttonStyle({ state: "disabled" }, { width: 80 })} />
	 */
	function Styled<V extends VariantMap>(definition: StyledDefinition<V>): StyledFactory<V>
}
