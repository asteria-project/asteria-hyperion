import { AbstractAsteriaObject } from 'asteria-gaia';
import { HyperionModule } from './HyperionModule';

/**
 * The <code>HyperionModuleRegistry</code> 
 */
export class HyperionModuleRegistry extends AbstractAsteriaObject {

    /**
     * The map that contains all <code>HyperionModule</code> references.
     */
    private readonly MODULES: Map<string, HyperionModule> = null;

    /**
     * Create a new <code>HyperionModuleRegistry</code> instance.
     */
    constructor() {
        super('com.asteria.hyperion.core.module::HyperionModuleRegistry');
        this.MODULES = new Map<string, HyperionModule>();
    }

    /**
     * Add the specified module to the registry.
     * 
     * @param {HyperionModule} module the module to add to the registry.
     */
    public add(module: HyperionModule): void {
        this.MODULES.set(module.getId(), module);
    }
    
    /**
     * Return the module with the specified identifier.
     * 
     * @param {string} id the identifier of the module to get.
     * 
     * @return {HyperionModule} the module with the specified identifier.
     */
    public get(id: string): HyperionModule {
        return this.MODULES.get(id);
    }
    
    /**
     * Return a boolean that indicates whether the module with the specified identifier is registred 
     * (<code>true</code>), or not (<code>false</code>).
     * 
     * @param {string} id the identifier of the module to find.
     * 
     * @return {boolean} <code>true</code> whether the module with the specified identifier is registred;
     *                   <code>false</code> otherwise.
     */
    public has(id: string): boolean {
        return this.MODULES.has(id);
    }
}