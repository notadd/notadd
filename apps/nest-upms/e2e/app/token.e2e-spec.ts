import {TokenDemo} from '../../src/services/token'

describe('Token', () => {
    it('getToken',()=>{
        const token = new TokenDemo().getToken({uid: ''})
        expect(token.length).toBe(5)
    })
})