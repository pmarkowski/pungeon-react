export const createArrayWithUpdatedObject = (array, id, update) => {
    return createArrayWithUpdatedObjects(array, [id], update);
}

/**
 * @param {import("../dungeonObjects/DungeonObject").BaseDungeonObject[]} array
 * @param {string[]} ids
 * @param {function(object: import("../dungeonObjects/DungeonObject").BaseDungeonObject) : void} update
 */
export const createArrayWithUpdatedObjects = (array, ids, update) => {
    return array.map(object => {
        if (ids.includes(object.id)) {
            let objectCopy = {...object};
            update(objectCopy);
            return objectCopy;
        }
        else {
            return object;
        }
    })
}
