/*!
 * This module constains utilities used by the ListToCsvModule test suite.
 */

import { HyperionBaseProcessType } from '../../../src/com/asteria/hyperion/util/HyperionBaseProcessType';
import { ListToCsvProcess } from 'asteria-cronos';
import { ListToCsvValidator } from '../../../src/com/asteria/hyperion/module/data/listtocsv/ListToCsvValidator';

// Utilities:
export const CLASS_NAME: string = 'com.asteria.hyperion.module.data.listtocsv::ListToCsvModule';
export const PROCESS_TYPE: HyperionBaseProcessType = HyperionBaseProcessType.LIST_TO_CSV;
export const PROCESS_CLASS: any = ListToCsvProcess;
export const VALIDATOR_CLASS: any = ListToCsvValidator;