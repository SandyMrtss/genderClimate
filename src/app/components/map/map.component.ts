import { Component, OnInit } from '@angular/core';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import { OSM } from 'ol/source';
import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public map!: Map

  constructor(private router: Router) { };

  ngOnInit(): void {
    this.map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        })
      ],
      target: 'map',
      view: new View({
        center: [0, 0],
        zoom: 2, maxZoom: 18,
      }),
    });
  }

  addMyLayer(): Map {
    this.map.addLayer(new TileLayer({
      source: new TileWMS({
        url: 'https://sedac.ciesin.columbia.edu/geoserver/wms',
        params: { 'LAYERS': 'gpw-v3:gpw-v3-population-density_2000', 'TILED': true },
        serverType: 'geoserver',
        transition: 0,
      })
    }))
    return this.map;
  }
}