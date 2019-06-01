import { AbstractHyperionModule } from '../../../core/module/AbstractHyperionModule';
import { HyperionModule } from '../../../core/module/HyperionModule';
import { HyperionBaseProcessType } from '../../../util/HyperionBaseProcessType';
import { FileWriterConfigAdapter } from './FileWriterConfigAdapter';
import { WriteFileValidator } from './WriteFileValidator';
import { FileWriterProcess } from 'asteria-cronos';

/**
 * The <code>ReadFileValidator</code> class is the Hyperion module for the <code>write-file</code> process.
 */
export class WriteFileModule extends AbstractHyperionModule implements HyperionModule {

    /**
     * Create a new <code>WriteFileModule</code> instance.
     */
    constructor() {
        super(
            HyperionBaseProcessType.WRITE_FILE,
            FileWriterProcess,
            FileWriterConfigAdapter,
            WriteFileValidator,
            'com.asteria.hyperion.module.file.writefile::WriteFileModule'
        );
    }
}
