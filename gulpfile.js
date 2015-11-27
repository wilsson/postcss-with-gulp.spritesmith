var gulp = require('gulp'),
    postcss = require('postcss'),
    sprites = require('gulp.spritesmith'),
    functions = require('postcss-functions');

functions({
    functions:{
        list:function(list,index){
            var res = list.split(' ');
            return res[index];
        }
    }
});

gulp.task('sprites:compile',function(){

});
