module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      default: {
        files: {
            'build/<%= pkg.version %>/annotator.imgselect.min.js': [
                'src/annotator.imgselect.js',
                'src/jquery.imgareaselect-0.9.10/scripts/jquery.imgareaselect.min.js'
             ]
      }
    }

    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};