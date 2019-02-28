import { Container } from 'inversify'
import { createTestContainer, CurrentUser } from '../../../core/container'
import { UserDomain } from '../domain'
import { UserRepository } from '../repository'
import { mockUser } from './user.mock'

describe('UserDomain', () => {
  let container: Container
  let userDomain: UserDomain
  let currentUser: CurrentUser
  let userRepository: UserRepository

  beforeEach(() => {
    container = createTestContainer()
    userDomain = container.get(UserDomain)
    userRepository = container.get(UserRepository)
    currentUser = container.get('CurrentUser')
  })

  describe('method me', () => {
    const mockedUser = mockUser()
    it('should return current user', async () => {
      jest.spyOn(currentUser, 'get').mockResolvedValue(Promise.resolve(mockedUser))
      const result = await userDomain.me()
      expect(result).toBe(mockedUser)
    })
  })

  describe('method users', () => {
    const mockedUser = mockUser()
    it('should return all users', async () => {
      jest.spyOn(userRepository, 'find').mockResolvedValue(Promise.resolve([mockedUser]))
      const result = await userDomain.users()
      expect(result).toEqual([mockedUser])
    })
  })
})
