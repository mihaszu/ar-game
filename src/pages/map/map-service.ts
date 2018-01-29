import { 
	GoogleMaps,
	GoogleMap,
	GoogleMapsEvent,
	GoogleMapOptions,
	CameraPosition,
	MarkerOptions,
	Marker 
} from '@ionic-native/google-maps';

import { Injectable } from '@angular/core';

@Injectable()
export class MapService {
	static initialized;
	map: GoogleMap;

	constructor(private googleMaps: GoogleMaps) { }
	
	init(args) {
		let mapOptions: GoogleMapOptions = {
	      camera: {
	        target: {
	          lat: 43.0741904,
	          lng: -89.3809802
	        },
	        zoom: 18,
	        tilt: 30
	      }
	    };
	    
		this.map = this.googleMaps.create('map', mapOptions);

		this.map.one(GoogleMapsEvent.MAP_READY)
		.then(() => {			
		    this.map.addMarker({
		    	title: 'Ionic',
		    	icon: 'blue',
		    	animation: 'DROP',
		    	position: {
		    		lat: 43.0741904,
		         	lng: -89.3809802
		    	}
		    });
		});
	    // let marker = new google.maps.Marker({
	    //   position: uluru,
	    //   map: map
	    // });
	}
}