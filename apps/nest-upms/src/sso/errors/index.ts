export class SsoError extends Error {
    constructor(public code: number, public message: string, public data: any) {
        super(message)
    }
}

export class SsoForbidError<T = any> extends SsoError {
    constructor(data?: T) {
        super(10004, '此账号被禁止使用', data)
    }
}

export class SsoPermissionDieError<T = any> extends SsoError {
    constructor(data?: T) {
        super(10005, '权限不足', data)
    }
}

export class SsoFrequenError<T = any> extends SsoError {
    constructor(data?: T) {
        super(10006, '操作太频繁了，请稍后重试', data)
    }
}

export class SsoScopeEmptyError<T = any> extends SsoError {
    constructor(data?: T) {
        super(10007, 'scope不能为空', data)
    }
}

export class SsoExpireError<T = any> extends SsoError {
    constructor(data?: T) {
        super(10008, '已过期,请重新登录', data)
    }
}