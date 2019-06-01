"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HyperionBaseProcessType_1 = require("../../../util/HyperionBaseProcessType");
const asteria_cronos_1 = require("asteria-cronos");
const AbstractHyperionModule_1 = require("../../../core/module/AbstractHyperionModule");
const ListToCsvConfigAdapter_1 = require("./ListToCsvConfigAdapter");
const ListToCsvValidator_1 = require("./ListToCsvValidator");
class ListToCsvModule extends AbstractHyperionModule_1.AbstractHyperionModule {
    constructor() {
        super(HyperionBaseProcessType_1.HyperionBaseProcessType.LIST_TO_CSV, asteria_cronos_1.ListToCsvProcess, ListToCsvConfigAdapter_1.ListToCsvConfigAdapter, ListToCsvValidator_1.ListToCsvValidator, 'com.asteria.hyperion.module.data.listocsv::ListToCsvModule');
    }
}
exports.ListToCsvModule = ListToCsvModule;
