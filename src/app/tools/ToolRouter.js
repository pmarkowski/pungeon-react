import AddDoorTool from "./AddDoorTool";
import AddLabelTool from "./AddLabelTool";
import AddSpaceRectangleTool from "./AddSpaceRectangleTool";
import AddWallTool from "./AddWallTool";
import SelectTool from "./SelectTool";
import TOOL_TYPE from "./toolType";
import AddSpacePolygonTool from "./AddSpacePolygonTool";
import AddTokenTool from "./AddTokenTool";

const toolMap = {
    [TOOL_TYPE.NEW_DOOR]: new AddDoorTool(),
    [TOOL_TYPE.NEW_SPACE_RECTANGLE]: new AddSpaceRectangleTool(),
    [TOOL_TYPE.NEW_SPACE_POLYGON]: new AddSpacePolygonTool(),
    [TOOL_TYPE.NEW_WALL]: new AddWallTool(),
    [TOOL_TYPE.SELECT]: new SelectTool(),
    [TOOL_TYPE.NEW_LABEL]: new AddLabelTool(),
    [TOOL_TYPE.NEW_TOKEN]: new AddTokenTool()
}

export const onMouseUp = (store) => {
    let state = store.getState();
    toolMap[state.selectedTool].onMouseUp(store);
}

export const renderTool = (state, graphics) => {
    toolMap[state.selectedTool].renderTool(state, graphics);
}
