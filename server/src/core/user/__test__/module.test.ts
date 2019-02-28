import { UserModule } from '../module'

describe('UserModule', () => {
  it('works', () => {
    expect(UserModule({ test: false })).toBeDefined()
    expect(UserModule({ test: true })).toBeDefined()
  })
})
