import * as apiCreators from '../../src/api'
import API from '../../src/api/API'
import postSchema from '../../src/schema/post'

const postsApi = apiCreators.postsAPI()

describe('posts tests > ', () => {
  describe(`PUT: update a post`, () => {
    test(`should update a post`, async () => {
      logger.info(`*** test: should update a post`)
      const post: any = {
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
      }

      await postsApi.updatePost(post)
      reporter.description(API.getServiceDetails('update post using put'))
    })

    test(`should have status code 200`, () => {
      expect(response.status).toEqual(200)
    })

    test(`should have correct schema`, () => {
      expect(response.body).toMatchSchema(postSchema)
    })
  })
})
