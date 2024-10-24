module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            build: {
                src: 'public/js/*.js', // Adjust according to your JS files
                dest: 'public/js/min.js' // Output destination
            }
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'public/css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'public/css/',
                    ext: '.min.css'
                }]
            }
        },

        watch: {
            scripts: {
                files: ['public/js/*.js'], // Watch for JS changes
                tasks: ['uglify'],
                options: {
                    spawn: false,
                },
            },
            css: {
                files: ['public/css/*.css'], // Watch for CSS changes
                tasks: ['cssmin'],
                options: {
                    spawn: false,
                },
            },
        }
    });

    // Load the plugins.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'cssmin']);
};
