import { UserController } from '../../src/user.controller';
import { PrismaService } from '../../src/prisma/prisma.service';

describe('User', () => {
    it('h', () => {
        const hello = new UserController(new PrismaService()).helloUpms();
        expect(hello).toBe('hello upms');
    })
})