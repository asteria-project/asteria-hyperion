"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asteria_gaia_1 = require("asteria-gaia");
class HyperionModuleRegistry extends asteria_gaia_1.AbstractAsteriaObject {
    constructor() {
        super('com.asteria.hyperion.core.module::HyperionModuleRegistry');
        this.MODULES = null;
        this.MODULES = new Map();
    }
    add(module) {
        this.MODULES.set(module.getId(), module);
    }
    get(id) {
        return this.MODULES.get(id);
    }
    has(id) {
        return this.MODULES.has(id);
    }
}
exports.HyperionModuleRegistry = HyperionModuleRegistry;
