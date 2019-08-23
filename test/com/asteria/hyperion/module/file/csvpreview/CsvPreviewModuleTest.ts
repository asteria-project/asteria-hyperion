import 'mocha';
import { expect } from 'chai';
import { StreamProcess } from 'asteria-gaia';

// Class to test:
import { CsvPreviewModule } from '../../../../../../../src/com/asteria/hyperion/module/file/csvpreview/CsvPreviewModule';

// Utilities:
import * as utils from '../../../../../../../utils/test-utils/utilities/CsvPreviewModuleTestUtils';

// Test:
describe('CsvPreviewModule class test', ()=> {

    describe('#getClassName()', ()=> {
        it('should return the CsvPreviewModule fully qualified class name', ()=> {
            const module: CsvPreviewModule = new CsvPreviewModule();
            expect(module.getClassName()).to.equal(utils.CLASS_NAME);
        });
    });
    
    describe('#getId()', ()=> {
        it('should return the correct module ID', ()=> {
            const module: CsvPreviewModule = new CsvPreviewModule();
            expect(module.getId()).to.equal(utils.PROCESS_TYPE);
        });
    });
    
    describe('#getValidator()', ()=> {
        it('should return the correct validator object for this module', ()=> {
            const module: CsvPreviewModule = new CsvPreviewModule();
            expect(module.getValidator() instanceof utils.VALIDATOR_CLASS).to.be.true;
        });
    });

    describe('#buildStreamProcess()', ()=> {
        it('should return the correct stream process object for this module', ()=> {
            const module: CsvPreviewModule = new CsvPreviewModule();
            const config: any = {};
            const process: StreamProcess = module.buildStreamProcess(config);
            expect(process instanceof utils.PROCESS_CLASS).to.be.true;
        });
    });
});