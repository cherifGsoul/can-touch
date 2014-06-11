module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['src/event/swipe.js', 'src/can.touch.js'],
                dest: 'dist/can.touch.js',
            }
        },
        connect: {
            options: {
                port: 8000,
                base: '.',
                keepalive: true
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask('default', ['concat']);
    grunt.registerTask('server', ['connect']);
};