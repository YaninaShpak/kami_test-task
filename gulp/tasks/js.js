import webpack from "webpack-stream";

export const js = () => {
  return app.gulp.src(app.path.src.js, { sourcemaps: app.isDev })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "JS",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(webpack({
      mode: app.isProd ? 'production' : 'development',
      // настройка, если нужно получить два и более файлов, в которые импортируется модули
      entry: { // вход
        app: './app/js/app.js', //имя файла, к-е получим на выходе: путь к исходному файлу
        swiper: './app/js/swiper-bundle.js',
      },
      output: { //выход
        filename: '[name].js', //writes to disk: ./dist/app.js, ./dist/search.js
        
      },
    }))
    .pipe(app.plugins.rename({
      extname: ".min.js"
    }))
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.browserSync.stream());
}