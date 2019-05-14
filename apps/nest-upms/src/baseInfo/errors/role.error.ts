import { CoreError } from '../../core';

export class RoleError extends CoreError {
    constructor(public code: number, public message: string, public data: any) {
        super(code, message, data)
    }
}

export class ServerError<T = any> extends CoreError {
    constructor(data?: T) {
        super(12500, '服务器错误', data)
    }
}
export class DataError<T = any> extends CoreError {
    constructor(data?: T) {
        super(12001, '数据传入有误', data)
    }
}
export class RoleExistError<T = any> extends CoreError {
    constructor(data?: T) {
        super(12002, '此角色已存在', data)
    }
}
export class RoleNoExistError<T = any> extends CoreError {
    constructor(data?: T) {
        super(12003, '此角色不存在', data)
    }
}

export class OrganizationExistError<T = any> extends CoreError {
    constructor(data?: T) {
        super(12004, '此组织已存在', data)
    }
}
export class OrganizationNoExistError<T = any> extends CoreError {
    constructor(data?: T) {
        super(12005, '此组织不存在', data)
    }
}
export class ipNullExistError<T = any> extends CoreError {
    constructor(data?: T) {
        super(12006, 'ip不存在', data)
    }
}
export class UserNoExistError<T = any> extends CoreError {
    constructor(data?: T) {
        super(12007, '用户不存在', data)
    }
}
export class loggerNoExistError<T = any> extends CoreError {
    constructor(data?: T) {
        super(12007, '日志不存在', data)
    }
}
