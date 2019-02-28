import { Container } from 'inversify'
import { createTestContainer } from '../../../core/container'
import { HelloDomain } from '../domain'

describe('HelloDomain', () => {
  let helloDomain: HelloDomain
  let container: Container

  beforeEach(() => {
    container = createTestContainer()
    helloDomain = container.get(HelloDomain)
  })

  it('hello should return hello', () => {
    expect(helloDomain.hello()).toBe('HELLO')
  })
})
