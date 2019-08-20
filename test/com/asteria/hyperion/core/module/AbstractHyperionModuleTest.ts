import 'mocha';
import { expect } from 'chai';
import { StreamProcess } from 'asteria-gaia';

// Class to test:
import { AbstractHyperionModule } from '../../../../../../src/com/asteria/hyperion/core/module/AbstractHyperionModule';

// Utilities:
import * as utils from '../../../../../../utils/test-utils/classes/AbstractHyperionModuleImpl';

// Test:
describe('AbstractHyperionModule class test', ()=> {

    describe('#getClassName()', ()=> {
        it('should return the AbstractHyperionModule fully qualified class name', ()=> {
            const module: AbstractHyperionModule = new utils.AbstractHyperionModuleImpl();
            expect(module.getClassName()).to.equal(utils.CLASS_NAME);
        });
    });
    
    describe('#getId()', ()=> {
        it('should return the module ID', ()=> {
            const module: AbstractHyperionModule = new utils.AbstractHyperionModuleImpl();
            expect(module.getId()).to.equal(utils.PROCESS_TYPE);
        });
    });
    
    describe('#getValidator()', ()=> {
        it('should return a validator object for this module', ()=> {
            const module: AbstractHyperionModule = new utils.AbstractHyperionModuleImpl();
            expect(module.getValidator() instanceof utils.VALIDATOR_CLASS).to.be.true;
        });
    });

    describe('#buildStreamProcess()', ()=> {
        it('should return a stream process object for this module', ()=> {
            const module: AbstractHyperionModule = new utils.AbstractHyperionModuleImpl();
            const config: any = {};
            const process: StreamProcess = module.buildStreamProcess(config);
            expect(process instanceof utils.PROCESS_CLASS).to.be.true;
        });
    });
});