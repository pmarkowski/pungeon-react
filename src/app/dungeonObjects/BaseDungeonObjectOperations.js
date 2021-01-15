import * as PIXI from 'pixi.js'

/**
 * @typedef {{ type: string, id: string }} BaseDungeonObject
 */

class BaseDungeonObjectOperations {
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
     * @param {PIXI.DisplayObject} graphics
     * @param {BaseDungeonObject} object
     * @param {boolean} objectIsSelected
     */
    renderObject(displayObject, object, isObjectSelected) {}
}
