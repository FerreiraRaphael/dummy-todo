import { UserRepository } from '../repository'

describe('UserRepository', () => {
  let repository: UserRepository

  beforeEach(() => {
    repository = new UserRepository()
  })

  it('works', () => {
    expect(repository).toBeDefined()
  })

  describe('findByEmail', () => {
    it('search user with given email', () => {
      const expectedEmail = 'test@test.com'
      repository.findOne = jest.fn()
      repository.findByEmail(expectedEmail)
      expect(repository.findOne).toBeCalledWith({ where: { email: expectedEmail } })
    })
  })
})
