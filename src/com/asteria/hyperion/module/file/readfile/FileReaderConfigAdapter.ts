import { FileReaderConfig } from 'asteria-cronos';
import { AsteriaError, AsteriaErrorCode, AsteriaLogger, AbstractAsteriaObject, PrimitiveType } from 'asteria-gaia';
import { OuranosErrorBuilder, OuranosLogger } from 'asteria-ouranos';
import { HyperionConfigAdapter } from '../../../config/HyperionConfigAdapter';

// Static logger reference:
const LOGGER: AsteriaLogger = OuranosLogger.getLogger();

/**
 * The <code>FileReaderConfigAdapter</code> class allows to convert <code>read-file</code> config objects.
 */
export class FileReaderConfigAdapter extends AbstractAsteriaObject implements HyperionConfigAdapter {

    /**
     * Create a new <code>FileReaderConfigAdapter</code> instance.
     */
    constructor() {
        super('com.asteria.hyperion.module.file.readfile::FileReaderConfigAdapter');
    }

    /**
     * @inheritdoc
     */
    public convert(config: any): FileReaderConfig {
        let error: AsteriaError = null;
        let result: FileReaderConfig = null;
        if (!config) {
            error = OuranosErrorBuilder.getInstance().build(
                AsteriaErrorCode.MISSING_ASQL_QUERY,
                this.getClassName(),
                'file path is missing'
            );
            LOGGER.error(error.toString());
        } else if (typeof config !== PrimitiveType.STRING) {
            error = OuranosErrorBuilder.getInstance().build(
                AsteriaErrorCode.INVALID_ASQL_QUERY,
                this.getClassName(),
                'file path must be of the type of \'string\''
            );
        } else {
            result = { path: config };
        }
        return result;
    }
}
