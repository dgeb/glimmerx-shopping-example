import { helper as glimmerHelper } from "@glimmerx/helper";

export function positionalHelper(fn) {
    return glimmerHelper(function(positional) {
        return fn.apply(null, positional);
    })
}

export function hashHelper(fn) {
    return glimmerHelper(function(_, hash) {
        return fn.apply(null, [Object.assign({}, hash)]);
    })
}

export const sum = positionalHelper((a, b) => a + b);
export const inc = positionalHelper((a, b) => a + (b || 1));
export const eq = positionalHelper((a, b) => a === b);
export const gt = positionalHelper((a, b) => a > b);
export const gte = positionalHelper((a, b) => a >= b);
export const arr = positionalHelper((...items) => Array.from(items));
export const hash = hashHelper((obj) => obj);
