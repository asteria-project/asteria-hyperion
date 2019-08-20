import 'mocha';
import { expect } from 'chai';

// Class to test:
import { LinesToListValidator } from '../../../../../../../src/com/asteria/hyperion/module/data/linestolist/LinesToListValidator';

// Utilities:
import * as utils from '../../../../../../../utils/test-utils/utilities/LinesToListValidatorTestUtils';

// Test:
describe('LinesToListValidator class test', ()=> {

    describe('#getClassName()', ()=> {
        it('should return the LinesToListValidator fully qualified class name', ()=> {
            const validator: LinesToListValidator = new LinesToListValidator();
            expect(validator.getClassName()).to.equal(utils.CLASS_NAME);
        });
    });
    
    describe('#validate()', ()=> {
        it('should do nothing when config is null', ()=> {
            const validator: LinesToListValidator = new LinesToListValidator();
            expect(validator.validate(null)).to.be.null;
        });

        it('should do nothing when config is not null', ()=> {
            const validator: LinesToListValidator = new LinesToListValidator();
            expect(validator.validate(utils.CONFIG)).to.be.null;
        });
    });
});