Input::
//// [/user/username/projects/myproject/a.ts]
export class a { prop = "hello"; foo() { return this.prop; } }

//// [/user/username/projects/myproject/b.ts]
export class b { prop = "hello"; foo() { return this.prop; } }

//// [/user/username/projects/myproject/tsconfig.json]
{}

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


/a/lib/tsc.js -w --extendedDiagnostics --watchFactory myplugin/../malicious
Output::
error TS5096: 'watchFactory' name can only be a package name.


PolledWatches::

FsWatches::

FsWatchesRecursive::


Plugin Watches::
WatchedFiles::
WatchedDirectories:Recursive::
WatchedDirectories::
exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped

