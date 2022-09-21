const { dest, src } = require("gulp");
const gulp = require("gulp");
const { browserReload } = require("./watcher");

function copyFonts() {
  return src("./src/fonts/*").pipe(gulp.dest("./dist/fonts"));
  // .on("end", browserReload);
}

exports.copyFonts = copyFonts;
