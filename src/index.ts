import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as mongoose from "mongoose"

import * as config from "./config.json"
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
    const port = config.app.port
    const path = config.app.url_path
    const db_url = config.db.url
    const mongoose_debug = config.db.mongoose_debug
    const test_data = config.app.test_data

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended:  false }));
    server.use(App.requestHandler);
    server.use(`/${path}`, router);
    server.listen(port);

    const db = new Db(db_url)
    db.init()

    mongoose.set('debug', mongoose_debug)

    if (test_data) {
      Generator.users();
    }
  }
}

App.init()
