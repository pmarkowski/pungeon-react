import { SpaceOperations, createSpace } from './SpaceOperations';

const spaceOperations = new SpaceOperations();

test('Position on rectangular space returns position', () => {
    let rectangularSpace = createSpace({
        startX: 1,
        startY: 4,
        endX: 23,
        endY: 11
    });

    let spacePosition = spaceOperations.position(rectangularSpace);

    expect(spacePosition.x).toBe(1);
    expect(spacePosition.y).toBe(4);
})

test('Position on polygonal space returns minimum x and y', () => {
    let polygonalSpace = createSpace({
        points: [
            {
                x: 2,
                y: 4
            },
            {
                x: 5,
                y: 1
            },
            {
                x: 8,
                y: 7
            },
            {
                x: 9,
                y: 14
            }
        ]
    });

    let spacePosition = spaceOperations.position(polygonalSpace);

    expect(spacePosition.x).toBe(2);
    expect(spacePosition.y).toBe(1);
})
