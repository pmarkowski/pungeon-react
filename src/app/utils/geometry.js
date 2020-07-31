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