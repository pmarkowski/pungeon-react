import { deleteSelectedObject } from "../reducers/dungeonReducer"

const handleKeyboardEvent = (keyboardEvent, store) => {
    switch (keyboardEvent.key) {
        case 'Delete':
            return store.dispatch(deleteSelectedObject());
        default:
            return;
    }
}

export default handleKeyboardEvent