/*!
 * This module constains utilities used by the CsvPreviewModule test suite.
 */

import { HyperionBaseProcessType } from '../../../src/com/asteria/hyperion/util/HyperionBaseProcessType';
import { CsvPreviewProcess } from 'asteria-cronos';
import { CsvPreviewValidator } from '../../../src/com/asteria/hyperion/module/file/csvpreview/CsvPreviewValidator';

// Utilities:
export const CLASS_NAME: string = 'com.asteria.hyperion.module.file.csvpreview::CsvPreviewModule';
export const PROCESS_TYPE: HyperionBaseProcessType = HyperionBaseProcessType.CSV_PREVIEW;
export const PROCESS_CLASS: any = CsvPreviewProcess;
export const VALIDATOR_CLASS: any = CsvPreviewValidator;