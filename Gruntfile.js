module.exports = function(grunt) {
  // config npm tasks
  grunt.initConfig({
    // -------------------------------------- general config
    jshint: {
      options: {
        ignores: ['test/coverage/**/*.js']
      },
      files: {
        src: ['follywood/**/*js', 'test/**/*.js']
      },
      gruntfile: {
        src: 'Gruntfile.js'
      }
    },
    watch: {
      lint: {
        files: '<%= jshint.files.src %>',
        tasks: 'jshint'
      },
      test: {
        files: ['test/**/*.js'],
        tasks: ['jshint', 'mochaTest']
      }
    },
    // -------------------------------------- server launcher
    concurrent: {
      all: {
        tasks: ['connect','mochaTest:cfg'],
        options: {
          logConcurrentOutput: true
        }
      },
      staging: {
        tasks: ['connect','mochaTest:staging'],
        options: {
          logConcurrentOutput: true
        }
      },
      production: {
        tasks: ['connect','mochaTest:production'],
        options: {
          logConcurrentOutput: true
        }
      },
    },
    connect: {
      server: {
        options: {
          port: 5000,
          hostname: 'localhost'
        }
      }
    },
    // -------------------------------------- test runner
    mochaTest: {
      cfg: {
        options: {
          reporter: 'spec'
        },
        src: ['test/follywood/**/*.js']
      },
      staging: {
        options: {
          reporter: 'spec'
        },
        src: ['test/follywood/staging/**/*.js']
      },
      production: {
        options: {
          reporter: 'spec'
        },
        src: ['test/follywood/production/**/*.js']
      },
    },

  });

  // --------------------------------------  required modules
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // -------------------------------------- task registration
  grunt.registerTask('default', ['jshint', 'server']);
  grunt.registerTask('server', ['connect','mochaTest:cfg']);
  grunt.registerTask('stage', ['connect','mochaTest:staging']);
  grunt.registerTask('prod', ['connect','mochaTest:production']);
  grunt.registerTask('test', ['connect','mochaTest:cfg']);
  grunt.registerTask('lint', 'jshint');
};
