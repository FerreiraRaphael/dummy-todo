import * as express from 'express'
import { Container } from 'inversify'
import { AuthService } from '../../core/auth/service'
import { User } from '../../core/user/entity'
import { UserService } from '../../core/user/service'

export const calculateToken = (req: express.Request) => {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1]
  } else if (req.query && req.query.token) {
    return req.query.token
  }
  return ''
}

export function createCurrentUserFunction(
  req: express.Request,
  container: Container,
): () => Promise<User> {
  return () => (req.user ? container.get(UserService).findUserBy({ id: req.user.id }) : null)
}

export async function addEncodeJwtInRequest(req: express.Request, container: Container) {
  const token = calculateToken(req)
  const user = await container.get(AuthService).verify(token)
  req.user = user
  return req
}
