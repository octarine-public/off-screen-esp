import { Color, Team } from "github.com/octarine-public/wrapper/index"

export class Colors {
	public static readonly ArrowColors = [
		new Color(55, 24, 116), // Purple
		new Color(116, 24, 24), // Red
		new Color(116, 55, 24), // Orange
		new Color(24, 116, 116), // Aqua
		new Color(116, 24, 116), // Fuchsia
		new Color(200, 200, 200), // White
		new Color(24, 24, 116), // Blue
		new Color(44, 105, 44) // Green
	]
	public static readonly OutlineColors = [
		new Color(29, 28, 55), // Purple
		new Color(55, 28, 28), // Red
		new Color(55, 28, 29), // Orange
		new Color(28, 55, 55), // Aqua
		new Color(55, 29, 55), // Fuchsia
		new Color(100, 100, 100), // White
		new Color(28, 28, 55), // Blue
		new Color(28, 55, 28) // Green
	]
	public static readonly InnerColors = [
		new Color(29, 28, 55, 180), // Purple
		new Color(55, 28, 28, 180), // Red
		new Color(55, 28, 29, 180), // Orange
		new Color(28, 55, 55, 180), // Aqua
		new Color(55, 29, 55, 180), // Fuchsia
		new Color(100, 100, 100, 180), // White
		new Color(28, 28, 55, 180), // Blue
		new Color(28, 55, 28, 180) // Green
	]

	private static readonly direArrow: Color[] = Color.PlayerColorDire
	private static readonly radiantArrow: Color[] = Color.PlayerColorRadiant

	private static readonly direOutline: Color[] = this.direArrow.map(
		c => new Color(this.darken(c.r), this.darken(c.g), this.darken(c.b))
	)
	private static readonly direInner: Color[] = this.direOutline.map(
		c => new Color(c.r, c.g, c.b, 180)
	)
	private static readonly radiantOutline: Color[] = this.radiantArrow.map(
		c => new Color(this.darken(c.r), this.darken(c.g), this.darken(c.b))
	)
	private static readonly radiantInner: Color[] = this.radiantOutline.map(
		c => new Color(c.r, c.g, c.b, 180)
	)
	private static darken(c: number): number {
		return Math.max(0, Math.floor(c * 0.45))
	}
	protected static DireArrow(slot: number): Color {
		return this.direArrow[slot]
	}
	protected static DireOutline(slot: number): Color {
		return this.direOutline[slot]
	}
	protected static DireInner(slot: number): Color {
		return this.direInner[slot]
	}
	protected static RadiantArrow(slot: number): Color {
		return this.radiantArrow[slot]
	}
	protected static RadiantOutline(slot: number): Color {
		return this.radiantOutline[slot]
	}
	protected static RadiantInner(slot: number): Color {
		return this.radiantInner[slot]
	}
	public static Arrow(team: Team, slot: number) {
		if (slot === -1) {
			return this.ArrowColors[1] // red
		}
		return team === Team.Radiant ? this.RadiantArrow(slot) : this.DireArrow(slot)
	}
	public static Outline(team: Team, slot: number) {
		if (slot === -1) {
			return this.OutlineColors[1] // red
		}
		return team === Team.Radiant ? this.RadiantOutline(slot) : this.DireOutline(slot)
	}
	public static Inner(team: Team, slot: number) {
		if (slot === -1) {
			return this.InnerColors[1] // red
		}
		return team === Team.Radiant ? this.RadiantInner(slot) : this.DireInner(slot)
	}
}
