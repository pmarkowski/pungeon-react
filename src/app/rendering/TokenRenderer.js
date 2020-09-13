import * as PIXI from 'pixi.js'
import { GRID_TILE_SIZE } from '../utils/constants';

export default class TokenRenderer {
    renderObject(sprite, token, objectIsSelected) {
        sprite.zIndex = 4;
        sprite.texture = PIXI.Texture.from(process.env.PUBLIC_URL + token.textureUrl);
        sprite.x = token.position.x * GRID_TILE_SIZE;
        sprite.y = token.position.y * GRID_TILE_SIZE;
        sprite.width = token.size.width * GRID_TILE_SIZE;
        sprite.height = token.size.height * GRID_TILE_SIZE;
        sprite.angle = token.angle;

        if (objectIsSelected) {
            if (sprite.children.length === 0) {
                let objectSelectionGraphics = new PIXI.Graphics();
                sprite.addChild(objectSelectionGraphics);
                objectSelectionGraphics.lineStyle(5, 0xfffd00);
                objectSelectionGraphics.drawRect(
                    0,
                    0,
                    sprite.width,
                    sprite.height);
            }
        }
        else {
            if (sprite.children.length > 0) {
                sprite.removeChildAt(0);
            }
        }
    }
}
