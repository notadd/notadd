export abstract class CoreLogger {
    abstract info(...args: any[]): void;
    abstract log(...args: any[]): void;
    abstract error(...args: any[]): void;
    abstract debug(...args: any[]): void;
    abstract warning(...args: any[]): void;
}

export class NullLoggerImpl extends CoreLogger {
    info(...args: any[]) { }
    log(...args: any[]) { }
    error(...args: any[]) { }
    debug(...args: any[]) { }
    warning(...args: any[]) { }
}
