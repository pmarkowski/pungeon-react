import * as PIXI from 'pixi.js';
import { GRID_TILE_SIZE } from "../utils/constants";
import { createDungeonObject } from './BaseDungeonObjectOperations';
import DUNGEON_OBJECT_TYPE from './dungeonObjectTypes';
import GraphicsDungeonObjectOperations from './GraphicsDungeonObjectOperations';

/**
 * @typedef {{
 *  start: {x: number, y: number},
 *  end: {x: number, y: number}
 * } & import('./BaseDungeonObjectOperations').BaseDungeonObject} Door
 */

/**
 * @returns {Door}
 */
export const createDoor = (startX, startY, endX, endY) => {
    return {
        ...createDungeonObject(DUNGEON_OBJECT_TYPE.DOOR),
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

export class DoorOperations extends GraphicsDungeonObjectOperations {
    get dungeonObjectType(){ return DUNGEON_OBJECT_TYPE.DOOR; }

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
}
