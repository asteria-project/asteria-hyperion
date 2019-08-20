import 'mocha';
import { expect } from 'chai';
import { ListToCsvConfig, CsvColumnMapper } from 'asteria-cronos';

// Class to test:
import { ListToCsvConfigAdapter } from '../../../../../../../src/com/asteria/hyperion/module/data/listtocsv/ListToCsvConfigAdapter';

// Utilities:
import * as utils from '../../../../../../../utils/test-utils/utilities/ListToCsvConfigAdapterTestUtils';

// Test:
describe('ListToCsvConfigAdapter class test', ()=> {

    describe('#getClassName()', ()=> {
        it('should return the ListToCsvConfigAdapter fully qualified class name', ()=> {
            const adapter: ListToCsvConfigAdapter = new ListToCsvConfigAdapter();
            expect(adapter.getClassName()).to.equal(utils.CLASS_NAME);
        });
    });
    
    describe('#convert()', ()=> {
        it('should return empty ListToCsvConfig object', ()=> {
            const adapter: ListToCsvConfigAdapter = new ListToCsvConfigAdapter();
            const result: ListToCsvConfig = adapter.convert(utils.EMPTY_CONFIG);
            expect(result.separator).to.be.undefined;
            expect(result.colsMapping).to.be.undefined;
        });

        it('should return a ListToCsvConfig object initialized with the config separator', ()=> {
            const adapter: ListToCsvConfigAdapter = new ListToCsvConfigAdapter();
            const result: ListToCsvConfig = adapter.convert(utils.CONFIG);
            expect(result.separator).to.equal(utils.CONFIG.separator);
        });
        
        it('should return a ListToCsvConfig object initialized with the config columns mapping', ()=> {
            const adapter: ListToCsvConfigAdapter = new ListToCsvConfigAdapter();
            const result: ListToCsvConfig = adapter.convert(utils.CONFIG);
            result.colsMapping.forEach((item: CsvColumnMapper, index: number)=> {
                const initialData: any = utils.CONFIG.colsMap[index];
                expect(item.index).to.equal(initialData.id);
                expect(item.property).to.equal(initialData.prop);
            });
        });
    });
});