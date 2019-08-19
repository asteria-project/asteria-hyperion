import 'mocha';
import { expect } from 'chai';

// Class to test:
import { HyperionBaseProcessType } from '../../../../../src/com/asteria/hyperion/util/HyperionBaseProcessType';

// Utilities:
import * as utils from '../../../../../utils/test-utils/utilities/HyperionBaseProcessTypeTestUtils';

// Test:
describe('HyperionBaseProcessType enum test', ()=> {

  describe('#READ_FILE', ()=> {
    it('READ_FILE should equals "read-file"', ()=> {
      expect(HyperionBaseProcessType.READ_FILE).to.equal(utils.READ_FILE);
    });
  });
  
  describe('#WRITE_FILE', ()=> {
    it('WRITE_FILE should equals "write-file"', ()=> {
      expect(HyperionBaseProcessType.WRITE_FILE).to.equal(utils.WRITE_FILE);
    });
  });
  
  describe('#CSV_TO_LIST', ()=> {
    it('CSV_TO_LIST should equals "csv-to-list"', ()=> {
      expect(HyperionBaseProcessType.CSV_TO_LIST).to.equal(utils.CSV_TO_LIST);
    });
  });
  
  describe('#LINES_TO_LIST', ()=> {
    it('LINES_TO_LIST should equals "lines-to-list"', ()=> {
      expect(HyperionBaseProcessType.LINES_TO_LIST).to.equal(utils.LINES_TO_LIST);
    });
  });
  
  describe('#LIST_TO_CSV', ()=> {
    it('LIST_TO_CSV should equals "list-to-csv"', ()=> {
      expect(HyperionBaseProcessType.LIST_TO_CSV).to.equal(utils.LIST_TO_CSV);
    });
  });
  
  describe('#FILTER', ()=> {
    it('FILTER should equals "filter"', ()=> {
      expect(HyperionBaseProcessType.FILTER).to.equal(utils.FILTER);
    });
  });
  
  describe('#CSV_PREVIEW', ()=> {
    it('CSV_PREVIEW should equals "csv-preview"', ()=> {
      expect(HyperionBaseProcessType.CSV_PREVIEW).to.equal(utils.CSV_PREVIEW);
    });
  });
});