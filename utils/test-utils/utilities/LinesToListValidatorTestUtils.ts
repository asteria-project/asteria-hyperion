/*!
 * This module constains utilities used by the LinesToListValidator test suite.
 */
 
import { HyperionBaseProcessType } from '../../../src/com/asteria/hyperion/util/HyperionBaseProcessType';
import { HyperionProcessConfig } from '../../../src/com/asteria/hyperion/config/HyperionProcessConfig';

// Utilities:
export const CLASS_NAME: string = 'com.asteria.hyperion.module.data.linestolist::LinesToListValidator';
export const CONFIG: HyperionProcessConfig = {
    type: HyperionBaseProcessType.LINES_TO_LIST,
    config: null
};
