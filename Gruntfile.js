module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
  	  // define the files to lint
  	  files: ['js/scripts.js'],
  	  // configure JSHint (documented at http://www.jshint.com/docs/)
  	  options: {
  	      // more options here if you want to override JSHint defaults
  	    globals: {
  	      jQuery: true,
  	      console: true,
  	      module: true
  	    }
  	  }
  	},
    concat: {
//	  options: {
//	    // define a string to put between each file in the concatenated output
//	    separator: ';'
//	  },
	  dist: {
		    // the files to concatenate
		    src: ['js/lib/*.js','js/*.js'],
		    // the location of the resulting JS file
		    dest: 'dist/<%= pkg.name %>.js'
	  },
	  css: {
		    // the files to concatenate
		    src: ['css/lib/normalize.css','css/lib/main.css','css/lib/a.mphibio.us.css','css/skin/iOS5.css'],
		    // the location of the resulting CSS file
		    dest: 'dist/a.mphibio.us.css'
		  }
	},
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'dist/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    cssmin: {
        options: {
            banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */'
        },
        my_target: {
            src: 'dist/a.mphibio.us.css',
            dest: 'css/a.mphibio.us.min.css'
        }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-css');
  // Get Ready for SASS  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('css', ['cssmin']);

  grunt.registerTask('default', ['jshint','concat','uglify','cssmin']);

};