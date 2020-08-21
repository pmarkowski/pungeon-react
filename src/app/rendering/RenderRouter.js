import DUNGEON_OBJECT_TYPE from "../utils/dungeonObjectTypes";
import DoorRenderer from "./DoorRenderer";
import LabelRenderer from "./LabelRenderer";

const rendererMap = {
    [DUNGEON_OBJECT_TYPE.DOOR]: new DoorRenderer(),
    [DUNGEON_OBJECT_TYPE.LABEL]: new LabelRenderer()
}

export const renderObject = (graphics, dungeonObject, objectIsSelected) => {
    rendererMap[dungeonObject.type].renderObject(graphics, dungeonObject, objectIsSelected);
}
