import { v4 as uuid } from "uuid";
import { position, translate } from "../dungeonObjects/DungeonObjectOperations";
import { addObject, deleteObjects, moveObjects } from "../reducers/dungeonActions";
import { addObjectsToClipboard, keyPressed, keyReleased, selectObjects } from "../reducers/editorActions";
import TOOL_TYPE from "../tools/toolType";
import { GRID_TILE_SIZE } from "./constants";
import copyObject from "./copyObject";

/**
 * @param {KeyboardEvent} keyboardEvent
 * @param {import("redux").Store} store
 */
export const handleKeyPressed = (keyboardEvent, store) => {
    if (!keyboardEvent.repeat) {
        store.dispatch(keyPressed(keyboardEvent.key));
    }
    /**
     * @type {import("../reducers").State}
     */
    let state = store.getState();
    switch (keyboardEvent.key) {
        case 'Delete':
            return store.dispatch(deleteObjects(state.editor.selectedObjectIds));
        case 'ArrowLeft':
            return store.dispatch(moveObjects(state.editor.selectedObjectIds, -1, 0));
        case 'ArrowRight':
            return store.dispatch(moveObjects(state.editor.selectedObjectIds, 1, 0));
        case 'ArrowDown':
            return store.dispatch(moveObjects(state.editor.selectedObjectIds, 0, 1));
        case 'ArrowUp':
            return store.dispatch(moveObjects(state.editor.selectedObjectIds, 0, -1));
        case 'a':
            keyboardEvent.preventDefault();
            if (state.editor.selectedTool === TOOL_TYPE.SELECT && keyboardEvent.ctrlKey) {
                store.dispatch(selectObjects(state.dungeon.objects.map(object => object.id)))
            }
            return;
        case 'c':
            keyboardEvent.preventDefault();
            if (keyboardEvent.ctrlKey) {
                store.dispatch(addObjectsToClipboard(
                    state.dungeon.objects
                        .filter(object => state.editor.selectedObjectIds.includes(object.id))
                        .map(copyObject)));
            }
            return;
        case 'v':
            if (keyboardEvent.ctrlKey && state.editor.clipboard.length) {
                let copiedObjects = state.editor.clipboard.map(object => {
                    object.id = uuid();
                    return copyObject(object);
                });

                let mousePosition = {
                    x: Math.floor(state.editor.mouse.currentPosition.x / GRID_TILE_SIZE),
                    y: Math.floor(state.editor.mouse.currentPosition.y / GRID_TILE_SIZE)
                };
                let firstPositionOfSelection = position(state.editor.clipboard[0]);
                let clipboardTranslation = {
                    x: mousePosition.x - firstPositionOfSelection.x,
                    y: mousePosition.y - firstPositionOfSelection.y
                };

                // TODO: Make this an array of objects so that it's an atomic action and can be undone
                copiedObjects.forEach(object => {
                    translate(object, clipboardTranslation.x, clipboardTranslation.y);
                    store.dispatch(addObject(object));
                })
                store.dispatch(selectObjects(copiedObjects.map(object => object.id)));
            }
            return;
        default:
            return;
    }
}

/**
 * @param {KeyboardEvent} keyboardEvent
 * @param {import("redux").Store} store
 */
export const handleKeyReleased = (keyboardEvent, store) => {
    store.dispatch(keyReleased(keyboardEvent.key));
}
