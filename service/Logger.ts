// using winston
import { createLogger, format, transports } from 'winston'

const { combine, timestamp, label, printf } = format

const myFormat = printf(({ level, message, timestamp: ts }) => {
  return `${ts} [${level.toUpperCase()}] ${message}`
})

export class Logger {
  // constructor() {}
  public buildLogger() {
    return createLogger({
      format: combine(label({ label: 'test' }), timestamp(), myFormat),
      transports: [
        //
        // - Write to all logs with level `info` and below to `combined.log`
        // - Write all logs error (and below) to `error.log`.
        //
        new transports.File({ filename: 'logs/errors.log', level: 'error' }),
        new transports.File({ filename: 'logs/info.log' }),
        new transports.Console({ level: 'error' }),
      ],
    })
  }
}

// // using log4js
// import { configure, getLogger } from 'log4js'

// export class Logger {
//   constructor() {}

//   buildLogger() {
//     const logging = {
//       appenders: {
//         access: {
//           type: 'dateFile',
//           filename: 'logs/access.log',
//           pattern: '-yyyy-MM-dd',
//         },
//         info: {
//           type: 'file',
//           filename: 'logs/info.log',
//           maxLogSize: 10485760,
//           numBackups: 3,
//         },
//         errorFile: { type: 'file', filename: 'logs/errors.log' },
//         errors: {
//           type: 'logLevelFilter',
//           level: 'error',
//           appender: 'errorFile',
//         },
//         console: { type: 'stdout' },
//       },
//       categories: {
//         // temp: { appenders: ['console'], level: 'info' },
//         default: { appenders: ['info', 'errors'], level: 'info' },
//         http: { appenders: ['access'], level: 'info' },
//       },
//     }

//     configure(logging)

//     return getLogger()
//   }
// }
