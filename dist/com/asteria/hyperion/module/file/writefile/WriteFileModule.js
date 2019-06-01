"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractHyperionModule_1 = require("../../../core/module/AbstractHyperionModule");
const HyperionBaseProcessType_1 = require("../../../util/HyperionBaseProcessType");
const FileWriterConfigAdapter_1 = require("./FileWriterConfigAdapter");
const WriteFileValidator_1 = require("./WriteFileValidator");
const asteria_cronos_1 = require("asteria-cronos");
class WriteFileModule extends AbstractHyperionModule_1.AbstractHyperionModule {
    constructor() {
        super(HyperionBaseProcessType_1.HyperionBaseProcessType.WRITE_FILE, asteria_cronos_1.FileWriterProcess, FileWriterConfigAdapter_1.FileWriterConfigAdapter, WriteFileValidator_1.WriteFileValidator, 'com.asteria.hyperion.module.file.writefile::WriteFileModule');
    }
}
exports.WriteFileModule = WriteFileModule;
