"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HyperionBaseProcessType_1 = require("./HyperionBaseProcessType");
class HyperionBaseProcessDef {
    static getProcessRef(type) {
        return HyperionBaseProcessDef.PROCESS_DEF.get(type);
    }
}
HyperionBaseProcessDef.PROCESS_DEF = new Map([
    [HyperionBaseProcessType_1.HyperionBaseProcessType.READ_FILE, 'readFile'],
    [HyperionBaseProcessType_1.HyperionBaseProcessType.WRITE_FILE, 'writeFile'],
    [HyperionBaseProcessType_1.HyperionBaseProcessType.CSV_TO_LIST, 'csvToList'],
    [HyperionBaseProcessType_1.HyperionBaseProcessType.LINES_TO_LIST, 'linesToList'],
    [HyperionBaseProcessType_1.HyperionBaseProcessType.LIST_TO_CSV, 'listToCsv'],
    [HyperionBaseProcessType_1.HyperionBaseProcessType.FILTER, 'filter']
]);
exports.HyperionBaseProcessDef = HyperionBaseProcessDef;
