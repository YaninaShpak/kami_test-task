export const server = (done) => {
  app.browserSync.init({
    server: {
      baseDir: `${app.path.build.html}`
    },
    notify: false,
    port: 3000,
  });
}