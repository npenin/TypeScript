//// [esDecorators-classDeclaration-fields-staticAccessor.ts]
declare let dec: any;

const field3 = "field3";

class C {
    @dec(1) static accessor field1 = 1;
    @dec(2) static accessor ["field2"] = 2;
    @dec(3) static accessor [field3] = 3;
}

// TODO: We should translate static private to weakmaps when < ESNext
@dec
class D {
    static accessor field1 = 1;
    static {
        this.field1;
        this.field1 = 1;
    }
}

//// [esDecorators-classDeclaration-fields-staticAccessor.js]
const field3 = "field3";
let C = (() => {
    var _a;
    let _staticExtraInitializers = [];
    let _static_field1_decorators;
    let _static_field1_initializers = [];
    let _static_member_decorators;
    let _static_member_initializers = [];
    let _static_member_decorators_1;
    let _static_member_initializers_1 = [];
    return class C {
        static {
            __esDecorate(this, null, _static_field1_decorators, { kind: "accessor", name: "field1", static: true, private: false, access: { get() { return this.field1; }, set(value) { this.field1 = value; } } }, _static_field1_initializers, _staticExtraInitializers);
            __esDecorate(this, null, _static_member_decorators, { kind: "accessor", name: "field2", static: true, private: false, access: { get() { return this["field2"]; }, set(value) { this["field2"] = value; } } }, _static_member_initializers, _staticExtraInitializers);
            __esDecorate(this, null, _static_member_decorators_1, { kind: "accessor", name: _a, static: true, private: false, access: { get() { return this[_a]; }, set(value) { this[_a] = value; } } }, _static_member_initializers_1, _staticExtraInitializers);
            __runInitializers(this, _staticExtraInitializers);
        }
        static #field1_accessor_storage = __runInitializers(this, _static_field1_initializers, 1);
        static get field1() { return this.#field1_accessor_storage; }
        static set field1(value) { this.#field1_accessor_storage = value; }
        static #_a_accessor_storage = __runInitializers(this, _static_member_initializers, 2);
        static get ["field2"]() { return this.#_a_accessor_storage; }
        static set ["field2"](value) { this.#_a_accessor_storage = value; }
        static #_b_accessor_storage = __runInitializers(this, _static_member_initializers_1, 3);
        static get [(_static_field1_decorators = [dec(1)], _static_member_decorators = [dec(2)], _static_member_decorators_1 = [dec(3)], _a = __propKey(field3))]() { return this.#_b_accessor_storage; }
        static set [_a](value) { this.#_b_accessor_storage = value; }
    };
})();
let D = (() => {
    let _classDecorators = [dec];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var D = class {
        static {
            __esDecorate(null, _classDescriptor = { value: this }, _classDecorators, { kind: "class", name: this.name }, null, _classExtraInitializers);
            D = _classThis = _classDescriptor.value;
        }
        static #field1_1_accessor_storage = 1;
        static get field1() { return this.#field1_1_accessor_storage; }
        static set field1(value) { this.#field1_1_accessor_storage = value; }
        static {
            _classThis.field1;
            _classThis.field1 = 1;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return D = _classThis;
})();
