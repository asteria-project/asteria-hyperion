import 'mocha';
import { expect } from 'chai';
import * as sinon from 'sinon';
import { FilterConfig } from 'asteria-cronos';
import { OuranosLogger } from 'asteria-ouranos';
import { FilterDefinition } from 'asteria-gaia';

// Class to test:
import { FilterConfigAdapter } from '../../../../../../../src/com/asteria/hyperion/module/data/filter/FilterConfigAdapter';

// Utilities:
import * as utils from '../../../../../../../utils/test-utils/utilities/FilterConfigAdapterTestUtils';

// Test:
describe('FilterConfigAdapter class test', ()=> {

    describe('#getClassName()', ()=> {
        it('should return the FilterConfigAdapter fully qualified class name', ()=> {
            const adapter: FilterConfigAdapter = new FilterConfigAdapter();
            expect(adapter.getClassName()).to.equal(utils.CLASS_NAME);
        });
    });
    
    describe('#convert()', ()=> {
        it('should log an error whether config object is null', ()=> {
            const adapter: FilterConfigAdapter = new FilterConfigAdapter();
            const spy: any = sinon.spy(OuranosLogger.getLogger(), 'error');
            adapter.convert(null);
            sinon.assert.called(spy);
            sinon.restore();
        });

        it('should log an error whether config object is not a string', ()=> {
            const adapter: FilterConfigAdapter = new FilterConfigAdapter();
            const spy: any = sinon.spy(OuranosLogger.getLogger(), 'error');
            adapter.convert({});
            sinon.assert.called(spy);
            sinon.restore();
        });
        
        it('should return the correct FilterConfig object: ASQL parser is tested in the asteria-japet module', ()=> {
            const adapter: FilterConfigAdapter = new FilterConfigAdapter();
            const result: FilterConfig = adapter.convert(utils.CONFIG);
            expect(result.condition).to.equal(utils.CONDITION);
            result.filters.forEach((element: FilterDefinition) => {
                const found: FilterDefinition = utils.FILTERS.find((item: FilterDefinition)=> {
                    return (item.operator === element.operator) &&
                           (item.property === element.property) &&
                           (item.value === element.value);
                });
                expect(found).to.not.be.null;
            });
        });
    });
});