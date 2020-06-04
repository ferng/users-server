import * as express from 'express'

import { Group } from './group'
import { User } from './user'


abstract class App {

  static get port(): number { return 3000 }

  static init(): any {

    return App.start_server()
  }

  static start_server(): void {
    const server = express()
    server.get('/users', App.get_users)
    server.listen(App.port, () => { console.log('Listening on port ' + App.port) })
  }

  static get_users(request: express.Request, response: express.Response) {
    let users: User[] = []
    let admin_group: Group[] = []
    let user_group: Group[] = []
    let group1: Group = new Group(1, 'admin')
    let group2: Group = new Group(2, 'helpdesk')
    admin_group.push(group1)
    admin_group.push(group2)
    user_group.push(group1)

    let user1: User = new User('Mr Peter Jones', admin_group)
    let user2: User = new User('Mr Adrian Dickens', user_group)
    users.push(user1)
    users.push(user2)

    response.json(users)
  }
}

App.init()
