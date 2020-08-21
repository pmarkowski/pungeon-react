import { GRID_TILE_SIZE } from "../utils/constants";

export default class SpaceRenderer {
    renderObject(graphics, space, objectIsSelected) {
        graphics.clear();
        graphics.beginFill(0xd6d5d5);
        graphics.drawRect(
            space.position.x * GRID_TILE_SIZE,
            space.position.y * GRID_TILE_SIZE,
            space.size.width * GRID_TILE_SIZE,
            space.size.height * GRID_TILE_SIZE);
        graphics.endFill();

        if (objectIsSelected) {
            graphics.tint = 0xffffcc;
        }
        else {
            graphics.tint = 0xffffff;
        }
    }
}
