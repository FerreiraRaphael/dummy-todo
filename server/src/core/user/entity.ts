import { compare, genSalt, hash } from 'bcryptjs'
import {
  AfterLoad,
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity()
export class User {

  public static async hash(value: string) {
    const salt = await genSalt(10)
    const hashedValue = await hash(value, salt)
    return hashedValue
  }

  @PrimaryGeneratedColumn()
  public id: number

  @Column()
  public version: string

  @Column()
  public name: string

  @Column({
    unique: true,
  })
  public email: string

  @Column()
  public password: string

  private tempPassword: string

  @AfterLoad()
  public loadTempPassword() {
    this.tempPassword = this.password
  }

  @BeforeInsert()
  @BeforeUpdate()
  public async hashPassword() {
    if (this.tempPassword !== this.password) {
      const hashPassword = await User.hash(this.password)
      this.password = hashPassword
    }
  }

  public async comparePassword(password: string) {
    return compare(this.password, password)
  }
}
