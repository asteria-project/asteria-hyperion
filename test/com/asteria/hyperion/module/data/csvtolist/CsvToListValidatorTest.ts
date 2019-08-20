import 'mocha';
import { expect } from 'chai';

// Class to test:
import { CsvToListValidator } from '../../../../../../../src/com/asteria/hyperion/module/data/csvtolist/CsvToListValidator';

// Utilities:
import * as utils from '../../../../../../../utils/test-utils/utilities/CsvToListValidatorTestUtils';

// Test:
describe('CsvToListValidator class test', ()=> {

    describe('#getClassName()', ()=> {
        it('should return the CsvToListValidator fully qualified class name', ()=> {
            const validator: CsvToListValidator = new CsvToListValidator();
            expect(validator.getClassName()).to.equal(utils.CLASS_NAME);
        });
    });
    
    describe('#validate()', ()=> {
        it('should do nothing when config is null', ()=> {
            const validator: CsvToListValidator = new CsvToListValidator();
            expect(validator.validate(null)).to.be.null;
        });

        it('should do nothing when config is not null', ()=> {
            const validator: CsvToListValidator = new CsvToListValidator();
            expect(validator.validate(utils.CONFIG)).to.be.null;
        });
    });
});