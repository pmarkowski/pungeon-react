import DUNGEON_OBJECT_TYPE from "../utils/dungeonObjectTypes"
import { SpaceOperations } from "./Space"

/**
 * @typedef {{ type: string, id: string }} BaseDungeonObject
 */

/**
 * @typedef {import("./Space").Space} DungeonObject
 */
const objectOperationMap = {
    [DUNGEON_OBJECT_TYPE.SPACE]: SpaceOperations
}

/**
 *
 * @param {BaseDungeonObject} object
 * @param {number} x
 * @param {number} y
 */
const translate = (object, x, y) => {
    return objectOperationMap[object.type].translate(object, x, y);
}

/**
 *
 * @param {PIXI.Graphics} graphics
 * @param {BaseDungeonObject} object
 * @param {boolean} objectIsSelected
 */
const renderObject = (graphics, object, objectIsSelected) => {
    objectOperationMap[object.type].renderObject(graphics, object, objectIsSelected);
}

export const DungeonObjectOperations = {
    translate,
    renderObject
}

