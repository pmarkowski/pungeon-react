import { GRID_TILE_SIZE } from "../utils/constants";
import { addObject } from "../reducers/dungeonActions";
import { createSpace } from "../dungeonObjects/SpaceOperations";

export default class AddSpaceRectangleTool {

    onMouseUp(store) {
        let state = store.getState();
        let mousePoint = state.editor.mouse.currentPosition;
        let startX = Math.floor(Math.min(state.editor.mouse.startPosition.x, mousePoint.x) / GRID_TILE_SIZE);
        let startY = Math.floor(Math.min(state.editor.mouse.startPosition.y, mousePoint.y) / GRID_TILE_SIZE);
        let endX = Math.ceil(Math.max(state.editor.mouse.startPosition.x, mousePoint.x) / GRID_TILE_SIZE);
        let endY = Math.ceil(Math.max(state.editor.mouse.startPosition.y, mousePoint.y) / GRID_TILE_SIZE);
        store.dispatch(addObject(createSpace({ startX, startY, endX, endY})));
    }

    renderTool(state, graphics) {
        let mousePoint = state.editor.mouse.currentPosition;
        let snappedX, snappedY, width, height;
        if (state.editor.mouse.mouseDown) {
            let startX = Math.min(state.editor.mouse.startPosition.x, mousePoint.x);
            let startY = Math.min(state.editor.mouse.startPosition.y, mousePoint.y);
            let endX = Math.max(state.editor.mouse.startPosition.x, mousePoint.x);
            let endY = Math.max(state.editor.mouse.startPosition.y, mousePoint.y);
            snappedX = Math.floor(startX / GRID_TILE_SIZE) * GRID_TILE_SIZE;
            snappedY = Math.floor(startY / GRID_TILE_SIZE) * GRID_TILE_SIZE;
            endX = Math.floor(endX / GRID_TILE_SIZE) * GRID_TILE_SIZE + GRID_TILE_SIZE;
            endY = Math.floor(endY / GRID_TILE_SIZE) * GRID_TILE_SIZE + GRID_TILE_SIZE;
            width = endX - snappedX;
            height = endY - snappedY;
        }
        else {
            // snap to nearest grid point
            // for now for simplicity let's say top left
            snappedX = Math.floor(mousePoint.x / GRID_TILE_SIZE) * GRID_TILE_SIZE;
            snappedY = Math.floor(mousePoint.y / GRID_TILE_SIZE) * GRID_TILE_SIZE;
            width = GRID_TILE_SIZE;
            height = GRID_TILE_SIZE;
        }
        // draw a hover rect
        graphics.beginFill(0, 0);
        graphics.lineStyle(1, 0xfffd00);
        graphics.drawRect(snappedX, snappedY, width, height);
        graphics.endFill();
    }
}
