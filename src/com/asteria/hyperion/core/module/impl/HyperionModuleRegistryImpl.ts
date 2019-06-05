import { AbstractAsteriaRegistry } from 'asteria-gaia';
import { HyperionModule } from '../HyperionModule';
import { HyperionModuleRegistry } from '../HyperionModuleRegistry';

/**
 * The <code>HyperionModuleRegistryImpl</code> is the default implementation of the <code>HyperionModuleRegistry</code>
 * interface.
 */
export class HyperionModuleRegistryImpl extends AbstractAsteriaRegistry<HyperionModule>
                                        implements HyperionModuleRegistry {

    /**
     * Create a new <code>HyperionModuleRegistryImpl</code> instance.
     */
    constructor() {
        super('com.asteria.hyperion.core.module.impl::HyperionModuleRegistryImpl');
    }

    /**
     * @inheritdoc
     */
    public add(module: HyperionModule): void {
        this.MAP.set(module.getId(), module);
    }
    
    /**
     * @inheritdoc
     */
    public remove(module: HyperionModule): void {
        this.MAP.delete(module.getId());
    }
}