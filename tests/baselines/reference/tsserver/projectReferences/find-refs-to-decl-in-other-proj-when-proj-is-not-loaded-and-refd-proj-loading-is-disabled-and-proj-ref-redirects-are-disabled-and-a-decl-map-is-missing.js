Provided types map file "/a/lib/typesMap.json" doesn't exist
request:{"seq":0,"type":"request","command":"open","arguments":{"file":"/user/username/projects/myproject/a/index.ts"}}
Search path: /user/username/projects/myproject/a
For info: /user/username/projects/myproject/a/index.ts :: Config file name: /user/username/projects/myproject/a/tsconfig.json
Creating configuration project /user/username/projects/myproject/a/tsconfig.json
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/a/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/a/tsconfig.json WatchType: Config file
Config: /user/username/projects/myproject/a/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/a/index.ts"
 ],
 "options": {
  "disableReferencedProjectLoad": true,
  "disableSourceOfProjectReferenceRedirect": true,
  "composite": true,
  "configFilePath": "/user/username/projects/myproject/a/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/user/username/projects/myproject/b",
   "originalPath": "../b"
  }
 ]
}
DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/a 1 undefined Config: /user/username/projects/myproject/a/tsconfig.json WatchType: Wild card directory
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/a 1 undefined Config: /user/username/projects/myproject/a/tsconfig.json WatchType: Wild card directory
Plugins were requested but not running in environment that supports 'require'. Nothing will be loaded
Starting updateGraphWorker: Project: /user/username/projects/myproject/a/tsconfig.json
Config: /user/username/projects/myproject/b/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/b/helper.ts",
  "/user/username/projects/myproject/b/index.ts"
 ],
 "options": {
  "declarationMap": true,
  "outDir": "/user/username/projects/myproject/b/lib",
  "composite": true,
  "configFilePath": "/user/username/projects/myproject/b/tsconfig.json"
 }
}
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/b/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/a/tsconfig.json WatchType: Config file
DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/b 1 undefined Config: /user/username/projects/myproject/b/tsconfig.json WatchType: Wild card directory
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/b 1 undefined Config: /user/username/projects/myproject/b/tsconfig.json WatchType: Wild card directory
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/b/lib/index.d.ts 500 undefined WatchType: Closed Script info
DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/b 1 undefined Project: /user/username/projects/myproject/a/tsconfig.json WatchType: Failed Lookup Locations
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/b 1 undefined Project: /user/username/projects/myproject/a/tsconfig.json WatchType: Failed Lookup Locations
DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/a/node_modules/@types 1 undefined Project: /user/username/projects/myproject/a/tsconfig.json WatchType: Type roots
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/a/node_modules/@types 1 undefined Project: /user/username/projects/myproject/a/tsconfig.json WatchType: Type roots
DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/a/tsconfig.json WatchType: Type roots
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/a/tsconfig.json WatchType: Type roots
FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined Project: /user/username/projects/myproject/a/tsconfig.json WatchType: Missing file
Finishing updateGraphWorker: Project: /user/username/projects/myproject/a/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Project '/user/username/projects/myproject/a/tsconfig.json' (Configured)
	Files (2)
	/user/username/projects/myproject/b/lib/index.d.ts
	/user/username/projects/myproject/a/index.ts


	../b/lib/index.d.ts
	  Imported via "../b/lib" from file 'index.ts'
	index.ts
	  Matched by default include pattern '**/*'

-----------------------------------------------
Search path: /user/username/projects/myproject/a
For info: /user/username/projects/myproject/a/tsconfig.json :: No config files found.
Project '/user/username/projects/myproject/a/tsconfig.json' (Configured)
	Files (2)

-----------------------------------------------
Open files: 
	FileName: /user/username/projects/myproject/a/index.ts ProjectRootPath: undefined
		Projects: /user/username/projects/myproject/a/tsconfig.json
response:{"responseRequired":false}
request:{"command":"references","arguments":{"file":"/user/username/projects/myproject/a/index.ts","line":3,"offset":10},"seq":1,"type":"request"}
Finding references to /user/username/projects/myproject/a/index.ts position 40 in project /user/username/projects/myproject/a/tsconfig.json
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/b/lib/index.d.ts.map 2000 undefined WatchType: Missing source map file
response:{"response":{"refs":[{"file":"/user/username/projects/myproject/a/index.ts","start":{"line":1,"offset":10},"end":{"line":1,"offset":11},"contextStart":{"line":1,"offset":1},"contextEnd":{"line":1,"offset":30},"lineText":"import { B } from \"../b/lib\";","isWriteAccess":true},{"file":"/user/username/projects/myproject/a/index.ts","start":{"line":3,"offset":10},"end":{"line":3,"offset":11},"lineText":"const b: B = new B();","isWriteAccess":false},{"file":"/user/username/projects/myproject/a/index.ts","start":{"line":3,"offset":18},"end":{"line":3,"offset":19},"lineText":"const b: B = new B();","isWriteAccess":false},{"file":"/user/username/projects/myproject/b/lib/index.d.ts","start":{"line":1,"offset":22},"end":{"line":1,"offset":23},"contextStart":{"line":1,"offset":1},"contextEnd":{"line":3,"offset":2},"lineText":"export declare class B {","isWriteAccess":true}],"symbolName":"B","symbolStartOffset":10,"symbolDisplayString":"(alias) class B\nimport B"},"responseRequired":true}