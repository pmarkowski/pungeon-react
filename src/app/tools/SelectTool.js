const DRAG_THRESHOLD = 5;

const isDragging = (startPosition, endPosition) => {
    return Math.abs(endPosition.x - startPosition.x) > DRAG_THRESHOLD ||
        Math.abs(endPosition.y - startPosition.y) > DRAG_THRESHOLD;
}

export default class SelectTool {
    onMouseUp(store) {
        // Selecting is handled via interaction events on the render objects themselves
    }

    /**
     * @param {import("../reducers").State} state
     * @param {PIXI.Graphics} graphics
     */
    renderTool(state, graphics) {
        const startPosition = state.editor.mouse.startPosition;
        const endPosition = state.editor.mouse.currentPosition;

        if (state.editor.mouse.mouseDown && isDragging(startPosition, endPosition)) {
            graphics.lineStyle(1, 0xfffd00)
                .drawRect(
                    Math.min(startPosition.x, endPosition.x),
                    Math.min(startPosition.y, endPosition.y),
                    Math.abs(endPosition.x - startPosition.x),
                    Math.abs(endPosition.y - startPosition.y)
                )
                .lineStyle();
        }
    }
}
