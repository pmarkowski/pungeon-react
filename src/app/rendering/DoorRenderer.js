import * as PIXI from 'pixi.js';
import { GRID_TILE_SIZE } from "../utils/constants";

export default class DoorRenderer {
    createRenderObject() {
        return new PIXI.Graphics();
    }

    renderObject(graphics, door, objectIsSelected) {
        graphics.zIndex = 3;
        graphics.clear();
        graphics.beginFill(0x002b56, 1);
        graphics.lineStyle(20, 0x002b56, 1, 0.5);
        graphics.moveTo(door.start.x * GRID_TILE_SIZE, door.start.y * GRID_TILE_SIZE);
        graphics.lineTo(door.end.x * GRID_TILE_SIZE, door.end.y * GRID_TILE_SIZE);
        graphics.lineStyle();
        let half = 20 / 2;
        graphics.endFill();

        if (objectIsSelected) {
            graphics.tint = 0xffff33;
        }
        else {
            graphics.tint = 0xffffff;
        }
        graphics.hitArea = new PIXI.Polygon([
            door.start.x * GRID_TILE_SIZE - half, door.start.y * GRID_TILE_SIZE - half,
            door.start.x * GRID_TILE_SIZE + half, door.start.y * GRID_TILE_SIZE + half,
            door.end.x * GRID_TILE_SIZE + half, door.end.y * GRID_TILE_SIZE + half,
            door.end.x * GRID_TILE_SIZE - half, door.end.y * GRID_TILE_SIZE - half,
        ]);
    }
}
