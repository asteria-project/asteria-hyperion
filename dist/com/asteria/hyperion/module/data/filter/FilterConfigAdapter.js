"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asteria_japet_1 = require("asteria-japet");
const asteria_gaia_1 = require("asteria-gaia");
const asteria_ouranos_1 = require("asteria-ouranos");
const LOGGER = asteria_ouranos_1.OuranosLogger.getLogger();
class FilterConfigAdapter extends asteria_gaia_1.AbstractAsteriaObject {
    constructor() {
        super('com.asteria.hyperion.module.data.filter:FilterConfigAdapter');
    }
    convert(config) {
        let error = null;
        let result = null;
        if (!config) {
            error = asteria_ouranos_1.OuranosErrorBuilder.getInstance().build(asteria_gaia_1.AsteriaErrorCode.MISSING_ASQL_QUERY, this.getClassName(), 'filter query is missing');
            LOGGER.error(error.toString());
        }
        else if (typeof config !== asteria_gaia_1.PrimitiveType.STRING) {
            error = asteria_ouranos_1.OuranosErrorBuilder.getInstance().build(asteria_gaia_1.AsteriaErrorCode.INVALID_ASQL_QUERY, this.getClassName(), 'filter query must be of the type of \'string\'');
        }
        else {
            const parser = new asteria_japet_1.AsqlParser();
            const tokens = parser.parse(config);
            const adapter = new asteria_japet_1.FilterQueryAdapter();
            const filterDef = adapter.adapt(tokens);
            result = {
                condition: filterDef.condition,
                filters: filterDef.filters
            };
        }
        return result;
    }
}
exports.FilterConfigAdapter = FilterConfigAdapter;