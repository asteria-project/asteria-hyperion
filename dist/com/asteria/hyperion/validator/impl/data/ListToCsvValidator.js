"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractHyperionValidator_1 = require("../../AbstractHyperionValidator");
class ListToCsvValidator extends AbstractHyperionValidator_1.AbstractHyperionValidator {
    constructor() {
        super('com.asteria.hyperion.validator.impl.data::ListToCsvValidator');
    }
    validate(config, result) {
        let error = null;
        result(error);
    }
}
exports.ListToCsvValidator = ListToCsvValidator;
