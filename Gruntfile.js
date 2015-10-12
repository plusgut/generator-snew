module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		snew: {
			options: {
				lib: 'dist/assets/vendor/snew.js',
				app: 'dist/assets/js/app.js'
			},
			app: {
				files: [
					{cwd: 'src/assets', src: '**/*.js'},
					{cwd: 'src/assets', src: '**/*.tp', template: true}
				]
			}
		},
		copy: {
			main: {
				files: [
					{expand: true, cwd: 'src/public', src: '*', dest: 'dist/', filter: 'isFile'},
					{expand: true, cwd: 'bower_components/requirejs/', src: 'require.js', dest: 'dist/assets/vendor', filter: 'isFile'},
					{expand: true, cwd: 'bower_components/lodash/', src: 'lodash.min.js', dest: 'dist/assets/vendor', filter: 'isFile'},
					{expand: true, cwd: 'bower_components/jquery/dist/', src: '*', dest: 'dist/assets/vendor', filter: 'isFile'},
					{expand: true, cwd: 'bower_components/tempart/', src: '*', dest: 'dist/assets/vendor', filter: 'isFile'}
				]
			}
		},
		clean: {
			dist: {
				src: ['dist/']
			}
		},
		watch: {
			scripts: {
				files: ['src/**/*', 'node_modules/grunt-snew/node_modules/snew/dist/*', 'node_modules/grunt-snew/node_modules/tempart/*.js'],
				tasks: ['default']
			}
		},
		http: {
			addRed: {
				options: {
					url: 'http://localhost:8080/addColor/red'
				}
			},
			removeRed: {
				options: {
					url: 'http://localhost:8080/removeColor/red'
				}
			},
			addGreen: {
				options: {
					url: 'http://localhost:8080/addColor/green'
				}
			},
			removeGreen: {
				options: {
					url: 'http://localhost:8080/removeColor/green'
				}
			},
			next: {
				options: {
					url: 'http://localhost:8080/next'
				}
			},
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', [
		// 'http:removeGreen',
		// 'http:addRed',
		// 'http:next',
		'clean',
		'copy',
		'snew',
		// 'http:removeRed',
		// 'http:addGreen',
		// 'http:next',
	]);
};
