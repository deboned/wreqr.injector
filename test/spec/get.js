/* global Backbone, afterEach */
describe('get', function () {
  'use strict';

  var user = {
    name: 'tobi',
    type: 'furet'
  };
  var depInjector = new Backbone.Wreqr.Injector();

  afterEach(function () {
    depInjector.removeAllHandlers();
  });

  it('should return an object', function () {
    var mock = function () {
      return user;
    };
    depInjector.setHandler('user', mock);

    depInjector.get('user').should.eql(user);
  });

  it('should return a function', function () {
    var world = function () {
      return 'world';
    };

    depInjector.setHandler('hello', function () {
      return world;
    });

    depInjector.get('hello').should.eql(world);
    depInjector.get('hello').should.be.type('function');
    depInjector.get('hello')().should.eql('world');
  });
});
