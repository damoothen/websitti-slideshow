module.exports = function (grunt) {

    grunt.initConfig({

        jshint: {
            js: {
                files: {
                    src: ['src/js/**/*.js']
                }
            }
        },

        uglify: {
            min: {
                files: {
                    'dist/js/jquery.slideshow.min.js': ['src/js/jquery.slideshow.js']
                }
            }
        },

        compass: {
            css: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'src/css'
                }
            }
        },

        cssmin: {
            css: {
                files: {
                    'dist/css/jquery.slideshow.min.css': ['src/css/jquery.slideshow.css']
                }
            }
        },

        watch: {
            css: {
                files: ['sass/*.scss'],
                tasks: ['compass'],
                options: {
                    spawn: false,
                }
            }
        },

        clean: {
            dist: ['dist']
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('dist', ['clean', 'cssmin', 'jshint', 'uglify']);

};
