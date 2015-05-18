var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    jade        = require('gulp-jade'),
    plumber     = require('gulp-plumber'),
    concat      = require('gulp-concat'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload;


gulp.task('serve', ['sass', 'jade'], function() {

  browserSync({

    server: { baseDir: "./app/" }

  });

  /* для простых приложений без jade sass и прочего */
  // gulp.watch("app/*.html").on('change', reload);
  // gulp.watch("app/css/*.css").on('change', reload);
  // gulp.watch("app/js/*.js").on('change', reload);

  gulp.watch("src/scss/*.scss",     ['sass']);
  gulp.watch("src/jade/**/*.jade",  ['jade']);
  gulp.watch("src/js/*.js",         ['js']);

});

// Работа с SASS

gulp.task('sass', function () {

    gulp.src('./src/scss/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('./app/css'))
        .pipe(reload({stream: true})
    );
});

// Работа с JADE
gulp.task('jade', function () {
    gulp.src('./src/jade/*.jade')
        .pipe(plumber())
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./app/'))
        .pipe(reload({stream: true}));
});

// Работа с js
gulp.task('js', function () {
    gulp.src('./src/js/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./app/js/'))
        .pipe(reload({stream: true}));
});

gulp.task('default', ['serve']);
