import * as crypto from 'crypto'
import { Group } from './group'

export class User {
  public user_id: string
  public name: string
  public groups: Group[]

  constructor(name: string, groups: Group[]) {
    this.user_id = User.new_id()
    this.name = name
    this.groups = groups
  }

  public static new_id(): string {
    return crypto.randomBytes(12).toString('hex')
  }
}
