module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      app: {
        files: {
           'public/index.css':'src/scss/index.scss'
         }
      }
    },
    connect: {
      server: {
        options: {
          livereload: true,
          port: 3000,
          base: 'public'
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      scss: {
        files: '**/*.scss',
        tasks: ['sass']
      },
      html: {
        files: '**/*.html'
      },
      js: {
        files: 'src/*.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['sass', 'connect', 'watch']);

};
