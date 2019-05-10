import { User, Token } from "../models/model";

// 这个自定义
export abstract class AuthService {
    abstract createToken(user: User): Promise<Token>;
}