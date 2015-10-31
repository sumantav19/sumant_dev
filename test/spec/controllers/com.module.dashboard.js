'use strict';

describe('Controller: ComModuleDashboardCtrl', function () {

  // load the controller's module
  beforeEach(module('yeomanTodeApp'));

  var ComModuleDashboardCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ComModuleDashboardCtrl = $controller('ComModuleDashboardCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
