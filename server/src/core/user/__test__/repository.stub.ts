import { injectable } from 'inversify'
import { StubRepository } from '../../../../test/shared/repository.stub'

@injectable()
export class UserRepositoryStub extends StubRepository {
  public findByEmail: any = jest.fn()
}
