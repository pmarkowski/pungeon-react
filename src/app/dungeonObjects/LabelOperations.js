import * as PIXI from 'pixi.js';
import { GRID_TILE_SIZE } from '../utils/constants';
import { createDungeonObject, BaseDungeonObjectOperations } from './BaseDungeonObjectOperations';

/**
 * @typedef {{
 *  position: {x: number, y: number},
 *  label: string
 * } & import('./BaseDungeonObjectOperations').BaseDungeonObject} Label
 */

export const LABEL_TYPE = "label"

/**
 * @returns {Label}
 */
export const createLabel = (x, y, label) => {
    return {
        ...createDungeonObject(LABEL_TYPE),
        label,
        position: {
            x,
            y
        }
    }
}

export class LabelOperations extends BaseDungeonObjectOperations {
    get dungeonObjectType(){ return LABEL_TYPE; }

    translate(object, x, y) {
        object.position.x += x;
        object.position.y += y;
    }

    position(label) {
        return label.position;
    }

    renderObject(graphics, label, objectIsSelected) {
        graphics.zIndex = 4;
        graphics.clear();
        if (graphics.children.length === 0) {
            let labelText = new PIXI.Text(label.label);
            labelText.style.fontFamily = 'Serif';
            labelText.style.fontSize = 36;
            graphics.addChild(labelText);
        }

        let labelText = graphics.children[0];

        if (objectIsSelected) {
            labelText.style.fill = 0xffff33;
        }
        else {
            labelText.style.fill = 0x000000;
        }

        labelText.text = label.label;
        labelText.position.set(
            label.position.x * GRID_TILE_SIZE,
            label.position.y * GRID_TILE_SIZE);
    }
}
