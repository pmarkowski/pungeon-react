import TOOL_TYPE from "./toolType";
import AddDoorTool from "./AddDoorTool";
import AddWallTool from "./AddWallTool";
import AddSpaceTool from "./AddSpaceTool";
import SelectTool from "./SelectTool";

const toolMap = {
    [TOOL_TYPE.NEW_DOOR]: new AddDoorTool(),
    [TOOL_TYPE.NEW_SPACE]: new AddSpaceTool(),
    [TOOL_TYPE.NEW_WALL]: new AddWallTool(),
    [TOOL_TYPE.SELECT]: new SelectTool()
}

export const onMouseUp = (store) => {
    let state = store.getState();
    toolMap[state.selectedTool].onMouseUp(store);
}

export const renderTool = (state, graphics) => {
    toolMap[state.selectedTool].renderTool(state, graphics);
}
