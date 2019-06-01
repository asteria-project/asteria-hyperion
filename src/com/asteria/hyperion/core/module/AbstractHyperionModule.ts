import { StreamProcess, AbstractAsteriaObject } from 'asteria-gaia';
import { HyperionModule } from './HyperionModule';
import { HyperionConfigAdapter } from '../../config/HyperionConfigAdapter';
import { Ouranos } from 'asteria-ouranos';
import { HyperionValidator } from '../../validator/HyperionValidator';

/**
 * The <code>AbstractHyperionModule</code> is the base class for all <code>HyperionModule</code> implementations.
 */
export abstract class AbstractHyperionModule extends AbstractAsteriaObject implements HyperionModule {

    /**
     * The identifier for this <code>HyperionModule</code> implementation.
     */
    private readonly ID: string = null;

    /**
     * The Asteria process class for this <code>HyperionModule</code> implementation.
     */
    private readonly PROCESS_CLASS: any = null;

    /**
     * The process config adapter class for this <code>HyperionModule</code> implementation.
     */
    private readonly ADAPTER_CLASS: any = null;

    /**
     * The process config validation class for this <code>HyperionModule</code> implementation.
     */
    private readonly VALIDATOR_CLASS: any = null;

    /**
     * Create a new <code>AbstractHyperionModule</code> instance.
     * 
     * @param {string} id the identifier for this object.
     * @param {any} processClass the Asteria process class for this object.
     * @param {any} adapterClass the process config adapter class for object.
     * @param {any} validatorClass the process config validation class for object.
     * @param {string} className the fully qualified class name for this object.
     */
    protected constructor(id: string, processClass: any, adapterClass: any, validatorClass: any, className: string) {
        super(className);
        this.ID = id;
        this.PROCESS_CLASS = processClass;
        this.ADAPTER_CLASS = adapterClass;
        this.VALIDATOR_CLASS = validatorClass;
    }

    /**
     * @inheritdoc
     */
    public getId(): string {
        return this.ID;
    }
    
    /**
     * @inheritdoc
     */
    public getValidator(): HyperionValidator {
        return new this.VALIDATOR_CLASS();
    }

    /**
     * @inheritdoc
     */
    public buildStreamProcess(config: any): StreamProcess {
        const adapter: HyperionConfigAdapter = new this.ADAPTER_CLASS();
        const process: StreamProcess = Ouranos.buildProcess(this.PROCESS_CLASS, adapter.convert(config));
        return process;
    }
}