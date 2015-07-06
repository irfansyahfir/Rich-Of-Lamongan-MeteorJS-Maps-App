if (Meteor.isClient) {
    Meteor.startup(function() {
                   GoogleMaps.load();
                   });
}


Template.mapDirection.helpers({
                              exampleMapOptions: function() {
                              // Make sure the maps API has loaded
                              if (GoogleMaps.loaded()) {
                              // Map initialization options
                              return {
                              center: new google.maps.LatLng(-7.127605,112.3937185),
                              zoom: 10
                              };
                              }
                              }
                              
                              });

Template.mapDirection.onCreated(function() {
                                // We can use the `ready` callback to interact with the map API once the map is ready.
                                GoogleMaps.ready('exampleMap', function(map) {
                                                 // Add a marker to the map once it's ready
                                                 //var marker = new google.maps.Marker({
                                                 //position: map.options.center,
                                                 //map: map.instance
                                                 //});
                                                 
                                                 navigator.geolocation.watchPosition(function (pos) {
                                                                                     
                                                                                     //Every time we get a new location from the gps, make a new marker on the map
                                                                                     new google.maps.Marker({
                                                                                                            position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                                                                                                            map: map.instance,
                                                                                                            });
                                                                                     }),
                                                 
                                                 
                                                 function (err) {
                                                 console.log("GPS ERROR", err);
                                                 };
                                                 
                                                 });
                                });
Template.directionPage.rendered = function(){
    /*$(".button-click").on("click", function(e){
                       var data = $(".data-city").val();
                          calcRoute(data);
                          
    });
    var directionsDisplay;
    var directionsService = new google.maps.DirectionsService();
    var map;
    function calcRoute(data) {
        //var myLoc = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                                                     var start = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
                                                     var end = data;
                                                     var request = {
                                                     origin: start,
                                                     destination:end,
                                                     travelMode: google.maps.TravelMode.DRIVING
                                                     };
                                                     directionsService.route(request, function(response, status) {
                                                                             if (status == google.maps.DirectionsStatus.OK) {
                                                                             directionsDisplay.setDirections(response);
                                                                             }
                                                                             });
                                                     });
        }
        else {
            // Browser doesn't support Geolocation
            handleNoGeolocation(false);
        }
    }*/

};
