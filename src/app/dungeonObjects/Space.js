/**
 * @typedef {{
 *  position: {x: number, y: number},
 *  size: {width: number, height: number }
 * } & import("./DungeonObject").BaseDungeonObject} RectangularSpace
 * @typedef {{
 *  points: {x: number, y: number}[]
 * } & import("./DungeonObject").BaseDungeonObject} PolygonalSpace
 * @typedef {RectangularSpace | PolygonalSpace} Space
 */

/**
 * @param {Space} object
 * @param {number} x
 * @param {number} y
 */
const translate = (object, x, y) => {
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
 * @param {PIXI.Graphics} graphics
 * @param {Space} object
 * @param {boolean} objectIsSelected
 */
const renderObject = (graphics, object, objectIsSelected) => {}

export const SpaceOperations = {
    translate,
    renderObject
}
