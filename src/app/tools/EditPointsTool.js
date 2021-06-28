import { SPACE_TYPE } from "../dungeonObjects/SpaceOperations";
import { setPointPosition } from "../reducers/dungeonActions";
import { GRID_TILE_SIZE } from "../utils/constants";

export default class EditPointsTool {
    onMouseDown(store, app) {
        // Figure out what point is being clicked,
        // start dragging it
        // Going to kind of homebrew "sticking"
        /** @type {import("../reducers").State} */
        let state = store.getState();
        let editorPosition = state.editor.mouse.currentPosition;
        let dungeonPosition = {
            x: Math.round(editorPosition.x / GRID_TILE_SIZE),
            y: Math.round(editorPosition.y / GRID_TILE_SIZE)
        };
        let allPoints = this.copyOfPolygonObjects.reduce((accumulator, space) => accumulator.concat(space.points), []);
        this.selectedPoint = allPoints.find(point => point.x === dungeonPosition.x && point.y === dungeonPosition.y);
    }

    onMouseUp(store, app) {
        /** @type {import("../reducers").State} */
        let state = store.getState();
        let editorPosition = state.editor.mouse.currentPosition;
        let dungeonPosition = {
            x: Math.round(editorPosition.x / GRID_TILE_SIZE),
            y: Math.round(editorPosition.y / GRID_TILE_SIZE)
        };
        // Update the position of the point that is being dragged
        // from its position to new dungeonPosition
        // Need an action and to update reducer for this...
        store.dispatch(setPointPosition(this.selectedPoint.id, dungeonPosition));
        this.selectedPoint = null;
        this.copyOfPolygonObjects = null;
    }

    /**
     * @param {import("../reducers").State} state
     * @param {PIXI.Graphics} graphics
     */
    renderTool(state, graphics) {
        let pointRadius = 5;
        let pointColour = 0xffffff;

        // The first time this happens, copy the dungeon objects over
        // no natural point when to clear this, time for object lifecycles IMO.
        if (!this.copyOfPolygonObjects) {
            let polygonObjects = state.dungeon.objects.filter(object => object.type === SPACE_TYPE && object.points);
            this.copyOfPolygonObjects = [...polygonObjects]
        }

        graphics.beginFill(pointColour);
        graphics.interactive = true;
        graphics.cursor = "move";
        this.copyOfPolygonObjects.forEach(object => {
            object.points.forEach(point => {
                graphics.drawCircle(
                    point.x * GRID_TILE_SIZE,
                    point.y * GRID_TILE_SIZE,
                    pointRadius);
            });
        });

        // What do we learn from this?
        // All of these need to be interactable objects
        // Points need IDs
        // Each graphical representation of a point gets attached to the graphics object
        // Draw an outline of polygons
        // This can then serve as a preview of what the polygon will look like after the edit
        // Then can commit the edit after mouse up
        // Means probably having some local copy of all the polygon spaces
        // Can be a "global" tool that just lets you edit any space rather than select object -> start editing
        // Should there be two Pixi Containers in the App Container, one for Dungeon and one for Editing? Might help with some isolation/event capturing?

        graphics.endFill();
    }
}
