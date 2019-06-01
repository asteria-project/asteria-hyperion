import { AbstractHyperionModule } from '../../../core/module/AbstractHyperionModule';
import { HyperionModule } from '../../../core/module/HyperionModule';
import { HyperionBaseProcessType } from '../../../util/HyperionBaseProcessType';
import { CsvToListValidator } from './CsvToListValidator';
import { CsvToListConfigAdapter } from './CsvToListConfigAdapter';
import { CsvToListProcess } from 'asteria-cronos';

/**
 * The <code>CsvToListModule</code> class is the Hyperion module for the <code>csv-to-list</code> process.
 */
export class CsvToListModule extends AbstractHyperionModule implements HyperionModule {

    /**
     * Create a new <code>CsvToListModule</code> instance.
     */
    constructor() {
        super(
            HyperionBaseProcessType.CSV_TO_LIST,
            CsvToListProcess,
            CsvToListConfigAdapter,
            CsvToListValidator,
            'com.asteria.hyperion.module.data.csvtolist::CsvToListModule'
        );
    }
}
