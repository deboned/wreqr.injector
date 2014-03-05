/* global module*/
'use strict';

module.exports = {
  lib: {
    src: ['lib/<%= pkg.name %>.js'],
    dest: 'dist/<%= pkg.name %>.umd.js',
    amdModuleId: '<%= pkg.name %>',
    objectToExport: 'Backbone.Wreqr.Injector',
    indent: '    ',
    deps: {
      default: ['Wreqr'],
      amd: ['backbone.wreqr'],
      cjs: ['backbone.wreqr'],
      global: ['Backbone.Wreqr']
    }
  }
};
