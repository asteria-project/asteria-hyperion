"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asteria_gaia_1 = require("asteria-gaia");
const asteria_ouranos_1 = require("asteria-ouranos");
const asteria_cronos_1 = require("asteria-cronos");
const FileReaderConfigAdapter_1 = require("../config/adapter/file/FileReaderConfigAdapter");
const CsvToListConfigAdapter_1 = require("../config/adapter/data/CsvToListConfigAdapter");
const FilterConfigAdapter_1 = require("../config/adapter/data/FilterConfigAdapter");
const ListToCsvConfigAdapter_1 = require("../config/adapter/data/ListToCsvConfigAdapter");
const FileWriterConfigAdapter_1 = require("../config/adapter/file/FileWriterConfigAdapter");
const LinesToToListConfigAdapter_1 = require("../config/adapter/data/LinesToToListConfigAdapter");
class HyperionProcessor extends asteria_gaia_1.AbstractAsteriaObject {
    constructor(session) {
        super('com.asteria.hyperion.processor::HyperionProcessor');
        this.SESSION = null;
        this.SESSION = session;
    }
    run() {
        return this.SESSION.getContext().getProcessor().run();
    }
    readFile(path) {
        this.addProcess(asteria_cronos_1.FileReaderProcess, FileReaderConfigAdapter_1.FileReaderConfigAdapter, path);
        return this;
    }
    writeFile(path) {
        this.addProcess(asteria_cronos_1.FileWriterProcess, FileWriterConfigAdapter_1.FileWriterConfigAdapter, path);
        return this;
    }
    csvToList(config) {
        this.addProcess(asteria_cronos_1.CsvToListProcess, CsvToListConfigAdapter_1.CsvToListConfigAdapter, config);
        return this;
    }
    linesToList(config) {
        this.addProcess(asteria_cronos_1.LinesToListProcess, LinesToToListConfigAdapter_1.LinesToToListConfigAdapter, config);
        return this;
    }
    listToCsv(config) {
        this.addProcess(asteria_cronos_1.ListToCsvProcess, ListToCsvConfigAdapter_1.ListToCsvConfigAdapter, config);
        return this;
    }
    filter(config) {
        this.addProcess(asteria_cronos_1.FilterProcess, FilterConfigAdapter_1.FilterConfigAdapter, config);
        return this;
    }
    addProcess(processClass, adapterClass, config) {
        const adapter = new adapterClass();
        const process = asteria_ouranos_1.Ouranos.buildProcess(processClass, adapter.convert(config));
        this.SESSION.getContext().getProcessor().add(process);
    }
}
exports.HyperionProcessor = HyperionProcessor;
