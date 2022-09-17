//// [esDecorators-classDeclaration-accessors-static.ts]
declare let dec: any;

const method3 = "method3";

class C {
    @dec(11) static get method1() { return 0; }
    @dec(12) static set method1(value) {}
    @dec(21) static get ["method2"]() { return 0; }
    @dec(22) static set ["method2"](value) {}
    @dec(31) static get [method3]() { return 0; }
    @dec(32) static set [method3](value) {}
}


//// [esDecorators-classDeclaration-accessors-static.js]
const method3 = "method3";
let C = (() => {
    var _a;
    var _b, _c;
    let _staticExtraInitializers = [];
    let _static_get_method1_decorators;
    let _static_set_method1_decorators;
    let _static_get_member_decorators;
    let _static_set_member_decorators;
    let _static_get_member_decorators_1;
    let _static_set_member_decorators_1;
    return _a = class C {
            static get method1() { return 0; }
            static set method1(value) { }
            static get ["method2"]() { return 0; }
            static set ["method2"](value) { }
            static get [(_static_get_method1_decorators = [dec(11)], _static_set_method1_decorators = [dec(12)], _static_get_member_decorators = [dec(21)], _static_set_member_decorators = [dec(22)], _static_get_member_decorators_1 = [dec(31)], _b = __propKey(method3))]() { return 0; }
            static set [(_static_set_member_decorators_1 = [dec(32)], _c = __propKey(method3))](value) { }
        },
        (() => {
            __esDecorate(_a, null, _static_get_method1_decorators, { kind: "getter", name: "method1", static: true, private: false, access: { get() { return this.method1; } } }, null, _staticExtraInitializers);
            __esDecorate(_a, null, _static_set_method1_decorators, { kind: "setter", name: "method1", static: true, private: false, access: { set(value) { this.method1 = value; } } }, null, _staticExtraInitializers);
            __esDecorate(_a, null, _static_get_member_decorators, { kind: "getter", name: "method2", static: true, private: false, access: { get() { return this["method2"]; } } }, null, _staticExtraInitializers);
            __esDecorate(_a, null, _static_set_member_decorators, { kind: "setter", name: "method2", static: true, private: false, access: { set(value) { this["method2"] = value; } } }, null, _staticExtraInitializers);
            __esDecorate(_a, null, _static_get_member_decorators_1, { kind: "getter", name: _b, static: true, private: false, access: { get() { return this[_b]; } } }, null, _staticExtraInitializers);
            __esDecorate(_a, null, _static_set_member_decorators_1, { kind: "setter", name: _c, static: true, private: false, access: { set(value) { this[_c] = value; } } }, null, _staticExtraInitializers);
            __runInitializers(_a, _staticExtraInitializers);
        })(),
        _a;
})();
