import DUNGEON_OBJECT_TYPE from "../utils/dungeonObjectTypes";
import DoorRenderer from "./DoorRenderer";
import LabelRenderer from "./LabelRenderer";
import WallRenderer from "./WallRenderer";
import SpaceRenderer from "./SpaceRenderer";

const rendererMap = {
    [DUNGEON_OBJECT_TYPE.DOOR]: new DoorRenderer(),
    [DUNGEON_OBJECT_TYPE.LABEL]: new LabelRenderer(),
    [DUNGEON_OBJECT_TYPE.WALL]: new WallRenderer(),
    [DUNGEON_OBJECT_TYPE.SPACE]: new SpaceRenderer()
}

export const renderObject = (graphics, dungeonObject, objectIsSelected) => {
    rendererMap[dungeonObject.type].renderObject(graphics, dungeonObject, objectIsSelected);
}
