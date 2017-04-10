/*
 * testing-betty
 * https://github.com/ruimagro/betty
 *
 * Copyright (c) 2017 Rui Magro
 * Licensed under the MIT license.
 */

'use strict';


const exec = require('child_process').exec;

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('testing_betty', 'The best Grunt plugin ever.', function() {

      this.data.forEach(function(e) {
        grunt.log.writeln(e);

var exec = require('child_process').exec,
    pid,
    done = grunt.task.current.async(); // Tells Grunt that an async task is complete

    pid = exec('start https://google.com', 
    function(error, stdout, stderr){
        grunt.log.writeln('stdout: ' + stdout);
        grunt.log.writeln('stderr: ' + stderr);
        done(error); // Technique recommended on #grunt IRC channel. Tell Grunt asych function is finished. Pass error for logging; if operation completes successfully error will be null

      }
);

      });
   
    

    // // Merge task-specific and/or target-specific options with these defaults.
    // var options = this.options({
    //   punctuation: '.',
    //   separator: ', '
    // });

    // // Iterate over all specified file groups.
    // this.files.forEach(function(f) {
    //   // Concat specified files.
    //   var src = f.src.filter(function(filepath) {
    //     // Warn on and remove invalid source files (if nonull was set).
    //     if (!grunt.file.exists(filepath)) {
    //       grunt.log.warn('Source file "' + filepath + '" not found.');
    //       return false;
    //     } else {
    //       return true;
    //     }
    //   }).map(function(filepath) {
    //     // Read file source.
    //     return grunt.file.read(filepath);
    //   }).join(grunt.util.normalizelf(options.separator));

    //   // Handle options.
    //   src += options.punctuation;

    //   // Write the destination file.
    //   grunt.file.write(f.dest, src);

    //   // Print a success message.
    //   grunt.log.writeln('File "' + f.dest + '" created.');
    // });
  });

};
