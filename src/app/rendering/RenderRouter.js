import DUNGEON_OBJECT_TYPE from "../utils/dungeonObjectTypes";
import DoorRenderer from "./DoorRenderer";

const rendererMap = {
    [DUNGEON_OBJECT_TYPE.DOOR]: new DoorRenderer()
}

export const renderObject = (graphics, dungeonObject, objectIsSelected) => {
    rendererMap[dungeonObject.type].renderObject(graphics, dungeonObject, objectIsSelected);
}
