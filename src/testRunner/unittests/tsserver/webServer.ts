namespace ts.projectSystem {
    describe("unittests:: tsserver:: webServer", () => {
        class TestWorkerSession extends server.WorkerSession {
            constructor(host: server.ServerHost, fshost: server.FileServerHost | undefined, webHost: server.HostWithWriteMessage, options: Partial<server.StartSessionOptions>, logger: server.Logger) {
                super(
                    host,
                    fshost,
                    webHost,
                    {
                        globalPlugins: undefined,
                        pluginProbeLocations: undefined,
                        allowLocalPluginLoads: undefined,
                        useSingleInferredProject: true,
                        useInferredProjectPerProjectRoot: false,
                        suppressDiagnosticEvents: false,
                        noGetErrOnBackgroundUpdate: true,
                        syntaxOnly: undefined,
                        serverMode: undefined,
                        ...options
                    },
                    logger,
                    server.nullCancellationToken,
                    () => emptyArray
                );
            }

            getProjectService() {
                return this.projectService;
            }
        }
        function setup(logLevel: server.LogLevel | undefined, isVfs: boolean) {
            const host = createServerHost([libFile], { windowsStyleRoot: "c:/" });
            const messages: any[] = [];
            const webHost: server.WebHost = {
                readFile: s => host.readFile(s),
                fileExists: s => host.fileExists(s),
                writeMessage: s => messages.push(s),
            };
            const webSys = server.createWebSystem(webHost, emptyArray, () => host.getExecutingFilePath());
            let serverMode = LanguageServiceMode.PartialSemantic;
            let fshost: VirtualFS.VirtualServerHost | undefined;
            if (isVfs) {
                serverMode = LanguageServiceMode.Semantic;
                fshost = VirtualFS.createVirtualServerHost({ executingFilePath: "/a/lib/tsc.js" });
                (fshost).ensureFileOrFolder(libFile);
            }
            const logger = logLevel !== undefined ? new server.MainProcessLogger(logLevel, webHost) : nullLogger();
            const session = new TestWorkerSession(webSys, fshost, webHost, { serverMode }, logger);
            return { getMessages: () => messages, clearMessages: () => messages.length = 0, session };

        }

        describe("open files are added to inferred project and semantic operations succeed", () => {
            function verify(logLevel: server.LogLevel | undefined, isVfs: boolean) {
                const { session, clearMessages, getMessages } = setup(logLevel, isVfs);
                const service = session.getProjectService();
                const file: File = isVfs ? {
                    path: "/sample-folder/large.ts",
                    content: "export const numberConst = 10; export const arrayConst: Array<string> = [];"
                } : {
                    path: "^memfs:/sample-folder/large.ts",
                    content: "export const numberConst = 10; export const arrayConst: Array<string> = [];"
                };
                // Lib files are rooted
                const libFilePath = isVfs ? "/a/lib/lib.d.ts" : "/lib.d.ts";
                session.executeCommand({
                    seq: 1,
                    type: "request",
                    command: protocol.CommandTypes.Open,
                    arguments: {
                        file: file.path,
                        fileContent: file.content
                    }
                });
                checkNumberOfProjects(service, { inferredProjects: 1 });
                const project = service.inferredProjects[0];
                checkProjectActualFiles(project, [libFilePath, file.path]);
                verifyQuickInfo();
                verifyGotoDefInLib();

                function verifyQuickInfo() {
                    clearMessages();
                    const start = protocolFileLocationFromSubstring(file, "numberConst");
                    session.onMessage({
                        seq: 2,
                        type: "request",
                        command: protocol.CommandTypes.Quickinfo,
                        arguments: start
                    });
                    assert.deepEqual(last(getMessages()), {
                        seq: 0,
                        type: "response",
                        command: protocol.CommandTypes.Quickinfo,
                        request_seq: 2,
                        success: true,
                        performanceData: undefined,
                        body: {
                            kind: ScriptElementKind.constElement,
                            kindModifiers: "export",
                            start: { line: start.line, offset: start.offset },
                            end: { line: start.line, offset: start.offset + "numberConst".length },
                            displayString: "const numberConst: 10",
                            documentation: "",
                            tags: []
                        }
                    });
                    verifyLogger();
                }

                function verifyGotoDefInLib() {
                    clearMessages();
                    const start = protocolFileLocationFromSubstring(file, "Array");
                    session.onMessage({
                        seq: 3,
                        type: "request",
                        command: protocol.CommandTypes.DefinitionAndBoundSpan,
                        arguments: start
                    });
                    assert.deepEqual(last(getMessages()), {
                        seq: 0,
                        type: "response",
                        command: protocol.CommandTypes.DefinitionAndBoundSpan,
                        request_seq: 3,
                        success: true,
                        performanceData: undefined,
                        body: {
                            definitions: [{
                                file: libFilePath,
                                ...protocolTextSpanWithContextFromSubstring({
                                    fileText: libFile.content,
                                    text: "Array",
                                    contextText: "interface Array<T> { length: number; [n: number]: T; }"
                                })
                            }],
                            textSpan: {
                                start: { line: start.line, offset: start.offset },
                                end: { line: start.line, offset: start.offset + "Array".length },
                            }
                        }
                    });
                    verifyLogger();
                }

                function verifyLogger() {
                    const messages = getMessages();
                    assert.equal(messages.length, logLevel === server.LogLevel.verbose ? 4 : 1, `Expected ${JSON.stringify(messages)}`);
                    if (logLevel === server.LogLevel.verbose) {
                        verifyLogMessages(messages[0], "info");
                        verifyLogMessages(messages[1], "perf");
                        verifyLogMessages(messages[2], "info");
                    }
                    clearMessages();
                }

                function verifyLogMessages(actual: any, expectedLevel: server.MessageLogLevel) {
                    assert.equal(actual.type, "log");
                    assert.equal(actual.level, expectedLevel);
                }
            }

            it("with logging enabled", () => {
                verify(server.LogLevel.verbose, /*trueVirtual*/ false);
            });

            it("with logging disabled", () => {
                verify(/*logLevel*/ undefined, /*trueVirtual*/ false);
            });

            it("with memfs virtual file system", () => {
                verify(/*logLevel*/ undefined, /*trueVirtual*/ true);
            });
        });
    });
}
