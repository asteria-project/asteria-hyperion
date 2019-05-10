"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractHyperionValidator_1 = require("../../AbstractHyperionValidator");
class LinesToListValidator extends AbstractHyperionValidator_1.AbstractHyperionValidator {
    constructor() {
        super('com.asteria.hyperion.validator.impl.data::LinesToListValidator');
    }
    validate(config, result) {
        let error = null;
        result(error);
    }
}
exports.LinesToListValidator = LinesToListValidator;
