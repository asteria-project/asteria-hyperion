/*!
 * This module constains utilities used by the ListToCsvValidator test suite.
 */
 
import { HyperionBaseProcessType } from '../../../src/com/asteria/hyperion/util/HyperionBaseProcessType';
import { HyperionProcessConfig } from '../../../src/com/asteria/hyperion/config/HyperionProcessConfig';

// Utilities:
export const CLASS_NAME: string = 'com.asteria.hyperion.module.data.listtocsv::ListToCsvValidator';
export const CONFIG: HyperionProcessConfig = {
    type: HyperionBaseProcessType.LIST_TO_CSV,
    config: null
};
