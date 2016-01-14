/* jshint ignore:start */

'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Load grunt tasks and config automatically
  // Read: https://github.com/firstandthird/load-grunt-config
  require('load-grunt-config')(grunt, {
    postProcess: function(config){
      // Project settings
      config.yeoman = {
        // Configurable paths
        root: __dirname,
        src:  __dirname + '/src',
        test: __dirname + '/test',
        dist: __dirname + '/dist',
        examples: __dirname + '/examples',
        outputName: 'd3kit-gridmap'
      };
      return config;
    }
  });
};
