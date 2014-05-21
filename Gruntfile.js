'use strict';

module.exports = function (grunt) {
  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);
  // Show elapsed time at the end
  require('time-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    autoprefixer: {
      dist: {
        files: {
          'styles/full.css': ['styles/main.css']
        }
      }
    },

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'styles/main.css': 'styles/main.scss'
        }
      }
    },

    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 9000,
          livereload: true
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      target: {
        files: ['index.html', 'styles/**/*.css', 'scripts/**/*.js']
      },
      styles: {
        files: ['styles/main.css'],
        tasks: ['autoprefixer']
      },
      css: {
        files: ['styles/main.scss'],
        tasks: ['sass']
      }
    }
  });

  // Default task.
  grunt.registerTask('default', ['connect', 'watch']);
};
