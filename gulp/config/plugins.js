import replace from "gulp-replace"; // Поиск и замена
import plumber from "gulp-plumber"; //Обработка ошибок
import notify from "gulp-notify"; //Сообщения об ошибке
import newer from "gulp-newer"; // Проверка обновлений
import gulpIf from "gulp-if";
import sizeFile from 'gulp-size'; //узнать размер файла
import rename from 'gulp-rename';

export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  newer: newer,
  gulpIf: gulpIf,
  sizeFile: sizeFile,
  rename: rename
}