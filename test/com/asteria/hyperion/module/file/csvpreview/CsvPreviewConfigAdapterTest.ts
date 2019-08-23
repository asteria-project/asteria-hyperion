import 'mocha';
import { expect } from 'chai';
import * as sinon from 'sinon';
import { OuranosLogger } from 'asteria-ouranos';
import { CsvPreviewConfig } from 'asteria-cronos';

// Class to test:
import { CsvPreviewConfigAdapter } from '../../../../../../../src/com/asteria/hyperion/module/file/csvpreview/CsvPreviewConfigAdapter';

// Utilities:
import * as utils from '../../../../../../../utils/test-utils/utilities/CsvPreviewConfigAdapterTestUtils';

// Test:
describe('CsvPreviewConfigAdapter class test', ()=> {

    describe('#getClassName()', ()=> {
        it('should return the CsvPreviewConfigAdapter fully qualified class name', ()=> {
            const adapter: CsvPreviewConfigAdapter = new CsvPreviewConfigAdapter();
            expect(adapter.getClassName()).to.equal(utils.CLASS_NAME);
        });
    });
    
    describe('#convert()', ()=> {
        it('should log an error whether config object is null', ()=> {
            const adapter: CsvPreviewConfigAdapter = new CsvPreviewConfigAdapter();
            const spy: any = sinon.spy(OuranosLogger.getLogger(), 'error');
            adapter.convert(null);
            sinon.assert.called(spy);
            sinon.restore();
        });

        it('should log an error whether config object is not a string', ()=> {
            const adapter: CsvPreviewConfigAdapter = new CsvPreviewConfigAdapter();
            const spy: any = sinon.spy(OuranosLogger.getLogger(), 'error');
            adapter.convert({});
            sinon.assert.called(spy);
            sinon.restore();
        });
        
        it('should return the correct CsvPreviewConfig object', ()=> {
            const adapter: CsvPreviewConfigAdapter = new CsvPreviewConfigAdapter();
            const result: CsvPreviewConfig = adapter.convert(utils.CONFIG);
            expect(result.path).to.equal(utils.CONFIG);
        });
    });
});