import gulp from 'gulp';
import browserSync from "browser-sync"; //Локальный сервер

import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';

const isProd = process.argv.includes('--production'); // при запуске команды с флагом production в эту переменную запишется true, иначе false
const isDev = !isProd;

global.app = {
  gulp:gulp,
  browserSync: browserSync,
  path: path,
  plugins: plugins,
  isProd: isProd,
  isDev: isDev
}

// Импорт задач
import { server } from './gulp/tasks/server.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { scss } from './gulp/tasks/scss.js';
import { css } from './gulp/tasks/css.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/img.js';
import { otfToTtf, ttfToWoff, fontsWoff, fontsStyle } from './gulp/tasks/fonts.js';
import { svg_sprite } from './gulp/tasks/svg-sprite.js';
import { zip } from './gulp/tasks/zip.js';

// Наблюдатель
const watcher = () => {
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.scss, css);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
}

//Запуск задач

export { svg_sprite }

// Последовательная обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsWoff, fontsStyle);

// Основные задачи
const mainTasks = gulp.series(fonts, gulp.parallel(html, scss, css, js, images));

// Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(server, watcher));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);

// Экспорт сценариев

export { dev }
export { build }
export { deployZIP }

// Выполнение сценария по умолчанию
// запуск в режиме разработки npm start
// запуск в режиме продакшена npm run build
// запуск zip - npm run zip
export default app.isProd ? build : dev;