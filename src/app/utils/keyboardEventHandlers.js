import { deleteSelectedObject, moveSelectedObject } from "../reducers/dungeonReducer"

const handleKeyboardEvent = (keyboardEvent, store) => {
    switch (keyboardEvent.key) {
        case 'Delete':
            return store.dispatch(deleteSelectedObject());
        case 'ArrowLeft':
            return store.dispatch(moveSelectedObject(-1, 0));
        case 'ArrowRight':
            return store.dispatch(moveSelectedObject(1, 0));
        case 'ArrowDown':
            return store.dispatch(moveSelectedObject(0, 1));
        case 'ArrowUp':
            return store.dispatch(moveSelectedObject(0, -1));
        default:
            return;
    }
}

export default handleKeyboardEvent