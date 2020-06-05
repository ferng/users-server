import * as express from 'express'
import { UserRoutes } from './routes/user-routes'

import { Db } from './utils/db-connection'
import { Generator } from './utils/data-generator' 


abstract class App {
  static get port(): number { return 3000 }
  
  static init(): any {
    return App.start_server()
  }

  static start_server(): void {
    const server = express()
    
    //end points
    server.get('/users/*', UserRoutes.get_users)

    server.listen(App.port, () => { console.log('Listening on port ' + App.port) })
   
    const db = new Db('mongodb://localhost:27017')
    db.init()
    
    // comment this line out to prevent recreation of test data
//     Generator.users();
  }
}

App.init()
