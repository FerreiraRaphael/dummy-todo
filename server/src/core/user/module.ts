import { ContainerModule } from 'inversify'
import { getCustomRepository } from 'typeorm'
import { CreateModule } from '../container'
import { UserRepositoryStub } from './__test__/repository.stub'
import { UserDomain } from './domain'
import { UserRepository } from './repository'
import { UserService } from './service'

export const UserModule: CreateModule = ({ test }) =>
  new ContainerModule((bind) => {
    bind<UserService>(UserService).toSelf()
    bind<UserDomain>(UserDomain).toSelf()
    if (test) {
      bind<UserRepository>(UserRepository).to(UserRepositoryStub)
    } else {

      bind<UserRepository>(UserRepository).toConstantValue(getCustomRepository(UserRepository))
    }
  })
