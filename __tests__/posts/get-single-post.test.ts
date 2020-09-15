import * as apiCreators from '../../src/api'
import API from '../../src/api/API'
import postSchema from '../../src/schema/post'

const postsApi = apiCreators.postsAPI()
const id: any = 1

describe('posts tests > ', () => {
  describe(`GET: get post by id`, () => {
    test(`should get post by id`, async () => {
      logger.info(`*** test: should get post by id`)

      await postsApi.getPostById(id)
      reporter.description(API.getServiceDetails(`get post by id ${id}`))
    })

    test(`should have status code 200`, () => {
      expect(response.status).toEqual(200)
    })

    test(`should have correct schema`, () => {
      expect(response.body).toMatchSchema(postSchema)
    })
  })
})
