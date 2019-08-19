import 'mocha';
import { expect } from 'chai';

// Class to test:
import { AbstractHyperionValidator } from '../../../../../src/com/asteria/hyperion/validator/AbstractHyperionValidator';

// Utilities:
import * as utils from '../../../../../utils/test-utils/classes/AbstractHyperionValidatorImpl';

// Test:
describe('AbstractHyperionValidator class test', ()=> {

    describe('#getClassName()', ()=> {
        it('should return the AbstractHyperionValidator fully qualified class name', ()=> {
            const module: AbstractHyperionValidator = new utils.AbstractHyperionValidatorImpl();
            expect(module.getClassName()).to.equal(utils.CLASS_NAME);
        });
    });
});