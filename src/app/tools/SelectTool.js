import * as PIXI from 'pixi.js';
import { createRenderObject, renderObject, translate } from '../dungeonObjects/DungeonObjectOperations';
import { moveObjects } from '../reducers/dungeonActions';
import { selectObject, selectObjects } from "../reducers/editorActions";
import { GRID_TILE_SIZE } from "../utils/constants";
import { doRectanglesIntersect } from '../utils/geometry';

const DRAG_THRESHOLD = 5;

const isDragging = (startPosition, endPosition) => {
    return Math.abs(endPosition.x - startPosition.x) > DRAG_THRESHOLD ||
        Math.abs(endPosition.y - startPosition.y) > DRAG_THRESHOLD;
}

const getTranslation = (endPosition, startPosition) => ({
    deltaX: Math.round((endPosition.x - startPosition.x) / GRID_TILE_SIZE),
    deltaY: Math.round((endPosition.y - startPosition.y) / GRID_TILE_SIZE)
})

const createRectangle = (startPosition, endPosition) => ({
    x: Math.min(startPosition.x, endPosition.x),
    y: Math.min(startPosition.y, endPosition.y),
    width: Math.abs(endPosition.x - startPosition.x),
    height: Math.abs(endPosition.y - startPosition.y)
})

let startedMove = false;

export default class SelectTool {
    /**
     * @private
     */
    initializeGraphics(graphics, state) {
        this.graphics = graphics;
        this.graphics.zIndex = 9;
        this.graphics.alpha = 0.5;
        state.dungeon.objects
            .filter(dungeonObject => state.editor.selectedObjectIds.includes(dungeonObject.id))
            .forEach(dungeonObject => {
                let dungeonRenderObject = createRenderObject(dungeonObject);
                dungeonRenderObject.id = dungeonObject.id;
                this.graphics.addChild(dungeonRenderObject);
            });
    }

    /**
     * @private
     */
    resetGraphics() {
        this.graphics.removeChildren(0, this.graphics.children.length);
        this.graphics.zIndex = Number.MAX_SAFE_INTEGER;
        this.graphics.alpha = 1;
        this.graphics = null;
        startedMove = false;
    }

    // TODO: Consider injecting `app` via ctor
    onMouseDown(store, app) {
        /** @type {import("../reducers").State} */
        let state = store.getState();

        const currentPosition = state.editor.mouse.currentPosition;
        const shouldAddToSelection = state.editor.keyboard.heldKeys["Shift"];

        let mousePoint = new PIXI.Point(
            currentPosition.x,
            currentPosition.y);
        let globalPosition = app.stage.worldTransform.apply(mousePoint);
        let hitObject = app.renderer.plugins.interaction.hitTest(
            globalPosition);


        if (!hitObject && !shouldAddToSelection) {
            store.dispatch(selectObjects([], false));
            this.state = "SELECT_BOUNDING_BOX";
        }
        else if (!hitObject && shouldAddToSelection) {
            // start click and drag selection
            this.state = "SELECT_BOUNDING_BOX";
        }
        else if (hitObject && shouldAddToSelection) {
            if (state.editor.selectedObjectIds.includes(hitObject.id)) {
                // We are either deselecting this object or starting a Drag-To-Move operation
                this.state = "DRAGGING_TO_MOVE|DESELECTING";
                this.lastHitId = hitObject.id;
            }
            else {
                store.dispatch(selectObject(hitObject.id, shouldAddToSelection));
                this.state = "DRAGGING_TO_MOVE";
            }
        }
        else if (hitObject && !shouldAddToSelection) { // this could also be dragging to move though and possibly shouldn't deselect...
            if (!state.editor.selectedObjectIds.includes(hitObject.id)) {
                store.dispatch(selectObject(hitObject.id, shouldAddToSelection));
            }
            this.state = "DRAGGING_TO_MOVE|SELECTING_OBJECT"
            this.lastHitId = hitObject.id
        }
    }

    onMouseUp(store, app) {
        /** @type {import("../reducers").State} */
        let state = store.getState();

        const startPosition = state.editor.mouse.startPosition;
        const endPosition = state.editor.mouse.currentPosition;
        const shouldAddToSelection = state.editor.keyboard.heldKeys["Shift"];

        if (this.state === "SELECT_BOUNDING_BOX" && isDragging(startPosition, endPosition)) {
            let boundingRectangle = createRectangle(startPosition, endPosition);

            let objectIdsToSelect = [];
            app.stage.children.forEach(child => {
                if (doRectanglesIntersect(child.getLocalBounds(), boundingRectangle) && child.id) {
                    objectIdsToSelect.push(child.id);
                }
            });
            if (objectIdsToSelect.length > 0) {
                store.dispatch(selectObjects(objectIdsToSelect, shouldAddToSelection));
            }
            else {
                store.dispatch(selectObjects([], shouldAddToSelection));
            }
            delete this.state;
        }
        else if (this.state?.includes("DESELECTING") && !isDragging(startPosition, endPosition)) {
            store.dispatch(selectObject(this.lastHitId, true));
            delete this.state;
            delete this.lastHitId;
        }
        else if (this.state?.includes("SELECTING_OBJECT") && !isDragging(startPosition, endPosition)) {
            store.dispatch(selectObject(this.lastHitId, false));
            delete this.state;
            delete this.lastHitId;
        }
        else if (this.state?.includes("DRAGGING_TO_MOVE") && isDragging(startPosition, endPosition)) {
            // On letting go of the mouse, compare mouse coordinates from where you began
            let {deltaX, deltaY} = getTranslation(
                state.editor.mouse.currentPosition,
                state.editor.mouse.startPosition);

            if (deltaX !== 0 || deltaY !== 0) {
                store.dispatch(moveObjects(
                    state.editor.selectedObjectIds,
                    deltaX,
                    deltaY));
            }

            delete this.state;
            this.resetGraphics();
        }

        delete this.state;
        delete this.lastHitId;
    }

    /**
     * @param {import("../reducers").State} state
     * @param {PIXI.Graphics} graphics
     */
    renderTool(state, graphics) {

        const startPosition = state.editor.mouse.startPosition;
        const endPosition = state.editor.mouse.currentPosition;

        if (this.state === "SELECT_BOUNDING_BOX" && isDragging(startPosition, endPosition)) {
            let boundingRectangle = createRectangle(startPosition, endPosition);
            graphics.lineStyle(1, 0xfffd00)
                .drawRect(boundingRectangle.x, boundingRectangle.y, boundingRectangle.width, boundingRectangle.height)
                .lineStyle();
        }
        else if (this.state?.includes("DRAGGING_TO_MOVE") && isDragging(startPosition, endPosition)) {
            if (!this.graphics) {
                this.initializeGraphics(graphics, state);
            }

            let {deltaX, deltaY} = getTranslation(
                state.editor.mouse.currentPosition,
                state.editor.mouse.startPosition
            );

            if (!startedMove && (Math.abs(deltaX) > 0 || Math.abs(deltaY) > 0)) {
                startedMove = true;
            }

            if (startedMove) {
                state.dungeon.objects
                    .filter(dungeonObject => state.editor.selectedObjectIds.includes(dungeonObject.id))
                    .forEach(dungeonObject => {
                        let objectCopy = JSON.parse(JSON.stringify(dungeonObject));
                        translate(objectCopy, deltaX, deltaY);
                        let renderObjectCopy = this.graphics.children.filter(child => child.id === objectCopy.id)[0];
                        renderObject(renderObjectCopy, objectCopy, false);
                    });
            }
        }
    }
}
