import postSchema from './post'

export default {
  $id: 'postsSchema',
  $schema: 'http://json-schema.org/draft-07/schema#',
  description: 'Example of a post schema.',

  type: 'array',
  items: [postSchema],
}
