import { Request } from 'express'
import { makeExecutableSchema } from 'graphql-tools'
import { Container } from 'inversify'
import * as glue from 'schemaglue'
import { bindCurrentUser } from 'src/core/container'
import { schemaDirectives } from 'src/core/directives'
import { createCurrentUserFunction } from './express'

export async function createSchema() {
  const { schema, resolver } = glue('src/graphql', { mode: 'ts' })
  return makeExecutableSchema({
    typeDefs: schema,
    resolvers: resolver,
    schemaDirectives,
  })
}

export function createContext(req: Request, container: Container) {
  return {
    container: bindCurrentUser(container, createCurrentUserFunction(req, container)),
  }
}
