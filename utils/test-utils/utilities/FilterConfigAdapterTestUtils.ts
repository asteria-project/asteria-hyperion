/*!
 * This module constains utilities used by the FilterConfigAdapter test  suite.
 */

import { FilterCondition, FilterDefinition, FilterOperator } from 'asteria-gaia';

// Utilities:
export const CLASS_NAME: string = 'com.asteria.hyperion.module.data.filter::FilterConfigAdapter';
export const EMPTY_CONFIG: any = {};
export const CONFIG: string = 'Population > 1000000 AND Country = \'us\'';
export const CONDITION: FilterCondition = FilterCondition.AND;
export const FILTERS: Array<FilterDefinition> = [
    {
        property: 'Population',
        operator: FilterOperator.GREATER_THAN,
        value: 1000000
    },
    {
        property: 'Country',
        operator: FilterOperator.EQUAL,
        value: 'us'
    }
];