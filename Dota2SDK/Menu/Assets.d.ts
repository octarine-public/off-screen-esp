// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * Which file {@link ResolveAsset} takes first for an `.svg` path: the `.svg` itself for `"vector"`,
	 * the `.png` beside it for `"raster"`.
	 */
	type AssetMode = "raster" | "vector"
	/**
	 * Sets what {@link ResolveAsset} asks about a path no package file answers, and forgets every
	 * answer it has kept. {@link AttachHost} sets it to the host's `resolveAsset`.
	 */
	function SetAssetResolver(next: (path: string) => string): void
	/**
	 * Registers the host's rule for art whose shape is its alpha alone. A game's ability icons are
	 * such silhouettes, and the colour under them is whatever each source file held, black in a few
	 * and white in most; a path the rule claims is loaded white on alpha, so every one of them reads
	 * the same and takes a tint the same way.
	 */
	function SetMonochromeArt(next: (path: string) => boolean): void
	/**
	 * Element tag for a resolved asset: <svg> (SVG plugin) rasterizes the vector
	 * source at the exact display size, <img> decodes a raster texture.
	 */
	/** Vector sources render through the svg element; panorama ships them as vsvg containers. */
	function AssetElementTag(src: string): "svg" | "img"
	/** A rectangle of an image file in the file's own whole pixels: one sprite of a sheet, or a crop. */
	interface ImageRegion {
		/** Left edge, counted from the left of the file: a whole number from 0. */
		readonly x: number
		/** Top edge, counted from the top of the file: a whole number from 0. */
		readonly y: number
		/** Width: a whole number above 0. */
		readonly width: number
		/** Height: a whole number above 0. */
		readonly height: number
	}
	/**
	 * Whether {@link RegisterSizedAsset} cuts `path` to size, and so can bake a radius into it: raster
	 * files only, on a host that resamples.
	 */
	function CanBakeSizedAsset(path: string): boolean
	/**
	 * Whether {@link RegisterSizedAsset} can cut a rectangle of `path` out on its own: raster files
	 * only, on a host with `RegisterSizedImageRegion`.
	 */
	function CanCutSizedRegion(path: string): boolean
	/** Returns a previously prepared raster source without creating or retaining a new asset. */
	function PeekSizedAsset(path: string, width: number, height: number, radius?: number): string
	/**
	 * A raster `path` resampled to the `width` by `height` screen pixels it is drawn at; sizes in dp
	 * go through {@link DpToPx} first. A `radius` in pixels is baked into the alpha, so the source is
	 * drawn without another rounded clip. Answers `path` itself for a vector or `scheme://` source
	 * and on a host that cannot resample. Hand every source taken here back to
	 * {@link ReleaseSizedAsset} once nothing draws it at that size. A `region` is cut out on its own;
	 * where it cannot be, the answer is `""`, which draws nothing rather than the whole sheet.
	 *
	 * @example
	 * const frame = { x: 32, y: 0, width: 32, height: 32 }
	 * const src = MenuSDK.RegisterSizedAsset(sheet, 32, 32, 0, frame)
	 */
	function RegisterSizedAsset(path: string, width: number, height: number, radius?: number, region?: ImageRegion): string
	/** Hands back a source taken from {@link RegisterSizedAsset}. A raw path is ignored. */
	function ReleaseSizedAsset(source: string): void
	/**
	 * The source an image element loads `path` from: the file `SharedSDK.tryFindFile` finds, else
	 * what the resolver of {@link SetAssetResolver} answers, else `path` itself. `""` and a
	 * `scheme://` path come back unchanged. Each answer is kept per path and `mode`.
	 */
	function ResolveAsset(path: string, mode?: AssetMode): string
	/**
	 * Whether `path` resolves to a vector source, which only the svg element draws. Answered once per
	 * path: a HUD routes every image it is handed through this on every frame.
	 */
	function IsVectorAsset(path: string): boolean
}
