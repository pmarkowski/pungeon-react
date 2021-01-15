/**
 * @typedef {{
 *  start: {x: number, y: number},
 *  end: {x: number, y: number}
 * } & import("./DungeonObject").BaseDungeonObject} Wall
 */

/**
 * @param {Wall} object
 * @param {number} x
 * @param {number} y
 */
const translate = (object, x, y) => {
    object.start.x += x;
    object.start.y += y;
    object.end.x += x;
    object.end.y += y;
}

/**
 * @param {PIXI.Graphics} graphics
 * @param {Wall} object
 * @param {boolean} objectIsSelected
 */
const renderObject = (graphics, object, objectIsSelected) => { }

export const WallOperations = {
    translate,
    renderObject
}
