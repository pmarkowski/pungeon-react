import { renderObject, translate } from "../dungeonObjects/DungeonObjectOperations";
import { moveObjects } from "../reducers/dungeonActions";
import { endOperation } from "../reducers/editorActions";
import { GRID_TILE_SIZE } from "../utils/constants";

const getTranslation = (endPosition, startPosition) => ({
    deltaX: Math.round((endPosition.x - startPosition.x) / GRID_TILE_SIZE),
    deltaY: Math.round((endPosition.y - startPosition.y) / GRID_TILE_SIZE)
})

class MoveOperation {
    onMouseUp(store) {
        /** @type {import("../reducers").State} */
        let state = store.getState();
        // On letting go of the mouse, compare mouse coordinates from where you began
        let translation = getTranslation(
            state.editor.mouse.currentPosition,
            state.editor.mouse.startPosition);

        store.dispatch(moveObjects(
            state.editor.selectedObjectIds,
            translation.deltaX,
            translation.deltaY));

        // Clear the current Operation
        store.dispatch(endOperation());
    }

    /**
     * @param {import("../reducers").State} state
     * @param {PIXI.Graphics} graphics
     */
    renderOperation(state, graphics) {
        let translation = getTranslation(
            state.editor.mouse.currentPosition,
            state.editor.mouse.startPosition
        );
        state.dungeon.objects
            .filter(dungeonObject => state.editor.selectedObjectIds.includes(dungeonObject.id))
            .forEach(dungeonObject => {
                let objectCopy = JSON.parse(JSON.stringify(dungeonObject));
                translate(objectCopy, translation.deltaX, translation.deltaY);
                renderObject(graphics, objectCopy, false);
            });
    }
}

export default MoveOperation;
