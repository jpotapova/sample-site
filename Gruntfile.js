module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dev: {
        files: {
           'public/index.css':'src/scss/index.scss'
         }
      },
      prod: {
        options: {
          style: 'compressed'
        },
        files: {
           'public/index.css':'src/scss/index.scss'
         }
      }
    },
    uglify: {
      dev: {
        options: {
          mangle: false,
          compress: false,
          beautify: true
        },
        files: {
          'public/index.js': ['src/index.js']
        }
      },
      prod: {
        options: {
          mangle: true,
          compress: true,
          beautify: false
        },
        files: {
          'public/index.js': ['src/index.js']
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
        files: 'src/*.js',
        tasks: ['uglify']
      }
    },
    open: {
      dev: {
        path: 'http://127.0.0.1:3000',
        app: 'Google Chrome'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  grunt.loadNpmTasks('grunt-open');

  grunt.registerTask('default', ['sass:dev', 'uglify:dev', 'connect', 'open', 'watch']);

};
