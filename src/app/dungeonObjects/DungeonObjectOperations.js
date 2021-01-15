import DUNGEON_OBJECT_TYPE from "./dungeonObjectTypes";
import { DoorOperations } from "./DoorOperations";
import { LabelOperations } from "./LabelOperations";
import { WallOperations } from "./WallOperations";
import { SpaceOperations } from "./SpaceOperations";
import { TokenOperations } from "./TokenOperations";

/**
 * @typedef { import("./DoorOperations").Door
 * | import("./LabelOperations").Label
 * | import("./WallOperations").Wall
 * | import("./SpaceOperations").Space
 * | import("./TokenOperations").Token} DungeonObject
 */

const objectOperationsMap = {
    [DUNGEON_OBJECT_TYPE.DOOR]: new DoorOperations(),
    [DUNGEON_OBJECT_TYPE.LABEL]: new LabelOperations(),
    [DUNGEON_OBJECT_TYPE.WALL]: new WallOperations(),
    [DUNGEON_OBJECT_TYPE.SPACE]: new SpaceOperations(),
    [DUNGEON_OBJECT_TYPE.TOKEN]: new TokenOperations()
}

export const renderObject = (graphics, dungeonObject, objectIsSelected) => {
    objectOperationsMap[dungeonObject.type].renderObject(graphics, dungeonObject, objectIsSelected);
}

export const createRenderObject = (dungeonObject) =>
    objectOperationsMap[dungeonObject.type].createRenderObject()

export const translate = (dungeonObject, x, y) =>
    objectOperationsMap[dungeonObject.type].translate(dungeonObject, x, y)
