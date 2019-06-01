
import { LinesToListConfig } from 'asteria-cronos';
import { AbstractAsteriaObject } from 'asteria-gaia';
import { HyperionConfigAdapter } from '../../../config/HyperionConfigAdapter';

/**
 * The <code>LinesToListConfigAdapter</code> class allows to convert <code>lines-to-csv</code> config objects.
 */
export class LinesToListConfigAdapter extends AbstractAsteriaObject implements HyperionConfigAdapter {

    /**
     * Create a new <code>LinesToListConfigAdapter</code> instance.
     */
    constructor() {
        super('com.asteria.hyperion.module.data.linestolist::LinesToListConfigAdapter');
    }

    /**
     * @inheritdoc
     */
    public convert(config: any): LinesToListConfig {
        return null;
    }
}
