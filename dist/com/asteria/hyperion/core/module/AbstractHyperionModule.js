"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asteria_gaia_1 = require("asteria-gaia");
const asteria_ouranos_1 = require("asteria-ouranos");
class AbstractHyperionModule extends asteria_gaia_1.AbstractAsteriaObject {
    constructor(id, processClass, adapterClass, validatorClass, className) {
        super(className);
        this.ID = null;
        this.PROCESS_CLASS = null;
        this.ADAPTER_CLASS = null;
        this.VALIDATOR_CLASS = null;
        this.ID = id;
        this.PROCESS_CLASS = processClass;
        this.ADAPTER_CLASS = adapterClass;
        this.VALIDATOR_CLASS = validatorClass;
    }
    getId() {
        return this.ID;
    }
    getValidator() {
        return new this.VALIDATOR_CLASS();
    }
    buildStreamProcess(config) {
        const adapter = new this.ADAPTER_CLASS();
        const process = asteria_ouranos_1.Ouranos.buildProcess(this.PROCESS_CLASS, adapter.convert(config));
        return process;
    }
}
exports.AbstractHyperionModule = AbstractHyperionModule;
