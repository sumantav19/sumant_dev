'use strict';

/**
 * @ngdoc function
 * @name yeomanTodeApp.controller:AdctrlCtrl
 * @description
 * # AdctrlCtrl
 * Controller of the yeomanTodeApp
 */
angular.module('yeomanTodeApp')

  .controller('AdCtrl', function ($scope) {
   
    
    $scope.nameStyle = 
    {'font-family' :'', 
      'font-size' : '15px',
       color: 'red',
       position : 'absolute',
       top : '50%',
       'left' : '50%',
       'transform': 'translate(-50%, -50%)',
       'text-align' : 'center'

    };

    $scope.pictureStyle = {
      opacity : 0.8,
      width : '100%',
      height : '50%'

    };

     $scope.myImage='';
    $scope.myCroppedImage='';

    var handleFileSelect=function(evt) {
      var file=evt.currentTarget.files[0];
      var reader = new FileReader();
      reader.onload = function (evt) {
        $scope.$apply(function($scope){
          $scope.myImage=evt.target.result;
        });
      };
      reader.readAsDataURL(file);
    };
    angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);
  });
