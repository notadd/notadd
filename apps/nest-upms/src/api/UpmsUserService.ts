import { User } from "../models/db";

export abstract class UpmsUserService {
    abstract createUser(upmsUser: User): any;
}
