/*!
 * This module constains utilities used by the CsvPreviewValidator test suite.
 */
 
import { HyperionBaseProcessType } from '../../../src/com/asteria/hyperion/util/HyperionBaseProcessType';
import { HyperionProcessConfig } from '../../../src/com/asteria/hyperion/config/HyperionProcessConfig';

// Utilities:
export const CLASS_NAME: string = 'com.asteria.hyperion.module.file.csvpreview::CsvPreviewValidator';
export const getConfig: Function = function(config: any): HyperionProcessConfig {
    return {
        type: HyperionBaseProcessType.CSV_TO_LIST,
        config: config
    };
};
export const VALID_CONFIG_PARAMETER: string = 'path/to/file';
