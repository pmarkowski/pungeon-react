import { selectTool, setSelectedObjectPosition, setSelectedObjectSize } from "../reducers/dungeonReducer";
import TOOL_TYPE from "./toolType";
import { GRID_TILE_SIZE } from "../utils/constants";
import { RESIZE_HANDLE_PADDING } from "../rendering/SpaceRenderer";

export default class ResizeTool {
    onMouseUp(store) {

        let state = store.getState();

        let selectedObject = state.dungeon.objects
            .find(object => object.id === state.selectedObject);

        let mousePoint = state.editor.mouse.dungeonPosition;
        // The mouse point gets offset by RESIZE_HANDLE_PADDING in order to
        // have a smoother resize experience. Otherwise the size tends to snap
        // somewhere weird when you start dragging.
        // TODO: Consider designing this out. Kind of leaking information about
        // rendering to the tool implementation... But may be hard to get away
        // from that.
        let snappedX, snappedY, width, height;
        let startX = Math.min(selectedObject.position.x * GRID_TILE_SIZE, mousePoint.x - RESIZE_HANDLE_PADDING - 5);
        let startY = Math.min(selectedObject.position.y * GRID_TILE_SIZE, mousePoint.y - RESIZE_HANDLE_PADDING - 5);
        let endX = Math.max(selectedObject.position.x * GRID_TILE_SIZE, mousePoint.x - RESIZE_HANDLE_PADDING - 5);
        let endY = Math.max(selectedObject.position.y * GRID_TILE_SIZE, mousePoint.y - RESIZE_HANDLE_PADDING - 5);
        snappedX = Math.floor(startX / GRID_TILE_SIZE) * GRID_TILE_SIZE;
        snappedY = Math.floor(startY / GRID_TILE_SIZE) * GRID_TILE_SIZE;
        endX = Math.floor(endX / GRID_TILE_SIZE) * GRID_TILE_SIZE + GRID_TILE_SIZE;
        endY = Math.floor(endY / GRID_TILE_SIZE) * GRID_TILE_SIZE + GRID_TILE_SIZE;
        width = endX - snappedX;
        height = endY - snappedY;

        store.dispatch(setSelectedObjectPosition(snappedX / GRID_TILE_SIZE, snappedY / GRID_TILE_SIZE));
        store.dispatch(setSelectedObjectSize(width / GRID_TILE_SIZE, height / GRID_TILE_SIZE));

        // officially resize? Clear tool? Drop back to select?
        store.dispatch(selectTool(TOOL_TYPE.SELECT));
    }

    /**
     * @param {*} state
     * @param {PIXI.Graphics} graphics
     */
    renderTool(state, graphics) {
        // Render a preview of the resized space? Just resize the gosh darn space?
        // :O I can't alter state while rendering...
        // it's fine.
        // draw a rect from selected room position down to the new size
        let selectedObject = state.dungeon.objects
            .find(object => object.id === state.selectedObject);

        let mousePoint = state.editor.mouse.dungeonPosition;
        let snappedX, snappedY, width, height;
        let startX = Math.min(selectedObject.position.x * GRID_TILE_SIZE, mousePoint.x - RESIZE_HANDLE_PADDING - 5);
        let startY = Math.min(selectedObject.position.y * GRID_TILE_SIZE, mousePoint.y - RESIZE_HANDLE_PADDING - 5);
        let endX = Math.max(selectedObject.position.x * GRID_TILE_SIZE, mousePoint.x - RESIZE_HANDLE_PADDING - 5);
        let endY = Math.max(selectedObject.position.y * GRID_TILE_SIZE, mousePoint.y - RESIZE_HANDLE_PADDING - 5);
        snappedX = Math.floor(startX / GRID_TILE_SIZE) * GRID_TILE_SIZE;
        snappedY = Math.floor(startY / GRID_TILE_SIZE) * GRID_TILE_SIZE;
        endX = Math.floor(endX / GRID_TILE_SIZE) * GRID_TILE_SIZE + GRID_TILE_SIZE;
        endY = Math.floor(endY / GRID_TILE_SIZE) * GRID_TILE_SIZE + GRID_TILE_SIZE;
        width = endX - snappedX;
        height = endY - snappedY;

        // draw a hover rect
        graphics.beginFill(0, 0);
        graphics.lineStyle(1, 0xfffd00);
        graphics.drawRect(snappedX, snappedY, width, height);
        graphics.endFill();
    }
}
