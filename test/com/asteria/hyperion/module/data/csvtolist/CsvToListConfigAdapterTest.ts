import 'mocha';
import { expect } from 'chai';
import { CsvToListConfig, CsvColumnMapper } from 'asteria-cronos';

// Class to test:
import { CsvToListConfigAdapter } from '../../../../../../../src/com/asteria/hyperion/module/data/csvtolist/CsvToListConfigAdapter';

// Utilities:
import * as utils from '../../../../../../../utils/test-utils/utilities/CsvToListConfigAdapterTestUtils';

// Test:
describe('CsvToListConfigAdapter class test', ()=> {

    describe('#getClassName()', ()=> {
        it('should return the CsvToListConfigAdapter fully qualified class name', ()=> {
            const adapter: CsvToListConfigAdapter = new CsvToListConfigAdapter();
            expect(adapter.getClassName()).to.equal(utils.CLASS_NAME);
        });
    });
    
    describe('#convert()', ()=> {
        it('should return empty CsvToListConfig object', ()=> {
            const adapter: CsvToListConfigAdapter = new CsvToListConfigAdapter();
            const result: CsvToListConfig = adapter.convert(utils.EMPTY_CONFIG);
            expect(result.separator).to.be.undefined;
            expect(result.colsMapping).to.be.undefined;
        });
        it('should return a CsvToListConfig object initialized with the config separator', ()=> {
            const adapter: CsvToListConfigAdapter = new CsvToListConfigAdapter();
            const result: CsvToListConfig = adapter.convert(utils.CONFIG);
            expect(result.separator).to.equal(utils.CONFIG.separator);
        });
        it('should return a CsvToListConfig object initialized with the config columns mapping', ()=> {
            const adapter: CsvToListConfigAdapter = new CsvToListConfigAdapter();
            const result: CsvToListConfig = adapter.convert(utils.CONFIG);
            result.colsMapping.forEach((item: CsvColumnMapper, index: number)=> {
                const initialData: any = utils.CONFIG.colsMap[index];
                expect(item.index).to.equal(initialData.id);
                expect(item.property).to.equal(initialData.prop);
            });
        });
    });
});