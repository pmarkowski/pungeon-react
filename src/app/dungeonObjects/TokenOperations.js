import * as PIXI from 'pixi.js'
import { GRID_TILE_SIZE } from '../utils/constants';
import { BaseDungeonObjectOperations, createDungeonObject } from './BaseDungeonObjectOperations';

/**
 * @typedef {{
 *  textureUrl: string,
 *  position: {x: number, y: number},
 *  size: {width: number, height: number}
 *  angle: number
 * } & import('./BaseDungeonObjectOperations').BaseDungeonObject} Token
 */

export const TOKEN_TYPE = "token"

/**
 * @returns {Token}
 */
export const createToken = (textureUrl, x, y, width, height, angle) => {
    return {
        ...createDungeonObject(TOKEN_TYPE),
        textureUrl,
        position: {
            x,
            y
        },
        size: {
            width,
            height
        },
        angle
    };
}

export class TokenOperations extends BaseDungeonObjectOperations {
    get dungeonObjectType(){ return TOKEN_TYPE; }

    translate(object, x, y) {
        object.position.x += x;
        object.position.y += y;
    }

    createRenderObject() {
        return new PIXI.Sprite();
    }

    renderObject(sprite, token, objectIsSelected) {
        super.renderObject(sprite, token, objectIsSelected);
        sprite.zIndex = 4;
        sprite.texture = PIXI.Texture.from(process.env.PUBLIC_URL + token.textureUrl);
        sprite.x = token.position.x * GRID_TILE_SIZE;
        sprite.y = token.position.y * GRID_TILE_SIZE;
        sprite.width = token.size.width * GRID_TILE_SIZE;
        sprite.height = token.size.height * GRID_TILE_SIZE;
        sprite.angle = token.angle;

        if (objectIsSelected) {
            let objectSelectionGraphics;
            if (sprite.children.length === 0) {
                objectSelectionGraphics = new PIXI.Graphics();
                sprite.addChild(objectSelectionGraphics);
            } else {
                objectSelectionGraphics = sprite.getChildAt(0);
            }
            objectSelectionGraphics.clear();
            objectSelectionGraphics.lineStyle(5, 0xfffd00);
            objectSelectionGraphics.drawShape(sprite.getLocalBounds());
        }
        else {
            if (sprite.children.length > 0) {
                sprite.removeChildAt(0);
            }
        }
    }
}
