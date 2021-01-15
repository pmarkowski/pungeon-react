import * as PIXI from 'pixi.js'
import {BaseDungeonObjectOperations} from './BaseDungeonObjectOperations'

export default class GraphicsDungeonObjectOperations extends BaseDungeonObjectOperations {
    createRenderObject() {
        return new PIXI.Graphics();
    }
}
