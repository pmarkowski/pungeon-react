import * as PIXI from 'pixi.js';
import { v4 as uuid } from 'uuid';
import { startOperation } from '../reducers/editorActions';
import store from '../store';
import OPERATION_TYPE from '../tools/operationType';

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
        if (isObjectSelected) {
            displayObject.cursor = "move"
            displayObject.mousedown = () => {
                store.dispatch(startOperation(OPERATION_TYPE.MOVE));
            };
        }
        else {
            displayObject.cursor = "default"
            // clear drag movement operation handler
            displayObject.mousedown = undefined;
        }
    }
}
