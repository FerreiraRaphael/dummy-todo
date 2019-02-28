import { Container } from 'inversify'
import { createTestContainer } from '../../../../src/core/container'
import { UserRepository } from '../repository'
import { UserService } from '../service'
import { mockUser } from './user.mock'

describe('UserService', () => {
  let container: Container
  let service: UserService
  let userRepository: UserRepository

  beforeEach(() => {
    container = createTestContainer()
    service = container.get(UserService)
    userRepository = container.get(UserRepository)
  })

  describe('findUserBy', () => {
    it('return a user', async () => {
      const user = mockUser()
      const spy = jest.spyOn(userRepository, 'findOne')
      const where = { email: user.email }
      spy.mockReturnValue(Promise.resolve(user))
      const result = await service.findUserBy(where)
      expect(result).toBe(user)
      expect(spy).toBeCalledWith({ where })
    })
  })

  describe('getUsers', () => {
    it('return users', async () => {
      const user = mockUser()
      const spy = jest.spyOn(userRepository, 'find')
      spy.mockReturnValue(Promise.resolve([user]))
      const result = await service.getUsers()
      expect(result).toEqual([user])
    })
  })
})
