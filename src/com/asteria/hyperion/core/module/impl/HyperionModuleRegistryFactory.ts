import { AbstractAsteriaObject } from 'asteria-gaia';
import { HyperionModuleRegistry } from '../HyperionModuleRegistry';
import { HyperionModuleRegistryImpl } from './HyperionModuleRegistryImpl';
import { CsvToListModule } from '../../../module/data/csvtolist/CsvToListModule';
import { FilterModule } from '../../../module/data/filter/FilterModule';
import { LinesToListModule } from '../../../module/data/linestolist/LinesToListModule';
import { ListToCsvModule } from '../../../module/data/listtocsv/ListToCsvModule';
import { ReadFileModule } from '../../../module/file/readfile/ReadFileModule';
import { WriteFileModule } from '../../../module/file/writefile/WriteFileModule';

/**
 * The <code>HyperionModuleRegistryImpl</code> is the default implementation of the <code>HyperionModuleRegistry</code>
 * interface.
 */
export class HyperionModuleRegistryFactory extends AbstractAsteriaObject {

    /**
     * Create a new <code>HyperionModuleRegistryFactory</code> instance.
     */
    constructor() {
        super('com.asteria.hyperion.core.module.impl::HyperionModuleRegistryFactory');
    }

    /**
     * @inheritdoc
     */
    public create(): HyperionModuleRegistry {
        // The add() method of HyperionModuleRegistryImpl objects can be used synchronously:
        const registry: HyperionModuleRegistry = new HyperionModuleRegistryImpl();
        // data processes
        registry.add(new CsvToListModule());
        registry.add(new FilterModule());
        registry.add(new LinesToListModule());
        registry.add(new ListToCsvModule());
        // file processes
        registry.add(new ReadFileModule());
        registry.add(new WriteFileModule());
        return registry;
    }
}