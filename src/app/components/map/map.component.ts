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

  floodLayer: TileLayer = new TileLayer({
    source: new TileWMS({
      url: 'https://sedac.ciesin.columbia.edu/geoserver/wms',
      params: { 'LAYERS': 'ndh:ndh-flood-hazard-frequency-distribution', 'TILED': true },
      serverType: 'geoserver',
      transition: 0,
    })
  });


  droughtLayer: TileLayer = new TileLayer({
    source: new TileWMS({
      url: 'https://sedac.ciesin.columbia.edu/geoserver/wms',
      params: { 'LAYERS': 'ndh:ndh-drought-hazard-frequency-distribution', 'TILED': true },
      serverType: 'geoserver',
      transition: 0,
    })
  });

  
  foodInsecurityLayer: TileLayer = new TileLayer({
    source: new TileWMS({
      url: 'https://sedac.ciesin.columbia.edu/geoserver/wms',
      params: { 'LAYERS': 'crop-climate:crop-climate-effects-climate-global-food-production', 'TILED': true },
      serverType: 'geoserver',
      transition: 0,
    })
  });


  socioEconomicLayer:TileLayer = new TileLayer({
    source: new TileWMS({
      url: 'https://sedac.ciesin.columbia.edu/geoserver/wms',
      params: { 'LAYERS': 'povmap:povmap-global-subnational-prevalence-child-malnutrition', 'TILED': true },
      serverType: 'geoserver',
      transition: 0,
    })
  });	

  public map!: Map

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

  addFloodLayer(event: any): void {
    this.floodLayer.setOpacity(0.6);
    if(event.target.checked){
      this.addLayer(this.floodLayer)
    }
    else {
      this.removeLayer(this.floodLayer)
    }
  }

  addDroughtLayer(event: any): void {
    this.droughtLayer.setOpacity(0.5);
    if(event.target.checked){
      this.addLayer(this.droughtLayer)
    }
    else {
      this.removeLayer(this.droughtLayer)
    }
  }

  addFoodInsecurityLayer(event: any): void {
    this.foodInsecurityLayer.setOpacity(0.5);
    if(event.target.checked){
      this.addLayer(this.foodInsecurityLayer)
    }
    else {
      this.removeLayer(this.foodInsecurityLayer)
    }
  }

  addSocioEconomicLayer(event: any): void {
    this.socioEconomicLayer.setOpacity(0.5);
    if(event.target.checked){
      this.addLayer(this.socioEconomicLayer)
    }
    else {
      this.removeLayer(this.socioEconomicLayer)
    }
  }

  addLayer(layer: TileLayer): Map {
    this.map.addLayer(layer)
    return this.map;
  }

  removeLayer(layer: TileLayer): Map {
    this.map.removeLayer(layer)
    return this.map;
  }
}