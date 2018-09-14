function init() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 39.904844,
      lng: 116.387819
    },
    zoom: 13,
    mapTypeId: 'roadmap'
  });

  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  google.maps.event.addDomListenerOnce(map, 'tilesloaded', function() {
    input.classList.remove('d-none');
    document.getElementById('weather').classList.remove('d-none');
    document.getElementById('weather-caption').classList.remove('d-none');
    loadWeather(map.getCenter());
  });

  map.addListener('center_changed', function() {
    loadWeather(map.getCenter());
  });

  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  var infowindow = new google.maps.InfoWindow();

  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    markers.forEach(function(marker) {
      marker.setMap(null);
    });

    markers = [];
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(12, 0),
        scaledSize: new google.maps.Size(25, 25)
      };

      var marker = new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location,
        animation: google.maps.Animation.DROP,
        anchorPoint: new google.maps.Point(0, 0)
      })

      google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
      });

      markers.push(marker);

      if (place.geometry.viewport) {
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
};

function loadWeather(center) {
  // var center = map.getCenter();
  $.simpleWeather({
    location: center.lat() + ',' + center.lng(),
    woeid: '',
    unit: 'c',
    success: function(weather) {
      html = '<div class="city">' + weather.city + '</div>';
      html += '<div class="main row"><div class="col-6 weather-conditon"><img src="img/weathericons/' + weather.code + '.svg"></div>';
      // html += '<div class="weather-conditon"><i class="icon-'+weather.code+'"></i></div>';
      html += '<div class="col-6 temperature">' + weather.temp + '&deg;' + weather.units.temp + '</div></div>';
      html += '<div class="other"><img class="dropicon" src="img/Droplet.svg"><span>' + weather.humidity + '%' + '</span><img class="windicon" src="img/Wind.svg"><span>' + weather.wind.speed + ' ' + weather.units.speed + '</span></div>';
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<div class="error">' + error + '</div>');
    }
  })
};

google.maps.event.addDomListener(window, 'load', init);
