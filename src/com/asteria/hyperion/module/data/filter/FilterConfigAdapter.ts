import { FilterConfig } from 'asteria-cronos';
import { AsqlParser, AsqlToken, FilterQueryAdapter, AsqlFilterDefinition } from 'asteria-japet';
import { AsteriaError, AsteriaErrorCode, AsteriaLogger, AbstractAsteriaObject, PrimitiveType } from 'asteria-gaia';
import { OuranosErrorBuilder, OuranosLogger } from 'asteria-ouranos';
import { HyperionConfigAdapter } from '../../../config/HyperionConfigAdapter';

// Static logger reference:
const LOGGER: AsteriaLogger = OuranosLogger.getLogger();

/**
 * The <code>FilterConfigAdapter</code> class allows to convert <code>filter</code> config objects.
 */
export class FilterConfigAdapter extends AbstractAsteriaObject implements HyperionConfigAdapter {

    /**
     * Create a new <code>FilterConfigAdapter</code> instance.
     */
    constructor() {
        super('com.asteria.hyperion.module.data.filter::FilterConfigAdapter');
    }

    /**
     * @inheritdoc
     */
    public convert(config: any): FilterConfig {
        let error: AsteriaError = null;
        let result: FilterConfig = null;
        if (!config) {
            error = OuranosErrorBuilder.getInstance().build(
                AsteriaErrorCode.MISSING_ASQL_QUERY,
                this.getClassName(),
                'filter query is missing'
            );
        } else if (typeof config !== PrimitiveType.STRING) {
            error = OuranosErrorBuilder.getInstance().build(
                AsteriaErrorCode.INVALID_ASQL_QUERY,
                this.getClassName(),
                'filter query must be of the type of \'string\''
            );
        } else {
            const parser: AsqlParser = new AsqlParser();
            const tokens: Array<AsqlToken> = parser.parse(config);
            const adapter: FilterQueryAdapter = new FilterQueryAdapter();
            const filterDef: AsqlFilterDefinition = adapter.adapt(tokens);
            result = {
                condition: filterDef.condition,
                filters: filterDef.filters
            };
        }
        if (error) {
            LOGGER.error(error.toString());
        }
        return result;
    }
}
