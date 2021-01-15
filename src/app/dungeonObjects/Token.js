/**
 * @typedef {{
 *  textureUrl: string,
 *  position: {x: number, y: number},
 *  size: {width: number, height: number}
 *  angle: number
 * } & import("./DungeonObject").BaseDungeonObject} Token
 */

/**
 * @param {Token} object
 * @param {number} x
 * @param {number} y
 */
const translate = (object, x, y) => {
    object.position.x += x;
    object.position.y += y;
}

/**
 * @param {PIXI.Graphics} graphics
 * @param {Token} object
 * @param {boolean} objectIsSelected
 */
const renderObject = (graphics, object, objectIsSelected) => { }

export const TokenOperations = {
    translate,
    renderObject
}
