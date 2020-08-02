import { scroll, moveViewport } from "../reducers/dungeonReducer";

export const handleMouseDown = (mouseEvent, store) => {
    if (mouseEvent.buttons === 1) {
        store.dispatch({ type: 'MOUSE_DOWN' });
    }
}

export const handleMouseUp = (mouseEvent, store) => {
}

export const handleMouseMove = (mouseEvent, store) => {
    if (mouseEvent.buttons === 2) {
        store.dispatch(moveViewport(mouseEvent.movementX, mouseEvent.movementY));
    }
}

export const handleWheelEvent = (wheelEvent, store) => {
    store.dispatch(scroll(wheelEvent));
}
