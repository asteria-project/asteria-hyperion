import { AsteriaError, AbstractAsteriaObject, AsteriaStream, AsteriaErrorCode, AsteriaLogger, ErrorUtil, AsteriaContext, StreamProcess } from 'asteria-gaia';
import { Ouranos, OuranosSession, OuranosContext, OuranosErrorBuilder } from 'asteria-ouranos';
import { HyperionProcessor } from '../core/processor/HyperionProcessor';
import { HyperionConfig } from '../config/HyperionConfig';
import { HyperionProcessConfig } from '../config/HyperionProcessConfig';
import { HyperionModuleRegistry } from './module/HyperionModuleRegistry';
import { HyperionModule } from './module/HyperionModule';
import { ReadFileModule } from '../module/file/readfile/ReadFileModule';
import { WriteFileModule } from '../module/file/writefile/WriteFileModule';
import { HyperionValidator } from '../validator/HyperionValidator';
import { FilterModule } from '../module/data/filter/FilterModule';
import { CsvToListModule } from '../module/data/csvtolist/CsvToListModule';
import { ListToCsvModule } from '../module/data/listtocsv/ListToCsvModule';
import { LinesToListModule } from '../module/data/linestolist/LinesToListModule';

/**
 * The <code>Hyperion</code> class is the entry point of the Hyperion framework. It provides all functionalities needed
 * for running Asteria processes defined by Plain Old JavaScript objects.
 */
export class Hyperion extends AbstractAsteriaObject {

    /**
     * The session config for this <code>Hyperion</code> instance.
     */
    private readonly CONFIG: HyperionConfig = null;

    /**
     * The reference to the session holded by this <code>Hyperion</code> instance.
     */
    private readonly SESSION: OuranosSession = null;

    /**
     * The reference to the processor used by this <code>Hyperion</code> instance to run Asteria stream processes.
     */
    private readonly PROCESSOR: HyperionProcessor = null;

    /**
     * The module registry associated with this <code>Hyperion</code> instance.
     */
    private readonly REGISTRY: HyperionModuleRegistry = null;

    /**
     * Create a new <code>Hyperion</code> instance.
     * 
     * @param {HyperionConfig} config the config of the session associated with the new <code>Hyperion</code> instance.
     */
    private constructor(config: HyperionConfig) {
        super('com.asteria.hyperion.lang::Hyperion');
        this.CONFIG = config;
        this.SESSION = Ouranos.createSession({ name: config.name }) as OuranosSession;
        this.PROCESSOR = new HyperionProcessor(this.SESSION);
        this.REGISTRY = this.initModuleRegistry();
    }

    /**
     * Build and return a new <code>Hyperion</code> instance.
     * 
     * @param {HyperionConfig} config the description of all Asteria processes managed by this <code>Hyperion</code>
     *                                instance.
     * 
     * @returns {Hyperion} a new <code>Hyperion</code> instance.
     */
    public static build(config: HyperionConfig): Hyperion {
        return new Hyperion(config);
    }

    /**
     * Run all stream processes registered in this <code>Hyperion</code> instance and return the the reference to the 
     * last registered stream.
     */
    public run(): AsteriaStream {
        this.initProcessor(this.CONFIG);
        return this.PROCESSOR.run();
    }

    /**
     * Stop all stream processes registered in this <code>Hyperion</code> instance.
     */
    public stop(): void {
        // TODO: not implemented yet.
    }

    /**
     * Return the context for this <code>Hyperion</code> instance.
     * 
     * @returns {AsteriaContext} this <code>Hyperion</code> instance.
     */
    public getContext(): AsteriaContext {
        return this.SESSION.getContext();
    }

    /**
     * Add the specified module to this <code>Hyperion</code> instance.
     * 
     * @param {HyperionModule} hyperionModule the module to add to this <code>Hyperion</code> instance.
     */
    public registerModule(hyperionModule: HyperionModule): void {
        this.REGISTRY.add(hyperionModule);
        (this.SESSION.getContext() as OuranosContext).getLogger().debug(
            `new hyperion module registered: id=${hyperionModule.getId()}`
        );
    }

    /**
     * Return a boolean that indicates whether the module with the specified identifier is registred 
     * (<code>true</code>), or not (<code>false</code>).
     * 
     * @param {string} id the identifier of the module to find.
     * 
     * @return {boolean} <code>true</code> whether the module with the specified identifier is registred;
     *                   <code>false</code> otherwise.
     */
    public hasModule(id: string): boolean {
        return this.REGISTRY.has(id);
    }

    /**
     * Parse the specified Hyperion config and initialize the processor.
     */
    private initProcessor(config: HyperionConfig): void {
        const processes: Array<HyperionProcessConfig> = config.processes;
        const logger: AsteriaLogger = (this.SESSION.getContext() as OuranosContext).getLogger();
        if (processes && processes.length > 0) {
            config.processes.forEach((processCfg: HyperionProcessConfig)=> {
                const type: string = processCfg.type;
                if (this.hasModule(type)) {
                    const module: HyperionModule = this.REGISTRY.get(type);
                    const validator: HyperionValidator = module.getValidator();
                    validator.validate(processCfg, (err: AsteriaError)=> {
                        if (err) {
                            logger.fatal(err.toString());
                            throw ErrorUtil.errorToException(err);
                        } else {
                            const process: StreamProcess = module.buildStreamProcess(processCfg.config);
                            this.PROCESSOR.addProcess(process);
                        }
                    });
                } else {
                    const error: AsteriaError = new AsteriaError(
                        AsteriaErrorCode.INVALID_CONFIG,
                        this.getClassName(),
                        `module with reference "${type}" does not exist; use registerModule() to add a module to the hyperion processor`
                    );
                    logger.fatal(error.toString());
                    throw ErrorUtil.errorToException(error);
                }
            });
        } else {
            const error: AsteriaError = OuranosErrorBuilder.getInstance().build(
                AsteriaErrorCode.MISSING_PARAMETER,
                this.getClassName(),
                'no process are specified'
            );
            logger.warn(error.toString());
        }
    }

    /**
     * Initialize the module registry with default modules.
     * 
     * @returns {HyperionModuleRegistry} the reference to the module registry.
     */
    private initModuleRegistry(): HyperionModuleRegistry {
        const registry: HyperionModuleRegistry = new HyperionModuleRegistry();
        // data processes
        registry.add(new CsvToListModule());
        registry.add(new FilterModule());
        registry.add(new LinesToListModule());
        registry.add(new ListToCsvModule());
        // file processes
        registry.add(new ReadFileModule());
        registry.add(new WriteFileModule());
        return registry;
    }
}
