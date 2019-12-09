export default {
  $id: 'postSchema',
  $schema: 'http://json-schema.org/draft-07/schema#',
  description: 'Example of a post schema.',
  type: 'object',
  properties: {
    userId: {
      type: 'number',
    },
    id: {
      type: 'number',
    },
    title: {
      type: 'string',
    },
    body: {
      type: 'string',
    },
  },
  required: ['userId', 'id', 'title', 'body'],
}
