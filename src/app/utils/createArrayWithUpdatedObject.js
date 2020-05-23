export const createArrayWithUpdatedObject = (array, id, update) => {
    return array.map(object => {
        if (object.id === id) {
            let objectCopy = {...object};
            update(objectCopy);
            return objectCopy;
        }
        else {
            return object;
        }
    })
}
