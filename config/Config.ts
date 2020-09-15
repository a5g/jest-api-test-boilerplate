import global from './global'
import env from './env'

const process = require('process')

export class Config {
  get global() {
    return global
  }

  get env() {
    return env()
  }

  get runtime() {
    return {
      env:
        process.env.TEST_ENV === undefined
          ? config.global.defaultTestEnv
          : process.env.TEST_ENV,
    }
  }
}
