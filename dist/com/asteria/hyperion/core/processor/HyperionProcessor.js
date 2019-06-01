"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asteria_gaia_1 = require("asteria-gaia");
const asteria_ouranos_1 = require("asteria-ouranos");
const asteria_cronos_1 = require("asteria-cronos");
const FileReaderConfigAdapter_1 = require("../../module/file/readfile/FileReaderConfigAdapter");
const FileWriterConfigAdapter_1 = require("../../module/file/writefile/FileWriterConfigAdapter");
const FilterConfigAdapter_1 = require("../../module/data/filter/FilterConfigAdapter");
const CsvToListConfigAdapter_1 = require("../../module/data/csvtolist/CsvToListConfigAdapter");
const ListToCsvConfigAdapter_1 = require("../../module/data/listtocsv/ListToCsvConfigAdapter");
const LinesToListConfigAdapter_1 = require("../../module/data/linestolist/LinesToListConfigAdapter");
class HyperionProcessor extends asteria_gaia_1.AbstractAsteriaObject {
    constructor(session) {
        super('com.asteria.hyperion.core.processor::HyperionProcessor');
        this.SESSION = null;
        this.SESSION = session;
    }
    run() {
        return this.SESSION.getContext().getProcessor().run();
    }
    addProcess(process) {
        this.SESSION.getContext().getProcessor().add(process);
        return this;
    }
    readFile(path) {
        return this.initProcess(asteria_cronos_1.FileReaderProcess, FileReaderConfigAdapter_1.FileReaderConfigAdapter, path);
    }
    writeFile(path) {
        return this.initProcess(asteria_cronos_1.FileWriterProcess, FileWriterConfigAdapter_1.FileWriterConfigAdapter, path);
    }
    csvToList(config) {
        return this.initProcess(asteria_cronos_1.CsvToListProcess, CsvToListConfigAdapter_1.CsvToListConfigAdapter, config);
    }
    linesToList(config) {
        return this.initProcess(asteria_cronos_1.LinesToListProcess, LinesToListConfigAdapter_1.LinesToListConfigAdapter, config);
    }
    listToCsv(config) {
        return this.initProcess(asteria_cronos_1.ListToCsvProcess, ListToCsvConfigAdapter_1.ListToCsvConfigAdapter, config);
    }
    filter(config) {
        return this.initProcess(asteria_cronos_1.FilterProcess, FilterConfigAdapter_1.FilterConfigAdapter, config);
    }
    initProcess(processClass, adapterClass, config) {
        const adapter = new adapterClass();
        const process = asteria_ouranos_1.Ouranos.buildProcess(processClass, adapter.convert(config));
        return this.addProcess(process);
    }
}
exports.HyperionProcessor = HyperionProcessor;
