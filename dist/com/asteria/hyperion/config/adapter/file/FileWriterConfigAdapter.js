"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asteria_gaia_1 = require("asteria-gaia");
const asteria_ouranos_1 = require("asteria-ouranos");
const LOGGER = asteria_ouranos_1.OuranosLogger.getLogger();
class FileWriterConfigAdapter extends asteria_gaia_1.AbstractAsteriaObject {
    constructor() {
        super('com.asteria.hyperion.config.adapter.file::FileWriterConfigAdapter');
    }
    convert(config) {
        let error = null;
        let result = null;
        if (!config) {
            error = asteria_ouranos_1.OuranosErrorBuilder.getInstance().build(asteria_gaia_1.AsteriaErrorCode.MISSING_ASQL_QUERY, this.getClassName(), 'file path is missing');
            LOGGER.error(error.toString());
        }
        else if (typeof config !== asteria_gaia_1.PrimitiveType.STRING) {
            error = asteria_ouranos_1.OuranosErrorBuilder.getInstance().build(asteria_gaia_1.AsteriaErrorCode.INVALID_ASQL_QUERY, this.getClassName(), 'file path must be of the type of \'string\'');
        }
        else {
            result = { path: config };
        }
        return result;
    }
}
exports.FileWriterConfigAdapter = FileWriterConfigAdapter;
