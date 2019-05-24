import { prisma , UserEntityCreateInput, UserEntityNullablePromise, UserEntityPromise, UserEntityUpdateInput, UserEntityWhereUniqueInput } from '../../prisma/index';
import { UserEntity } from '../../typeorm/entities/addon/user.entity';
import { EmailFormtError, PhoneFormtError, UserIsNullError, UserMustDataNullError } from '../errors/error';

export class UserServiceImpl {

    /**
     *@param user added user information
     */
    insert(user: UserEntityCreateInput) {
        if (!user.username || !user.password || !user.phone) {
            throw new UserMustDataNullError();
        }
        //Verify the mailbox
        let EmailRegExp = /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/;
        if (!EmailRegExp.test(user.email)) {
            throw new EmailFormtError();
        }
        //Verify the phone 
        let phoneRegExp = /^[1][3-9][0-9]{9}$/;
        if (!phoneRegExp.test(user.phone)) {
            throw new PhoneFormtError();
        }
        // if (await this.userRepo.findOne({ where: { username: user.username } })) {
        //     throw new UserNameExistError();
        // }
        // if (await this.userRepo.findOne({ where: { phone: user.phone } })) {
        //     throw new PhoneExistError();
        // }
        // if (await this.userRepo.findOne({ where: { email: user.email } })) {
        //     throw new EmailExistError();
        // }
        /**
          *TODO encrypted password
          *
          */
        //Add alliance id and open id
        return  prisma.createUserEntity(user);
    }

    // /**
    //   *@param user Deleted user information
    //   */
    // delete(user: UserEntityWhereUniqueInput): UserEntityPromise {
    //     return prisma.deleteUserEntity(user);
    // }


    // /**
    //  *@param user Update user information
    //  *@param where query the condition of the user
    //  */
    // save(args: { data: UserEntityUpdateInput, where: UserEntityWhereUniqueInput }): UserEntityPromise {
    //     let exist = this.get(args.where);
    //     if (!exist) {
    //         throw new UserIsNullError();
    //     }
    //     // if (user.username) { exist.username = user.username }
    //     // if (user.password) {
    //     //     // 加密 exist.password = user.password; 
    //     // }
    //     // if (user.phone) { exist.phone = user.phone }
    //     // if (user.email) { exist.email = user.email }
    //     // if (user.sex) { exist.sex = user.sex }
    //     return this.prisma.updateUserEntity(args);
    // }


    /**
     *Get a single User
     *@param where the conditions of the query
     */
    get(where: UserEntityWhereUniqueInput): UserEntityNullablePromise {
        return prisma.userEntity(where);
    }


    search(where: Partial<UserEntity>): Promise<void> {
        throw new Error("Method not implemented.");
    }
}