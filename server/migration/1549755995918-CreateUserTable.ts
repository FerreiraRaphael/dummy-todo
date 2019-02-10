import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateUserTable1549755995918 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
      create table "user"
      (
        id       serial  not null primary key,
        version  varchar not null,
        name     varchar not null,
        email    varchar not null unique,
        password varchar not null
      );
    `)
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
      drop table "user";
    `)
  }
}
