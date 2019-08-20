import 'mocha';
import { expect } from 'chai';
import { StreamProcess } from 'asteria-gaia';

// Class to test:
import { FilterModule } from '../../../../../../../src/com/asteria/hyperion/module/data/filter/FilterModule';

// Utilities:
import * as utils from '../../../../../../../utils/test-utils/utilities/FilterModuleTestUtils';

// Test:
describe('FilterModule class test', ()=> {

    describe('#getClassName()', ()=> {
        it('should return the FilterModule fully qualified class name', ()=> {
            const module: FilterModule = new FilterModule();
            expect(module.getClassName()).to.equal(utils.CLASS_NAME);
        });
    });
    
    describe('#getId()', ()=> {
        it('should return the correct module ID', ()=> {
            const module: FilterModule = new FilterModule();
            expect(module.getId()).to.equal(utils.PROCESS_TYPE);
        });
    });
    
    describe('#getValidator()', ()=> {
        it('should return the correct validator object for this module', ()=> {
            const module: FilterModule = new FilterModule();
            expect(module.getValidator() instanceof utils.VALIDATOR_CLASS).to.be.true;
        });
    });

    describe('#buildStreamProcess()', ()=> {
        it('should return the correct stream process object for this module', ()=> {
            const module: FilterModule = new FilterModule();
            const config: any = {};
            const process: StreamProcess = module.buildStreamProcess(config);
            expect(process instanceof utils.PROCESS_CLASS).to.be.true;
        });
    });
});