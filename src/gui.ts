import {
	CameraSDK,
	Color,
	GUIInfo,
	PlayerCustomData,
	Rectangle,
	RendererSDK,
	TextFlags,
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

		const showDistance = menu.ShowDistance.value
		const isIcon = menu.ImageType.SelectedID === 1

		let size = menu.ImageSize
		if (isIcon) {
			size = showDistance ? size * 1.5 : size
		} else {
			size = showDistance ? size * 1.2 : size
		}

		const vecSize = GUIInfo.ScaleVector(size, size)
		let slot = PlayerCustomData.get(entity.PlayerID)?.TeamSlot
		if (slot === undefined) {
			slot = PlayerCustomData.get(entity.OwnerPlayerID)?.TeamSlot
		}

		const arrowColor = menu.ArrowColor(entity.Team, slot ?? -1)
		const outlineColor = menu.OutlineColor(entity.Team, slot ?? -1)
		const innerColor = menu.InnerColor(entity.Team, slot ?? -1)

		this.drawCircle(position, vecSize, innerColor)
		this.drawImage(entity, position, vecSize, showDistance, isIcon)
		this.drawDistance(entity, menu, position, vecSize, isIcon)

		this.drawArrow(position, direction, vecSize.x, arrowColor)
		this.drawCircle(position, vecSize, outlineColor, false)
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
	private drawImage(
		entity: Unit,
		position: Vector2,
		size: Vector2,
		showDistance: boolean,
		isIcon: boolean = false
	): void {
		const texture = entity.TexturePath(isIcon)
		if (texture === undefined) {
			return
		}
		if (!isIcon) {
			const pos = position.Subtract(size.DivideScalar(2))
			RendererSDK.Image(texture, pos, 0, size)
			return
		}
		const scaleFactor = showDistance ? 0.5 : 1 / 1.3
		const finalSize = size.Clone().MultiplyScalar(scaleFactor)
		const finalPos = position
			.Subtract(finalSize.DivideScalar(2))
			.Subtract(new Vector2(0, finalSize.y / 2 - 2))
		RendererSDK.Image(texture, finalPos, isIcon ? -1 : 0, finalSize)
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
	private drawCircle(
		position: Vector2,
		size: Vector2,
		color: Color,
		isFilled: boolean = true
	) {
		const vecPos = position.Subtract(size.DivideScalar(2))
		if (isFilled) {
			RendererSDK.FilledCircle(vecPos, size, color)
			return
		}
		RendererSDK.OutlinedCircle(vecPos, size, color)
	}
	private drawDistance(
		entity: Unit,
		menu: MenuManager,
		vecPos: Vector2,
		size: Vector2,
		isIcon: boolean = false
	) {
		if (!menu.ShowDistance.value) {
			return
		}
		const position = new Rectangle(
			vecPos.Subtract(size.DivideScalar(2)),
			vecPos.Add(size.DivideScalar(2))
		)
		position.Width /= 2
		position.Height /= 2
		position.AddX(position.Width / 2)
		position.AddY(position.Height / 2 + 2)

		const flags = isIcon ? TextFlags.Bottom | TextFlags.Center : TextFlags.Center
		const distance = entity.Distance(CameraSDK.Position)
		RendererSDK.TextByFlags(distance.toFixed(), position, Color.White, 2, flags, 600)
	}
}
