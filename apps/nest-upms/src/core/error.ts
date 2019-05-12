export abstract class CoreError extends Error {
    constructor(public code: number, public message: string, public data: any) {
        super(message)
    }
}

