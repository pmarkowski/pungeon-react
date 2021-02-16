import { v4 as uuid } from "uuid";
import { position, translate } from "../dungeonObjects/DungeonObjectOperations";
import { addObjects } from "../reducers/dungeonActions";
import { addObjectsToClipboard, selectObjects } from "../reducers/editorActions";
import { GRID_TILE_SIZE } from "./constants";
import copyObject from "./copyObject";

export const pasteFromClipboard = (state, store) => {
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

    copiedObjects.forEach(object => {
        translate(object, clipboardTranslation.x, clipboardTranslation.y);
    });
    store.dispatch(addObjects(copiedObjects));
}

export const copyToClipboard = (store, state) => {
    store.dispatch(addObjectsToClipboard(
        state.dungeon.objects
            .filter(object => state.editor.selectedObjectIds.includes(object.id))
            .map(copyObject)));
}
