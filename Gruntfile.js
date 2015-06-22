'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
            dist: {
                options: {
                    outputStyle: 'nested' // nested or compressed
                    // sourceMap: true,
                    // imagePath: '',
                    // includePaths: []
                    // more info: https://github.com/sindresorhus/grunt-sass
                },
                files: {
                    'assets/css/app.css': 'assets/scss/app.scss'
                }
            }
    },

    watch: {
      grunt: {
        options: {
          reload: true
        },
        files: ['Gruntfile.js']
      },

      sass: {
        files: 'assets/scss/**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build','watch']);
}
