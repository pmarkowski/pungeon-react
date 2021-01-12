const square = (x) => x * x;

export const lineLength = (v, w) => Math.sqrt(square(v.x - w.x) + square(v.y - w.y));

export const getClosestPointOnLine = (p, a, b) => {

    var atob = { x: b.x - a.x, y: b.y - a.y };
    var atop = { x: p.x - a.x, y: p.y - a.y };
    var len = atob.x * atob.x + atob.y * atob.y;
    var dot = atop.x * atob.x + atop.y * atob.y;
    var t = Math.min( 1, Math.max( 0, dot / len ) );
    return {
        x: a.x + atob.x * t,
        y: a.y + atob.y * t
    };
}

/**
 * @typedef {{x: number, y: number, width: number, height: number}} Rectangle
 * @param {Rectangle} rect1
 * @param {Rectangle} rect2
 */
export const doRectanglesIntersect = (rect1, rect2) => {
    let x = Math.max(rect1.x, rect2.x);
    let num1 = Math.min(rect1.x + rect1.width, rect2.x + rect2.width);
    let y = Math.max(rect1.y, rect2.y);
    let num2 = Math.min(rect1.y + rect1.height, rect2.y + rect2.height);
    if (num1 >= x && num2 >= y)
      return true;
    else
      return false;
}
