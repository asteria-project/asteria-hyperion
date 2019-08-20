import { HyperionModule } from '../../../core/module/HyperionModule';
import { HyperionBaseProcessType } from '../../../util/HyperionBaseProcessType';
import { ListToCsvProcess } from 'asteria-cronos';
import { AbstractHyperionModule } from '../../../core/module/AbstractHyperionModule';
import { ListToCsvConfigAdapter } from './ListToCsvConfigAdapter';
import { ListToCsvValidator } from './ListToCsvValidator';

/**
 * The <code>ListToCsvModule</code> class is the Hyperion module for the <code>list-to-csv</code> process.
 */
export class ListToCsvModule extends AbstractHyperionModule implements HyperionModule {

    /**
     * Create a new <code>ListToCsvModule</code> instance.
     */
    constructor() {
        super(
            HyperionBaseProcessType.LIST_TO_CSV,
            ListToCsvProcess,
            ListToCsvConfigAdapter,
            ListToCsvValidator,
            'com.asteria.hyperion.module.data.listtocsv::ListToCsvModule'
        );
    }
}
