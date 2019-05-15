import { INestApplication } from "@nestjs/common";
import { MemberService } from "../../../../src/commonServices/core";
import { Test } from "@nestjs/testing";
import { ApplicationModule } from "../../../../src";
import { MemberEntity } from "../../../../src/typeorm/entities/member.entity";
import { MemberDataNullError, MemberUserIsNullError, PhoneFormtError, EmailFormtError, MemberUserNameExistError } from "../../../../src/commonServices/errors/member.error";

describe('MemberServiceImpl', () => {
    let app: INestApplication;
    let memberService: MemberService;
    beforeAll(async () => {
        const module = await Test.createTestingModule({
            imports: [ApplicationModule]
        }).compile();
        app = module.createNestApplication();
        memberService = app.get(MemberService);
        await app.init();

    });
    it(`insert`, async () => {
        /** 新增用户 */
        const member = new MemberEntity;
        member.realname = '钢铁侠';
        member.phone = '13525524301';
        member.email = '250148240@qq.com';
        member.username = '猪猪侠';
        member.password = '132323';
        member.salt = '545';
        member.name = '蜘蛛侠'
        await memberService.insert(member).then((result) => {
            expect(result.realname).toEqual('钢铁侠');
        }).catch(e => {
            expect(e instanceof Error).toEqual(true);
        });
    });
    /** 删除用户 */
    it(`delete`, async () => {
        const member = new MemberEntity;
        member.realname = '灭霸';
        member.phone = '18501351287';
        member.email = 'm18501351287@qq.com';
        member.username = '光头强';
        member.password = '132323';
        member.salt = '545';
        member.name = 'test name'
        let res = await memberService.insert(member)
        await memberService.delete({ member_id: res.member_id }).then(res => {
            expect(res.affected).toEqual(1)
        }).catch(e => { });
    });
    /**
     * 更新会员信息
     */
    it(`save`, async () => {
        let member: MemberEntity = new MemberEntity();
        member.name = 'wzry';
        member.realname = '灭霸1';
        member.phone = '18501351287';
        member.email = 'm18501351287@qq.com';
        member.username = '光头强';
        member.password = '132323';
        member.salt = '545';
        member.name = 'test name'
        //从数据库获取一个应用
        memberService.save(member, { realname: '钢铁侠' }).then(res => {
            expect(res.realname).toBe('钢铁侠');
        }).catch(e => {
            expect(e instanceof MemberUserIsNullError).toBe(true)
        });
    });

    /** 获取用户 */
    it(`get`, async () => {
        memberService.get({ username: '猪猪侠' }).then(res => {
            expect(res.username).toEqual('猪猪侠')
        }).catch(e => { })
    });

    /** 新增用户,校验必填信息异常 */
    it(`insert.throw.MemberDataIsNullError`, async () => {
        let member = GetMember('超人', '18501351287', '@250148240@qq.com')
        memberService.insert(member).then(res => {
            expect(res.phone).toEqual('1588776655');
        }).catch(e => {
            expect(e instanceof MemberDataNullError).toBeTruthy();
        });
    });

    /** 新增用户,校验手机格式异常 */
    it(`insert.throw.PhoneFormtError`, async () => {
        let member = GetMember('超人', '13525524301', '250148240@qq.com');
        memberService.insert(member).then(res => {
            expect(res.phone).toEqual('13525524301');
        }).catch(e => {
            expect(e instanceof PhoneFormtError).toBeTruthy();
        });
     });


    /** 新增用户,校验邮箱格式异常 */
    it(`insert.throw.EmailFormtError`, async () => {
        let member = GetMember('猪猪侠', '13525524301', '250148240qq.@com');
        memberService.insert(member).then(res => {
            expect(res.email).toEqual('250148240@qq.com');
        }).catch(e => {
            expect(e instanceof EmailFormtError).toBeTruthy();
        });
    });

    /** 新增用户,校验用户名已存在异常 */
    it(`insert.throw.MemberUserNameExistError`, async () => {
        let member = GetMember('猪猪大', '13525524301', '250148240@qq.com');
        memberService.insert(member).then(res => {
            expect(res.email).toEqual('250148240@qq.com');
        }).catch(e => {
            expect(e instanceof MemberUserNameExistError).toBeTruthy();
        });
    });

    /** 新增用户,校验电话已存在异常 */
    it(`insert.throw.PhoneExistError`, async () => {
        let member = GetMember('爱丽丝', '13525524301', '250148240@qq.com');
        memberService.insert(member).then(res => {
            expect(res.phone).toEqual('135255243012');
        }).catch(e => {
            expect(e instanceof PhoneFormtError).toBeTruthy();
        });
    });

    /** 新增用户,校验邮箱已存在异常 */
    it(`insert.throw.EmailFormtError`, async () => {
        let member = GetMember('爱丽丝', '13525524301', '250148240@qq.com');
        memberService.insert(member).then(res => {
            expect(res.email).toEqual('250148240@qq.com');
        }).catch(e => {
            expect(e instanceof EmailFormtError).toEqual(true);
        });
    });

    /** 更新用户 */
    it(`save.throw.MemberUserIsNullError`, async () => {
        let member = new MemberEntity();
        memberService.insert(member).then(res => {
        memberService.save(member, { username: '啊啊啊' }).then((res) => {
            expect(res.username).toEqual('啊啊啊');
        }).catch(e => {
            expect(e instanceof MemberUserIsNullError).toBe(true);
        });
    });
    });
    afterAll(async () => {
        await app.close();
    });

});
export function GetMember(username: string, phone: string, email: string): MemberEntity {
    let member = new MemberEntity();
    member.username = username;
    member.password = '123456';
    member.phone = phone;
    member.email = email;
    member.name = '蜘蛛侠';
    member.realname = '钢铁侠';
    member.phone = '13525524301';
    member.email = '250148240@qq.com';
    member.username = '猪猪侠';
    member.password = '132323';
    member.salt = '545';
    member.name = '蜘蛛侠'
    return member;
}

