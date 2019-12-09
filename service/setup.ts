import { Request } from './Request'
import { Response } from './Response'
import { Logger } from './Logger'

const registerService = () => {
  // new Resp()
  const response = (global.response = new Response())
  const request = (global.request = new Request())
  const logger = (global.logger = new Logger().buildLogger())
}

exports.registerService = registerService
registerService()
