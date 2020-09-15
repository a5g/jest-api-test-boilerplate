export default {
  $id: 'postSchema',
  $schema: 'http://json-schema.org/draft-07/schema#',
  description: 'Example of a post schema.',
  type: 'object',
  properties: {
    userId: {
      type: 'string',
    },
    id: {
      type: 'string',
    },
    title: {
      type: 'string',
    },
    body: {
      type: 'string',
    },
    rfk: {
      type: 'number',
    },
  },
  required: ['userId', 'id', 'title', 'body', 'rfk'],
}
