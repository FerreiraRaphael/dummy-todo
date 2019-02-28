import { User } from '../entity'

describe('UserEntity', () => {
  let entity: User

  beforeEach(() => {
    entity = new User()
  })

  it('works', () => {
    expect(entity).toBeDefined()
  })

  it('hash password', async () => {
    const password = 'password'
    entity.password = password
    await entity.hashPassword()
    expect(entity.password).not.toBe(password)
  })

  it('compare the password', async () => {
    const password = 'password'
    entity.password = password
    await entity.hashPassword()
    expect(entity.comparePassword(password)).toBeTruthy()
  })
})
