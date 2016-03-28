var gulp = require('gulp'),
  postcss = require('gulp-postcss'),
  spritesmith = require('gulp.spritesmith');

var functions  = require('postcss-functions')({
  functions:{
    list:function(list,index){
      var res = list.split(' ');
      return res[index];
    },
    urlConcat:function(image){
      var ruta = image;
      return 'url('+ruta+')';
    }
  }
});

var plugins = [
  require('postcss-import'),
  require('postcss-sassy-mixins'),
  require('postcss-each'),
  require('postcss-simple-vars'),
  functions
];

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

gulp.task('css',function(){
  return gulp.src('./source/css/*.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./public/css'));
});