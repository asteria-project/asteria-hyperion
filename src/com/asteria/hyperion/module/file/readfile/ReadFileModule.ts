import { AbstractHyperionModule } from '../../../core/module/AbstractHyperionModule';
import { HyperionModule } from '../../../core/module/HyperionModule';
import { HyperionBaseProcessType } from '../../../util/HyperionBaseProcessType';
import { FileReaderConfigAdapter } from './FileReaderConfigAdapter';
import { ReadFileValidator } from './ReadFileValidator';
import { FileReaderProcess } from 'asteria-cronos';

/**
 * The <code>ReadFileModule</code> class is the Hyperion module for the <code>read-file</code> process.
 */
export class ReadFileModule extends AbstractHyperionModule implements HyperionModule {

    /**
     * Create a new <code>ReadFileModule</code> instance.
     */
    constructor() {
        super(
            HyperionBaseProcessType.READ_FILE,
            FileReaderProcess,
            FileReaderConfigAdapter,
            ReadFileValidator,
            'com.asteria.hyperion.module.file.readfile::ReadFileModule'
        );
    }
}
