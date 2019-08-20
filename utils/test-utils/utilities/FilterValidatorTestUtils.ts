/*!
 * This module constains utilities used by the CsvToListVaFilterValidatorlidator test suite.
 */

import { HyperionBaseProcessType } from '../../../src/com/asteria/hyperion/util/HyperionBaseProcessType';
import { HyperionProcessConfig } from '../../../src/com/asteria/hyperion/config/HyperionProcessConfig';

// Utilities:
export const CLASS_NAME: string = 'com.asteria.hyperion.module.data.filter::FilterValidator';
export const INVALD_CONFIG: HyperionProcessConfig = {
    type: HyperionBaseProcessType.FILTER,
    config: null
};
export const CONFIG: HyperionProcessConfig = {
    type: HyperionBaseProcessType.FILTER,
    config: 'Population > 1000000 AND Country = \'us\''
};
