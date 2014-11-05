var buildVersion = '2';
var rootDir = 'web/scripts/';
var buildDir = rootDir + 'build/';
var buildVersionDir = buildDir + buildVersion + '/';
var frameworkStagingDir = buildDir + 'framework-staging/';
var appStagingDir = buildDir + 'app-staging/';
var appDir = rootDir + 'app/';

module.exports = function (grunt) {

    grunt.initConfig({

        clean: {
            build: [buildVersionDir],
            staging: [frameworkStagingDir, appStagingDir]
        },

        copy: {

          framework: {
            files: [{
                expand: true, 
                cwd: rootDir, 
                src: [
                    'angularjs/1.3.1/angular.js',
                    'jquery/2.1.1/jquery.js',
                    'modernizr/2.8.3/modernizr.js',
                    'underscore/1.7.1/underscore.js'
                ], 
                dest: frameworkStagingDir,
                flatten: true
              }
            ]
          },

          app: {
            files: [{
                expand: true, 
                cwd: appDir, 
                src: [
                    'app.js',
                    'services/*.js'
                ], 
                dest: appStagingDir,
                flatten: true
              }
            ]
          },

          fromStagingDirs: {
            files: [{
                expand: true, 
                src: [frameworkStagingDir + '*.js', appStagingDir + '*.js'], 
                dest: buildVersionDir,
                flatten: true
              }
            ]
          },

          uglified: {
            files: [{
                expand: true, 
                src: [frameworkStagingDir + 'framework.js', appStagingDir + 'app.js'], 
                dest: buildVersionDir,
                flatten: true
              }
            ]
          }

        },

        concat: {
            options: {
              separator: '\n;\n\n',
            },
            framework: {
              src: [frameworkStagingDir + '*.js'],
              dest: buildVersionDir + '/framework.js',
            },
            app: {
              src: [appStagingDir + '*.js'],
              dest: buildVersionDir + '/app.js',
            }
        },

        uglify: {
            all: {
                files: {
                    'web/scripts/build/framework-staging/framework.js': [frameworkStagingDir + '*.js'],
                    'web/scripts/build/app-staging/app.js': [appStagingDir + '*.js']
                }
            }
        }

    });

    var now = new Date();
    var ts = ''.concat(now.getDate(), '-', now.getMonth(), '-', now.getFullYear(), '_', now.getHours(), '-', now.getMinutes(), '-', now.getSeconds());

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('createTimestamp', 'Creates an empty file', function() {
       grunt.file.write('web/scripts/build/' + buildVersion + '/' + ts, '');
    });

    grunt.registerTask('default', [
        'clean'
        ,'copy:framework'
        ,'copy:app'
        ,'copy:fromStagingDirs'
        ,'createTimestamp'
        ,'clean:staging'
        ]);

    grunt.registerTask('test', [
        'clean'
        ,'copy:framework'
        ,'copy:app'
        ,'concat'
        ,'createTimestamp' 
        //,'clean:staging'
        ]);

    grunt.registerTask('prod', [
        'clean'
        ,'copy:framework'
        ,'copy:app'
        ,'uglify'
        ,'copy:uglified'
        ,'createTimestamp' 
        ,'clean:staging'
        ]);


};
