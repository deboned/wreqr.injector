/*global module*/
'use strict';

module.exports = {
  options: {
    banner: '<%= banner %>'
  },
  dist: {
    src: '<%= concat.dist.dest %>',
    dest: 'dist/<%= pkg.name %>.min.js'
  },
  umd: {
    src: '<%= umd.lib.dest %>',
    dest: 'dist/<%= pkg.name %>.umd.min.js'
  }
};
