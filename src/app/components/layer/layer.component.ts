import { Component } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import * as L from 'leaflet';

@Component({
  selector: 'app-layer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './layer.component.html',
  styleUrl: './layer.component.css'
})

export class LayerComponent {

  private markersLayer!: L.LayerGroup;

  public addMarkers(map: L.Map): L.Map {

    this.markersLayer = L.layerGroup().addTo(map);

    L.marker([7.8731, 80.7718]).addTo(this.markersLayer)
      .bindPopup('.');

    L.marker([30.211, -89.162]).addTo(this.markersLayer)
      .bindPopup('.');

    L.marker([13.736, 100.523]).addTo(this.markersLayer)
      .bindPopup('.');

    L.marker([1.286, 36.8219]).addTo(this.markersLayer)
      .bindPopup('.');

    const popupContent = `<div style="max-width: 200px; max-height: 200px; overflow-y: auto;"> 
    <h5> Bangladesh Floodings </h5> 
    <img src="/assets/img/bangladesh.JPG" style="width: 100%; height: auto;"/> 
    <p>In 1991, during cyclone disasters, 90% of the 140,000 people who died were women because they were not taught how to swim. </p> 
    </div>`;
    L.marker([23.68,90.35]).addTo(this.markersLayer).bindPopup(popupContent);

    return map;
  }


}