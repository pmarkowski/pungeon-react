import DUNGEON_OBJECT_TYPE from "../utils/dungeonObjectTypes";
import DoorRenderer from "./DoorRenderer";
import LabelRenderer from "./LabelRenderer";
import WallRenderer from "./WallRenderer";

const rendererMap = {
    [DUNGEON_OBJECT_TYPE.DOOR]: new DoorRenderer(),
    [DUNGEON_OBJECT_TYPE.LABEL]: new LabelRenderer(),
    [DUNGEON_OBJECT_TYPE.WALL]: new WallRenderer()
}

export const renderObject = (graphics, dungeonObject, objectIsSelected) => {
    rendererMap[dungeonObject.type].renderObject(graphics, dungeonObject, objectIsSelected);
}
