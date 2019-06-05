import { HyperionProcessConfig } from '../../../config/HyperionProcessConfig';
import { AsteriaError } from 'asteria-gaia';
import { HyperionValidator } from '../../../validator/HyperionValidator';
import { AbstractHyperionValidator } from '../../../validator/AbstractHyperionValidator';

/**
 * The <code>LinesToListValidator</code> class is the inplementation for the <code>lines-to-list</code> process.
 */
export class LinesToListValidator extends AbstractHyperionValidator implements HyperionValidator {

    /**
     * Create a new <code>LinesToListValidator</code> instance.
     */
    constructor() {
        super('com.asteria.hyperion.module.data.linestolist::LinesToListValidator');
    }

    /**
     * @inheritdoc
     */
    public validate(config: HyperionProcessConfig): AsteriaError {
        return null;
    }
}
