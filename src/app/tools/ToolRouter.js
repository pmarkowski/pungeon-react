import AddDoorTool from "./AddDoorTool";
import AddLabelTool from "./AddLabelTool";
import AddSpaceRectangleTool from "./AddSpaceRectangleTool";
import AddWallTool from "./AddWallTool";
import SelectTool from "./SelectTool";
import TOOL_TYPE from "./toolType";
import AddSpacePolygonTool from "./AddSpacePolygonTool";
import AddTokenTool from "./AddTokenTool";
import OPERATION_TYPE from "./operationType";
import MoveOperation from "./MoveOperation";

const operationMap = {
    [OPERATION_TYPE.MOVE]: new MoveOperation(),
}

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
    /** @type {import("../reducers").State} */
    let state = store.getState();
    if (state.editor.activeOperationType) {
        operationMap[state.editor.activeOperationType].onMouseUp(store);
    }
    else {
        toolMap[state.editor.selectedTool].onMouseUp(store);
    }
}

export const renderTool = (state, graphics) => {
    if (state.editor.activeOperationType) {
        operationMap[state.editor.activeOperationType].renderOperation(state, graphics);
    }
    else {
        toolMap[state.editor.selectedTool].renderTool(state, graphics);
    }
}
