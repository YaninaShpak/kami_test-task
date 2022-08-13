export const css = () => {
  return app.gulp.src(app.path.src.css)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "CSS",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(app.plugins.rename({
      extname: ".min.css"
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.browserSync.stream());
}