"use strict";

var gulp = require("gulp");
var connect = require("gulp-connect");
var sass = require("gulp-sass");

var config = {
  port: 9999,
  devBaseUrl: "http://localhost",
  paths: {
    html: "./index.html",
    sass: "./sass/*.scss"
  }
};

gulp.task("connect", function() {
  connect.server({
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  });
});

gulp.task("sass", function() {
  return gulp.src("./sass/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./"));
});

gulp.task("reload", function() {
  connect.reload();
});

gulp.task("watch", function() {
  gulp.watch(config.paths.html, ["reload"]);
  gulp.watch(config.paths.sass, ["sass", "reload"]);
});

gulp.task("default", ["sass", "connect", "watch"]);
