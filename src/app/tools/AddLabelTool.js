import { GRID_TILE_SIZE } from "../utils/constants";
import { addObject } from "../reducers/dungeonActions";
import { createLabel } from "../dungeonObjects/LabelOperations";

export default class AddLabelTool {
    onMouseUp(store) {
        let state = store.getState();
        let mousePoint = state.editor.mouse.currentPosition;
        let dungeonSpaceX = mousePoint.x / GRID_TILE_SIZE;
        let dungeonSpaceY = mousePoint.y / GRID_TILE_SIZE;
        store.dispatch(addObject(createLabel(dungeonSpaceX, dungeonSpaceY, "Text Label")));
    }

    renderTool(state, graphics) {
    }
}
