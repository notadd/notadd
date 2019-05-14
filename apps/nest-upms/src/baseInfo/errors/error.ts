import { CoreError } from '../../core';

export class BaseError extends CoreError {
    constructor(public code: number, public message: string, public data: any) {
        super(code, message, data);
    }
}

export class DataError<T = any> extends CoreError {
    constructor(data?: T) {
        super(11001, '数据不能为空', data);
    }
}

export class UserNameExistError<T = any> extends CoreError {
    constructor(data?: T) {
        super(11002, '用户名已存在', data);
    }
}

export class UserIsNullError<T = any> extends CoreError {
    constructor(data?: T) {
        super(11003, '此用户不存在', data);
    }
}

export class EmailExistError<T = any> extends CoreError {
    constructor(data?: T) {
        super(11004, '邮箱已存在', data);
    }
}

export class EmailFormtError<T = any> extends CoreError {
    constructor(data?: T) {
        super(11005, '邮箱格式错误', data);
    }
}

export class PhoneExistError<T = any> extends CoreError {
    constructor(data?: T) {
        super(11006, '手机号码已存在', data);
    }
}

export class PhoneFormtError<T = any> extends CoreError {
    constructor(data?: T) {
        super(11007, '手机号码格式错误', data);
    }
}

export class PermissionIsNullError<T = any> extends CoreError {
    constructor(data?: T) {
        super(11008, '此权限不存在', data);
    }
}

export class AddonIsNullError<T = any> extends CoreError {
    constructor(data?: T) {
        super(11009, '此应用不存在', data);
    }
}

export class AddonNameError<T = any> extends CoreError {
    constructor(data?: T) {
        super(11010, '应用名已存在', data);
    }
}
