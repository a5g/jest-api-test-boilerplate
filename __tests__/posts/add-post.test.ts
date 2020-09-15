import * as apiCreators from '../../src/api'
import API from '../../src/api/API'
import postSchema from '../../src/schema/post'

const postsApi = apiCreators.postsAPI()

describe('posts tests > ', () => {
  describe(`POST: create a post`, () => {
    test(`should create a post`, async () => {
      logger.info(`*** test: should create a post`)
      const post: any = {
        title: 'foo',
        body: 'bar',
        userId: 1,
      }

      await postsApi.createPost(post)
      reporter.description(API.getServiceDetails('create post'))
    })

    test(`should have status code 200`, () => {
      expect(response.status).toEqual(201)
    })

    test(`should have correct schema`, () => {
      expect(response.body).toMatchSchema(postSchema)
    })
  })
})
