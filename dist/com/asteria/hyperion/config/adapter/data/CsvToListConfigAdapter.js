"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asteria_gaia_1 = require("asteria-gaia");
class CsvToListConfigAdapter extends asteria_gaia_1.AbstractAsteriaObject {
    constructor() {
        super('com.asteria.hyperion.config.adapter.data::CsvToListConfigAdapter');
    }
    convert(config) {
        const colsMap = config.colsMap;
        let result = {};
        if (config.separator) {
            result.separator = config.separator;
        }
        if (colsMap) {
            const colsMapping = new Array();
            colsMap.forEach((value) => {
                colsMapping.push({
                    index: value.id,
                    property: value.prop
                });
            });
            result.colsMapping = colsMapping;
        }
        return result;
    }
}
exports.CsvToListConfigAdapter = CsvToListConfigAdapter;
