import 'jest-allure/dist/setup'
import './service/setup'
import API from './src/api/API'

import { matchers, matchersWithOptions } from 'jest-json-schema'
import globals from './config/globals'

const formats = {
  bcp47: /^[a-z]{2}-[A-Z]{2}$/,
}

expect.extend(matchers)
expect.extend(matchersWithOptions({ formats, verbose: true }))

jest.setTimeout(globals.defaultCommandTimeout * 60 * 1000)

beforeAll(() => {
  API.setEnvironment()
})
