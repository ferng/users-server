import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as mongoose from "mongoose"
import { router } from './routes/user-routes'

import { Db } from './utils/db-connection'
import { Generator } from './utils/data-generator' 


abstract class App {
  static init(): any {
    return App.start_server()
  }

  static requestHandler(req: express.Request, res: express.Response, next: Function) {
    console.log('Inbound request:', req.method, req.originalUrl);
    //     res.setHeader('Access-Control-Allow-Origin', config.app.base_url);
    //   res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST,PUT');
    res.setHeader('Cache-Control', 'no-cache');
    next();
  }

  static start_server(): void {
    const server = express()

    server.set('port', 3000);
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended:  false }));
    server.use(App.requestHandler);
    server.use(`/users`, router);
    server.listen(server.get('port'));

    const db = new Db('mongodb://localhost:27017')
    db.init()

    // mongoose debugging
    mongoose.set('debug', true)

    // comment this line out to prevent recreation of test data
    //     Generator.users();
  }
}

App.init()
