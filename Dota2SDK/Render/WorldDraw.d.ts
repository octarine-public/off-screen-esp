// AUTO-GENERATED - do not edit.
/**
 * Shapes in world space - lines, rings and filled polygons - drawn beneath the UI with the camera of
 * the frame on screen, so they stay on the ground while the camera or the units move, even on a
 * frame whose script pass runs late. Add them from a `WorldDraw` listener: the frame's list is sent
 * when the listeners return, before `PreDraw`, and starts empty on the next frame.
 *
 * Positions are world units. With an `entity` handle they are relative to that entity's origin and
 * follow it exactly; such a shape is hidden while the game has no such entity - another one that
 * took its index is not it - and on the first frame a list names it, whose origin the core starts
 * reading then. A shape with a non-finite or out-of-range argument, or past the frame's 65536
 * vertices, is skipped.
 * @example
 * Events.on("WorldDraw", () => {
 * 	WorldDraw.Ring(Vector3.Zero, hero.AttackRange, new Color(0, 0, 0, 0), Color.White, 2, hero.Handle)
 * })
 */
declare class CWorldDraw {
	/**
	 * A segment `width` pixels wide.
	 * @example
	 * WorldDraw.Line(from, to, Color.Red, 2)
	 */
	public Line(start: Vector3, end: Vector3, color: Color, width?: number, entity?: number): void
	/**
	 * Connected segments through 2 to 4096 points, `width` pixels wide; `closed` adds the segment from
	 * the last point back to the first.
	 * @example
	 * WorldDraw.Polyline(path, Color.Yellow, 3)
	 */
	public Polyline(points: readonly Vector3[], color: Color, width?: number, closed?: boolean, entity?: number): void
	/**
	 * A disc flat on the ground plane through `center`, filled with `fill` and outlined with a
	 * `strokeWidth`-pixel `stroke` centred on its edge. Perspective-correct at any camera angle.
	 * @example
	 * WorldDraw.Ring(tower.Position, 700, new Color(0, 128, 255, 40), Color.Aqua, 2)
	 */
	public Ring(center: Vector3, radius: number, fill: Color, stroke?: Color, strokeWidth?: number, entity?: number): void
	/**
	 * A filled simple polygon of 3 to 256 points, triangulated in the ground plane.
	 * @example
	 * WorldDraw.Polygon(area, new Color(255, 0, 0, 80))
	 */
	public Polygon(points: readonly Vector3[], color: Color, entity?: number): void
}
declare const WorldDraw: CWorldDraw
