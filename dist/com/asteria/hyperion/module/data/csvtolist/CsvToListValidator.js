"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractHyperionValidator_1 = require("../../../validator/AbstractHyperionValidator");
class CsvToListValidator extends AbstractHyperionValidator_1.AbstractHyperionValidator {
    constructor() {
        super('com.asteria.hyperion.module.data.csvtolist::CsvToListValidator');
    }
    validate(config) {
        return null;
    }
}
exports.CsvToListValidator = CsvToListValidator;
