/*!
 * This module constains utilities used by the LinesToListModule test suite.
 */

import { HyperionBaseProcessType } from '../../../src/com/asteria/hyperion/util/HyperionBaseProcessType';
import { LinesToListProcess } from 'asteria-cronos';
import { LinesToListValidator } from '../../../src/com/asteria/hyperion/module/data/linestolist/LinesToListValidator';

// Utilities:
export const CLASS_NAME: string = 'com.asteria.hyperion.module.data.linestolist::LinesToListModule';
export const PROCESS_TYPE: HyperionBaseProcessType = HyperionBaseProcessType.LINES_TO_LIST;
export const PROCESS_CLASS: any = LinesToListProcess;
export const VALIDATOR_CLASS: any = LinesToListValidator;