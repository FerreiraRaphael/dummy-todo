import { Container } from 'inversify'
import { UserDomain } from '../../../src/core/user/domain'
import { GraphqlContext } from '../context'

const userDomain = (container: Container) => container.get(UserDomain)

export const resolver = {
  Query: {
    users: (_, args, { container }: GraphqlContext) => userDomain(container).users(),
    me: (_, args, { container }: GraphqlContext) => userDomain(container).me(),
  },
}
