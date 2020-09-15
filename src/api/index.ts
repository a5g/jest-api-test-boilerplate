import TodosAPI from './TodosAPI'
import PostsAPI from './PostsAPI'

const todosAPI = () => new TodosAPI(config.env.apis.jsonPlaceholder, '/todos')
const postsAPI = () => new PostsAPI(config.env.apis.jsonPlaceholder, '/posts')

export { todosAPI, postsAPI }
