var travelPackage;

function initMap() {

   // Creating the map object
   var map = new google.maps.Map(document.getElementById('map'), {
      // Setting the centre in N533
      center: { lat: 57.118908, lng: -2.132849 },
      zoom: 10,
      mapTypeControlOptions: { mapTypeIds: [/*'roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map'*/] },
   });

   // Array with the map styling configuration
   var styledMapType = new google.maps.StyledMapType( [
         // Cities
         { elementType: 'geometry', stylers: [{color: '#27AE60'}] },
         { featureType: 'administrative', elementType: 'geometry.stroke', stylers: [{visibility: 'off'}] },
         { featureType: 'administrative.land_parcel', elementType: 'geometry.stroke', stylers: [{visibility: 'off'}] },
         { featureType: 'administrative.land_parcel', elementType: 'labels.text.fill', stylers: [{color: '#3498DB'}] },
         // Ground
         { featureType: 'landscape.natural', elementType: 'geometry', stylers: [{color: '#28B463'}] },
         // Points of interest
         { featureType: 'poi', elementType: 'geometry', stylers: [{color: '#27AE60'}] },
         { featureType: 'poi', elementType: 'labels.text.fill', stylers: [{visibility: 'off'}] },
         { featureType: 'poi.park', elementType: 'geometry.fill', stylers: [{color: '#28B463'}] },
         { featureType: 'poi.park', elementType: 'labels.text.fill', stylers: [{color: '#D4AC0D'}] },
         // Seas, Rivers and Lakes
         { featureType: 'water', elementType: 'geometry.fill', stylers: [{color: '#1A5276'}] },
         { featureType: 'water', elementType: 'labels.text.fill', stylers: [{color: '#ECF0F1'}] },
         { elementType: 'labels.text.fill', stylers:[ { color:'#ECF0F1'}] },
         { elementType: 'labels.text.stroke', stylers:[ { visibility:'off'}] },
         { featureType: 'administrative.land_parcel', stylers:[ { color:'#A6ACAF'}] },
         { featureType: 'administrative.neighborhood', stylers:[ { color:'#839192'}] },
         // Roads
         { featureType: 'road', stylers:[ {visibility:'off'}] },
   ], {name: 'Styled Map'});

   // Setting the map style
   map.mapTypes.set('styled_map', styledMapType);
   map.setMapTypeId('styled_map');

   // Creating the searchbox
   var input = document.getElementById('pac-input');
   var searchBox = new google.maps.places.SearchBox(input);

   // Listen for the event fired when the user selects a prediction and retrieve more details for that place.
   var markers = [];
   searchBox.addListener('places_changed', function() {
      // Get the place object
      var places = searchBox.getPlaces(places);
      //console.log(places);
      if (places.length == 0) {
         return;
      }

      // Clear out the old markers.
      markers.forEach(function(marker) {
         marker.setMap(null);
      });
      markers = [];

      // For each place, get the icon, name and location.
      var bounds = new google.maps.LatLngBounds();
      places.forEach(function(place) {

         // Create a marker for each place.
         markers.push(new google.maps.Marker({
            map: map,
            icon: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-48.png',
            title: place.name,
            position: place.geometry.location
         }));

         if (place.geometry.viewport) {
            // Only geocodes have viewport.
            bounds.union(place.geometry.viewport);
         } else {
            bounds.extend(place.geometry.location);
         }

         // Make the button available if there is none
         if($("#submitButton").length == 0) {
            $('#searchForm').append('<input type="submit" value="Give me the package!" id="submitButton">');
            $('#submitButton').hide();
            $('#submitButton').show(200);
            $('#placeObject').val( JSON.stringify(places) );
         }
      });
      map.fitBounds(bounds);
   });
}
