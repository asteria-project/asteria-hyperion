import 'mocha';
import { expect } from 'chai';
import { StreamProcess } from 'asteria-gaia';

// Class to test:
import { ListToCsvModule } from '../../../../../../../src/com/asteria/hyperion/module/data/listtocsv/ListToCsvModule';

// Utilities:
import * as utils from '../../../../../../../utils/test-utils/utilities/ListToCsvModuleTestUtils';

// Test:
describe('ListToCsvModule class test', ()=> {

    describe('#getClassName()', ()=> {
        it('should return the ListToCsvModule fully qualified class name', ()=> {
            const module: ListToCsvModule = new ListToCsvModule();
            expect(module.getClassName()).to.equal(utils.CLASS_NAME);
        });
    });
    
    describe('#getId()', ()=> {
        it('should return the correct module ID', ()=> {
            const module: ListToCsvModule = new ListToCsvModule();
            expect(module.getId()).to.equal(utils.PROCESS_TYPE);
        });
    });
    
    describe('#getValidator()', ()=> {
        it('should return the correct validator object for this module', ()=> {
            const module: ListToCsvModule = new ListToCsvModule();
            expect(module.getValidator() instanceof utils.VALIDATOR_CLASS).to.be.true;
        });
    });

    describe('#buildStreamProcess()', ()=> {
        it('should return the correct stream process object for this module', ()=> {
            const module: ListToCsvModule = new ListToCsvModule();
            const config: any = {};
            const process: StreamProcess = module.buildStreamProcess(config);
            expect(process instanceof utils.PROCESS_CLASS).to.be.true;
        });
    });
});