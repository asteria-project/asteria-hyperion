import { AbstractHyperionModule } from '../../../src/com/asteria/hyperion/core/module/AbstractHyperionModule';
import { HyperionBaseProcessType } from '../../../src/com/asteria/hyperion/util/HyperionBaseProcessType';
import { LinesToListProcess } from 'asteria-cronos';
import { LinesToListConfigAdapter } from '../../../src/com/asteria/hyperion/module/data/linestolist/LinesToListConfigAdapter';
import { LinesToListValidator } from '../../../src/com/asteria/hyperion/module/data/linestolist/LinesToListValidator';

export const PROCESS_TYPE: HyperionBaseProcessType = HyperionBaseProcessType.LINES_TO_LIST;
export const PROCESS_CLASS: any = LinesToListProcess;
export const ADAPTER_CLASS: any = LinesToListConfigAdapter;
export const VALIDATOR_CLASS: any = LinesToListValidator;
export const CLASS_NAME: string = 'AbstractHyperionModuleImpl';

/**
 * A basic class for thesting the <code>AbstractHyperionModule</code> class.
 */
export class AbstractHyperionModuleImpl extends AbstractHyperionModule {

    /**
     * Create a new <code>AbstractHyperionModuleImpl</code> instance.
     */
    constructor() {
        super(
            PROCESS_TYPE,
            PROCESS_CLASS,
            ADAPTER_CLASS,
            VALIDATOR_CLASS,
            CLASS_NAME
        );
    }
}

