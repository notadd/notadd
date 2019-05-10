import { Token } from '../../src/services/token'

describe('token', () => {
    it('getToken', () => {
        const token = new Token().getToken();
        expect(token).toBe('token2')
    })
})

