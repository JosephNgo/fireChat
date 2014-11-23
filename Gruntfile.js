module.exports = function(grunt) {

    grunt.registerTask( 'default', [ 'clean', 'browserify', 'sass', 'autoprefixer', 'copy', 'connect', 'watch'] );
    
    grunt.initConfig({
        browserify: {
            dist: {
                files: {
                    './dist/js/app.js': ['./app/scripts/app.js']
                }
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    './dist/css/style.css': './app/sass/style.scss'
                }
            }
        },

        autoprefixer: {
            dist: {
                files: {
                    './dist/css/style.css': './dist/css/style.css'
                }
            }
        },

        watch: {
            dist: {
                files: [ 
                    './app/scripts/**/*.js', 
                    './app/sass/**/*.scss', 
                    './app/pages/**/*.html', 
                    './app/templates/**/*.html', 
                    'Gruntfile.js'
                ],
                tasks: [ 'default' ]
            }
        },

        copy: {
            dist: {
                files: [{
                    expand: true,
                    src: [ './**/*.png', './**/*.jpg' ],
                    dest: './dist/images',
                    cwd: './app/assets/'
                }, {
                    expand: true,
                    src: [ './**/*.html' ],
                    dest: './dist',
                    cwd: './app/pages/'
                }, {
                    expand: true,
                    src: [ './**/*.html' ],
                    dest: './dist/templates',
                    cwd: './app/templates'
                }]
            }
        },

        connect: {
          server: {
            options: {
              port: 3000,
              hostname: 'localhost',
              base: './dist',
              useAvailablePort: true
            }
          }
        },

        clean: ['./dist']
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
};
