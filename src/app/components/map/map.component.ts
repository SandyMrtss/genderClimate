import { Component, OnInit } from '@angular/core';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import { OSM } from 'ol/source';
import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public map!: Map

  ngOnInit(): void {
    this.map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: 'map',
      view: new View({
        center: [0, 0],
        zoom: 2, maxZoom: 18,
      }),
    });
    this.addMyLayer();
  }

  addMyLayer(): void {
    this.map.addLayer(new TileLayer({
      source: new TileWMS({
        url: 'https://sedac.ciesin.columbia.edu/geoserver/wms',
        params: { 'LAYERS': 'crop-climate:crop-climate-effects-climate-global-food-production', 'TILED': true },
        serverType: 'geoserver',
        transition: 0,
      })
    }))
  }
}