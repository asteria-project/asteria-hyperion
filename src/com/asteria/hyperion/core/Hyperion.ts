import { AsteriaError, AbstractAsteriaObject, AsteriaStream, AsteriaErrorCode, AsteriaLogger, ErrorUtil, AsteriaContext, StreamProcess, AsteriaException, AbstractAsteriaRegistry } from 'asteria-gaia';
import { Ouranos, OuranosSession, OuranosContext, OuranosErrorBuilder } from 'asteria-ouranos';
import { HyperionProcessor } from '../core/processor/HyperionProcessor';
import { HyperionConfig } from '../config/HyperionConfig';
import { HyperionProcessConfig } from '../config/HyperionProcessConfig';
import { HyperionModuleRegistry } from './module/HyperionModuleRegistry';
import { HyperionModule } from './module/HyperionModule';
import { HyperionValidator } from '../validator/HyperionValidator';
import { HyperionModuleRegistryFactory } from './module/impl/HyperionModuleRegistryFactory';

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
    private moduleRegistry: HyperionModuleRegistry = null;

    /**
     * Create a new <code>Hyperion</code> instance.
     * 
     * @param {HyperionConfig} config the config of the session associated with the new <code>Hyperion</code> instance.
     */
    private constructor(config: HyperionConfig) {
        super('com.asteria.hyperion.core::Hyperion');
        this.CONFIG = config;
        this.SESSION = Ouranos.createSession({ name: config.name }) as OuranosSession;
        this.PROCESSOR = new HyperionProcessor(this.SESSION);
    }

    /**
     * Build and return a new <code>Hyperion</code> instance.
     * 
     * @param {HyperionConfig} config the description of all Asteria processes managed by this <code>Hyperion</code>
     *                                instance.
     * 
     * @returns {Hyperion} a new <code>Hyperion</code> instance.
     */
    public static build(config: HyperionConfig, moduleRegistry: HyperionModuleRegistry = null): Hyperion {
        const processor: Hyperion = new Hyperion(config);
        processor.setModuleRegistry(moduleRegistry);
        return processor;
    }

    /**
     * Return the <code>HyperionModuleRegistry</code> object for this processor.
     * 
     * @returns {HyperionModuleRegistry} the <code>HyperionModuleRegistry</code> object for this processor.
     */
    public getModuleRegistry(): HyperionModuleRegistry {
        return this.moduleRegistry;
    }

    /**
     * Set the <code>HyperionModuleRegistry</code> object for this processor.
     * 
     * @param {HyperionModuleRegistry} moduleRegistry the new <code>HyperionModuleRegistry</code> object for this
     *                                                processor.
     */
    public setModuleRegistry(moduleRegistry: HyperionModuleRegistry = null): void {
        const logger: AsteriaLogger = (this.SESSION.getContext() as OuranosContext).getLogger();
        if (moduleRegistry) {
            this.moduleRegistry = moduleRegistry;
            logger.info(`new module registry added: ${moduleRegistry.getClassName()}`);
        } else {
            this.initModuleRegistry();
            logger.info('default module registry initialized');
        } 
    }

    /**
     * Run all stream processes registered in this <code>Hyperion</code> instance and return the the reference to the 
     * last registered stream.
     * 
     * @returns {AsteriaStream} the reference to the <code>AsteriaStream</code> objects created by this processor.
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
     * @returns {AsteriaContext} the context for this <code>Hyperion</code> instance.
     */
    public getContext(): AsteriaContext {
        return this.SESSION.getContext();
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
                if (this.moduleRegistry.has(type)) {
                    const module: HyperionModule = this.moduleRegistry.get(type);
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
                'no processes are specified'
            );
            logger.warn(error.toString());
        }
    }

    /**
     * Initialize the module registry with default modules.
     */
    private initModuleRegistry(): void {
        const factory: HyperionModuleRegistryFactory = new HyperionModuleRegistryFactory();
        this.moduleRegistry = factory.create();
    }
}
