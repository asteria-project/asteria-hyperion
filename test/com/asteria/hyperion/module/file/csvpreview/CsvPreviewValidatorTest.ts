import 'mocha';
import { expect } from 'chai';
import { AsteriaError, AsteriaErrorCode } from 'asteria-gaia';

// Class to test:
import { CsvPreviewValidator } from '../../../../../../../src/com/asteria/hyperion/module/file/csvpreview/CsvPreviewValidator';

// Utilities:
import * as utils from '../../../../../../../utils/test-utils/utilities/CsvPreviewValidatorTestUtils';

// Test:
describe('CsvPreviewValidator class test', ()=> {

    describe('#getClassName()', ()=> {
        it('should return an INVALID_CONFIG error when config is null', ()=> {
            const validator: CsvPreviewValidator = new CsvPreviewValidator();
            expect(validator.getClassName()).to.equal(utils.CLASS_NAME);
        });
    });
    
    describe('#validate()', ()=> {
        it('should do nothing when config is null', ()=> {
            const validator: CsvPreviewValidator = new CsvPreviewValidator();
            const error: AsteriaError = validator.validate(null)
            expect(error).to.not.null;
            expect(error.code).to.equal(AsteriaErrorCode.INVALID_CONFIG);
            expect(error.message).to.equal('\'config\' must not be null');
        });

        it('should return a MISSING_PARAMETER error when config parameter is null', ()=> {
            const validator: CsvPreviewValidator = new CsvPreviewValidator();
            const error: AsteriaError = validator.validate(utils.getConfig(null));
            expect(error).to.not.null;
            expect(error.code).to.equal(AsteriaErrorCode.MISSING_PARAMETER);
            expect(error.message).to.equal('\'config\' paramater is missing');
        });

        it('should return a MISSING_PARAMETER error when config parameter is indefined', ()=> {
            const validator: CsvPreviewValidator = new CsvPreviewValidator();
            const error: AsteriaError = validator.validate(utils.getConfig(null));
            expect(error).to.not.null;
            expect(error.code).to.equal(AsteriaErrorCode.MISSING_PARAMETER);
            expect(error.message).to.equal('\'config\' paramater is missing');
        });

        it('should return a INVALID_PARAMETER error when config parameter is not a string', ()=> {
            const validator: CsvPreviewValidator = new CsvPreviewValidator();
            const error: AsteriaError = validator.validate(utils.getConfig(0));
            expect(error).to.not.null;
            expect(error.code).to.equal(AsteriaErrorCode.INVALID_PARAMETER);
            expect(error.message).to.equal('\'config\' paramater must be of the type of \'string\'');
        });

        it('should return null when config is valid', ()=> {
            const validator: CsvPreviewValidator = new CsvPreviewValidator();
            const error: AsteriaError = validator.validate(utils.getConfig(utils.VALID_CONFIG_PARAMETER));
            expect(error).to.be.null;
        });
    });
});