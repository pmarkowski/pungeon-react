import { GRID_TILE_SIZE } from '../utils/constants';
import { addToken } from '../reducers/dungeonReducer';

export default class AddTokenTool {
    // TODO: Make this configurable based on the currently selected token or something along those lines
    tokenTextureUrl = '/assets/stairs.png';
    height = 2;
    width = 1;

    onMouseUp(store) {
        let state = store.getState();
        let mousePoint = state.editor.mouse.dungeonPosition;
        let snappedX, snappedY;

        // snap to nearest grid point
        // for now for simplicity let's say top left
        snappedX = Math.floor(mousePoint.x / GRID_TILE_SIZE);
        snappedY = Math.floor(mousePoint.y / GRID_TILE_SIZE);

        store.dispatch(addToken(
            this.tokenTextureUrl,
            snappedX,
            snappedY,
            this.width,
            this.height,
            0
        ))
    }

    renderTool(state, graphics) {
        // preview the sprite in the current location
        let mousePoint = state.editor.mouse.dungeonPosition;
        let snappedX, snappedY;

        // snap to nearest grid point
        // for now for simplicity let's say top left
        snappedX = Math.floor(mousePoint.x / GRID_TILE_SIZE) * GRID_TILE_SIZE;
        snappedY = Math.floor(mousePoint.y / GRID_TILE_SIZE) * GRID_TILE_SIZE;

        // draw a hover rect
        graphics.beginFill(0, 0);
        graphics.lineStyle(1, 0xfffd00);
        graphics.drawRect(snappedX, snappedY, this.width * GRID_TILE_SIZE, this.height * GRID_TILE_SIZE);
        graphics.endFill();
    }
}
