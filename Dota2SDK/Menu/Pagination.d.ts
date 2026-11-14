// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * How many pages `total` items fill at `pageSize` a page, at least 1. A `pageSize` below 1
	 * counts as 1.
	 */
	function PageCount(total: number, pageSize: number): number
	/**
	 * Back and forward arrows around "page / pages", for a list shown `pageSize` items at a time; it
	 * draws nothing while `total` fits on one page. `page` counts from 0 and is the caller's to keep:
	 * an arrow calls `onMove` with -1 or 1, and the arrow at either end is disabled.
	 */
	function Pagination(props: {
		page: number
		total: number
		pageSize: number
		style?: RmlStyle
		onMove: (delta: number) => void
	}): React.ReactElement | null
}
