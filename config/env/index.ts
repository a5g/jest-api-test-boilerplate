import dev from './dev'
import staging from './staging'
import prod from './prod'

export default () => {
  switch (config.runtime.env) {
    case 'dev':
      return dev

    case 'prod':
      return prod

    case 'staging':
    default:
      return staging
  }
}
