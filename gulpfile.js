const gulp = require('gulp')
const run = require('gulp-run-command').default

gulp.task(
  'clean',
  run(
    'rm -rf target allure-results allure-reports results logs test-report.html',
  ),
)

gulp.task('test', gulp.series(['clean', run(`jest __tests__/`)]))
gulp.task(
  'test:serial',
  gulp.series(['clean', run(`jest __tests__/ --runInBand`)]),
)
gulp.task('report', run('npm run report'))
