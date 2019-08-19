import 'mocha';
import { expect } from 'chai';
import { LinesToListModule } from '../../../../../../../src/com/asteria/hyperion/module/data/linestolist/LinesToListModule';
import { HyperionBaseProcessType } from '../../../../../../../src/com/asteria/hyperion/util/HyperionBaseProcessType';
import { HyperionModule } from '../../../../../../../src/com/asteria/hyperion/core/module/HyperionModule';

// Class to test:
import { HyperionModuleRegistryImpl } from '../../../../../../../src/com/asteria/hyperion/core/module/impl/HyperionModuleRegistryImpl';

// Utilities:
import * as utils from '../../../../../../../utils/test-utils/utilities/HyperionModuleRegistryImplTestUtils';

// Test:
describe('HyperionModuleRegistryImpl class test', ()=> {

    describe('#getClassName()', ()=> {
        it('should return the OuranosLogger fully qualified class name', ()=> {
            const registry: HyperionModuleRegistryImpl = new HyperionModuleRegistryImpl();
            expect(registry.getClassName()).to.equal(utils.CLASS_NAME);
        });
    });

    describe('#add()', ()=> {
        it('should add a new Hyperion module to the registry', ()=> {
            const registry: HyperionModuleRegistryImpl = new HyperionModuleRegistryImpl();
            registry.add(new LinesToListModule());
            expect(utils.getMap(registry).has(HyperionBaseProcessType.LINES_TO_LIST)).to.be.true;
        });
    });

    describe('#remove()', ()=> {
        it('should remove the specified Hyperion module from the registry', ()=> {
            const registry: HyperionModuleRegistryImpl = new HyperionModuleRegistryImpl();
            const module: HyperionModule = new LinesToListModule();
            registry.add(module);
            expect(utils.getMap(registry).has(HyperionBaseProcessType.LINES_TO_LIST)).to.be.true;
            registry.remove(module);
            expect(utils.getMap(registry).has(HyperionBaseProcessType.LINES_TO_LIST)).to.be.false;
        });
    });
});