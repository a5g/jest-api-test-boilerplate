import API from './API'

class TodosAPI extends API {
  getTodos() {
    logger.info('get todos')
    return this.requestJSON({})
  }

  getTodoById(id: string) {
    logger.info('get todo by id')
    return this.requestJSON({ path: `/${id}` })
  }
}

export default TodosAPI
