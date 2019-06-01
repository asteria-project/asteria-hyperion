import { CsvToListConfig, CsvColumnMapper } from 'asteria-cronos';
import { AbstractAsteriaObject } from 'asteria-gaia';
import { HyperionConfigAdapter } from '../../../config/HyperionConfigAdapter';

/**
 * The <code>CsvToListConfigAdapter</code> class allows to convert <code>cvs-to-list</code> config objects.
 */
export class CsvToListConfigAdapter extends AbstractAsteriaObject implements HyperionConfigAdapter {

    /**
     * Create a new <code>CsvToListConfigAdapter</code> instance.
     */
    constructor() {
        super('com.asteria.hyperion.module.data.csvtolist::CsvToListConfigAdapter');
    }

    /**
     * @inheritdoc
     */
    public convert(config: any): CsvToListConfig {
        const colsMap: any[] = config.colsMap;
        let result: CsvToListConfig = {};
        if (config.separator) {
            result.separator = config.separator;
        }
        if (colsMap) {
            const colsMapping: Array<CsvColumnMapper> = new Array<CsvColumnMapper>();
            colsMap.forEach((value: any)=> {
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
