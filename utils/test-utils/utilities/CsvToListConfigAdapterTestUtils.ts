/*!
 * This module constains utilities used by the CsvToListConfigAdapter test  suite.
 */

// Utilities:
export const CLASS_NAME: string = 'com.asteria.hyperion.module.data.csvtolist::CsvToListConfigAdapter';
export const EMPTY_CONFIG: any = {};
export const CONFIG: any = {
    separator: ';',
    colsMap: [
        {
            id: 0,
            prop: 'prop1'
        },
        {
            id: 2,
            prop: 'prop2'
        }
    ]
};