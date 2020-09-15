import * as apiCreators from '../../src/api'
import API from '../../src/api/API'

const postsApi = apiCreators.postsAPI()

describe('posts tests > ', () => {
  describe(`DELETE: delete a post`, () => {
    test(`should delete a post`, async () => {
      logger.info(`*** test: should delete a post`)

      const post: any = {
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
      }

      await postsApi.deletePost(post.id)
      reporter.description(API.getServiceDetails('delete post'))
    })

    test(`should have status code 200`, () => {
      expect(response.status).toEqual(200)
    })

    test(`should have correct schema`, () => {
      expect(response.body).toEqual({})
    })
  })
})
