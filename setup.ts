/* eslint-disable */
import { Config } from './config/Config'
import { Util } from './src/utils/Util'

const init = () => {
  const config = ((global as any).config = new Config())
  const util = ((global as any).util = new Util())
}

init()
