import { selectAtPoint } from "../reducers/editorActions";

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
        let state = store.getState();
        // Selecting is handled via interaction events on the render objects themselves
        const startPosition = state.editor.mouse.startPosition;
        const endPosition = state.editor.mouse.currentPosition;
        const shouldAddToSelection = false; // TODO: derive this from state? have the reducer look at the state to figure this out instead?

        if (!isDragging(startPosition, endPosition)) {
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
