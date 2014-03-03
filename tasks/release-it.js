/*global module*/
'use strict';

module.exports = {
  options: {
    commitMessage: 'bump version %s',
    tagName: '%s',
    tagAnnotation: 'Release %s',
    distRepo: 'git://github.com/stephanebachelier/backbone-injector.git',
    publish: true,
    buildCommand: 'grunt changelog'
  }
};
