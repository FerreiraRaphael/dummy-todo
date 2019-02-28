import { Container, ContainerModule } from 'inversify'
import { currentUser as currentUserStub } from '../../test/shared/currentUser.stub'
import { AuthModule } from './auth/module'
import { HelloModule } from './hello/module'
import { User } from './user/entity'
import { UserModule } from './user/module'

export interface CurrentUser {
  get: () => Promise<User>
}

export function bindCurrentUser(
  container: Container,
  getCurrentUser: { get: () => Promise<User> },
) {
  const containerChild = container.createChild()
  containerChild.isBound('CurrentUser')
    ? containerChild.rebind<CurrentUser>('CurrentUser').toConstantValue(getCurrentUser)
    : containerChild.bind<CurrentUser>('CurrentUser').toConstantValue(getCurrentUser)
  return containerChild
}

interface ICreateContainerInput {
  secret: string
  test?: boolean
}

export type CreateModule = (input: { test: boolean }) => ContainerModule

export function createContainer({ secret, test = false }: ICreateContainerInput) {
  const container = new Container({ defaultScope: 'Singleton' })

  container.load(HelloModule, UserModule({ test }), AuthModule)

  container.bind<string>('JwtSecret').toConstantValue(secret)

  return container
}

export function createTestContainer() {
  const ioc = createContainer({ test: true, secret: 'testing' })
  return bindCurrentUser(ioc, currentUserStub)
}
