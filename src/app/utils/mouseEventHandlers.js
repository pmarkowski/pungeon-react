import { mouseDown, mouseUp, moveViewport, scroll } from "../reducers/editorActions";
import * as ToolRouter from '../tools/ToolRouter';

export const handleMouseDown = (mouseEvent, store, app) => {
    if (mouseEvent.buttons === 1) {
        store.dispatch(mouseDown());
        ToolRouter.onMouseDown(store, app);
    }
}

export const handleMouseUp = (mouseEvent, store, app) => {
    let state = store.getState();
    if (state.editor.mouse.mouseDown) {
        store.dispatch(mouseUp());
        ToolRouter.onMouseUp(store, app);
    }
}

export const handleMouseMove = (mouseEvent, store) => {
    if (mouseEvent.buttons === 2) {
        let mouseMovementScaledByDisplayScaling = {
            movementX: mouseEvent.movementX / window.devicePixelRatio,
            movementY: mouseEvent.movementY / window.devicePixelRatio
        }
        store.dispatch(moveViewport(
            mouseMovementScaledByDisplayScaling.movementX,
            mouseMovementScaledByDisplayScaling.movementY));
    }
}

export const handleWheelEvent = (wheelEvent, store) => {
    store.dispatch(scroll(
        wheelEvent.deltaX,
        wheelEvent.deltaY,
        wheelEvent.getModifierState('Control')));
}
