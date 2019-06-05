"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractHyperionValidator_1 = require("../../../validator/AbstractHyperionValidator");
class ListToCsvValidator extends AbstractHyperionValidator_1.AbstractHyperionValidator {
    constructor() {
        super('com.asteria.hyperion.module.data.listocsv::ListToCsvValidator');
    }
    validate(config) {
        return null;
    }
}
exports.ListToCsvValidator = ListToCsvValidator;
