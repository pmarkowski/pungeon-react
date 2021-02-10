import * as PIXI from 'pixi.js';
import { v4 as uuid } from 'uuid';

/**
 * @typedef {{ type: string, id: string }} BaseDungeonObject
 */

/**
 * @returns {BaseDungeonObject}
 */
export const createDungeonObject = (dungeonObjectType) => ({
    id: uuid(),
    type: dungeonObjectType
})

export class BaseDungeonObjectOperations {
    get dungeonObjectType() { return null; }

    /**
     * @param {BaseDungeonObject} object
     * @param {number} x
     * @param {number} y
     */
    translate(object, x, y) {}

    createRenderObject() {
        return new PIXI.Graphics();
    }

    /**
     * @param {PIXI.DisplayObject} displayObject
     * @param {BaseDungeonObject} object
     * @param {boolean} objectIsSelected
     */
    renderObject(displayObject, object, isObjectSelected) {
        // Is this necessary in any way? Can this behaviour be moved to the tool itself?
        // and just have it set the dungeon objects to have the move cursor when the tool becomes "active"
        // if (isObjectSelected) {
        //     displayObject.cursor = "move"
        // }
        // else {
        //     displayObject.cursor = "default"
        // }
    }
}
