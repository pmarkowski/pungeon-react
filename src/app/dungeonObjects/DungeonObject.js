import DUNGEON_OBJECT_TYPE from "../utils/dungeonObjectTypes"
import { DoorOperations } from "./Door";
import { LabelOperations } from "./Label";
import { SpaceOperations } from "./Space"
import { TokenOperations } from "./Token";
import { WallOperations } from "./Wall";

/**
 * @typedef {{ type: string, id: string }} BaseDungeonObject
 */

/**
 * @typedef {import("./Space").Space} DungeonObject
 */
const objectOperationMap = {
    [DUNGEON_OBJECT_TYPE.SPACE]: SpaceOperations,
    [DUNGEON_OBJECT_TYPE.WALL]: WallOperations,
    [DUNGEON_OBJECT_TYPE.DOOR]: DoorOperations,
    [DUNGEON_OBJECT_TYPE.LABEL]: LabelOperations,
    [DUNGEON_OBJECT_TYPE.TOKEN]: TokenOperations
}

/**
 * @param {BaseDungeonObject} object
 * @param {number} x
 * @param {number} y
 */
const translate = (object, x, y) => {
    return objectOperationMap[object.type].translate(object, x, y);
}

/**
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

