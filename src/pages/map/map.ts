import { Component, ViewChild, ElementRef } from '@angular/core';
import { MapService } from './map-service';

@Component({
  templateUrl: 'map.html',
  providers: [MapService]
})

export class MapPage {
	@ViewChild('map') mapRef: ElementRef;

	constructor(private mapService: MapService) { }

	ionViewDidLoad() {
		this.mapService.init({ mapRef: this.mapRef });
	}
}