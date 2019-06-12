"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractHyperionModule_1 = require("../../../core/module/AbstractHyperionModule");
const HyperionBaseProcessType_1 = require("../../../util/HyperionBaseProcessType");
const CsvPreviewConfigAdapter_1 = require("./CsvPreviewConfigAdapter");
const CsvPreviewValidator_1 = require("./CsvPreviewValidator");
const asteria_cronos_1 = require("asteria-cronos");
class CsvPreviewModule extends AbstractHyperionModule_1.AbstractHyperionModule {
    constructor() {
        super(HyperionBaseProcessType_1.HyperionBaseProcessType.CSV_PREVIEW, asteria_cronos_1.CsvPreviewProcess, CsvPreviewConfigAdapter_1.CsvPreviewConfigAdapter, CsvPreviewValidator_1.CsvPreviewValidator, 'com.asteria.hyperion.module.file.csvpreview::CsvPreviewModule');
    }
}
exports.CsvPreviewModule = CsvPreviewModule;
