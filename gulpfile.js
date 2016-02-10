"use strict";

var gulp = require("gulp");
var connect = require("gulp-connect");

var config = {
  port: 9999,
  devBaseUrl: "http://localhost",
  paths: {
    html: "./index.html"
  }
};

gulp.task("connect", function() {
  connect.server({
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  });
});

gulp.task("reload", function() {
  connect.reload();
});

gulp.task("watch", function() {
  gulp.watch(config.paths.html, ["reload"]);
});

gulp.task("default", ["connect", "watch"]);
