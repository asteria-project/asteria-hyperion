/*!
 * This module constains utilities used by the FilterModule test  suite.
 */

import { HyperionBaseProcessType } from '../../../src/com/asteria/hyperion/util/HyperionBaseProcessType';
import { FilterProcess } from 'asteria-cronos';
import { FilterValidator } from '../../../src/com/asteria/hyperion/module/data/filter/FilterValidator';

// Utilities:
export const CLASS_NAME: string = 'com.asteria.hyperion.module.data.filter::FilterModule';
export const PROCESS_TYPE: HyperionBaseProcessType = HyperionBaseProcessType.FILTER;
export const PROCESS_CLASS: any = FilterProcess;
export const VALIDATOR_CLASS: any = FilterValidator;