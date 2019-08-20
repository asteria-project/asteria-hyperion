import { CsvPreviewConfig } from 'asteria-cronos';
import { AsteriaError, AsteriaErrorCode, AsteriaLogger, AbstractAsteriaObject, PrimitiveType } from 'asteria-gaia';
import { OuranosErrorBuilder, OuranosLogger } from 'asteria-ouranos';
import { HyperionConfigAdapter } from '../../../config/HyperionConfigAdapter';

// Static logger reference:
const LOGGER: AsteriaLogger = OuranosLogger.getLogger();

/**
 * The <code>CsvPreviewConfigAdapter</code> class allows to convert <code>csv-preview</code> config objects.
 */
export class CsvPreviewConfigAdapter extends AbstractAsteriaObject implements HyperionConfigAdapter {

    /**
     * Create a new <code>CsvPreviewConfigAdapter</code> instance.
     */
    constructor() {
        super('com.asteria.hyperion.module.file.csvpreview::CsvPreviewConfigAdapter');
    }

    /**
     * @inheritdoc
     */
    public convert(config: any): CsvPreviewConfig {
        let error: AsteriaError = null;
        let result: CsvPreviewConfig = null;
        if (!config) {
            error = OuranosErrorBuilder.getInstance().build(
                AsteriaErrorCode.MISSING_ASQL_QUERY,
                this.getClassName(),
                'file path is missing'
            );
        } else if (typeof config !== PrimitiveType.STRING) {
            error = OuranosErrorBuilder.getInstance().build(
                AsteriaErrorCode.INVALID_ASQL_QUERY,
                this.getClassName(),
                'file path must be of the type of \'string\''
            );
        } else {
            result = { path: config };
        }
        if (error) {
            LOGGER.error(error.toString());
        }
        return result;
    }
}
