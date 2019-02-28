import { inject, injectable } from 'inversify'
import { FindConditions } from 'typeorm'
import { User } from './entity'
import { UserRepository } from './repository'

@injectable()
export class UserService {
  @inject(UserRepository)
  private userRepository: UserRepository

  public findUserBy(where: FindConditions<User>) {
    return this.userRepository.findOne({ where })
  }

  public getUsers() {
    return this.userRepository.find()
  }
}
