
import { LinesToListConfig } from 'asteria-cronos';
import { HyperionConfigAdapter } from '../../HyperionConfigAdapter';
import { AbstractAsteriaObject } from 'asteria-gaia';

/**
 * The <code>LinesToToListConfigAdapter</code> class allows to convert <code>lines-to-csv</code> config objects.
 */
export class LinesToToListConfigAdapter extends AbstractAsteriaObject implements HyperionConfigAdapter {

    /**
     * Create a new <code>LinesToToListConfigAdapter</code> instance.
     */
    constructor() {
        super('com.asteria.hyperion.config.adapter.data::LinesToToListConfigAdapter');
    }

    /**
     * @inheritdoc
     */
    public convert(config: any): LinesToListConfig {
        return null;
    }
}
