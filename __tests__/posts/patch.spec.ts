import * as apiCreators from '../../src/api'
import API from '../../src/api/API'
import postSchema from '../../src/schema/post'

const postsApi = apiCreators.postsAPI()

describe('posts tests > ', () => {
  describe(`PATCH: update a post`, () => {
    test(`should update a post`, async () => {
      logger.info(`*** test: should update a post`)
      const post: any = {
        title: 'foo',
      }

      await postsApi.updatePostByPatch(1, post)
      reporter.description(API.getServiceDetails('update post using patch'))
    })

    test(`should have status code 200`, () => {
      expect(response.status).toEqual(200)
    })

    test(`should have correct schema`, () => {
      expect(response.body).toMatchSchema(postSchema)
    })
  })
})
