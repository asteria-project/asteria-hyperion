import 'mocha';
import { expect } from 'chai';
import { HyperionModuleRegistry } from '../../../../../../../src/com/asteria/hyperion/core/module/HyperionModuleRegistry';
import { HyperionModuleRegistryImpl } from '../../../../../../../src/com/asteria/hyperion/core/module/impl/HyperionModuleRegistryImpl';
import { HyperionBaseProcessType } from '../../../../../../../src/com/asteria/hyperion/util/HyperionBaseProcessType';

// Class to test:
import { HyperionModuleRegistryFactory } from '../../../../../../../src/com/asteria/hyperion/core/module/impl/HyperionModuleRegistryFactory';

// Utilities:
import * as utils from '../../../../../../../utils/test-utils/utilities/HyperionModuleRegistryFactoryTestUtils';

// Test:
describe('HyperionModuleRegistryFactory class test', ()=> {

    describe('#getClassName()', ()=> {
        it('should return the OuranosLogger fully qualified class name', ()=> {
            const factory: HyperionModuleRegistryFactory = new HyperionModuleRegistryFactory();
            expect(factory.getClassName()).to.equal(utils.CLASS_NAME);
        });
    });

    describe('#create()', ()=> {
        it('should return a HyperionModuleRegistryImpl instance', ()=> {
            const factory: HyperionModuleRegistryFactory = new HyperionModuleRegistryFactory();
            const registry: HyperionModuleRegistry = factory.create();
            expect(registry instanceof HyperionModuleRegistryImpl).to.be.true;
        });

        it('should create a HyperionModuleRegistry object which contains a CsvToListModule instance', ()=> {
            const factory: HyperionModuleRegistryFactory = new HyperionModuleRegistryFactory();
            const registry: HyperionModuleRegistry = factory.create();
            expect(registry.has(HyperionBaseProcessType.CSV_TO_LIST)).to.be.true;
        });
        
        it('should create a HyperionModuleRegistry object which contains a FilterModule instance', ()=> {
            const factory: HyperionModuleRegistryFactory = new HyperionModuleRegistryFactory();
            const registry: HyperionModuleRegistry = factory.create();
            expect(registry.has(HyperionBaseProcessType.FILTER)).to.be.true;
        });
        
        it('should create a HyperionModuleRegistry object which contains a LinesToListModule instance', ()=> {
            const factory: HyperionModuleRegistryFactory = new HyperionModuleRegistryFactory();
            const registry: HyperionModuleRegistry = factory.create();
            expect(registry.has(HyperionBaseProcessType.LINES_TO_LIST)).to.be.true;
        });
        
        it('should create a HyperionModuleRegistry object which contains a ListToCsvModule instance', ()=> {
            const factory: HyperionModuleRegistryFactory = new HyperionModuleRegistryFactory();
            const registry: HyperionModuleRegistry = factory.create();
            expect(registry.has(HyperionBaseProcessType.LIST_TO_CSV)).to.be.true;
        });
        
        it('should create a HyperionModuleRegistry object which contains a ReadFileModule instance', ()=> {
            const factory: HyperionModuleRegistryFactory = new HyperionModuleRegistryFactory();
            const registry: HyperionModuleRegistry = factory.create();
            expect(registry.has(HyperionBaseProcessType.LIST_TO_CSV)).to.be.true;
        });
        
        it('should create a HyperionModuleRegistry object which contains a WriteFileModule instance', ()=> {
            const factory: HyperionModuleRegistryFactory = new HyperionModuleRegistryFactory();
            const registry: HyperionModuleRegistry = factory.create();
            expect(registry.has(HyperionBaseProcessType.WRITE_FILE)).to.be.true;
        });
    });
});