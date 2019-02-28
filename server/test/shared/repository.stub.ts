import { injectable } from 'inversify'

@injectable()
export class StubRepository {
  public createQueryBuilder: any = jest.fn()

  public readonly manager: any = jest.fn()

  public readonly metadata: any = jest.fn()

  public readonly queryRunner?: any = jest.fn()

  public readonly target: any = jest.fn()

  public hasId: any = jest.fn()

  public getId: any = jest.fn()

  public create: any = jest.fn()

  public merge: any = jest.fn()

  public preload: any = jest.fn()

  public save: any = jest.fn()

  public remove: any = jest.fn()

  public insert: any = jest.fn()

  public update: any = jest.fn()

  public delete: any = jest.fn()

  public count: any = jest.fn()

  public find: any = jest.fn()

  public findAndCount: any = jest.fn()

  public findByIds: any = jest.fn()

  public findOne: any = jest.fn()

  public findOneOrFail: any = jest.fn()

  public query: any = jest.fn()

  public clear: any = jest.fn()

  public increment: any = jest.fn()

  public decrement: any = jest.fn()
}
