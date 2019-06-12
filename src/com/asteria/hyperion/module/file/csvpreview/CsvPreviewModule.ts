import { AbstractHyperionModule } from '../../../core/module/AbstractHyperionModule';
import { HyperionModule } from '../../../core/module/HyperionModule';
import { HyperionBaseProcessType } from '../../../util/HyperionBaseProcessType';
import { CsvPreviewConfigAdapter } from './CsvPreviewConfigAdapter';
import { CsvPreviewValidator } from './CsvPreviewValidator';
import { CsvPreviewProcess } from 'asteria-cronos';

/**
 * The <code>CsvPreviewModule</code> class is the Hyperion module for the <code>csv-preview</code> process.
 */
export class CsvPreviewModule extends AbstractHyperionModule implements HyperionModule {

    /**
     * Create a new <code>CsvPreviewModule</code> instance.
     */
    constructor() {
        super(
            HyperionBaseProcessType.CSV_PREVIEW,
            CsvPreviewProcess,
            CsvPreviewConfigAdapter,
            CsvPreviewValidator,
            'com.asteria.hyperion.module.file.csvpreview::CsvPreviewModule'
        );
    }
}
