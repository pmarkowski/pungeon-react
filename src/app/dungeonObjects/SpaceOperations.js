import { GRID_TILE_SIZE } from "../utils/constants";
import { createDungeonObject, BaseDungeonObjectOperations } from './BaseDungeonObjectOperations';
import { v4 as uuid } from 'uuid';

/**
 * @typedef {{
 *  position: {x: number, y: number},
 *  size: {width: number, height: number }
 * } & import("./BaseDungeonObjectOperations").BaseDungeonObject} RectangularSpace
 * @typedef {{
 *  points: {id: string, x: number, y: number}[]
 * } & import("./BaseDungeonObjectOperations").BaseDungeonObject} PolygonalSpace
 * @typedef {RectangularSpace | PolygonalSpace} Space
 */

export const SPACE_TYPE = "space"

/**
 *
 * @param {Array<points>} points
 */
const createPoints = (points) =>
    points.map(point => ({
        id: uuid(),
        x: point.x,
        y: point.y
    }))

/**
 * @returns {Space}
 */
export const createSpace = ({points, startX, startY, endX, endY}) => {
    if (points) {
        return {
            ...createDungeonObject(SPACE_TYPE),
            points: createPoints(points)
        }
    }
    else {
        return {
            ...createDungeonObject(SPACE_TYPE),
            position: {
                x: startX,
                y: startY
            },
            size: {
                width: endX - startX,
                height: endY - startY
            }
        }
    }
}

export class SpaceOperations extends BaseDungeonObjectOperations {
    get dungeonObjectType() { return SPACE_TYPE; }

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

    /**
     * @param {Space} space
     */
    position(space) {
        if (space.position) {
            return space.position;
        }
        else {
            return {
                x: Math.min(...space.points.map(point => point.x)),
                y: Math.min(...space.points.map(point => point.y))
            }
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
