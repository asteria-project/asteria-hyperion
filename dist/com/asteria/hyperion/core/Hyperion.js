"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asteria_gaia_1 = require("asteria-gaia");
const asteria_ouranos_1 = require("asteria-ouranos");
const HyperionProcessor_1 = require("../core/processor/HyperionProcessor");
const HyperionModuleRegistryFactory_1 = require("./module/impl/HyperionModuleRegistryFactory");
class Hyperion extends asteria_gaia_1.AbstractAsteriaObject {
    constructor(config) {
        super('com.asteria.hyperion.core::Hyperion');
        this.CONFIG = null;
        this.SESSION = null;
        this.PROCESSOR = null;
        this.moduleRegistry = null;
        this.CONFIG = config;
        this.SESSION = asteria_ouranos_1.Ouranos.createSession({ name: config.name });
        this.PROCESSOR = new HyperionProcessor_1.HyperionProcessor(this.SESSION);
    }
    static build(config, moduleRegistry = null) {
        const processor = new Hyperion(config);
        processor.setModuleRegistry(moduleRegistry);
        return processor;
    }
    getModuleRegistry() {
        return this.moduleRegistry;
    }
    setModuleRegistry(moduleRegistry = null) {
        const logger = this.SESSION.getContext().getLogger();
        if (moduleRegistry) {
            this.moduleRegistry = moduleRegistry;
            logger.info(`new module registry added: ${moduleRegistry.getClassName()}`);
        }
        else {
            this.initModuleRegistry();
            logger.info('default module registry initialized');
        }
    }
    run() {
        this.initProcessor(this.CONFIG);
        return this.PROCESSOR.run();
    }
    stop() {
    }
    getContext() {
        return this.SESSION.getContext();
    }
    initProcessor(config) {
        const processes = config.processes;
        const logger = this.SESSION.getContext().getLogger();
        if (processes && processes.length > 0) {
            config.processes.forEach((processCfg) => {
                const type = processCfg.type;
                if (this.moduleRegistry.has(type)) {
                    const module = this.moduleRegistry.get(type);
                    const validator = module.getValidator();
                    validator.validate(processCfg, (err) => {
                        if (err) {
                            logger.fatal(err.toString());
                            throw asteria_gaia_1.ErrorUtil.errorToException(err);
                        }
                        else {
                            const process = module.buildStreamProcess(processCfg.config);
                            this.PROCESSOR.addProcess(process);
                        }
                    });
                }
                else {
                    const error = new asteria_gaia_1.AsteriaError(asteria_gaia_1.AsteriaErrorCode.INVALID_CONFIG, this.getClassName(), `module with reference "${type}" does not exist; use registerModule() to add a module to the hyperion processor`);
                    logger.fatal(error.toString());
                    throw asteria_gaia_1.ErrorUtil.errorToException(error);
                }
            });
        }
        else {
            const error = asteria_ouranos_1.OuranosErrorBuilder.getInstance().build(asteria_gaia_1.AsteriaErrorCode.MISSING_PARAMETER, this.getClassName(), 'no processes are specified');
            logger.warn(error.toString());
        }
    }
    initModuleRegistry() {
        const factory = new HyperionModuleRegistryFactory_1.HyperionModuleRegistryFactory();
        this.moduleRegistry = factory.create();
    }
}
exports.Hyperion = Hyperion;
