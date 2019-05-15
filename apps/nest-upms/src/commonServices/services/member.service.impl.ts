import { MemberService } from '../core/member.service';
import { InjectRepository } from '@nestjs/typeorm';
import { MemberEntity } from '../../typeorm/entities/member.entity';
import { Repository } from 'typeorm';
import { DataError, PhoneFormtError, EmailFormtError, MemberUserNameExistError, PhoneExistError, EmailExistError, MemberUserIsNullError } from '../errors/member.error';

export class MemberServiceImpl extends MemberService {
    constructor(
        @InjectRepository(MemberEntity) public readonly memberRepo: Repository<MemberEntity>
    ) { super() }

    /**
     * 添加会员表
     * @param member 
     */
    async insert(member: MemberEntity): Promise<MemberEntity> {
        if (!(member.username || member.password || member.phone || member.email)) {
            throw new DataError();
        }

        // 验证手机
        let phoneRegExp = /^[1][3-9][0-9]{9}$/;
        if (!phoneRegExp.test(member.phone)) {
            throw new PhoneFormtError();
        }
        // 验证邮箱
        let EmailRegExp = /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/;

        if (!EmailRegExp.test(member.email)) {
            throw new EmailFormtError();
        }
        if (await this.memberRepo.findOne({ where: { username: member.username } })) {
            throw new MemberUserNameExistError();
        }
        if (await this.memberRepo.findOne({ where: { phone: member.phone } })) {
            throw new PhoneExistError();
        }
        if (await this.memberRepo.findOne({ where: { email: member.email } })) {
            throw new EmailExistError();
        }
        return await this.memberRepo.save(this.memberRepo.create(member));
    }
    /**
     * 删除会员
     * @param member 
     */
    async delete(member: Partial<MemberEntity>) {

        if (!member.member_id) {
            throw new DataError();
        }

        let exist = await this.memberRepo.findOne({ where: { member_id: member.member_id } });
        if (!exist) {

            throw new MemberUserIsNullError();
        }
        return await this.memberRepo.delete({ member_id: member.member_id });
    }


    get(where: Partial<MemberEntity>): Promise<MemberEntity> {
        throw new Error("Method not implemented.");
    }

    save(data: MemberEntity, where: Partial<MemberEntity>): Promise<MemberEntity> {
        throw new Error("Method not implemented.");
    }


    search(where: Partial<MemberEntity>): Promise<void> {
        throw new Error("Method not implemented.");
    }




}