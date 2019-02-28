import { injectable } from 'inversify'
import { EntityRepository, Repository } from 'typeorm'
import { User } from './entity'

@injectable()
@EntityRepository(User)
export class UserRepository extends Repository<User> {
  public findByEmail(email: string): Promise<User> {
    return this.findOne({ where: { email } })
  }
}
