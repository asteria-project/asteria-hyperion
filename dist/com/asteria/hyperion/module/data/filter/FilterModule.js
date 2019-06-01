"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractHyperionModule_1 = require("../../../core/module/AbstractHyperionModule");
const HyperionBaseProcessType_1 = require("../../../util/HyperionBaseProcessType");
const asteria_cronos_1 = require("asteria-cronos");
const FilterConfigAdapter_1 = require("./FilterConfigAdapter");
const FilterValidator_1 = require("./FilterValidator");
class FilterModule extends AbstractHyperionModule_1.AbstractHyperionModule {
    constructor() {
        super(HyperionBaseProcessType_1.HyperionBaseProcessType.FILTER, asteria_cronos_1.FilterProcess, FilterConfigAdapter_1.FilterConfigAdapter, FilterValidator_1.FilterValidator, 'com.asteria.hyperion.module.data.filter::FilterModule');
    }
}
exports.FilterModule = FilterModule;
