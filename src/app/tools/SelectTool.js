import { selectAtPoint, selectInBoundingBox } from "../reducers/editorActions";

const DRAG_THRESHOLD = 5;

const isDragging = (startPosition, endPosition) => {
    return Math.abs(endPosition.x - startPosition.x) > DRAG_THRESHOLD ||
        Math.abs(endPosition.y - startPosition.y) > DRAG_THRESHOLD;
}

const createRectangle = (startPosition, endPosition) => {
    return {
        x: Math.min(startPosition.x, endPosition.x),
        y: Math.min(startPosition.y, endPosition.y),
        width: Math.abs(endPosition.x - startPosition.x),
        height: Math.abs(endPosition.y - startPosition.y)
    }
}

export default class SelectTool {
    onMouseUp(store) {
        /** @type {import("../reducers").State} */
        let state = store.getState();

        const startPosition = state.editor.mouse.startPosition;
        const endPosition = state.editor.mouse.currentPosition;
        const shouldAddToSelection = state.editor.keyboard.heldKeys["Shift"];

        if (isDragging(startPosition, endPosition)) {
            let boundingRectangle = createRectangle(startPosition, endPosition);
            store.dispatch(selectInBoundingBox(
                boundingRectangle.x,
                boundingRectangle.y,
                boundingRectangle.width,
                boundingRectangle.height,
                shouldAddToSelection))
        }
        else {
            store.dispatch(selectAtPoint(endPosition.x, endPosition.y, shouldAddToSelection))
        }
    }

    /**
     * @param {import("../reducers").State} state
     * @param {PIXI.Graphics} graphics
     */
    renderTool(state, graphics) {
        const startPosition = state.editor.mouse.startPosition;
        const endPosition = state.editor.mouse.currentPosition;

        if (state.editor.mouse.mouseDown && isDragging(startPosition, endPosition)) {
            let boundingRectangle = createRectangle(startPosition, endPosition);
            graphics.lineStyle(1, 0xfffd00)
                .drawRect(boundingRectangle.x, boundingRectangle.y, boundingRectangle.width, boundingRectangle.height)
                .lineStyle();
        }
    }
}
