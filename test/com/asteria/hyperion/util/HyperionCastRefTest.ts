import 'mocha';
import { expect } from 'chai';

// Class to test:
import { HyperionCastRef } from '../../../../../src/com/asteria/hyperion/util/HyperionCastRef';

// Utilities:
import * as utils from '../../../../../utils/test-utils/utilities/HyperionCastRefTestUtils';

// Test:
describe('HyperionCastRef enum test', ()=> {

  describe('#STRING', ()=> {
    it('STRING should equals "string"', ()=> {
      expect(HyperionCastRef.STRING).to.equal(utils.STRING);
    });
  });
  
  describe('#NUMBER', ()=> {
    it('NUMBER should equals "number"', ()=> {
      expect(HyperionCastRef.NUMBER).to.equal(utils.NUMBER);
    });
  });
  
  describe('#BOOLEAN', ()=> {
    it('BOOLEAN should equals "boolean"', ()=> {
      expect(HyperionCastRef.BOOLEAN).to.equal(utils.BOOLEAN);
    });
  });
});