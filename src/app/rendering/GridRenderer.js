import * as PIXI from 'pixi.js'
import { GRID_TILE_SIZE } from '../utils/constants';

export class GridRenderer {
    createRenderObject() {
        this.graphics = new PIXI.Graphics();
        this.graphics.zIndex = 10;
        return this.graphics;
    }

    renderGrid(gridWidth, gridHeight) {
        this.graphics.clear();
        this.graphics.lineStyle(1, 0x444444, 1, 0.5);
        for (let i = 0; i <= gridWidth; i++) {
            this.graphics.moveTo(i * GRID_TILE_SIZE, 0);
            this.graphics.lineTo(i * GRID_TILE_SIZE, gridHeight * GRID_TILE_SIZE);
        }

        for (let j = 0; j <= gridHeight; j++) {
            this.graphics.moveTo(0, j * GRID_TILE_SIZE);
            this.graphics.lineTo(gridWidth * GRID_TILE_SIZE, j * GRID_TILE_SIZE);
        }
        this.graphics.lineStyle();
    }
}
