import * as PIXI from 'pixi.js';
import { GRID_TILE_SIZE } from "../utils/constants";
import { createDungeonObject, BaseDungeonObjectOperations } from './BaseDungeonObjectOperations';

/**
 * @typedef {{
 *  start: {x: number, y: number},
 *  end: {x: number, y: number}
 * } & import('./BaseDungeonObjectOperations').BaseDungeonObject} Wall
 */

 export const WALL_TYPE = "wall"

/**
 * @returns {Wall}
 */
export const createWall = (startX, startY, endX, endY) => {
    return {
        ...createDungeonObject(WALL_TYPE),
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

export class WallOperations extends BaseDungeonObjectOperations {
    get dungeonObjectType(){ return WALL_TYPE; }

    translate(object, x, y) {
        object.start.x += x;
        object.start.y += y;
        object.end.x += x;
        object.end.y += y;
    }

    /**
     *
     * @param {PIXI.Graphics} graphics
     * @param {Wall} wall
     * @param {boolean} objectIsSelected
     */
    renderObject(graphics, wall, objectIsSelected) {
        graphics.zIndex = 2;
        graphics.clear();
        graphics.lineStyle(10, 0x0266e6, 1, 0.5);
        graphics.line.cap = PIXI.LINE_CAP.ROUND;
        graphics.moveTo(wall.start.x * GRID_TILE_SIZE, wall.start.y * GRID_TILE_SIZE);
        graphics.lineTo(wall.end.x * GRID_TILE_SIZE, wall.end.y * GRID_TILE_SIZE);
        graphics.lineStyle();
        let half = 10 / 2;
        graphics.endFill();

        if (objectIsSelected) {
            graphics.tint = 0xffff33;
        }
        else {
            graphics.tint = 0xffffff;
        }
        graphics.hitArea = this.createWallHitArea(wall, half);
    }

    createWallHitArea(wall, half) {
        if (wall.start.x === wall.end.x && wall.start.y === wall.end.y) {
            return new PIXI.Circle(
                wall.start.x * GRID_TILE_SIZE,
                wall.start.y * GRID_TILE_SIZE,
                half);
        }
        else {
            let startPoint = wall.start.x <= wall.end.x ? wall.start : wall.end;
            let endPoint = wall.start.x > wall.end.x ? wall.start : wall.end;

            let rise = endPoint.y - startPoint.y;
            let run = endPoint.x - startPoint.x;
            let slope = rise / run;
            let inverseSlope = -1 / slope;

            if (slope === 0 || inverseSlope === 0) {
                return new PIXI.Rectangle(
                    startPoint.x * GRID_TILE_SIZE - half,
                    Math.min(startPoint.y, endPoint.y) * GRID_TILE_SIZE - half,
                    run * GRID_TILE_SIZE + half * 2,
                    Math.abs(rise) * GRID_TILE_SIZE + half * 2
                )
            }

            let { xOffset, yOffset} = this.getOffsetAlongSlope(slope, half);
            let { xOffset: polygonXOffset, yOffset: polygonYOffset } = this.getOffsetAlongSlope(inverseSlope, half);

            return new PIXI.Polygon([
                startPoint.x * GRID_TILE_SIZE - xOffset - polygonXOffset, startPoint.y * GRID_TILE_SIZE - yOffset - polygonYOffset,
                startPoint.x * GRID_TILE_SIZE - xOffset + polygonXOffset, startPoint.y * GRID_TILE_SIZE - yOffset + polygonYOffset,
                endPoint.x   * GRID_TILE_SIZE + xOffset + polygonXOffset, endPoint.y   * GRID_TILE_SIZE + yOffset + polygonYOffset,
                endPoint.x   * GRID_TILE_SIZE + xOffset - polygonXOffset, endPoint.y   * GRID_TILE_SIZE + yOffset - polygonYOffset,
            ]);
        }
    }

    getOffsetAlongSlope(slope, distanceTravelledAlongSlope) {
        let slopeAngle = Math.atan(slope);
        let xOffset = Math.cos(slopeAngle) * distanceTravelledAlongSlope;
        let yOffset = Math.sin(slopeAngle) * distanceTravelledAlongSlope;
        return {
            xOffset: xOffset,
            yOffset: yOffset
        };
    }
}
