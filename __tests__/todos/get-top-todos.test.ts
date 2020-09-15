import * as apiCreators from '../../src/api'
import API from '../../src/api/API'

const todosApi = apiCreators.todosAPI()

describe('todos tests > ', () => {
  describe(`GET: get top todos`, () => {
    test(`should get top todos`, async () => {
      logger.info(`*** test: should get top todos`)

      await todosApi.getTodos()
      reporter.description(API.getServiceDetails('get todos'))
    })

    test(`should have status code 200`, () => {
      expect(response.status).toEqual(200)
    })

    test(`should have at least 200 todos`, () => {
      expect(response.body.length).toBeGreaterThanOrEqual(200)
    })
  })
})
