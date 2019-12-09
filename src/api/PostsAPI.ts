import API from './API'

class PostsAPI extends API {
  getPosts() {
    logger.info('api > get posts')
    return this.requestJSON({})
  }

  getPostById(id: string) {
    logger.info('api > get post by id')
    return this.requestJSON({ path: `/${id}` })
  }

  createPost(post: any) {
    logger.info(`api > create post: ${JSON.stringify(post)}`)
    return this.requestJSON({ method: 'POST', body: post })
  }

  updatePost(obj: any) {
    logger.info(`api > update post: ${JSON.stringify(obj)}`)
    return this.requestJSON({ path: `/${obj.id}`, method: 'PUT', body: obj })
  }

  updatePostByPatch(id: number, obj: any) {
    logger.info(`api > update post by patch: ${JSON.stringify(obj)}`)
    return this.requestJSON({ path: `/${id}`, method: 'PATCH', body: obj })
  }

  deletePost(id: number = 1) {
    logger.info(`api > delete post: ${id}`)
    return this.requestJSON({ path: `/${id}`, method: 'DELETE' })
  }
}

export default PostsAPI
