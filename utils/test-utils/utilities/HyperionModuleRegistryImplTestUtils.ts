/*!
 * This module constains utilities used by the HyperionModuleRegistryImpl test suite.
 */

import { AbstractAsteriaRegistry } from "asteria-gaia";

// Utilities:
export const CLASS_NAME: string = 'com.asteria.hyperion.core.module.impl::HyperionModuleRegistryImpl';
export const getMap: Function = function<T>(processor: AbstractAsteriaRegistry<T>): Map<string, T> {
    return (processor as any).MAP;
};