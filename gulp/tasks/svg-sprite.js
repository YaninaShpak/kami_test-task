import svgSprite from "gulp-svg-sprite";

export const svg_sprite = () => {
  return app.gulp.src(app.path.src.svgicons)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "SVG",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: `../sprite/icons.svg`,

          // Создавать страницу с перечнем иконок
          example: true
        }
      },
    }))
    
    .pipe(app.gulp.dest(`./app/img/`));
    
}