import * as crypto from 'crypto'

export class IdUtils {

  public static new_id(): string {
    return crypto.randomBytes(12).toString('hex')
  }

}

