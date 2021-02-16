import { deleteObjects, moveObjects } from "../reducers/dungeonActions";
import { keyPressed, keyReleased, selectObjects } from "../reducers/editorActions";
import TOOL_TYPE from "../tools/toolType";
import { copyToClipboard, pasteFromClipboard } from "./clipboard";

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
                copyToClipboard(store, state);
            }
            return;
        case 'v':
            if (keyboardEvent.ctrlKey && state.editor.clipboard.length) {
                pasteFromClipboard(state, store);
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
