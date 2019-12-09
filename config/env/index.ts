import dev from './dev'
import staging from './staging'
import prod from './prod'
import runtime from '../runtime'

export default (env = runtime.env) => {
  switch (env) {
    case 'dev':
      return dev

    case 'prod':
      return prod

    case 'staging':
    default:
      return staging
  }
}
