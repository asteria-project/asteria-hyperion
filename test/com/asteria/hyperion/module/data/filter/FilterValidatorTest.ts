import 'mocha';
import { expect } from 'chai';
import { AsteriaError, AsteriaErrorCode } from 'asteria-gaia';

// Class to test:
import { FilterValidator } from '../../../../../../../src/com/asteria/hyperion/module/data/filter/FilterValidator';

// Utilities:
import * as utils from '../../../../../../../utils/test-utils/utilities/FilterValidatorTestUtils';

// Test:
describe('FilterValidator class test', ()=> {

    describe('#getClassName()', ()=> {
        it('should return the FilterValidator fully qualified class name', ()=> {
            const validator: FilterValidator = new FilterValidator();
            expect(validator.getClassName()).to.equal(utils.CLASS_NAME);
        });
    });
    
    describe('#validate()', ()=> {
        it('should return an INVALID_CONFIG error when config is null', ()=> {
            const validator: FilterValidator = new FilterValidator();
            const error: AsteriaError = validator.validate(null)
            expect(error).to.not.null;
            expect(error.code).to.equal(AsteriaErrorCode.INVALID_CONFIG);
            expect(error.message).to.equal('\'config\' must not be null');
        });

        it('should return a MISSING_PARAMETER error when config parameter is missing', ()=> {
            const validator: FilterValidator = new FilterValidator();
            const error: AsteriaError = validator.validate(utils.INVALD_CONFIG);
            expect(error).to.not.null;
            expect(error.code).to.equal(AsteriaErrorCode.MISSING_PARAMETER);
            expect(error.message).to.equal('\'config\' paramater is missing');
        });

        it('should return a INVALID_PARAMETER error when config parameter is not a string', ()=> {
            const validator: FilterValidator = new FilterValidator();
            const config: any = Object.assign({}, utils.INVALD_CONFIG);
            config.config = {};
            const error: AsteriaError = validator.validate(config);
            expect(error).to.not.null;
            expect(error.code).to.equal(AsteriaErrorCode.INVALID_PARAMETER);
            expect(error.message).to.equal('\'config\' paramater must be of the type of \'string\'');
        });

        it('should return null when config is valid', ()=> {
            const validator: FilterValidator = new FilterValidator();
            const error: AsteriaError = validator.validate(utils.CONFIG);
            expect(error).to.be.null;
        });
    });
});