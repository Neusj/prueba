import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  
  public map: mapboxgl.Map | undefined;
  public style: string = 'mapbox://styles/mapbox/streets-v11';

  constructor() {}

  ngOnInit() {
    
    this.buildMap(); // Llama a la función buildMap() cuando se inicializa el componente
  }
  

  buildMap(){

    this.map = new mapboxgl.Map({
      accessToken: environment.MAPBOX_KEY,
      container: 'map', // ID del elemento HTML donde se renderizará el mapa
      style: this.style,
      zoom: 14,
      center: [-70.7488131, -33.4542901] // Longitud y latitud de Santiago, Chile
    });
  }
}
