import dartSass from 'sass';
import gulpSass from 'gulp-sass';


import gulpCleanCss from 'gulp-clean-css'; //Сжатие CSS файлов
import webpcss from 'gulp-webpcss'; //Вывод WEBP изображений
import autoprefixer from 'gulp-autoprefixer'; //Добавление вендорных префиксов
import groupCssMediaQueries from 'gulp-group-css-media-queries'; //Группировка медиа-запросов

const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "SCSS",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(app.plugins.replace(/@img\//g, '../img/'))
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(
      app.plugins.gulpIf(
        app.isProd,
        groupCssMediaQueries()
      )
    )
    .pipe(
      app.plugins.gulpIf(
        app.isProd,
        webpcss({
        webpClass: ".webp",
        noWebpClass: ".no-webp"
        })
      )
    )
    .pipe(autoprefixer({
      grid: true,
      overrideBrowserlist: ["last 3 versions"],
      cascade: true
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(gulpCleanCss())
    .pipe(app.plugins.rename({
      extname: ".min.css"
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.browserSync.stream());
}