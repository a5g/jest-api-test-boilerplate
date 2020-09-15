import * as apiCreators from '../../src/api'
import API from '../../src/api/API'
import postsSchema from '../../src/schema/post-list'

const postsApi = apiCreators.postsAPI()

describe('posts tests > ', () => {
  describe(`GET: get top posts`, () => {
    test(`should get top posts`, async () => {
      logger.info(`*** test: should get top posts`)

      await postsApi.getPosts()
      reporter.description(API.getServiceDetails('get posts'))
    })

    test(`should have status code 200`, () => {
      expect(response.status).toEqual(200)
    })

    test(`should have at least 100 posts`, () => {
      expect(response.body.length).toBeGreaterThanOrEqual(100)
    })

    test(`should have correct schema`, () => {
      expect(response.body).toMatchSchema(postsSchema)
    })
  })
})
