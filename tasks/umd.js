/* global module*/
'use strict';

module.exports = {
  lib: {
    src: ['lib/<%= pkg.name %>.js'],
    dest: 'dist/<%= pkg.name %>.umd.js',
    amdModuleId: '<%= pkg.name %>',
    objectToExport: 'Backbone.Injector',
    indent: '    ',
    deps: {
      default: ['Backbone', 'Wreqr'],
      amd: ['backbone', 'backbone.wreqr'],
      cjs: ['backbone', 'backbone.wreqr'],
      global: ['backbone', 'backbone.wreqr']
    }
  }
};
