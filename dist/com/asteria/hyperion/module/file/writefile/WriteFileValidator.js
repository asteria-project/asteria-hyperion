"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asteria_gaia_1 = require("asteria-gaia");
const asteria_ouranos_1 = require("asteria-ouranos");
const AbstractHyperionValidator_1 = require("../../../validator/AbstractHyperionValidator");
class WriteFileValidator extends AbstractHyperionValidator_1.AbstractHyperionValidator {
    constructor() {
        super('com.asteria.hyperion.module.file.writefile::WriteFileValidator');
    }
    validate(config) {
        let error = null;
        const param = config.config;
        if (param === null || param === undefined) {
            error = asteria_ouranos_1.OuranosErrorBuilder.getInstance().build(asteria_gaia_1.AsteriaErrorCode.MISSING_PARAMETER, this.getClassName(), '\'config\' paramater is missing');
        }
        else if (typeof param !== asteria_gaia_1.PrimitiveType.STRING) {
            error = asteria_ouranos_1.OuranosErrorBuilder.getInstance().build(asteria_gaia_1.AsteriaErrorCode.INVALID_PARAMETER, this.getClassName(), '\'config\' paramater must be of the type of \'string\'');
        }
        return error;
    }
}
exports.WriteFileValidator = WriteFileValidator;
