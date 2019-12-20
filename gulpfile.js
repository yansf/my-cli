const gulp = require('gulp');
const babel = require('gulp-babel');
const rollup = require('gulp-rollup');
const replace = require('@rollup/plugin-replace');
const del = require('del');

const entry= "src/nodeuii/**/*.js";

function clean(){
    return del(["./dist"]);
}
//开发环境
function builddev(){
    return gulp.src(entry)
        .pipe(babel({
            babelrc: false,
            plugins: ["transform-es2015-modules-commonjs"] 
        }))
        .pipe(gulp.dest("dist"))
}

//上线环境
function buildprod(){
    return gulp.src(entry)
        .pipe(babel({
            babelrc: false,
            ignore: ["./src/nodeuii/config/index.js"],
            plugins: ['transform-es2015-modules-commonjs']
        }))
        .pipe(gulp.dest("dist"));
}
function buildConfig(){
    return gulp.src(entry)
    .pipe(rollup({
        input: "./src/nodeuii/config/index.js",
        output: {
            format: "cjs"
        },
        plugins: [replace({ 'process.env.NODE_ENV': JSON.stringify('production') })]
    }))
    .pipe(gulp.dest('dist'));
}
// 测试环境 
function test(){
    // return gulp.src(entry)
    // .pipe(babel())
    // .pipe()
}

let build = gulp.series(builddev);

if(process.env.NODE_ENV == "production"){
    build = gulp.series(buildprod,buildConfig);
}

gulp.task("default",build);
// exports.default = build;