import { deleteSelectedObject, moveSelectedObject } from "../reducers/dungeonActions"

const handleKeyboardEvent = (keyboardEvent, store) => {
    let state = store.getState();
    switch (keyboardEvent.key) {
        case 'Delete':
            return store.dispatch(deleteSelectedObject(state.editor.selectedObject));
        case 'ArrowLeft':
            return store.dispatch(moveSelectedObject(state.editor.selectedObject, -1, 0));
        case 'ArrowRight':
            return store.dispatch(moveSelectedObject(state.editor.selectedObject, 1, 0));
        case 'ArrowDown':
            return store.dispatch(moveSelectedObject(state.editor.selectedObject, 0, 1));
        case 'ArrowUp':
            return store.dispatch(moveSelectedObject(state.editor.selectedObject, 0, -1));
        default:
            return;
    }
}

export default handleKeyboardEvent
