import * as PIXI from 'pixi.js'

export default class GraphicsRenderer {
    createRenderObject() {
        return new PIXI.Graphics();
    }
}
