const gulp = require('gulp');
const babel = require('gulp-babel');
const gulp-rollup = require('gulp-rollup');

const entry= "src/nodeuii/**/*.js";

//开发环境
function builddev(){
    return gulp.src(entry)
    .pipe(bable())
    .pipe(gulp.dest())
}

//上线环境
function buildprod(){
    return gulp.src(entry)
    .pipe(babel())
    .pipe(gulp.dest()) 
}

// 测试环境 
function test(){
    return gulp.src(entry)
    .pipe(babel())
    .pipe()
}