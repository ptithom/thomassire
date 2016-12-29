




/*
     FILE ARCHIVED ON 23:47:20 nov. 4, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 0:02:49 nov. 25, 2016.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
function initialize() {
		var styles = {
			'monTheme': [
            {              
				featureType: 'all',
				stylers: [
					{saturation: -100},
					{gamma: 0.20}
				]
            }
        ]};	
		
		var citymap = {};
		/*citymap['paris'] = {
			center: new google.maps.LatLng(48.856614,2.352222),
			population: 934105
		};*/
		citymap['vendome'] = {
			center: new google.maps.LatLng(47.8,1.0667),
			population: 400000
		};
		
		citymap['blois'] = {
			center: new google.maps.LatLng(47.589,1.327),
			population:600000
		};
		
		citymap['tours'] = {
			center: new google.maps.LatLng(47.383,0.700),
			population: 600000
		};	
		
		citymap['lemans'] = {
			center: new google.maps.LatLng(48.00,0.10),
			population: 600000
		};
		
		citymap['angers'] = {
			center: new google.maps.LatLng(47.483,-0.533),
			population: 600000
		};
		
/*
		citymap['nantes'] = {
			center: new google.maps.LatLng(47.233,-1.583),
			population: 400000
		};	
		
		citymap['bordeaux'] = {
			center: new google.maps.LatLng(44.833,-0.567),
			population: 400000
		};
*/		
	
		var mapOptions = {
			zoom: 7,
			center: new google.maps.LatLng(47,2),
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			mapTypeId: 'monTheme',
			scrollwheel: false,
     		streetViewControl: false
		}
		var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
		var styledMapType = new google.maps.StyledMapType(styles['monTheme'], {name: 'monTheme'});
		map.mapTypes.set('monTheme', styledMapType);
		
		for (var city in citymap) {
			var populationOptions = {
				strokeColor: '#a54f53',
				strokeOpacity: 0.8,
				strokeWeight: 2,
				fillColor: '#a54f53',
				fillOpacity: 0.35,
				map: map,
				center: citymap[city].center,
				radius: citymap[city].population / 20
			};
			var cityCircle = new google.maps.Circle(populationOptions);
		}
		
}