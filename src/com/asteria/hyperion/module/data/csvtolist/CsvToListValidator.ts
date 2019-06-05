import { HyperionProcessConfig } from '../../../config/HyperionProcessConfig';
import { AsteriaError } from 'asteria-gaia';
import { AbstractHyperionValidator } from '../../../validator/AbstractHyperionValidator';
import { HyperionValidator } from '../../../validator/HyperionValidator';

/**
 * The <code>CsvToListValidator</code> class is the inplementation for the <code>csv-to-list</code> process.
 */
export class CsvToListValidator extends AbstractHyperionValidator implements HyperionValidator {

    /**
     * Create a new <code>CsvToListValidator</code> instance.
     */
    constructor() {
        super('com.asteria.hyperion.module.data.csvtolist::CsvToListValidator');
    }

    /**
     * @inheritdoc
     */
    public validate(config: HyperionProcessConfig): AsteriaError {
        return null;
    }
}
