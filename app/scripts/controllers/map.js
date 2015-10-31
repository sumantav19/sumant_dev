'use strict';
var test = function(){
  console.log(this);
};

/**
 * @ngdoc function
 * @name yeomanTodeApp.controller:MainCtrl
 * @description
 * # MapCtrl
 * Controller of the yeomanTodeApp
 */
angular.module('yeomanTodeApp')
  .controller('MapCtrl', function ($scope,leafletData) {
    angular.extend($scope, {
        defaults: {
            scrollWheelZoom: false
        },
        center: {
          lat: 21.0000,
          lng: 78.0000,
          zoom: 5
        },
        markers : {
          ad1 : { lat : 17.459447 , lng : 78.369613 , clickable : true, title : 'I am ad',
                label: {
                            message: 'Ad1',
                            options: {
                                noHide: true
                            }
                      }}/*,

            ad2 : { lat : 17.459161 , lng : 78.368304},
            ad3 : { lat : 17.457892  , lng :78.369506 },
            ad4 : { lat : 17.457912 ,lng :  78.367424, }*/
        }        
    });
    $scope.getLocation = function () {
      leafletData.getMap('map').then(function(map) {
        var adwaletMap = map;
        adwaletMap.locate({setView : true , maxZoom : 15});
        L.marker([17.457912,78.367424] , {title : 'I am an add', clickable : true},{id : 1} ).addTo(adwaletMap).on('dblclick',test);
        //L.marker({lat :17.457912, lng :78.367424 } , clickable:true , title : "I am a add" ).addTo(adwaletMap);
        

          function onLocationFound(e) {
              // create a marker at the users "latlng" and add it to the map
              L.marker(e.latlng).addTo(adwaletMap);
              L.circle([e.latlng.lat,e.latlng.lng],1000).addTo(adwaletMap);
              
              console.log(L);
          }
        adwaletMap.on('locationfound', onLocationFound);
      });
    };
    
  });

