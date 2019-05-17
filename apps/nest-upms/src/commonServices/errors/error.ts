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

export class ArticleTitleError<T = any> extends CoreError {
    constructor(data?: T) {
        super(11031, '文章标题已存在', data);
    }
}

export class ArticleNullError<T = any> extends CoreError {
    constructor(data?: T) {
        super(11032, '该文章不存在', data);
    }
}

export class ArticleCategoryMustDataError<T = any> extends CoreError {
    constructor(data?: T) {
        super(11035, '文章分类标题,英文名,描述不得为空', data);
    }
}

export class ArticleCategoryTitleError<T = any> extends CoreError {
    constructor(data?: T) {
        super(11036, '分类标题已存在', data);
    }
}

export class ArticleCategoryNullError<T = any> extends CoreError {
    constructor(data?: T) {
        super(11037, '该分类不存在', data);
    }
}