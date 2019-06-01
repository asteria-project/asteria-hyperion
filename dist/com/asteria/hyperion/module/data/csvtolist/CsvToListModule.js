"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractHyperionModule_1 = require("../../../core/module/AbstractHyperionModule");
const HyperionBaseProcessType_1 = require("../../../util/HyperionBaseProcessType");
const CsvToListValidator_1 = require("./CsvToListValidator");
const CsvToListConfigAdapter_1 = require("./CsvToListConfigAdapter");
const asteria_cronos_1 = require("asteria-cronos");
class CsvToListModule extends AbstractHyperionModule_1.AbstractHyperionModule {
    constructor() {
        super(HyperionBaseProcessType_1.HyperionBaseProcessType.CSV_TO_LIST, asteria_cronos_1.CsvToListProcess, CsvToListConfigAdapter_1.CsvToListConfigAdapter, CsvToListValidator_1.CsvToListValidator, 'com.asteria.hyperion.module.data.csvtolist::CsvToListModule');
    }
}
exports.CsvToListModule = CsvToListModule;
