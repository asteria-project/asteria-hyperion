/*!
 * This module constains utilities used by the CsvToListValidator test suite.
 */

 
import { HyperionBaseProcessType } from '../../../src/com/asteria/hyperion/util/HyperionBaseProcessType';
import { HyperionProcessConfig } from '../../../src/com/asteria/hyperion/config/HyperionProcessConfig';

// Utilities:
export const CLASS_NAME: string = 'com.asteria.hyperion.module.data.csvtolist::CsvToListValidator';
export const CONFIG: HyperionProcessConfig = {
    type: HyperionBaseProcessType.CSV_TO_LIST,
    config: null
};
