describe('myApp', function(){

  beforeEach(module('myApp'));

  it('In app.js, make sure to type var app = angular.module("myApp", []);', inject(function($controller) {
    expect(typeof $controller === 'function').toBe(true);
  }));

  
});