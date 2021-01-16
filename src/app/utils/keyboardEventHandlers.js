import { deleteObjects, moveObjects } from "../reducers/dungeonActions"
import { keyPressed, keyReleased } from "../reducers/editorActions";

/**
 * @param {KeyboardEvent} keyboardEvent
 * @param {import("redux").Store} store
 */
export const handleKeyPressed = (keyboardEvent, store) => {
    if (!keyboardEvent.repeat) {
        store.dispatch(keyPressed(keyboardEvent.key));
    }
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
