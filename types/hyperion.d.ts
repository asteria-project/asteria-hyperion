/*!
 * Asteria Hyperion Node Module
 * Copyright(c) 2019 Pascal ECHEMANN
 * Apache 2.0 Licensed
 * This is a part of the Asteria Project: <https://github.com/asteria-project>
 */

declare module "asteria-hyperion" {

import { AbstractAsteriaObject, StreamProcessConfig, AsteriaStream, AsteriaSession, AsteriaError, AsteriaContext } from "asteria-gaia";
import { CsvToListConfig, FilterConfig, LinesToListConfig, ListToCsvConfig, FileReaderConfig } from "asteria-cronos";
    
export interface HyperionConfig {    name: string;    processes: Array<HyperionProcessConfig>;}export interface HyperionConfigAdapter {    convert(config: any): StreamProcessConfig;}export interface HyperionProcessConfig {    type: HyperionBaseProcessType | string;    config: any;}export class Hyperion extends AbstractAsteriaObject {    private readonly CONFIG;    private readonly SESSION;    private readonly PROCESSOR;    private readonly REGISTRY;    private constructor();    static build(config: HyperionConfig): Hyperion;    run(): AsteriaStream;    stop(): void;    getContext(): AsteriaContext;    registerModule(hyperionModule: HyperionModule): void;    hasModule(id: string): boolean;    private initProcessor;    private initModuleRegistry;}export abstract class AbstractHyperionModule extends AbstractAsteriaObject implements HyperionModule {    private readonly ID;    private readonly PROCESS_CLASS;    private readonly ADAPTER_CLASS;    private readonly VALIDATOR_CLASS;    protected constructor(id: string, processClass: any, adapterClass: any, validatorClass: any, className: string);    getId(): string;    getValidator(): HyperionValidator;    buildStreamProcess(config: any): StreamProcess;}export interface HyperionModule {    getId(): string;    getValidator(): HyperionValidator;    buildStreamProcess(config: any): StreamProcess;}export class HyperionModuleRegistry extends AbstractAsteriaObject {    private readonly MODULES;    constructor();    add(module: HyperionModule): void;    get(id: string): HyperionModule;    has(id: string): boolean;}export class HyperionProcessor extends AbstractAsteriaObject {    private readonly SESSION;    constructor(session: AsteriaSession);    run(): AsteriaStream;    addProcess(process: StreamProcess): HyperionProcessor;    readFile(path: string): HyperionProcessor;    writeFile(path: string): HyperionProcessor;    csvToList(config: any): HyperionProcessor;    linesToList(config: any): HyperionProcessor;    listToCsv(config: any): HyperionProcessor;    filter(config: any): HyperionProcessor;    private initProcess;}export class CsvToListConfigAdapter extends AbstractAsteriaObject implements HyperionConfigAdapter {    constructor();    convert(config: any): CsvToListConfig;}export class CsvToListModule extends AbstractHyperionModule implements HyperionModule {    constructor();}export class CsvToListValidator extends AbstractHyperionValidator implements HyperionValidator {    constructor();    validate(config: HyperionProcessConfig, result: (err: AsteriaError) => void): void;}export class FilterConfigAdapter extends AbstractAsteriaObject implements HyperionConfigAdapter {    constructor();    convert(config: any): FilterConfig;}export class FilterModule extends AbstractHyperionModule implements HyperionModule {    constructor();}export class FilterValidator extends AbstractHyperionValidator implements HyperionValidator {    constructor();    validate(config: HyperionProcessConfig, result: (err: AsteriaError) => void): void;}export class LinesToListConfigAdapter extends AbstractAsteriaObject implements HyperionConfigAdapter {    constructor();    convert(config: any): LinesToListConfig;}export class LinesToListModule extends AbstractHyperionModule implements HyperionModule {    constructor();}export class LinesToListValidator extends AbstractHyperionValidator implements HyperionValidator {    constructor();    validate(config: HyperionProcessConfig, result: (err: AsteriaError) => void): void;}export class ListToCsvConfigAdapter extends AbstractAsteriaObject implements HyperionConfigAdapter {    constructor();    convert(config: any): ListToCsvConfig;}export class ListToCsvModule extends AbstractHyperionModule implements HyperionModule {    constructor();}export class ListToCsvValidator extends AbstractHyperionValidator implements HyperionValidator {    constructor();    validate(config: HyperionProcessConfig, result: (err: AsteriaError) => void): void;}export class FileReaderConfigAdapter extends AbstractAsteriaObject implements HyperionConfigAdapter {    constructor();    convert(config: any): FileReaderConfig;}export class ReadFileModule extends AbstractHyperionModule implements HyperionModule {    constructor();}export class ReadFileValidator extends AbstractHyperionValidator implements HyperionValidator {    constructor();    validate(config: HyperionProcessConfig, result: (err: AsteriaError) => void): void;}export class FileWriterConfigAdapter extends AbstractAsteriaObject implements HyperionConfigAdapter {    constructor();    convert(config: any): FileReaderConfig;}export class WriteFileModule extends AbstractHyperionModule implements HyperionModule {    constructor();}export class WriteFileValidator extends AbstractHyperionValidator implements HyperionValidator {    constructor();    validate(config: HyperionProcessConfig, result: (err: AsteriaError) => void): void;}export enum HyperionBaseProcessType {    READ_FILE = "read-file",    WRITE_FILE = "write-file",    CSV_TO_LIST = "csv-to-list",    LINES_TO_LIST = "lines-to-list",    LIST_TO_CSV = "list-to-csv",    FILTER = "filter"}export enum HyperionCastRef {    STRING = "string",    NUMBER = "number",    BOOLEAN = "boolean"}export abstract class AbstractHyperionValidator extends AbstractAsteriaObject implements HyperionValidator {    constructor(className: string);    abstract validate(config: HyperionProcessConfig, result: (err: AsteriaError) => void): void;}export interface HyperionValidator {    validate(config: HyperionProcessConfig, result: (err: AsteriaError) => void): void;}}