Input::
//// [/user/username/projects/myproject/tsconfig.json]
{"compilerOptions":{"moduleResolution":"nodenext","outDir":"./dist","declaration":true,"declarationDir":"./types"}}

//// [/user/username/projects/myproject/package.json]
{"name":"@this/package","type":"module","exports":{".":{"default":"./dist/index.js","types":"./types/index.d.ts"}}}

//// [/user/username/projects/myproject/index.ts]
import * as me from "@this/package";
me.thing()
export function thing(): void {}


//// [/user/username/projects/myproject/index2.ts]
export function thing(): void {}


//// [/a/lib/lib.d.ts]
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


/a/lib/tsc.js -w --traceResolution
Output::
>> Screen clear
[[90m12:00:25 AM[0m] Starting compilation in watch mode...

Found 'package.json' at '/user/username/projects/myproject/package.json'.
'package.json' does not have a 'typesVersions' field.
======== Resolving module '@this/package' from '/user/username/projects/myproject/index.ts'. ========
Explicitly specified module resolution kind: 'NodeNext'.
File '/user/username/projects/myproject/package.json' exists according to earlier cached lookups.
File '/user/username/projects/myproject/index.ts' exist - use it as a name resolution result.
Resolving real path for '/user/username/projects/myproject/index.ts', result '/user/username/projects/myproject/index.ts'.
======== Module name '@this/package' was successfully resolved to '/user/username/projects/myproject/index.ts'. ========
File '/user/username/projects/myproject/package.json' exists according to earlier cached lookups.
File '/a/lib/package.json' does not exist.
File '/a/package.json' does not exist.
File '/package.json' does not exist.
[91merror[0m[90m TS2209: [0mThe project root is ambiguous, but is required to resolve export map entry '.' in file '/user/username/projects/myproject/package.json'. Supply the `rootDir` compiler option to disambiguate.

[[90m12:00:40 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/user/username/projects/myproject/index.ts","/user/username/projects/myproject/index2.ts"]
Program options: {"moduleResolution":99,"outDir":"/user/username/projects/myproject/dist","declaration":true,"declarationDir":"/user/username/projects/myproject/types","watch":true,"traceResolution":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/index.ts
/user/username/projects/myproject/index2.ts

No cached semantic diagnostics in the builder::

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/user/username/projects/myproject/index.ts (computed .d.ts during emit)
/user/username/projects/myproject/index2.ts (computed .d.ts during emit)

WatchedFiles::
/user/username/projects/myproject/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/index.ts:
  {"fileName":"/user/username/projects/myproject/index.ts","pollingInterval":250}
/user/username/projects/myproject/index2.ts:
  {"fileName":"/user/username/projects/myproject/index2.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}
/user/username/projects/myproject/package.json:
  {"fileName":"/user/username/projects/myproject/package.json","pollingInterval":250}
/user/username/projects/myproject/node_modules/@types:
  {"fileName":"/user/username/projects/myproject/node_modules/@types","pollingInterval":500}

FsWatches::

FsWatchesRecursive::
/user/username/projects/myproject:
  {"directoryName":"/user/username/projects/myproject"}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/dist/index.js]
"use strict";
exports.__esModule = true;
exports.thing = void 0;
var me = require("@this/package");
me.thing();
function thing() { }
exports.thing = thing;


//// [/user/username/projects/myproject/types/index.d.ts]
export declare function thing(): void;


//// [/user/username/projects/myproject/dist/index2.js]
"use strict";
exports.__esModule = true;
exports.thing = void 0;
function thing() { }
exports.thing = thing;


//// [/user/username/projects/myproject/types/index2.d.ts]
export declare function thing(): void;



Change:: Add import to index2

Input::
//// [/user/username/projects/myproject/index2.ts]
import * as me from "./index.js";export function thing(): void {}



Output::
>> Screen clear
[[90m12:00:43 AM[0m] File change detected. Starting incremental compilation...

File '/a/lib/package.json' does not exist according to earlier cached lookups.
File '/a/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/user/username/projects/myproject/package.json' exists according to earlier cached lookups.
File '/user/username/projects/myproject/package.json' exists according to earlier cached lookups.
File '/user/username/projects/myproject/package.json' exists according to earlier cached lookups.
Reusing resolution of module '@this/package' from '/user/username/projects/myproject/index.ts' of old program, it was successfully resolved to '/user/username/projects/myproject/index.ts'.
File '/user/username/projects/myproject/package.json' exists according to earlier cached lookups.
======== Resolving module './index.js' from '/user/username/projects/myproject/index2.ts'. ========
Explicitly specified module resolution kind: 'NodeNext'.
Loading module as file / folder, candidate module location '/user/username/projects/myproject/index.js', target file type 'TypeScript'.
File name '/user/username/projects/myproject/index.js' has a '.js' extension - stripping it.
File '/user/username/projects/myproject/index.ts' exist - use it as a name resolution result.
======== Module name './index.js' was successfully resolved to '/user/username/projects/myproject/index.ts'. ========
File '/a/lib/package.json' does not exist according to earlier cached lookups.
File '/a/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
[91merror[0m[90m TS2209: [0mThe project root is ambiguous, but is required to resolve export map entry '.' in file '/user/username/projects/myproject/package.json'. Supply the `rootDir` compiler option to disambiguate.

[[90m12:00:50 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/user/username/projects/myproject/index.ts","/user/username/projects/myproject/index2.ts"]
Program options: {"moduleResolution":99,"outDir":"/user/username/projects/myproject/dist","declaration":true,"declarationDir":"/user/username/projects/myproject/types","watch":true,"traceResolution":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: SafeModules
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/index.ts
/user/username/projects/myproject/index2.ts

No cached semantic diagnostics in the builder::

Shape signatures in builder refreshed for::
/user/username/projects/myproject/index2.ts (computed .d.ts)

WatchedFiles::
/user/username/projects/myproject/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/index.ts:
  {"fileName":"/user/username/projects/myproject/index.ts","pollingInterval":250}
/user/username/projects/myproject/index2.ts:
  {"fileName":"/user/username/projects/myproject/index2.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}
/user/username/projects/myproject/package.json:
  {"fileName":"/user/username/projects/myproject/package.json","pollingInterval":250}
/user/username/projects/myproject/node_modules/@types:
  {"fileName":"/user/username/projects/myproject/node_modules/@types","pollingInterval":500}

FsWatches::

FsWatchesRecursive::
/user/username/projects/myproject:
  {"directoryName":"/user/username/projects/myproject"}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/dist/index2.js] file written with same contents
//// [/user/username/projects/myproject/types/index2.d.ts] file written with same contents
