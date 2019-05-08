import { User } from "../models/db";

export abstract class UpmsUserRoleService {
    abstract createUser(upmsUser: User): any;
}
