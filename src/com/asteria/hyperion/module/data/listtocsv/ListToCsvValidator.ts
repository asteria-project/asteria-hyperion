import { HyperionProcessConfig } from '../../../config/HyperionProcessConfig';
import { AsteriaError } from 'asteria-gaia';
import { AbstractHyperionValidator } from '../../../validator/AbstractHyperionValidator';
import { HyperionValidator } from '../../../validator/HyperionValidator';

/**
 * The <code>ListToCsvValidator</code> class is the inplementation for the <code>list-to-csv</code> process.
 */
export class ListToCsvValidator extends AbstractHyperionValidator implements HyperionValidator {

    /**
     * Create a new <code>ListToCsvValidator</code> instance.
     */
    constructor() {
        super('com.asteria.hyperion.module.data.listocsv::ListToCsvValidator');
    }

    /**
     * @inheritdoc
     */
    public validate(config: HyperionProcessConfig): AsteriaError {
        return null;
    }
}
