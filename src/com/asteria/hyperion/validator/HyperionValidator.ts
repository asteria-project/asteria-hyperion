import { HyperionProcessConfig } from '../config/HyperionProcessConfig';
import { AsteriaError } from 'asteria-gaia';

/**
 * The <code>HyperionValidator</code> interface defines the set of APIs you must define to create a Hyperion config
 * validator.
 */
export interface HyperionValidator {

    /**
     * Validates the specified config object.
     * 
     * @param {HyperionProcessConfig} config the config object to validate.
     * 
     * @returns {AsteriaError} an <code>AsteriaError</code>  whether the config object is not valid; <code>null</code>
     *                         otherwise.
     */
    validate(config: HyperionProcessConfig): AsteriaError;
}
