var map;
var marker;

function initMap() {
    var haightAshbury = {lat: 37.769, lng: -122.446};

    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: haightAshbury,
      mapTypeId: 'terrain'
    });

    map.addListener('click', function(event) {
      addMarker(event.latLng);
    });

    addMarker(haightAshbury);
}

function addMarker(location) {
    marker = new google.maps.Marker({
      position: location,
      map: map
    });
}

function deleteMarkers() {
    markers = null;
}