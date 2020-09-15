import 'jest-allure/dist/setup'
import { matchers, matchersWithOptions } from 'jest-json-schema'
import './setup'
import './service/setup'
import API from './src/api/API'
import global from './config/global'

require('dotenv').config()

const formats = {
  bcp47: /^[a-z]{2}-[A-Z]{2}$/,
}

expect.extend(matchers)
expect.extend(matchersWithOptions({ formats, verbose: true, allErrors: true }))

jest.setTimeout(global.defaultCommandTimeout * 60 * 1000)

beforeAll(() => {
  API.setEnvironment()
})
