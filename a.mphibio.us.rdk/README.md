A.mphibio.us CSS & HTML 5 Rapid Development Kit
===============================================

###A.mphibio.us is a front-end tool for rapid development of web application interfaces.

Get started fast with CSS best practices, a well-structured grid that makes mobile consideration easy, an organized file structure and super basic UI elements like lightly styled forms, buttons, tabs and more. Simple human readable code and shorthand classes makes coding a snap! Best used for building airplanes in the sky.

<<<<<<< HEAD
Leverages jQuery 1.11.1 and GruntJS

## Installation

## Installation

#Easy Install
Download the lastest RDK release and use as a webroot for you next 
=======
Leverages Node.js and Grunt

## Installation

Download the lastest RDK and move/rename it to be your working directory,
in a new terminal window change to your working directory

	cd /path/to/your/project
	
to install Grunt**  and the project's dependices in the same terminal window type in

	sudo npm install

While this is installing...
Open the package.json file in your working directory and edit the details of
your project including name, title, version, description, url and authour information.

The devDependencies section lists all the node-modules that you are currently installing
for this project you may add or remove as you wish.

The Grunt Tasks are configure in the gruntfile.js file, also at the root of your project.

Please refer to each modules instructions for configuration and options as they are all a little different. http://gruntjs.com/plugins

** requires NodeJS and GruntJS installed on your machine

#Node and Grunt Installation

If you are completely new grunt and think its weird we recommend reading this article by 
Chris Coyier http://24ways.org/2013/grunt-is-not-weird-and-hard/

Otherwise please refer to following resources to install

Node.js -> https://nodejs.org

Grunt -> http://gruntjs.com

#Grunt default tasks

When you type grunt into the same terminal window as above,
Grunt will perform the 'concat', 'uglify', 'cssmin' tasks as defined at the bottom of 'gruntfile.js' in the your projects root.

	grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
	
To run individual task (JShint for example) in the terminal window type

	grunt jshint
		
To run a portion of a set tasks you can for example concatinate only the css in terminal you would type

	grunt concat:css

or to concatinate the javascript

	grunt concat:js

##Easy Install

Download the lastest RDK release and use it as a webroot for your next 
>>>>>>> origin/master
front end project and start prototyping your html immediately, 
get to the browser in minutes.

#Github Project Installation

<<<<<<< HEAD
=======
$ git clone git://github.com/Treefrog-Inc/A.mphibio.us.git

https://github.com/Treefrog-Inc/A.mphibio.us

or if you are reading this on GitHub look right in the sidebar all kinds of options up there :)

>>>>>>> origin/master
## Authors

Authored by Clive Moore (clive@lassosoft.com) and Jonathan Guthrie (jono@lassosoft.com)

## License Information

All parts of A.mphibio.us are free to use and abuse under the open-source MIT license. The full licensing language can be found here: http://www.opensource.org/licenses/mit-license.php.
LassoSoft Inc (http://www.lassosoft.com), (http://a.mphibio.us).