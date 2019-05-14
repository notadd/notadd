import { CoreError } from '../../core';

export class BaseError extends CoreError {
    constructor(public code: number, public message: string, public data: any) {
        super(code, message, data);
    }
}

export class ArticleMustDataError<T = any> extends CoreError {
    constructor(data?: T) {
        super(11030, '文章标题,类型,描述不得为空', data);
    }
}

export class ArticleNameError<T = any> extends CoreError {
    constructor(data?: T) {
        super(11031, '文章标题已存在', data);
    }
}