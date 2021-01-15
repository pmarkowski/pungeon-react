import { GRID_TILE_SIZE } from "../utils/constants";
import GraphicsDungeonObjectOperations from './GraphicsDungeonObjectOperations';

/**
 * @typedef {{
 *  position: {x: number, y: number},
 *  size: {width: number, height: number }
 * } & import("./BaseDungeonObjectOperations").BaseDungeonObject} RectangularSpace
 * @typedef {{
 *  points: {x: number, y: number}[]
 * } & import("./BaseDungeonObjectOperations").BaseDungeonObject} PolygonalSpace
 * @typedef {RectangularSpace | PolygonalSpace} Space
 */

export class SpaceOperations extends GraphicsDungeonObjectOperations {
    translate(object, x, y) {
        if (object.position) {
            object.position.x += x;
            object.position.y += y;
        }
        else {
            object.points.forEach(point => {
                point.x += x;
                point.y += y;
            });
        }
    }

    renderObject(graphics, space, objectIsSelected) {
        graphics.clear();
        graphics.beginFill(0xd6d5d5);
        if (space.position && space.size) {
            graphics.drawRect(
                space.position.x * GRID_TILE_SIZE,
                space.position.y * GRID_TILE_SIZE,
                space.size.width * GRID_TILE_SIZE,
                space.size.height * GRID_TILE_SIZE);
            graphics.endFill();
        }
        else {
            let firstPoint = space.points[0];
            graphics.moveTo(firstPoint.x * GRID_TILE_SIZE, firstPoint.y * GRID_TILE_SIZE);
            for (let index = 0; index < space.points.length; index++) {
                const point = space.points[index];
                graphics.lineTo(point.x * GRID_TILE_SIZE, point.y * GRID_TILE_SIZE);
            }
            graphics.endFill();
        }

        if (objectIsSelected) {
            graphics.tint = 0xffffcc;
        }
        else {
            graphics.tint = 0xffffff;
        }
    }
}
