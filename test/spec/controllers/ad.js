'use strict';

describe('Controller: AdctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('yeomanTodeApp'));

  var AdctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdctrlCtrl = $controller('AdctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
