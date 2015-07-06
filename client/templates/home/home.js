if (Meteor.isClient) {
  Meteor.startup(function() {
    GoogleMaps.load();
  });
}



Template.home.helpers({
  exampleMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      return {
        center: new google.maps.LatLng(-7.127605,112.3937185),
        zoom: 11
      };
    }
  }
  
});


Template.home.onCreated(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('exampleMap', function(map) {
    // Add a marker to the map once it's ready
                   var locations = [
                                    ['Sukorame', -7.344954,112.110199],
                                    ['Bluluk', -7.3014585,112.1256415],
                                    ['Ngimbang', -7.2967426,112.1936549],
                                    ['Sambeng', -7.289334,112.28577],
                                    ['Mantup', -7.27292,112.354698],
                                    ['Kembangbahu', -7.2083896,112.35756],
                                    ['Sugio', -7.18593,112.27823],
                                    ['Kedungpring', -7.1916677,112.199654],
                                    ['Modo', -7.2016595,112.1320051],
                                    ['Babat', -7.109076,112.209705],
                                    ['Pucuk', -7.091127,112.29506],
                                    ['Sukodadi', -7.112755,112.34011],
                                    ['Lamongan', -7.1228674,112.3941885],
                                    ['Tikung', -7.1888362,112.410303],
                                    ['Sarirejo', -7.1721341,112.4611965],
                                    ['Deket', -7.0957664,112.4586849],
                                    ['Glagah', -7.078613,112.5022179],
                                    ['Karangbinangun', -7.033743,112.4645379],
                                    ['Turi', -7.06851,112.3868205],
                                    ['Kalitengah', -7.0212931,112.393738],
                                    ['Karanggeneng', -6.997649,112.3715464],
                                    ['Sekaran', -7.051962,112.2746015],
                                    ['Maduran', -7.0050665,112.2715306],
                                    ['Laren', -6.978902,112.28871],
                                    ['Solokuro', -6.928627,112.3520349],
                                    ['Paciran', -6.8894135,112.374247],
                                    ['Brondong', -6.8827199,112.271004],
                                    
                                    ];
                   var infowindow = new google.maps.InfoWindow();
                   var marker, i;
/* kode untuk menampilkan banyak marker */
                   for (i = 0; i < locations.length; i++) {
                   marker = new google.maps.Marker({
                                                   position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                                                   map: map.instance,
                                                   //icon: 'grad-icon.png'
                                                   });
                   google.maps.event.addListener(marker, 'click', (function(marker, i) {
                                                                   return function() {
                                                                   infowindow.setContent(locations[i][0]);
                                                                   infowindow.open(map.instance, marker);
                                                                   }
                                                                   })(marker, i));
                   google.maps.event.addListener(infowindow, 'click', (function(infowindow, i) {
                                                                   return function() {
                                                                   
                                                                   }
                                                                   })(marker, i));
                   };

                   //var marker = new google.maps.Marker({
      //position: map.options.center,
      //map: map.instance
    //});
    navigator.geolocation.watchPosition(function (pos) {
       //Every time we get a new location from the gps, make a new marker on the map
        new google.maps.Marker({
           position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
           map: map.instance
       });
    }),
    
    function (err) {
       console.log("GPS ERROR", err);
    };
  });
});

