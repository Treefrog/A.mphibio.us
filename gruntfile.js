module.exports = function(grunt) {

	// Project configuration.
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		meta: {
			banner: '/*!\n' +
				' * <%= pkg.title %> v<%= pkg.version %>\n' +
				' * Copyright <%= grunt.template.today("yyyy") %>, <%= pkg.author.name %>\n' +
				' * <%= pkg.homepage %>\n' +
				' * This content is released under the <%= _.pluck(pkg.licenses, "type").join(", ") %> license<%= pkg.licenses.length === 1 ? "" : "s" %>\n' +
				' * <%= _.pluck(pkg.licenses, "url").join(", ") %>\n' +
				' * <%= grunt.template.today("dd-mm-yyyy") %>\n' +
				' */\n\n',
			microbanner: '/*! <%= pkg.name %> v<%= pkg.version %> | Copyright <%= grunt.template.today("yyyy") %>, <%= pkg.author.name %> | <%= pkg.homepage %> | <%= _.pluck(pkg.licenses, "url").join(", ") %> */\n'
		},
		
		jshint: {
			files:
			[
				'gruntfile.js',
				'js/scripts.js'
			]
		},
		
		concat: {
			options:
			{
				banner: '<%= meta.banner %>'
			},
			
			js:
			{
				src:
				[
					'src/js/avoid.console.errors.js',
					'src/js/jquery.scrollTo-1.4.13.js',
					'src/js/jquery.localScroll-1.3.5.js',
					'src/js/imagesloaded.pkgd.js',
					'src/js/picturefill.js'
				],
				dest:
					'js/plugins.js'
			},
			
			css:
			{
				src:
				[
					// Optional libraries
					
					// 'src/css/flexslider.css',
					// 'src/css/float_labels.css',
					// 'src/css/datatable.css',
					// 'src/css/tablesorter.css',
					// 'src/css/sequencejs-theme.sliding-horizontal-parallax.css',
					
					// Standard libraries
					
					'src/css/toc.css',
					'src/css/normalize.css',
					'src/css/h5bp.css',
					'src/css/typography.css',
					'src/css/pear.rs.css',
					'src/css/table_styles.css',
					'src/css/images.css',
					'src/css/messaging.css',
					'src/css/buttons.css',
					'src/css/tabs.css',
					'src/css/navigation.css',
					'src/css/socialnav.css',
					'src/css/progress_bars.css',
					'src/css/modals.css',
					'src/css/forms.css',
					'src/css/append_prepend.css',
					'src/css/custom_form_elements.css',
					'src/css/jquery_datepicker.css',
					'src/css/entypo.css',
					'src/css/helpers.css',
					'src/css/grid_sixteen.css',
					'src/css/always_fluid.css',
					'src/css/tablet_sixteen.css',
					'src/css/mobile_l_sixteen.css',
					'src/css/mobile_p_sixteen.css',
					'src/css/clearing.css',
					'src/css/tooltip.css',
					'src/css/print.css'
				],
				dest:
					'css/<%= pkg.name %>.css'
				
			}
		},
		
		uglify:
		{
			options:
			{
				banner: '<%= meta.microbanner %>'
			},
			
			build:
			{
				src: ['js/plugins.js', 'js/scripts.js'],
				dest: 'js/<%= pkg.name %>.js'
			}
			
		},
		
		cssmin:
		{
			options:
			{
				banner: '<%= meta.microbanner %>' ,
				shorthandCompacting: false,
				roundingPrecision: -1
			},
			
			target:
			{
				files:
				{
					'css/<%= pkg.name %>.min.css':
					
				[
					// Optional libraries
					
					// 'src/css/flexslider.css',
					// 'src/css/float_labels.css',
					// 'src/css/datatable.css',
					// 'src/css/tablesorter.css',
					// 'src/css/sequencejs-theme.sliding-horizontal-parallax.css',
					
					// Standard libraries
					
					'src/css/toc.css',
					'src/css/normalize.css',
					'src/css/h5bp.css',
					'src/css/typography.css',
					'src/css/pear.rs.css',
					'src/css/table_styles.css',
					'src/css/images.css',
					'src/css/messaging.css',
					'src/css/buttons.css',
					'src/css/tabs.css',
					'src/css/navigation.css',
					'src/css/socialnav.css',
					'src/css/progress_bars.css',
					'src/css/modals.css',
					'src/css/forms.css',
					'src/css/append_prepend.css',
					'src/css/custom_form_elements.css',
					'src/css/jquery_datepicker.css',
					'src/css/entypo.css',
					'src/css/helpers.css',
					'src/css/grid_sixteen.css',
					'src/css/always_fluid.css',
					'src/css/tablet_sixteen.css',
					'src/css/mobile_l_sixteen.css',
					'src/css/mobile_p_sixteen.css',
					'src/css/clearing.css',
					'src/css/tooltip.css',
					'src/css/print.css'
				]
				}
			}
		},
		
		watch:
		{
			files:['<%= concat.css.src %>'],
			tasks:['concat:css']
		},
		
		grunticon:
		{
			myIcons:
			{
				files:
				[{
					expand: true,
					cwd: 'svg',
					src: ['*.svg', '*.png'],
					dest: "css"
				}],
				options:
				{
					// Do something
				}
			}
		}
	});
	
	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-grunticon');

	// Default task(s).
	grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};