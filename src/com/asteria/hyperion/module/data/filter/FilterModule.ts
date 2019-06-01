import { AbstractHyperionModule } from '../../../core/module/AbstractHyperionModule';
import { HyperionModule } from '../../../core/module/HyperionModule';
import { HyperionBaseProcessType } from '../../../util/HyperionBaseProcessType';
import { FilterProcess } from 'asteria-cronos';
import { FilterConfigAdapter } from './FilterConfigAdapter';
import { FilterValidator } from './FilterValidator';

/**
 * The <code>FilterModule</code> class is the Hyperion module for the <code>filter</code> process.
 */
export class FilterModule extends AbstractHyperionModule implements HyperionModule {

    /**
     * Create a new <code>FilterModule</code> instance.
     */
    constructor() {
        super(
            HyperionBaseProcessType.FILTER,
            FilterProcess,
            FilterConfigAdapter,
            FilterValidator,
            'com.asteria.hyperion.module.data.filter::FilterModule'
        );
    }
}
