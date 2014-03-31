module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    clean: {
      assets: ['assets/**'],
      site: ['_site/**']
    },

    connect: {
      server: {
        options: {
          port: 8000,
          base: '_site'
        }
      }
    },

    copy: {
      bootstrap: {
        expand: true,
        cwd: 'bower_components/bootstrap/dist',
        src: ['**'],
        dest: 'assets/bootstrap'
      },
      html5shiv: {
        expand: true,
        cwd: 'bower_components/html5shiv/dist',
        src: ['**'],
        dest: 'assets/html5shiv'
      },
      jquery: {
        expand: true,
        cwd: 'bower_components/jquery/dist',
        src: ['**'],
        dest: 'assets/jquery'
      },
      respond: {
        expand: true,
        cwd: 'bower_components/respond',
        src: ['respond.min.js'],
        dest: 'assets/respond'
      },
      css: {
        expand: true,
        cwd: 'assets/css',
        src: ['**'],
        dest: '_site/assets/css'
      },
      images: {
        expand: true,
        cwd: '_images',
        src: ['**'],
        dest: 'assets/img'
      }
    },

    jekyll: {
      options: {
        config: '_config.yml',
        src: '.'
      },
      site:{
        dest: '_site'
      }
    },

    less: {
      development: {
        options: {
          paths: ['_less', 'bower_components/bootstrap/less'],
        },
        files: {
          'assets/css/main.css': '_less/main.less'
        }
      },
      production: {
        options: {
          paths: ['_less', 'bower_components/bootstrap/less'],
          yuicompress: true
        },
        files: {
          'assets/css/main.css': '_less/main.less'
        }
      }
    },

    watch: {
      less: {
        files: ['_less/*.less'],
        tasks: ['less:development', 'copy:css']
      },
      jekyll: {
        files: ['_config.yml', 'index.html', '_layouts/**', '_posts/**', 'blog/**', 'events/**'],
        tasks: ['jekyll:site']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['clean', 'internal', 'external']);
  grunt.registerTask('development', ['default', 'less:development', 'jekyll:site']);
  grunt.registerTask('external', ['copy:bootstrap', 'copy:jquery', 'copy:html5shiv', 'copy:respond'])
  grunt.registerTask('internal', ['copy:images'])
  grunt.registerTask('production', ['default', 'less:production']);
  grunt.registerTask('serve', ['development', 'connect', 'watch']);
};
