/**
 * @typedef {{
 *  position: {x: number, y: number},
 *  label: string
 * } & import("./DungeonObject").BaseDungeonObject} Label
 */

/**
 * @param {Label} object
 * @param {number} x
 * @param {number} y
 */
const translate = (object, x, y) => {
    object.position.x += x;
    object.position.y += y;
}

/**
 * @param {PIXI.Graphics} graphics
 * @param {Label} object
 * @param {boolean} objectIsSelected
 */
const renderObject = (graphics, object, objectIsSelected) => { }

export const LabelOperations = {
    translate,
    renderObject
}
