import * as PIXI from 'pixi.js';
import { GRID_TILE_SIZE } from "../utils/constants";

export default class WallRenderer {
    renderObject(graphics, wall, objectIsSelected) {
        graphics.zIndex = 2;
        graphics.clear();
        graphics.beginFill(0x0266e6, 1);
        graphics.lineStyle(10, 0x0266e6, 1, 0.5);
        graphics.moveTo(wall.start.x * GRID_TILE_SIZE, wall.start.y * GRID_TILE_SIZE);
        graphics.lineTo(wall.end.x * GRID_TILE_SIZE, wall.end.y * GRID_TILE_SIZE);
        graphics.lineStyle();
        graphics.drawCircle(wall.start.x * GRID_TILE_SIZE, wall.start.y * GRID_TILE_SIZE, 5);
        graphics.drawCircle(wall.end.x * GRID_TILE_SIZE, wall.end.y * GRID_TILE_SIZE, 5);
        let half = 10 / 2;
        graphics.endFill();

        if (objectIsSelected) {
            graphics.tint = 0xffff33;
        }
        else {
            graphics.tint = 0xffffff;
        }
        graphics.hitArea = new PIXI.Polygon([
            wall.start.x * GRID_TILE_SIZE - half, wall.start.y * GRID_TILE_SIZE - half,
            wall.start.x * GRID_TILE_SIZE + half, wall.start.y * GRID_TILE_SIZE + half,
            wall.end.x * GRID_TILE_SIZE + half, wall.end.y * GRID_TILE_SIZE + half,
            wall.end.x * GRID_TILE_SIZE - half, wall.end.y * GRID_TILE_SIZE - half,
        ]);
    }
}
