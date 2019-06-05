import { AsteriaError, AsteriaErrorCode, PrimitiveType } from 'asteria-gaia';
import { OuranosErrorBuilder } from 'asteria-ouranos';
import { HyperionValidator } from '../../../validator/HyperionValidator';
import { AbstractHyperionValidator } from '../../../validator/AbstractHyperionValidator';
import { HyperionProcessConfig } from '../../../config/HyperionProcessConfig';

/**
 * The <code>WriteFileValidator</code> class is the inplementation for the <code>write-file</code> process.
 */
export class WriteFileValidator extends AbstractHyperionValidator implements HyperionValidator {

    /**
     * Create a new <code>WriteFileValidator</code> instance.
     */
    constructor() {
        super('com.asteria.hyperion.module.file.writefile::WriteFileValidator');
    }

    /**
     * @inheritdoc
     */
    public validate(config: HyperionProcessConfig): AsteriaError {
        let error: AsteriaError = null;
        const param: any = config.config;
        if (param === null || param === undefined) {
            error = OuranosErrorBuilder.getInstance().build(
                AsteriaErrorCode.MISSING_PARAMETER,
                this.getClassName(),
                '\'config\' paramater is missing'
            );
        } else if (typeof param !== PrimitiveType.STRING) {
            error = OuranosErrorBuilder.getInstance().build(
                AsteriaErrorCode.INVALID_PARAMETER,
                this.getClassName(),
                '\'config\' paramater must be of the type of \'string\''
            );
        }
        return error;
    }
}
