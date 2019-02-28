import { User } from '../entity'

const defaultData = {
  id: 1,
  email: 'test@mail.com',
  name: 'testing-user',
  password: 'password',
  version: '1',
}

export function mockUser(override: Partial<User> = {}): User {
  const user = new User()
  Object.keys(defaultData).forEach((key) => {
    user[key] = override[key] || defaultData[key] || user[key]
  })
  return user
}
