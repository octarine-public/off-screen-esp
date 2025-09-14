import {
	CameraSDK,
	Color,
	GUIInfo,
	PlayerCustomData,
	Rectangle,
	RendererSDK,
	Unit,
	Vector2
} from "github.com/octarine-public/wrapper/index"

import { MenuManager } from "./menu"

export class GUI {
	public Draw(menu: MenuManager): Rectangle {
		const screenSize = RendererSDK.WindowSize
		const center = screenSize.DivideScalar(2)
		const size = screenSize
			.Multiply(new Vector2(menu.Size, menu.Size * 0.7))
			.DivideScalar(2)
			.RoundForThis()
		const position = new Rectangle(center.Subtract(size), center.Add(size))
		if (menu.IsOpen) {
			this.drawEllipse(position, Color.Aqua)
		}
		return position
	}
	public DrawEntity(entity: Unit, menu: MenuManager, ellipseRect: Rectangle) {
		if (entity.Distance(CameraSDK.Position) > menu.MaxDistance) {
			return
		}
		const w2s = RendererSDK.WorldToScreen(entity.Position, false)
		if (w2s === undefined || this.isInScreen(w2s)) {
			return
		}
		const center = ellipseRect.Center
		const halfSize = ellipseRect.Size.DivideScalar(2).RoundForThis()
		const relative = w2s.Subtract(center).DivideForThis(halfSize)
		const direction = Vector2.FromAngle(relative.Angle)
		const position = center.AddForThis(direction.Multiply(halfSize))

		const size = menu.ImageSize
		const vecSize = GUIInfo.ScaleVector(size, size)

		let slot = PlayerCustomData.get(entity.PlayerID)?.TeamSlot
		if (slot === undefined) {
			slot = PlayerCustomData.get(entity.OwnerPlayerID)?.TeamSlot
		}

		const arrowColor = menu.ArrowColor(entity.Team, slot ?? -1)
		const outlineColor = menu.OutlineColor(entity.Team, slot ?? -1)
		const innerColor = menu.InnerColor(entity.Team, slot ?? -1)

		this.drawInner(position, vecSize, innerColor)
		this.drawImage(entity, position, vecSize, menu.ImageType.SelectedID === 1)

		this.drawArrow(position, direction, vecSize.x, arrowColor)
		this.drawOutline(position, vecSize, outlineColor)
	}
	private isInScreen(w2s: Vector2) {
		return (
			!GUIInfo.ContainsMiniMap(w2s) &&
			!GUIInfo.ContainsLowerHUD(w2s) &&
			RendererSDK.IsInScreenArea(w2s, 0.9)
		)
	}
	private drawEllipse(rect: Rectangle, color: Color) {
		RendererSDK.OutlinedCircle(rect.pos1, rect.Size, color)
	}
	private drawOutline(position: Vector2, size: Vector2, color: Color) {
		const vecPos = position.Subtract(size.DivideScalar(2))
		RendererSDK.OutlinedCircle(vecPos, size, color)
	}
	private drawInner(position: Vector2, size: Vector2, color: Color) {
		const vecPos = position.Subtract(size.DivideScalar(2))
		RendererSDK.FilledCircle(vecPos, size, color)
	}
	private drawImage(
		entity: Unit,
		position: Vector2,
		vecSize: Vector2,
		isIcon: boolean = false
	) {
		const texture = entity.TexturePath(isIcon)
		if (texture === undefined) {
			return
		}
		const size = !isIcon ? vecSize : vecSize.Clone().DivideScalar(1.3).RoundForThis()
		RendererSDK.Image(texture, position.Subtract(size.DivideScalar(2)), 0, size)
	}
	private drawArrow(center: Vector2, dir: Vector2, imageWidth: number, color: Color) {
		const triWidth = imageWidth * 0.5
		const triLength = imageWidth * 0.25
		const triOffset = imageWidth / 2 - 0.5 // -1 offset to avoid clipping

		const perp = dir.Rotated(Math.PI / 2) // equivalent to Vector2(0, -1)
		const triCenter = center.Add(dir.MultiplyScalar(triOffset))
		const p1 = triCenter.Add(dir.MultiplyScalar(triLength))
		const p2 = triCenter.Add(perp.MultiplyScalar(triWidth / 2).RoundForThis())
		const p3 = triCenter.Subtract(perp.MultiplyScalar(triWidth / 2).RoundForThis())

		RendererSDK.TriangleFilled(p1, p2, p3, color)
	}
}
