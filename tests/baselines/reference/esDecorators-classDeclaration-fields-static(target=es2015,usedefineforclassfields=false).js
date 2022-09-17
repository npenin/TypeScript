//// [esDecorators-classDeclaration-fields-static.ts]
declare let dec: any;

const field3 = "field3";

class C {
    @dec(1) static field1 = 1;
    @dec(2) static ["field2"] = 2;
    @dec(3) static [field3] = 3;
}


//// [esDecorators-classDeclaration-fields-static.js]
const field3 = "field3";
let C = (() => {
    var _a, _b;
    var _c;
    let _staticExtraInitializers = [];
    let _static_field1_decorators;
    let _static_field1_initializers = [];
    let _static_member_decorators;
    let _static_member_initializers = [];
    let _static_member_decorators_1;
    let _static_member_initializers_1 = [];
    return _a = class C {
        },
        _b = (_static_field1_decorators = [dec(1)], _static_member_decorators = [dec(2)], _static_member_decorators_1 = [dec(3)], _c = __propKey(field3)),
        (() => {
            __esDecorate(null, null, _static_field1_decorators, { kind: "field", name: "field1", static: true, private: false, access: { get() { return this.field1; }, set(value) { this.field1 = value; } } }, _static_field1_initializers, _staticExtraInitializers);
            __esDecorate(null, null, _static_member_decorators, { kind: "field", name: "field2", static: true, private: false, access: { get() { return this["field2"]; }, set(value) { this["field2"] = value; } } }, _static_member_initializers, _staticExtraInitializers);
            __esDecorate(null, null, _static_member_decorators_1, { kind: "field", name: _c, static: true, private: false, access: { get() { return this[_c]; }, set(value) { this[_c] = value; } } }, _static_member_initializers_1, _staticExtraInitializers);
            __runInitializers(_a, _staticExtraInitializers);
        })(),
        _a.field1 = __runInitializers(_a, _static_field1_initializers, 1),
        _a["field2"] = __runInitializers(_a, _static_member_initializers, 2),
        _a[_b] = __runInitializers(_a, _static_member_initializers_1, 3),
        _a;
})();
