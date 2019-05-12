export * from './error';
export * from './logger';

import { CoreLogger, NullLoggerImpl } from './logger'
export default [{
    provide: CoreLogger,
    useClass: NullLoggerImpl
}]
