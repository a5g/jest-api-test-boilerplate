/* eslint-disable */
import { Config } from './config/Config'
import { Util } from './src/utils/Util'

const init = () => {
  const config = ((global as any).config = new Config())
  const util = ((global as any).util = new Util())
  // const kafka = ((global as any).kafka = new KafkaService())
  // const mongo = ((global as any).mongo = new Mongo())
}

// exports.registerGlobals = registerGlobals
init()
