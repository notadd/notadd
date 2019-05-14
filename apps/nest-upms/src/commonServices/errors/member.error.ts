import { CoreError } from '../../core';

export class BaseError extends CoreError {
    constructor(public code: number, public message: string, public data: any) {
        super(code, message, data);
    }
}

export class DataError<T = any> extends CoreError {
    constructor(data?: T) {
        super(12009, '数据不能为空', data);
    }
}

export class MemberUserNameExistError<T = any> extends CoreError {
    constructor(data?: T) {
        super(12010, '用户名已存在', data);
    }
}

export class MemberUserIsNullError<T = any> extends CoreError {
    constructor(data?: T) {
        super(12011, '此用户不存在', data);
    }
}

export class EmailExistError<T = any> extends CoreError {
    constructor(data?: T) {
        super(12012, '邮箱已存在', data);
    }
}

export class EmailFormtError<T = any> extends CoreError {
    constructor(data?: T) {
        super(12013, '邮箱格式错误', data);
    }
}

export class PhoneExistError<T = any> extends CoreError {
    constructor(data?: T) {
        super(12014, '手机号码已存在', data);
    }
}

export class PhoneFormtError<T = any> extends CoreError {
    constructor(data?: T) {
        super(12015, '手机号码格式错误', data);
    }
}

