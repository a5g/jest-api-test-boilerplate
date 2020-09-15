/* eslint-disable */
import { Reporter } from 'jest-allure/dist/Reporter'
import { Config } from './config/Config'
import { Util } from './src/utils/Util'

declare global {
  const reporter: Reporter
  const config: Config
  const util: Util
}
