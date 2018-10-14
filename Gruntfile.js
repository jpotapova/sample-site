const port = 3000;
const srcScss = "src/scss/*.scss";

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    prettier: {
      scss: {
        src: [srcScss]
      }
    },
    sass: {
      dev: {
        files: {
          "public/index.css": "src/scss/index.scss"
        }
      },
      prod: {
        options: {
          style: "compressed"
        },
        files: {
          "public/index.css": "src/scss/index.scss"
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
          "public/index.js": ["src/index.js"]
        }
      },
      prod: {
        options: {
          mangle: true,
          compress: true,
          beautify: false
        },
        files: {
          "public/index.js": ["src/index.js"]
        }
      }
    },
    connect: {
      server: {
        options: {
          livereload: true,
          port: port
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      scss: {
        files: srcScss,
        tasks: ["prettier:scss", "sass:dev", "sasslint"]
      },
      html: {
        files: "**/*.html"
      },
      js: {
        files: "src/js/*.js",
        tasks: ["concat", "jshint", "uglify:dev"]
      }
    },
    open: {
      dev: {
        path: "http://127.0.0.1:" + port,
        app: "Google Chrome"
      }
    },
    sasslint: {
      options: {
  			configFile: ".sass-lint.yml",
        formatter: "compact"
  		},
      target: [srcScss]
    },
    jshint: {
      options: {
        jshintrc: true
      },
      all: ["Gruntfile.js", "src/js/*.js"]
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['src/js/*.js'],
        dest: 'src/index.js',
      },
    }
  });

  require("load-grunt-tasks")(grunt);

  grunt.registerTask("default", [
    "prettier",
    "sass:dev",
    "sasslint",
    "concat",
    "jshint",
    "uglify:dev",
    "connect",
    "open",
    "watch"
  ]);
  grunt.registerTask("prod", ["sass:prod", "concat", "uglify:prod"]);
};
