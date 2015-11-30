var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    spritesmith = require('gulp.spritesmith'),
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
    var spriteData = gulp.src('./source/images/_sprite/*.png')
        .pipe(spritesmith({
            algorithm : 'binary-tree',
            imgName : 'main_sprite.png',
            cssName  : 'main_sprite.css',
            cssTemplate : './source/images/_sprite/_template/postcss.template.handlerbars'
        }));
    var imgStream = spriteData.img.pipe(gulp.dest('./source/images'));
    var cssStream = spriteData.css.pipe(gulp.dest('./source/css'));
    return spriteData;
});
