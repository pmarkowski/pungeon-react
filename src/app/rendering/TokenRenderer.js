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

        // TODO: This does nothing with the current stairs texture, switch
        // to a highlight method that will work more broadly
        if (objectIsSelected) {
            sprite.tint = 0xffffcc;
        }
        else {
            sprite.tint = 0xFFFFFF;
        }
    }
}
