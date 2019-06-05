"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asteria_gaia_1 = require("asteria-gaia");
class HyperionModuleRegistryImpl extends asteria_gaia_1.AbstractAsteriaRegistry {
    constructor() {
        super('com.asteria.hyperion.core.module.impl::HyperionModuleRegistryImpl');
    }
    add(module) {
        this.MAP.set(module.getId(), module);
    }
    remove(module) {
        this.MAP.delete(module.getId());
    }
}
exports.HyperionModuleRegistryImpl = HyperionModuleRegistryImpl;
