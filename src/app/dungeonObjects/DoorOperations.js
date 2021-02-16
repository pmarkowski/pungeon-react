import * as PIXI from 'pixi.js';
import { GRID_TILE_SIZE } from "../utils/constants";
import { createDungeonObject, BaseDungeonObjectOperations } from './BaseDungeonObjectOperations';

/**
 * @typedef {{
 *  start: {x: number, y: number},
 *  end: {x: number, y: number}
 * } & import('./BaseDungeonObjectOperations').BaseDungeonObject} Door
 */

export const DOOR_TYPE = "door"

/**
 * @returns {Door}
 */
export const createDoor = (startX, startY, endX, endY) => {
    return {
        ...createDungeonObject(DOOR_TYPE),
        start: {
            x: startX,
            y: startY
        },
        end: {
            x: endX,
            y: endY
        }
    }
}

export class DoorOperations extends BaseDungeonObjectOperations {
    get dungeonObjectType(){ return DOOR_TYPE; }

    translate(object, x, y) {
        object.start.x += x;
        object.start.y += y;
        object.end.x += x;
        object.end.y += y;
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

    /**
     * @param {Door} door
     */
    position(door) {
        return {
            x: Math.min(door.start.x, door.end.x),
            y: Math.min(door.start.y, door.end.y)
        };
    }
}
