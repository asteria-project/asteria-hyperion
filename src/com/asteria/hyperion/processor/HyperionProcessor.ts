import { AsteriaSession, StreamProcess, AbstractAsteriaObject, AsteriaStream } from 'asteria-gaia';
import { Ouranos } from 'asteria-ouranos';
import { FileReaderProcess, CsvToListProcess, FilterProcess, ListToCsvProcess, FileWriterProcess, LinesToListProcess } from 'asteria-cronos';
import { HyperionConfigAdapter } from '../config/HyperionConfigAdapter';
import { FileReaderConfigAdapter } from '../config/adapter/file/FileReaderConfigAdapter';
import { CsvToListConfigAdapter } from '../config/adapter/data/CsvToListConfigAdapter';
import { FilterConfigAdapter } from '../config/adapter/data/FilterConfigAdapter';
import { ListToCsvConfigAdapter } from '../config/adapter/data/ListToCsvConfigAdapter';
import { FileWriterConfigAdapter } from '../config/adapter/file/FileWriterConfigAdapter';
import { LinesToToListConfigAdapter } from '../config/adapter/data/LinesToToListConfigAdapter';

/**
 * The <code>HyperionProcessor</code> class is the core processor of the Hyperion framework.
 */
export class HyperionProcessor extends AbstractAsteriaObject {

    /**
     * The reference to the Asteria session used by this processor to run Asteria modules.
     */
    private readonly SESSION: AsteriaSession = null;

    /**
     * Create a new <code>HyperionProcessor</code> instance.
     * 
     * @param {AsteriaSession} session the Asteria session used by this processor to run Asteria stream processes.
     */
    public constructor(session: AsteriaSession) {
        super('com.asteria.hyperion.processor::HyperionProcessor');
        this.SESSION = session;
    }

    /**
     * Run all processes registered in this code>HyperionProcessor</code> instance and return the reference to the last
     * registered stream.
     */
    public run(): AsteriaStream {
        return this.SESSION.getContext().getProcessor().run();
    }

    public readFile(path: string): HyperionProcessor {
        this.addProcess(FileReaderProcess, FileReaderConfigAdapter, path);
        return this;
    }

    public writeFile(path: string): HyperionProcessor {
        this.addProcess(FileWriterProcess, FileWriterConfigAdapter, path);
        return this;
    }

    public csvToList(config: any): HyperionProcessor {
        this.addProcess(CsvToListProcess, CsvToListConfigAdapter, config);
        return this;
    }

    public linesToList(config: any): HyperionProcessor {
        this.addProcess(LinesToListProcess, LinesToToListConfigAdapter, config);
        return this;
    }
    
    public listToCsv(config: any): HyperionProcessor {
        this.addProcess(ListToCsvProcess, ListToCsvConfigAdapter, config);
        return this;
    }

    public filter(config: any): HyperionProcessor {
        this.addProcess(FilterProcess, FilterConfigAdapter, config);
        return this;
    }

    private addProcess(processClass: any, adapterClass: any, config: any): void {
        const adapter: HyperionConfigAdapter = new adapterClass();
        const process: StreamProcess = Ouranos.buildProcess(processClass, adapter.convert(config));
        this.SESSION.getContext().getProcessor().add(process);
    }
}
