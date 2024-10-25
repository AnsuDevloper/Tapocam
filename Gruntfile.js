module.exports = function(grunt) {
  // Load the Uglify plugin for minification
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Configure the Grunt tasks
  grunt.initConfig({
    uglify: {
      build: {
        src: 'server.js',  // File to be minified
        dest: 'server.min.js'  // Minified output file
      }
    }
  });

  // Register the default task
  grunt.registerTask('default', ['uglify']);
};
