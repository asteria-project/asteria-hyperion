import { HyperionModule } from '../../../core/module/HyperionModule';
import { HyperionBaseProcessType } from '../../../util/HyperionBaseProcessType';
import { LinesToListProcess } from 'asteria-cronos';
import { AbstractHyperionModule } from '../../../core/module/AbstractHyperionModule';
import { LinesToListValidator } from './LinesToListValidator';
import { LinesToListConfigAdapter } from './LinesToListConfigAdapter';

/**
 * The <code>ListToCsvModule</code> class is the Hyperion module for the <code>lines-to-list</code> process.
 */
export class LinesToListModule extends AbstractHyperionModule implements HyperionModule {

    /**
     * Create a new <code>LinesToListModule</code> instance.
     */
    constructor() {
        super(
            HyperionBaseProcessType.LINES_TO_LIST,
            LinesToListProcess,
            LinesToListConfigAdapter,
            LinesToListValidator,
            'com.asteria.hyperion.module.data.linestolist::LinesToListModule'
        );
    }
}
