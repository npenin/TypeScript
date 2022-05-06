// @module: node16,nodenext
// @declaration: true
// @filename: index.ts
// esm format file
import { Thing } from "inner/other";
export const a = (await import("inner")).x();
// @filename: node_modules/inner/index.d.ts
// esm format file
export { x } from "./other.js";
// @filename: node_modules/inner/other.d.ts
// esm format file
export interface Thing {}
export const x: () => Thing;
// @filename: package.json
{
    "name": "package",
    "private": true,
    "type": "module",
    "exports": "./index.js"
}
// @filename: node_modules/inner/package.json
{
    "name": "inner",
    "private": true,
    "type": "module",
    "exports": "./index.js"
}