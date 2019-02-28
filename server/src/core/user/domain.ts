import { inject, injectable } from 'inversify'
import { CurrentUser } from '../container'
import { UserService } from './service'

@injectable()
export class UserDomain {
  @inject(UserService)
  private userService: UserService
  @inject('CurrentUser')
  private currentUser: CurrentUser

  public me() {
    return this.currentUser.get()
  }

  public users() {
    return this.userService.getUsers()
  }
}
