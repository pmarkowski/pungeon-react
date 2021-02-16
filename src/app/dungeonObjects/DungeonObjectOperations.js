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

const objectOperations = [
    new DoorOperations(),
    new LabelOperations(),
    new WallOperations(),
    new SpaceOperations(),
    new TokenOperations()
]

export const renderObject = (graphics, dungeonObject, objectIsSelected) =>
    objectOperations.filter(operation => operation.dungeonObjectType === dungeonObject.type).map(operation => operation.renderObject(graphics, dungeonObject, objectIsSelected))

export const createRenderObject = (dungeonObject) => {
    return objectOperations.filter(operation => operation.dungeonObjectType === dungeonObject.type).map(operation => operation.createRenderObject())[0]
}

export const translate = (dungeonObject, x, y) =>
    objectOperations.filter(operation => operation.dungeonObjectType === dungeonObject.type).map(operation => operation.translate(dungeonObject, x, y))

export const position = (dungeonObject) =>
    objectOperations.filter(operation => operation.dungeonObjectType === dungeonObject.type).map(operation => operation.position(dungeonObject))[0]
