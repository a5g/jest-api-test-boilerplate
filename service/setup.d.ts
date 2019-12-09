import { Request } from './Request'
import { Response } from './Response'
import { Logger } from 'winston'
// import { Logger } from 'log4js'

declare global {
  const request: Request
  const response: Response
  const logger: Logger
}
