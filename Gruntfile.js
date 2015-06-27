module.exports = function (grunt) {
    grunt.initConfig({
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 8', 'ie 9']
            },
            dist: {
                files: {
                    '_build/css/style.css': '_build/css/style.css'
                }
            }
        },
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
          options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
          },
          build: {
            src: '_js/scripts.js',
            dest: '_build/js/scripts.min.js'
          }
        },
        sass: { 
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    '_build/css/styles.css': '_css/styles.scss'// 'destination': 'source'
                }
            }
        },
        watch: {
            sass: {
                files: ['_css/**.scss'],
                tasks: ['sass']
            },
            styles: {
                files: ['_build/css/styles.css'],
                tasks: ['autoprefixer']
            },
            scripts: {
                files: ['_js/**.js'],
                tasks: ['uglify']
            }
        }
    });
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
};