module.exports = function (grunt) {

    grunt.initConfig({

        clean: {
            build: {},
            staging: {}
        },

        copy: {
          framework: {},
          app: {},
          fromStagingDirs: {},
          uglified: {}
        },

        concat: {
            options: {
              separator: '\n;\n\n',
            },
            framework: {},
            app: {}
        },

        uglify: {
            all: {}
        }

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['clean', 'copy:framework', 'copy:app', 'copy:fromStagingDirs', 'createTimestamp', 'clean:staging']);
    grunt.registerTask('prod', ['clean', 'copy:framework', 'copy:app', 'uglify', 'copy:uglified', 'createTimestamp', 'clean:staging']);

};



module.exports = function (grunt) {

    grunt.initConfig({
        clean: {},
        copy: {},
        concat: {},
        uglify: {}
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['clean', 'copy:framework', 'copy:app', 'copy:fromStagingDirs', 'createTimestamp', 'clean:staging']);
};

