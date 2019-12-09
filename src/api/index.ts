import * as config from '../../config'
import TodosAPI from './TodosAPI'
import PostsAPI from './PostsAPI'

const todosAPI = (environment: string = config.runtime.env) =>
  new TodosAPI(config.env(environment).apis.jsonPlaceholder, '/todos')

const postsAPI = (environment: string = config.runtime.env) =>
  new PostsAPI(config.env(environment).apis.jsonPlaceholder, '/posts')

export { todosAPI, postsAPI }
