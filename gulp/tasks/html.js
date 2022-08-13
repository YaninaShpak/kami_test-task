import fileInclude from "gulp-file-include";
import webpHtmlNosvg from "gulp-webp-html-nosvg";
import htmlMin from 'gulp-htmlmin'; //сжатие

export const html = () => {
  return app.gulp.src(app.path.src.html)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "HTML",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(fileInclude())
    .pipe(app.plugins.replace(/@img\//g, 'img/'))
    .pipe(
      app.plugins.gulpIf(
        app.isProd,
        webpHtmlNosvg()
      )
    )
    // .pipe(app.plugins.sizeFile({
    //   title: 'До сжатия'
    // }))
    // .pipe(htmlMin({
    //   collapseWhitespace: app.isProd
    // }))
    // .pipe(app.plugins.sizeFile({
    //   title: 'После сжатия'
    // }))
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.browserSync.stream());
}