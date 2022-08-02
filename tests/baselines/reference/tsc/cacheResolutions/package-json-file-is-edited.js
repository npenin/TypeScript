Input::
//// [/lib/lib.es2016.full.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };

//// [/src/projects/project/package.json]
{"name":"app","version":"1.0.0"}

//// [/src/projects/project/src/a/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/b/ba/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/b/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/c/ca/caa/caaa/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/c/ca/caa/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/c/ca/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/c/cb/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/d/da/daa/daaa/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/d/da/daa/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/d/da/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/e/ea/eaa/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/e/ea/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/f/fa/faa/faaa/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/fileA.ts]
import { foo } from "./fileB.mjs";
foo();


//// [/src/projects/project/src/fileB.mts]
export function foo() {}

//// [/src/projects/project/src/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/tsconfig.json]
{"compilerOptions":{"target":"es2016","composite":true,"module":"node16","outDir":"../out","cacheResolutions":true,"traceResolution":true},"files":["fileA.ts","fileB.mts","randomFile.ts","a/randomFile.ts","b/ba/randomFile.ts","b/randomFile.ts","c/ca/randomFile.ts","c/ca/caa/randomFile.ts","c/ca/caa/caaa/randomFile.ts","c/cb/randomFile.ts","d/da/daa/daaa/x/y/z/randomFile.ts","d/da/daa/daaa/randomFile.ts","d/da/daa/randomFile.ts","d/da/randomFile.ts","e/ea/randomFile.ts","e/ea/eaa/randomFile.ts","e/ea/eaa/eaaa/randomFile.ts","e/ea/eaa/eaaa/x/y/z/randomFile.ts","f/fa/faa/x/y/z/randomFile.ts","f/fa/faa/faaa/randomFile.ts"]}



Output::
/lib/tsc --p /src/projects/project/src --explainFiles
File '/src/projects/project/src/package.json' does not exist.
Found 'package.json' at '/src/projects/project/package.json'.
'package.json' does not have a 'typesVersions' field.
======== Resolving module './fileB.mjs' from '/src/projects/project/src/fileA.ts'. ========
Module resolution kind is not specified, using 'Node16'.
Loading module as file / folder, candidate module location '/src/projects/project/src/fileB.mjs', target file type 'TypeScript'.
File '/src/projects/project/src/fileB.mjs.ts' does not exist.
File '/src/projects/project/src/fileB.mjs.tsx' does not exist.
File '/src/projects/project/src/fileB.mjs.d.ts' does not exist.
File name '/src/projects/project/src/fileB.mjs' has a '.mjs' extension - stripping it.
File '/src/projects/project/src/fileB.mts' exist - use it as a name resolution result.
======== Module name './fileB.mjs' was successfully resolved to '/src/projects/project/src/fileB.mts'. ========
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/a/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/b/ba/package.json' does not exist.
File '/src/projects/project/src/b/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist.
File '/src/projects/project/src/c/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/package.json' does not exist.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/caaa/package.json' does not exist.
File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/cb/package.json' does not exist.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/x/y/z/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/daaa/x/y/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/daaa/x/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/package.json' does not exist.
File '/src/projects/project/src/d/da/package.json' does not exist.
File '/src/projects/project/src/d/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist.
File '/src/projects/project/src/e/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json' does not exist.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json' does not exist.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/package.json' does not exist.
File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/x/y/z/package.json' does not exist.
File '/src/projects/project/src/f/fa/faa/x/y/package.json' does not exist.
File '/src/projects/project/src/f/fa/faa/x/package.json' does not exist.
File '/src/projects/project/src/f/fa/faa/package.json' does not exist.
File '/src/projects/project/src/f/fa/package.json' does not exist.
File '/src/projects/project/src/f/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/faaa/package.json' does not exist.
File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/lib/package.json' does not exist.
File '/package.json' does not exist.
[96msrc/projects/project/src/fileA.ts[0m:[93m1[0m:[93m21[0m - [91merror[0m[90m TS1471: [0mModule './fileB.mjs' cannot be imported using this construct. The specifier only resolves to an ES module, which cannot be imported synchronously. Use dynamic import instead.

[7m1[0m import { foo } from "./fileB.mjs";
[7m [0m [91m                    ~~~~~~~~~~~~~[0m

lib/lib.es2016.full.d.ts
  Default library for target 'es2016'
src/projects/project/src/fileB.mts
  Imported via "./fileB.mjs" from file 'src/projects/project/src/fileA.ts'
  Part of 'files' list in tsconfig.json
src/projects/project/src/fileA.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/a/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/b/ba/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/b/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/c/ca/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/c/ca/caa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/c/ca/caa/caaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/c/cb/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/d/da/daa/daaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/d/da/daa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/d/da/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/e/ea/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/e/ea/eaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/f/fa/faa/faaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"

Found 1 error in src/projects/project/src/fileA.ts[90m:1[0m

exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated


//// [/src/projects/project/out/a/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/a/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/b/ba/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/b/ba/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/b/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/b/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/c/ca/caa/caaa/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/c/ca/caa/caaa/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/c/ca/caa/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/c/ca/caa/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/c/ca/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/c/ca/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/c/cb/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/c/cb/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/d/da/daa/daaa/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/d/da/daa/daaa/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/d/da/daa/daaa/x/y/z/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/d/da/daa/daaa/x/y/z/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/d/da/daa/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/d/da/daa/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/d/da/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/d/da/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/e/ea/eaa/eaaa/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/e/ea/eaa/eaaa/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/e/ea/eaa/eaaa/x/y/z/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/e/ea/eaa/eaaa/x/y/z/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/e/ea/eaa/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/e/ea/eaa/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/e/ea/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/e/ea/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/f/fa/faa/faaa/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/f/fa/faa/faaa/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/f/fa/faa/x/y/z/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/f/fa/faa/x/y/z/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/fileA.d.ts]
export {};


//// [/src/projects/project/out/fileA.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileB_mjs_1 = require("./fileB.mjs");
(0, fileB_mjs_1.foo)();


//// [/src/projects/project/out/fileB.d.mts]
export declare function foo(): void;


//// [/src/projects/project/out/fileB.mjs]
export function foo() { }


//// [/src/projects/project/out/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../lib/lib.es2016.full.d.ts","../src/fileb.mts","../src/filea.ts","../src/randomfile.ts","../src/a/randomfile.ts","../src/b/ba/randomfile.ts","../src/b/randomfile.ts","../src/c/ca/randomfile.ts","../src/c/ca/caa/randomfile.ts","../src/c/ca/caa/caaa/randomfile.ts","../src/c/cb/randomfile.ts","../src/d/da/daa/daaa/x/y/z/randomfile.ts","../src/d/da/daa/daaa/randomfile.ts","../src/d/da/daa/randomfile.ts","../src/d/da/randomfile.ts","../src/e/ea/randomfile.ts","../src/e/ea/eaa/randomfile.ts","../src/e/ea/eaa/eaaa/randomfile.ts","../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts","../src/f/fa/faa/x/y/z/randomfile.ts","../src/f/fa/faa/faaa/randomfile.ts","../src","../src/a","../package.json","../src/b/ba","../src/c/ca/caa/caaa","../src/c/cb","../src/d/da/daa/daaa/x/y/z","../src/e/ea/eaa/eaaa/x/y/z","../src/f/fa/faa/x/y/z","../src/f/fa/faa/faaa","../src/fileB.mts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedFormat":1},{"version":"3524703962-export function foo() {}","signature":"-6972466928-export declare function foo(): void;\r\n","impliedFormat":99},{"version":"-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n","signature":"-4882119183-export {};\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1}],"options":{"cacheResolutions":true,"composite":true,"module":100,"outDir":"./","target":3},"fileIdsList":[[2]],"referencedMap":[[3,1]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,5,6,7,10,9,8,11,13,12,14,15,18,19,17,16,21,20,[3,[{"file":"../src/filea.ts","start":20,"length":13,"messageText":"Module './fileB.mjs' cannot be imported using this construct. The specifier only resolves to an ES module, which cannot be imported synchronously. Use dynamic import instead.","category":1,"code":1471}]],2,4],"latestChangedDtsFile":"./f/fa/faa/faaa/randomFile.d.ts","cacheResolutions":{"resolutions":[{"resolvedModule":{"resolvedFileName":32}}],"names":["./fileB.mjs"],"resolutionEntries":[[1,1,1]],"modules":[[22,[1]]],"packageJsons":[[23,24],[25,24],[26,24],[27,24],[28,24],[29,24],[30,24],[31,24]]}},"version":"FakeTSVersion"}

//// [/src/projects/project/out/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../lib/lib.es2016.full.d.ts",
      "../src/fileb.mts",
      "../src/filea.ts",
      "../src/randomfile.ts",
      "../src/a/randomfile.ts",
      "../src/b/ba/randomfile.ts",
      "../src/b/randomfile.ts",
      "../src/c/ca/randomfile.ts",
      "../src/c/ca/caa/randomfile.ts",
      "../src/c/ca/caa/caaa/randomfile.ts",
      "../src/c/cb/randomfile.ts",
      "../src/d/da/daa/daaa/x/y/z/randomfile.ts",
      "../src/d/da/daa/daaa/randomfile.ts",
      "../src/d/da/daa/randomfile.ts",
      "../src/d/da/randomfile.ts",
      "../src/e/ea/randomfile.ts",
      "../src/e/ea/eaa/randomfile.ts",
      "../src/e/ea/eaa/eaaa/randomfile.ts",
      "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts",
      "../src/f/fa/faa/x/y/z/randomfile.ts",
      "../src/f/fa/faa/faaa/randomfile.ts",
      "../src",
      "../src/a",
      "../package.json",
      "../src/b/ba",
      "../src/c/ca/caa/caaa",
      "../src/c/cb",
      "../src/d/da/daa/daaa/x/y/z",
      "../src/e/ea/eaa/eaaa/x/y/z",
      "../src/f/fa/faa/x/y/z",
      "../src/f/fa/faa/faaa",
      "../src/fileB.mts"
    ],
    "fileNamesList": [
      [
        "../src/fileb.mts"
      ]
    ],
    "fileInfos": {
      "../../../../lib/lib.es2016.full.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "../src/fileb.mts": {
        "version": "3524703962-export function foo() {}",
        "signature": "-6972466928-export declare function foo(): void;\r\n",
        "impliedFormat": "esnext"
      },
      "../src/filea.ts": {
        "version": "-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n",
        "signature": "-4882119183-export {};\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/a/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/b/ba/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/b/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/c/ca/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/c/ca/caa/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/c/ca/caa/caaa/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/c/cb/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/d/da/daa/daaa/x/y/z/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/d/da/daa/daaa/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/d/da/daa/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/d/da/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/e/ea/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/e/ea/eaa/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/e/ea/eaa/eaaa/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/f/fa/faa/x/y/z/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/f/fa/faa/faaa/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true,
      "module": 100,
      "outDir": "./",
      "target": 3
    },
    "referencedMap": {
      "../src/filea.ts": [
        "../src/fileb.mts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../lib/lib.es2016.full.d.ts",
      "../src/a/randomfile.ts",
      "../src/b/ba/randomfile.ts",
      "../src/b/randomfile.ts",
      "../src/c/ca/caa/caaa/randomfile.ts",
      "../src/c/ca/caa/randomfile.ts",
      "../src/c/ca/randomfile.ts",
      "../src/c/cb/randomfile.ts",
      "../src/d/da/daa/daaa/randomfile.ts",
      "../src/d/da/daa/daaa/x/y/z/randomfile.ts",
      "../src/d/da/daa/randomfile.ts",
      "../src/d/da/randomfile.ts",
      "../src/e/ea/eaa/eaaa/randomfile.ts",
      "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts",
      "../src/e/ea/eaa/randomfile.ts",
      "../src/e/ea/randomfile.ts",
      "../src/f/fa/faa/faaa/randomfile.ts",
      "../src/f/fa/faa/x/y/z/randomfile.ts",
      [
        "../src/filea.ts",
        [
          {
            "file": "../src/filea.ts",
            "start": 20,
            "length": 13,
            "messageText": "Module './fileB.mjs' cannot be imported using this construct. The specifier only resolves to an ES module, which cannot be imported synchronously. Use dynamic import instead.",
            "category": 1,
            "code": 1471
          }
        ]
      ],
      "../src/fileb.mts",
      "../src/randomfile.ts"
    ],
    "latestChangedDtsFile": "./f/fa/faa/faaa/randomFile.d.ts",
    "cacheResolutions": {
      "resolutions": [
        {
          "id": 1,
          "resolvedModule": {
            "resolvedFileName": "../src/fileB.mts"
          }
        }
      ],
      "names": [
        "./fileB.mjs"
      ],
      "resolutionEntries": [
        [
          "./fileB.mjs",
          {
            "id": 1,
            "resolvedModule": {
              "resolvedFileName": "../src/fileB.mts"
            }
          },
          "commonjs"
        ]
      ],
      "modules": [
        [
          "../src",
          [
            [
              "./fileB.mjs",
              {
                "id": 1,
                "resolvedModule": {
                  "resolvedFileName": "../src/fileB.mts"
                }
              },
              "commonjs"
            ]
          ]
        ]
      ],
      "packageJsons": [
        [
          "../src/a",
          "../package.json"
        ],
        [
          "../src/b/ba",
          "../package.json"
        ],
        [
          "../src/c/ca/caa/caaa",
          "../package.json"
        ],
        [
          "../src/c/cb",
          "../package.json"
        ],
        [
          "../src/d/da/daa/daaa/x/y/z",
          "../package.json"
        ],
        [
          "../src/e/ea/eaa/eaaa/x/y/z",
          "../package.json"
        ],
        [
          "../src/f/fa/faa/x/y/z",
          "../package.json"
        ],
        [
          "../src/f/fa/faa/faaa",
          "../package.json"
        ]
      ]
    }
  },
  "version": "FakeTSVersion",
  "size": 4759
}



Change:: random edit
Input::
//// [/src/projects/project/src/randomFile.ts]
export const x = 10;export const y = 10;



Output::
/lib/tsc --p /src/projects/project/src --explainFiles
File '/src/projects/project/src/package.json' does not exist.
Found 'package.json' at '/src/projects/project/package.json'.
'package.json' does not have a 'typesVersions' field.
Reusing resolution of module './fileB.mjs' from '/src/projects/project/src/fileA.ts' found in cache from location '/src/projects/project/src', it was successfully resolved to '/src/projects/project/src/fileB.mts'.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/a/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/b/ba/package.json' does not exist.
File '/src/projects/project/src/b/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist.
File '/src/projects/project/src/c/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/package.json' does not exist.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/caaa/package.json' does not exist.
File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/cb/package.json' does not exist.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/x/y/z/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/daaa/x/y/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/daaa/x/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/package.json' does not exist.
File '/src/projects/project/src/d/da/package.json' does not exist.
File '/src/projects/project/src/d/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist.
File '/src/projects/project/src/e/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json' does not exist.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json' does not exist.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/package.json' does not exist.
File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/x/y/z/package.json' does not exist.
File '/src/projects/project/src/f/fa/faa/x/y/package.json' does not exist.
File '/src/projects/project/src/f/fa/faa/x/package.json' does not exist.
File '/src/projects/project/src/f/fa/faa/package.json' does not exist.
File '/src/projects/project/src/f/fa/package.json' does not exist.
File '/src/projects/project/src/f/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/faaa/package.json' does not exist.
File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/lib/package.json' does not exist.
File '/package.json' does not exist.
[96msrc/projects/project/src/fileA.ts[0m:[93m1[0m:[93m21[0m - [91merror[0m[90m TS1471: [0mModule './fileB.mjs' cannot be imported using this construct. The specifier only resolves to an ES module, which cannot be imported synchronously. Use dynamic import instead.

[7m1[0m import { foo } from "./fileB.mjs";
[7m [0m [91m                    ~~~~~~~~~~~~~[0m

lib/lib.es2016.full.d.ts
  Default library for target 'es2016'
src/projects/project/src/fileB.mts
  Imported via "./fileB.mjs" from file 'src/projects/project/src/fileA.ts'
  Part of 'files' list in tsconfig.json
src/projects/project/src/fileA.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/a/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/b/ba/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/b/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/c/ca/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/c/ca/caa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/c/ca/caa/caaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/c/cb/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/d/da/daa/daaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/d/da/daa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/d/da/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/e/ea/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/e/ea/eaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/f/fa/faa/faaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"

Found 1 error in src/projects/project/src/fileA.ts[90m:1[0m

exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated


//// [/src/projects/project/out/randomFile.d.ts]
export declare const x = 10;
export declare const y = 10;


//// [/src/projects/project/out/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.y = exports.x = void 0;
exports.x = 10;
exports.y = 10;


//// [/src/projects/project/out/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../lib/lib.es2016.full.d.ts","../src/fileb.mts","../src/filea.ts","../src/randomfile.ts","../src/a/randomfile.ts","../src/b/ba/randomfile.ts","../src/b/randomfile.ts","../src/c/ca/randomfile.ts","../src/c/ca/caa/randomfile.ts","../src/c/ca/caa/caaa/randomfile.ts","../src/c/cb/randomfile.ts","../src/d/da/daa/daaa/x/y/z/randomfile.ts","../src/d/da/daa/daaa/randomfile.ts","../src/d/da/daa/randomfile.ts","../src/d/da/randomfile.ts","../src/e/ea/randomfile.ts","../src/e/ea/eaa/randomfile.ts","../src/e/ea/eaa/eaaa/randomfile.ts","../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts","../src/f/fa/faa/x/y/z/randomfile.ts","../src/f/fa/faa/faaa/randomfile.ts","../src","../src/a","../package.json","../src/b/ba","../src/c/ca/caa/caaa","../src/c/cb","../src/d/da/daa/daaa/x/y/z","../src/e/ea/eaa/eaaa/x/y/z","../src/f/fa/faa/x/y/z","../src/f/fa/faa/faaa","../src/fileB.mts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedFormat":1},{"version":"3524703962-export function foo() {}","signature":"-6972466928-export declare function foo(): void;\r\n","impliedFormat":99},{"version":"-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n","signature":"-4882119183-export {};\r\n","impliedFormat":1},{"version":"-9547279430-export const x = 10;export const y = 10;","signature":"-5110318392-export declare const x = 10;\r\nexport declare const y = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1}],"options":{"cacheResolutions":true,"composite":true,"module":100,"outDir":"./","target":3},"fileIdsList":[[2]],"referencedMap":[[3,1]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,5,6,7,10,9,8,11,13,12,14,15,18,19,17,16,21,20,[3,[{"file":"../src/filea.ts","start":20,"length":13,"messageText":"Module './fileB.mjs' cannot be imported using this construct. The specifier only resolves to an ES module, which cannot be imported synchronously. Use dynamic import instead.","category":1,"code":1471}]],2,4],"latestChangedDtsFile":"./randomFile.d.ts","cacheResolutions":{"resolutions":[{"resolvedModule":{"resolvedFileName":32}}],"names":["./fileB.mjs"],"resolutionEntries":[[1,1,1]],"modules":[[22,[1]]],"packageJsons":[[23,24],[25,24],[26,24],[27,24],[28,24],[29,24],[30,24],[31,24]]}},"version":"FakeTSVersion"}

//// [/src/projects/project/out/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../lib/lib.es2016.full.d.ts",
      "../src/fileb.mts",
      "../src/filea.ts",
      "../src/randomfile.ts",
      "../src/a/randomfile.ts",
      "../src/b/ba/randomfile.ts",
      "../src/b/randomfile.ts",
      "../src/c/ca/randomfile.ts",
      "../src/c/ca/caa/randomfile.ts",
      "../src/c/ca/caa/caaa/randomfile.ts",
      "../src/c/cb/randomfile.ts",
      "../src/d/da/daa/daaa/x/y/z/randomfile.ts",
      "../src/d/da/daa/daaa/randomfile.ts",
      "../src/d/da/daa/randomfile.ts",
      "../src/d/da/randomfile.ts",
      "../src/e/ea/randomfile.ts",
      "../src/e/ea/eaa/randomfile.ts",
      "../src/e/ea/eaa/eaaa/randomfile.ts",
      "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts",
      "../src/f/fa/faa/x/y/z/randomfile.ts",
      "../src/f/fa/faa/faaa/randomfile.ts",
      "../src",
      "../src/a",
      "../package.json",
      "../src/b/ba",
      "../src/c/ca/caa/caaa",
      "../src/c/cb",
      "../src/d/da/daa/daaa/x/y/z",
      "../src/e/ea/eaa/eaaa/x/y/z",
      "../src/f/fa/faa/x/y/z",
      "../src/f/fa/faa/faaa",
      "../src/fileB.mts"
    ],
    "fileNamesList": [
      [
        "../src/fileb.mts"
      ]
    ],
    "fileInfos": {
      "../../../../lib/lib.es2016.full.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "../src/fileb.mts": {
        "version": "3524703962-export function foo() {}",
        "signature": "-6972466928-export declare function foo(): void;\r\n",
        "impliedFormat": "esnext"
      },
      "../src/filea.ts": {
        "version": "-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n",
        "signature": "-4882119183-export {};\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/randomfile.ts": {
        "version": "-9547279430-export const x = 10;export const y = 10;",
        "signature": "-5110318392-export declare const x = 10;\r\nexport declare const y = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/a/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/b/ba/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/b/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/c/ca/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/c/ca/caa/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/c/ca/caa/caaa/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/c/cb/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/d/da/daa/daaa/x/y/z/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/d/da/daa/daaa/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/d/da/daa/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/d/da/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/e/ea/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/e/ea/eaa/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/e/ea/eaa/eaaa/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/f/fa/faa/x/y/z/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/f/fa/faa/faaa/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true,
      "module": 100,
      "outDir": "./",
      "target": 3
    },
    "referencedMap": {
      "../src/filea.ts": [
        "../src/fileb.mts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../lib/lib.es2016.full.d.ts",
      "../src/a/randomfile.ts",
      "../src/b/ba/randomfile.ts",
      "../src/b/randomfile.ts",
      "../src/c/ca/caa/caaa/randomfile.ts",
      "../src/c/ca/caa/randomfile.ts",
      "../src/c/ca/randomfile.ts",
      "../src/c/cb/randomfile.ts",
      "../src/d/da/daa/daaa/randomfile.ts",
      "../src/d/da/daa/daaa/x/y/z/randomfile.ts",
      "../src/d/da/daa/randomfile.ts",
      "../src/d/da/randomfile.ts",
      "../src/e/ea/eaa/eaaa/randomfile.ts",
      "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts",
      "../src/e/ea/eaa/randomfile.ts",
      "../src/e/ea/randomfile.ts",
      "../src/f/fa/faa/faaa/randomfile.ts",
      "../src/f/fa/faa/x/y/z/randomfile.ts",
      [
        "../src/filea.ts",
        [
          {
            "file": "../src/filea.ts",
            "start": 20,
            "length": 13,
            "messageText": "Module './fileB.mjs' cannot be imported using this construct. The specifier only resolves to an ES module, which cannot be imported synchronously. Use dynamic import instead.",
            "category": 1,
            "code": 1471
          }
        ]
      ],
      "../src/fileb.mts",
      "../src/randomfile.ts"
    ],
    "latestChangedDtsFile": "./randomFile.d.ts",
    "cacheResolutions": {
      "resolutions": [
        {
          "id": 1,
          "resolvedModule": {
            "resolvedFileName": "../src/fileB.mts"
          }
        }
      ],
      "names": [
        "./fileB.mjs"
      ],
      "resolutionEntries": [
        [
          "./fileB.mjs",
          {
            "id": 1,
            "resolvedModule": {
              "resolvedFileName": "../src/fileB.mts"
            }
          },
          "commonjs"
        ]
      ],
      "modules": [
        [
          "../src",
          [
            [
              "./fileB.mjs",
              {
                "id": 1,
                "resolvedModule": {
                  "resolvedFileName": "../src/fileB.mts"
                }
              },
              "commonjs"
            ]
          ]
        ]
      ],
      "packageJsons": [
        [
          "../src/a",
          "../package.json"
        ],
        [
          "../src/b/ba",
          "../package.json"
        ],
        [
          "../src/c/ca/caa/caaa",
          "../package.json"
        ],
        [
          "../src/c/cb",
          "../package.json"
        ],
        [
          "../src/d/da/daa/daaa/x/y/z",
          "../package.json"
        ],
        [
          "../src/e/ea/eaa/eaaa/x/y/z",
          "../package.json"
        ],
        [
          "../src/f/fa/faa/x/y/z",
          "../package.json"
        ],
        [
          "../src/f/fa/faa/faaa",
          "../package.json"
        ]
      ]
    }
  },
  "version": "FakeTSVersion",
  "size": 4796
}



Change:: Modify package json file to add type module
Input::
//// [/src/projects/project/package.json]
{"name":"app","version":"1.0.0","type":"module"}



Output::
/lib/tsc --p /src/projects/project/src --explainFiles
File '/src/projects/project/src/package.json' does not exist.
Found 'package.json' at '/src/projects/project/package.json'.
'package.json' does not have a 'typesVersions' field.
======== Resolving module './fileB.mjs' from '/src/projects/project/src/fileA.ts'. ========
Module resolution kind is not specified, using 'Node16'.
Loading module as file / folder, candidate module location '/src/projects/project/src/fileB.mjs', target file type 'TypeScript'.
File name '/src/projects/project/src/fileB.mjs' has a '.mjs' extension - stripping it.
File '/src/projects/project/src/fileB.mts' exist - use it as a name resolution result.
======== Module name './fileB.mjs' was successfully resolved to '/src/projects/project/src/fileB.mts'. ========
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/a/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/b/ba/package.json' does not exist.
File '/src/projects/project/src/b/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist.
File '/src/projects/project/src/c/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/package.json' does not exist.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/caaa/package.json' does not exist.
File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/cb/package.json' does not exist.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/x/y/z/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/daaa/x/y/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/daaa/x/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/package.json' does not exist.
File '/src/projects/project/src/d/da/package.json' does not exist.
File '/src/projects/project/src/d/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist.
File '/src/projects/project/src/e/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json' does not exist.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json' does not exist.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/package.json' does not exist.
File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/x/y/z/package.json' does not exist.
File '/src/projects/project/src/f/fa/faa/x/y/package.json' does not exist.
File '/src/projects/project/src/f/fa/faa/x/package.json' does not exist.
File '/src/projects/project/src/f/fa/faa/package.json' does not exist.
File '/src/projects/project/src/f/fa/package.json' does not exist.
File '/src/projects/project/src/f/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/faaa/package.json' does not exist.
File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/lib/package.json' does not exist.
File '/package.json' does not exist.
lib/lib.es2016.full.d.ts
  Default library for target 'es2016'
src/projects/project/src/fileB.mts
  Imported via "./fileB.mjs" from file 'src/projects/project/src/fileA.ts'
  Part of 'files' list in tsconfig.json
src/projects/project/src/fileA.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'src/projects/project/package.json' has field "type" with value "module"
src/projects/project/src/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'src/projects/project/package.json' has field "type" with value "module"
src/projects/project/src/a/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'src/projects/project/package.json' has field "type" with value "module"
src/projects/project/src/b/ba/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'src/projects/project/package.json' has field "type" with value "module"
src/projects/project/src/b/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'src/projects/project/package.json' has field "type" with value "module"
src/projects/project/src/c/ca/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'src/projects/project/package.json' has field "type" with value "module"
src/projects/project/src/c/ca/caa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'src/projects/project/package.json' has field "type" with value "module"
src/projects/project/src/c/ca/caa/caaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'src/projects/project/package.json' has field "type" with value "module"
src/projects/project/src/c/cb/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'src/projects/project/package.json' has field "type" with value "module"
src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'src/projects/project/package.json' has field "type" with value "module"
src/projects/project/src/d/da/daa/daaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'src/projects/project/package.json' has field "type" with value "module"
src/projects/project/src/d/da/daa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'src/projects/project/package.json' has field "type" with value "module"
src/projects/project/src/d/da/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'src/projects/project/package.json' has field "type" with value "module"
src/projects/project/src/e/ea/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'src/projects/project/package.json' has field "type" with value "module"
src/projects/project/src/e/ea/eaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'src/projects/project/package.json' has field "type" with value "module"
src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'src/projects/project/package.json' has field "type" with value "module"
src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'src/projects/project/package.json' has field "type" with value "module"
src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'src/projects/project/package.json' has field "type" with value "module"
src/projects/project/src/f/fa/faa/faaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'src/projects/project/package.json' has field "type" with value "module"
exitCode:: ExitStatus.Success


//// [/src/projects/project/out/a/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/b/ba/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/b/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/c/ca/caa/caaa/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/c/ca/caa/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/c/ca/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/c/cb/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/d/da/daa/daaa/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/d/da/daa/daaa/x/y/z/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/d/da/daa/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/d/da/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/e/ea/eaa/eaaa/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/e/ea/eaa/eaaa/x/y/z/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/e/ea/eaa/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/e/ea/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/f/fa/faa/faaa/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/f/fa/faa/x/y/z/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/fileA.js]
import { foo } from "./fileB.mjs";
foo();


//// [/src/projects/project/out/randomFile.js]
export const x = 10;
export const y = 10;


//// [/src/projects/project/out/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../lib/lib.es2016.full.d.ts","../src/fileb.mts","../src/filea.ts","../src/randomfile.ts","../src/a/randomfile.ts","../src/b/ba/randomfile.ts","../src/b/randomfile.ts","../src/c/ca/randomfile.ts","../src/c/ca/caa/randomfile.ts","../src/c/ca/caa/caaa/randomfile.ts","../src/c/cb/randomfile.ts","../src/d/da/daa/daaa/x/y/z/randomfile.ts","../src/d/da/daa/daaa/randomfile.ts","../src/d/da/daa/randomfile.ts","../src/d/da/randomfile.ts","../src/e/ea/randomfile.ts","../src/e/ea/eaa/randomfile.ts","../src/e/ea/eaa/eaaa/randomfile.ts","../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts","../src/f/fa/faa/x/y/z/randomfile.ts","../src/f/fa/faa/faaa/randomfile.ts","../src","../src/a","../package.json","../src/b/ba","../src/c/ca/caa/caaa","../src/c/cb","../src/d/da/daa/daaa/x/y/z","../src/e/ea/eaa/eaaa/x/y/z","../src/f/fa/faa/x/y/z","../src/f/fa/faa/faaa","../src/fileB.mts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedFormat":1},{"version":"3524703962-export function foo() {}","signature":"-6972466928-export declare function foo(): void;\r\n","impliedFormat":99},{"version":"-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n","signature":"-4882119183-export {};\r\n","impliedFormat":99},{"version":"-9547279430-export const x = 10;export const y = 10;","signature":"-5110318392-export declare const x = 10;\r\nexport declare const y = 10;\r\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":99}],"options":{"cacheResolutions":true,"composite":true,"module":100,"outDir":"./","target":3},"fileIdsList":[[2]],"referencedMap":[[3,1]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,5,6,7,10,9,8,11,13,12,14,15,18,19,17,16,21,20,3,2,4],"latestChangedDtsFile":"./randomFile.d.ts","cacheResolutions":{"resolutions":[{"resolvedModule":{"resolvedFileName":32}}],"names":["./fileB.mjs"],"resolutionEntries":[[1,1,99]],"modules":[[22,[1]]],"packageJsons":[[23,24],[25,24],[26,24],[27,24],[28,24],[29,24],[30,24],[31,24]]}},"version":"FakeTSVersion"}

//// [/src/projects/project/out/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../lib/lib.es2016.full.d.ts",
      "../src/fileb.mts",
      "../src/filea.ts",
      "../src/randomfile.ts",
      "../src/a/randomfile.ts",
      "../src/b/ba/randomfile.ts",
      "../src/b/randomfile.ts",
      "../src/c/ca/randomfile.ts",
      "../src/c/ca/caa/randomfile.ts",
      "../src/c/ca/caa/caaa/randomfile.ts",
      "../src/c/cb/randomfile.ts",
      "../src/d/da/daa/daaa/x/y/z/randomfile.ts",
      "../src/d/da/daa/daaa/randomfile.ts",
      "../src/d/da/daa/randomfile.ts",
      "../src/d/da/randomfile.ts",
      "../src/e/ea/randomfile.ts",
      "../src/e/ea/eaa/randomfile.ts",
      "../src/e/ea/eaa/eaaa/randomfile.ts",
      "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts",
      "../src/f/fa/faa/x/y/z/randomfile.ts",
      "../src/f/fa/faa/faaa/randomfile.ts",
      "../src",
      "../src/a",
      "../package.json",
      "../src/b/ba",
      "../src/c/ca/caa/caaa",
      "../src/c/cb",
      "../src/d/da/daa/daaa/x/y/z",
      "../src/e/ea/eaa/eaaa/x/y/z",
      "../src/f/fa/faa/x/y/z",
      "../src/f/fa/faa/faaa",
      "../src/fileB.mts"
    ],
    "fileNamesList": [
      [
        "../src/fileb.mts"
      ]
    ],
    "fileInfos": {
      "../../../../lib/lib.es2016.full.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "../src/fileb.mts": {
        "version": "3524703962-export function foo() {}",
        "signature": "-6972466928-export declare function foo(): void;\r\n",
        "impliedFormat": "esnext"
      },
      "../src/filea.ts": {
        "version": "-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n",
        "signature": "-4882119183-export {};\r\n",
        "impliedFormat": "esnext"
      },
      "../src/randomfile.ts": {
        "version": "-9547279430-export const x = 10;export const y = 10;",
        "signature": "-5110318392-export declare const x = 10;\r\nexport declare const y = 10;\r\n",
        "impliedFormat": "esnext"
      },
      "../src/a/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "esnext"
      },
      "../src/b/ba/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "esnext"
      },
      "../src/b/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "esnext"
      },
      "../src/c/ca/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "esnext"
      },
      "../src/c/ca/caa/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "esnext"
      },
      "../src/c/ca/caa/caaa/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "esnext"
      },
      "../src/c/cb/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "esnext"
      },
      "../src/d/da/daa/daaa/x/y/z/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "esnext"
      },
      "../src/d/da/daa/daaa/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "esnext"
      },
      "../src/d/da/daa/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "esnext"
      },
      "../src/d/da/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "esnext"
      },
      "../src/e/ea/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "esnext"
      },
      "../src/e/ea/eaa/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "esnext"
      },
      "../src/e/ea/eaa/eaaa/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "esnext"
      },
      "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "esnext"
      },
      "../src/f/fa/faa/x/y/z/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "esnext"
      },
      "../src/f/fa/faa/faaa/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "esnext"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true,
      "module": 100,
      "outDir": "./",
      "target": 3
    },
    "referencedMap": {
      "../src/filea.ts": [
        "../src/fileb.mts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../lib/lib.es2016.full.d.ts",
      "../src/a/randomfile.ts",
      "../src/b/ba/randomfile.ts",
      "../src/b/randomfile.ts",
      "../src/c/ca/caa/caaa/randomfile.ts",
      "../src/c/ca/caa/randomfile.ts",
      "../src/c/ca/randomfile.ts",
      "../src/c/cb/randomfile.ts",
      "../src/d/da/daa/daaa/randomfile.ts",
      "../src/d/da/daa/daaa/x/y/z/randomfile.ts",
      "../src/d/da/daa/randomfile.ts",
      "../src/d/da/randomfile.ts",
      "../src/e/ea/eaa/eaaa/randomfile.ts",
      "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts",
      "../src/e/ea/eaa/randomfile.ts",
      "../src/e/ea/randomfile.ts",
      "../src/f/fa/faa/faaa/randomfile.ts",
      "../src/f/fa/faa/x/y/z/randomfile.ts",
      "../src/filea.ts",
      "../src/fileb.mts",
      "../src/randomfile.ts"
    ],
    "latestChangedDtsFile": "./randomFile.d.ts",
    "cacheResolutions": {
      "resolutions": [
        {
          "id": 1,
          "resolvedModule": {
            "resolvedFileName": "../src/fileB.mts"
          }
        }
      ],
      "names": [
        "./fileB.mjs"
      ],
      "resolutionEntries": [
        [
          "./fileB.mjs",
          {
            "id": 1,
            "resolvedModule": {
              "resolvedFileName": "../src/fileB.mts"
            }
          },
          "esnext"
        ]
      ],
      "modules": [
        [
          "../src",
          [
            [
              "./fileB.mjs",
              {
                "id": 1,
                "resolvedModule": {
                  "resolvedFileName": "../src/fileB.mts"
                }
              },
              "esnext"
            ]
          ]
        ]
      ],
      "packageJsons": [
        [
          "../src/a",
          "../package.json"
        ],
        [
          "../src/b/ba",
          "../package.json"
        ],
        [
          "../src/c/ca/caa/caaa",
          "../package.json"
        ],
        [
          "../src/c/cb",
          "../package.json"
        ],
        [
          "../src/d/da/daa/daaa/x/y/z",
          "../package.json"
        ],
        [
          "../src/e/ea/eaa/eaaa/x/y/z",
          "../package.json"
        ],
        [
          "../src/f/fa/faa/x/y/z",
          "../package.json"
        ],
        [
          "../src/f/fa/faa/faaa",
          "../package.json"
        ]
      ]
    }
  },
  "version": "FakeTSVersion",
  "size": 4546
}



Change:: Modify package.json file to remove type module
Input::
//// [/src/projects/project/package.json]
{"name":"app","version":"1.0.0"}



Output::
/lib/tsc --p /src/projects/project/src --explainFiles
File '/src/projects/project/src/package.json' does not exist.
Found 'package.json' at '/src/projects/project/package.json'.
'package.json' does not have a 'typesVersions' field.
======== Resolving module './fileB.mjs' from '/src/projects/project/src/fileA.ts'. ========
Module resolution kind is not specified, using 'Node16'.
Loading module as file / folder, candidate module location '/src/projects/project/src/fileB.mjs', target file type 'TypeScript'.
File '/src/projects/project/src/fileB.mjs.ts' does not exist.
File '/src/projects/project/src/fileB.mjs.tsx' does not exist.
File '/src/projects/project/src/fileB.mjs.d.ts' does not exist.
File name '/src/projects/project/src/fileB.mjs' has a '.mjs' extension - stripping it.
File '/src/projects/project/src/fileB.mts' exist - use it as a name resolution result.
======== Module name './fileB.mjs' was successfully resolved to '/src/projects/project/src/fileB.mts'. ========
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/a/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/b/ba/package.json' does not exist.
File '/src/projects/project/src/b/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist.
File '/src/projects/project/src/c/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/package.json' does not exist.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/caaa/package.json' does not exist.
File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/cb/package.json' does not exist.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/x/y/z/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/daaa/x/y/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/daaa/x/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/package.json' does not exist.
File '/src/projects/project/src/d/da/package.json' does not exist.
File '/src/projects/project/src/d/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist.
File '/src/projects/project/src/e/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json' does not exist.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json' does not exist.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/package.json' does not exist.
File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/x/y/z/package.json' does not exist.
File '/src/projects/project/src/f/fa/faa/x/y/package.json' does not exist.
File '/src/projects/project/src/f/fa/faa/x/package.json' does not exist.
File '/src/projects/project/src/f/fa/faa/package.json' does not exist.
File '/src/projects/project/src/f/fa/package.json' does not exist.
File '/src/projects/project/src/f/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/faaa/package.json' does not exist.
File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/lib/package.json' does not exist.
File '/package.json' does not exist.
[96msrc/projects/project/src/fileA.ts[0m:[93m1[0m:[93m21[0m - [91merror[0m[90m TS1471: [0mModule './fileB.mjs' cannot be imported using this construct. The specifier only resolves to an ES module, which cannot be imported synchronously. Use dynamic import instead.

[7m1[0m import { foo } from "./fileB.mjs";
[7m [0m [91m                    ~~~~~~~~~~~~~[0m

lib/lib.es2016.full.d.ts
  Default library for target 'es2016'
src/projects/project/src/fileB.mts
  Imported via "./fileB.mjs" from file 'src/projects/project/src/fileA.ts'
  Part of 'files' list in tsconfig.json
src/projects/project/src/fileA.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/a/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/b/ba/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/b/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/c/ca/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/c/ca/caa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/c/ca/caa/caaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/c/cb/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/d/da/daa/daaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/d/da/daa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/d/da/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/e/ea/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/e/ea/eaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"
src/projects/project/src/f/fa/faa/faaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'src/projects/project/package.json' does not have field "type"

Found 1 error in src/projects/project/src/fileA.ts[90m:1[0m

exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated


//// [/src/projects/project/out/a/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/b/ba/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/b/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/c/ca/caa/caaa/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/c/ca/caa/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/c/ca/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/c/cb/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/d/da/daa/daaa/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/d/da/daa/daaa/x/y/z/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/d/da/daa/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/d/da/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/e/ea/eaa/eaaa/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/e/ea/eaa/eaaa/x/y/z/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/e/ea/eaa/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/e/ea/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/f/fa/faa/faaa/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/f/fa/faa/x/y/z/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/fileA.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileB_mjs_1 = require("./fileB.mjs");
(0, fileB_mjs_1.foo)();


//// [/src/projects/project/out/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.y = exports.x = void 0;
exports.x = 10;
exports.y = 10;


//// [/src/projects/project/out/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../lib/lib.es2016.full.d.ts","../src/fileb.mts","../src/filea.ts","../src/randomfile.ts","../src/a/randomfile.ts","../src/b/ba/randomfile.ts","../src/b/randomfile.ts","../src/c/ca/randomfile.ts","../src/c/ca/caa/randomfile.ts","../src/c/ca/caa/caaa/randomfile.ts","../src/c/cb/randomfile.ts","../src/d/da/daa/daaa/x/y/z/randomfile.ts","../src/d/da/daa/daaa/randomfile.ts","../src/d/da/daa/randomfile.ts","../src/d/da/randomfile.ts","../src/e/ea/randomfile.ts","../src/e/ea/eaa/randomfile.ts","../src/e/ea/eaa/eaaa/randomfile.ts","../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts","../src/f/fa/faa/x/y/z/randomfile.ts","../src/f/fa/faa/faaa/randomfile.ts","../src","../src/a","../package.json","../src/b/ba","../src/c/ca/caa/caaa","../src/c/cb","../src/d/da/daa/daaa/x/y/z","../src/e/ea/eaa/eaaa/x/y/z","../src/f/fa/faa/x/y/z","../src/f/fa/faa/faaa","../src/fileB.mts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedFormat":1},{"version":"3524703962-export function foo() {}","signature":"-6972466928-export declare function foo(): void;\r\n","impliedFormat":99},{"version":"-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n","signature":"-4882119183-export {};\r\n","impliedFormat":1},{"version":"-9547279430-export const x = 10;export const y = 10;","signature":"-5110318392-export declare const x = 10;\r\nexport declare const y = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1}],"options":{"cacheResolutions":true,"composite":true,"module":100,"outDir":"./","target":3},"fileIdsList":[[2]],"referencedMap":[[3,1]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,5,6,7,10,9,8,11,13,12,14,15,18,19,17,16,21,20,[3,[{"file":"../src/filea.ts","start":20,"length":13,"messageText":"Module './fileB.mjs' cannot be imported using this construct. The specifier only resolves to an ES module, which cannot be imported synchronously. Use dynamic import instead.","category":1,"code":1471}]],2,4],"latestChangedDtsFile":"./randomFile.d.ts","cacheResolutions":{"resolutions":[{"resolvedModule":{"resolvedFileName":32}}],"names":["./fileB.mjs"],"resolutionEntries":[[1,1,1]],"modules":[[22,[1]]],"packageJsons":[[23,24],[25,24],[26,24],[27,24],[28,24],[29,24],[30,24],[31,24]]}},"version":"FakeTSVersion"}

//// [/src/projects/project/out/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../lib/lib.es2016.full.d.ts",
      "../src/fileb.mts",
      "../src/filea.ts",
      "../src/randomfile.ts",
      "../src/a/randomfile.ts",
      "../src/b/ba/randomfile.ts",
      "../src/b/randomfile.ts",
      "../src/c/ca/randomfile.ts",
      "../src/c/ca/caa/randomfile.ts",
      "../src/c/ca/caa/caaa/randomfile.ts",
      "../src/c/cb/randomfile.ts",
      "../src/d/da/daa/daaa/x/y/z/randomfile.ts",
      "../src/d/da/daa/daaa/randomfile.ts",
      "../src/d/da/daa/randomfile.ts",
      "../src/d/da/randomfile.ts",
      "../src/e/ea/randomfile.ts",
      "../src/e/ea/eaa/randomfile.ts",
      "../src/e/ea/eaa/eaaa/randomfile.ts",
      "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts",
      "../src/f/fa/faa/x/y/z/randomfile.ts",
      "../src/f/fa/faa/faaa/randomfile.ts",
      "../src",
      "../src/a",
      "../package.json",
      "../src/b/ba",
      "../src/c/ca/caa/caaa",
      "../src/c/cb",
      "../src/d/da/daa/daaa/x/y/z",
      "../src/e/ea/eaa/eaaa/x/y/z",
      "../src/f/fa/faa/x/y/z",
      "../src/f/fa/faa/faaa",
      "../src/fileB.mts"
    ],
    "fileNamesList": [
      [
        "../src/fileb.mts"
      ]
    ],
    "fileInfos": {
      "../../../../lib/lib.es2016.full.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "../src/fileb.mts": {
        "version": "3524703962-export function foo() {}",
        "signature": "-6972466928-export declare function foo(): void;\r\n",
        "impliedFormat": "esnext"
      },
      "../src/filea.ts": {
        "version": "-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n",
        "signature": "-4882119183-export {};\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/randomfile.ts": {
        "version": "-9547279430-export const x = 10;export const y = 10;",
        "signature": "-5110318392-export declare const x = 10;\r\nexport declare const y = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/a/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/b/ba/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/b/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/c/ca/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/c/ca/caa/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/c/ca/caa/caaa/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/c/cb/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/d/da/daa/daaa/x/y/z/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/d/da/daa/daaa/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/d/da/daa/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/d/da/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/e/ea/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/e/ea/eaa/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/e/ea/eaa/eaaa/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/f/fa/faa/x/y/z/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/f/fa/faa/faaa/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true,
      "module": 100,
      "outDir": "./",
      "target": 3
    },
    "referencedMap": {
      "../src/filea.ts": [
        "../src/fileb.mts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../lib/lib.es2016.full.d.ts",
      "../src/a/randomfile.ts",
      "../src/b/ba/randomfile.ts",
      "../src/b/randomfile.ts",
      "../src/c/ca/caa/caaa/randomfile.ts",
      "../src/c/ca/caa/randomfile.ts",
      "../src/c/ca/randomfile.ts",
      "../src/c/cb/randomfile.ts",
      "../src/d/da/daa/daaa/randomfile.ts",
      "../src/d/da/daa/daaa/x/y/z/randomfile.ts",
      "../src/d/da/daa/randomfile.ts",
      "../src/d/da/randomfile.ts",
      "../src/e/ea/eaa/eaaa/randomfile.ts",
      "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts",
      "../src/e/ea/eaa/randomfile.ts",
      "../src/e/ea/randomfile.ts",
      "../src/f/fa/faa/faaa/randomfile.ts",
      "../src/f/fa/faa/x/y/z/randomfile.ts",
      [
        "../src/filea.ts",
        [
          {
            "file": "../src/filea.ts",
            "start": 20,
            "length": 13,
            "messageText": "Module './fileB.mjs' cannot be imported using this construct. The specifier only resolves to an ES module, which cannot be imported synchronously. Use dynamic import instead.",
            "category": 1,
            "code": 1471
          }
        ]
      ],
      "../src/fileb.mts",
      "../src/randomfile.ts"
    ],
    "latestChangedDtsFile": "./randomFile.d.ts",
    "cacheResolutions": {
      "resolutions": [
        {
          "id": 1,
          "resolvedModule": {
            "resolvedFileName": "../src/fileB.mts"
          }
        }
      ],
      "names": [
        "./fileB.mjs"
      ],
      "resolutionEntries": [
        [
          "./fileB.mjs",
          {
            "id": 1,
            "resolvedModule": {
              "resolvedFileName": "../src/fileB.mts"
            }
          },
          "commonjs"
        ]
      ],
      "modules": [
        [
          "../src",
          [
            [
              "./fileB.mjs",
              {
                "id": 1,
                "resolvedModule": {
                  "resolvedFileName": "../src/fileB.mts"
                }
              },
              "commonjs"
            ]
          ]
        ]
      ],
      "packageJsons": [
        [
          "../src/a",
          "../package.json"
        ],
        [
          "../src/b/ba",
          "../package.json"
        ],
        [
          "../src/c/ca/caa/caaa",
          "../package.json"
        ],
        [
          "../src/c/cb",
          "../package.json"
        ],
        [
          "../src/d/da/daa/daaa/x/y/z",
          "../package.json"
        ],
        [
          "../src/e/ea/eaa/eaaa/x/y/z",
          "../package.json"
        ],
        [
          "../src/f/fa/faa/x/y/z",
          "../package.json"
        ],
        [
          "../src/f/fa/faa/faaa",
          "../package.json"
        ]
      ]
    }
  },
  "version": "FakeTSVersion",
  "size": 4796
}



Change:: Delete package.json
Input::
//// [/src/projects/project/package.json] unlink


Output::
/lib/tsc --p /src/projects/project/src --explainFiles
File '/src/projects/project/src/package.json' does not exist.
File '/src/projects/project/package.json' does not exist.
File '/src/projects/package.json' does not exist.
File '/src/package.json' does not exist.
File '/package.json' does not exist.
Reusing resolution of module './fileB.mjs' from '/src/projects/project/src/fileA.ts' found in cache from location '/src/projects/project/src', it was successfully resolved to '/src/projects/project/src/fileB.mts'.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/a/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/b/ba/package.json' does not exist.
File '/src/projects/project/src/b/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist.
File '/src/projects/project/src/c/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/package.json' does not exist.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/caaa/package.json' does not exist.
File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/cb/package.json' does not exist.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/x/y/z/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/daaa/x/y/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/daaa/x/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/package.json' does not exist.
File '/src/projects/project/src/d/da/package.json' does not exist.
File '/src/projects/project/src/d/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist.
File '/src/projects/project/src/e/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json' does not exist.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json' does not exist.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/package.json' does not exist.
File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/x/y/z/package.json' does not exist.
File '/src/projects/project/src/f/fa/faa/x/y/package.json' does not exist.
File '/src/projects/project/src/f/fa/faa/x/package.json' does not exist.
File '/src/projects/project/src/f/fa/faa/package.json' does not exist.
File '/src/projects/project/src/f/fa/package.json' does not exist.
File '/src/projects/project/src/f/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/faaa/package.json' does not exist.
File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/lib/package.json' does not exist.
File '/package.json' does not exist according to earlier cached lookups.
[96msrc/projects/project/src/fileA.ts[0m:[93m1[0m:[93m21[0m - [91merror[0m[90m TS1471: [0mModule './fileB.mjs' cannot be imported using this construct. The specifier only resolves to an ES module, which cannot be imported synchronously. Use dynamic import instead.

[7m1[0m import { foo } from "./fileB.mjs";
[7m [0m [91m                    ~~~~~~~~~~~~~[0m

lib/lib.es2016.full.d.ts
  Default library for target 'es2016'
src/projects/project/src/fileB.mts
  Imported via "./fileB.mjs" from file 'src/projects/project/src/fileA.ts'
  Part of 'files' list in tsconfig.json
src/projects/project/src/fileA.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/projects/project/src/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/projects/project/src/a/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/projects/project/src/b/ba/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/projects/project/src/b/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/projects/project/src/c/ca/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/projects/project/src/c/ca/caa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/projects/project/src/c/ca/caa/caaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/projects/project/src/c/cb/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/projects/project/src/d/da/daa/daaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/projects/project/src/d/da/daa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/projects/project/src/d/da/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/projects/project/src/e/ea/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/projects/project/src/e/ea/eaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/projects/project/src/f/fa/faa/faaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found

Found 1 error in src/projects/project/src/fileA.ts[90m:1[0m

exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated




Change:: Add package json file with type module
Input::
//// [/src/projects/project/package.json]
{"name":"app","version":"1.0.0","type":"module"}



Output::
/lib/tsc --p /src/projects/project/src --explainFiles
File '/src/projects/project/src/package.json' does not exist.
Found 'package.json' at '/src/projects/project/package.json'.
'package.json' does not have a 'typesVersions' field.
======== Resolving module './fileB.mjs' from '/src/projects/project/src/fileA.ts'. ========
Module resolution kind is not specified, using 'Node16'.
Loading module as file / folder, candidate module location '/src/projects/project/src/fileB.mjs', target file type 'TypeScript'.
File name '/src/projects/project/src/fileB.mjs' has a '.mjs' extension - stripping it.
File '/src/projects/project/src/fileB.mts' exist - use it as a name resolution result.
======== Module name './fileB.mjs' was successfully resolved to '/src/projects/project/src/fileB.mts'. ========
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/a/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/b/ba/package.json' does not exist.
File '/src/projects/project/src/b/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist.
File '/src/projects/project/src/c/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/package.json' does not exist.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/caaa/package.json' does not exist.
File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/c/cb/package.json' does not exist.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/x/y/z/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/daaa/x/y/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/daaa/x/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/package.json' does not exist.
File '/src/projects/project/src/d/da/package.json' does not exist.
File '/src/projects/project/src/d/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist.
File '/src/projects/project/src/e/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json' does not exist.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json' does not exist.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/package.json' does not exist.
File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/x/y/z/package.json' does not exist.
File '/src/projects/project/src/f/fa/faa/x/y/package.json' does not exist.
File '/src/projects/project/src/f/fa/faa/x/package.json' does not exist.
File '/src/projects/project/src/f/fa/faa/package.json' does not exist.
File '/src/projects/project/src/f/fa/package.json' does not exist.
File '/src/projects/project/src/f/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/faaa/package.json' does not exist.
File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
File '/lib/package.json' does not exist.
File '/package.json' does not exist.
lib/lib.es2016.full.d.ts
  Default library for target 'es2016'
src/projects/project/src/fileB.mts
  Imported via "./fileB.mjs" from file 'src/projects/project/src/fileA.ts'
  Part of 'files' list in tsconfig.json
src/projects/project/src/fileA.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'src/projects/project/package.json' has field "type" with value "module"
src/projects/project/src/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'src/projects/project/package.json' has field "type" with value "module"
src/projects/project/src/a/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'src/projects/project/package.json' has field "type" with value "module"
src/projects/project/src/b/ba/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'src/projects/project/package.json' has field "type" with value "module"
src/projects/project/src/b/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'src/projects/project/package.json' has field "type" with value "module"
src/projects/project/src/c/ca/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'src/projects/project/package.json' has field "type" with value "module"
src/projects/project/src/c/ca/caa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'src/projects/project/package.json' has field "type" with value "module"
src/projects/project/src/c/ca/caa/caaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'src/projects/project/package.json' has field "type" with value "module"
src/projects/project/src/c/cb/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'src/projects/project/package.json' has field "type" with value "module"
src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'src/projects/project/package.json' has field "type" with value "module"
src/projects/project/src/d/da/daa/daaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'src/projects/project/package.json' has field "type" with value "module"
src/projects/project/src/d/da/daa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'src/projects/project/package.json' has field "type" with value "module"
src/projects/project/src/d/da/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'src/projects/project/package.json' has field "type" with value "module"
src/projects/project/src/e/ea/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'src/projects/project/package.json' has field "type" with value "module"
src/projects/project/src/e/ea/eaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'src/projects/project/package.json' has field "type" with value "module"
src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'src/projects/project/package.json' has field "type" with value "module"
src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'src/projects/project/package.json' has field "type" with value "module"
src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'src/projects/project/package.json' has field "type" with value "module"
src/projects/project/src/f/fa/faa/faaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'src/projects/project/package.json' has field "type" with value "module"
exitCode:: ExitStatus.Success


//// [/src/projects/project/out/a/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/b/ba/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/b/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/c/ca/caa/caaa/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/c/ca/caa/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/c/ca/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/c/cb/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/d/da/daa/daaa/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/d/da/daa/daaa/x/y/z/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/d/da/daa/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/d/da/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/e/ea/eaa/eaaa/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/e/ea/eaa/eaaa/x/y/z/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/e/ea/eaa/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/e/ea/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/f/fa/faa/faaa/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/f/fa/faa/x/y/z/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/fileA.js]
import { foo } from "./fileB.mjs";
foo();


//// [/src/projects/project/out/randomFile.js]
export const x = 10;
export const y = 10;


//// [/src/projects/project/out/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../lib/lib.es2016.full.d.ts","../src/fileb.mts","../src/filea.ts","../src/randomfile.ts","../src/a/randomfile.ts","../src/b/ba/randomfile.ts","../src/b/randomfile.ts","../src/c/ca/randomfile.ts","../src/c/ca/caa/randomfile.ts","../src/c/ca/caa/caaa/randomfile.ts","../src/c/cb/randomfile.ts","../src/d/da/daa/daaa/x/y/z/randomfile.ts","../src/d/da/daa/daaa/randomfile.ts","../src/d/da/daa/randomfile.ts","../src/d/da/randomfile.ts","../src/e/ea/randomfile.ts","../src/e/ea/eaa/randomfile.ts","../src/e/ea/eaa/eaaa/randomfile.ts","../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts","../src/f/fa/faa/x/y/z/randomfile.ts","../src/f/fa/faa/faaa/randomfile.ts","../src","../src/a","../package.json","../src/b/ba","../src/c/ca/caa/caaa","../src/c/cb","../src/d/da/daa/daaa/x/y/z","../src/e/ea/eaa/eaaa/x/y/z","../src/f/fa/faa/x/y/z","../src/f/fa/faa/faaa","../src/fileB.mts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedFormat":1},{"version":"3524703962-export function foo() {}","signature":"-6972466928-export declare function foo(): void;\r\n","impliedFormat":99},{"version":"-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n","signature":"-4882119183-export {};\r\n","impliedFormat":99},{"version":"-9547279430-export const x = 10;export const y = 10;","signature":"-5110318392-export declare const x = 10;\r\nexport declare const y = 10;\r\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":99}],"options":{"cacheResolutions":true,"composite":true,"module":100,"outDir":"./","target":3},"fileIdsList":[[2]],"referencedMap":[[3,1]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,5,6,7,10,9,8,11,13,12,14,15,18,19,17,16,21,20,3,2,4],"latestChangedDtsFile":"./randomFile.d.ts","cacheResolutions":{"resolutions":[{"resolvedModule":{"resolvedFileName":32}}],"names":["./fileB.mjs"],"resolutionEntries":[[1,1,99]],"modules":[[22,[1]]],"packageJsons":[[23,24],[25,24],[26,24],[27,24],[28,24],[29,24],[30,24],[31,24]]}},"version":"FakeTSVersion"}

//// [/src/projects/project/out/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../lib/lib.es2016.full.d.ts",
      "../src/fileb.mts",
      "../src/filea.ts",
      "../src/randomfile.ts",
      "../src/a/randomfile.ts",
      "../src/b/ba/randomfile.ts",
      "../src/b/randomfile.ts",
      "../src/c/ca/randomfile.ts",
      "../src/c/ca/caa/randomfile.ts",
      "../src/c/ca/caa/caaa/randomfile.ts",
      "../src/c/cb/randomfile.ts",
      "../src/d/da/daa/daaa/x/y/z/randomfile.ts",
      "../src/d/da/daa/daaa/randomfile.ts",
      "../src/d/da/daa/randomfile.ts",
      "../src/d/da/randomfile.ts",
      "../src/e/ea/randomfile.ts",
      "../src/e/ea/eaa/randomfile.ts",
      "../src/e/ea/eaa/eaaa/randomfile.ts",
      "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts",
      "../src/f/fa/faa/x/y/z/randomfile.ts",
      "../src/f/fa/faa/faaa/randomfile.ts",
      "../src",
      "../src/a",
      "../package.json",
      "../src/b/ba",
      "../src/c/ca/caa/caaa",
      "../src/c/cb",
      "../src/d/da/daa/daaa/x/y/z",
      "../src/e/ea/eaa/eaaa/x/y/z",
      "../src/f/fa/faa/x/y/z",
      "../src/f/fa/faa/faaa",
      "../src/fileB.mts"
    ],
    "fileNamesList": [
      [
        "../src/fileb.mts"
      ]
    ],
    "fileInfos": {
      "../../../../lib/lib.es2016.full.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "../src/fileb.mts": {
        "version": "3524703962-export function foo() {}",
        "signature": "-6972466928-export declare function foo(): void;\r\n",
        "impliedFormat": "esnext"
      },
      "../src/filea.ts": {
        "version": "-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n",
        "signature": "-4882119183-export {};\r\n",
        "impliedFormat": "esnext"
      },
      "../src/randomfile.ts": {
        "version": "-9547279430-export const x = 10;export const y = 10;",
        "signature": "-5110318392-export declare const x = 10;\r\nexport declare const y = 10;\r\n",
        "impliedFormat": "esnext"
      },
      "../src/a/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "esnext"
      },
      "../src/b/ba/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "esnext"
      },
      "../src/b/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "esnext"
      },
      "../src/c/ca/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "esnext"
      },
      "../src/c/ca/caa/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "esnext"
      },
      "../src/c/ca/caa/caaa/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "esnext"
      },
      "../src/c/cb/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "esnext"
      },
      "../src/d/da/daa/daaa/x/y/z/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "esnext"
      },
      "../src/d/da/daa/daaa/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "esnext"
      },
      "../src/d/da/daa/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "esnext"
      },
      "../src/d/da/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "esnext"
      },
      "../src/e/ea/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "esnext"
      },
      "../src/e/ea/eaa/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "esnext"
      },
      "../src/e/ea/eaa/eaaa/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "esnext"
      },
      "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "esnext"
      },
      "../src/f/fa/faa/x/y/z/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "esnext"
      },
      "../src/f/fa/faa/faaa/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "esnext"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true,
      "module": 100,
      "outDir": "./",
      "target": 3
    },
    "referencedMap": {
      "../src/filea.ts": [
        "../src/fileb.mts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../lib/lib.es2016.full.d.ts",
      "../src/a/randomfile.ts",
      "../src/b/ba/randomfile.ts",
      "../src/b/randomfile.ts",
      "../src/c/ca/caa/caaa/randomfile.ts",
      "../src/c/ca/caa/randomfile.ts",
      "../src/c/ca/randomfile.ts",
      "../src/c/cb/randomfile.ts",
      "../src/d/da/daa/daaa/randomfile.ts",
      "../src/d/da/daa/daaa/x/y/z/randomfile.ts",
      "../src/d/da/daa/randomfile.ts",
      "../src/d/da/randomfile.ts",
      "../src/e/ea/eaa/eaaa/randomfile.ts",
      "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts",
      "../src/e/ea/eaa/randomfile.ts",
      "../src/e/ea/randomfile.ts",
      "../src/f/fa/faa/faaa/randomfile.ts",
      "../src/f/fa/faa/x/y/z/randomfile.ts",
      "../src/filea.ts",
      "../src/fileb.mts",
      "../src/randomfile.ts"
    ],
    "latestChangedDtsFile": "./randomFile.d.ts",
    "cacheResolutions": {
      "resolutions": [
        {
          "id": 1,
          "resolvedModule": {
            "resolvedFileName": "../src/fileB.mts"
          }
        }
      ],
      "names": [
        "./fileB.mjs"
      ],
      "resolutionEntries": [
        [
          "./fileB.mjs",
          {
            "id": 1,
            "resolvedModule": {
              "resolvedFileName": "../src/fileB.mts"
            }
          },
          "esnext"
        ]
      ],
      "modules": [
        [
          "../src",
          [
            [
              "./fileB.mjs",
              {
                "id": 1,
                "resolvedModule": {
                  "resolvedFileName": "../src/fileB.mts"
                }
              },
              "esnext"
            ]
          ]
        ]
      ],
      "packageJsons": [
        [
          "../src/a",
          "../package.json"
        ],
        [
          "../src/b/ba",
          "../package.json"
        ],
        [
          "../src/c/ca/caa/caaa",
          "../package.json"
        ],
        [
          "../src/c/cb",
          "../package.json"
        ],
        [
          "../src/d/da/daa/daaa/x/y/z",
          "../package.json"
        ],
        [
          "../src/e/ea/eaa/eaaa/x/y/z",
          "../package.json"
        ],
        [
          "../src/f/fa/faa/x/y/z",
          "../package.json"
        ],
        [
          "../src/f/fa/faa/faaa",
          "../package.json"
        ]
      ]
    }
  },
  "version": "FakeTSVersion",
  "size": 4546
}



Change:: Delete package.json and random edit
Input::
//// [/src/projects/project/package.json] unlink


Output::
/lib/tsc --p /src/projects/project/src --explainFiles
File '/src/projects/project/src/package.json' does not exist.
File '/src/projects/project/package.json' does not exist.
File '/src/projects/package.json' does not exist.
File '/src/package.json' does not exist.
File '/package.json' does not exist.
======== Resolving module './fileB.mjs' from '/src/projects/project/src/fileA.ts'. ========
Module resolution kind is not specified, using 'Node16'.
Loading module as file / folder, candidate module location '/src/projects/project/src/fileB.mjs', target file type 'TypeScript'.
File '/src/projects/project/src/fileB.mjs.ts' does not exist.
File '/src/projects/project/src/fileB.mjs.tsx' does not exist.
File '/src/projects/project/src/fileB.mjs.d.ts' does not exist.
File name '/src/projects/project/src/fileB.mjs' has a '.mjs' extension - stripping it.
File '/src/projects/project/src/fileB.mts' exist - use it as a name resolution result.
======== Module name './fileB.mjs' was successfully resolved to '/src/projects/project/src/fileB.mts'. ========
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/a/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/b/ba/package.json' does not exist.
File '/src/projects/project/src/b/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist.
File '/src/projects/project/src/c/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/package.json' does not exist.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/caa/caaa/package.json' does not exist.
File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/c/cb/package.json' does not exist.
File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/x/y/z/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/daaa/x/y/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/daaa/x/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/package.json' does not exist.
File '/src/projects/project/src/d/da/package.json' does not exist.
File '/src/projects/project/src/d/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist.
File '/src/projects/project/src/e/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json' does not exist.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json' does not exist.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/package.json' does not exist.
File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/x/y/z/package.json' does not exist.
File '/src/projects/project/src/f/fa/faa/x/y/package.json' does not exist.
File '/src/projects/project/src/f/fa/faa/x/package.json' does not exist.
File '/src/projects/project/src/f/fa/faa/package.json' does not exist.
File '/src/projects/project/src/f/fa/package.json' does not exist.
File '/src/projects/project/src/f/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/faa/faaa/package.json' does not exist.
File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/lib/package.json' does not exist.
File '/package.json' does not exist according to earlier cached lookups.
[96msrc/projects/project/src/fileA.ts[0m:[93m1[0m:[93m21[0m - [91merror[0m[90m TS1471: [0mModule './fileB.mjs' cannot be imported using this construct. The specifier only resolves to an ES module, which cannot be imported synchronously. Use dynamic import instead.

[7m1[0m import { foo } from "./fileB.mjs";
[7m [0m [91m                    ~~~~~~~~~~~~~[0m

lib/lib.es2016.full.d.ts
  Default library for target 'es2016'
src/projects/project/src/fileB.mts
  Imported via "./fileB.mjs" from file 'src/projects/project/src/fileA.ts'
  Part of 'files' list in tsconfig.json
src/projects/project/src/fileA.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/projects/project/src/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/projects/project/src/a/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/projects/project/src/b/ba/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/projects/project/src/b/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/projects/project/src/c/ca/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/projects/project/src/c/ca/caa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/projects/project/src/c/ca/caa/caaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/projects/project/src/c/cb/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/projects/project/src/d/da/daa/daaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/projects/project/src/d/da/daa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/projects/project/src/d/da/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/projects/project/src/e/ea/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/projects/project/src/e/ea/eaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/projects/project/src/f/fa/faa/faaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found

Found 1 error in src/projects/project/src/fileA.ts[90m:1[0m

exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated


//// [/src/projects/project/out/a/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/b/ba/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/b/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/c/ca/caa/caaa/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/c/ca/caa/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/c/ca/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/c/cb/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/d/da/daa/daaa/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/d/da/daa/daaa/x/y/z/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/d/da/daa/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/d/da/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/e/ea/eaa/eaaa/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/e/ea/eaa/eaaa/x/y/z/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/e/ea/eaa/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/e/ea/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/f/fa/faa/faaa/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/f/fa/faa/x/y/z/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/projects/project/out/fileA.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileB_mjs_1 = require("./fileB.mjs");
(0, fileB_mjs_1.foo)();


//// [/src/projects/project/out/randomFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.y = exports.x = void 0;
exports.x = 10;
exports.y = 10;


//// [/src/projects/project/out/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../lib/lib.es2016.full.d.ts","../src/fileb.mts","../src/filea.ts","../src/randomfile.ts","../src/a/randomfile.ts","../src/b/ba/randomfile.ts","../src/b/randomfile.ts","../src/c/ca/randomfile.ts","../src/c/ca/caa/randomfile.ts","../src/c/ca/caa/caaa/randomfile.ts","../src/c/cb/randomfile.ts","../src/d/da/daa/daaa/x/y/z/randomfile.ts","../src/d/da/daa/daaa/randomfile.ts","../src/d/da/daa/randomfile.ts","../src/d/da/randomfile.ts","../src/e/ea/randomfile.ts","../src/e/ea/eaa/randomfile.ts","../src/e/ea/eaa/eaaa/randomfile.ts","../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts","../src/f/fa/faa/x/y/z/randomfile.ts","../src/f/fa/faa/faaa/randomfile.ts","../src","../src/fileB.mts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedFormat":1},{"version":"3524703962-export function foo() {}","signature":"-6972466928-export declare function foo(): void;\r\n","impliedFormat":99},{"version":"-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n","signature":"-4882119183-export {};\r\n","impliedFormat":1},{"version":"-9547279430-export const x = 10;export const y = 10;","signature":"-5110318392-export declare const x = 10;\r\nexport declare const y = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1}],"options":{"cacheResolutions":true,"composite":true,"module":100,"outDir":"./","target":3},"fileIdsList":[[2]],"referencedMap":[[3,1]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,5,6,7,10,9,8,11,13,12,14,15,18,19,17,16,21,20,[3,[{"file":"../src/filea.ts","start":20,"length":13,"messageText":"Module './fileB.mjs' cannot be imported using this construct. The specifier only resolves to an ES module, which cannot be imported synchronously. Use dynamic import instead.","category":1,"code":1471}]],2,4],"latestChangedDtsFile":"./randomFile.d.ts","cacheResolutions":{"resolutions":[{"resolvedModule":{"resolvedFileName":23}}],"names":["./fileB.mjs"],"resolutionEntries":[[1,1,1]],"modules":[[22,[1]]]}},"version":"FakeTSVersion"}

//// [/src/projects/project/out/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../lib/lib.es2016.full.d.ts",
      "../src/fileb.mts",
      "../src/filea.ts",
      "../src/randomfile.ts",
      "../src/a/randomfile.ts",
      "../src/b/ba/randomfile.ts",
      "../src/b/randomfile.ts",
      "../src/c/ca/randomfile.ts",
      "../src/c/ca/caa/randomfile.ts",
      "../src/c/ca/caa/caaa/randomfile.ts",
      "../src/c/cb/randomfile.ts",
      "../src/d/da/daa/daaa/x/y/z/randomfile.ts",
      "../src/d/da/daa/daaa/randomfile.ts",
      "../src/d/da/daa/randomfile.ts",
      "../src/d/da/randomfile.ts",
      "../src/e/ea/randomfile.ts",
      "../src/e/ea/eaa/randomfile.ts",
      "../src/e/ea/eaa/eaaa/randomfile.ts",
      "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts",
      "../src/f/fa/faa/x/y/z/randomfile.ts",
      "../src/f/fa/faa/faaa/randomfile.ts",
      "../src",
      "../src/fileB.mts"
    ],
    "fileNamesList": [
      [
        "../src/fileb.mts"
      ]
    ],
    "fileInfos": {
      "../../../../lib/lib.es2016.full.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "../src/fileb.mts": {
        "version": "3524703962-export function foo() {}",
        "signature": "-6972466928-export declare function foo(): void;\r\n",
        "impliedFormat": "esnext"
      },
      "../src/filea.ts": {
        "version": "-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n",
        "signature": "-4882119183-export {};\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/randomfile.ts": {
        "version": "-9547279430-export const x = 10;export const y = 10;",
        "signature": "-5110318392-export declare const x = 10;\r\nexport declare const y = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/a/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/b/ba/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/b/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/c/ca/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/c/ca/caa/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/c/ca/caa/caaa/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/c/cb/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/d/da/daa/daaa/x/y/z/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/d/da/daa/daaa/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/d/da/daa/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/d/da/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/e/ea/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/e/ea/eaa/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/e/ea/eaa/eaaa/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/f/fa/faa/x/y/z/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "../src/f/fa/faa/faaa/randomfile.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true,
      "module": 100,
      "outDir": "./",
      "target": 3
    },
    "referencedMap": {
      "../src/filea.ts": [
        "../src/fileb.mts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../lib/lib.es2016.full.d.ts",
      "../src/a/randomfile.ts",
      "../src/b/ba/randomfile.ts",
      "../src/b/randomfile.ts",
      "../src/c/ca/caa/caaa/randomfile.ts",
      "../src/c/ca/caa/randomfile.ts",
      "../src/c/ca/randomfile.ts",
      "../src/c/cb/randomfile.ts",
      "../src/d/da/daa/daaa/randomfile.ts",
      "../src/d/da/daa/daaa/x/y/z/randomfile.ts",
      "../src/d/da/daa/randomfile.ts",
      "../src/d/da/randomfile.ts",
      "../src/e/ea/eaa/eaaa/randomfile.ts",
      "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts",
      "../src/e/ea/eaa/randomfile.ts",
      "../src/e/ea/randomfile.ts",
      "../src/f/fa/faa/faaa/randomfile.ts",
      "../src/f/fa/faa/x/y/z/randomfile.ts",
      [
        "../src/filea.ts",
        [
          {
            "file": "../src/filea.ts",
            "start": 20,
            "length": 13,
            "messageText": "Module './fileB.mjs' cannot be imported using this construct. The specifier only resolves to an ES module, which cannot be imported synchronously. Use dynamic import instead.",
            "category": 1,
            "code": 1471
          }
        ]
      ],
      "../src/fileb.mts",
      "../src/randomfile.ts"
    ],
    "latestChangedDtsFile": "./randomFile.d.ts",
    "cacheResolutions": {
      "resolutions": [
        {
          "id": 1,
          "resolvedModule": {
            "resolvedFileName": "../src/fileB.mts"
          }
        }
      ],
      "names": [
        "./fileB.mjs"
      ],
      "resolutionEntries": [
        [
          "./fileB.mjs",
          {
            "id": 1,
            "resolvedModule": {
              "resolvedFileName": "../src/fileB.mts"
            }
          },
          "commonjs"
        ]
      ],
      "modules": [
        [
          "../src",
          [
            [
              "./fileB.mjs",
              {
                "id": 1,
                "resolvedModule": {
                  "resolvedFileName": "../src/fileB.mts"
                }
              },
              "commonjs"
            ]
          ]
        ]
      ]
    }
  },
  "version": "FakeTSVersion",
  "size": 4530
}

