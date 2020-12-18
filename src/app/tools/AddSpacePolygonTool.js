import { GRID_TILE_SIZE } from "../utils/constants";
import { addSpacePolygon } from "../reducers/dungeonActions";
import { addOngoingSpacePolygonPoint, clearOngoingSpacePolygonPoint } from '../reducers/editorActions'

export default class AddSpacePolygonTool {

    onMouseUp(store) {
        let state = store.getState();
        let mousePoint = state.editor.mouse.dungeonPosition;
        let x = Math.round(mousePoint.x / GRID_TILE_SIZE);
        let y = Math.round(mousePoint.y / GRID_TILE_SIZE);

        let firstPoint = state.editor.ongoingSpacePolygon?.[0];
        if (firstPoint && firstPoint.x === x && firstPoint.y === y ) {
            // close it out
            let pointArray = state.editor.ongoingSpacePolygon;
            store.dispatch(clearOngoingSpacePolygonPoint());
            store.dispatch(addSpacePolygon(pointArray));
        }
        else {
            store.dispatch(addOngoingSpacePolygonPoint(x, y));
        }
    }

    renderTool(state, graphics) {
        // if there's no ongoing polygon, just snap to a corner
        let mousePoint = state.editor.mouse.dungeonPosition;
        // get nearest center point
        let hoverX = Math.round(mousePoint.x / GRID_TILE_SIZE) * GRID_TILE_SIZE;
        let hoverY = Math.round(mousePoint.y / GRID_TILE_SIZE) * GRID_TILE_SIZE;

        if (!state.editor.ongoingSpacePolygon) {
            graphics.lineStyle();
            graphics.beginFill(0xfffd00);
            graphics.drawCircle(hoverX, hoverY, 2.5);
            graphics.endFill();
        }
        else {
            graphics.lineStyle(2, 0xfffd00);
            let firstPoint = state.editor.ongoingSpacePolygon[0];
            graphics.moveTo(
                firstPoint.x * GRID_TILE_SIZE,
                firstPoint.y * GRID_TILE_SIZE);
            for (let index = 1; index < state.editor.ongoingSpacePolygon.length; index++) {
                const point = state.editor.ongoingSpacePolygon[index];
                graphics.lineTo(point.x * GRID_TILE_SIZE, point.y * GRID_TILE_SIZE);
            }
            graphics.lineTo(hoverX, hoverY);
            // then draw to where mouse is hovering over
            graphics.lineStyle();
        }
    }
}
