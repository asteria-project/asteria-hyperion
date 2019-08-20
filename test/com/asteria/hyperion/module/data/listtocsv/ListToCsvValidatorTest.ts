import 'mocha';
import { expect } from 'chai';

// Class to test:
import { ListToCsvValidator } from '../../../../../../../src/com/asteria/hyperion/module/data/listtocsv/ListToCsvValidator';

// Utilities:
import * as utils from '../../../../../../../utils/test-utils/utilities/ListToCsvValidatorTestUtils';

// Test:
describe('ListToCsvValidator class test', ()=> {

    describe('#getClassName()', ()=> {
        it('should return the ListToCsvValidator fully qualified class name', ()=> {
            const validator: ListToCsvValidator = new ListToCsvValidator();
            expect(validator.getClassName()).to.equal(utils.CLASS_NAME);
        });
    });
    
    describe('#validate()', ()=> {
        it('should do nothing when config is null', ()=> {
            const validator: ListToCsvValidator = new ListToCsvValidator();
            expect(validator.validate(null)).to.be.null;
        });

        it('should do nothing when config is not null', ()=> {
            const validator: ListToCsvValidator = new ListToCsvValidator();
            expect(validator.validate(utils.CONFIG)).to.be.null;
        });
    });
});