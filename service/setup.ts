/* eslint-disable */
import { Request } from './Request'
import { Response } from './Response'
import { Logger } from './Logger'

const init = () => {
  const logger = ((global as any).logger = new Logger().buildLogger())
  const request = ((global as any).request = new Request())
  const response = ((global as any).response = new Response())
}

init()
