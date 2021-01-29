import { createRenderObject, renderObject, translate } from "../dungeonObjects/DungeonObjectOperations";
import { moveObjects } from "../reducers/dungeonActions";
import { endOperation } from "../reducers/editorActions";
import { GRID_TILE_SIZE } from "../utils/constants";

const getTranslation = (endPosition, startPosition) => ({
    deltaX: Math.round((endPosition.x - startPosition.x) / GRID_TILE_SIZE),
    deltaY: Math.round((endPosition.y - startPosition.y) / GRID_TILE_SIZE)
})

class MoveOperation {
    /**
     * @private
     */
    initializeGraphics(graphics, state) {
        this.graphics = graphics;
        this.graphics.zIndex = 9;
        this.graphics.alpha = 0.5;
        state.dungeon.objects
            .filter(dungeonObject => state.editor.selectedObjectIds.includes(dungeonObject.id))
            .forEach(dungeonObject => {
                let dungeonRenderObject = createRenderObject(dungeonObject);
                dungeonRenderObject.id = dungeonObject.id;
                this.graphics.addChild(dungeonRenderObject);
            });
    }

    /**
     * @private
     */
    resetGraphics() {
        this.graphics.removeChildren(0, this.graphics.children.length);
        this.graphics.zIndex = Number.MAX_SAFE_INTEGER;
        this.graphics.alpha = 1;
        this.graphics = null;
    }

    onMouseUp(store) {
        /** @type {import("../reducers").State} */
        let state = store.getState();
        // On letting go of the mouse, compare mouse coordinates from where you began
        let {deltaX, deltaY} = getTranslation(
            state.editor.mouse.currentPosition,
            state.editor.mouse.startPosition);

        store.dispatch(moveObjects(
            state.editor.selectedObjectIds,
            deltaX,
            deltaY));

        // Clear the current Operation
        store.dispatch(endOperation());

        this.resetGraphics();
    }

    /**
     * @param {import("../reducers").State} state
     * @param {PIXI.Graphics} graphics
     */
    renderOperation(state, graphics) {
        if (!this.graphics) {
            this.initializeGraphics(graphics, state);
        }

        let {deltaX, deltaY} = getTranslation(
            state.editor.mouse.currentPosition,
            state.editor.mouse.startPosition
        );
        state.dungeon.objects
            .filter(dungeonObject => state.editor.selectedObjectIds.includes(dungeonObject.id))
            .forEach(dungeonObject => {
                let objectCopy = JSON.parse(JSON.stringify(dungeonObject));
                translate(objectCopy, deltaX, deltaY);
                let renderObjectCopy = this.graphics.children.filter(child => child.id === objectCopy.id)[0];
                renderObject(renderObjectCopy, objectCopy, false);
            });
    }
}

export default MoveOperation;
