/* eslint-disable */
import { Request } from './Request'
import { Response } from './Response'
import { Logger } from './Logger'

// const registerService = () => {
//   // new Resp()
//   const response = (global.response = new Response())
//   const request = (global.request = new Request())
//   const logger = (global.logger = new Logger().buildLogger())
// }

// exports.registerService = registerService
// registerService()

const init = () => {
  const logger = ((global as any).logger = new Logger().buildLogger())
  const request = ((global as any).request = new Request())
  const response = ((global as any).response = new Response())
}

// exports.registerService = registerService
init()
