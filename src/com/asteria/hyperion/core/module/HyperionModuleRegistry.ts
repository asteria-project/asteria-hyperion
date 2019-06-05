import { AsteriaRegistry } from 'asteria-gaia';
import { HyperionModule } from './HyperionModule';

/**
 * The <code>HyperionModuleRegistry</code> interface represents the Hyperion registry where are stored module
 * references.
 */
export interface HyperionModuleRegistry extends AsteriaRegistry<HyperionModule> {}