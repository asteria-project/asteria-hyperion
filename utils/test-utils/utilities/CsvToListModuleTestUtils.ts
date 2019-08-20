/*!
 * This module constains utilities used by the CsvToListModule test suite.
 */

import { HyperionBaseProcessType } from '../../../src/com/asteria/hyperion/util/HyperionBaseProcessType';
import { CsvToListProcess } from 'asteria-cronos';
import { CsvToListValidator } from '../../../src/com/asteria/hyperion/module/data/csvtolist/CsvToListValidator';

// Utilities:
export const CLASS_NAME: string = 'com.asteria.hyperion.module.data.csvtolist::CsvToListModule';
export const PROCESS_TYPE: HyperionBaseProcessType = HyperionBaseProcessType.CSV_TO_LIST;
export const PROCESS_CLASS: any = CsvToListProcess;
export const VALIDATOR_CLASS: any = CsvToListValidator;