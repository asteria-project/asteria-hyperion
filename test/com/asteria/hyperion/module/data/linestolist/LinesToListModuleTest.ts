import 'mocha';
import { expect } from 'chai';
import { StreamProcess } from 'asteria-gaia';

// Class to test:
import { LinesToListModule } from '../../../../../../../src/com/asteria/hyperion/module/data/linestolist/LinesToListModule';

// Utilities:
import * as utils from '../../../../../../../utils/test-utils/utilities/LinesToListModuleTestUtils';

// Test:
describe('LinesToListModule class test', ()=> {

    describe('#getClassName()', ()=> {
        it('should return the LinesToListModule fully qualified class name', ()=> {
            const module: LinesToListModule = new LinesToListModule();
            expect(module.getClassName()).to.equal(utils.CLASS_NAME);
        });
    });
    
    describe('#getId()', ()=> {
        it('should return the correct module ID', ()=> {
            const module: LinesToListModule = new LinesToListModule();
            expect(module.getId()).to.equal(utils.PROCESS_TYPE);
        });
    });
    
    describe('#getValidator()', ()=> {
        it('should return the correct validator object for this module', ()=> {
            const module: LinesToListModule = new LinesToListModule();
            expect(module.getValidator() instanceof utils.VALIDATOR_CLASS).to.be.true;
        });
    });

    describe('#buildStreamProcess()', ()=> {
        it('should return the correct stream process object for this module', ()=> {
            const module: LinesToListModule = new LinesToListModule();
            const config: any = {};
            const process: StreamProcess = module.buildStreamProcess(config);
            expect(process instanceof utils.PROCESS_CLASS).to.be.true;
        });
    });
});