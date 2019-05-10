"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asteria_gaia_1 = require("asteria-gaia");
const asteria_ouranos_1 = require("asteria-ouranos");
const HyperionProcessor_1 = require("../processor/HyperionProcessor");
const HyperionBaseProcessDef_1 = require("../util/HyperionBaseProcessDef");
const HyperionValidatorManager_1 = require("../validator/HyperionValidatorManager");
class Hyperion extends asteria_gaia_1.AbstractAsteriaObject {
    constructor(config) {
        super('com.asteria.hyperion.lang::Hyperion');
        this.SESSION = null;
        this.PROCESSOR = null;
        this.VALIDATOR_MANAGER = null;
        this.SESSION = asteria_ouranos_1.Ouranos.createSession({ name: config.name });
        this.PROCESSOR = new HyperionProcessor_1.HyperionProcessor(this.SESSION);
        this.VALIDATOR_MANAGER = new HyperionValidatorManager_1.HyperionValidatorManager();
        this.initProcessor(config);
    }
    static build(config) {
        return new Hyperion(config);
    }
    run() {
        return this.PROCESSOR.run();
    }
    initProcessor(config) {
        config.processes.forEach((processCfg) => {
            const type = processCfg.type;
            const validator = this.VALIDATOR_MANAGER.getValidator(type);
            validator.validate(processCfg, (err) => {
                if (err) {
                    this.SESSION.getContext().getLogger().fatal(err.toString());
                }
                else {
                    const funcRef = HyperionBaseProcessDef_1.HyperionBaseProcessDef.getProcessRef(type);
                    const processFun = this.PROCESSOR[funcRef];
                    processFun.call(this.PROCESSOR, processCfg.config);
                }
            });
        });
    }
}
exports.Hyperion = Hyperion;
