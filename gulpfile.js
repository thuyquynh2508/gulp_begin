const gulp = require('gulp');
const gfi = require('gulp-file-include')
const sass = require('gulp-sass')(require('sass'));
const browerSync = require('browser-sync').create();

function page() {
    return gulp.src(['./*.html'])
    .pipe(gfi())
    .pipe(gulp.dest("./"));
    
}

function style() {
    return gulp.src('./code/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build/css'))
    .pipe(browerSync.stream());
}

function scripts() {
    return gulp.src('./code/js/**/*.js')
    .pipe(gulp.dest('./build/scripts'))
    .pipe(browerSync.stream());
}

function watch() {
    browerSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./code/scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browerSync.reload);
    gulp.watch('./code/js/**/*.js', scripts);
}

exports.style = style;
exports.scripts = scripts;
exports.watch = watch;