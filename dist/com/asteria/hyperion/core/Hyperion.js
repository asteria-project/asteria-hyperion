"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asteria_gaia_1 = require("asteria-gaia");
const asteria_ouranos_1 = require("asteria-ouranos");
const HyperionProcessor_1 = require("../core/processor/HyperionProcessor");
const HyperionModuleRegistry_1 = require("./module/HyperionModuleRegistry");
const ReadFileModule_1 = require("../module/file/readfile/ReadFileModule");
const WriteFileModule_1 = require("../module/file/writefile/WriteFileModule");
const FilterModule_1 = require("../module/data/filter/FilterModule");
const CsvToListModule_1 = require("../module/data/csvtolist/CsvToListModule");
const ListToCsvModule_1 = require("../module/data/listtocsv/ListToCsvModule");
const LinesToListModule_1 = require("../module/data/linestolist/LinesToListModule");
class Hyperion extends asteria_gaia_1.AbstractAsteriaObject {
    constructor(config) {
        super('com.asteria.hyperion.lang::Hyperion');
        this.CONFIG = null;
        this.SESSION = null;
        this.PROCESSOR = null;
        this.REGISTRY = null;
        this.CONFIG = config;
        this.SESSION = asteria_ouranos_1.Ouranos.createSession({ name: config.name });
        this.PROCESSOR = new HyperionProcessor_1.HyperionProcessor(this.SESSION);
        this.REGISTRY = this.initModuleRegistry();
    }
    static build(config) {
        return new Hyperion(config);
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
    registerModule(hyperionModule) {
        this.REGISTRY.add(hyperionModule);
        this.SESSION.getContext().getLogger().debug(`new hyperion module registered: id=${hyperionModule.getId()}`);
    }
    hasModule(id) {
        return this.REGISTRY.has(id);
    }
    initProcessor(config) {
        const processes = config.processes;
        const logger = this.SESSION.getContext().getLogger();
        if (processes && processes.length > 0) {
            config.processes.forEach((processCfg) => {
                const type = processCfg.type;
                if (this.hasModule(type)) {
                    const module = this.REGISTRY.get(type);
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
            const error = asteria_ouranos_1.OuranosErrorBuilder.getInstance().build(asteria_gaia_1.AsteriaErrorCode.MISSING_PARAMETER, this.getClassName(), 'no process are specified');
            logger.warn(error.toString());
        }
    }
    initModuleRegistry() {
        const registry = new HyperionModuleRegistry_1.HyperionModuleRegistry();
        registry.add(new CsvToListModule_1.CsvToListModule());
        registry.add(new FilterModule_1.FilterModule());
        registry.add(new LinesToListModule_1.LinesToListModule());
        registry.add(new ListToCsvModule_1.ListToCsvModule());
        registry.add(new ReadFileModule_1.ReadFileModule());
        registry.add(new WriteFileModule_1.WriteFileModule());
        return registry;
    }
}
exports.Hyperion = Hyperion;
