import * as bunyan from 'bunyan'
import * as config from "../config.json"

let logger

export function getLogger(){
  if (!logger) {
    init()
  }
  return logger
}

const streams = [
  {
    path: config.logger.file_name,
    level: config.logger.file_level,
  },
  {
    stream: process.stdout,
    level: config.logger.console_level,
  },
]

function init() {
  logger = bunyan.createLogger({
    name: config.logger.appname,
    src: true,
    streams,
  })
}
