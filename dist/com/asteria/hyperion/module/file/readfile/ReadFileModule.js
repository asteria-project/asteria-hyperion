"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractHyperionModule_1 = require("../../../core/module/AbstractHyperionModule");
const HyperionBaseProcessType_1 = require("../../../util/HyperionBaseProcessType");
const FileReaderConfigAdapter_1 = require("./FileReaderConfigAdapter");
const ReadFileValidator_1 = require("./ReadFileValidator");
const asteria_cronos_1 = require("asteria-cronos");
class ReadFileModule extends AbstractHyperionModule_1.AbstractHyperionModule {
    constructor() {
        super(HyperionBaseProcessType_1.HyperionBaseProcessType.READ_FILE, asteria_cronos_1.FileReaderProcess, FileReaderConfigAdapter_1.FileReaderConfigAdapter, ReadFileValidator_1.ReadFileValidator, 'com.asteria.hyperion.module.file.readfile::ReadFileModule');
    }
}
exports.ReadFileModule = ReadFileModule;
