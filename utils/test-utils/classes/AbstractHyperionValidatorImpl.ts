import { AbstractHyperionValidator } from '../../../src/com/asteria/hyperion/validator/AbstractHyperionValidator';
import { HyperionProcessConfig } from '../../../src/com/asteria/hyperion/config/HyperionProcessConfig';
import { AsteriaError } from 'asteria-gaia';

export const CLASS_NAME: string = 'AbstractHyperionValidatorImpl';

/**
 * A basic class for thesting the <code>AbstractHyperionValidator</code> class.
 */
export class AbstractHyperionValidatorImpl extends AbstractHyperionValidator {

    /**
     * Create a new <code>AbstractHyperionValidatorImpl</code> instance.
     */
    constructor() {
        super(CLASS_NAME);
    }

    /**
     * @inheritdoc
     */
    public validate(config: HyperionProcessConfig): AsteriaError {
        return null;
    }
}

