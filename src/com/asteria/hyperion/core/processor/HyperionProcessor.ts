import { AsteriaSession, StreamProcess, AbstractAsteriaObject, AsteriaStream } from 'asteria-gaia';
import { Ouranos } from 'asteria-ouranos';
import { FileReaderProcess, CsvToListProcess, FilterProcess, ListToCsvProcess, FileWriterProcess, LinesToListProcess } from 'asteria-cronos';
import { HyperionConfigAdapter } from '../../config/HyperionConfigAdapter';
import { FileReaderConfigAdapter } from '../../module/file/readfile/FileReaderConfigAdapter';
import { FileWriterConfigAdapter } from '../../module/file/writefile/FileWriterConfigAdapter';
import { FilterConfigAdapter } from '../../module/data/filter/FilterConfigAdapter';
import { CsvToListConfigAdapter } from '../../module/data/csvtolist/CsvToListConfigAdapter';
import { ListToCsvConfigAdapter } from '../../module/data/listtocsv/ListToCsvConfigAdapter';
import { LinesToListConfigAdapter } from '../../module/data/linestolist/LinesToListConfigAdapter';

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
        super('com.asteria.hyperion.core.processor::HyperionProcessor');
        this.SESSION = session;
    }

    /**
     * Run all processes registered in this code>HyperionProcessor</code> instance and return the reference to the last
     * registered stream.
     */
    public run(): AsteriaStream {
        return this.SESSION.getContext().getProcessor().run();
    }

    public addProcess(process: StreamProcess): HyperionProcessor {
        this.SESSION.getContext().getProcessor().add(process);
        return this;
    }

    public readFile(path: string): HyperionProcessor {
        return this.initProcess(FileReaderProcess, FileReaderConfigAdapter, path);
    }

    public writeFile(path: string): HyperionProcessor {
        return this.initProcess(FileWriterProcess, FileWriterConfigAdapter, path);
    }

    public csvToList(config: any): HyperionProcessor {
        return this.initProcess(CsvToListProcess, CsvToListConfigAdapter, config);
    }

    public linesToList(config: any): HyperionProcessor {
        return this.initProcess(LinesToListProcess, LinesToListConfigAdapter, config);
    }
    
    public listToCsv(config: any): HyperionProcessor {
        return this.initProcess(ListToCsvProcess, ListToCsvConfigAdapter, config);
    }

    public filter(config: any): HyperionProcessor {
        return this.initProcess(FilterProcess, FilterConfigAdapter, config);
    }

    private initProcess(processClass: any, adapterClass: any, config: any): HyperionProcessor {
        const adapter: HyperionConfigAdapter = new adapterClass();
        const process: StreamProcess = Ouranos.buildProcess(processClass, adapter.convert(config));
        return this.addProcess(process);
    }
}
