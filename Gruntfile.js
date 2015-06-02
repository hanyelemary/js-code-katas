module.exports = function( grunt ) {
    'use strict';

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        //karma configuration. It points to the karma config file.
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('default', ['karma']);
};