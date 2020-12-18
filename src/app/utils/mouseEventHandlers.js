import { moveViewport, scroll } from "../reducers/dungeonReducer";
import * as ToolRouter from '../tools/ToolRouter';

export const handleMouseDown = (mouseEvent, store) => {
    if (mouseEvent.buttons === 1) {
        store.dispatch({ type: 'MOUSE_DOWN' });
    }
}

export const handleMouseUp = (mouseEvent, store) => {
    let state = store.getState();
    if (state.editor.mouseDown) {
        store.dispatch({ type: 'MOUSE_UP' });
        ToolRouter.onMouseUp(store);
    }
}

export const handleMouseMove = (mouseEvent, store) => {
    if (mouseEvent.buttons === 2) {
        store.dispatch(moveViewport(mouseEvent.movementX, mouseEvent.movementY));
    }
}

export const handleWheelEvent = (wheelEvent, store) => {
    store.dispatch(scroll(wheelEvent));
}
