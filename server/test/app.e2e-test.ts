import * as express from 'express'
import * as request from 'supertest'
import { Server } from '../src/main'

describe('AppController (e2e)', () => {
  let app: express.Application

  beforeAll(async () => {
    const server = await Server.create()
    app = server.getExpressApp()
  })

  it('/ (GET)', async (done) => {
    const response = await request(app)
      .post('/graphql')
      .set('Accept', 'application/json')
      .send({
        query: `
      {
        hello
      }
    `,
      })
      .expect('Content-Type', /json/)
      .expect(200)
    expect(response.body.data).toEqual({ hello: 'HELLO' })
    done()
  })
})
