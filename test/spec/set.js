/* global Backbone, afterEach */

describe('set', function () {
  'use strict';

  var user = {
    name: 'tobi',
    type: 'furet'
  };

  var depInjector = new Backbone.Wreqr.Injector();

  afterEach(function () {
    depInjector.removeAllHandlers();
  });

  it('should record a handler with name', function () {
    depInjector.set('user', user);
    depInjector.getHandler('user').should.not.throw();
    depInjector.getHandler('user').should.be.type('function');
  });

  it('should provide a name/value pair which can be retrieved from get', function () {
    depInjector.set('user', user);
    depInjector.get('user').should.eql(user);
  });
});
