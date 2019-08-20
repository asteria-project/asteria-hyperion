import 'mocha';
import { expect } from 'chai';
import { LinesToListConfig } from 'asteria-cronos';

// Class to test:
import { LinesToListConfigAdapter } from '../../../../../../../src/com/asteria/hyperion/module/data/linestolist/LinesToListConfigAdapter';

// Utilities:
import * as utils from '../../../../../../../utils/test-utils/utilities/LinesToListConfigAdapterTestUtils';

// Test:
describe('LinesToListConfigAdapter class test', ()=> {

    describe('#getClassName()', ()=> {
        it('should return the LinesToListConfigAdapter fully qualified class name', ()=> {
            const adapter: LinesToListConfig = new LinesToListConfigAdapter();
            expect(adapter.getClassName()).to.equal(utils.CLASS_NAME);
        });
    });
    
    describe('#convert()', ()=> {
        it('should do nothing when config is null', ()=> {
            const adapter: LinesToListConfigAdapter = new LinesToListConfigAdapter();
            const result: LinesToListConfig = adapter.convert(null);
            expect(result).to.be.null;
        });

        it('should do nothing when config is not null', ()=> {
            const adapter: LinesToListConfigAdapter = new LinesToListConfigAdapter();
            const result: LinesToListConfig = adapter.convert({});
            expect(result).to.be.null;
        });
    });
});