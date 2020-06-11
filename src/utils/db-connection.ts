import * as mongoose from 'mongoose'

export class Db {
  url: string

  constructor(url: string) {
    this.url = url
  }

  public init() {
    mongoose.connect(this.url, {useNewUrlParser: true, useUnifiedTopology: true})
    const db = mongoose.connection
    db.on('error', console.error.bind(console, 'bad'))
    db.once('open', function() {
      console.debug.bind(console, 'good')
    })
  }

  public disconnect() {
    mongoose.disconnect()
  }
}
