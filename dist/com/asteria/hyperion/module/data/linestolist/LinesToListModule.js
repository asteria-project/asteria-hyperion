"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HyperionBaseProcessType_1 = require("../../../util/HyperionBaseProcessType");
const asteria_cronos_1 = require("asteria-cronos");
const AbstractHyperionModule_1 = require("../../../core/module/AbstractHyperionModule");
const LinesToListValidator_1 = require("./LinesToListValidator");
const LinesToListConfigAdapter_1 = require("./LinesToListConfigAdapter");
class LinesToListModule extends AbstractHyperionModule_1.AbstractHyperionModule {
    constructor() {
        super(HyperionBaseProcessType_1.HyperionBaseProcessType.LINES_TO_LIST, asteria_cronos_1.LinesToListProcess, LinesToListConfigAdapter_1.LinesToListConfigAdapter, LinesToListValidator_1.LinesToListValidator, 'com.asteria.hyperion.module.data.linestolist::LinesToListModule');
    }
}
exports.LinesToListModule = LinesToListModule;
