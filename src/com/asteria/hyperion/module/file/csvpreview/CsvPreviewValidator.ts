import { HyperionProcessConfig } from '../../../config/HyperionProcessConfig';
import { AsteriaError, AsteriaErrorCode, PrimitiveType } from 'asteria-gaia';
import { OuranosErrorBuilder } from 'asteria-ouranos';
import { HyperionValidator } from '../../../validator/HyperionValidator';
import { AbstractHyperionValidator } from '../../../validator/AbstractHyperionValidator';

/**
 * The <code>CsvPreviewValidator</code> class is the inplementation for the <code>csv-preview</code> process.
 */
export class CsvPreviewValidator extends AbstractHyperionValidator implements HyperionValidator {

    /**
     * Create a new <code>CsvPreviewValidator</code> instance.
     */
    constructor() {
        super('com.asteria.hyperion.module.file.csvpreview::CsvPreviewValidator');
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
