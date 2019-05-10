"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HyperionBaseProcessType_1 = require("../util/HyperionBaseProcessType");
const ReadFileValidator_1 = require("./impl/file/ReadFileValidator");
const CsvToListValidator_1 = require("./impl/data/CsvToListValidator");
const FilterValidator_1 = require("./impl/data/FilterValidator");
const ListToCsvValidator_1 = require("./impl/data/ListToCsvValidator");
const WriteFileValidator_1 = require("./impl/file/WriteFileValidator");
const asteria_gaia_1 = require("asteria-gaia");
const LinesToListValidator_1 = require("./impl/data/LinesToListValidator");
class HyperionValidatorManager extends asteria_gaia_1.AbstractAsteriaObject {
    constructor() {
        super('com.asteria.hyperion.validator::HyperionValidatorManager');
        this.VALIDATORS = new Map([
            [HyperionBaseProcessType_1.HyperionBaseProcessType.READ_FILE, ReadFileValidator_1.ReadFileValidator],
            [HyperionBaseProcessType_1.HyperionBaseProcessType.WRITE_FILE, WriteFileValidator_1.WriteFileValidator],
            [HyperionBaseProcessType_1.HyperionBaseProcessType.CSV_TO_LIST, CsvToListValidator_1.CsvToListValidator],
            [HyperionBaseProcessType_1.HyperionBaseProcessType.LINES_TO_LIST, LinesToListValidator_1.LinesToListValidator],
            [HyperionBaseProcessType_1.HyperionBaseProcessType.LIST_TO_CSV, ListToCsvValidator_1.ListToCsvValidator],
            [HyperionBaseProcessType_1.HyperionBaseProcessType.FILTER, FilterValidator_1.FilterValidator]
        ]);
    }
    getValidator(type) {
        const ClassRef = this.VALIDATORS.get(type);
        return new ClassRef();
    }
}
exports.HyperionValidatorManager = HyperionValidatorManager;
