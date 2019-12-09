const gulp = require('gulp')
const del = require('del')
const fs = require('fs')
const minimist = require('minimist')
const run = require('gulp-run-command').default

const runtime = {
  env: 'staging',
}
const options = minimist(process.argv.slice(2), {})
const updateRuntimeConfig = async () => {
  const tmpRuntime = { ...runtime }

  if (options.env) tmpRuntime.env_v1 = options.env

  if (tmpRuntime !== runtime) {
    const runtimeConfig = `export default ${JSON.stringify(tmpRuntime)}`

    await fs.writeFileSync(`./config/runtime.ts`, runtimeConfig, (err) => {
      if (err) {
        console.log(`Error updating runtime config. ${err}`)
        return Promise.reject()
      }

      return Promise.resolve()
    })
  }

  return Promise.resolve()
}

gulp.task('clean', () => {
  return del([
    'target/',
    'allure-report/',
    'allure-results/',
    'results/',
    'test-report.html',
    'logs/',
  ]).then(() => {
    // if (!fs.existsSync('target')) {
    //   fs.mkdirSync('target')
    // }
  })
})

gulp.task('update:config', () => {
  return updateRuntimeConfig()
})

// gulp.task('run:tests', run(`${suite}`))
gulp.task('run:tests', run(`jest __tests__/`))
gulp.task('test', gulp.series(['clean', 'update:config', 'run:tests']))
gulp.task('report', run('npm run report'))
