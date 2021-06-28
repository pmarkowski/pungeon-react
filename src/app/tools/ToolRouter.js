import AddDoorTool from "./AddDoorTool";
import AddLabelTool from "./AddLabelTool";
import AddSpacePolygonTool from "./AddSpacePolygonTool";
import AddSpaceRectangleTool from "./AddSpaceRectangleTool";
import AddTokenTool from "./AddTokenTool";
import AddWallTool from "./AddWallTool";
import EditPointsTool from "./EditPointsTool";
import SelectTool from "./SelectTool";
import TOOL_TYPE from "./toolType";

const toolMap = {
    [TOOL_TYPE.NEW_DOOR]: new AddDoorTool(),
    [TOOL_TYPE.NEW_SPACE_RECTANGLE]: new AddSpaceRectangleTool(),
    [TOOL_TYPE.NEW_SPACE_POLYGON]: new AddSpacePolygonTool(),
    [TOOL_TYPE.NEW_WALL]: new AddWallTool(),
    [TOOL_TYPE.SELECT]: new SelectTool(),
    [TOOL_TYPE.NEW_LABEL]: new AddLabelTool(),
    [TOOL_TYPE.NEW_TOKEN]: new AddTokenTool(),
    [TOOL_TYPE.EDIT_POINTS]: new EditPointsTool()
}

export const onMouseDown = (store, app) => {
    let state = store.getState();
    toolMap[state.editor.selectedTool].onMouseDown?.(store, app);
}

export const onMouseUp = (store, app) => {
    /** @type {import("../reducers").State} */
    let state = store.getState();
    toolMap[state.editor.selectedTool].onMouseUp(store, app);
}

export const renderTool = (state, graphics) => {
    toolMap[state.editor.selectedTool].renderTool(state, graphics);
}
