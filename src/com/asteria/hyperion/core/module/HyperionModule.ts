import { StreamProcess } from 'asteria-gaia';
import { HyperionValidator } from '../../validator/HyperionValidator';

/**
 * The <code>HyperionModule</code> interface allows to define process modules that can be added to an Hyperion
 * processor.
 */
export interface HyperionModule {

    /**
     * Return the module identifier which represents the name of an Asteria process.
     * 
     * @returns {string} the name of an Asteria process.
     */
    getId(): string;

    /**
     * Return the module process validator.
     * 
     * @returns {HyperionValidator} the module process validator.
     */
    getValidator(): HyperionValidator;

    /**
     * Build and return the <code>StreamProcess</code> implementation defined by this module.
     * 
     * @param {any} config the conficuration of the new <code>StreamProcess</code> object.
     * 
     * @returns {StreamProcess} the <code>StreamProcess</code> implementation defined by this module.
     */
    buildStreamProcess(config: any): StreamProcess;
}