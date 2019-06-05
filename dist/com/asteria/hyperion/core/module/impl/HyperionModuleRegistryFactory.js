"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asteria_gaia_1 = require("asteria-gaia");
const HyperionModuleRegistryImpl_1 = require("./HyperionModuleRegistryImpl");
const CsvToListModule_1 = require("../../../module/data/csvtolist/CsvToListModule");
const FilterModule_1 = require("../../../module/data/filter/FilterModule");
const LinesToListModule_1 = require("../../../module/data/linestolist/LinesToListModule");
const ListToCsvModule_1 = require("../../../module/data/listtocsv/ListToCsvModule");
const ReadFileModule_1 = require("../../../module/file/readfile/ReadFileModule");
const WriteFileModule_1 = require("../../../module/file/writefile/WriteFileModule");
class HyperionModuleRegistryFactory extends asteria_gaia_1.AbstractAsteriaObject {
    constructor() {
        super('com.asteria.hyperion.core.module.impl::HyperionModuleRegistryFactory');
    }
    create() {
        const registry = new HyperionModuleRegistryImpl_1.HyperionModuleRegistryImpl();
        registry.add(new CsvToListModule_1.CsvToListModule());
        registry.add(new FilterModule_1.FilterModule());
        registry.add(new LinesToListModule_1.LinesToListModule());
        registry.add(new ListToCsvModule_1.ListToCsvModule());
        registry.add(new ReadFileModule_1.ReadFileModule());
        registry.add(new WriteFileModule_1.WriteFileModule());
        return registry;
    }
}
exports.HyperionModuleRegistryFactory = HyperionModuleRegistryFactory;
