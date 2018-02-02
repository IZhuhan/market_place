const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const spritesmith = require('gulp.spritesmith');
const merge = require('merge-stream');
const tinypng = require('gulp-tinypng');

const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');

gulp.task('autoprefixer', function () {
    gulp.src('src/css/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css'))
});

gulp.task('sprite', function () {
    var spriteData = gulp.src('src/sprite/*.png')
        .pipe(spritesmith({ // Настройка спрайта
            imgName: 'sprite.png',
            cssName: 'sprite.css',
            imgPath: '../img/sprite.png'
        }));

    var imgStream = spriteData.img
        .pipe(gulp.dest('app/img/'));

    var cssStream = spriteData.css
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css/'));

    return merge(imgStream, cssStream);
});

gulp.task('tinypng', function () {
    gulp.src([
        'src/img/**/*.jpg',
        'src/img/**/*.png'
    ])
    .pipe(tinypng('8kHBQ0pfGRJrg8Tn-JwKscFWEbc2Jp2k'))
    .pipe(gulp.dest('app/img/'));
});

gulp.task('css-libs', function() {
    return gulp.src([
        'app/css/font-awesome.min.css',
        'app/css/reset.css',
        'app/css/flex.css',
        'app/css/grid.css',
        'app/css/slicknav.css',
        'app/css/default-components.css',
        'app/css/sprite.css',
        'app/css/style.css'
    ]) //выбираем файл для минификации
    .pipe(concat('all.min.css')) // сжимаем
    .pipe(cssnano()) // сжимаем
    .pipe(gulp.dest('app/css')); // выгружаем в папку app/css
});

gulp.task('watch', ['autoprefixer', 'sprite', 'tinypng'], function () {
    gulp.watch('src/css/**/*.css', ['autoprefixer']);
    gulp.watch('src/sprite/*.png', ['sprite']);
    gulp.watch( 'src/img/**/*', ['tinypng'] );
});

gulp.task('default', ['watch']);